# Microsoft.Devices

## microsoft.devices/provisioningservices/certificates

DPSCreateOrUpdateCertificate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices/certificates@2018-01-22' = {
  parent: parentResource 
  name: 'example'
  certificate: '############################################'
}
```

## microsoft.devices/provisioningservices

DPSCreate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices@2018-01-22' = {
  name: 'example'
  type: 'Microsoft.Devices/ProvisioningServices'
  location: 'East US'
  properties: {
  }
  sku: {
    name: 'S1'
    capacity: 1
    tier: 'Standard'
  }
  tags: {
  }
}
```
