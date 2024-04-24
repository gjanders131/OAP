'use client'

import Link from 'next/link'
import { Asset } from '../../components/helpers/types'
import { useEffect, useState } from 'react'
import AssetCard from '../../components/AssetCard'

const Page = () => {
	const [assets, setAssets] = useState<Asset[]>([])

	useEffect(() => {
		window.api.GetAssets().then((assetsRead: Asset[]) => {
			setAssets(assetsRead)
		})
	}, [])
	return (
		<div>
			<div>
				{assets.map((asset: Asset, index: number) => {
					return (
						<AssetCard
							key={index}
							asset={asset}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Page
