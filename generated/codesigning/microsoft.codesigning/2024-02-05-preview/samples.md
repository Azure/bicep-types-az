# Microsoft.CodeSigning

## microsoft.codesigning/codesigningaccounts

Create a trusted Signing Account.
```bicep
resource exampleResource 'Microsoft.CodeSigning/codeSigningAccounts@2024-02-05-preview' = {
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
resource exampleResource 'Microsoft.CodeSigning/codeSigningAccounts/certificateProfiles@2024-02-05-preview' = {
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
