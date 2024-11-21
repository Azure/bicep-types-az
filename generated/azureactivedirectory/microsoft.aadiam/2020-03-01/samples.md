# microsoft.aadiam
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.aadiam/privatelinkforazuread

privateLinkPolicyCreate
```bicep
resource exampleResource 'microsoft.aadiam/privateLinkForAzureAd@2020-03-01' = {
  name: 'example'
  name: 'myOrgPrivateLinkPolicy'
  allTenants: false
  ownerTenantId: '950f8bca-bf4d-4a41-ad10-034e792a243d'
  resourceGroup: 'myOrgVnetRG'
  resourceName: 'myOrgVnetPrivateLink'
  subscriptionId: '57849194-ea1f-470b-abda-d195b25634c1'
  tenants: [
    '3616657d-1c80-41ae-9d83-2a2776f2c9be'
    '727b6ef1-18ab-4627-ac95-3f9cd945ed87'
  ]
}
```

privateLinkPolicyMinCreate
```bicep
resource exampleResource 'microsoft.aadiam/privateLinkForAzureAd@2020-03-01' = {
  name: 'example'
  name: 'myOrgPrivateLinkPolicy'
  allTenants: false
  ownerTenantId: '950f8bca-bf4d-4a41-ad10-034e792a243d'
  resourceGroup: 'myOrgVnetRG'
  resourceName: 'myOrgVnetPrivateLink'
  subscriptionId: '57849194-ea1f-470b-abda-d195b25634c1'
  tenants: [
    '3616657d-1c80-41ae-9d83-2a2776f2c9be'
    '727b6ef1-18ab-4627-ac95-3f9cd945ed87'
  ]
}
```

## microsoft.aadiam/privatelinkforazuread/privateendpointconnections

AadiamPutPrivateEndpointConnection
```bicep
resource exampleResource 'microsoft.aadiam/privateLinkForAzureAd/privateEndpointConnections@2020-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
      id: 'subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/microsoft.aadiam/privateLinkForAzureAD/ddb1/privateLinkConnections/{privateEndpointConnection name}'
    }
    privateLinkServiceConnectionState: {
      description: 'You may pass'
      actionsRequired: 'None'
      status: 'Approved'
    }
  }
}
```
