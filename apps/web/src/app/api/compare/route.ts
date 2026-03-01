import { NextResponse } from "next/server";
import { phones } from "../../../lib/data";

type ComparePayload = {
  phoneIds: string[];
};

export async function POST(request: Request) {
  const body = (await request.json()) as ComparePayload;
  const matched = phones.filter((phone) => body.phoneIds.includes(phone.id));

  if (matched.length < 2) {
    return NextResponse.json({ error: "At least 2 valid phones required." }, { status: 400 });
  }

  return NextResponse.json({ comparison: matched });
}
