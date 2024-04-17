import React from 'react'
import CreateWorkspace from './CreateWorkspace'
import OpenWorkspace from './OpenWorkspace'
import ButtonLarge from './ButtonLarge'

const WorkspaceSelect = () => {
	return (
		<ButtonLarge>
			<h1>Workspace Select</h1>
			<div className='flex justify-center flex-col content-center'>
				<OpenWorkspace />
				<CreateWorkspace />
			</div>
		</ButtonLarge>
	)
}

export default WorkspaceSelect
