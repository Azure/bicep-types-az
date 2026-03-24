# @azure-tools/typespec-bicep

TypeSpec emitter that generates Bicep type definitions from TypeSpec specifications.

This is the TypeSpec equivalent of the `@autorest/bicep` AutoRest extension. Instead of processing OpenAPI/Swagger specs through the AutoRest pipeline, this emitter works directly with TypeSpec programs to generate the same Bicep type output.

## Installation

```bash
npm install @azure-tools/typespec-bicep
```

## Usage

Add the emitter to your `tspconfig.yaml`:

```yaml
emit:
  - "@azure-tools/typespec-bicep"
options:
  "@azure-tools/typespec-bicep":
    # Optional: generate ARM schema instead of Bicep types
    # arm-schema: true
```

Then run the TypeSpec compiler:

```bash
tsp compile .
```

## Output

For each ARM resource provider and API version found in the TypeSpec program, the emitter generates:

- `{namespace}/{apiVersion}/types.json` — Runtime type metadata in the [bicep-types](https://github.com/Azure/bicep-types) format
- `{namespace}/{apiVersion}/types.md` — Human-readable type documentation
- `{namespace}/{apiVersion}/samples.md` — Bicep usage examples

## How It Works

The emitter:

1. **Walks the TypeSpec program** to discover ARM resource models (types that extend `TrackedResource`, `ProxyResource`, or `ExtensionResource` from `@azure-tools/typespec-azure-resource-manager`)
2. **Extracts resource metadata** — provider namespace, type segments, API version, and scope
3. **Converts TypeSpec types to Bicep types** using the `TypeFactory` from the `bicep-types` library
4. **Generates output files** in the same format as `@autorest/bicep`

## Architecture

This package mirrors the architecture of `@autorest/bicep` (the AutoRest plugin in `src/autorest.bicep/`):

| autorest.bicep | typespec-bicep | Purpose |
|---|---|---|
| `main.ts` (AutoRest plugin) | `index.ts` (`$onEmit`) | Entry point |
| `resources.ts` (CodeModel parsing) | `resources.ts` (TypeSpec program walking) | Resource discovery |
| `type-generator.ts` (Schema→TypeFactory) | `type-generator.ts` (TypeSpec Type→TypeFactory) | Type conversion |
| `sample-generator.ts` | `sample-generator.ts` | Sample generation |
| `utils.ts` | `utils.ts` | Shared utilities |

### Key Differences from autorest.bicep

| Aspect | autorest.bicep | typespec-bicep |
|---|---|---|
| **Input** | AutoRest CodeModel (from OpenAPI/Swagger) | TypeSpec Program (from `.tsp` files) |
| **Plugin system** | `AutoRestExtension.add("bicep", ...)` | `$onEmit(context: EmitContext)` |
| **Library definition** | N/A (AutoRest convention) | `$lib = createTypeSpecLibrary(...)` |
| **Configuration** | AutoRest YAML pipeline | `tspconfig.yaml` emitter options |
| **Resource discovery** | Parse HTTP paths from CodeModel operations | Walk TypeSpec AST for ARM resource models |
| **Type conversion** | `@autorest/codemodel` Schema types | TypeSpec compiler `Type` system |
| **Output** | `host.writeFile()` via AutoRest | Direct filesystem writes |

## Configuration Options

| Option | Type | Default | Description |
|---|---|---|---|
| `arm-schema` | `boolean` | `false` | Generate ARM ResourceSchema JSON instead of Bicep types |

## Dependencies

- **[bicep-types](https://github.com/Azure/bicep-types)** — Core type system used by Bicep to understand resource types
- **[@typespec/compiler](https://typespec.io/)** — TypeSpec compiler (peer dependency)
- **[@typespec/http](https://typespec.io/)** — HTTP protocol bindings (peer dependency)
- **[@azure-tools/typespec-azure-resource-manager](https://github.com/Azure/typespec-azure)** — ARM resource model library (peer dependency)
