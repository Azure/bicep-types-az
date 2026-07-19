# Microsoft.ConnectedVMwarevSphere
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.connectedvmwarevsphere/clusters

CreateCluster
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/clusters@2022-07-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    moRefId: 'aaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    vCenterId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VCenters/ContosoVCenter'
  }
}
```

## microsoft.connectedvmwarevsphere/datastores

CreateDatastore
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/datastores@2022-07-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    moRefId: 'aaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    vCenterId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VCenters/ContosoVCenter'
  }
}
```

## microsoft.connectedvmwarevsphere/hosts

CreateHost
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/hosts@2022-07-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    moRefId: 'aaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    vCenterId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VCenters/ContosoVCenter'
  }
}
```

## microsoft.connectedvmwarevsphere/resourcepools

CreateResourcePool
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/resourcePools@2022-07-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    moRefId: 'aaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    vCenterId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VCenters/ContosoVCenter'
  }
}
```

## microsoft.connectedvmwarevsphere/vcenters

CreateVCenter
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/vcenters@2022-07-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    credentials: {
      password: '<password>'
      username: 'tempuser'
    }
    fqdn: 'ContosoVMware.contoso.com'
    port: 1234
  }
}
```

## microsoft.connectedvmwarevsphere/vcenters/inventoryitems

CreateInventoryItem
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems@2022-07-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    inventoryType: 'ResourcePool'
  }
}
```

## microsoft.connectedvmwarevsphere/virtualmachines

CreateVirtualMachine
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/virtualMachines@2022-07-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    hardwareProfile: {
      memorySizeMB: 4196
      numCPUs: 4
    }
    resourcePoolId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/ResourcePools/HRPool'
    templateId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VirtualMachineTemplates/WebFrontEndTemplate'
    vCenterId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VCenters/ContosoVCenter'
  }
}
```

## microsoft.connectedvmwarevsphere/virtualmachines/extensions

Create or Update a Machine Extension (PUT)
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions@2022-07-15-preview' = {
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

## microsoft.connectedvmwarevsphere/virtualmachines/guestagents

CreateGuestAgent
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents@2022-07-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    credentials: {
      password: '<password>'
      username: 'tempuser'
    }
    httpProxyConfig: {
      httpsProxy: 'http://192.1.2.3:8080'
    }
    provisioningAction: 'install'
  }
}
```

## microsoft.connectedvmwarevsphere/virtualmachines/hybrididentitymetadata

CreateHybridIdentityMetadata
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata@2022-07-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    publicKey: '8ec7d60c-9700-40b1-8e6e-e5b2f6f477f2'
    vmId: 'f8b82dff-38ef-4220-99ef-d3a3f86ddc6c'
  }
}
```

## microsoft.connectedvmwarevsphere/virtualmachinetemplates

CreateVirtualMachineTemplate
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates@2022-07-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    moRefId: 'aaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    vCenterId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VCenters/ContosoVCenter'
  }
}
```

## microsoft.connectedvmwarevsphere/virtualnetworks

CreateVirtualNetwork
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/virtualNetworks@2022-07-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    moRefId: 'aaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    vCenterId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VCenters/ContosoVCenter'
  }
}
```
