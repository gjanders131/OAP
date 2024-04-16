import React from 'react'
import CreateWorkspace from './CreateWorkspace'
import OpenWorkspace from './OpenWorkspace'

const WorkspaceSelect = () => {
	return (
		<div>
			<h1>Workspace Select</h1>
			<div className='flex justify-center flex-col content-center'>
				<OpenWorkspace />
				<CreateWorkspace />
			</div>
		</div>
	)
}

export default WorkspaceSelect
