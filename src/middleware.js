import { createMiddleware } from "@arcjet/next";
import { NextResponse } from "next/server";
import aj from "./lib/arcjet";
import { verifyAuth } from "./lib/auth";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|healthz).*)"],
};

const arcjetMiddleware = createMiddleware(aj);

export async function middleware(request) {
  const arcjetResponse = await arcjetMiddleware(request);
  let response = NextResponse.next();

  // protected routes list
  const protectedRoutes = ["/"];

  const isProtectedRoute = protectedRoutes.some(
    (route) =>
      request.nextUrl.pathname === route ||
      request.nextUrl.pathname.startsWith(route + "/"),
  );

  if (isProtectedRoute) {
    const token = request.cookies.get("token")?.value;
    const user = token ? await verifyAuth(token) : null;

    if (!user) {
      if (request.nextUrl.pathName !== "/login") {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("form", request.nextUrl.pathName);
        response = NextResponse.redirect(loginUrl);
      }
    }
  }

  if (arcjetResponse?.headers) {
    arcjetResponse.headers.forEach((value, key) => {
      response.headers.set(key, value);
    });
  }

  if (arcjetResponse && arcjetResponse.status !== 200) {
    return arcjetResponse;
  }
  return response;
}
