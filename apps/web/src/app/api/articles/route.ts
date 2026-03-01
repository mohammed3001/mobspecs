import { NextResponse } from "next/server";
import { articles } from "../../../lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale");

  const items = locale ? articles.filter((article) => article.locale === locale) : articles;

  return NextResponse.json({ items, total: items.length });
}
