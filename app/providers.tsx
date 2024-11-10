'use client';
import '@mantine/core/styles.css';

import { ReactElement } from 'react';
import { AuthContext } from './auth/auth-context';
import { createTheme, MantineProvider } from '@mantine/core';

interface ProviderProps {
	children: ReactElement[];
	isAuth: boolean;
}

const theme = createTheme({
	colors: {
		primary: [
			'#e2eaf0',
			'#c0cfde',
			'#9eb5cb',
			'#7d9ab8',
			'#5b80a5',
			'#3a6692',
			'#2f577d',
			'#244968',
			'#1a3a54',
			'#1a364c'
		]
	}
});

export default function Providers({ children, isAuth }: ProviderProps) {
	return (
		<AuthContext.Provider value={isAuth}>
			<MantineProvider theme={theme}>
				{children}
			</MantineProvider>
		</AuthContext.Provider>
	);
}
