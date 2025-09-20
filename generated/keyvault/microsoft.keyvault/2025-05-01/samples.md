# Microsoft.KeyVault
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.keyvault/managedhsms

Create a new managed HSM Pool or update an existing managed HSM Pool
```bicep
resource exampleResource 'Microsoft.KeyVault/managedHSMs@2025-05-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    enablePurgeProtection: false
    enableSoftDelete: true
    initialAdminObjectIds: [
      '00000000-0000-0000-0000-000000000000'
    ]
    softDeleteRetentionInDays: 90
    tenantId: '00000000-0000-0000-0000-000000000000'
  }
  sku: {
    name: 'Standard_B1'
    family: 'B'
  }
  tags: {
    Dept: 'hsm'
    Environment: 'dogfood'
  }
}
```

## microsoft.keyvault/managedhsms/keys

Create a key
```bicep
resource exampleResource 'Microsoft.KeyVault/managedHSMs/keys@2025-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    kty: 'RSA'
  }
}
```

## microsoft.keyvault/managedhsms/privateendpointconnections

ManagedHsmPutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.KeyVault/managedHSMs/privateEndpointConnections@2025-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'My name is Joe and I\'m approving this.'
      status: 'Approved'
    }
  }
}
```

## microsoft.keyvault/vaults

Create a new vault or update an existing vault
```bicep
resource exampleResource 'Microsoft.KeyVault/vaults@2025-05-01' = {
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
    publicNetworkAccess: 'Enabled'
    sku: {
      name: 'standard'
      family: 'A'
    }
    tenantId: '00000000-0000-0000-0000-000000000000'
  }
}
```

Create or update a vault with network acls
```bicep
resource exampleResource 'Microsoft.KeyVault/vaults@2025-05-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    enabledForDeployment: true
    enabledForDiskEncryption: true
    enabledForTemplateDeployment: true
    networkAcls: {
      bypass: 'AzureServices'
      defaultAction: 'Deny'
      ipRules: [
        {
          value: '124.56.78.91'
        }
        {
          value: '\'10.91.4.0/24\''
        }
      ]
      virtualNetworkRules: [
        {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'
        }
      ]
    }
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
resource exampleResource 'Microsoft.KeyVault/vaults/accessPolicies@2025-05-01' = {
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

## microsoft.keyvault/vaults/keys

Create a key
```bicep
resource exampleResource 'Microsoft.KeyVault/vaults/keys@2025-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    kty: 'RSA'
  }
}
```

## microsoft.keyvault/vaults/privateendpointconnections

KeyVaultPutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.KeyVault/vaults/privateEndpointConnections@2025-05-01' = {
  parent: parentResource 
  name: 'example'
  etag: ''
  properties: {
    privateLinkServiceConnectionState: {
      description: 'My name is Joe and I\'m approving this.'
      status: 'Approved'
    }
  }
}
```

## microsoft.keyvault/vaults/secrets

Create a secret
```bicep
resource exampleResource 'Microsoft.KeyVault/vaults/secrets@2025-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    value: 'secret-value'
  }
}
```
