'use client'

import {
	MutableRefObject,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'
import ResizableColumn from '../../components/ResizableColumn'
import { ColumnContext } from '../../components/helpers/Context'

const Layout = ({ children }) => {
	const [sectionWidths, setSectionWidths] = useState<number[]>(
		Array(4).fill(innerWidth / 4)
	)

	const [sections, setSections] = useState<string[]>([
		'Asset Name',
		'Asset Path',
		'Source Files',
		'Export Files',
	])

	return (
		<div>
			<div className='flex flex-row justify-stretch'>
				<ColumnContext.Provider
					value={{ sectionWidths, setSectionWidths }}
				>
					{sections.map((section, index) => {
						return (
							<ResizableColumn
								content={section}
								index={index}
							/>
						)
					})}
				</ColumnContext.Provider>
			</div>
			<div>{children}</div>
		</div>
	)
}

export default Layout
