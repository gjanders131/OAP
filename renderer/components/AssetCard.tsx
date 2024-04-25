import { Asset } from './helpers/types'
import ResizableColumn from './ResizableColumn'

type Props = {
	asset: Asset
	// index: number
}

const AssetCard = ({ asset }: Props) => {
	return (
		<div
			// key={index}
			className='w-screen flex flex-row justify-left h-[30px] border-b-[1px] border-b-oap-200'
		>
			<ResizableColumn index={0}>{asset.name}</ResizableColumn>
			<ResizableColumn index={1}>{asset.dirPath}</ResizableColumn>
		</div>
	)
}

export default AssetCard
