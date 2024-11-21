# Microsoft.ManagedIdentity

## microsoft.managedidentity/userassignedidentities

IdentityCreate
```bicep
resource exampleResource 'Microsoft.ManagedIdentity/userAssignedIdentities@2015-08-31-preview' = {
  name: 'example'
  location: 'cus'
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```
