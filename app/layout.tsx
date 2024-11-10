import '@mantine/core/styles.css';

import { Container, MantineProvider } from '@mantine/core';

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthContext } from './auth/auth-context';
import authenticated from './auth/authenticated.action';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DigiProc",
  description: "DigiProc products app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const isAuth = await authenticated();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
				<AuthContext.Provider value={isAuth}>
					<MantineProvider>
						<Container>
							{children}
						</Container>
					</MantineProvider>
				</AuthContext.Provider>
      </body>
    </html>
  );
}
