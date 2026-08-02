# PureStorage.Block
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## purestorage.block/reservations

Reservations_Create
```bicep
resource exampleResource 'PureStorage.Block/reservations@2024-11-01' = {
  name: 'example'
  location: 'jynnbjysbc'
  properties: {
    marketplace: {
      offerDetails: {
        offerId: 'efojrbphbimq'
        planId: 'caj'
        planName: 'lvvzchm'
        publisherId: 'vejockfhoavaqjvhtwvctdnaefvw'
        termId: 'ucyvzkedohfjazifxweylhnbcmeza'
        termUnit: 'ose'
      }
      subscriptionStatus: 'PendingFulfillmentStart'
    }
    user: {
      companyDetails: {
        address: {
          addressLine1: 'f'
          addressLine2: 'gycfosmknj'
          city: 'qxzhxjoatyuajoljfkd'
          country: 'nuexbknolfphlfguyzq'
          postalCode: 'yjzqichkfffbdtcswzolmrl'
          state: 'dnusygshfvmebpmcjsd'
        }
        companyName: 'nrndfzmrakk'
      }
      emailAddress: 'abc@example.com'
      firstName: 'bucysqbbclhwxrzig'
      lastName: 'fnsvxlop'
      phoneNumber: 'jglihtgsacdxocc'
      upn: 'ekqbqgpdylggddusuiifrnjcwiefay'
    }
  }
  tags: {
    key1110: 'euhfdmtfpucwurtu'
  }
}
```

## purestorage.block/storagepools

StoragePools_Create
```bicep
resource exampleResource 'PureStorage.Block/storagePools@2024-11-01' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key4211: {
      }
    }
  }
  location: 'lonlc'
  properties: {
    availabilityZone: 'vknyl'
    avs: {
      avsEnabled: true
      sddcResourceId: 'zekrdsarbkwcbvpzhmuwoazogziwms'
    }
    provisionedBandwidthMbPerSec: 17
    reservationResourceId: 'xiowoxnbtcotutcmmrofvgdi'
    vnetInjection: {
      subnetId: 'tnlctolrxdvnkjiphlrdxq'
      vnetId: 'zbumtytyqwewjcyckwqchiypshv'
    }
  }
  tags: {
    key7593: 'vsyiygyurvwlfaezpuqu'
  }
}
```
