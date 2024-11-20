# Microsoft.Authorization

## microsoft.authorization/locks

Create management lock at resource group level
```bicep
resource exampleResource 'Microsoft.Authorization/locks@2016-09-01' = {
  name: 'example'
  properties: {
    level: 'ReadOnly'
  }
}
```
