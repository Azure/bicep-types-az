# Microsoft.Storage
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storage/storageaccounts

StorageAccountCreate
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2018-11-01' = {
  name: 'example'
  kind: 'Storage'
  location: 'eastus2euap'
  properties: {
    azureFilesAadIntegration: true
    isHnsEnabled: true
  }
  sku: {
    name: 'Standard_GRS'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.storage/storageaccounts/blobservices

PutBlobServices
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices@2018-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cors: {
      corsRules: [
        {
          allowedHeaders: [
            'x-ms-meta-abc'
            'x-ms-meta-data*'
            'x-ms-meta-target*'
          ]
          allowedMethods: [
            'GET'
            'HEAD'
            'POST'
            'OPTIONS'
            'MERGE'
            'PUT'
          ]
          allowedOrigins: [
            'http://www.contoso.com'
            'http://www.fabrikam.com'
          ]
          exposedHeaders: [
            'x-ms-meta-*'
          ]
          maxAgeInSeconds: 100
        }
        {
          allowedHeaders: [
            '*'
          ]
          allowedMethods: [
            'GET'
          ]
          allowedOrigins: [
            '*'
          ]
          exposedHeaders: [
            '*'
          ]
          maxAgeInSeconds: 2
        }
        {
          allowedHeaders: [
            'x-ms-meta-12345675754564*'
          ]
          allowedMethods: [
            'GET'
            'PUT'
          ]
          allowedOrigins: [
            'http://www.abc23.com'
            'https://www.fabrikam.com/*'
          ]
          exposedHeaders: [
            'x-ms-meta-abc'
            'x-ms-meta-data*'
            'x -ms-meta-target*'
          ]
          maxAgeInSeconds: 2000
        }
      ]
    }
    defaultServiceVersion: '2017-07-29'
    deleteRetentionPolicy: {
      days: 300
      enabled: true
    }
  }
}
```

## microsoft.storage/storageaccounts/blobservices/containers

PutContainers
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices/containers@2018-11-01' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.storage/storageaccounts/blobservices/containers/immutabilitypolicies

CreateOrUpdateImmutabilityPolicy
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2018-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    immutabilityPeriodSinceCreationInDays: 3
  }
}
```

## microsoft.storage/storageaccounts/managementpolicies

StorageAccountSetManagementPolicies
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/managementPolicies@2018-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policy: {
      rules: [
        {
          name: 'olcmtest'
          type: 'Lifecycle'
          definition: {
            actions: {
              baseBlob: {
                delete: {
                  daysAfterModificationGreaterThan: 1000
                }
                tierToArchive: {
                  daysAfterModificationGreaterThan: 90
                }
                tierToCool: {
                  daysAfterModificationGreaterThan: 30
                }
              }
              snapshot: {
                delete: {
                  daysAfterCreationGreaterThan: 30
                }
              }
            }
            filters: {
              blobTypes: [
                'blockBlob'
              ]
              prefixMatch: [
                'olcmtestcontainer'
              ]
            }
          }
          enabled: true
        }
      ]
    }
  }
}
```
