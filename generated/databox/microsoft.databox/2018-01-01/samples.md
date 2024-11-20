# Microsoft.DataBox

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
