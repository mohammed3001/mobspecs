import type { AgentTask } from "../types";

const inMemoryQueue: AgentTask[] = [];

export function enqueueTask(task: AgentTask): void {
  inMemoryQueue.push(task);
}

export function dequeueTask(): AgentTask | null {
  return inMemoryQueue.shift() ?? null;
}

export function queueLength(): number {
  return inMemoryQueue.length;
}
