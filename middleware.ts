import { NextRequest, NextResponse } from 'next/server';

const unauthorizedRoutes = ['/auth/login', '/auth/signup'];

export function middleware(request: NextRequest) {
	const auth = request.cookies.get('Auth')?.value;

	// If user is authenticated and tries to access login or signup page, redirect them to home page
	if (auth && unauthorizedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
