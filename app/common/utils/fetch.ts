import { cookies } from 'next/headers';
import { getErrorMessage } from './errors';
import { API_URL } from '../constants/constants';

const getHeaders = () => ({ Cookie: cookies().toString() });

export const post = async (path: string, formData: FormData) => {
	const res = await fetch(`${API_URL}/${path}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			...getHeaders()
		},
		body: JSON.stringify(Object.fromEntries(formData))
	});

	const parsedResult = await res.json();

	if (!res.ok) {
		return { error: getErrorMessage(parsedResult) };
	}

	return { error: '' };
};

export const get = async <T>(path: string) => {
	const res = await fetch(`${API_URL}/${path}`, {
		headers: { ...getHeaders() }
	});

	return res.json() as T;
};
