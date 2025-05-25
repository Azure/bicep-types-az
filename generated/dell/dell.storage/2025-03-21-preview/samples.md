# Dell.Storage
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## dell.storage/filesystems

FileSystems_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Dell.Storage/filesystems@2025-03-21-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      key7644: {
      }
    }
  }
  location: 'cvbmsqftppe'
  properties: {
    delegatedSubnetCidr: '10.0.0.1/24'
    delegatedSubnetId: 'rqkpvczbtqcxiaivtbuixblb'
    dellReferenceNumber: 'fhewkj'
    encryption: {
      encryptionIdentityProperties: {
        identityResourceId: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'
        identityType: 'UserAssigned'
      }
      encryptionType: 'Customer-managed keys (CMK)'
      keyUrl: 'https://contoso.com/keyurl/keyVersion'
    }
    marketplace: {
      marketplaceSubscriptionId: 'mvjcxwndudbylynme'
      marketplaceSubscriptionStatus: 'PendingFulfillmentStart'
      offerId: 'bcganbkmvznyqfnvhjuag'
      planId: 'eekvwfndjoxijeasksnt'
      planName: 'planeName'
      privateOfferId: 'privateOfferId'
      publisherId: 'trdzykoeskmcwpo'
    }
    oneFsUrl: 'oneFsUrl'
    smartConnectFqdn: 'fqdn'
    user: {
      email: 'jwogfgznmjabdbcjcljjlkxdpc'
    }
  }
  tags: {
    key7594: 'sfkwapubiurgedzveido'
  }
}
```

FileSystems_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Dell.Storage/filesystems@2025-03-21-preview' = {
  name: 'example'
  location: 'tbcvhxzpgrijtdygkttnfswwtacs'
  properties: {
    delegatedSubnetCidr: '10.0.0.1/24'
    delegatedSubnetId: 'yp'
    dellReferenceNumber: 'fhewkj'
    encryption: {
      encryptionType: 'Microsoft-managed keys (MMK)'
    }
    marketplace: {
      offerId: 'pzhjvibxqgeqkndqnjlduwnxqbr'
      planId: 'lgozf'
      planName: 'planeName'
      privateOfferId: 'privateOfferId'
    }
    user: {
      email: 'hoznewwtzmyjzctzosfuh'
    }
  }
}
```
