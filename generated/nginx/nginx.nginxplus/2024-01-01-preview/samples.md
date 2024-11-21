# Nginx.NginxPlus
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## nginx.nginxplus/nginxdeployments

Deployments_Create
```bicep
resource exampleResource 'Nginx.NginxPlus/nginxDeployments@2024-01-01-preview' = {
  name: 'example'
  name: 'myDeployment'
  location: 'West US'
  properties: {
    autoUpgradeProfile: {
      upgradeChannel: 'stable'
    }
    managedResourceGroup: 'myManagedResourceGroup'
    networkProfile: {
      frontEndIPConfiguration: {
        privateIPAddresses: [
          {
            privateIPAddress: '1.1.1.1'
            privateIPAllocationMethod: 'Static'
            subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet'
          }
        ]
        publicIPAddresses: [
          {
            id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/publicIPAddresses/myPublicIPAddress'
          }
        ]
      }
      networkInterfaceConfiguration: {
        subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet'
      }
    }
    scalingProperties: {
      capacity: 10
    }
    userProfile: {
      preferredEmail: 'example@example.email'
    }
  }
  tags: {
    Environment: 'Dev'
  }
}
```

## nginx.nginxplus/nginxdeployments/certificates

Certificates_CreateOrUpdate
```bicep
resource exampleResource 'Nginx.NginxPlus/nginxDeployments/certificates@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    certificateVirtualPath: '/src/cert/somePath.cert'
    keyVaultSecretId: 'https://someKV.vault.azure.com/someSecretID'
    keyVirtualPath: '/src/cert/somekey.key'
  }
}
```

## nginx.nginxplus/nginxdeployments/configurations

Configurations_CreateOrUpdate
```bicep
resource exampleResource 'Nginx.NginxPlus/nginxDeployments/configurations@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    files: [
      {
        content: 'ABCDEF=='
        virtualPath: '/etc/nginx/nginx.conf'
      }
    ]
    package: {
      data: {
      }
    }
    rootFile: '/etc/nginx/nginx.conf'
  }
}
```
