# Microsoft.ManagedIdentity

## microsoft.managedidentity/userassignedidentities

IdentityCreate
```bicep
resource exampleResource 'Microsoft.ManagedIdentity/userAssignedIdentities@2021-09-30-preview' = {
  name: 'example'
  location: 'eastus'
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```
