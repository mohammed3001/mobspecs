import { writeArticle, writeReview } from "../services/content-generator";
import { extractKeywords, generateSchema, optimizeTitle, scoreSeo } from "../services/seo";
import { translate } from "../services/translator";
import { publishViaInternalApi } from "../services/internal-api";
import type { AgentResult, AgentTask } from "../types";

export async function runAgentTask(task: AgentTask): Promise<AgentResult> {
  try {
    if (task.type === "write_article") {
      const topic = String(task.payload.topic ?? "Latest Smartphone");
      const article = writeArticle(topic, task.locale);
      const keywords = extractKeywords(`${article.title} ${article.body}`);
      const seoTitle = optimizeTitle(article.title, task.locale);
      const seoScore = scoreSeo(seoTitle, article.body, keywords);
      const schema = generateSchema(seoTitle, task.locale);

      return {
        taskId: task.id,
        success: true,
        output: {
          article,
          keywords,
          seoTitle,
          seoScore,
          schema
        }
      };
    }

    if (task.type === "write_review") {
      const model = String(task.payload.model ?? "Unknown Model");
      const review = writeReview(model, task.locale);
      return {
        taskId: task.id,
        success: true,
        output: { review }
      };
    }

    if (task.type === "translate") {
      const text = String(task.payload.text ?? "");
      const sourceLang = (task.payload.sourceLang as "en" | "ar") ?? "en";
      const translated = translate(text, sourceLang, task.locale);
      return { taskId: task.id, success: true, output: { translated } };
    }

    if (task.type === "publish_content") {
      const publishResult = await publishViaInternalApi({
        type: task.payload.type ?? "article",
        locale: task.locale,
        payload: task.payload
      });

      return {
        taskId: task.id,
        success: publishResult.ok,
        output: { publishResult }
      };
    }

    if (task.type === "extract_keywords") {
      const text = String(task.payload.text ?? "");
      return {
        taskId: task.id,
        success: true,
        output: { keywords: extractKeywords(text) }
      };
    }

    if (task.type === "generate_schema") {
      const title = String(task.payload.title ?? "Generated Content");
      return {
        taskId: task.id,
        success: true,
        output: { schema: generateSchema(title, task.locale) }
      };
    }

    if (task.type === "optimize_seo") {
      const title = String(task.payload.title ?? "Untitled");
      const content = String(task.payload.content ?? "");
      const optimizedTitle = optimizeTitle(title, task.locale);
      const keywords = extractKeywords(content);
      const score = scoreSeo(optimizedTitle, content, keywords);
      return {
        taskId: task.id,
        success: true,
        output: { optimizedTitle, keywords, score }
      };
    }

    return { taskId: task.id, success: false, output: { error: "Unsupported task" } };
  } catch (error) {
    return {
      taskId: task.id,
      success: false,
      output: { error: error instanceof Error ? error.message : String(error) }
    };
  }
}
