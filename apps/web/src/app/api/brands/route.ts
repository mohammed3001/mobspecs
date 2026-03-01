import { NextResponse } from "next/server";
import { brands } from "../../../lib/data";

export async function GET() {
  return NextResponse.json({ items: brands });
}
