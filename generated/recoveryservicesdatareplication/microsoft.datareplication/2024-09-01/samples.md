# Microsoft.DataReplication
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.datareplication/replicationfabrics

Puts the fabric.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationFabrics@2024-09-01' = {
  name: 'example'
  location: 'tqygutlpob'
  properties: {
    customProperties: {
      instanceType: 'FabricModelCustomProperties'
    }
  }
}
```

## microsoft.datareplication/replicationfabrics/fabricagents

Puts the fabric agent
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationFabrics/fabricAgents@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authenticationIdentity: {
      aadAuthority: 'bubwwbowfhdmujrt'
      applicationId: 'cwktzrwajuvfyyymfstpey'
      audience: 'dkjobanyqgzenivyxhvavottpc'
      objectId: 'khsiaqfbpuhp'
      tenantId: 'joclkkdovixwapephhxaqtefubhhmq'
    }
    customProperties: {
      instanceType: 'FabricAgentModelCustomProperties'
    }
    machineId: 'envzcoijbqhtrpncbjbhk'
    machineName: 'y'
    resourceAccessIdentity: {
      aadAuthority: 'bubwwbowfhdmujrt'
      applicationId: 'cwktzrwajuvfyyymfstpey'
      audience: 'dkjobanyqgzenivyxhvavottpc'
      objectId: 'khsiaqfbpuhp'
      tenantId: 'joclkkdovixwapephhxaqtefubhhmq'
    }
  }
}
```

## microsoft.datareplication/replicationvaults

Puts the vault.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults@2024-09-01' = {
  name: 'example'
  location: 'eck'
  properties: {
    vaultType: 'DisasterRecovery'
  }
  tags: {
    key5359: 'ljfilxolxzuxrauopwtyxghrp'
  }
}
```

## microsoft.datareplication/replicationvaults/alertsettings

Creates email configuration settings.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/alertSettings@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customEmailAddresses: [
      'ketvbducyailcny'
    ]
    locale: 'vpnjxjvdqtebnucyxiyrjiko'
    sendToOwners: true
  }
}
```

## microsoft.datareplication/replicationvaults/privateendpointconnectionproxies

Creates the Private Endpoint Connection Proxy.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/privateEndpointConnectionProxies@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  etag: 'hruibxrezstxroxrxweh'
  properties: {
    remotePrivateEndpoint: {
      connectionDetails: [
        {
          groupId: 'pjrlygpadir'
          id: 'lenqkogzkes'
          linkIdentifier: 'ravfufhkdowufd'
          memberName: 'ybuysjrlfupewxe'
          privateIpAddress: 'cyiacdzzyqmxjpijjbwgasegehtqe'
        }
      ]
      id: 'yipalno'
      manualPrivateLinkServiceConnections: [
        {
          name: 'jqwntlzfsksl'
          groupIds: [
            'hvejynjktikteipnioyeja'
          ]
          requestMessage: 'bukgzpkvcvfbmcdmpcbiigbvugicqa'
        }
      ]
      privateLinkServiceConnections: [
        {
          name: 'jqwntlzfsksl'
          groupIds: [
            'hvejynjktikteipnioyeja'
          ]
          requestMessage: 'bukgzpkvcvfbmcdmpcbiigbvugicqa'
        }
      ]
      privateLinkServiceProxies: [
        {
          groupConnectivityInformation: [
            {
              customerVisibleFqdns: [
                'vedcg'
              ]
              groupId: 'per'
              internalFqdn: 'maqavwhxwzzhbzjbryyquvitmup'
              memberName: 'ybptuypgdqoxkuwqx'
              privateLinkServiceArmRegion: 'rerkqqxinteevmlbrdkktaqhcch'
              redirectMapId: 'pezncxcq'
            }
          ]
          id: 'nzqxevuyqeedrqnkbnlcyrrrbzxvl'
          remotePrivateEndpointConnection: {
            id: 'ocunsgawjsqohkrcyxiv'
          }
          remotePrivateLinkServiceConnectionState: {
            description: 'y'
            actionsRequired: 'afwbq'
            status: 'Approved'
          }
        }
      ]
    }
  }
}
```

## microsoft.datareplication/replicationvaults/privateendpointconnections

Updates the Private Endpoint Connection.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/privateEndpointConnections@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
      id: 'cwcdqoynostmqwdwy'
    }
    privateLinkServiceConnectionState: {
      description: 'y'
      actionsRequired: 'afwbq'
      status: 'Approved'
    }
  }
}
```

## microsoft.datareplication/replicationvaults/protecteditems

Puts the protected item.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/protectedItems@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customProperties: {
      instanceType: 'ProtectedItemModelCustomProperties'
    }
    policyName: 'tjoeiynplt'
    replicationExtensionName: 'jwxdo'
  }
}
```

## microsoft.datareplication/replicationvaults/replicationextensions

Puts the replication extension.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/replicationExtensions@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customProperties: {
      instanceType: 'ReplicationExtensionModelCustomProperties'
    }
  }
}
```

## microsoft.datareplication/replicationvaults/replicationpolicies

Puts the policy.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/replicationPolicies@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customProperties: {
      instanceType: 'PolicyModelCustomProperties'
    }
  }
}
```
