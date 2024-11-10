"use server";

import { redirect } from "next/navigation";
import { post } from "@/app/common/utils/fetch";
import { FormError } from "@/app/common/types/form-error.interface";

export default async function createRating(
	_formState: FormError,
	formData: FormData
) {
	const { error } = await post('rating', formData);

	if (error) return { error };

	redirect('/');
}