#!/usr/bin/env bash
set -euo pipefail

echo "[validate] checking required files"
test -f docker-compose.yml
test -f infra/docker/Dockerfile.web
test -f infra/docker/Dockerfile.worker
test -f infra/docker/Dockerfile.scheduler

echo "[validate] docker compose syntax"
docker compose config >/dev/null

echo "[validate] basic API route coverage"
for route in brands phones articles compare translate; do
  test -f "apps/web/src/app/api/${route}/route.ts"
done

echo "[validate] done"
