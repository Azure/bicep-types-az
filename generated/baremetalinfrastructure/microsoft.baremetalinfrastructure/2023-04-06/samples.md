# Microsoft.BareMetalInfrastructure

## microsoft.baremetalinfrastructure/baremetalstorageinstances

Put a new AzureBareMetalStorageInstance
```bicep
resource exampleResource 'Microsoft.BareMetalInfrastructure/bareMetalStorageInstances@2023-04-06' = {
  name: 'example'
  location: 'westus2'
  properties: {
    azureBareMetalStorageInstanceUniqueIdentifier: '23415635-4d7e-41dc-9598-8194f22c24e9'
    storageProperties: {
      generation: 'Gen4'
      hardwareType: 'NetApp'
      offeringType: 'EPIC'
      provisioningState: 'Succeeded'
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
