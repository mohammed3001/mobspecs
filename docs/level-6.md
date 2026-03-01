# Level 6 - Semi-Autonomous AI Agent

This level adds a standalone AI Content Agent workflow with scheduling and internal publishing.

## Agent Capabilities Implemented

- Generate articles (`write_article`).
- Generate reviews (`write_review`).
- Extract keywords (`extract_keywords`).
- Optimize SEO titles and scoring (`optimize_seo`).
- Generate JSON-LD schemas (`generate_schema`).
- Translate EN↔AR (`translate`).
- Publish content via internal signed API (`publish_content`).

## Agent Architecture (Code)

- `apps/agent-worker/src/agent/runner.ts`
  - Task dispatcher and execution logic.
- `apps/agent-worker/src/services/content-generator.ts`
  - Article/review generation primitives.
- `apps/agent-worker/src/services/seo.ts`
  - Keyword extraction, title optimization, score, schema generation.
- `apps/agent-worker/src/services/translator.ts`
  - Bi-directional translation adapter.
- `apps/agent-worker/src/services/internal-api.ts`
  - HMAC-signed internal publishing client.
- `apps/agent-worker/src/workflows/queue.ts`
  - In-memory queue orchestration.
- `apps/agent-worker/src/workflows/default-jobs.ts`
  - Default scheduled jobs for article/SEO/translation.

## Internal Publishing API

- `POST /api/internal/agent/publish`
  - Requires `x-agent-signature` (HMAC SHA-256).
  - Validates and accepts content publish payloads.
  - Logs accepted payload metadata.

## Scheduler Updates

- Scheduler now emits operational jobs for:
  - phone data refresh,
  - SEO audits,
  - content generation,
  - translation sync.

