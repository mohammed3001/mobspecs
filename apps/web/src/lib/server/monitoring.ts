import { prisma } from "@mobspecs/database";
import { getRedis } from "./cache";
import { getSearchClient } from "./search";

export type ServiceStatus = "up" | "down";

export async function checkDependencies(): Promise<Record<string, ServiceStatus>> {
  const result: Record<string, ServiceStatus> = {
    database: "down",
    redis: "down",
    meilisearch: "down"
  };

  try {
    await prisma.$queryRaw`SELECT 1`;
    result.database = "up";
  } catch {
    result.database = "down";
  }

  try {
    const redis = getRedis();
    if (redis.status !== "ready" && redis.status !== "connecting") {
      await redis.connect();
    }
    await redis.ping();
    result.redis = "up";
  } catch {
    result.redis = "down";
  }

  try {
    await getSearchClient().health();
    result.meilisearch = "up";
  } catch {
    result.meilisearch = "down";
  }

  return result;
}
