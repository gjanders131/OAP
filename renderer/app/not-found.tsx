'use client'
import { useRouter } from 'next/navigation'

const NotFound = () => {
	const router = useRouter()
	return (
		<div className='w-screen h-screen flex flex-col justify-center items-center text-oap-200'>
			<div className=''>...How did you get here?</div>
			<button
				className='border-2 border-oap-200 m-2 p-2 rounded-lg hover:bg-oap-300 hover:text-oap-900'
				onClick={() => {
					window.api.GetWorkspace().then((res) => {
						if (res) {
							router.push('/asset-browser')
						} else {
							router.push('/')
						}
					})
				}}
			>
				Return Home
			</button>
		</div>
	)
}

export default NotFound
