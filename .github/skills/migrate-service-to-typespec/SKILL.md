---
name: migrate-service-to-typespec
description: Migrate a service/RP folder in bicep-types-az from AutoRest-based (Swagger) type generation to TypeSpec-based type generation. Use when asked to "migrate <service> to TypeSpec", "switch <service> to the TypeSpec emitter", or "enable useTypeSpec for <folder>". Covers enabling the config flag, building dependent projects, running generation, cleaning up superseded AutoRest output, reviewing the diff for semantic regressions, iterating on the typespec-bicep emitter, and submitting the PR.
---

# Migrate a service to TypeSpec generation

This repo generates Bicep type definitions (`generated/**/types.json` + `types.md`) from two possible
sources per top-level spec folder (e.g. `dns`, `cosmos-db`):

- **AutoRest** (`src/autorest.bicep`) — reads Swagger/OpenAPI via `readme.md` files. This is the legacy path.
- **TypeSpec** (`src/typespec-bicep`) — reads `.tsp` files directly via `tspconfig.yaml`. This is the target path.

Which one runs for a given top-level folder is controlled by `src/generator/src/config.ts`
(`isTypeSpecEnabled`). When a folder is enabled for TypeSpec, output is written to
`generated/_tsp/<folder>/...` instead of `generated/<folder>/...`, and `_tsp/...` paths always win
over any old AutoRest output for the same resource type in `generated/index.json` (first-match-wins,
sorted alphabetically — `_` sorts before letters). Old AutoRest folders are **not** deleted
automatically unless you run a *full* generation (no `--path-prefix`), so cleanup is a manual step
during migration.

## Step 1 — Update the config

Add the folder name (the top-level directory name under
`azure-rest-api-specs/specification/`, lowercase) to `useTypeSpec` in
[src/generator/src/config.ts](../../../src/generator/src/config.ts):

```ts
const config: GeneratorConfig = {
  useTypeSpec: {
    dns: true,
    'cosmos-db': true,
    '<new-folder>': true,
  }
}
```

This flips `getPathData`/`findSourcePaths` to look for `tspconfig.yaml` + `main.tsp` under that
folder instead of `readme.md`, so the target service **must** already have a TypeSpec project
checked into `azure-rest-api-specs` (i.e. the RP team has already migrated their spec authoring to
TypeSpec — this repo change only affects how *we* generate types, not the source spec format).

## Step 2 — Build dependent projects

Generation requires compiled output for whichever emitter(s) it invokes:

- If the folder still has any AutoRest-generated entries left, `src/autorest.bicep` must be built.
- The TypeSpec path always needs `src/typespec-bicep` built (and it depends on `bicep-types` being
  built first).

Use the "build emitters" VS Code task (runs both), or individually:

```sh
# one-time, if not already built
pushd bicep-types/src/bicep-types && npm ci && npm run build && popd

cd src/autorest.bicep && npm ci && npm run build
cd ../typespec-bicep && npm ci && npm run build
```

Rebuild after **any** change to `autorest.bicep` or `typespec-bicep` source — generation silently
uses stale compiled output otherwise.

## Step 3 — Run generation for the folder

From `src/generator`:

```sh
npm run generate -- --specs-dir ../../../azure-rest-api-specs --path-prefix <folder>
```

- `--path-prefix` scopes generation to one top-level folder and is much faster for iteration.
- This does **not** clean up stale/superseded folders (that only happens on a full run without
  `--path-prefix` — see Step 4).
- Output goes to `generated/_tsp/<folder>/...`. Check `generated/_tsp/<folder>/log.out` for the
  TypeSpec compiler's own output/warnings, and watch the console output of the `generate` command
  itself for `WARNING: Found duplicate type/function "..."` — these indicate the new TypeSpec output
  overlaps with something still being produced elsewhere (expected during migration; see Step 4).
- If generation throws `Unable to find .../dist. Did you forget to run 'npm run build'?`, go back to
  Step 2.

## Step 4 — Remove overlapping AutoRest-generated API versions

Once a folder is TypeSpec-enabled, AutoRest is no longer run for it, but any previously-generated
`generated/<folder>/...` output is left on disk until a full (no `--path-prefix`) generation run
prunes it as "stale". Don't rely on that implicitly — explicitly reconcile the two folders:

1. Compare `generated/<folder>/` (old AutoRest output) against `generated/_tsp/<folder>/` (new
   TypeSpec output), API version by API version.
2. For every `<provider>/<api-version>` pair now produced by TypeSpec, delete the corresponding
   folder under `generated/<folder>/` — it's superseded and would otherwise just be dead weight
   (or a silent duplicate warning) in the repo.
3. If TypeSpec does **not** yet cover every API version AutoRest used to produce for this folder
   (partial migration), leave the AutoRest folders for the *uncovered* API versions in place — they
   still need `generated/<folder>/...` to exist so the old output continues to ship. Only delete the
   API versions that TypeSpec now generates.
4. Re-run `npm run generate -- --specs-dir ... --path-prefix <folder>` and confirm the "Found
   duplicate" warnings for this folder are gone, and `generated/index.json` only references
   `_tsp/<folder>/...` paths for the migrated API versions
   (`grep '"_tsp/<folder>/' generated/index.json`).
5. Also delete the folder's now-orphaned `readme.bicep.md` if one was left behind, and remove any
   now-stale `generated/<folder>/log.out` / `summary.log` if they're no longer relevant.

## Step 5 — Review the diff for semantic regressions

Since TypeSpec and AutoRest parse the spec through completely different pipelines, expect a large
line-diff in `types.json`/`types.md` even for resources whose real shape hasn't changed (different
internal ordering, ref numbering, etc.) — that's noise, not signal. Focus review on `types.md`
(human-readable) rather than raw `types.json`.

**Known, expected differences that are NOT regressions** (keep this list updated as you find more):

- Ordering of properties/types/`$ref` indices changes completely — TypeSpec and AutoRest walk the
  spec graph differently. Only the *set* of types/properties matters, not their order or numbering.
- Discriminated union / discriminator handling may render slightly differently in `types.md`
  wording while remaining semantically identical.
- Whitespace/formatting differences in generated markdown tables.

**Things that ARE regressions and must be fixed before merging:**

- A property, resource type, or API version present in the old AutoRest output is missing entirely
  from the new TypeSpec output (or vice versa — unexpectedly present).
- A property's type, required-ness, or read-only/write-only flag changed.
- A resource's scope (tenant/subscription/resourceGroup/extension) changed.
- Nested/child resource types or resource functions (actions) went missing.
- New `WARNING:` lines appear in the generation console output/log for this folder that weren't
  there for the AutoRest pass.

To review efficiently:

```sh
git diff -- 'generated/_tsp/<folder>/**/types.md'
```

and diff the equivalent pre-migration `types.md` (from `generated/<folder>/...` before you deleted
it in Step 4, or from `main`) against the new one, resource-by-resource.

## Step 6 — Iterate on the generator if needed

If Step 5 turns up a real regression, the fix almost always belongs in
`src/typespec-bicep/src/` (mirrors `src/autorest.bicep/` — see
[src/typespec-bicep/README.md](../../../src/typespec-bicep/README.md) for the architecture mapping):

- `resources.ts` — resource discovery (walking the TypeSpec AST for ARM resource models).
- `type-generator.ts` — TypeSpec `Type` → `bicep-types` `TypeFactory` conversion.
- `utils.ts` — shared helpers.

There's also a Jest/Vitest integration test suite under
`src/typespec-bicep/test/integration/` with sample `.tsp` specs
(`test/integration/specs/basic|edge-cases|firewalls`) — add a minimal repro of the regression there
if practical, since it's much faster to iterate on than running full generation against the real
specs repo.

Workflow:

```sh
cd src/typespec-bicep
npm run build          # after any src change
npx vitest run          # run the integration/unit tests
```

Then re-run Step 3 against the real spec to confirm the fix, and re-check Step 5.

You can also debug interactively: use the "Generate (Path Prefix)" VS Code launch config
(`.vscode/launch.json`), which builds emitters first and passes `--wait-for-debugger`, letting you
step through `src/generator` and `src/typespec-bicep` code.

## Step 7 — Submit the PR

1. Make sure `generated/index.json` / `generated/index.md` are regenerated and included (they're
   derived files but are committed).
2. Double check no stray AutoRest leftovers remain for the migrated API versions (Step 4), and no
   unrelated folders were touched — a full run without `--path-prefix` will also emit types for
   every other spec folder, so avoid committing unrelated changes by only running with
   `--path-prefix` during migration, or by discarding unrelated diffs before committing.
3. Include in the PR description: which folder/service was migrated, which API versions moved from
   AutoRest to TypeSpec (and any left on AutoRest, with why), and a summary of any semantic diffs
   found in Step 5 plus how they were resolved.
4. Open the PR against `main` as usual (see repo `README.md` contribution section — CLA bot applies).
