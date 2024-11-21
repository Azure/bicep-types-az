# Microsoft.ScVmm
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.scvmm/availabilitysets

CreateAvailabilitySet
```bicep
resource exampleResource 'Microsoft.ScVmm/availabilitySets@2020-06-05-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.Arc/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    availabilitySetName: 'hr-avset'
    vmmServerId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ScVmm/VMMServers/ContosoVMMServer'
  }
}
```

## microsoft.scvmm/clouds

CreateCloud
```bicep
resource exampleResource 'Microsoft.ScVmm/clouds@2020-06-05-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.Arc/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    uuid: 'aaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    vmmServerId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.SCVMM/VMMServers/ContosoVMMServer'
  }
}
```

## microsoft.scvmm/virtualmachines

CreateVirtualMachine
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualMachines@2020-06-05-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.Arc/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    cloudId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.SCVMM/Clouds/HRCloud'
    hardwareProfile: {
      cpuCount: 4
      memoryMB: 4096
    }
    templateId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.SCVMM/VirtualMachineTemplates/HRVirtualMachineTemplate'
    vmmServerId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.SCVMM/VMMServers/ContosoVMMServer'
  }
}
```

## microsoft.scvmm/virtualmachinetemplates

CreateVirtualMachineTemplate
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualMachineTemplates@2020-06-05-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.Arc/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    uuid: 'aaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    vmmServerId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.SCVMM/VMMServers/ContosoVMMServer'
  }
}
```

## microsoft.scvmm/virtualnetworks

CreateVirtualNetwork
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualNetworks@2020-06-05-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.Arc/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    uuid: 'aaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    vmmServerId: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.SCVMM/VMMServers/ContosoVMMServer'
  }
}
```

## microsoft.scvmm/vmmservers

CreateVMMServer
```bicep
resource exampleResource 'Microsoft.ScVmm/vmmServers@2020-06-05-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.Arc/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    credentials: {
      password: 'password'
      username: 'testuser'
    }
    fqdn: 'VMM.contoso.com'
    port: 1234
  }
}
```

## microsoft.scvmm/vmmservers/inventoryitems

CreateInventoryItem
```bicep
resource exampleResource 'Microsoft.ScVmm/vmmServers/inventoryItems@2020-06-05-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    inventoryType: 'Cloud'
  }
}
```
