# Microsoft.DataBox
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.databox/jobs

JobsCreate
```bicep
resource exampleResource 'Microsoft.DataBox/jobs@2018-01-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    details: {
      contactDetails: {
        contactName: 'XXXX XXXX'
        emailList: [
          'xxxx@xxxx.xxx'
        ]
        phone: '0000000000'
        phoneExtension: ''
      }
      destinationAccountDetails: [
        {
          dataDestinationType: 'StorageAccount'
          storageAccountId: '/subscriptions/YourSubscriptionId/resourcegroups/YourResourceGroupName/providers/Microsoft.Storage/storageAccounts/YourStorageAccountName'
        }
      ]
      jobDetailsType: 'DataBox'
      shippingAddress: {
        addressType: 'Commercial'
        city: 'XXXX XXXX'
        companyName: 'XXXX XXXX'
        country: 'XX'
        postalCode: '00000'
        stateOrProvince: 'XX'
        streetAddress1: 'XXXX XXXX'
        streetAddress2: 'XXXX XXXX'
      }
    }
  }
  sku: {
    name: 'DataBox'
  }
}
```
