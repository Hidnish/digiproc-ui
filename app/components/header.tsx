import { Group, Box } from '@mantine/core';
import HeaderLogo from './header-logo';

export default function Header() {
	return (
		<Box className="w-screen">
			<header className="h-5 p-4">
				<Group justify="space-between" pb="xl" px="md">
					<HeaderLogo />
				</Group>
			</header>
		</Box>
	);
}
