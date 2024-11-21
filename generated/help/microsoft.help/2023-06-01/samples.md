# Microsoft.Help
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
