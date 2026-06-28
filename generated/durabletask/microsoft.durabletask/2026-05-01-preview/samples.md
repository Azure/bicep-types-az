# Microsoft.DurableTask
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.durabletask/schedulers

Schedulers_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DurableTask/schedulers@2026-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/EE9BD735-67CE-4A90-89C4-439D3F6A4C93/resourceGroups/rgopenapi/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity': {
      }
    }
  }
  location: 'northcentralus'
  properties: {
    ipAllowlist: [
      '10.0.0.0/8'
    ]
    sku: {
      name: 'Dedicated'
    }
  }
  tags: {
    department: 'research'
    development: 'true'
  }
}
```

## microsoft.durabletask/schedulers/privateendpointconnections

PrivateEndpointConnections_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.DurableTask/schedulers/privateEndpointConnections@2026-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
    }
    privateLinkServiceConnectionState: {
      description: 'ujdcsoyxljivwsgfkexhotaxcmzq'
      actionsRequired: 'mxymqfbbmpwjxsroldlsd'
      status: 'Pending'
    }
  }
}
```

## microsoft.durabletask/schedulers/retentionpolicies

RetentionPolicies_CreateOrReplace_MaximumSet
```bicep
resource exampleResource 'Microsoft.DurableTask/schedulers/retentionPolicies@2026-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    retentionPolicies: [
      {
        retentionPeriodInDays: 30
      }
      {
        orchestrationState: 'Failed'
        retentionPeriodInDays: 10
      }
    ]
  }
}
```

## microsoft.durabletask/schedulers/taskhubs

TaskHubs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DurableTask/schedulers/taskHubs@2026-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    capabilities: [
      'ExampleFutureCapability'
    ]
  }
}
```

## microsoft.durabletask/schedulers/transparentdataencryptions

TransparentDataEncryptions_CreateOrReplace_MaximumSet
```bicep
resource exampleResource 'Microsoft.DurableTask/schedulers/transparentDataEncryptions@2026-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    keySource: 'CustomerManaged'
    keyVaultKeyUri: 'https://microsoft.com/ap'
  }
}
```
