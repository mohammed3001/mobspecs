import { automationJobs } from "./jobs";

export async function runAutomationCycle(): Promise<void> {
  for (const job of automationJobs) {
    const startedAt = new Date().toISOString();
    try {
      const result = await job.action();
      console.log(
        `[automation] name=${job.name} cadence=${job.cadence} ok=${result.ok} startedAt=${startedAt} details=${result.details}`
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(
        `[automation] name=${job.name} cadence=${job.cadence} ok=false startedAt=${startedAt} details=${message}`
      );
    }
  }
}
