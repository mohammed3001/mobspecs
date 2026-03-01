import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { captureError } from "../../../../../lib/server/error-monitoring";
import { log } from "../../../../../lib/server/logger";

type PublishRequest = {
  type: "article" | "review" | "phoneUpdate" | "seoPatch";
  locale: "en" | "ar";
  payload: Record<string, unknown>;
};

function verifySignature(body: string, signature: string | null): boolean {
  if (!signature) return false;
  const secret = process.env.INTERNAL_API_HMAC_SECRET ?? "change-me";
  const expected = crypto.createHmac("sha256", secret).update(body).digest("hex");
  const expectedBuffer = Buffer.from(expected, "utf8");
  const signatureBuffer = Buffer.from(signature, "utf8");

  if (expectedBuffer.length !== signatureBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(expectedBuffer, signatureBuffer);
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-agent-signature");

  try {
    if (!verifySignature(rawBody, signature)) {
      return NextResponse.json({ error: "Invalid agent signature" }, { status: 401 });
    }

    const body = JSON.parse(rawBody) as PublishRequest;
    if (!body.type || !body.locale || !body.payload) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    log("info", "Agent publish accepted", {
      type: body.type,
      locale: body.locale,
      keys: Object.keys(body.payload)
    });

    return NextResponse.json({ accepted: true, queued: true });
  } catch (error) {
    captureError(error, "api/internal/agent/publish");
    return NextResponse.json({ error: "Publish failed" }, { status: 500 });
  }
}
