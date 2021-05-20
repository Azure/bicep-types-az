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
  bicep/imodeler2:
    input: openapi-document/multi-api/identity
    scope: bicep
  bicep/commonmarker:
    input: imodeler2
  bicep/cm/transform:
    input: commonmarker
  bicep/cm/emitter:
    input: transform
    scope: scope-cm/emitter
  bicep/generate:
    plugin: bicep
    input: cm/transform
    output-artifact: source-file-bicep
  bicep/transform:
    input: generate
    output-artifact: source-file-bicep
    scope: scope-transform-string
  bicep/emitter:
    input: transform
    scope: scope-bicep/emitter

scope-bicep/emitter:
  input-artifact: source-file-bicep
  output-uri-expr: $key

scope-transform-string:
  is-object: false

output-artifact:
- source-file-bicep

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