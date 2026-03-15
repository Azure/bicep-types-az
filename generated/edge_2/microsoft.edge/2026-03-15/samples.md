# Microsoft.Edge
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.edge/disconnectedoperations

DisconnectedOperations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Edge/disconnectedOperations@2026-03-15' = {
  name: 'example'
  location: 'eastus'
  properties: {
    benefitPlans: {
      azureHybridWindowsServerBenefit: 'Enabled'
      windowsServerVmCount: 5
    }
    billingConfiguration: {
      autoRenew: 'Enabled'
      billingStatus: 'Enabled'
      current: {
        cores: 12
        pricingModel: 'Trial'
      }
    }
    billingModel: 'Capacity'
    connectionIntent: 'Disconnected'
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.edge/disconnectedoperations/hardwaresettings

HardwareSettings_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Edge/disconnectedOperations/hardwareSettings@2026-03-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deviceId: '663ee8a3-4ea8-48ec-8810-b1f8b86cb270'
    diskSpaceInGb: 1024
    hardwareSku: 'MC-760'
    memoryInGb: 64
    nodes: 3
    oem: 'Contoso'
    solutionBuilderExtension: 'xyz'
    totalCores: 200
    versionAtRegistration: '2411.2'
  }
}
```
