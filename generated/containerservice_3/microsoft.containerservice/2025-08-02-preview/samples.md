# Microsoft.ContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerservice/nodecustomizations

NodeCustomizations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ContainerService/nodeCustomizations@2025-08-02-preview' = {
  name: 'example'
  location: 'westus2'
  properties: {
    containerImages: [
      'redis:8.0.0'
    ]
    customizationScripts: [
      {
        name: 'initialize-node'
        executionPoint: 'NodeImageBuildTime'
        script: 'echo "test node customization" > /var/log/test-node-customization.txt'
        scriptType: 'Bash'
      }
    ]
    identityProfile: {
    }
  }
  tags: {
    team: 'blue'
  }
}
```
