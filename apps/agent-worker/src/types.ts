export type AgentTaskType =
  | "write_article"
  | "write_review"
  | "optimize_seo"
  | "extract_keywords"
  | "generate_schema"
  | "translate"
  | "publish_content";

export type AgentTask = {
  id: string;
  type: AgentTaskType;
  locale: "en" | "ar";
  payload: Record<string, unknown>;
  createdAt: string;
};

export type AgentResult = {
  taskId: string;
  success: boolean;
  output: Record<string, unknown>;
};
