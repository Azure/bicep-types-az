# Microsoft.FluidRelay
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.fluidrelay/fluidrelayservers

Create a Fluid Relay server
```bicep
resource exampleResource 'Microsoft.FluidRelay/fluidRelayServers@2022-06-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'west-us'
  properties: {
    storagesku: 'basic'
  }
  tags: {
    Category: 'sales'
  }
}
```

Create a Fluid Relay server with AMI
```bicep
resource exampleResource 'Microsoft.FluidRelay/fluidRelayServers@2022-06-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      /subscriptions/xxxx-xxxx-xxxx-xxxx/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1: {
      }
      /subscriptions/xxxx-xxxx-xxxx-xxxx/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2: {
      }
    }
  }
  location: 'west-us'
  properties: {
    storagesku: 'basic'
  }
  tags: {
    Category: 'sales'
  }
}
```

Create a Fluid Relay server with CMK
```bicep
resource exampleResource 'Microsoft.FluidRelay/fluidRelayServers@2022-06-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/xxxx-xxxx-xxxx-xxxx/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identityForCMK: {
      }
    }
  }
  location: 'west-us'
  properties: {
    encryption: {
      customerManagedKeyEncryption: {
        keyEncryptionKeyIdentity: {
          identityType: 'UserAssigned'
          userAssignedIdentityResourceId: '/subscriptions/xxxx-xxxx-xxxx-xxxx/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identityForCMK'
        }
        keyEncryptionKeyUrl: 'https://contosovault.vault.azure.net/keys/contosokek'
      }
    }
    storagesku: 'basic'
  }
  tags: {
    Category: 'sales'
  }
}
```
