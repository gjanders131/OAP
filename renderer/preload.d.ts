import { IpcHandler, APIHandler, FSHandler, Versions } from '../main/preload'

declare global {
	interface Window {
		ipc: IpcHandler
		api: APIHandler
		fs: FSHandler
		versions: Versions
	}
}
