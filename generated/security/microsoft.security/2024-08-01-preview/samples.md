# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/defenderforstoragesettings

Creates or updates the Defender for Storage settings on a specified resource.
```bicep
resource exampleResource 'Microsoft.Security/defenderForStorageSettings@2024-08-01-preview' = {
  name: 'example'
  properties: {
    isEnabled: true
    malwareScanning: {
      onUpload: {
        capGBPerMonth: -1
        filters: {
          excludeBlobsLargerThan: 1024
          excludeBlobsWithPrefix: [
            'unscanned-container'
            'sample-container/logs'
          ]
          excludeBlobsWithSuffix: [
            '.log'
            '.jpg'
          ]
        }
        isEnabled: true
      }
      scanResultsEventGridTopicResourceId: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/SampleRG/providers/Microsoft.EventGrid/topics/sampletopic'
    }
    overrideSubscriptionLevelSettings: true
    sensitiveDataDiscovery: {
      isEnabled: true
    }
  }
}
```

## microsoft.security/securityconnectors

Create or update a security connector
```bicep
resource exampleResource 'Microsoft.Security/securityConnectors@2024-08-01-preview' = {
  name: 'example'
  etag: 'etag value (must be supplied for update)'
  location: 'Central US'
  properties: {
    environmentData: {
      environmentType: 'AwsAccount'
      scanInterval: 4
    }
    environmentName: 'AWS'
    hierarchyIdentifier: 'exampleHierarchyId'
    offerings: [
      {
        nativeCloudConnection: {
          cloudRoleArn: 'arn:aws:iam::00000000:role/ASCMonitor'
        }
        offeringType: 'CspmMonitorAws'
      }
    ]
  }
  tags: {
  }
}
```
