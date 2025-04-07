# Microsoft.AzureBridge.Admin
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azurebridge.admin/activations

Return product name.
```bicep
resource exampleResource 'Microsoft.AzureBridge.Admin/activations@2016-01-01' = {
  name: 'example'
  displayName: 'default'
}
```

## microsoft.azurebridge.admin/activations/downloadedproducts

Puts the specified downloaded product.
```bicep
resource exampleResource 'Microsoft.AzureBridge.Admin/activations/downloadedProducts@2016-01-01' = {
  parent: parentResource 
  name: 'example'
  name: 'default/Canonical.UbuntuServer1710-ARM.1.0.6'
  type: 'Microsoft.AzureBridge.Admin/activations/downloadedProducts'
  id: '/subscriptions/b6a34e73-810f-4564-881a-8434c6c2e5c8/resourceGroups/azurestack-activation/providers/Microsoft.AzureBridge.Admin/activations/default/downloadedProducts/Canonical.UbuntuServer1710-ARM.1.0.6'
  properties: {
    galleryPackageBlobSasUri: '<galleryPackageBlobSasUri>'
    productDetailsProperties: {
      computeRole: 'IaaS'
      isSystemExtension: false
      sourceBlob: {
        uri: 'https://azstrptestwcu001.blob.core.windows.net/packages/Canonical.UbuntuServer1710.ARM.1.0.6/extension/vmext.zip?sv=2015-04-05&sr=b&sig=XtLzuO2rlqxyZOzfoTEDZW4DU9OxBZVCOw%2FVgY2%2FiUo%3D&se=2018-02-13T10%3A46%3A24Z&sp=r'
      }
      supportMultipleExtensions: false
      version: '1.0.6'
      vmOsType: 'Linux'
      vmScaleSetEnabled: false
    }
    productKind: 'virtualMachineExtension'
  }
}
```
