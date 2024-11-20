# Microsoft.Compute

## microsoft.compute/cloudservices

Create New Cloud Service with Multiple Roles
```bicep
resource exampleResource 'Microsoft.Compute/cloudServices@2020-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    configuration: '{ServiceConfiguration}'
    networkProfile: {
      loadBalancerConfigurations: [
        {
          name: 'contosolb'
          properties: {
            frontendIPConfigurations: [
              {
                name: 'contosofe'
                properties: {
                  publicIPAddress: {
                    id: '/subscriptions/{subscription-id}/resourceGroups/ConstosoRG/providers/Microsoft.Network/publicIPAddresses/contosopublicip'
                  }
                }
              }
            ]
          }
        }
      ]
    }
    packageUrl: '{PackageUrl}'
    roleProfile: {
      roles: [
        {
          name: 'ContosoFrontend'
          sku: {
            name: 'Standard_D1_v2'
            capacity: 1
            tier: 'Standard'
          }
        }
        {
          name: 'ContosoBackend'
          sku: {
            name: 'Standard_D1_v2'
            capacity: 1
            tier: 'Standard'
          }
        }
      ]
    }
    upgradeMode: 'Auto'
  }
}
```

Create New Cloud Service with Single Role
```bicep
resource exampleResource 'Microsoft.Compute/cloudServices@2020-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    configuration: '{ServiceConfiguration}'
    networkProfile: {
      loadBalancerConfigurations: [
        {
          name: 'myLoadBalancer'
          properties: {
            frontendIPConfigurations: [
              {
                name: 'myfe'
                properties: {
                  publicIPAddress: {
                    id: '/subscriptions/{subscription-id}/resourceGroups/ConstosoRG/providers/Microsoft.Network/publicIPAddresses/myPublicIP'
                  }
                }
              }
            ]
          }
        }
      ]
    }
    packageUrl: '{PackageUrl}'
    roleProfile: {
      roles: [
        {
          name: 'ContosoFrontend'
          sku: {
            name: 'Standard_D1_v2'
            capacity: 1
            tier: 'Standard'
          }
        }
      ]
    }
    upgradeMode: 'Auto'
  }
}
```

Create New Cloud Service with Single Role and Certificate from Key Vault
```bicep
resource exampleResource 'Microsoft.Compute/cloudServices@2020-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    configuration: '{ServiceConfiguration}'
    networkProfile: {
      loadBalancerConfigurations: [
        {
          name: 'contosolb'
          properties: {
            frontendIPConfigurations: [
              {
                name: 'contosofe'
                properties: {
                  publicIPAddress: {
                    id: '/subscriptions/{subscription-id}/resourceGroups/ConstosoRG/providers/Microsoft.Network/publicIPAddresses/contosopublicip'
                  }
                }
              }
            ]
          }
        }
      ]
    }
    osProfile: {
      secrets: [
        {
          sourceVault: {
            id: '/subscriptions/{subscription-id}/resourceGroups/ConstosoRG/providers/Microsoft.KeyVault/vaults/{keyvault-name}'
          }
          vaultCertificates: [
            {
              certificateUrl: 'https://{keyvault-name}.vault.azure.net:443/secrets/ContosoCertificate/{secret-id}'
            }
          ]
        }
      ]
    }
    packageUrl: '{PackageUrl}'
    roleProfile: {
      roles: [
        {
          name: 'ContosoFrontend'
          sku: {
            name: 'Standard_D1_v2'
            capacity: 1
            tier: 'Standard'
          }
        }
      ]
    }
    upgradeMode: 'Auto'
  }
}
```

Create New Cloud Service with Single Role and RDP Extension
```bicep
resource exampleResource 'Microsoft.Compute/cloudServices@2020-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    configuration: '{ServiceConfiguration}'
    extensionProfile: {
      extensions: [
        {
          name: 'RDPExtension'
          properties: {
            type: 'RDP'
            autoUpgradeMinorVersion: false
            protectedSettings: '<PrivateConfig><Password>{password}</Password></PrivateConfig>'
            publisher: 'Microsoft.Windows.Azure.Extensions'
            settings: '<PublicConfig><UserName>UserAzure</UserName><Expiration>10/22/2021 15:05:45</Expiration></PublicConfig>'
            typeHandlerVersion: '1.2.1'
          }
        }
      ]
    }
    networkProfile: {
      loadBalancerConfigurations: [
        {
          name: 'contosolb'
          properties: {
            frontendIPConfigurations: [
              {
                name: 'contosofe'
                properties: {
                  publicIPAddress: {
                    id: '/subscriptions/{subscription-id}/resourceGroups/ConstosoRG/providers/Microsoft.Network/publicIPAddresses/contosopublicip'
                  }
                }
              }
            ]
          }
        }
      ]
    }
    packageUrl: '{PackageUrl}'
    roleProfile: {
      roles: [
        {
          name: 'ContosoFrontend'
          sku: {
            name: 'Standard_D1_v2'
            capacity: 1
            tier: 'Standard'
          }
        }
      ]
    }
    upgradeMode: 'Auto'
  }
}
```
