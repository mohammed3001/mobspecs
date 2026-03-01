import { NextRequest } from "next/server";

export type Role =
  | "super_admin"
  | "editor"
  | "reviewer"
  | "translator"
  | "support"
  | "automation_agent"
  | "user";

export type AuthContext = {
  userId: string;
  roles: Role[];
};

export function decodeToken(token: string): AuthContext | null {
  try {
    const decoded = JSON.parse(Buffer.from(token, "base64url").toString("utf8")) as AuthContext;
    if (!decoded.userId || !Array.isArray(decoded.roles)) {
      return null;
    }
    return decoded;
  } catch {
    return null;
  }
}

export function getAuthContext(req: NextRequest): AuthContext | null {
  const header = req.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) {
    return null;
  }
  return decodeToken(header.slice(7));
}

export function assertRole(ctx: AuthContext | null, required: Role[]): { ok: true } | { ok: false; reason: string } {
  if (!ctx) {
    return { ok: false, reason: "Unauthorized" };
  }

  const hasRole = required.some((role) => ctx.roles.includes(role));
  if (!hasRole) {
    return { ok: false, reason: "Forbidden" };
  }

  return { ok: true };
}
