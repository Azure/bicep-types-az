# Microsoft.ContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerservice/preparedimagespecifications

PreparedImageSpecifications_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ContainerService/preparedImageSpecifications@2026-02-02-preview' = {
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
        script: 'echo "test prepared image specification" > /var/log/test-node-customization.txt'
        scriptType: 'Bash'
      }
    ]
    identityProfile: {
      resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1'
    }
  }
  tags: {
    team: 'blue'
  }
}
```
