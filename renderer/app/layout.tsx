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
			<body className=''>{children}</body>
		</html>
	)
}
