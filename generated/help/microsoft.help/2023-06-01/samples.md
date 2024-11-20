# Microsoft.Help

## microsoft.help/diagnostics

Creates a Diagnostic for a KeyVault resource
```bicep
resource exampleResource 'Microsoft.Help/diagnostics@2023-06-01' = {
  name: 'example'
  properties: {
    globalParameters: {
      startTime: '2020-07-01'
    }
    insights: [
      {
        additionalParameters: {
          serverName: 'testServer'
        }
        solutionId: 'SampleSolutionId'
      }
    ]
  }
}
```
