# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/sqlvulnerabilityassessments

Create or update SQL Vulnerability Assessment settings on a resource - Sql Managed Instance
```bicep
resource exampleResource 'Microsoft.Security/sqlVulnerabilityAssessments@2026-04-01-preview' = {
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

Create or update SQL Vulnerability Assessment settings on a resource - Sql Server
```bicep
resource exampleResource 'Microsoft.Security/sqlVulnerabilityAssessments@2026-04-01-preview' = {
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

Create or update SQL Vulnerability Assessment settings on a resource - Synapse
```bicep
resource exampleResource 'Microsoft.Security/sqlVulnerabilityAssessments@2026-04-01-preview' = {
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

## microsoft.security/sqlvulnerabilityassessments/baselinerules

Create a baseline for a rule on a resource (server-level) - Sql Managed Instance
```bicep
resource exampleResource 'Microsoft.Security/sqlVulnerabilityAssessments/baselineRules@2026-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  latestScan: false
  results: [
    [
      'userA'
      'SELECT'
    ]
    [
      'userB'
      'SELECT'
    ]
  ]
}
```

Create a baseline for a rule on a resource (server-level) - Sql Server
```bicep
resource exampleResource 'Microsoft.Security/sqlVulnerabilityAssessments/baselineRules@2026-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  latestScan: false
  results: [
    [
      'userA'
      'SELECT'
    ]
    [
      'userB'
      'SELECT'
    ]
  ]
}
```

Create a baseline for a rule on a resource (server-level) - Synapse
```bicep
resource exampleResource 'Microsoft.Security/sqlVulnerabilityAssessments/baselineRules@2026-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  latestScan: false
  results: [
    [
      'userA'
      'SELECT'
    ]
    [
      'userB'
      'SELECT'
    ]
  ]
}
```

Create a baseline for a rule on a resource - Arc Machine
```bicep
resource exampleResource 'Microsoft.Security/sqlVulnerabilityAssessments/baselineRules@2026-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  latestScan: false
  results: [
    [
      'userA'
      'SELECT'
    ]
    [
      'userB'
      'SELECT'
    ]
  ]
}
```

Create a baseline for a rule on a resource - Sql Managed Instance
```bicep
resource exampleResource 'Microsoft.Security/sqlVulnerabilityAssessments/baselineRules@2026-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  latestScan: false
  results: [
    [
      'userA'
      'SELECT'
    ]
    [
      'userB'
      'SELECT'
    ]
  ]
}
```

Create a baseline for a rule on a resource - Sql Server
```bicep
resource exampleResource 'Microsoft.Security/sqlVulnerabilityAssessments/baselineRules@2026-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  latestScan: false
  results: [
    [
      'userA'
      'SELECT'
    ]
    [
      'userB'
      'SELECT'
    ]
  ]
}
```

Create a baseline for a rule on a resource - Synapse
```bicep
resource exampleResource 'Microsoft.Security/sqlVulnerabilityAssessments/baselineRules@2026-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  latestScan: false
  results: [
    [
      'userA'
      'SELECT'
    ]
    [
      'userB'
      'SELECT'
    ]
  ]
}
```

Create a baseline for a rule on a resource - Virtual Machine
```bicep
resource exampleResource 'Microsoft.Security/sqlVulnerabilityAssessments/baselineRules@2026-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  latestScan: false
  results: [
    [
      'userA'
      'SELECT'
    ]
    [
      'userB'
      'SELECT'
    ]
  ]
}
```
