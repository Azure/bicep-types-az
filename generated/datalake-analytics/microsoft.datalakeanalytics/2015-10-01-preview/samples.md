# Microsoft.DataLakeAnalytics
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.datalakeanalytics/accounts

Creates the specified Data Lake Analytics account. This supplies the user with computation services for Data Lake Analytics workloads.
```bicep
resource exampleResource 'Microsoft.DataLakeAnalytics/accounts@2015-10-01-preview' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    computePolicies: [
      {
        name: 'test_policy'
        properties: {
          maxDegreeOfParallelismPerJob: 1
          minPriorityPerJob: 1
          objectId: '34adfa4f-cedf-4dc0-ba29-b6d1a69ab345'
          objectType: 'User'
        }
      }
    ]
    dataLakeStoreAccounts: [
      {
        name: 'test_adls'
        properties: {
          suffix: 'test_suffix'
        }
      }
    ]
    defaultDataLakeStoreAccount: 'test_adls'
    firewallAllowAzureIps: 'Enabled'
    firewallRules: [
      {
        name: 'test_rule'
        properties: {
          endIpAddress: '2.2.2.2'
          startIpAddress: '1.1.1.1'
        }
      }
    ]
    firewallState: 'Enabled'
    maxDegreeOfParallelism: 30
    maxDegreeOfParallelismPerJob: 1
    maxJobCount: 3
    minPriorityPerJob: 1
    newTier: 'Consumption'
    queryStoreRetention: 30
    storageAccounts: [
      {
        name: 'test_storage'
        properties: {
          accessKey: '34adfa4f-cedf-4dc0-ba29-b6d1a69ab346'
          suffix: 'test_suffix'
        }
      }
    ]
  }
  tags: {
    test_key: 'test_value'
  }
}
```

## microsoft.datalakeanalytics/accounts/computepolicies

Creates or updates the specified compute policy
```bicep
resource exampleResource 'Microsoft.DataLakeAnalytics/accounts/computePolicies@2015-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    maxDegreeOfParallelismPerJob: 10
    minPriorityPerJob: 30
    objectId: '776b9091-8916-4638-87f7-9c989a38da98'
    objectType: 'User'
  }
}
```

## microsoft.datalakeanalytics/accounts/datalakestoreaccounts

Adds a Data Lake Store account
```bicep
resource exampleResource 'Microsoft.DataLakeAnalytics/accounts/DataLakeStoreAccounts@2015-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    suffix: 'test_suffix'
  }
}
```

## microsoft.datalakeanalytics/accounts/firewallrules

Creates or updates the specified firewall rule
```bicep
resource exampleResource 'Microsoft.DataLakeAnalytics/accounts/firewallRules@2015-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '2.2.2.2'
    startIpAddress: '1.1.1.1'
  }
}
```

## microsoft.datalakeanalytics/accounts/storageaccounts

Adds an Azure Storage account
```bicep
resource exampleResource 'Microsoft.DataLakeAnalytics/accounts/StorageAccounts@2015-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accessKey: '34adfa4f-cedf-4dc0-ba29-b6d1a69ab346'
    suffix: 'test_suffix'
  }
}
```
