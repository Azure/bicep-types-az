# Qumulo.Storage

## qumulo.storage/filesystems

FileSystems_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Qumulo.Storage/fileSystems@2022-10-12' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key4522: {
      }
    }
  }
  location: 'przdlsmlzsszphnixq'
  properties: {
    adminPassword: 'fakeTestSecretPlaceholder'
    availabilityZone: 'maseyqhlnhoiwbabcqabtedbjpip'
    clusterLoginUrl: 'jjqhgevy'
    delegatedSubnetId: 'neqctctqdmjezfgt'
    initialCapacity: 9
    marketplaceDetails: {
      marketplaceSubscriptionId: 'ujrcqvxfnhxxheoth'
      marketplaceSubscriptionStatus: 'PendingFulfillmentStart'
      offerId: 'eiyhbmpwgezcmzrrfoiskuxlcvwojf'
      planId: 'x'
      publisherId: 'wfmokfdjbwpjhz'
    }
    privateIPs: [
      'kslguxrwbwkrj'
    ]
    provisioningState: 'Accepted'
    storageSku: 'Standard'
    userDetails: {
      email: 'viptslwulnpaupfljvnjeq'
    }
  }
  tags: {
    key6565: 'cgdhmupta'
  }
}
```

FileSystems_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Qumulo.Storage/fileSystems@2022-10-12' = {
  name: 'example'
  location: 'aaaaaaaaaaaaaaaaaaaaaaaaa'
  properties: {
    adminPassword: 'fakeTestSecretPlaceholder'
    delegatedSubnetId: 'aaaaaaaaaa'
    initialCapacity: 9
    marketplaceDetails: {
      marketplaceSubscriptionId: 'aaaaaaaaaaaaa'
      marketplaceSubscriptionStatus: 'PendingFulfillmentStart'
      offerId: 'aaaaaaaaaaaaaaaaaaaaaaaaa'
      planId: 'aaaaaa'
      publisherId: 'aa'
    }
    provisioningState: 'Accepted'
    storageSku: 'Standard'
    userDetails: {
      email: 'viptslwulnpaupfljvnjeq'
    }
  }
}
```
