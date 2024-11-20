# Microsoft.DataReplication

## microsoft.datareplication/replicationfabrics/fabricagents

Dra_Create
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationFabrics/fabricAgents@2021-02-16-preview' = {
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
      instanceType: 'DraModelCustomProperties'
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

## microsoft.datareplication/replicationvaults/alertsettings

EmailConfiguration_Create
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/alertSettings@2021-02-16-preview' = {
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

## microsoft.datareplication/replicationfabrics

Fabric_Create
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationFabrics@2021-02-16-preview' = {
  name: 'example'
  location: 'tqygutlpob'
  properties: {
    customProperties: {
      instanceType: 'FabricModelCustomProperties'
    }
  }
  tags: {
    key3917: 'vgralu'
  }
}
```

## microsoft.datareplication/replicationvaults/replicationpolicies

Policy_Create
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/replicationPolicies@2021-02-16-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customProperties: {
      instanceType: 'PolicyModelCustomProperties'
    }
  }
}
```

## microsoft.datareplication/replicationvaults/protecteditems

ProtectedItem_Create
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/protectedItems@2021-02-16-preview' = {
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

ReplicationExtension_Create
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/replicationExtensions@2021-02-16-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customProperties: {
      instanceType: 'ReplicationExtensionModelCustomProperties'
    }
  }
}
```

## microsoft.datareplication/replicationvaults

Vault_Create
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults@2021-02-16-preview' = {
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
