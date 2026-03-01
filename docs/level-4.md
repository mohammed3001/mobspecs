# Level 4 - Task Automation

This level introduces CI/CD, containerization, deployment automation, and validation scripts.

## CI/CD Workflows

- `.github/workflows/ci.yml`
  - Installs dependencies.
  - Runs lint, typecheck, and build.
  - Validates Docker Compose configuration.

- `.github/workflows/deploy-digitalocean.yml`
  - Manual dispatch and `main` branch deploy.
  - Uses SSH secrets to sync code and run `docker compose up -d --build` on target host.

## Containerization

- `infra/docker/Dockerfile.web` for Next.js web runtime.
- `infra/docker/Dockerfile.worker` for agent worker service.
- `infra/docker/Dockerfile.scheduler` for scheduler service.
- `docker-compose.yml` orchestrating web, worker, scheduler, PostgreSQL, Redis, and Meilisearch.

## Deployment Scripts

- `infra/scripts/deploy_do.sh`: deploy to DigitalOcean host over SSH + rsync.
- `infra/scripts/validate_stack.sh`: local validation checks for stack completeness.

## Tests and Checks

- `tests/smoke/route-coverage.sh`: verifies required Level 3 routes and APIs exist.
- Root scripts:
  - `pnpm test:smoke`
  - `pnpm validate:stack`

