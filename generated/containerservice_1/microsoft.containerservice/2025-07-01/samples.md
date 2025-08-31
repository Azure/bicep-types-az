# Microsoft.ContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerservice/deploymentsafeguards

Creates a DeploymentSafeguards resource with a long running operation.
```bicep
resource exampleResource 'Microsoft.ContainerService/deploymentSafeguards@2025-07-01' = {
  name: 'example'
  properties: {
    level: 'Warn'
    podSecurityStandardsLevel: 'Baseline'
  }
}
```
