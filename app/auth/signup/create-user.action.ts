"use server";

import { post } from "@/app/common/utils/fetch";
import { FormError } from "@/app/common/types/form-error.interface";
import { redirect } from "next/navigation";

export default async function createUser(
	_formState: FormError,
	formData: FormData
) {
	const { error } = await post('users', formData);

	if (error) return { error };

	redirect('/auth/login')
}