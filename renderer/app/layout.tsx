import { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
	title: 'Open Asset Publisher',
	description: 'Open Asset Publisher developed by Grant Anderson',
	authors: [{ name: 'Grant Anderson', url: 'gjaart131@gmail.com' }],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='bg-oap-1000 absolute'>
				{/* <div className='h-[22px] w-screen bg-oap-900'></div> */}
				<div className=''>{children}</div>
			</body>
		</html>
	)
}
