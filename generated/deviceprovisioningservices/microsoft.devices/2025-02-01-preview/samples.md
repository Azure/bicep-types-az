# Microsoft.Devices

## microsoft.devices/provisioningservices/certificates

DPSCreateOrUpdateCertificate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices/certificates@2025-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    certificate: 'MA=='
  }
}
```

## microsoft.devices/provisioningservices

DPSCreate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices@2025-02-01-preview' = {
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

DPSUpdate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices@2025-02-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned,UserAssigned'
    userAssignedIdentities: {
      /subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourcegroups/testrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity: {
      }
    }
  }
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
resource exampleResource 'Microsoft.Devices/provisioningServices/privateEndpointConnections@2025-02-01-preview' = {
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
