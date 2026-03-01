import type { AgentTask } from "../types";

export function generateDefaultJobs(): AgentTask[] {
  const now = new Date().toISOString();
  return [
    {
      id: "job-article-1",
      type: "write_article",
      locale: "en",
      payload: { topic: "Galaxy S24 Ultra" },
      createdAt: now
    },
    {
      id: "job-seo-1",
      type: "optimize_seo",
      locale: "en",
      payload: {
        title: "Galaxy S24 Ultra review",
        content: "Galaxy S24 Ultra has flagship camera and excellent battery endurance for daily heavy usage"
      },
      createdAt: now
    },
    {
      id: "job-translate-1",
      type: "translate",
      locale: "ar",
      payload: {
        sourceLang: "en",
        text: "Xiaomi 14 offers balanced flagship performance"
      },
      createdAt: now
    }
  ];
}
