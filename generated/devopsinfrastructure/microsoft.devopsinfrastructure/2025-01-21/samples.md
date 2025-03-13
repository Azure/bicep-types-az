# Microsoft.DevOpsInfrastructure
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devopsinfrastructure/pools

Pools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevOpsInfrastructure/pools@2025-01-21' = {
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
          ephemeralType: 'Automatic'
          resourceId: '/MicrosoftWindowsServer/WindowsServer/2019-Datacenter/latest'
        }
      ]
      kind: 'Vmss'
      osProfile: {
        secretsManagementSettings: {
          certificateStoreName: 'Root'
          keyExportable: false
          observedCertificates: [
            'https://abc.vault.azure.net/secrets/one'
          ]
        }
      }
      sku: {
        name: 'Standard_D4ads_v5'
      }
    }
    maximumConcurrency: 10
    organizationProfile: {
      kind: 'AzureDevOps'
      organizations: [
        {
          openAccess: true
          url: 'https://mseng.visualstudio.com'
        }
      ]
    }
    provisioningState: 'Succeeded'
  }
}
```
