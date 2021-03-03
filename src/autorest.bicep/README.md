# AutoRest extension configuration

```yaml
version: 3.0.6320
use-extension:
  "@autorest/modelerfour": "4.16.2"

modelerfour:
  # this runs a pre-namer step to clean up names
  prenamer: true
  # this will flatten modelers marked with 'x-ms-client-flatten'
  flatten-models: true
  # this will flatten parameters marked with 'x-ms-client-flatten'
  flatten-payloads: true
  # this will make the content-type parameter always specified
  always-create-content-type-parameter: true
  # enables parameter grouping via x-ms-parameter-grouping
  group-parameters: true
  # don't return errors for deduplication failures
  additional-checks: false
  lenient-model-deduplication: true

pipeline:
  azureresourceschema: # <- name of plugin
    input: modelerfour/identity
    output-artifact: azureresourceschema-files

  azureresourceschema/emitter:
    input: azureresourceschema
    scope: azureresourceschema-scope/emitter

azureresourceschema-scope/emitter:
  input-artifact: azureresourceschema-files

output-artifact: azureresourceschema-files
```