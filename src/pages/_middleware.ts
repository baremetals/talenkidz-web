import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, event: NextFetchEvent) {
  
    // const token = req.headers.get('Authorization');
//   const isLoggedIn = validateToken(token);

    // localStorage.setItem('jwt', '')
    // localStorage.getItem('token');
    // Cookies.setItem('token', 'token')
  // if (isLoggedIn) {
  //     return new Response('Access granted!')
  // } else {
  //     return event.respondWith(NextResponse.redirect('/login'))
  // }
}
