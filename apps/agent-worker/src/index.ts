import { serviceBanner } from "@mobspecs/shared/banner";
import { runAgentTask } from "./agent/runner";
import { runSelfHealingCycle } from "./automation/self-healing";
import { generateWeeklyReport } from "./automation/reporting";
import { publishViaInternalApi } from "./services/internal-api";
import { generateDefaultJobs } from "./workflows/default-jobs";
import { dequeueTask, enqueueTask, queueLength } from "./workflows/queue";

async function processQueue(): Promise<void> {
  while (queueLength() > 0) {
    const task = dequeueTask();
    if (!task) continue;

    const result = await runAgentTask(task);
    console.log(`[agent] task=${result.taskId} success=${result.success} output=${JSON.stringify(result.output)}`);
  }
}

async function runContinuousAutomation(): Promise<void> {
  const heal = await runSelfHealingCycle();
  console.log(`[automation] selfHealing=${JSON.stringify(heal)}`);

  const report = generateWeeklyReport();
  const publish = await publishViaInternalApi({
    type: "seoPatch",
    locale: "en",
    payload: {
      reportType: "weekly",
      report
    }
  });

  console.log(`[automation] weeklyReport status=${publish.status} ok=${publish.ok}`);
}

async function startWorker(): Promise<void> {
  console.log(serviceBanner("agent-worker", "Level 7 fully automated agent initialized"));

  for (const job of generateDefaultJobs()) {
    enqueueTask(job);
  }

  await processQueue();
  await runContinuousAutomation();
}

void startWorker();
