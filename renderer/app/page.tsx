'use client'
import React from 'react'
import OpenWorkspace from '../components/OpenWorkspace'
import CreateWorkspace from '../components/CreateWorkspace'
import { FileType } from '../components/helpers/types'

function Page() {
	return (
		<div className=''>
			<div className='w-screen h-screen flex flex-col justify-center items-center text-center'>
				<div className='flex flex-col'>
					<OpenWorkspace />
					<CreateWorkspace />
					<button
						onClick={() => {
							window.api.GetWorkspace().then((res: FileType) => {
								console.log(res.fullPath)
								window.fs
									.ReadFile(res.fullPath)
									.then((res) => {
										console.log(JSON.parse(res))
									})
									.catch((err) => {
										console.log(err)
									})
							})
						}}
					>
						Read
					</button>
				</div>
			</div>
		</div>
	)
}

export default Page
