# Qumulo.Storage

## qumulo.storage/filesystems

FileSystems_CreateOrUpdate
```bicep
resource exampleResource 'Qumulo.Storage/fileSystems@2024-06-19' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key7679: {
      }
    }
  }
  location: 'pnb'
  properties: {
    adminPassword: 'fakeTestSecretPlaceholder'
    availabilityZone: 'eqdvbdiuwmhhzqzmksmwllpddqquwt'
    clusterLoginUrl: 'ykaynsjvhihdthkkvvodjrgc'
    delegatedSubnetId: 'jykmxrf'
    marketplaceDetails: {
      marketplaceSubscriptionId: 'xaqtkloiyovmexqhn'
      marketplaceSubscriptionStatus: 'PendingFulfillmentStart'
      offerId: 's'
      planId: 'fwtpz'
      publisherId: 'czxcfrwodazyaft'
      termUnit: 'cfwwczmygsimcyvoclcw'
    }
    privateIPs: [
      'gzken'
    ]
    storageSku: 'yhyzby'
    userDetails: {
      email: 'aqsnzyroo'
    }
  }
  tags: {
    key7090: 'rurrdiaqp'
  }
}
```

FileSystems_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Qumulo.Storage/fileSystems@2024-06-19' = {
  name: 'example'
  location: 'aaaaaaaaaaaaaaaaaaaaaaaaa'
  properties: {
    adminPassword: 'fakeTestSecretPlaceholder'
    delegatedSubnetId: 'aaaaaaaaaa'
    marketplaceDetails: {
      marketplaceSubscriptionId: 'aaaaaaaaaaaaa'
      marketplaceSubscriptionStatus: 'PendingFulfillmentStart'
      offerId: 'aaaaaaaaaaaaaaaaaaaaaaaaa'
      planId: 'aaaaaa'
    }
    storageSku: 'Standard'
    userDetails: {
      email: 'viptslwulnpaupfljvnjeq'
    }
  }
}
```
