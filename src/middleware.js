import { NextResponse } from "next/server";

// Define your home page path
const HOME_PAGE = "/";

// Middleware to handle routing
export function middleware(request) {
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

  console.log("Middleware Check:", { pathname, isValidPath });

  // If path is not valid route, redirect to home
  if (
    !isValidPath &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api") &&
    !pathname.includes(".")
  ) {
    console.log("Redirecting to Home from:", pathname);
    // const url = request.nextUrl.clone();
    // url.pathname = HOME_PAGE;
    // return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
