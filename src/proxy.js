import { NextResponse } from "next/server";

// Define your home page path
const HOME_PAGE = "/";

// Proxy to handle routing
export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/popular") {
    const url = request.nextUrl.clone();
    url.pathname = "/Popular";
    return NextResponse.redirect(url);
  }

  // List of valid paths (add your routes here)
  const validPaths = [
    "/",
    "/Popular",
    "/popular",
    "/shop",
    "/contact",
    "/pages",
    "/about",
    "/services",
    "/faq",
    "/blogs",
    "/shop-without-sidebar",
    "/Productdetails",
  ];

  // Check if the current path is valid
  const isValidPath =
    pathname === HOME_PAGE ||
    validPaths.some(
      (path) =>
        path !== HOME_PAGE &&
        pathname.toLowerCase().startsWith(path.toLowerCase())
    );

  // If path is not valid route, redirect to home
  const isInternalPath =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/@") ||
    pathname.includes(".");

  if (!isValidPath && !isInternalPath) {
    console.log("Proxy Redirect Attempt:", { pathname, isValidPath });
    const url = request.nextUrl.clone();
    url.pathname = HOME_PAGE;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

// Configure which routes to run proxy on
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|@.*|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js|tsx|jsx|ts|json)$).*)",
  ],
};
