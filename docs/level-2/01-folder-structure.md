# Level 2 - Folder Structure Design

## Canonical Structure

```text
mobspecs/
├─ apps/
│  ├─ web/                    # Next.js fullstack app (public + admin)
│  ├─ agent-worker/           # AI/background automation worker
│  └─ scheduler/              # periodic orchestration service
├─ packages/
│  ├─ database/               # Prisma schema and DB layer
│  ├─ shared/                 # shared types and utility functions
│  └─ config/                 # centralized ESLint and TypeScript presets
├─ docs/
│  ├─ level-1/                # planning outputs
│  └─ level-2/                # structure and conventions
├─ .env.example
├─ package.json
├─ pnpm-workspace.yaml
└─ tsconfig.base.json
```

## App Responsibilities

- `apps/web`: user-facing website, admin shell, API routes.
- `apps/agent-worker`: asynchronous automation tasks.
- `apps/scheduler`: time/event-based job triggers.

## Package Responsibilities

- `packages/database`: Prisma schema and generated database client.
- `packages/shared`: common helper utilities and shared contracts.
- `packages/config`: reusable linting/type configs for consistency.

