# Level 2 - Config Baseline

## Root Configuration

- `.editorconfig`: whitespace and formatting baseline.
- `.gitignore`: node/npm, build output, and env exclusion.
- `.nvmrc`: pinned Node major version.
- `package.json`: workspace scripts.
- `pnpm-workspace.yaml`: package discovery.
- `tsconfig.base.json`: shared TypeScript compiler options.
- `.env.example`: baseline environment variables for local setup.

## Package-level Configuration

- `apps/web/next.config.mjs`: Next.js runtime behavior.
- `apps/*/tsconfig.json`: service-specific TS compilation setup.
- `packages/config/*`: centralized lint/type presets.

