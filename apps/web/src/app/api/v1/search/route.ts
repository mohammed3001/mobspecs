import { NextRequest, NextResponse } from "next/server";
import { searchPhones } from "../../../../lib/server/search";
import { captureError } from "../../../../lib/server/error-monitoring";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") ?? "";

  if (!q.trim()) {
    return NextResponse.json({ items: [] });
  }

  try {
    const items = await searchPhones(q);
    return NextResponse.json({ items, query: q });
  } catch (error) {
    captureError(error, "api/v1/search", { query: q });
    return NextResponse.json({ error: "Search unavailable" }, { status: 503 });
  }
}
