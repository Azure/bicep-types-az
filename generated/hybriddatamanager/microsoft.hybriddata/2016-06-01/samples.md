# Microsoft.HybridData

## microsoft.hybriddata/datamanagers

DataManagers_CreatePUT41
```bicep
resource exampleResource 'Microsoft.HybridData/dataManagers@2016-06-01' = {
  name: 'example'
  location: 'westus'
}
```

## microsoft.hybriddata/datamanagers/dataservices/jobdefinitions

JobDefinitions_CreateOrUpdatePUT83
```bicep
resource exampleResource 'Microsoft.HybridData/dataManagers/dataServices/jobDefinitions@2016-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataServiceInput: {
      AzureStorageType: 'Blob'
      BackupChoice: 'UseExistingLatest'
      ContainerName: 'containerfromtest'
      DeviceName: 'dmsdatasource'
      FileNameFilter: '*'
      IsDirectoryMode: false
      RootDirectories: [
        '\\'
      ]
      VolumeNames: [
        'dmsbvtvol'
      ]
    }
    dataSinkId: '/subscriptions/6e0219f5-327a-4365-904f-05eed4227ad7/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.HybridData/dataManagers/TestAzureSDKOperations/dataStores/TestAzureStorage1'
    dataSourceId: '/subscriptions/6e0219f5-327a-4365-904f-05eed4227ad7/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.HybridData/dataManagers/TestAzureSDKOperations/dataStores/TestStorSimpleSource1'
    runLocation: 'westus'
    state: 'Enabled'
    userConfirmation: 'Required'
  }
}
```

## microsoft.hybriddata/datamanagers/datastores

DataStores_CreateOrUpdate_DataSinkPUT162
```bicep
resource exampleResource 'Microsoft.HybridData/dataManagers/dataStores@2016-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customerSecrets: [
      {
        algorithm: 'RSA1_5'
        keyIdentifier: 'StorageAccountAccessKey'
        keyValue: 'Pses92T1jTpPBH2roHgNKArWVv57WomubD/9ukE2d0M89gIVnzc/0bfeoJVf0Med6Uvt4mzmOghFEVxqoBNXzKLgsCLVqvPkqdst4WzZbeel3k/NVkfDdf04eNPAm1FwM/hWZQlG3lGr/olCihW8AFHoiLEZWK8DC6UmHl8ittuuhzY/Ct8R5VXdMWavLdFg8G66TCSyH2aF/eeqzHcOBP4XFgbF2NxuvmEd/cY+y5lEon3TfdDwI0JcOumf5s4zHTWM5+StWa3SsvKxGPpJ27xik2FBo2kEqrtAAByi6HxXSinJB8DwXZicHIwjaOiTeiJUMADwZXwv1PLpwo5d1Q==:QBzHKcxhJkiIeLtFx84oLqDUd5p+oM2AwoKtZIgYVZhfKFw5VW2BfsigL2K7AGxyTNatwn6JZm9ylo8YhRZrn0eIVqLR4gCiRSwDHI7i6R/tqTfx8ZO/aJy6rTh/WW8d6vZOXXGeuRDAz6fYfjQKb9J/OhTq3cjfVouLt6bKdZsZve08NVZq0sNBYZftCabcOhVg5hamuDhQhemwqFMn6l1xrCWcq4e5YgJ90fbK5N66Wj5LNr2dU+scHH7YfM8a3IIhq51TObhXZ59oNnLhLGGA8j0K43MMKtQAnqpBc+hmwgwc8/DZLod1wnaPbJW5/fQ2HkF7vH9xakIip4bZ9Q=='
      }
      {
        algorithm: 'RSA1_5'
        keyIdentifier: 'StorageAccountAccessKeyForQueue'
        keyValue: 'Pses92T1jTpPBH2roHgNKArWVv57WomubD/9ukE2d0M89gIVnzc/0bfeoJVf0Med6Uvt4mzmOghFEVxqoBNXzKLgsCLVqvPkqdst4WzZbeel3k/NVkfDdf04eNPAm1FwM/hWZQlG3lGr/olCihW8AFHoiLEZWK8DC6UmHl8ittuuhzY/Ct8R5VXdMWavLdFg8G66TCSyH2aF/eeqzHcOBP4XFgbF2NxuvmEd/cY+y5lEon3TfdDwI0JcOumf5s4zHTWM5+StWa3SsvKxGPpJ27xik2FBo2kEqrtAAByi6HxXSinJB8DwXZicHIwjaOiTeiJUMADwZXwv1PLpwo5d1Q==:QBzHKcxhJkiIeLtFx84oLqDUd5p+oM2AwoKtZIgYVZhfKFw5VW2BfsigL2K7AGxyTNatwn6JZm9ylo8YhRZrn0eIVqLR4gCiRSwDHI7i6R/tqTfx8ZO/aJy6rTh/WW8d6vZOXXGeuRDAz6fYfjQKb9J/OhTq3cjfVouLt6bKdZsZve08NVZq0sNBYZftCabcOhVg5hamuDhQhemwqFMn6l1xrCWcq4e5YgJ90fbK5N66Wj5LNr2dU+scHH7YfM8a3IIhq51TObhXZ59oNnLhLGGA8j0K43MMKtQAnqpBc+hmwgwc8/DZLod1wnaPbJW5/fQ2HkF7vH9xakIip4bZ9Q=='
      }
    ]
    dataStoreTypeId: '/subscriptions/6e0219f5-327a-4365-904f-05eed4227ad7/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.HybridData/dataManagers/TestAzureSDKOperations/dataStoreTypes/AzureStorageAccount'
    extendedProperties: {
      extendedSaKey: {
      }
      extendedSaName: '/subscriptions/6e0219f5-327a-4365-904f-05eed4227ad7/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.Storage/storageAccounts/dmsdatasink'
      storageAccountNameForQueue: '/subscriptions/6e0219f5-327a-4365-904f-05eed4227ad7/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.Storage/storageAccounts/dmsdatasink'
    }
    repositoryId: '/subscriptions/6e0219f5-327a-4365-904f-05eed4227ad7/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.Storage/storageAccounts/dmsdatasink'
    state: 'Enabled'
  }
}
```

DataStores_CreateOrUpdate_DataSourcePUT162
```bicep
resource exampleResource 'Microsoft.HybridData/dataManagers/dataStores@2016-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customerSecrets: [
      {
        algorithm: 'RSA1_5'
        keyIdentifier: 'ServiceEncryptionKey'
        keyValue: 'vZqtembBBg2RC/UyYwZiexGOqujLcMYCmaywqf0sURqIidjxlSp86FGz+T2eRnb1XlYCqFf1CzPzwLpwHEuTJ8LP5hTV1yUiM+YnyKHIGdlQajLcVcFy8ji9n+jSS4J9PjjHsr5AKzW1w+y76UgTEpX7K9kFDWFVyDGEujvuB2bYBlxlKolMCOu0WHZYkBBYLob6a3mQgCHbXYj1mqTmdhPW+J+8tyBCzG6cjlvRJ9hcp9Ss3HV9TV6hrbqlUU3lE1FX8O5Dr6/TXi7tIU7hGfmS5psE0Kz+2PsJTX1R1AbkBpKObPwPxPoC5jCXFxwfmZOrNQdjZ7nu5+JHaLZylw==:tS9oSCAvIwOrkYRyD/jLahSLZypl4eNexW5N/pGqf9vsVfzMhmxob+O/Io48uCPxvtdDksef09OVXpxgaC65K2Og49W9rtRt8cvGyyC41cx5D2DP9fxAu7d/lREP9cWHgrRJlZ4JJFcqy+m+yqYKl3WPrTA2yoZpISGbWAPkj0Hk3IwRr1lmqKfCWtp0jNHnrIJmQ5BQaDLGXpohKQSrrftqz7TdBCYuorSntQz8pqHgc8MTiYMgMtgZ+HRKQ1F5ctOlP+6LJMS6/OFl/tnYb5BD6rn/RufB4OHhVDe9ZD5GMtkwqkUvU9b1v2n31mb63JLApxIi/o8OsSpkA8ZTCg=='
      }
    ]
    dataStoreTypeId: '/subscriptions/6e0219f5-327a-4365-904f-05eed4227ad7/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.HybridData/dataManagers/TestAzureSDKOperations/dataStoreTypes/StorSimple8000Series'
    extendedProperties: {
      extendedSaKey: {
      }
      resourceId: '/subscriptions/6e0219f5-327a-4365-904f-05eed4227ad7/resourceGroups/dmsdatasource/providers/Microsoft.StorSimple/managers/dmsdatasource'
    }
    repositoryId: '/subscriptions/6e0219f5-327a-4365-904f-05eed4227ad7/resourceGroups/dmsdatasource/providers/Microsoft.StorSimple/managers/dmsdatasource'
    state: 'Enabled'
  }
}
```
