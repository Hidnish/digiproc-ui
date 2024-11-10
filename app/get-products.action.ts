'use server';

import { get } from "./common/utils/fetch";
import { Product } from "./products/types/product.interface";

export default async function getProducts() {
	return get<Product[]>('products');
}