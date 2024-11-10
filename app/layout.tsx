import '@mantine/core/styles.css';

import { Container } from '@mantine/core';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/header';
import authenticated from './auth/authenticated.action';
import Providers from './providers';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
});

export const metadata: Metadata = {
	title: 'DigiProc',
	description: 'DigiProc products app'
};

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const isAuth = await authenticated();

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5fbfc]`}>
				<Providers isAuth={isAuth}>
					<Header/>
					<Container>{children}</Container>
				</Providers>
			</body>
		</html>
	);
}
