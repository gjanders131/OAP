type Props = {
	boxWidth?: number
	children: React.ReactNode
}

const AdjustableBox = ({ children, boxWidth }: Props) => {
	return (
		<div className='w-[150px] overflow-y-scroll text-ellipsis border-r-[1px] border-r-oap-200 px-2 resize-x'>
			{children}
		</div>
	)
}

export default AdjustableBox
