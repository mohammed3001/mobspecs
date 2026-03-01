import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getEnv, getOptionalEnv } from "./env";

let s3: S3Client | null = null;

export function getStorageClient(): S3Client {
  if (!s3) {
    s3 = new S3Client({
      endpoint: getEnv("SPACES_ENDPOINT"),
      region: getEnv("SPACES_REGION"),
      credentials: {
        accessKeyId: getOptionalEnv("SPACES_KEY"),
        secretAccessKey: getOptionalEnv("SPACES_SECRET")
      }
    });
  }
  return s3;
}

export async function createUploadUrl(key: string, contentType: string): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: getEnv("SPACES_BUCKET"),
    Key: key,
    ContentType: contentType,
    ACL: "public-read"
  });

  return getSignedUrl(getStorageClient(), command, { expiresIn: 300 });
}
