# Microsoft.HybridCompute
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.hybridcompute/gateways

Create or Update a Gateway
```bicep
resource exampleResource 'Microsoft.HybridCompute/gateways@2025-08-21-preview' = {
  name: 'example'
  location: 'eastus2euap'
  properties: {
    allowedFeatures: [
      '*'
    ]
    gatewayType: 'Public'
  }
}
```

## microsoft.hybridcompute/licenses

Create or Update a License
```bicep
resource exampleResource 'Microsoft.HybridCompute/licenses@2025-08-21-preview' = {
  name: 'example'
  location: 'eastus2euap'
  properties: {
    licenseDetails: {
      type: 'pCore'
      edition: 'Datacenter'
      processors: 6
      state: 'Activated'
      target: 'Windows Server 2012'
    }
    licenseType: 'ESU'
  }
}
```

## microsoft.hybridcompute/machines

Create or Update a Machine
```bicep
resource exampleResource 'Microsoft.HybridCompute/machines@2025-08-21-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2euap'
  properties: {
    clientPublicKey: 'string'
    identityKeyStore: 'TPM'
    locationData: {
      name: 'Redmond'
    }
    osProfile: {
      windowsConfiguration: {
        patchSettings: {
          enableHotpatching: true
        }
      }
    }
    parentClusterResourceId: '{AzureStackHCIResourceId}'
    privateLinkScopeResourceId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.HybridCompute/privateLinkScopes/privateLinkScopeName'
    tpmEkCertificate: 'string'
    vmId: 'b7a098cc-b0b8-46e8-a205-62f301a62a8f'
  }
}
```

## microsoft.hybridcompute/machines/extensions

Create or Update a Machine Extension
```bicep
resource exampleResource 'Microsoft.HybridCompute/machines/extensions@2025-08-21-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus2euap'
  properties: {
    type: 'CustomScriptExtension'
    publisher: 'Microsoft.Compute'
    settings: {
      commandToExecute: 'powershell.exe -c "Get-Process | Where-Object { $_.CPU -gt 10000 }"'
    }
    typeHandlerVersion: '1.10'
  }
}
```

## microsoft.hybridcompute/machines/licenseprofiles

Create or Update a License Profile
```bicep
resource exampleResource 'Microsoft.HybridCompute/machines/licenseProfiles@2025-08-21-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus2euap'
  properties: {
    esuProfile: {
      assignedLicense: '{LicenseResourceId}'
    }
    productProfile: {
      productFeatures: [
        {
          name: 'Hotpatch'
          subscriptionStatus: 'Enabled'
        }
      ]
      productType: 'WindowsServer'
      subscriptionStatus: 'Enabled'
    }
    softwareAssurance: {
      softwareAssuranceCustomer: true
    }
  }
}
```

## microsoft.hybridcompute/machines/runcommands

Create or Update a Run Command
```bicep
resource exampleResource 'Microsoft.HybridCompute/machines/runCommands@2025-08-21-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus2'
  properties: {
    asyncExecution: false
    errorBlobUri: 'https://mystorageaccount.blob.core.windows.net/mycontainer/MyScriptError.txt'
    outputBlobUri: 'https://mystorageaccount.blob.core.windows.net/myscriptoutputcontainer/MyScriptoutput.txt'
    parameters: [
      {
        name: 'param1'
        value: 'value1'
      }
      {
        name: 'param2'
        value: 'value2'
      }
    ]
    runAsPassword: '<runAsPassword>'
    runAsUser: 'user1'
    source: {
      script: 'Write-Host Hello World!'
    }
    timeoutInSeconds: 3600
  }
}
```

## microsoft.hybridcompute/privatelinkscopes

PrivateLinkScopeCreate
```bicep
resource exampleResource 'Microsoft.HybridCompute/privateLinkScopes@2025-08-21-preview' = {
  name: 'example'
  location: 'westus'
}
```

PrivateLinkScopeUpdate
```bicep
resource exampleResource 'Microsoft.HybridCompute/privateLinkScopes@2025-08-21-preview' = {
  name: 'example'
  location: 'westus'
  tags: {
    Tag1: 'Value1'
  }
}
```

## microsoft.hybridcompute/privatelinkscopes/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections@2025-08-21-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@contoso.com'
      status: 'Approved'
    }
  }
}
```

## microsoft.hybridcompute/settings

SettingsUpdate
```bicep
resource exampleResource 'Microsoft.HybridCompute/settings@2025-08-21-preview' = {
  name: 'example'
  properties: {
    gatewayProperties: {
      gatewayResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/hybridRG/providers/Microsoft.HybridCompute/gateways/newGateway'
    }
  }
}
```
