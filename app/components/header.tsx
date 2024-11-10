import { Group, Box } from '@mantine/core';
import HeaderAuth from './header-auth';
import logout from '../auth/logout.action';
import HeaderLogo from './header-logo';

export default function Header() {
	return (
		<Box className="w-screen">
			<header className="h-5 p-4">
				<Group justify="space-between" pb="xl" px="md">
					<HeaderLogo />
					<HeaderAuth logout={logout}/>
				</Group>
			</header>
		</Box>
	);
}
