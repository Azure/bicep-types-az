# Microsoft.CodeSigning
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.codesigning/codesigningaccounts

Create a trusted Signing Account.
```bicep
resource exampleResource 'Microsoft.CodeSigning/codeSigningAccounts@2025-10-13' = {
  name: 'example'
  location: 'westus'
  properties: {
    sku: {
      name: 'Basic'
    }
  }
}
```

## microsoft.codesigning/codesigningaccounts/certificateprofiles

Create a certificate profile.
```bicep
resource exampleResource 'Microsoft.CodeSigning/codeSigningAccounts/certificateProfiles@2025-10-13' = {
  parent: parentResource 
  name: 'example'
  properties: {
    identityValidationId: '00000000-1234-5678-3333-444444444444'
    includePostalCode: true
    includeStreetAddress: false
    profileType: 'PublicTrust'
  }
}
```
