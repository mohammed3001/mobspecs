import { serviceBanner } from "@mobspecs/shared/banner";
import { automationJobs } from "./automation/jobs";
import { runAutomationCycle } from "./automation/runner";

function printPlan(): void {
  automationJobs.forEach((job) => {
    console.log(`[scheduler] ${job.name} cadence=${job.cadence} desc=${job.description}`);
  });
}

async function startScheduler(): Promise<void> {
  console.log(serviceBanner("scheduler", "Level 7 full automation scheduler initialized"));
  printPlan();
  await runAutomationCycle();
}

void startScheduler();
