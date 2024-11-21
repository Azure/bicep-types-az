# Microsoft.Attestation

## microsoft.attestation/attestationproviders

AttestationProviders_Create
```bicep
resource exampleResource 'Microsoft.Attestation/attestationProviders@2021-06-01-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    publicNetworkAccess: 'Enabled'
  }
  tags: {
    Property1: 'Value1'
    Property2: 'Value2'
    Property3: 'Value3'
  }
}
```

## microsoft.attestation/attestationproviders/privateendpointconnections

AttestationProviderPutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.Attestation/attestationProviders/privateEndpointConnections@2021-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      status: 'Approved'
    }
  }
}
```
