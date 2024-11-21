# Microsoft.BareMetalInfrastructure
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.baremetalinfrastructure/baremetalstorageinstances

Put a new AzureBareMetalStorageInstance
```bicep
resource exampleResource 'Microsoft.BareMetalInfrastructure/bareMetalStorageInstances@2023-08-04-preview' = {
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
