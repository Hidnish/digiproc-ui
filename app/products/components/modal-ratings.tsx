import { useDisclosure } from '@mantine/hooks';
import { Button, Modal, Rating, Stack } from '@mantine/core';
import { startTransition, useContext, useState } from 'react';
import { AuthContext } from '@/app/auth/auth-context';
import { useRouter } from 'next/navigation';
import createRating from '../create-rating.action';
import { useFormState } from 'react-dom';

interface RatingsProps {
	children: React.ReactNode;
	productId: number;
}

export default function ModalRating({ children, productId }: RatingsProps) {
	const [opened, { open, close }] = useDisclosure(false);
	const router = useRouter();
	const isAuth = useContext(AuthContext);
	const [rating, setRating] = useState(0);
	const [state, formAction] = useFormState(createRating, { error: '' });

	const title = isAuth ? 'Leave you own rating:' : 'Please log in to submit a rating.';

	const handleRatingSubmit = () => {
		const formData = new FormData();
		formData.append('value', rating.toString());
		formData.append('productId', productId.toString());

		startTransition(() => {
			formAction(formData);
		});

		close();
	};

	return (
		<>
			<Modal opened={opened} onClose={close} title={title} centered>
				{isAuth ? (
					<Stack gap="md2" justify="center">
						<Rating value={rating} onChange={setRating} size="lg" className="m-auto" />
						<Button onClick={handleRatingSubmit} className="m-auto" type="submit">
							Submit Rating
						</Button>
					</Stack>
				) : (
					<div className="flex justify-center">
						<Button className="m-auto" onClick={() => router.push('/auth/login')}>
							Go to Login
						</Button>
					</div>
				)}
			</Modal>
			<div onClick={open} className="cursor-pointer">
				<div className="pointer-events-none">
					{children}
				</div>
			</div>
		</>
	);
}
