# Microsoft.DataBox

## microsoft.databox/jobs

JobsCreate
```bicep
resource exampleResource 'Microsoft.DataBox/jobs@2020-11-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    transferType: 'ImportToAzure'
    details: {
      contactDetails: {
        contactName: 'XXXX XXXX'
        emailList: [
          'xxxx@xxxx.xxx'
        ]
        phone: '0000000000'
        phoneExtension: ''
      }
      dataImportDetails: [
        {
          accountDetails: {
            dataAccountType: 'StorageAccount'
            storageAccountId: '/subscriptions/YourSubscriptionId/resourcegroups/YourResourceGroupName/providers/Microsoft.Storage/storageAccounts/YourStorageAccountName'
          }
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

JobsCreateDevicePassword
```bicep
resource exampleResource 'Microsoft.DataBox/jobs@2020-11-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    transferType: 'ImportToAzure'
    details: {
      contactDetails: {
        contactName: 'XXXX XXXX'
        emailList: [
          'xxxx@xxxx.xxx'
        ]
        phone: '0000000000'
        phoneExtension: ''
      }
      dataImportDetails: [
        {
          accountDetails: {
            dataAccountType: 'StorageAccount'
            sharePassword: '<sharePassword>'
            storageAccountId: '/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Storage/storageAccounts/YourStorageAccountName'
          }
        }
      ]
      devicePassword: '<devicePassword>'
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

JobsCreateDoubleEncryption
```bicep
resource exampleResource 'Microsoft.DataBox/jobs@2020-11-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    transferType: 'ImportToAzure'
    details: {
      contactDetails: {
        contactName: 'XXXX XXXX'
        emailList: [
          'xxxx@xxxx.xxx'
        ]
        phone: '0000000000'
        phoneExtension: ''
      }
      dataImportDetails: [
        {
          accountDetails: {
            dataAccountType: 'StorageAccount'
            storageAccountId: '/subscriptions/YourSubscriptionId/resourcegroups/YourResourceGroupName/providers/Microsoft.Storage/storageAccounts/YourStorageAccountName'
          }
        }
      ]
      jobDetailsType: 'DataBox'
      preferences: {
        encryptionPreferences: {
          doubleEncryption: 'Enabled'
        }
      }
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

JobsCreateExport
```bicep
resource exampleResource 'Microsoft.DataBox/jobs@2020-11-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    transferType: 'ExportFromAzure'
    details: {
      contactDetails: {
        contactName: 'XXXX XXXX'
        emailList: [
          'xxxx@xxxx.xxx'
        ]
        phone: '0000000000'
        phoneExtension: ''
      }
      dataExportDetails: [
        {
          accountDetails: {
            dataAccountType: 'StorageAccount'
            storageAccountId: '/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Storage/storageAccounts/YourStorageAccountName'
          }
          transferConfiguration: {
            transferAllDetails: {
              include: {
                dataAccountType: 'StorageAccount'
                transferAllBlobs: true
                transferAllFiles: true
              }
            }
            transferConfigurationType: 'TransferAll'
          }
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

JobsCreateWithUserAssignedIdentity
```bicep
resource exampleResource 'Microsoft.DataBox/jobs@2020-11-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testIdentity: {
      }
    }
  }
  location: 'westus'
  properties: {
    transferType: 'ImportToAzure'
    details: {
      contactDetails: {
        contactName: 'XXXX XXXX'
        emailList: [
          'xxxx@xxxx.xxx'
        ]
        phone: '0000000000'
        phoneExtension: ''
      }
      dataImportDetails: [
        {
          accountDetails: {
            dataAccountType: 'StorageAccount'
            storageAccountId: '/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Storage/storageAccounts/YourStorageAccountName'
          }
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
