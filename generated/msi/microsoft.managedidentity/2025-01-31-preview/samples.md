# Microsoft.ManagedIdentity
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.managedidentity/userassignedidentities

IdentityCreate
```bicep
resource exampleResource 'Microsoft.ManagedIdentity/userAssignedIdentities@2025-01-31-preview' = {
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
resource exampleResource 'Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials@2025-01-31-preview' = {
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

FlexibleFederatedIdentityCredentialCreate
```bicep
resource exampleResource 'Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials@2025-01-31-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    audiences: [
      'api://AzureADTokenExchange'
    ]
    claimsMatchingExpression: {
      languageVersion: 1
      value: 'claims[\'sub\'] matches system:serviceaccount:ns:*'
    }
    issuer: 'https://oidc.prod-aks.azure.com/TenantGUID/IssuerGUID'
  }
}
```
