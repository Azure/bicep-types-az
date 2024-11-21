# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/dnszones

Create zone
```bicep
resource exampleResource 'Microsoft.Network/dnsZones@2023-07-01-preview' = {
  name: 'example'
  location: 'Global'
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/dnszones/a

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

## microsoft.network/dnszones/aaaa

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

## microsoft.network/dnszones/caa

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

## microsoft.network/dnszones/cname

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

## microsoft.network/dnszones/ds

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/DS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

## microsoft.network/dnszones/mx

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

## microsoft.network/dnszones/naptr

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

## microsoft.network/dnszones/ns

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

## microsoft.network/dnszones/ptr

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

## microsoft.network/dnszones/soa

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

## microsoft.network/dnszones/srv

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

## microsoft.network/dnszones/tlsa

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TLSA@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

## microsoft.network/dnszones/txt

Create A recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ARecords: [
      {
        ipv4Address: '127.0.0.1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create A recordset with alias target resource
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    targetResource: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create A recordset with traffic management profile
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
    trafficManagementProfile: {
      id: '/subscriptions/726f8cd6-6459-4db4-8e6d-2cd2716904e2/resourceGroups/test/providers/Microsoft.Network/trafficManagerProfiles/testpp2'
    }
  }
}
```

Create AAAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    AAAARecords: [
      {
        ipv6Address: '::1'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    caaRecords: [
      {
        flags: 0
        tag: 'issue'
        value: 'ca.contoso.com'
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create CNAME recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    CNAMERecord: {
      cname: 'contoso.com'
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create DS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    DSRecords: [
      {
        algorithm: 5
        digest: {
          algorithmType: 1
          value: '2BB183AF5F22588179A53B0A98631FAD1A292118'
        }
        keyTag: 60485
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create MX recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    MXRecords: [
      {
        exchange: 'mail.contoso.com'
        preference: 0
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NAPTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NAPTRRecords: [
      {
        flags: 'U'
        order: 100
        preference: 10
        regexp: '!^.*$!sip:user@example.com!'
        replacement: ''
        services: 'E2U+sip'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create NS recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    NSRecords: [
      {
        nsdname: 'ns1.contoso.com'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create PTR recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PTRRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SOA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SOARecord: {
      email: 'hostmaster.contoso.com'
      expireTime: 2419200
      host: 'ns1.contoso.com'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create SRV recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    SRVRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TLSA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TLSARecords: [
      {
        certAssociationData: '6EC8A4B7F511454D84DCC055213B8D195E8ADA751FE14300AFE32D54B162438B'
        matchingType: 1
        selector: 1
        usage: 3
      }
    ]
    TTL: 3600
    metadata: {
      key1: 'value1'
    }
  }
}
```

Create TXT recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
    metadata: {
      key1: 'value1'
    }
  }
}
```
