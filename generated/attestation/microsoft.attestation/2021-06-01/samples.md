# Microsoft.Attestation
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.attestation/attestationproviders

AttestationProviders_Create
```bicep
resource exampleResource 'Microsoft.Attestation/attestationProviders@2021-06-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    publicNetworkAccess: 'Enabled'
    tpmAttestationAuthentication: 'Enabled'
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
resource exampleResource 'Microsoft.Attestation/attestationProviders/privateEndpointConnections@2021-06-01' = {
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
