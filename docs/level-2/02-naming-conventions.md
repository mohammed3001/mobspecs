# Level 2 - Naming Conventions

## Global Conventions

- Folders: `kebab-case` (example: `agent-worker`).
- TypeScript files: `kebab-case.ts`.
- React components: `PascalCase.tsx`.
- Route segments: Next.js App Router folder naming conventions.
- Database entities: `PascalCase` model names in Prisma.
- Database columns: `camelCase` in Prisma schema.

## Slug and URL Conventions

- Brand slug: `brand-name` (example: `samsung`).
- Phone slug: `brand-model-variant` where needed.
- Article slug: semantic and locale-neutral base slug.

## API Naming Conventions

- REST resource naming with plural nouns (`/phones`, `/brands`).
- Internal automation namespace under `/internal/*`.
- JSON payloads use `camelCase` keys.

