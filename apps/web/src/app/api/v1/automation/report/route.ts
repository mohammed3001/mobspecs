import { NextRequest, NextResponse } from "next/server";
import { assertRole, getAuthContext } from "../../../../../../lib/server/auth";
import { log } from "../../../../../../lib/server/logger";

export async function POST(request: NextRequest) {
  const auth = getAuthContext(request);
  const acl = assertRole(auth, ["super_admin", "automation_agent", "editor"]);

  if (!acl.ok) {
    return NextResponse.json({ error: acl.reason }, { status: acl.reason === "Unauthorized" ? 401 : 403 });
  }

  const body = (await request.json()) as {
    reportType?: string;
    report?: Record<string, unknown>;
  };

  if (!body.reportType || !body.report) {
    return NextResponse.json({ error: "reportType and report are required" }, { status: 400 });
  }

  log("info", "Automation report received", {
    reportType: body.reportType,
    keys: Object.keys(body.report)
  });

  return NextResponse.json({ accepted: true, stored: true });
}
