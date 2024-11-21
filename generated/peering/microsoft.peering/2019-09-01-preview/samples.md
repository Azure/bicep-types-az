# Microsoft.Peering
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.peering/peerasns

Create a peer ASN
```bicep
resource exampleResource 'Microsoft.Peering/peerAsns@2019-09-01-preview' = {
  name: 'example'
  properties: {
    peerAsn: 65000
    peerContactInfo: {
      emails: [
        'abc@contoso.com'
        'xyz@contoso.com'
      ]
      phone: [
        '+1 (234) 567-8900'
      ]
    }
    peerName: 'Contoso'
  }
}
```

## microsoft.peering/peerings

Create a direct peering
```bicep
resource exampleResource 'Microsoft.Peering/peerings@2019-09-01-preview' = {
  name: 'example'
  kind: 'Direct'
  location: 'eastus'
  properties: {
    direct: {
      connections: [
        {
          bandwidthInMbps: 10000
          bgpSession: {
            maxPrefixesAdvertisedV4: 1000
            maxPrefixesAdvertisedV6: 100
            md5AuthenticationKey: 'test-md5-auth-key'
            sessionPrefixV4: '192.168.0.0/31'
            sessionPrefixV6: 'fd00::0/127'
          }
          connectionIdentifier: '5F4CB5C7-6B43-4444-9338-9ABC72606C16'
          peeringDBFacilityId: 99999
          sessionAddressProvider: 'Peer'
          useForPeeringService: false
        }
        {
          bandwidthInMbps: 10000
          connectionIdentifier: '8AB00818-D533-4504-A25A-03A17F61201C'
          peeringDBFacilityId: 99999
          sessionAddressProvider: 'Microsoft'
          useForPeeringService: true
        }
      ]
      directPeeringType: 'Edge'
      peerAsn: {
        id: '/subscriptions/subId/providers/Microsoft.Peering/peerAsns/myAsn1'
      }
    }
    peeringLocation: 'peeringLocation0'
  }
  sku: {
    name: 'Basic_Direct_Free'
  }
}
```

Create an exchange peering
```bicep
resource exampleResource 'Microsoft.Peering/peerings@2019-09-01-preview' = {
  name: 'example'
  kind: 'Exchange'
  location: 'eastus'
  properties: {
    exchange: {
      connections: [
        {
          bgpSession: {
            maxPrefixesAdvertisedV4: 1000
            maxPrefixesAdvertisedV6: 100
            md5AuthenticationKey: 'test-md5-auth-key'
            peerSessionIPv4Address: '192.168.2.1'
            peerSessionIPv6Address: 'fd00::1'
          }
          connectionIdentifier: 'CE495334-0E94-4E51-8164-8116D6CD284D'
          peeringDBFacilityId: 99999
        }
        {
          bgpSession: {
            maxPrefixesAdvertisedV4: 1000
            maxPrefixesAdvertisedV6: 100
            md5AuthenticationKey: 'test-md5-auth-key'
            peerSessionIPv4Address: '192.168.2.2'
            peerSessionIPv6Address: 'fd00::2'
          }
          connectionIdentifier: 'CDD8E673-CB07-47E6-84DE-3739F778762B'
          peeringDBFacilityId: 99999
        }
      ]
      peerAsn: {
        id: '/subscriptions/subId/providers/Microsoft.Peering/peerAsns/myAsn1'
      }
    }
    peeringLocation: 'peeringLocation0'
  }
  sku: {
    name: 'Basic_Exchange_Free'
  }
}
```

## microsoft.peering/peeringservices

Create a  peering service
```bicep
resource exampleResource 'Microsoft.Peering/peeringServices@2019-09-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    peeringServiceLocation: 'state1'
    peeringServiceProvider: 'serviceProvider1'
  }
}
```

## microsoft.peering/peeringservices/prefixes

Create or update a prefix for the peering service
```bicep
resource exampleResource 'Microsoft.Peering/peeringServices/prefixes@2019-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    prefix: '192.168.1.0/24'
  }
}
```
