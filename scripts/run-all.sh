#!/usr/bin/env bash
# Full pipeline, run in the cloud workspace / CI: checklist → assets → build → local server → audit both demos → report → rebuild.
set -euo pipefail
cd "$(dirname "$0")/.."
export SITE_URL="${SITE_URL:-https://arcueidshiki.github.io/seo-handbook}"
KEYWORD="${KEYWORD:-vexlora position size calculator}"
PORT="${PORT:-8080}"
PREFIX="$(node -e "console.log(new URL(process.env.SITE_URL).pathname.replace(/\/$/,''))")"

node scripts/make-checklist.mjs
[ -f demos/after/assets/hero.webp ] || node scripts/make-assets.mjs
node scripts/build.mjs
PORT=$PORT node scripts/serve.mjs & SERVER=$!
trap 'kill $SERVER' EXIT
sleep 1
LOCAL="http://localhost:$PORT$PREFIX"
node auditor/audit.mjs --url "$LOCAL/demos/before/" --site-url "$SITE_URL/demos/before/" --name before --keyword "$KEYWORD"
node auditor/audit.mjs --url "$LOCAL/demos/after/"  --site-url "$SITE_URL/demos/after/"  --name after  --keyword "$KEYWORD"
node scripts/compare.mjs
node scripts/build.mjs   # rebuild so the tool + report pages embed the fresh results
echo "done → _site/ (open $LOCAL/ while the server runs, or deploy _site/)"
