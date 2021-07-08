# AutoRest extension configuration

```yaml
version: "https://tinyurl.com/yfjyy27f"

use-extension:
  "@autorest/modelerfour": "https://tinyurl.com/yhlkz69y"

modelerfour:
  # this runs a pre-namer step to clean up names
  prenamer: true
  # this will make the content-type parameter always specified
  always-create-content-type-parameter: true
  # enables parameter grouping via x-ms-parameter-grouping
  group-parameters: true
  # don't return errors for deduplication failures
  additional-checks: false
  lenient-model-deduplication: true

pipeline:
  bicep: # <- name of plugin
    input: modelerfour/identity
    output-artifact: bicep-files

  bicep/emitter:
    input: bicep
    scope: bicep-scope/emitter

bicep-scope/emitter:
  input-artifact: bicep-files

output-artifact: bicep-files
```