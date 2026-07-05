# Microsoft.DevOpsInfrastructure
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devopsinfrastructure/pools

Pools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevOpsInfrastructure/pools@2026-06-02' = {
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
          provisioningScriptEntryPoint: 'scripts/setup-agent.ps1'
          provisioningScriptManagedIdentityClientId: '0f8fad5b-d9cb-469f-a165-70867728950e'
          provisioningScriptShouldRestart: true
          provisioningScriptStorageAccountResourceId: '/subscriptions/a2e95d27-c161-4b61-bda4-11512c14c2c2/resourceGroups/rg/providers/Microsoft.Storage/storageAccounts/provisioningscriptsa'
          resourceId: '/MicrosoftWindowsServer/WindowsServer/2019-Datacenter/latest'
        }
      ]
      kind: 'Vmss'
      networkProfile: {
        staticIpAddressCount: 2
        subnetId: '/subscriptions/a2e95d27-c161-4b61-bda4-11512c14c2c2/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnet/subnets/subnet'
      }
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
      description: 'Managed by Managed DevOps Pools'
      kind: 'AzureDevOps'
      organizations: [
        {
          openAccess: true
          url: 'https://mseng.visualstudio.com'
        }
      ]
      updateDescription: true
    }
    provisioningState: 'Succeeded'
  }
}
```

Pools_CreateOrUpdate_InstanceMix
```bicep
resource exampleResource 'Microsoft.DevOpsInfrastructure/pools@2026-06-02' = {
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
          provisioningScriptEntryPoint: 'scripts/setup-agent.ps1'
          provisioningScriptManagedIdentityClientId: '0f8fad5b-d9cb-469f-a165-70867728950e'
          provisioningScriptShouldRestart: true
          provisioningScriptStorageAccountResourceId: '/subscriptions/a2e95d27-c161-4b61-bda4-11512c14c2c2/resourceGroups/rg/providers/Microsoft.Storage/storageAccounts/provisioningscriptsa'
          resourceId: '/MicrosoftWindowsServer/WindowsServer/2019-Datacenter/latest'
        }
      ]
      kind: 'Vmss'
      networkProfile: {
        staticIpAddressCount: 2
        subnetId: '/subscriptions/a2e95d27-c161-4b61-bda4-11512c14c2c2/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnet/subnets/subnet'
      }
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
        name: 'Mix'
        vmSizes: [
          {
            name: 'Standard_E2ads_v5'
          }
          {
            name: 'Standard_D2ads_v5'
          }
        ]
      }
    }
    maximumConcurrency: 10
    organizationProfile: {
      description: 'Managed by Managed DevOps Pools'
      kind: 'AzureDevOps'
      organizations: [
        {
          openAccess: true
          url: 'https://mseng.visualstudio.com'
        }
      ]
      updateDescription: true
    }
    provisioningState: 'Succeeded'
  }
}
```
