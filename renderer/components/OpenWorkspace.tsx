import { FileType } from '../../main/helpers/types'

const OpenWorkspace = () => {
	return (
		<div>
			<button
				onClick={() => {
					window.api.OpenFile().then((res: FileType) => {
						window.api.SetWorkspace(res)
						window.api.GetWorkspace().then((res: FileType) => {
							console.log(res.fileName)
						})
					})
				}}
			>
				Open Workspace
			</button>
		</div>
	)
}

export default OpenWorkspace
