#!/usr/bin/env bash
# Generate bicep types for all specs with useTypeSpec: true in config.ts
# Usage: ./generate-typespec.sh [specs-dir]
#   specs-dir: path to azure-rest-api-specs (default: ../../azure-rest-api-specs relative to repo root)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
SPECS_DIR="${1:-$(cd "$REPO_ROOT/../azure-rest-api-specs" && pwd)}"

SPECS=(
  dns
  appconfiguration
  containerregistry
  cosmos-db
  eventgrid
  keyvault
  redis
  signalr
  servicebus
  maps
  relay
  attestation
  loadtestservice
  mongocluster
  dnsresolver
  hardwaresecuritymodules
)

echo "Specs dir: $SPECS_DIR"
echo "Generator dir: $SCRIPT_DIR"
echo "Generating ${#SPECS[@]} specs..."
echo ""

failed=()

for spec in "${SPECS[@]}"; do
  echo "=== $spec ==="
  if npm run generate --prefix "$SCRIPT_DIR" -- --specs-dir "$SPECS_DIR" --single-path "$spec" 2>&1 | tail -3; then
    echo "  ✓ $spec"
  else
    echo "  ✗ $spec FAILED"
    failed+=("$spec")
  fi
  echo ""
done

echo "========================="
echo "Done. ${#SPECS[@]} specs processed."
if [ ${#failed[@]} -gt 0 ]; then
  echo "FAILED: ${failed[*]}"
  exit 1
else
  echo "All succeeded."
fi
