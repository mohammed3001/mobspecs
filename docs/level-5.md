# Level 5 - Interconnected Systems

This level connects core platform services and introduces resilient backend service abstractions.

## Implemented Integrations

- PostgreSQL integration through Prisma client exported by `@mobspecs/database`.
- Redis cache integration for API-level response caching.
- Meilisearch integration for dedicated search endpoints.
- DigitalOcean Spaces-compatible storage integration for upload URL generation.
- API Layer v1 with service-backed endpoints.
- Auth + role-based access checks for protected operations.
- Error monitoring hooks and structured logging utilities.
- Monitoring endpoint reporting dependency health state.

## New API Layer (`/api/v1`)

- `GET /api/v1/phones` (DB + Redis cache)
- `GET /api/v1/search?q=` (Meilisearch)
- `GET /api/v1/monitoring` (DB/Redis/Meilisearch status)
- `POST /api/v1/storage/upload` (auth + roles + Spaces signed upload URL)
- `GET /api/v1/auth/me` (token decode and role context)

## Supporting Service Modules

- `env.ts` - environment access and validation
- `cache.ts` - Redis client and cache helpers
- `search.ts` - Meilisearch adapter
- `storage.ts` - Spaces-compatible S3 client
- `auth.ts` - auth context extraction and RBAC guard
- `logger.ts` - structured logging
- `error-monitoring.ts` - error capture pipeline hook
- `monitoring.ts` - dependency health checks

