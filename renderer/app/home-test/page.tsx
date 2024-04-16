'use client'
import Link from 'next/link'
import OpenWorkspace from '../../components/OpenWorkspace'

const Page = () => {
	return (
		<div className=''>
			Home Page
			<Link href={'/'}>Home </Link>
			<OpenWorkspace />
		</div>
	)
}
export default Page
