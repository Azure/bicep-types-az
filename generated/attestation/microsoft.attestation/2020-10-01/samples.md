# Microsoft.Attestation

## microsoft.attestation/attestationproviders

## microsoft.attestation/attestationproviders/privateendpointconnections

AttestationProviderPutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.Attestation/attestationProviders/privateEndpointConnections@2020-10-01' = {
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
