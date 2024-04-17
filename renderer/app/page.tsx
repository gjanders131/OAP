'use client'
import React from 'react'
import OpenWorkspace from '../components/OpenWorkspace'
import CreateWorkspace from '../components/CreateWorkspace'

function Page() {
	return (
		<div className=''>
			<div className='w-screen h-screen flex flex-col justify-center items-center text-center'>
				<div className='flex flex-col'>
					<OpenWorkspace />
					<CreateWorkspace />
				</div>
			</div>
		</div>
	)
}

export default Page
