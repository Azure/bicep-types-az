# Microsoft.HybridNetwork

## microsoft.hybridnetwork/networkfunctions

Create network function resource
```bicep
resource exampleResource 'Microsoft.HybridNetwork/networkFunctions@2020-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    device: {
      id: '/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/devices/testDevice'
    }
    managedApplicationParameters: {
    }
    networkFunctionUserConfigurations: [
      {
        networkInterfaces: [
          {
            ipConfigurations: [
              {
                dnsServers: {
                }
                gateway: ''
                ipAddress: ''
                ipAllocationMethod: 'Dynamic'
                ipVersion: 'IPv4'
                subnet: ''
              }
            ]
            macAddress: ''
            networkInterfaceName: 'nic1'
            vmSwitchType: 'Management'
          }
          {
            ipConfigurations: [
              {
                dnsServers: {
                }
                gateway: ''
                ipAddress: ''
                ipAllocationMethod: 'Dynamic'
                ipVersion: 'IPv4'
                subnet: ''
              }
            ]
            macAddress: 'DC-97-F8-79-16-7D'
            networkInterfaceName: 'nic2'
            vmSwitchType: 'Wan'
          }
        ]
        roleName: 'testRole'
        userDataParameters: {
        }
      }
    ]
    skuName: 'testSku'
    skuType: 'SDWAN'
    vendorName: 'testVendor'
  }
}
```

## microsoft.hybridnetwork/devices

Create or update device
```bicep
resource exampleResource 'Microsoft.HybridNetwork/devices@2020-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    azureStackEdge: {
      id: '/subscriptions/subid1/resourcegroups/rg2/providers/Microsoft.DataboxEdge/DataboxEdgeDevices/TestDataboxEdgeDeviceName'
    }
    deviceType: 'AzureStackEdge'
  }
}
```

## microsoft.hybridnetwork/vendors

Create or update Vendor resource
```bicep
resource exampleResource 'Microsoft.HybridNetwork/vendors@2020-01-01-preview' = {
  name: 'example'
}
```

## microsoft.hybridnetwork/vendors/vendorskus

Create or update the sku of vendor resource
```bicep
resource exampleResource 'Microsoft.HybridNetwork/vendors/vendorSkus@2020-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentMode: 'PrivateEdgeZone'
    managedApplicationTemplate: {
    }
    networkFunctionTemplate: {
      networkFunctionRoleConfigurations: [
        {
          customProfile: {
            metadataConfigurationPath: '/var/logs/network.cfg'
          }
          networkInterfaces: [
            {
              ipConfigurations: [
                {
                  dnsServers: {
                  }
                  gateway: ''
                  ipAddress: ''
                  ipAllocationMethod: 'Dynamic'
                  ipVersion: 'IPv4'
                  subnet: ''
                }
              ]
              macAddress: ''
              networkInterfaceName: 'nic1'
              vmSwitchType: 'Wan'
            }
            {
              ipConfigurations: [
                {
                  dnsServers: {
                  }
                  gateway: ''
                  ipAddress: ''
                  ipAllocationMethod: 'Dynamic'
                  ipVersion: 'IPv4'
                  subnet: ''
                }
              ]
              macAddress: ''
              networkInterfaceName: 'nic2'
              vmSwitchType: 'Management'
            }
          ]
          osProfile: {
            adminUsername: 'dummyuser'
            customData: 'base-64 encoded string of custom data'
            linuxConfiguration: {
              ssh: {
                publicKeys: [
                  {
                    path: 'home/user/.ssh/authorized_keys'
                    keyData: 'ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAgEAwrr66r8n6B8Y0zMF3dOpXEapIQD9DiYQ6D6/zwor9o39jSkHNiMMER/GETBbzP83LOcekm02aRjo55ArO7gPPVvCXbrirJu9pkm4AC4BBre5xSLS= user@constoso-DSH'
                  }
                ]
              }
            }
          }
          roleName: 'test'
          roleType: 'VirtualMachine'
          storageProfile: {
            dataDisks: [
              {
                name: 'DataDisk1'
                createOption: 'Empty'
                diskSizeGB: 10
              }
            ]
            imageReference: {
              offer: 'UbuntuServer'
              publisher: 'Canonical'
              sku: '18.04-LTS'
              version: '18.04.201804262'
            }
            osDisk: {
              name: 'vhdName'
              diskSizeGB: 30
              osType: 'Linux'
              vhd: {
                uri: 'https://contoso.net/link/vnd.vhd?sp=rl&st=2020-10-08T20:38:19Z&se=2020-12-09T19:38:00Z&sv=2019-12-12&sr=b&sig=7BM2f4yOw%3D'
              }
            }
          }
          virtualMachineSize: 'Standard_D3_v2'
        }
      ]
    }
    preview: true
  }
}
```

## microsoft.hybridnetwork/vendors/vendorskus/previewsubscriptions

Create or update preview subscription of vendor sku sub resource
```bicep
resource exampleResource 'Microsoft.HybridNetwork/vendors/vendorSkus/previewSubscriptions@2020-01-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.hybridnetwork/locations/vendors/networkfunctions

Create or update vendor network function sub resource
```bicep
resource exampleResource 'Microsoft.HybridNetwork/locations/vendors/networkFunctions@2020-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    networkFunctionVendorConfigurations: [
      {
        networkInterfaces: [
          {
            ipConfigurations: [
              {
                dnsServers: {
                }
                gateway: ''
                ipAddress: ''
                ipAllocationMethod: 'Dynamic'
                ipVersion: 'IPv4'
                subnet: ''
              }
            ]
            macAddress: ''
            networkInterfaceName: 'nic1'
            vmSwitchType: 'Management'
          }
          {
            ipConfigurations: [
              {
                dnsServers: {
                }
                gateway: ''
                ipAddress: ''
                ipAllocationMethod: 'Dynamic'
                ipVersion: 'IPv4'
                subnet: ''
              }
            ]
            macAddress: 'DC-97-F8-79-16-7D'
            networkInterfaceName: 'nic2'
            vmSwitchType: 'Wan'
          }
        ]
        osProfile: {
          adminUsername: 'dummyuser'
          customData: 'base-64 encoded string of custom data'
          linuxConfiguration: {
            ssh: {
              publicKeys: [
                {
                  path: 'home/user/.ssh/authorized_keys'
                  keyData: 'ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAgEAwrr66r8n6B8Y0zMF3dOpXEapIQD9DiYQ6D6/zwor9o39jSkHNiMMER/GETBbzP83LOcekm02aRjo55ArO7gPPVvCXbrirJu9pkm4AC4BBre5xSLS= user@constoso-DSH'
                }
              ]
            }
          }
        }
        roleName: 'testRole'
        userDataParameters: {
        }
      }
    ]
    skuType: 'SDWAN'
    vendorProvisioningState: 'Provisioning'
  }
}
```
