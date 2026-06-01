# Microsoft.DataReplication
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.datareplication/replicationfabrics

Puts the fabric.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationFabrics@2026-05-01' = {
  name: 'example'
  location: 'meoxqxugjhchdybmbjtbnayasnob'
  properties: {
    customProperties: {
      instanceType: 'FabricModelCustomProperties'
    }
  }
  tags: {
    key5101: 'pxi'
  }
}
```

## microsoft.datareplication/replicationfabrics/fabricagents

Puts the fabric agent
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationFabrics/fabricAgents@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authenticationIdentity: {
      aadAuthority: 'mvycijlgfituwejzifslejlwj'
      applicationId: 'ercumqpusynfsaxgxcxvgkultgym'
      audience: 'craakcucrfbvqu'
      objectId: 'tqvoklwcznvbvnmtfowdlsmbwhv'
      tenantId: 'bhuaknfqvawf'
    }
    customProperties: {
      instanceType: 'FabricAgentModelCustomProperties'
    }
    machineId: 'efgaafeyvvdeegktw'
    machineName: 'oulwdidoguvd'
    resourceAccessIdentity: {
      aadAuthority: 'mvycijlgfituwejzifslejlwj'
      applicationId: 'ercumqpusynfsaxgxcxvgkultgym'
      audience: 'craakcucrfbvqu'
      objectId: 'tqvoklwcznvbvnmtfowdlsmbwhv'
      tenantId: 'bhuaknfqvawf'
    }
  }
}
```

## microsoft.datareplication/replicationvaults

Puts the vault.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults@2026-05-01' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key8731: {
      }
    }
  }
  location: 'mjoapgbjcedsmnhbf'
  properties: {
    vaultType: 'DisasterRecovery'
  }
  tags: {
    key9825: 'ulsvnotfqmkajvouraavmibhvkmg'
  }
}
```

## microsoft.datareplication/replicationvaults/alertsettings

Creates email configuration settings.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/alertSettings@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customEmailAddresses: [
      'gnrheuxkjrtjufjw'
    ]
    locale: 'ukogszpcj'
    sendToOwners: true
  }
}
```

## microsoft.datareplication/replicationvaults/privateendpointconnections

Updates the Private Endpoint Connection.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/privateEndpointConnections@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
      id: 'eiq'
    }
    privateLinkServiceConnectionState: {
      description: 'jpqkuuumyrevsggjin'
      actionsRequired: 'gzwjesps'
      status: 'Approved'
    }
  }
}
```

## microsoft.datareplication/replicationvaults/protecteditems

Creates the protected Item.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/protectedItems@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    currentJob: {
    }
    customProperties: {
      instanceType: 'ProtectedItemModelCustomProperties'
    }
    lastFailedEnableProtectionJob: {
    }
    lastFailedPlannedFailoverJob: {
    }
    lastTestFailoverJob: {
    }
    policyName: 'ybdaqrrypdozdgxrvmvv'
    protectionState: 'UnprotectedStatesBegin'
    replicationExtensionName: 'mymhditfzojsyjsxfbxwclc'
    replicationHealth: 'Normal'
    resynchronizationState: 'None'
    testFailoverState: 'None'
  }
}
```

## microsoft.datareplication/replicationvaults/replicationextensions

Puts the replication extension.
```bicep
resource exampleResource 'Microsoft.DataReplication/replicationVaults/replicationExtensions@2026-05-01' = {
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
resource exampleResource 'Microsoft.DataReplication/replicationVaults/replicationPolicies@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customProperties: {
      instanceType: 'PolicyModelCustomProperties'
    }
  }
}
```
