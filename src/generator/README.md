# AutoRest extension configuration

``` yaml
load-priority: 1000
pipeline-model: v3
```

``` yaml
title: none

pass-thru:
  - subset-reducer
  - tree-shaker

pipeline:
  azureresourceschema/imodeler2:
    input: openapi-document/multi-api/identity
    scope: azureresourceschema
  azureresourceschema/commonmarker:
    input: imodeler2
  azureresourceschema/cm/transform:
    input: commonmarker
  azureresourceschema/cm/emitter:
    input: transform
    scope: scope-cm/emitter
  azureresourceschema/generate:
    plugin: azureresourceschema
    input: cm/transform
    output-artifact: source-file-azureresourceschema
  azureresourceschema/transform:
    input: generate
    output-artifact: source-file-azureresourceschema
    scope: scope-transform-string
  azureresourceschema/emitter:
    input: transform
    scope: scope-azureresourceschema/emitter

scope-azureresourceschema/emitter:
  input-artifact: source-file-azureresourceschema
  output-uri-expr: $key

scope-transform-string:
  is-object: false

output-artifact:
- source-file-azureresourceschema

scope-cm/emitter:
  input-artifact: code-model-v1
  is-object: true
  output-uri-expr: |
    "code-model-v1"

scope-cm-yaml/emitter:
  input-artifact: code-model-v1-yaml
  is-object: true
  output-uri-expr: |
    "code-model-v1-yaml"
```