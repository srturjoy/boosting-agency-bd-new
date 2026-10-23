import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export const dynamic = "force-static"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "site-knowledge.json")
    const raw = fs.readFileSync(filePath, "utf-8")
    const data = JSON.parse(raw)
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    })
  } catch {
    return NextResponse.json(
      { error: "Site knowledge resource unavailable" },
      { status: 500 }
    )
  }
}
