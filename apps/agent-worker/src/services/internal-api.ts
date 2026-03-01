import crypto from "node:crypto";

export async function publishViaInternalApi(payload: Record<string, unknown>): Promise<{ ok: boolean; status: number }> {
  const endpoint = process.env.INTERNAL_API_URL ?? "http://localhost:3000/api/internal/agent/publish";
  const secret = process.env.INTERNAL_API_HMAC_SECRET ?? "change-me";
  const body = JSON.stringify(payload);
  const signature = crypto.createHmac("sha256", secret).update(body).digest("hex");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-agent-signature": signature
      },
      body
    });

    return { ok: response.ok, status: response.status };
  } catch {
    return { ok: false, status: 503 };
  }
}
