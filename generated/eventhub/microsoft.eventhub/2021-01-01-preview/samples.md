# Microsoft.EventHub

## microsoft.eventhub/namespaces

NamespaceCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces@2021-01-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      /subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/ud1: {
      }
      /subscriptions/SampleSubscription/resourceGroups/ResurceGroupSample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/ud2: {
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
  }
}
```

## microsoft.eventhub/namespaces/networkrulesets

NameSpaceNetworkRuleSetCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/networkRuleSets@2021-01-01-preview' = {
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

## microsoft.eventhub/namespaces/authorizationrules

NameSpaceAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/authorizationRules@2021-01-01-preview' = {
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

## microsoft.eventhub/namespaces/privateendpointconnections

NameSpacePrivateEndPointConnectionCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/privateEndpointConnections@2021-01-01-preview' = {
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

## microsoft.eventhub/namespaces/eventhubs

EventHubCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/eventhubs@2021-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    captureDescription: {
      destination: {
        name: 'EventHubArchive.AzureBlockBlob'
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
    partitionCount: 4
    status: 'Active'
  }
}
```

## microsoft.eventhub/namespaces/eventhubs/authorizationrules

EventHubAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2021-01-01-preview' = {
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
resource exampleResource 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2021-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    partnerNamespace: 'sdk-Namespace-37'
  }
}
```

## microsoft.eventhub/namespaces/eventhubs/consumergroups

ConsumerGroupCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/eventhubs/consumergroups@2021-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    userMetadata: 'New consumergroup'
  }
}
```
