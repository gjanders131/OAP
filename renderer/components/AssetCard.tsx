import { Asset } from './helpers/types'
import AdjustableBox from './AdjustableBox'

type Props = {
	asset: Asset
	sectionWidths?: number[]
	// index: number
}

const AssetCard = ({ asset, sectionWidths }: Props) => {
	return (
		<div
			// key={index}
			className='w-screen flex flex-row justify-left h-[30px] border-b-[1px] border-b-oap-200'
		>
			<AdjustableBox>{asset.name}</AdjustableBox>
			<AdjustableBox>{asset.dirPath}</AdjustableBox>
		</div>
	)
}

export default AssetCard
