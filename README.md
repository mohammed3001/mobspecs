# Mobile Intelligence Platform

Level 7 fully automated baseline for a fullstack mobile specification platform.

## Monorepo Layout

- `apps/web` - Next.js App Router web application (public + admin + API routes)
- `apps/agent-worker` - AI automation worker service
- `apps/scheduler` - periodic orchestration service
- `packages/database` - Prisma schema and shared database client
- `packages/shared` - shared types/utilities
- `packages/config` - centralized linting and TypeScript configs
- `infra/docker` - Dockerfiles for web/worker/scheduler
- `infra/scripts` - deployment and stack validation scripts
- `.github/workflows` - CI/CD and deployment workflows

## Run with Docker Compose

```bash
cp .env.example .env
docker compose up --build
```

## Level 7 Full Automation

- Scheduler-driven automated cycles:
  - phone data updates
  - SEO self-healing
  - RSS ingestion and enhancement
  - cache management
  - service restart guards
  - weekly report submission
- Agent continuous automation:
  - self-healing issue fixes
  - weekly report generation and internal publish call
- Reporting endpoint:
  - `POST /api/v1/automation/report`

## Level 6 AI Agent

- article generation, review generation
- keyword extraction, SEO optimization/scoring
- schema generation, EN↔AR translation
- internal publish action via signed API (`POST /api/internal/agent/publish`)

## Level 5 API Layer

- `GET /api/v1/phones` - PostgreSQL via Prisma with Redis cache
- `GET /api/v1/search?q=` - Meilisearch query
- `GET /api/v1/monitoring` - dependency health status
- `POST /api/v1/storage/upload` - role-protected Spaces upload URL generation
- `GET /api/v1/auth/me` - auth context and role introspection

## Existing Feature/UI Routes

- `/{locale}`, brands, phones, compare, articles, admin, seo

## Automation Commands

- `pnpm test:smoke` - verify required pages, APIs, and automation modules exist
- `pnpm validate:stack` - verify compose/docker stack files and syntax

## CI/CD

- CI pipeline: `.github/workflows/ci.yml`
- DigitalOcean deploy pipeline: `.github/workflows/deploy-digitalocean.yml`

