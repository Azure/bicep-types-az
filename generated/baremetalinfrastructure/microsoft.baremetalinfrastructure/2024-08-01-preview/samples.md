# Microsoft.BareMetalInfrastructure
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.baremetalinfrastructure/baremetalinstances

AzureBareMetalInstances_Create
```bicep
resource exampleResource 'Microsoft.BareMetalInfrastructure/bareMetalInstances@2024-08-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    azureBareMetalInstanceId: '23415635-4d7e-41dc-9598-8194f22c24e1'
    hardwareProfile: {
      azureBareMetalInstanceSize: 'S72'
      hardwareType: 'Cisco_UCS'
    }
    hwRevision: 'Rev 3'
    networkProfile: {
      circuitId: '/subscriptions/f0f4887f-d13c-4943-a8ba-d7da28d2a3fd/resourceGroups/myResourceGroup/providers/Microsoft.Network/expressRouteCircuit'
      networkInterfaces: [
        {
          ipAddress: '100.100.100.100'
        }
      ]
    }
    osProfile: {
      computerName: 'myComputerName'
      osType: 'SUSE'
      sshPublicKey: '{ssh-rsa public key}'
      version: '12 SP1'
    }
    powerState: 'started'
    proximityPlacementGroup: '/subscriptions/f0f4887f-d13c-4943-a8ba-d7da28d2a3fd/resourceGroups/myResourceGroup/providers/Microsoft.Compute/proximityPlacementGroups/myplacementgroup'
    storageProfile: {
      nfsIpAddress: '200.200.200.200'
    }
  }
  tags: {
    testkey: 'testvalue'
  }
}
```

## microsoft.baremetalinfrastructure/baremetalstorageinstances

Put a new AzureBareMetalStorageInstance
```bicep
resource exampleResource 'Microsoft.BareMetalInfrastructure/bareMetalStorageInstances@2024-08-01-preview' = {
  name: 'example'
  location: 'westus2'
  properties: {
    azureBareMetalStorageInstanceUniqueIdentifier: '23415635-4d7e-41dc-9598-8194f22c24e9'
    storageProperties: {
      generation: 'Gen4'
      hardwareType: 'NetApp'
      offeringType: 'EPIC'
      storageBillingProperties: {
        azureBareMetalStorageInstanceSize: ''
        billingMode: 'PAYG'
      }
      storageType: 'FC'
      workloadType: 'ODB'
    }
  }
  tags: {
    key: 'value'
  }
}
```
