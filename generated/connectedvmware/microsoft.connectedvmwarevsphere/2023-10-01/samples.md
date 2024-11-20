# Microsoft.ConnectedVMwarevSphere

## microsoft.connectedvmwarevsphere/resourcepools

CreateResourcePool
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/resourcePools@2023-10-01' = {
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

## microsoft.connectedvmwarevsphere/clusters

CreateCluster
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/clusters@2023-10-01' = {
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
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/hosts@2023-10-01' = {
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
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/datastores@2023-10-01' = {
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
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/vcenters@2023-10-01' = {
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

## microsoft.connectedvmwarevsphere/virtualmachinetemplates

CreateVirtualMachineTemplate
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates@2023-10-01' = {
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
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/virtualNetworks@2023-10-01' = {
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

## microsoft.connectedvmwarevsphere/vcenters/inventoryitems

CreateInventoryItem
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems@2023-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    inventoryType: 'ResourcePool'
  }
}
```

## microsoft.connectedvmwarevsphere/virtualmachineinstances

CreateVirtualMachine
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/virtualMachineInstances@2023-10-01' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso'
    type: 'customLocation'
  }
  properties: {
    hardwareProfile: {
      memorySizeMB: 4196
      numCPUs: 4
    }
    infrastructureProfile: {
      templateId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VirtualMachineTemplates/WebFrontEndTemplate'
      vCenterId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VCenters/ContosoVCenter'
    }
    placementProfile: {
      resourcePoolId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/ResourcePools/HRPool'
    }
  }
}
```

## microsoft.connectedvmwarevsphere/virtualmachineinstances/guestagents

CreateGuestAgent
```bicep
resource exampleResource 'Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/guestAgents@2023-10-01' = {
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
    privateLinkScopeResourceId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.HybridCompute/privateLinkScopes/privateLinkScopeName'
    provisioningAction: 'install'
  }
}
```
