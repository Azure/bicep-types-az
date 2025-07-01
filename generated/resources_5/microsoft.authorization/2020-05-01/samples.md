# Microsoft.Authorization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
