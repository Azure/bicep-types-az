# Microsoft.ScVmm
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.scvmm/availabilitysets

CreateAvailabilitySet
```bicep
resource exampleResource 'Microsoft.ScVmm/availabilitySets@2022-05-21-preview' = {
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
resource exampleResource 'Microsoft.ScVmm/clouds@2022-05-21-preview' = {
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
resource exampleResource 'Microsoft.ScVmm/virtualMachines@2022-05-21-preview' = {
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

## microsoft.scvmm/virtualmachines/extensions

Create or Update a Machine Extension (PUT)
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualMachines/extensions@2022-05-21-preview' = {
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

## microsoft.scvmm/virtualmachines/guestagents

CreateGuestAgent
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualMachines/guestAgents@2022-05-21-preview' = {
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

## microsoft.scvmm/virtualmachines/hybrididentitymetadata

CreateHybridIdentityMetadata
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualMachines/hybridIdentityMetadata@2022-05-21-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    publicKey: '8ec7d60c-9700-40b1-8e6e-e5b2f6f477f2'
    resourceUid: 'f8b82dff-38ef-4220-99ef-d3a3f86ddc6c'
  }
}
```

## microsoft.scvmm/virtualmachinetemplates

CreateVirtualMachineTemplate
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualMachineTemplates@2022-05-21-preview' = {
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
resource exampleResource 'Microsoft.ScVmm/virtualNetworks@2022-05-21-preview' = {
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
resource exampleResource 'Microsoft.ScVmm/vmmServers@2022-05-21-preview' = {
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
resource exampleResource 'Microsoft.ScVmm/vmmServers/inventoryItems@2022-05-21-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    inventoryType: 'Cloud'
  }
}
```
