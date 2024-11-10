import { Container, Grid } from '@mantine/core';
import getProducts from '@/app/get-products.action';
import Product from './product';

export default async function Products() {
	const products = await getProducts();

	return (
		<Container h="screen">
			<Grid id="product-grid" gutter={60} mt={200}>
				{products.map((product) => (
					<Product key={product.name} product={product} />
				))}
			</Grid>
		</Container>
	);
}
