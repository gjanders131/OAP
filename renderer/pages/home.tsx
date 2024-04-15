import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import OpenWorkspace from '../components/OpenWorkspace'
import CreateWorkspace from '../components/CreateWorkspace'

export default function HomePage() {
	const [message, setMessage] = React.useState('No message found')
	const [filePath, setFilePath] = React.useState('No file path found')

	React.useEffect(() => {}, [])

	return (
		<React.Fragment>
			<Head>
				<title>Home - Nextron (with-tailwindcss)</title>
			</Head>
			<div className='grid grid-col-1 text-2xl w-full text-center'>
				<div>
					<Image
						className='ml-auto mr-auto'
						src='/images/logo.png'
						alt='Logo image'
						width='256'
						height='256'
					/>
				</div>
				<span>⚡ Electron ⚡</span>
				<span>+</span>
				<span>Next.js</span>
				<span>+</span>
				<span>tailwindcss</span>
				<span>=</span>
				<span>💕 </span>
			</div>
			<OpenWorkspace />
			<CreateWorkspace />
			<div className='mt-1 w-full flex-wrap flex justify-center'>
				<Link href='/next'>
					<div className='btn-blue'>Go to next page</div>
				</Link>
			</div>
		</React.Fragment>
	)
}
