# Microsoft.ManagedIdentity

## microsoft.managedidentity/userassignedidentities

IdentityCreate
```bicep
resource exampleResource 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-07-31-preview' = {
  name: 'example'
  location: 'eastus'
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.managedidentity/userassignedidentities/federatedidentitycredentials

FederatedIdentityCredentialCreate
```bicep
resource exampleResource 'Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials@2023-07-31-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    audiences: [
      'api://AzureADTokenExchange'
    ]
    issuer: 'https://oidc.prod-aks.azure.com/TenantGUID/IssuerGUID'
    subject: 'system:serviceaccount:ns:svcaccount'
  }
}
```
