# Microsoft.Chaos
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.chaos/experiments

Create/update a Experiment in a resource group.
```bicep
resource exampleResource 'Microsoft.Chaos/experiments@2021-09-15-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'centraluseuap'
  properties: {
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
                name: 'urn:csci:provider:providername:Shutdown/1.0'
                type: 'Continuous'
                duration: 'PT10M'
                parameters: {
                  restartWhenComplete: true
                }
                selectorId: 'selector1'
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## microsoft.chaos/targets

Create/update a Target that extends a virtual machine resource.
```bicep
resource exampleResource 'Microsoft.Chaos/targets@2021-09-15-preview' = {
  name: 'example'
  properties: {
    identities: [
      {
        type: 'CertificateSubjectIssuer'
        subject: 'CN=example.subject'
      }
    ]
  }
}
```

## microsoft.chaos/targets/capabilities

Create/update a Capability that extends a virtual machine Target resource.
```bicep
resource exampleResource 'Microsoft.Chaos/targets/capabilities@2021-09-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```
