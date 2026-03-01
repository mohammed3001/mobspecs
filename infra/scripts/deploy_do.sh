#!/usr/bin/env bash
set -euo pipefail

: "${DEPLOY_HOST:?DEPLOY_HOST is required}"
: "${DEPLOY_USER:?DEPLOY_USER is required}"
: "${DEPLOY_PATH:?DEPLOY_PATH is required}"

ssh -o StrictHostKeyChecking=no "${DEPLOY_USER}@${DEPLOY_HOST}" "mkdir -p ${DEPLOY_PATH}"
rsync -az --delete --exclude '.git' ./ "${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/"
ssh -o StrictHostKeyChecking=no "${DEPLOY_USER}@${DEPLOY_HOST}" \
  "cd ${DEPLOY_PATH} && cp -n .env.example .env || true && docker compose pull && docker compose up -d --build"

echo "Deployment completed: ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}"
