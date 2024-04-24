# basic

## Configuration

### Information

```yaml
title: Basic
description: Contains a set of basic spec samples for integration tests
openapi-type: arm
tag: package-2021-08-01
```

### Tag: package-2021-08-01

These settings apply only when `--tag=package-2021-08-01` is specified on the command line.

```yaml $(tag) == 'package-2021-08-01'
input-file:
  - Microsoft.Network/stable/2021-08-01/firewallPolicy.json
```