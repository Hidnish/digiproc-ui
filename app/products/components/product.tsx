'use client';

import { Badge, Box, Button, Card, Grid, Rating, Stack, Text, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import { Product as ProductI } from '../types/product.interface';
interface ProductProps {
	product: ProductI;
}

export default function Product({ product }: ProductProps) {
	const theme = useMantineTheme()
	const formattedPrice = new Intl.NumberFormat('fr-FR').format(product.price);

	return (
		// had to add Grid.col here because is not compatible with SSR
		<Grid.Col span={{ base: 12, md: 6, lg: 4 }} className="flex justify-center">
			<Card
				padding={0}
				radius="md"
				className="w-full max-w-sm"
				style={{ 
					boxShadow: '0px 100px 90px 0px rgba(0,0,0,0.15)'
				}}
			>
				<Box className="relative w-full h-64">
					<Badge
						color="white"
						size="xl"
						variant="filled"
						className="bottom-2 right-2 absolute z-10"
					>
						<Text 
							c={theme.colors.primary[9]}
							style={{ fontWeight: 'bold' }}
						>
							{formattedPrice} SEK
						</Text>
					</Badge>

					<Image
						layout="fill"
						objectFit="cover"
						src={product.image_url}
						alt="product image"
					/>
				</Box>

				<Box className="p-4">
					<Text
						size="lg"
						mt="md"
						c={product.color}
						style={{ fontWeight: 'bold ', textAlign: 'center' }}
					>
						{product.name}
					</Text>

					<Stack mt="xs" justify="center">
						<Text 
							className="text-center"
							size="sm"
							c={theme.colors.primary[9]}
						>
							Ratings
						</Text>
						<Rating className="m-auto" value={product.rating} readOnly />
					</Stack>

					<Button fullWidth h={50} mt="xl" radius="md" color={product.color}>
						ADD TO CART
					</Button>
				</Box>
			</Card>
		</Grid.Col>
	);
}
