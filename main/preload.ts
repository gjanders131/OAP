import {
	contextBridge,
	ipcRenderer,
	IpcRendererEvent,
	MessageBoxOptions,
} from 'electron'
import { WriteFileOptions } from 'fs'
import { FileType } from './helpers/types'

const handler = {
	send(channel: string, value: unknown) {
		ipcRenderer.send(channel, value)
	},
	on(channel: string, callback: (...args: unknown[]) => void) {
		const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
			callback(...args)
		ipcRenderer.on(channel, subscription)

		return () => {
			ipcRenderer.removeListener(channel, subscription)
		}
	},
}

contextBridge.exposeInMainWorld('ipc', handler)

// API
const apiHandler = {
	OpenDir: () => ipcRenderer.invoke('dialog:openDir'),
	OpenFile: () => ipcRenderer.invoke('dialog:openFile'),
	MessageBox: (options: MessageBoxOptions) =>
		ipcRenderer.invoke('dialog:messsageBox', options),
	GetBase: () => ipcRenderer.invoke('api:BaseURL'),
	SetWorkspace: (workspace: FileType) =>
		ipcRenderer.invoke('api:SetWorkspace', workspace),
	GetWorkspace: () => ipcRenderer.invoke('api:GetWorkspace'),
	GetUserSettings: () => ipcRenderer.invoke('api:GetUserSettings'),
}
contextBridge.exposeInMainWorld('api', apiHandler)

// File System
const fsHandler = {
	GetFiles: (path: string) => ipcRenderer.invoke('fs:GetFiles', path),
	WriteFile: (newFile: FileType, options: WriteFileOptions) =>
		ipcRenderer.invoke('fs:WriteFile', newFile, options),
	ReadFile: (path: string) => ipcRenderer.invoke('fs:ReadFile', path),
	CheckIsDir: (path: string) => ipcRenderer.invoke('fs:CheckIsDir', path),
}
contextBridge.exposeInMainWorld('fs', fsHandler)

// Shell
contextBridge.exposeInMainWorld('shell', {
	ShowInFolder: (fullPath: string) =>
		ipcRenderer.invoke('shell:ShowInFolder', fullPath),
	OpenFile: (path: string) => ipcRenderer.invoke('shell:OpenFile', path),
	Beep: () => ipcRenderer.invoke('shell:Beep'),
})

// Open Window
contextBridge.exposeInMainWorld('window', {
	Open: (url: string) => window.open(url),
})

// Version Info
const versions = {
	node: () => process.versions.node,
	chrome: () => process.versions.chrome,
	electron: () => process.versions.electron,
}

contextBridge.exposeInMainWorld('versions', versions)

export type IpcHandler = typeof handler
export type APIHandler = typeof apiHandler
export type FS = typeof fsHandler
export type Versions = typeof versions
