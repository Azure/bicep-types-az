# Microsoft.Devices

## microsoft.devices/provisioningservices/certificates

DPSCreateOrUpdateCertificate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices/certificates@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  certificate: '############################################'
}
```

## microsoft.devices/provisioningservices

DPSCreate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices@2020-01-01' = {
  name: 'example'
  location: 'East US'
  properties: {
  }
  sku: {
    name: 'S1'
    capacity: 1
  }
  tags: {
  }
}
```
