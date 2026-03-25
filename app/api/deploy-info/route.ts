import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const revalidate = 0

/**
 * JSON snapshot of what Vercel injected at build/runtime.
 * Open https://yoursite.com/api/deploy-info to verify production matches GitHub.
 */
export async function GET() {
  return NextResponse.json(
    {
      commit: process.env.VERCEL_GIT_COMMIT_SHA ?? null,
      ref: process.env.VERCEL_GIT_COMMIT_REF ?? null,
      vercelEnv: process.env.VERCEL_ENV ?? null,
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  )
}
