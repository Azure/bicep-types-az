# Microsoft.HybridData

## microsoft.hybriddata/datamanagers

DataManagers_CreatePUT41
```bicep
resource exampleResource 'Microsoft.HybridData/dataManagers@2019-06-01' = {
  name: 'example'
  location: 'westus'
}
```

## microsoft.hybriddata/datamanagers/dataservices/jobdefinitions

JobDefinitions_CreateOrUpdatePUT83
```bicep
resource exampleResource 'Microsoft.HybridData/dataManagers/dataServices/jobDefinitions@2019-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataServiceInput: {
      AzureStorageType: 'Blob'
      BackupChoice: 'UseExistingLatest'
      ContainerName: 'containerfromtest'
      DeviceName: '8600-SHG0997877L71FC'
      FileNameFilter: '*'
      IsDirectoryMode: false
      RootDirectories: [
        '\\'
      ]
      VolumeNames: [
        'TestAutomation'
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
resource exampleResource 'Microsoft.HybridData/dataManagers/dataStores@2019-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customerSecrets: [
      {
        algorithm: 'RSA1_5'
        keyIdentifier: 'StorageAccountAccessKey'
        keyValue: 'Of4H9eF03G8QuxvkZQEbFWv3YdN3U//WugzuqReQekbXXQyg+QSicVKrwSOOKVi1zWMYGbKg7d5/ES2gdz+O5ZEw89bvE4mJD/wQmkIsqhPnbN0gyVK6nZePXVUU1A+UzjLfvhSA6KyUQfzNAZ5/TLt6fo1JyQrKTtkvnkLFyfv1AqBZ+dw8JK3RZi/rEN8HD3R3qsBwUYfyEuGLGiujy2CGrr/1uPiUVMR6QuFWRsjm39eMSHa4maLg4tQ0IY/jIy8rMlx3KjF3CcCbPzAqEq5vXy37wkjZbus771te1gLSrzcpVKIMg4DrmgaoJ02jAu+izBjNgLXAFPSUneQ8yw==:ezMkh4PMhCnjJtYkpTaP0SdblP5VAeRe4glW2PgIzICHw3T8ZyGDoaTrCv4/m5wtcEhWdtxhta+j1MQWlK5MIA+hvf8QjIDIjQv696ov5y+pcFe/upd2ekGOei7FCwB2u7I8WnkAtIKTUkf6eDQBZXm26DjfG1Dlc+Mjjq+AerukEa6WpOyqrD7Qub26Pgmj4AsuBx19X1EAmTZacubkoiNagXM8V+IDanHOhLMvfgQ7rw8oZhWfofxi4m+eJqjOXXaqSyorNK8UEcqP6P9pDP8AN8ulXEx6rZy2B5Oi0vSV+wlRLbUuQslga4ItOGxctW/ZX8uWozt+5A3k4URt6A=='
      }
      {
        algorithm: 'RSA1_5'
        keyIdentifier: 'StorageAccountAccessKeyForQueue'
        keyValue: 'Of4H9eF03G8QuxvkZQEbFWv3YdN3U//WugzuqReQekbXXQyg+QSicVKrwSOOKVi1zWMYGbKg7d5/ES2gdz+O5ZEw89bvE4mJD/wQmkIsqhPnbN0gyVK6nZePXVUU1A+UzjLfvhSA6KyUQfzNAZ5/TLt6fo1JyQrKTtkvnkLFyfv1AqBZ+dw8JK3RZi/rEN8HD3R3qsBwUYfyEuGLGiujy2CGrr/1uPiUVMR6QuFWRsjm39eMSHa4maLg4tQ0IY/jIy8rMlx3KjF3CcCbPzAqEq5vXy37wkjZbus771te1gLSrzcpVKIMg4DrmgaoJ02jAu+izBjNgLXAFPSUneQ8yw==:ezMkh4PMhCnjJtYkpTaP0SdblP5VAeRe4glW2PgIzICHw3T8ZyGDoaTrCv4/m5wtcEhWdtxhta+j1MQWlK5MIA+hvf8QjIDIjQv696ov5y+pcFe/upd2ekGOei7FCwB2u7I8WnkAtIKTUkf6eDQBZXm26DjfG1Dlc+Mjjq+AerukEa6WpOyqrD7Qub26Pgmj4AsuBx19X1EAmTZacubkoiNagXM8V+IDanHOhLMvfgQ7rw8oZhWfofxi4m+eJqjOXXaqSyorNK8UEcqP6P9pDP8AN8ulXEx6rZy2B5Oi0vSV+wlRLbUuQslga4ItOGxctW/ZX8uWozt+5A3k4URt6A=='
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
resource exampleResource 'Microsoft.HybridData/dataManagers/dataStores@2019-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customerSecrets: [
      {
        algorithm: 'RSA1_5'
        keyIdentifier: 'ServiceEncryptionKey'
        keyValue: 'EVuEBV40qv23xDRL4NZBuMms4e3So6ikHjrQYRvG9NloqxdgPOg+ZYzpho5lytI4fmv0ANmRIvDiDboRXcUVSjbB9T2gm19fMIuwZa4FK2+LYEgMqKK1GaLkk7xC8f5IeFUXLo6KyBBpaAiayTnWDcHuYEpMiGrV7trDDcbhMRefO3CHecmH3Z7ye8L0RQ/e7WW8GlCKZj3m0BaG7OrJgjai8gyDfMfGAG5rTqEhDVh2hLQ+TjvUjcOFwHvJusqKTENtbJTNQYmL9wZXsnwBvUwxqrGieILNB7V3GD1Ow9OiV0UCDW1e9LnMueukg+l7YJCU9FUhIPh/nSif6p32zw==:jCfio+pDtY3BSPZDpDJ0L6QdXLYMeOmxaFWtYTOZkNqNTgT8Loc/KSQRjtWS5K4N4btbznuSJ/dzg0aZEzlXgKDSuZgMfd4Ch92ZwAC/BkeCmVrTjiKJsoQXO1IICCUf7GHGBbYnnpsNJcEn4vyc9NXyKwOBjeU+I9AyK7PtYiC03RLpTS6xttFCICteBV0uoBHAiV0chZ5VIIUUMjO9u8EhHqRY7NNcGbWdVJeAb6J3vH4E/DHkQj+DXlpjcLvmK/uqBwxfNju30RJhR04Nmz6zcv/zTcvS0uN5hEPQoHLyv84hjnc4omg/gmNjo2cDW64QxA3RTJ5Sl///4xTBkg=='
      }
    ]
    dataStoreTypeId: '/subscriptions/6e0219f5-327a-4365-904f-05eed4227ad7/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.HybridData/dataManagers/TestAzureSDKOperations/dataStoreTypes/StorSimple8000Series'
    extendedProperties: {
      extendedSaKey: {
      }
      resourceId: '/subscriptions/c5fc377d-0085-41b9-86b7-cc96dc56d1e9/resourceGroups/ForDMS/providers/Microsoft.StorSimple/managers/BLR8600'
    }
    repositoryId: '/subscriptions/c5fc377d-0085-41b9-86b7-cc96dc56d1e9/resourceGroups/ForDMS/providers/Microsoft.StorSimple/managers/BLR8600'
    state: 'Enabled'
  }
}
```
