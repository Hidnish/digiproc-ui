'use client';

import { Text } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function HeaderLogo() {
	const router = useRouter();

	return (
		<div className="cursor-pointer" onClick={() => router.push('/')}>
			<Text fw={900}>
				DigiProc
			</Text>
		</div>
	);
}
