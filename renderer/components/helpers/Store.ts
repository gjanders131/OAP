import { create } from 'zustand'
import { produce } from 'immer'
import { immer } from 'zustand/middleware/immer'

interface ColumnWidthState {
	columnWidths: number[]
	setColumnWidth: (index: number, width: number) => void
}

export const AssetColumnWidths = create<
	ColumnWidthState,
	[['zustand/immer', never]]
>(
	immer((set) => ({
		columnWidths: Array(4).fill(window?.innerWidth / 4 || 250),
		setColumnWidth: (index: number, width: number) => {
			set((state) => {
				state.columnWidths[index] = width
			}, true)
		},
	}))
)

interface AssetStore {
	assetColumns: string[]
	addAssetColumn: (column: string) => void
	removeAssetColumn: (column: string) => void
	showAssetColumn: (column: string) => void
	hideAssetColumn: (column: string) => void
}

export const AssetStore = create<AssetStore, [['zustand/immer', never]]>(
	immer((set) => ({
		assetColumns: [
			'Asset Name',
			'Asset Path',
			'Source Files',
			'Export Files',
		],
		addAssetColumn: (column: string) => {
			set((state) => {
				state.assetColumns.push(column)
			})
		},
		removeAssetColumn: (column: string) => {
			set((state) => {
				state.assetColumns = state.assetColumns.filter(
					(col) => col !== column
				)
			})
		},
		showAssetColumn: (column: string) => {
			set((state) => {
				state.assetColumns.push(column)
			})
		},
		hideAssetColumn: (column: string) => {
			set((state) => {
				state.assetColumns = state.assetColumns.filter(
					(col) => col !== column
				)
			})
		},
	}))
)
