const required = [
  "DATABASE_URL",
  "REDIS_URL",
  "MEILISEARCH_URL",
  "SPACES_ENDPOINT",
  "SPACES_REGION",
  "SPACES_BUCKET",
  "JWT_SECRET"
] as const;

type RequiredKey = (typeof required)[number];

export function getEnv(key: RequiredKey): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export function getOptionalEnv(key: string, fallback = ""): string {
  return process.env[key] ?? fallback;
}
