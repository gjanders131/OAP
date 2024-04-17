import { FileType } from '../../main/helpers/types'

const CreateWorkspace = () => {
	return (
		<button
			className='btn-large'
			onClick={() => {
				window.api.OpenDir().then((res: string) => {
					const newFile: FileType = {
						dirPath: res,
						fileName: 'OAPworkspace',
						ext: '.json',
						content: '{Hello There}',
					}
					window.fs.WriteFile(newFile).then((res) => {
						console.log(res)
					})
				})
			}}
		>
			Create Workspace
		</button>
	)
}

export default CreateWorkspace
