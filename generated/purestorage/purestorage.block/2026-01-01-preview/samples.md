# PureStorage.Block
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## purestorage.block/reservations

Reservations_Create
```bicep
resource exampleResource 'PureStorage.Block/reservations@2026-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    marketplace: {
      offerDetails: {
        offerId: 'purestorage-block-offer'
        planId: 'standard-plan'
        planName: 'Standard Plan'
        publisherId: 'pure_storage'
        termId: '12-month-term'
        termUnit: 'month'
      }
      subscriptionStatus: 'PendingFulfillmentStart'
    }
    user: {
      companyDetails: {
        address: {
          addressLine1: '1 Microsoft Way'
          addressLine2: 'Suite 100'
          city: 'Redmond'
          country: 'United States'
          postalCode: '98052'
          state: 'Washington'
        }
        companyName: 'Contoso Ltd.'
      }
      emailAddress: 'john.doe@contoso.com'
      firstName: 'John'
      lastName: 'Doe'
      phoneNumber: '+1-425-555-1234'
      upn: 'john.doe@contoso.com'
    }
  }
  tags: {
    environment: 'production'
  }
}
```

## purestorage.block/storagepools

StoragePools_Create
```bicep
resource exampleResource 'PureStorage.Block/storagePools@2026-01-01-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      'identity-01': {
      }
    }
  }
  location: 'eastus'
  properties: {
    availabilityZone: '1'
    avs: {
      avsEnabled: true
      sddcResourceId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/rgpurestorage/providers/Microsoft.AVS/privateClouds/avs-cloud-01'
    }
    provisionedBandwidthMbPerSec: 17
    reservationResourceId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/rgpurestorage/providers/PureStorage.Block/reservations/reservation-01'
    vnetInjection: {
      subnetId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/rgpurestorage/providers/Microsoft.Network/virtualNetworks/vnet-01/subnets/subnet-01'
      vnetId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/rgpurestorage/providers/Microsoft.Network/virtualNetworks/vnet-01'
    }
  }
  tags: {
    environment: 'production'
  }
}
```

## purestorage.block/storagepools/volumegroups

VolumeGroups_Create
```bicep
resource exampleResource 'PureStorage.Block/storagePools/volumeGroups@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    performanceParameters: {
      bandwidthLimitMbPerSec: 500
      iopsLimit: 10000
    }
    protectionParameters: {
      frequency: '1h'
      retention: '7d'
    }
  }
  tags: {
    environment: 'production'
  }
}
```

## purestorage.block/storagepools/volumegroups/volumes

Volumes_Create
```bicep
resource exampleResource 'PureStorage.Block/storagePools/volumeGroups/volumes@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    provisionedSize: 10737418240
    sourceVolumeResourceId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/rgpurestorage/providers/PureStorage.Block/storagePools/storagepool-01/volumeGroups/volumegroup-01/volumes/source-volume'
  }
}
```
