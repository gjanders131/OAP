import { create } from 'zustand'
import { produce } from 'immer'

interface ColumnWidthState {
	columnWidths: number[]
	setColumnWidth: (index: number, width: number) => void
}

export const AssetColumnWidths = create<ColumnWidthState>((set) => ({
	columnWidths: Array(4).fill(window?.innerWidth / 4 || 250),
	setColumnWidth: (index, width) =>
		set(
			produce((state) => {
				state.columnWidths[index] = width
			})
		),
}))
