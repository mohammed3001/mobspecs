import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@mobspecs/database";
import { cacheGet, cacheSet } from "../../../../lib/server/cache";
import { captureError } from "../../../../lib/server/error-monitoring";

export async function GET(request: NextRequest) {
  const brand = request.nextUrl.searchParams.get("brand");
  const key = `phones:v1:${brand ?? "all"}`;

  try {
    const cached = await cacheGet<unknown[]>(key);
    if (cached) {
      return NextResponse.json({ source: "cache", items: cached });
    }

    const items = await prisma.phoneModel.findMany({
      where: brand ? { brand: { slug: brand } } : undefined,
      include: { brand: true, reviews: true },
      take: 50,
      orderBy: { createdAt: "desc" }
    });

    await cacheSet(key, items, 180);

    return NextResponse.json({ source: "database", items });
  } catch (error) {
    captureError(error, "api/v1/phones");
    return NextResponse.json({ error: "Unable to fetch phones" }, { status: 500 });
  }
}
