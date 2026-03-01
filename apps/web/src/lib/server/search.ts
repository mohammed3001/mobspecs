import { MeiliSearch } from "meilisearch";
import { getEnv, getOptionalEnv } from "./env";

let meili: MeiliSearch | null = null;

export function getSearchClient(): MeiliSearch {
  if (!meili) {
    meili = new MeiliSearch({
      host: getEnv("MEILISEARCH_URL"),
      apiKey: getOptionalEnv("MEILISEARCH_MASTER_KEY") || undefined
    });
  }

  return meili;
}

export async function searchPhones(query: string): Promise<unknown[]> {
  const client = getSearchClient();
  const index = client.index("phones");
  const result = await index.search(query, { limit: 20 });
  return result.hits as unknown[];
}
