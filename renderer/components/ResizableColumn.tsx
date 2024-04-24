'use client'

import { use, useContext, useEffect, useRef } from 'react'
import { ColumnContext } from './helpers/Context'
import { AssetColumnWidths } from './helpers/Store'

const ResizableColumn = ({ content, index }) => {
	const { columnWidths, setColumnWidth } = AssetColumnWidths((state) => state)
	const resizerRef = useRef(null)

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
			className='flex justify-between'
		>
			{content}
			<div
				ref={resizerRef}
				className='w-[10px] flex justify-center cursor-col-resize'
			>
				<div className='w-[1px] h-full bg-oap-50' />
			</div>
		</div>
	)
}

export default ResizableColumn
