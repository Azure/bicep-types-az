# Microsoft.ManagedIdentity

## microsoft.managedidentity/userassignedidentities

IdentityCreate
```bicep
resource exampleResource 'Microsoft.ManagedIdentity/userAssignedIdentities@2018-11-30' = {
  name: 'example'
  location: 'eastus'
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```
