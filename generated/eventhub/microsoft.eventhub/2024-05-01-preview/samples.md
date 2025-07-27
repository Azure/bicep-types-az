# Microsoft.EventHub
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.eventhub/clusters

ClusterPut
```bicep
resource exampleResource 'Microsoft.EventHub/clusters@2024-05-01-preview' = {
  name: 'example'
  location: 'South Central US'
  sku: {
    name: 'Dedicated'
    capacity: 1
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.eventhub/namespaces

NamespaceCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces@2024-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/ud1': {
      }
      '/subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/ud2': {
      }
    }
  }
  location: 'East US'
  properties: {
    clusterArmId: '/subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/Microsoft.EventHub/clusters/enc-test'
    encryption: {
      keySource: 'Microsoft.KeyVault'
      keyVaultProperties: [
        {
          identity: {
            userAssignedIdentity: '/subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/ud1'
          }
          keyName: 'Samplekey'
          keyVaultUri: 'https://aprao-keyvault-user.vault-int.azure-int.net/'
        }
      ]
    }
    geoDataReplication: {
      locations: [
        {
          locationName: 'eastus'
          roleType: 'Primary'
        }
        {
          locationName: 'southcentralus'
          roleType: 'Secondary'
        }
      ]
      maxReplicationLagDurationInSeconds: 300
    }
  }
}
```

NamespaceWithGeoDRCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces@2024-05-01-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    geoDataReplication: {
      locations: [
        {
          locationName: 'eastus'
          roleType: 'Primary'
        }
        {
          locationName: 'westus'
          roleType: 'Secondary'
        }
        {
          locationName: 'centralus'
          roleType: 'Secondary'
        }
      ]
      maxReplicationLagDurationInSeconds: 60
    }
  }
}
```

## microsoft.eventhub/namespaces/applicationgroups

ApplicationGroupCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/applicationGroups@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clientAppGroupIdentifier: 'SASKeyName=KeyName'
    isEnabled: true
    policies: [
      {
        name: 'ThrottlingPolicy1'
        type: 'ThrottlingPolicy'
        metricId: 'IncomingMessages'
        rateLimitThreshold: 7912
      }
      {
        name: 'ThrottlingPolicy2'
        type: 'ThrottlingPolicy'
        metricId: 'IncomingBytes'
        rateLimitThreshold: 3951729
      }
      {
        name: 'ThrottlingPolicy3'
        type: 'ThrottlingPolicy'
        metricId: 'OutgoingBytes'
        rateLimitThreshold: 245175
      }
    ]
  }
}
```

## microsoft.eventhub/namespaces/authorizationrules

NameSpaceAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/authorizationRules@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    rights: [
      'Listen'
      'Send'
    ]
  }
}
```

## microsoft.eventhub/namespaces/disasterrecoveryconfigs

EHAliasCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    partnerNamespace: 'sdk-Namespace-37'
  }
}
```

## microsoft.eventhub/namespaces/eventhubs

EHEventHubCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/eventhubs@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    captureDescription: {
      destination: {
        name: 'EventHubArchive.AzureBlockBlob'
        identity: {
          type: 'UserAssigned'
          userAssignedIdentity: '/subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/ud2'
        }
        properties: {
          archiveNameFormat: '{Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}'
          blobContainer: 'container'
          storageAccountResourceId: '/subscriptions/e2f361f0-3b27-4503-a9cc-21cfba380093/resourceGroups/Default-Storage-SouthCentralUS/providers/Microsoft.ClassicStorage/storageAccounts/arjunteststorage'
        }
      }
      enabled: true
      encoding: 'Avro'
      intervalInSeconds: 120
      sizeLimitInBytes: 10485763
    }
    partitionCount: 4
    status: 'Active'
    userMetadata: 'key'
  }
}
```

EHEventHubWithCompactPolicyCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/eventhubs@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    captureDescription: {
      destination: {
        name: 'EventHubArchive.AzureBlockBlob'
        identity: {
          type: 'UserAssigned'
          userAssignedIdentity: '/subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/ud2'
        }
        properties: {
          archiveNameFormat: '{Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}'
          blobContainer: 'container'
          storageAccountResourceId: '/subscriptions/e2f361f0-3b27-4503-a9cc-21cfba380093/resourceGroups/Default-Storage-SouthCentralUS/providers/Microsoft.ClassicStorage/storageAccounts/arjunteststorage'
        }
      }
      enabled: true
      encoding: 'Avro'
      intervalInSeconds: 120
      sizeLimitInBytes: 10485763
    }
    messageRetentionInDays: 4
    messageTimestampDescription: {
      timestampType: 'LogAppend'
    }
    partitionCount: 4
    retentionDescription: {
      cleanupPolicy: 'Compact'
      minCompactionLagTimeInMinutes: 10
      tombstoneRetentionTimeInHours: 1
    }
    status: 'Active'
    userMetadata: 'key'
  }
}
```

EHEventHubWithDeleteOrCompactPolicyCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/eventhubs@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    captureDescription: {
      destination: {
        name: 'EventHubArchive.AzureBlockBlob'
        identity: {
          type: 'UserAssigned'
          userAssignedIdentity: '/subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/ud2'
        }
        properties: {
          archiveNameFormat: '{Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}'
          blobContainer: 'container'
          storageAccountResourceId: '/subscriptions/e2f361f0-3b27-4503-a9cc-21cfba380093/resourceGroups/Default-Storage-SouthCentralUS/providers/Microsoft.ClassicStorage/storageAccounts/arjunteststorage'
        }
      }
      enabled: true
      encoding: 'Avro'
      intervalInSeconds: 120
      sizeLimitInBytes: 10485763
    }
    messageRetentionInDays: 4
    messageTimestampDescription: {
      timestampType: 'LogAppend'
    }
    partitionCount: 4
    retentionDescription: {
      cleanupPolicy: 'DeleteOrCompact'
      retentionTimeInHours: 24
    }
    status: 'Active'
    userMetadata: 'key'
  }
}
```

EHEventHubWithDeletePolicyCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/eventhubs@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    captureDescription: {
      destination: {
        name: 'EventHubArchive.AzureBlockBlob'
        identity: {
          type: 'UserAssigned'
          userAssignedIdentity: '/subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/ud2'
        }
        properties: {
          archiveNameFormat: '{Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}'
          blobContainer: 'container'
          storageAccountResourceId: '/subscriptions/e2f361f0-3b27-4503-a9cc-21cfba380093/resourceGroups/Default-Storage-SouthCentralUS/providers/Microsoft.ClassicStorage/storageAccounts/arjunteststorage'
        }
      }
      enabled: true
      encoding: 'Avro'
      intervalInSeconds: 120
      sizeLimitInBytes: 10485763
    }
    messageRetentionInDays: 4
    messageTimestampDescription: {
      timestampType: 'LogAppend'
    }
    partitionCount: 4
    retentionDescription: {
      cleanupPolicy: 'Delete'
      retentionTimeInHours: 24
    }
    status: 'Active'
    userMetadata: 'key'
  }
}
```

## microsoft.eventhub/namespaces/eventhubs/authorizationrules

EventHubAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    rights: [
      'Listen'
      'Send'
    ]
  }
}
```

## microsoft.eventhub/namespaces/eventhubs/consumergroups

ConsumerGroupCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/eventhubs/consumergroups@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    userMetadata: 'New consumergroup'
  }
}
```

## microsoft.eventhub/namespaces/networkrulesets

NameSpaceNetworkRuleSetCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/networkRuleSets@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    defaultAction: 'Deny'
    ipRules: [
      {
        action: 'Allow'
        ipMask: '1.1.1.1'
      }
      {
        action: 'Allow'
        ipMask: '1.1.1.2'
      }
      {
        action: 'Allow'
        ipMask: '1.1.1.3'
      }
      {
        action: 'Allow'
        ipMask: '1.1.1.4'
      }
      {
        action: 'Allow'
        ipMask: '1.1.1.5'
      }
    ]
    virtualNetworkRules: [
      {
        ignoreMissingVnetServiceEndpoint: true
        subnet: {
          id: '/subscriptions/subscriptionid/resourcegroups/resourcegroupid/providers/Microsoft.Network/virtualNetworks/myvn/subnets/subnet2'
        }
      }
      {
        ignoreMissingVnetServiceEndpoint: false
        subnet: {
          id: '/subscriptions/subscriptionid/resourcegroups/resourcegroupid/providers/Microsoft.Network/virtualNetworks/myvn/subnets/subnet3'
        }
      }
      {
        ignoreMissingVnetServiceEndpoint: false
        subnet: {
          id: '/subscriptions/subscriptionid/resourcegroups/resourcegroupid/providers/Microsoft.Network/virtualNetworks/myvn/subnets/subnet6'
        }
      }
    ]
  }
}
```

## microsoft.eventhub/namespaces/privateendpointconnections

NameSpacePrivateEndPointConnectionCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/privateEndpointConnections@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
      id: '/subscriptions/dbedb4e0-40e6-4145-81f3-f1314c150774/resourceGroups/SDK-EventHub-8396/providers/Microsoft.Network/privateEndpoints/sdk-Namespace-2847'
    }
    privateLinkServiceConnectionState: {
      description: 'testing'
      status: 'Rejected'
    }
    provisioningState: 'Succeeded'
  }
}
```

## microsoft.eventhub/namespaces/schemagroups

SchemaRegistryCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/schemagroups@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupProperties: {
    }
    schemaCompatibility: 'Forward'
    schemaType: 'Avro'
  }
}
```
