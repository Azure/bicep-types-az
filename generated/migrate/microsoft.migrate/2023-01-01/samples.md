# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/migrateprojects

MigrateProjectsController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects@2023-01-01' = {
  name: 'example'
  eTag: 'qo'
  location: 'wqwxnhfwxikmekh'
  properties: {
    publicNetworkAccess: 'NotSpecified'
    serviceEndpoint: 'awndnxpkgqn'
    utilityStorageAccountId: 'clsfdzmxiposuayenkqvrvkmyodvl'
  }
}
```

MigrateProjectsController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects@2023-01-01' = {
  name: 'example'
}
```

## microsoft.migrate/migrateprojects/privateendpointconnectionproxies

PrivateEndpointConnectionProxyController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects/privateEndpointConnectionProxies@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  eTag: 'ftvkdifbymdoybmuhqocd'
  properties: {
    remotePrivateEndpoint: {
      connectionDetails: [
        {
          groupId: 'h'
          id: 'khwrvxsvodxkggvgbckqfzhuiqfhrb'
          linkIdentifier: 'bvzpt'
          memberName: 'xssdfavvmtwgbsgrjpmtybkprifvyq'
          privateIpAddress: 'glbd'
        }
      ]
      id: 'nganwgltitktejoo'
      manualPrivateLinkServiceConnections: [
        {
          name: 'odbxispygy'
          groupIds: [
            'iodlcfjm'
          ]
          id: 'fufgetajboxgmnmimjbauwwunqmg'
          requestMessage: 'oqogvejy'
        }
      ]
      privateLinkServiceConnections: [
        {
          name: 'odbxispygy'
          groupIds: [
            'iodlcfjm'
          ]
          id: 'fufgetajboxgmnmimjbauwwunqmg'
          requestMessage: 'oqogvejy'
        }
      ]
      privateLinkServiceProxies: [
        {
          groupConnectivityInformation: [
            {
              customerVisibleFqdns: [
                'yecaabcylpewkynpsrgbpzt'
              ]
              groupId: 'oajwuwjbjpxuqcrgsmpsu'
              id: 's'
              internalFqdn: 'zbwuonwrvbk'
              memberName: 'mb'
              privateLinkServiceArmRegion: 'zjdpbogbmybiimpfkydvfkvvbql'
              redirectMapId: 'aljuztnsxn'
            }
          ]
          id: 'jpoxlghslkrrwlvcopuvyatlzs'
          remotePrivateEndpointConnection: {
          }
          remotePrivateLinkServiceConnectionState: {
            description: 'vhtgysdjzdgsimxmjuhcuzm'
            actionsRequired: 'poxbvbemmarin'
            status: 'Approved'
          }
        }
      ]
    }
  }
}
```

PrivateEndpointConnectionProxyController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects/privateEndpointConnectionProxies@2023-01-01' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.migrate/migrateprojects/privateendpointconnections

PrivateEndpointConnectionController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects/privateEndpointConnections@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
    }
    privateLinkServiceConnectionState: {
      description: 'vhtgysdjzdgsimxmjuhcuzm'
      actionsRequired: 'poxbvbemmarin'
      status: 'Approved'
    }
  }
}
```

PrivateEndpointConnectionController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects/privateEndpointConnections@2023-01-01' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.migrate/migrateprojects/solutions

SolutionsController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects/solutions@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  etag: 'lypmszsqdopftjbgfwqrxzz'
  properties: {
    cleanupState: 'None'
    goal: 'Servers'
    purpose: 'Discovery'
    status: 'Inactive'
    summary: {
    }
    tool: 'ServerDiscovery'
    details: {
      assessmentCount: 7
      extendedDetails: {
        key9031: 'ombnjq'
      }
      groupCount: 30
    }
  }
}
```

SolutionsController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects/solutions@2023-01-01' = {
  parent: parentResource 
  name: 'example'
}
```
