import { NextRequest, NextResponse } from "next/server";
import { createUploadUrl } from "../../../../../lib/server/storage";
import { assertRole, getAuthContext } from "../../../../../lib/server/auth";

export async function POST(request: NextRequest) {
  const auth = getAuthContext(request);
  const acl = assertRole(auth, ["editor", "super_admin", "automation_agent"]);
  if (!acl.ok) {
    return NextResponse.json({ error: acl.reason }, { status: acl.reason === "Unauthorized" ? 401 : 403 });
  }

  const body = (await request.json()) as { fileName?: string; contentType?: string };

  if (!body.fileName || !body.contentType) {
    return NextResponse.json({ error: "fileName and contentType required" }, { status: 400 });
  }

  const key = `uploads/${Date.now()}-${body.fileName}`;
  const uploadUrl = await createUploadUrl(key, body.contentType);

  return NextResponse.json({ key, uploadUrl });
}
