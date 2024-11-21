# Microsoft.DevOpsInfrastructure
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devopsinfrastructure/pools

Pools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevOpsInfrastructure/pools@2023-12-13-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    agentProfile: {
      kind: 'Stateless'
    }
    devCenterProjectResourceId: '/subscriptions/222e81d0-cf38-4dab-baa5-289bf16baaa4/resourceGroups/rg-1es-devcenter/providers/Microsoft.DevCenter/projects/1ES'
    fabricProfile: {
      images: [
        {
          resourceId: '/MicrosoftWindowsServer/WindowsServer/2019-Datacenter/latest'
        }
      ]
      kind: 'Vmss'
      sku: {
        name: 'Standard_D4ads_v5'
      }
    }
    maximumConcurrency: 10
    organizationProfile: {
      kind: 'AzureDevOps'
      organizations: [
        {
          url: 'https://mseng.visualstudio.com'
        }
      ]
    }
    provisioningState: 'Succeeded'
  }
}
```
