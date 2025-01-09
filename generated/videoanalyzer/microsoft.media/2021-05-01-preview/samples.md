# Microsoft.Media
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.media/videoanalyzers

Create a Video Analyzer account
```bicep
resource exampleResource 'Microsoft.Media/videoAnalyzers@2021-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2': {
      }
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id3': {
      }
    }
  }
  location: 'South Central US'
  properties: {
    encryption: {
      type: 'SystemKey'
    }
    storageAccounts: [
      {
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.Storage/storageAccounts/storage1'
        identity: {
          userAssignedIdentity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2'
        }
      }
    ]
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.media/videoanalyzers/accesspolicies

Register access policy entity.
```bicep
resource exampleResource 'Microsoft.Media/videoAnalyzers/accessPolicies@2021-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authentication: {
      '@type': '#Microsoft.VideoAnalyzer.JwtAuthentication'
      audiences: [
        'audience1'
      ]
      claims: [
        {
          name: 'claimname1'
          value: 'claimvalue1'
        }
        {
          name: 'claimname2'
          value: 'claimvalue2'
        }
      ]
      issuers: [
        'issuer1'
        'issuer2'
      ]
      keys: [
        {
          '@type': '#Microsoft.VideoAnalyzer.RsaTokenKey'
          alg: 'RS256'
          e: 'ZLFzZTY0IQ=='
          kid: '123'
          n: 'YmFzZTY0IQ=='
        }
        {
          '@type': '#Microsoft.VideoAnalyzer.EccTokenKey'
          alg: 'ES256'
          kid: '124'
          x: 'XX=='
          y: 'YY=='
        }
      ]
    }
    role: 'Reader'
  }
}
```

## microsoft.media/videoanalyzers/edgemodules

Registers an edge module.
```bicep
resource exampleResource 'Microsoft.Media/videoAnalyzers/edgeModules@2021-05-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.media/videoanalyzers/videos

Register video entity.
```bicep
resource exampleResource 'Microsoft.Media/videoAnalyzers/videos@2021-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Sample Description 1'
    title: 'Sample Title 1'
  }
}
```
