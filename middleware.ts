import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

/** Canonical Vercel hostname (matches the URL shared on your CV). */
const CANONICAL_VERCEL_HOST = "ayush-sid28-portfolio.vercel.app"

/** Legacy / duplicate project hostname — redirect to canonical. */
const LEGACY_VERCEL_HOST = "ayush28-portfolio.vercel.app"

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? ""
  if (host === LEGACY_VERCEL_HOST) {
    const url = request.nextUrl.clone()
    url.hostname = CANONICAL_VERCEL_HOST
    url.protocol = "https"
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * All paths except Next internals and common static assets
     */
    "/((?!_next/static|_next/image|_next/data|favicon.ico|.*\\.(?:svg|ico|png|jpg|jpeg|gif|webp|pdf)$).*)",
  ],
}
