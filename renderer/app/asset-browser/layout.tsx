'use client'

import { useState } from 'react'
import ResizableColumn from '../../components/ResizableColumn'

const Layout = ({ children }) => {
	const [sections, setSections] = useState<string[]>([
		'Asset Name',
		'Asset Path',
		'Source Files',
		'Export Files',
	])

	return (
		<div>
			<div className='flex flex-row justify-stretch border-b-[1px] border-oap-200 sticky'>
				{sections.map((section, index) => {
					return (
						<ResizableColumn
							content={section}
							index={index}
						/>
					)
				})}
			</div>
			<div>{children}</div>
		</div>
	)
}

export default Layout
