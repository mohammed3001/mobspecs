import { NextResponse } from "next/server";
import { checkDependencies } from "../../../../lib/server/monitoring";

export async function GET() {
  const services = await checkDependencies();
  const ok = Object.values(services).every((status) => status === "up");
  return NextResponse.json({ ok, services, timestamp: new Date().toISOString() }, { status: ok ? 200 : 503 });
}
