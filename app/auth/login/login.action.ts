"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { API_URL } from "@/app/common/constants/constants";
import { getErrorMessage } from "@/app/common/utils/errors";
import { FormError } from "@/app/common/types/form-error.interface";


export default async function login(
	_formState: FormError,
	formData: FormData
) {
	const result = await fetch(`${API_URL}/auth/login`, { 
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(Object.fromEntries(formData)) 
	});

	const parsedResult = await result.json();

	if (!result.ok) {
		return { error: getErrorMessage(parsedResult) };
	}

	setAuthCookie(result);
	redirect ('/')
}

const setAuthCookie = async (res: Response) => {
	const setCookieHeader = res.headers.get("Set-Cookie");
	if (setCookieHeader) {
		const token = setCookieHeader.split(';')[0].split('=')[1];

		cookies().set({
			name: 'Auth',
			value: token,
			secure: false, // set to true in PROD
			httpOnly: true,
			expires: new Date(jwtDecode(token).exp! * 1000) // convert to milliseconds
		})
	}
}