# Microsoft.Devices

## microsoft.devices/provisioningservices/certificates

DPSCreateOrUpdateCertificate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices/certificates@2022-02-05' = {
  parent: parentResource 
  name: 'example'
  properties: {
    certificate: '############################################'
  }
}
```

## microsoft.devices/provisioningservices

DPSCreate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices@2022-02-05' = {
  name: 'example'
  location: 'East US'
  properties: {
    enableDataResidency: false
  }
  sku: {
    name: 'S1'
    capacity: 1
  }
  tags: {
  }
}
```

## microsoft.devices/provisioningservices/privateendpointconnections

PrivateEndpointConnection_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices/privateEndpointConnections@2022-02-05' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@contoso.com'
      status: 'Approved'
    }
  }
}
```
