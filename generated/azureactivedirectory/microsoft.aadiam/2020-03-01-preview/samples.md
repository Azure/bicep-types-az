# microsoft.aadiam

## microsoft.aadiam/privatelinkforazuread

privateLinkPolicyCreate
```bicep
resource exampleResource 'microsoft.aadiam/privateLinkForAzureAd@2020-03-01-preview' = {
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
resource exampleResource 'microsoft.aadiam/privateLinkForAzureAd@2020-03-01-preview' = {
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
