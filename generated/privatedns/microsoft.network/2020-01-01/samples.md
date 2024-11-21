# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/privatednszones

PUT Private DNS Zone
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones@2020-01-01' = {
  name: 'example'
  location: 'Global'
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/privatednszones/a

PUT Private DNS Zone A Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/A@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aRecords: [
      {
        ipv4Address: '1.2.3.4'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone AAAA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/A@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aaaaRecords: [
      {
        ipv6Address: '::1'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone CNAME Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/A@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cnameRecord: {
      cname: 'contoso.com'
    }
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone MX Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/A@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    mxRecords: [
      {
        exchange: 'mail.privatezone1.com'
        preference: 0
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone PTR Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/A@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ptrRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone SOA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/A@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    soaRecord: {
      email: 'azureprivatedns-hostmaster.microsoft.com'
      expireTime: 2419200
      host: 'azureprivatedns.net'
      minimumTTL: 300
      minimumTtl: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone SRV Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/A@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    srvRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone TXT Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/A@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
    txtRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
  }
}
```

## microsoft.network/privatednszones/aaaa

PUT Private DNS Zone A Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/AAAA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aRecords: [
      {
        ipv4Address: '1.2.3.4'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone AAAA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/AAAA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aaaaRecords: [
      {
        ipv6Address: '::1'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone CNAME Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/AAAA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cnameRecord: {
      cname: 'contoso.com'
    }
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone MX Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/AAAA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    mxRecords: [
      {
        exchange: 'mail.privatezone1.com'
        preference: 0
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone PTR Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/AAAA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ptrRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone SOA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/AAAA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    soaRecord: {
      email: 'azureprivatedns-hostmaster.microsoft.com'
      expireTime: 2419200
      host: 'azureprivatedns.net'
      minimumTTL: 300
      minimumTtl: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone SRV Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/AAAA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    srvRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone TXT Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/AAAA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
    txtRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
  }
}
```

## microsoft.network/privatednszones/cname

PUT Private DNS Zone A Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/CNAME@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aRecords: [
      {
        ipv4Address: '1.2.3.4'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone AAAA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/CNAME@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aaaaRecords: [
      {
        ipv6Address: '::1'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone CNAME Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/CNAME@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cnameRecord: {
      cname: 'contoso.com'
    }
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone MX Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/CNAME@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    mxRecords: [
      {
        exchange: 'mail.privatezone1.com'
        preference: 0
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone PTR Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/CNAME@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ptrRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone SOA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/CNAME@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    soaRecord: {
      email: 'azureprivatedns-hostmaster.microsoft.com'
      expireTime: 2419200
      host: 'azureprivatedns.net'
      minimumTTL: 300
      minimumTtl: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone SRV Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/CNAME@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    srvRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone TXT Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/CNAME@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
    txtRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
  }
}
```

## microsoft.network/privatednszones/mx

PUT Private DNS Zone A Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/MX@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aRecords: [
      {
        ipv4Address: '1.2.3.4'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone AAAA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/MX@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aaaaRecords: [
      {
        ipv6Address: '::1'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone CNAME Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/MX@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cnameRecord: {
      cname: 'contoso.com'
    }
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone MX Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/MX@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    mxRecords: [
      {
        exchange: 'mail.privatezone1.com'
        preference: 0
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone PTR Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/MX@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ptrRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone SOA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/MX@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    soaRecord: {
      email: 'azureprivatedns-hostmaster.microsoft.com'
      expireTime: 2419200
      host: 'azureprivatedns.net'
      minimumTTL: 300
      minimumTtl: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone SRV Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/MX@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    srvRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone TXT Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/MX@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
    txtRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
  }
}
```

## microsoft.network/privatednszones/ptr

PUT Private DNS Zone A Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/PTR@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aRecords: [
      {
        ipv4Address: '1.2.3.4'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone AAAA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/PTR@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aaaaRecords: [
      {
        ipv6Address: '::1'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone CNAME Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/PTR@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cnameRecord: {
      cname: 'contoso.com'
    }
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone MX Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/PTR@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    mxRecords: [
      {
        exchange: 'mail.privatezone1.com'
        preference: 0
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone PTR Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/PTR@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ptrRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone SOA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/PTR@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    soaRecord: {
      email: 'azureprivatedns-hostmaster.microsoft.com'
      expireTime: 2419200
      host: 'azureprivatedns.net'
      minimumTTL: 300
      minimumTtl: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone SRV Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/PTR@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    srvRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone TXT Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/PTR@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
    txtRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
  }
}
```

## microsoft.network/privatednszones/soa

PUT Private DNS Zone A Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SOA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aRecords: [
      {
        ipv4Address: '1.2.3.4'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone AAAA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SOA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aaaaRecords: [
      {
        ipv6Address: '::1'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone CNAME Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SOA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cnameRecord: {
      cname: 'contoso.com'
    }
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone MX Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SOA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    mxRecords: [
      {
        exchange: 'mail.privatezone1.com'
        preference: 0
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone PTR Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SOA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ptrRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone SOA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SOA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    soaRecord: {
      email: 'azureprivatedns-hostmaster.microsoft.com'
      expireTime: 2419200
      host: 'azureprivatedns.net'
      minimumTTL: 300
      minimumTtl: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone SRV Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SOA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    srvRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone TXT Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SOA@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
    txtRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
  }
}
```

## microsoft.network/privatednszones/srv

PUT Private DNS Zone A Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SRV@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aRecords: [
      {
        ipv4Address: '1.2.3.4'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone AAAA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SRV@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aaaaRecords: [
      {
        ipv6Address: '::1'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone CNAME Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SRV@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cnameRecord: {
      cname: 'contoso.com'
    }
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone MX Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SRV@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    mxRecords: [
      {
        exchange: 'mail.privatezone1.com'
        preference: 0
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone PTR Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SRV@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ptrRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone SOA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SRV@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    soaRecord: {
      email: 'azureprivatedns-hostmaster.microsoft.com'
      expireTime: 2419200
      host: 'azureprivatedns.net'
      minimumTTL: 300
      minimumTtl: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone SRV Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SRV@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    srvRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone TXT Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/SRV@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
    txtRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
  }
}
```

## microsoft.network/privatednszones/txt

PUT Private DNS Zone A Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/TXT@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aRecords: [
      {
        ipv4Address: '1.2.3.4'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone AAAA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/TXT@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aaaaRecords: [
      {
        ipv6Address: '::1'
      }
    ]
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone CNAME Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/TXT@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cnameRecord: {
      cname: 'contoso.com'
    }
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone MX Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/TXT@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    mxRecords: [
      {
        exchange: 'mail.privatezone1.com'
        preference: 0
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone PTR Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/TXT@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ptrRecords: [
      {
        ptrdname: 'localhost'
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone SOA Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/TXT@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    soaRecord: {
      email: 'azureprivatedns-hostmaster.microsoft.com'
      expireTime: 2419200
      host: 'azureprivatedns.net'
      minimumTTL: 300
      minimumTtl: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    ttl: 3600
  }
}
```

PUT Private DNS Zone SRV Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/TXT@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    srvRecords: [
      {
        port: 80
        priority: 0
        target: 'contoso.com'
        weight: 10
      }
    ]
    ttl: 3600
  }
}
```

PUT Private DNS Zone TXT Record Set
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/TXT@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key1: 'value1'
    }
    ttl: 3600
    txtRecords: [
      {
        value: [
          'string1'
          'string2'
        ]
      }
    ]
  }
}
```

## microsoft.network/privatednszones/virtualnetworklinks

PUT Private DNS Zone Virtual Network Link
```bicep
resource exampleResource 'Microsoft.Network/privateDnsZones/virtualNetworkLinks@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Global'
  properties: {
    registrationEnabled: false
    virtualNetwork: {
      id: '/subscriptions/virtualNetworkSubscriptionId/resourceGroups/virtualNetworkResourceGroup/providers/Microsoft.Network/virtualNetworks/virtualNetworkName'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```
