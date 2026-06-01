# Microsoft.Devices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devices/provisioningservices

DPSCreate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices@2026-03-01-preview' = {
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

DPSCreateWithIotHub
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices@2026-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/abcf2d55-764f-419f-974d-f77a55c2ce55/resourcegroups/my-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/my-mi-1': {
      }
    }
  }
  location: 'East US'
  properties: {
    enableDataResidency: false
    iotHubs: [
      {
        allocationWeight: 1
        applyAllocationPolicy: true
        authenticationType: 'UserAssigned'
        hostName: 'myFirstIoTHub.azure-devices.net'
        location: 'eastus'
        selectedUserAssignedIdentityResourceId: '/subscriptions/abcf2d55-764f-419f-974d-f77a55c2ce55/resourcegroups/my-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/my-mi-1'
      }
    ]
  }
  sku: {
    name: 'S1'
    capacity: 1
  }
  tags: {
  }
}
```

DPSCreateWithNamespace
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices@2026-03-01-preview' = {
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
resource exampleResource 'Microsoft.Devices/provisioningServices@2026-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned,UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourcegroups/testrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity': {
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

## microsoft.devices/provisioningservices/certificates

DPSCreateOrUpdateCertificate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices/certificates@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    certificate: 'MA=='
  }
}
```

## microsoft.devices/provisioningservices/privateendpointconnections

PrivateEndpointConnection_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Devices/provisioningServices/privateEndpointConnections@2026-03-01-preview' = {
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
