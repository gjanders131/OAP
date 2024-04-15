import { IpcHandler, APIHandler, FSHandler } from '../main/preload'

declare global {
	interface Window {
		ipc: IpcHandler
		api: APIHandler
		fs: FSHandler
	}
}
