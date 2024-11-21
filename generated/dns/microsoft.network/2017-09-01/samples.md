# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/dnszones

Create zone
```bicep
resource exampleResource 'Microsoft.Network/dnsZones@2017-09-01' = {
  name: 'example'
  location: 'Global'
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/dnszones/a

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/A@2017-09-01' = {
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

## microsoft.network/dnszones/aaaa

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/AAAA@2017-09-01' = {
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

## microsoft.network/dnszones/caa

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CAA@2017-09-01' = {
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

## microsoft.network/dnszones/cname

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/CNAME@2017-09-01' = {
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

## microsoft.network/dnszones/mx

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/MX@2017-09-01' = {
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

## microsoft.network/dnszones/ns

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/NS@2017-09-01' = {
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

## microsoft.network/dnszones/ptr

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/PTR@2017-09-01' = {
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

## microsoft.network/dnszones/soa

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SOA@2017-09-01' = {
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

## microsoft.network/dnszones/srv

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/SRV@2017-09-01' = {
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

## microsoft.network/dnszones/txt

Create CAA recordset
```bicep
resource exampleResource 'Microsoft.Network/dnsZones/TXT@2017-09-01' = {
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
