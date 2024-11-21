# Microsoft.KeyVault
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.keyvault/vaults

Create a new vault or update an existing vault
```bicep
resource exampleResource 'Microsoft.KeyVault/vaults@2016-10-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    accessPolicies: [
      {
        objectId: '00000000-0000-0000-0000-000000000000'
        permissions: {
          certificates: [
            'get'
            'list'
            'delete'
            'create'
            'import'
            'update'
            'managecontacts'
            'getissuers'
            'listissuers'
            'setissuers'
            'deleteissuers'
            'manageissuers'
            'recover'
            'purge'
          ]
          keys: [
            'encrypt'
            'decrypt'
            'wrapKey'
            'unwrapKey'
            'sign'
            'verify'
            'get'
            'list'
            'create'
            'update'
            'import'
            'delete'
            'backup'
            'restore'
            'recover'
            'purge'
          ]
          secrets: [
            'get'
            'list'
            'set'
            'delete'
            'backup'
            'restore'
            'recover'
            'purge'
          ]
        }
        tenantId: '00000000-0000-0000-0000-000000000000'
      }
    ]
    enabledForDeployment: true
    enabledForDiskEncryption: true
    enabledForTemplateDeployment: true
    sku: {
      name: 'standard'
      family: 'A'
    }
    tenantId: '00000000-0000-0000-0000-000000000000'
  }
}
```

## microsoft.keyvault/vaults/accesspolicies

Add an access policy, or update an access policy with new permissions
```bicep
resource exampleResource 'Microsoft.KeyVault/vaults/accessPolicies@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accessPolicies: [
      {
        objectId: '00000000-0000-0000-0000-000000000000'
        permissions: {
          certificates: [
            'get'
          ]
          keys: [
            'encrypt'
          ]
          secrets: [
            'get'
          ]
        }
        tenantId: '00000000-0000-0000-0000-000000000000'
      }
    ]
  }
}
```

## microsoft.keyvault/vaults/secrets

Create a secret
```bicep
resource exampleResource 'Microsoft.KeyVault/vaults/secrets@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    value: 'secret-value'
  }
}
```
