#!/usr/bin/env bash
set -euo pipefail

required_pages=(
  "apps/web/src/app/[locale]/page.tsx"
  "apps/web/src/app/[locale]/brands/page.tsx"
  "apps/web/src/app/[locale]/compare/page.tsx"
  "apps/web/src/app/[locale]/articles/page.tsx"
  "apps/web/src/app/[locale]/admin/page.tsx"
  "apps/web/src/app/[locale]/seo/page.tsx"
  "apps/web/src/app/[locale]/phones/[brand]/[model]/page.tsx"
)

required_apis=(
  "apps/web/src/app/api/brands/route.ts"
  "apps/web/src/app/api/phones/route.ts"
  "apps/web/src/app/api/articles/route.ts"
  "apps/web/src/app/api/compare/route.ts"
  "apps/web/src/app/api/translate/route.ts"
  "apps/web/src/app/api/internal/agent/publish/route.ts"
  "apps/web/src/app/api/v1/phones/route.ts"
  "apps/web/src/app/api/v1/search/route.ts"
  "apps/web/src/app/api/v1/monitoring/route.ts"
  "apps/web/src/app/api/v1/storage/upload/route.ts"
  "apps/web/src/app/api/v1/auth/me/route.ts"
  "apps/web/src/app/api/v1/automation/report/route.ts"
)

required_agent=(
  "apps/agent-worker/src/agent/runner.ts"
  "apps/agent-worker/src/workflows/queue.ts"
  "apps/agent-worker/src/workflows/default-jobs.ts"
  "apps/agent-worker/src/services/content-generator.ts"
  "apps/agent-worker/src/services/seo.ts"
  "apps/agent-worker/src/services/translator.ts"
  "apps/agent-worker/src/services/internal-api.ts"
  "apps/agent-worker/src/automation/self-healing.ts"
  "apps/agent-worker/src/automation/reporting.ts"
)

required_scheduler=(
  "apps/scheduler/src/automation/jobs.ts"
  "apps/scheduler/src/automation/runner.ts"
)

for page in "${required_pages[@]}"; do test -f "$page"; done
for api in "${required_apis[@]}"; do test -f "$api"; done
for file in "${required_agent[@]}"; do test -f "$file"; done
for file in "${required_scheduler[@]}"; do test -f "$file"; done

echo "Smoke route, agent, and automation coverage passed"
