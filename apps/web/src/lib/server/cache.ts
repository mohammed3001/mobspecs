import Redis from "ioredis";
import { getEnv } from "./env";

let client: Redis | null = null;

async function ensureRedisConnection(redis: Redis): Promise<void> {
  if (redis.status === "ready" || redis.status === "connecting") {
    return;
  }

  await redis.connect();
}

export function getRedis(): Redis {
  if (!client) {
    client = new Redis(getEnv("REDIS_URL"), { lazyConnect: true, maxRetriesPerRequest: 1 });
  }
  return client;
}

export async function cacheGet<T>(key: string): Promise<T | null> {
  const redis = getRedis();
  await ensureRedisConnection(redis);
  const raw = await redis.get(key);
  return raw ? (JSON.parse(raw) as T) : null;
}

export async function cacheSet<T>(key: string, value: T, ttlSeconds = 120): Promise<void> {
  const redis = getRedis();
  await ensureRedisConnection(redis);
  await redis.set(key, JSON.stringify(value), "EX", ttlSeconds);
}
