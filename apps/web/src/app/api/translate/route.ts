import { NextResponse } from "next/server";

type TranslatePayload = {
  sourceLang: "en" | "ar";
  targetLang: "en" | "ar";
  text: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as TranslatePayload;

  if (!body.text || body.sourceLang === body.targetLang) {
    return NextResponse.json({ translatedText: body.text ?? "" });
  }

  const translatedText =
    body.targetLang === "ar"
      ? `[ترجمة آلية] ${body.text}`
      : `[Auto-translated] ${body.text}`;

  return NextResponse.json({ translatedText });
}
