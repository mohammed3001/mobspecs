import { NextResponse } from "next/server";
import { phones } from "../../../lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const brand = searchParams.get("brand");

  const items = brand ? phones.filter((phone) => phone.brandSlug === brand) : phones;

  return NextResponse.json({ items, total: items.length });
}
