# Microsoft.Authorization

## microsoft.authorization/privatelinkassociations

Create a private link association, associate scope to rmpl.
```bicep
resource exampleResource 'Microsoft.Authorization/privateLinkAssociations@2020-05-01' = {
  name: 'example'
  properties: {
    privateLink: '00000000-0000-0000-0000-000000000000'
    publicNetworkAccess: 'Enabled'
  }
}
```

## microsoft.authorization/resourcemanagementprivatelinks

Create Resource Management Private Link.
```bicep
resource exampleResource 'Microsoft.Authorization/resourceManagementPrivateLinks@2020-05-01' = {
  name: 'example'
  location: 'eastus'
}
```

## microsoft.authorization/locks

Create management lock at resource group level
```bicep
resource exampleResource 'Microsoft.Authorization/locks@2020-05-01' = {
  name: 'example'
  properties: {
    level: 'ReadOnly'
  }
}
```
