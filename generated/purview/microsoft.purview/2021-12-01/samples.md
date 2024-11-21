# Microsoft.Purview
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.purview/accounts

Accounts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Purview/accounts@2021-12-01' = {
  name: 'example'
  location: 'West US 2'
  properties: {
    managedResourceGroupName: 'custom-rgname'
    managedResourcesPublicNetworkAccess: 'Enabled'
  }
}
```

## microsoft.purview/accounts/kafkaconfigurations

KafkaConfigurations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Purview/accounts/kafkaConfigurations@2021-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    consumerGroup: 'consumerGroup'
    credentials: {
      type: 'UserAssigned'
      identityId: '/subscriptions/47e8596d-ee73-4eb2-b6b4-cc13c2b87ssd/resourceGroups/testRG/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testId'
    }
    eventHubPartitionId: 'partitionId'
    eventHubResourceId: '/subscriptions/225be6fe-ec1c-4d51-a368-f69348d2e6c5/resourceGroups/testRG/providers/Microsoft.EventHub/namespaces/eventHubNameSpaceName'
    eventHubType: 'Notification'
    eventStreamingState: 'Enabled'
    eventStreamingType: 'Azure'
  }
}
```

## microsoft.purview/accounts/privateendpointconnections

PrivateEndpointConnections_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Purview/accounts/privateEndpointConnections@2021-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@company.com'
      status: 'Approved'
    }
  }
}
```
