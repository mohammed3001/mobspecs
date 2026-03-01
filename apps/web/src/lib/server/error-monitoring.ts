import { log } from "./logger";

export function captureError(error: unknown, scope: string, metadata?: Record<string, unknown>): void {
  const message = error instanceof Error ? error.message : String(error);

  log("error", `Captured error in ${scope}: ${message}`, {
    scope,
    stack: error instanceof Error ? error.stack : undefined,
    ...metadata
  });
}
