import { Dirent } from 'fs'

export type FileType = {
	fullPath?: string
	dirPath: string
	fileName: string
	ext: string
	content?: string
}

export type FilePaths = {
	dirs: Dirent[]
	files: Dirent[]
}

export type Asset = {
	name: string
	dirPath: string
	children?: { assetDirs: Dirent[]; assetFiles: Dirent[] }
}
