import path from 'path'
import { Menu, app, dialog, ipcMain, session, shell } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import { FileType } from './helpers/types'
import fs from 'fs'

const isProd = process.env.NODE_ENV === 'production'
let port = isProd ? 0 : process.argv[2]
let BaseURL: string = isProd ? 'app://.' : `http://localhost:${port}`
let Workspace: FileType

if (isProd) {
	serve({ directory: 'build' })
} else {
	app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
	await app.whenReady()
	const mainWindow = createWindow('main', {
		width: 1000,
		height: 600,
		webPreferences: {
			// sandbox: true,
			preload: path.join(__dirname, 'preload.js'),
		},
	})

	await mainWindow.loadURL(`${BaseURL}/`)
	if (!isProd) {
		mainWindow.webContents.openDevTools()
	}
})()

app.on('window-all-closed', () => {
	app.quit()
})

ipcMain.on('message', async (event, arg) => {
	event.reply('message', `${arg} World!`)
})

// Base URL
ipcMain.handle('BaseURL', () => {
	return BaseURL
})

// Dialogue
ipcMain.handle('dialog:openDir', async () => {
	const { canceled, filePaths } = await dialog.showOpenDialog({
		properties: ['openDirectory'],
		defaultPath: Workspace ? Workspace.dirPath : app.getPath('documents'),
	})
	if (!canceled) {
		return filePaths[0]
	} else {
		return canceled
	}
})

ipcMain.handle('dialog:openFile', async () => {
	const dialogOptions: Electron.OpenDialogOptions = {
		filters: [{ name: 'JSON', extensions: ['json'] }],
		properties: ['openFile'],
		defaultPath: Workspace ? Workspace.dirPath : app.getPath('documents'),
	}
	const { canceled, filePaths } = await dialog.showOpenDialog(dialogOptions)
	if (!canceled) {
		const file: FileType = {
			fullPath: filePaths[0],
			dirPath: path.dirname(filePaths[0]),
			fileName: path.basename(filePaths[0]),
			ext: path.extname(filePaths[0]),
		}
		return { file, canceled }
	} else {
		return { undefined, canceled }
	}
})

ipcMain.handle('dialog:messsageBox', async (event, arg) => {
	const { response } = await dialog.showMessageBox(arg)
	return response
})

ipcMain.handle('api:SetWorkspace', async (event, arg) => {
	Workspace = arg
})

ipcMain.handle('api:GetWorkspace', async (event, arg) => {
	return Workspace
})

ipcMain.handle('api:GetUserSettings', async (event, arg) => {
	let path: string = app.getPath('userData')
	fs.stat(`${path}/settings.json`, (err, stats) => {
		if (err) {
			fs.writeFileSync(`${path}/settings.json`, JSON.stringify({}))
		}
	})
	return `${path}/settings.json`
})

// Shell
ipcMain.handle('shell:ShowInFolder', async (event, arg) => {
	shell.showItemInFolder(arg)
})

ipcMain.handle('shell:OpenFile', async (event, arg) => {
	shell.openPath(arg)
})

ipcMain.handle('shell:Beep', async () => {
	shell.beep()
})

// File System
ipcMain.handle('fs:GetFiles', async (event, arg) => {
	const files = fs.readdirSync(arg, { withFileTypes: true, recursive: true })
	return files
})

ipcMain.handle('fs:WriteFile', async (event, arg) => {
	const dirPath: string = arg.dirPath
	const fileName: string = arg.fileName
	const content: string = arg.content
	const ext: string = arg.ext
	const fullFileName: string = `${fileName}${ext}`
	const filePath: string = path.join(dirPath, fullFileName)

	const file: FileType = {
		fullPath: filePath,
		dirPath: dirPath,
		fileName: fileName,
		ext: ext,
		content: content,
	}
	fs.writeFileSync(filePath, content)
	return file
})

ipcMain.handle('fs:ReadFile', async (event, arg) => {
	const path: string = arg[0]
	return fs.readFileSync(path, 'utf-8')
})

ipcMain.handle('fs:CheckIsDir', async (event, arg) => {
	const stats = fs.statSync(arg)
	return stats.isDirectory()
})
