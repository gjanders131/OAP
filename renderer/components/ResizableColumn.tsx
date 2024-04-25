'use client'

import { use, useContext, useEffect, useRef } from 'react'
import { ColumnContext } from './helpers/Context'
import { AssetColumnWidths } from './helpers/Store'

type ResizableColumnProps = {
	content?: string
	children?: React.ReactNode
	index: number
}

const ResizableColumn = ({
	content,
	children,
	index,
}: ResizableColumnProps) => {
	const resizerRef = useRef(null)
	let columnWidths = AssetColumnWidths((state) => state.columnWidths)
	const setColumnWidth = AssetColumnWidths((state) => state.setColumnWidth)

	useEffect(() => {
		const resizer = resizerRef.current
		resizer.addEventListener('mousedown', () => {
			StartResize()
		})

		const StartResize = () => {
			document.addEventListener('mousemove', Resize)
			document.addEventListener('mouseup', StopResize)
		}
		const Resize = (event) => {
			let splitArray = columnWidths.slice(0, index)
			let sumOfArray = splitArray.reduce((a, b) => a + b, 0)
			let newWidth = event.clientX - sumOfArray
			setColumnWidth(index, newWidth)
			columnWidths[index] = newWidth
			console.log(columnWidths)
		}
		const StopResize = () => {
			document.removeEventListener('mousemove', Resize)
			document.removeEventListener('mouseup', StopResize)
		}

		return () => {
			resizer.removeEventListener('mousedown', StartResize)
		}
	}, [])

	return (
		<div
			style={{ width: columnWidths[index] }}
			className='relative'
		>
			<div className='overflow-y-scroll mx-[10px] my-[5px]'>
				{content}
				{children}
			</div>
			<div
				ref={resizerRef}
				className='w-[10px] flex justify-center cursor-col-resize h-full absolute -right-[5px] top-0 z-50'
			>
				<div className='w-[1px] h-full bg-oap-200' />
			</div>
		</div>
	)
}

export default ResizableColumn
