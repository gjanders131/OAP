import { FileType } from './helpers/types'

const CreateWorkspace = () => {
	return (
		<button
			className='btn-large'
			onClick={() => {
				window.api.OpenDir().then((res: string) => {
					const newFile: FileType = {
						dirPath: res,
						fileName: 'OAPworkspace',
						ext: '.OAPworkspace',
						content: JSON.stringify({ WorkspaceName: 'MyProject' }),
					}
					window.fs.WriteFile(newFile).then((res) => {
						console.log(res)
						window.api.SetWorkspace(res)
					})
				})
			}}
		>
			Create Workspace
		</button>
	)
}

export default CreateWorkspace
