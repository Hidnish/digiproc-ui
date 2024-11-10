'use client';

import { UnstyledButton, Group, Menu, Button, useMantineTheme } from '@mantine/core';
import { IconLogout, IconChevronDown, IconUser } from '@tabler/icons-react';
import { useContext } from 'react';
import { AuthContext } from '../auth/auth-context';
import { useRouter } from 'next/navigation';

interface HeaderProps {
	logout: () => Promise<void>;
}

export default function HeaderAuth({ logout }: HeaderProps) {
	const isAuth = useContext(AuthContext);
	const router = useRouter();
	const theme = useMantineTheme();

	const onLogout = async () => {
		await logout();
	}

	return (
		<>
			{isAuth ? (
				<Menu
					width={260}
					position="bottom-end"
					transitionProps={{ transition: 'pop-top-right' }}
					withinPortal
				>
					<Menu.Target>
						<UnstyledButton>
							<Group gap={7}>
								<IconUser stroke={1.5}/>
								<IconChevronDown stroke={1.5} />
							</Group>
						</UnstyledButton>
					</Menu.Target>
					<Menu.Dropdown>
						<Menu.Item 
							leftSection={<IconLogout stroke={1.5} />}
							onClick={onLogout}
						>
							Logout
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			) : (
				<Button 
					size="md" 
					variant="outline" 
					color={theme.colors.primary[9]}
					onClick={() => router.push('/auth/login')}
				>
					Log in
				</Button>
			)}
		</>
	);
}
