# Microsoft.Compute
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.compute/cloudservices

Create New Cloud Service with Multiple Roles
```bicep
resource exampleResource 'Microsoft.Compute/cloudServices@2022-09-04' = {
  name: 'example'
  location: 'westus'
  properties: {
    configuration: '{ServiceConfiguration}'
    networkProfile: {
      loadBalancerConfigurations: [
        {
          name: 'contosolb'
          properties: {
            frontendIpConfigurations: [
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

Create New Cloud Service with Multiple Roles in a specific availability zone
```bicep
resource exampleResource 'Microsoft.Compute/cloudServices@2022-09-04' = {
  name: 'example'
  location: 'westus'
  properties: {
    configuration: '{ServiceConfiguration}'
    networkProfile: {
      loadBalancerConfigurations: [
        {
          name: 'contosolb'
          properties: {
            frontendIpConfigurations: [
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
  zones: [
    '1'
  ]
}
```

Create New Cloud Service with Single Role
```bicep
resource exampleResource 'Microsoft.Compute/cloudServices@2022-09-04' = {
  name: 'example'
  location: 'westus'
  properties: {
    configuration: '{ServiceConfiguration}'
    networkProfile: {
      loadBalancerConfigurations: [
        {
          name: 'myLoadBalancer'
          properties: {
            frontendIpConfigurations: [
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
resource exampleResource 'Microsoft.Compute/cloudServices@2022-09-04' = {
  name: 'example'
  location: 'westus'
  properties: {
    configuration: '{ServiceConfiguration}'
    networkProfile: {
      loadBalancerConfigurations: [
        {
          name: 'contosolb'
          properties: {
            frontendIpConfigurations: [
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
resource exampleResource 'Microsoft.Compute/cloudServices@2022-09-04' = {
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
            typeHandlerVersion: '1.2'
          }
        }
      ]
    }
    networkProfile: {
      loadBalancerConfigurations: [
        {
          name: 'contosolb'
          properties: {
            frontendIpConfigurations: [
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
