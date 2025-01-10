# Microsoft.Chaos
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.chaos/experiments

Create/update a Experiment in a resource group.
```bicep
resource exampleResource 'Microsoft.Chaos/experiments@2024-11-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2euap'
  properties: {
    customerDataStorage: {
      blobContainerName: 'azurechaosstudioexperiments'
      storageAccountResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/exampleRG/providers/Microsoft.Storage/storageAccounts/exampleStorage'
    }
    selectors: [
      {
        type: 'List'
        id: 'selector1'
        targets: [
          {
            type: 'ChaosTarget'
            id: '/subscriptions/6b052e15-03d3-4f17-b2e1-be7f07588291/resourceGroups/exampleRG/providers/Microsoft.Compute/virtualMachines/exampleVM/providers/Microsoft.Chaos/targets/Microsoft-VirtualMachine'
          }
        ]
      }
    ]
    steps: [
      {
        name: 'step1'
        branches: [
          {
            name: 'branch1'
            actions: [
              {
                name: 'urn:csci:microsoft:virtualMachine:shutdown/1.0'
                type: 'continuous'
                duration: 'PT10M'
                parameters: [
                  {
                    key: 'abruptShutdown'
                    value: 'false'
                  }
                ]
                selectorId: 'selector1'
              }
            ]
          }
        ]
      }
    ]
  }
  tags: {
    key2138: 'fjaeecgnvqd'
    key7131: 'ryohwcoiccwsnewjigfmijz'
  }
}
```

## microsoft.chaos/privateaccesses

Create or Update a private access resource
```bicep
resource exampleResource 'Microsoft.Chaos/privateAccesses@2024-11-01-preview' = {
  name: 'example'
  location: 'centraluseuap'
  properties: {
  }
}
```

Create or Update a private access resource with publicNetworkAccess
```bicep
resource exampleResource 'Microsoft.Chaos/privateAccesses@2024-11-01-preview' = {
  name: 'example'
  location: 'centraluseuap'
  properties: {
    publicNetworkAccess: 'Enabled'
  }
}
```

## microsoft.chaos/targets

Create/update a Target that extends a virtual machine resource.
```bicep
resource exampleResource 'Microsoft.Chaos/targets@2024-11-01-preview' = {
  name: 'example'
  properties: {
  }
}
```

## microsoft.chaos/targets/capabilities

Create/update a Capability that extends a virtual machine Target resource.
```bicep
resource exampleResource 'Microsoft.Chaos/targets/capabilities@2024-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```
