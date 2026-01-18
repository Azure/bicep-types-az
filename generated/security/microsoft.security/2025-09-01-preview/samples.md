# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/defenderforstoragesettings

Creates or updates the Defender for Storage settings on a specified resource.
```bicep
resource exampleResource 'Microsoft.Security/defenderForStorageSettings@2025-09-01-preview' = {
  name: 'example'
  properties: {
    isEnabled: true
    malwareScanning: {
      automatedResponse: 'BlobSoftDelete'
      blobScanResultsOptions: 'BlobIndexTags'
      onUpload: {
        capGBPerMonth: 10000
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

## microsoft.security/privatelinks

Create private link
```bicep
resource exampleResource 'Microsoft.Security/privateLinks@2025-09-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
  tags: {
    environment: 'production'
    owner: 'security-team'
    project: 'private-links'
  }
}
```

## microsoft.security/privatelinks/privateendpointconnections

Create or update private endpoint connection
```bicep
resource exampleResource 'Microsoft.Security/privateLinks/privateEndpointConnections@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by administrator'
      actionsRequired: 'None'
      status: 'Approved'
    }
  }
}
```
