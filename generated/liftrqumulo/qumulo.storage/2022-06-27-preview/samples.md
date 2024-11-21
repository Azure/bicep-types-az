# Qumulo.Storage

## qumulo.storage/filesystems

FileSystems_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Qumulo.Storage/fileSystems@2022-06-27-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key9350: {
      }
    }
  }
  location: 'aaaaaaa'
  properties: {
    clusterLoginUrl: 'aaaaaaaaaaaaa'
    companyDetails: {
      business: 'aaaaaaaaaaaaaaaaaaaaa'
      companyName: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      countryOrRegion: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      domain: 'aaaaaaaaaaaa'
      numberOfEmployees: 1
      officeAddress: 'aaaa'
    }
    delegatedSubnetId: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    marketplaceDetails: {
      marketplaceSubscriptionId: 'aaaaaaaaaaaaaaaaaaaaaaaa'
      marketplaceSubscriptionStatus: 'PendingFulfillmentStart'
      offerId: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      planId: 'aaa'
      publisherId: 'aaaaaaaaaaa'
    }
    privateIPs: [
      'aaaaa'
    ]
    provisioningState: 'Accepted'
    userDetails: {
      address: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      alternateEmail: 'aaaaaaaaaaaaaaaaaaa'
      contactPhoneNumber: 'aaaaaaaaaaa'
      email: 'aaaaaa'
      firstName: 'aaaaaa'
      lastName: 'aaaaaaaaaaaaaaaaaaaaa'
      upn: 'aaaaaaaaaaaaaaaaaaaaa'
    }
  }
  tags: {
    key8805: 'aaa'
  }
}
```

FileSystems_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Qumulo.Storage/fileSystems@2022-06-27-preview' = {
  name: 'example'
  location: 'aaaaaaaaaaaaaaaaaaaaaaaaa'
  properties: {
    delegatedSubnetId: 'aaaaaaaaaa'
    marketplaceDetails: {
      marketplaceSubscriptionId: 'aaaaaaaaaaaaa'
      marketplaceSubscriptionStatus: 'PendingFulfillmentStart'
      offerId: 'aaaaaaaaaaaaaaaaaaaaaaaaa'
      planId: 'aaaaaa'
      publisherId: 'aa'
    }
    provisioningState: 'Accepted'
    userDetails: {
      email: 'aaaaaaaaaaaaaaaaaaaaaaa'
    }
  }
}
```
