import { FileType } from './helpers/types'
import { useRouter } from 'next/navigation'

const OpenWorkspace = () => {
	const router = useRouter()
	return (
		<button
			className='btn-large'
			onClick={() => {
				window.api
					.OpenFile()
					.then((res: { file: FileType; canceled: Boolean }) => {
						if (res.canceled) return
						window.api.SetWorkspace(res.file)
						window.api.GetWorkspace().then((res: FileType) => {
							router.push('/asset-browser')
							return
						})
					})
			}}
		>
			Open Workspace
		</button>
	)
}

export default OpenWorkspace
