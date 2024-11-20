# Microsoft.Workloads

## microsoft.workloads/phpworkloads

Workloads
```bicep
resource exampleResource 'Microsoft.Workloads/phpWorkloads@2021-12-01-preview' = {
  name: 'example'
  kind: 'WordPress'
  location: 'eastus2'
  properties: {
    adminUserProfile: {
      sshPublicKey: '===SSH=PUBLIC=KEY==='
      userName: 'wpadmin'
    }
    appLocation: 'eastus'
    backupProfile: {
      backupEnabled: 'Disabled'
    }
    cacheProfile: {
      name: 'wp-cache'
      capacity: 0
      family: 'C'
      skuName: 'Basic'
    }
    controllerProfile: {
      name: 'contoller-vm'
      dataDisks: [
        {
          sizeInGB: 100
          storageType: 'Premium_LRS'
        }
      ]
      nodeSku: 'Standard_DS2_v2'
      osDisk: {
        storageType: 'Premium_LRS'
      }
      osImage: {
        offer: 'UbuntuServer'
        publisher: 'Canonical'
        sku: '18.0-LTS'
        version: 'latest'
      }
    }
    databaseProfile: {
      type: 'MySql'
      backupRetentionDays: 7
      haEnabled: 'Disabled'
      serverName: 'wp-db-server'
      sku: 'Standard_D32s_v4'
      sslEnforcementEnabled: 'Enabled'
      storageInGB: 128
      storageIops: 200
      storageSku: 'Premium_LRS'
      tier: 'GeneralPurpose'
      version: '5.7'
    }
    fileshareProfile: {
      shareSizeInGB: 100
      shareType: 'AzureFiles'
      storageType: 'Premium_LRS'
    }
    managedResourceGroupConfiguration: {
      name: 'php-mrg-wp39'
    }
    networkProfile: {
      azureFrontDoorEnabled: 'Enabled'
      loadBalancerSku: 'Standard'
      loadBalancerType: 'LoadBalancer'
    }
    phpProfile: {
      version: '7.3'
    }
    searchProfile: {
      nodeSku: 'Standard_DS2_v2'
      osDisk: {
        storageType: 'Premium_LRS'
      }
      osImage: {
        offer: 'UbuntuServer'
        publisher: 'Canonical'
        sku: '18.0-LTS'
        version: 'latest'
      }
      searchType: 'Elastic'
    }
    siteProfile: {
      domainName: 'www.example.com'
    }
    webNodesProfile: {
      name: 'web-server'
      autoScaleMaxCount: 1
      autoScaleMinCount: 1
      nodeSku: 'Standard_DS2_v2'
      osDisk: {
        storageType: 'Premium_LRS'
      }
      osImage: {
        offer: 'UbuntuServer'
        publisher: 'Canonical'
        sku: '18.0-LTS'
        version: 'latest'
      }
    }
  }
  sku: {
    name: 'Large'
  }
  tags: {
  }
}
```

## microsoft.workloads/phpworkloads/wordpressinstances

Workloads
```bicep
resource exampleResource 'Microsoft.Workloads/phpWorkloads/wordpressInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    databaseName: 'wpdb'
    databaseUser: 'wpuser'
    version: '5.4.2'
  }
}
```

## microsoft.workloads/sapvirtualinstances

Create Infrastructure for Distributed System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure for HA System with Availability Set
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        highAvailabilityConfig: {
          highAvailabilityType: 'AvailabilitySet'
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure for HA System with Availability Zone
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        highAvailabilityConfig: {
          highAvailabilityType: 'AvailabilityZone'
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure for Single Server System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        databaseType: 'HANA'
        deploymentType: 'SingleServer'
        networkConfiguration: {
          isSecondaryIpEnabled: true
        }
        subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
        virtualMachineConfiguration: {
          imageReference: {
            offer: 'RHEL-SAP-HA'
            publisher: 'RedHat'
            sku: '84sapha-gen2'
            version: '8.4.2021091202'
          }
          osProfile: {
            adminUsername: '{your-username}'
            osConfiguration: {
              disablePasswordAuthentication: true
              osType: 'Linux'
              sshKeyPair: {
                privateKey: 'xyz'
                publicKey: 'abc'
              }
            }
          }
          vmSize: 'Standard_E32ds_v4'
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
    }
    environment: 'NonProd'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure with Disk and OS configuration for HA System with Availability Set
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          diskConfiguration: {
            diskVolumeConfigurations: {
              backup: {
                count: 2
                sizeGB: 256
                sku: {
                  name: 'StandardSSD_LRS'
                }
              }
              hana/data: {
                count: 4
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
              hana/log: {
                count: 3
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
              hana/shared: {
                count: 1
                sizeGB: 256
                sku: {
                  name: 'StandardSSD_LRS'
                }
              }
              os: {
                count: 1
                sizeGB: 64
                sku: {
                  name: 'StandardSSD_LRS'
                }
              }
              usr/sap: {
                count: 1
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
            }
          }
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        highAvailabilityConfig: {
          highAvailabilityType: 'AvailabilitySet'
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure with Disk and OS configuration for HA System with Availability Zone without backup disk
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          diskConfiguration: {
            diskVolumeConfigurations: {
              hana/data: {
                count: 4
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
              hana/log: {
                count: 3
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
              hana/shared: {
                count: 1
                sizeGB: 256
                sku: {
                  name: 'StandardSSD_LRS'
                }
              }
              os: {
                count: 1
                sizeGB: 64
                sku: {
                  name: 'StandardSSD_LRS'
                }
              }
              usr/sap: {
                count: 1
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
            }
          }
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        highAvailabilityConfig: {
          highAvailabilityType: 'AvailabilityZone'
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure with Disk and OS configurations for Single Server System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        databaseType: 'HANA'
        dbDiskConfiguration: {
          diskVolumeConfigurations: {
            backup: {
              count: 2
              sizeGB: 256
              sku: {
                name: 'StandardSSD_LRS'
              }
            }
            hana/data: {
              count: 4
              sizeGB: 128
              sku: {
                name: 'Premium_LRS'
              }
            }
            hana/log: {
              count: 3
              sizeGB: 128
              sku: {
                name: 'Premium_LRS'
              }
            }
            hana/shared: {
              count: 1
              sizeGB: 256
              sku: {
                name: 'StandardSSD_LRS'
              }
            }
            os: {
              count: 1
              sizeGB: 64
              sku: {
                name: 'StandardSSD_LRS'
              }
            }
            usr/sap: {
              count: 1
              sizeGB: 128
              sku: {
                name: 'Premium_LRS'
              }
            }
          }
        }
        deploymentType: 'SingleServer'
        networkConfiguration: {
          isSecondaryIpEnabled: true
        }
        subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
        virtualMachineConfiguration: {
          imageReference: {
            offer: 'RHEL-SAP-HA'
            publisher: 'RedHat'
            sku: '84sapha-gen2'
            version: '8.4.2021091202'
          }
          osProfile: {
            adminUsername: '{your-username}'
            osConfiguration: {
              disablePasswordAuthentication: true
              osType: 'Linux'
              sshKeyPair: {
                privateKey: 'xyz'
                publicKey: 'abc'
              }
            }
          }
          vmSize: 'Standard_E32ds_v4'
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
    }
    environment: 'NonProd'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure with Disk, OS and Storage configuration for Distributed System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          diskConfiguration: {
            diskVolumeConfigurations: {
              backup: {
                count: 2
                sizeGB: 256
                sku: {
                  name: 'StandardSSD_LRS'
                }
              }
              hana/data: {
                count: 4
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
              hana/log: {
                count: 3
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
              hana/shared: {
                count: 1
                sizeGB: 256
                sku: {
                  name: 'StandardSSD_LRS'
                }
              }
              os: {
                count: 1
                sizeGB: 64
                sku: {
                  name: 'StandardSSD_LRS'
                }
              }
              usr/sap: {
                count: 1
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
            }
          }
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        storageConfiguration: {
          transportFileShareConfiguration: {
            configurationType: 'Mount'
            id: 'fileshareID'
            privateEndpointId: 'pe-arm-id'
          }
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure with a new SAP Transport Directory Fileshare
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        storageConfiguration: {
          transportFileShareConfiguration: {
            configurationType: 'CreateAndMount'
            resourceGroup: 'rgName'
            storageAccountName: 'storageName'
          }
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure with an existing SAP Transport Directory Fileshare
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        storageConfiguration: {
          transportFileShareConfiguration: {
            configurationType: 'Mount'
            id: '/subscriptions/49d64d54-e888-4c46-a868-1936802b762c/resourceGroups/testrg/providers/Microsoft.Storage/storageAccounts/storageaccountname/fileServices/default/shares/transfileshare'
            privateEndpointId: '/subscriptions/49d64d54-e888-4c46-a868-1936802b762c/resourceGroups/testrg/providers/Microsoft.Network/privateEndpoints/endpoint'
          }
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure without SAP Trans Fileshare
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        storageConfiguration: {
          transportFileShareConfiguration: {
            configurationType: 'Skip'
          }
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Detect SAP Software Installation on a Distributed System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: '{{resourcegrp}}'
        applicationServer: {
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/app'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: 'azureuser'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: '{{privateKey}}'
                  publicKey: '{{sshkey}}'
                }
              }
            }
            vmSize: 'Standard_E4ds_v4'
          }
        }
        centralServer: {
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/app'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: 'azureuser'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: '{{privateKey}}'
                  publicKey: '{{sshkey}}'
                }
              }
            }
            vmSize: 'Standard_E4ds_v4'
          }
        }
        databaseServer: {
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/app'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: 'azureuser'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: '{{privateKey}}'
                  publicKey: '{{sshkey}}'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        networkConfiguration: {
          isSecondaryIpEnabled: true
        }
      }
      osSapConfiguration: {
        sapFqdn: 'sap.bpaas.com'
      }
      softwareConfiguration: {
        centralServerVmId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Compute/virtualMachines/sapq20scsvm0'
        softwareInstallationType: 'External'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
    created by: 'azureuser'
  }
}
```

Detect SAP Software Installation on a Single Server System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        databaseType: 'HANA'
        deploymentType: 'SingleServer'
        networkConfiguration: {
          isSecondaryIpEnabled: true
        }
        subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
        virtualMachineConfiguration: {
          imageReference: {
            offer: 'RHEL-SAP-HA'
            publisher: 'RedHat'
            sku: '84sapha-gen2'
            version: '8.4.2021091202'
          }
          osProfile: {
            adminUsername: '{your-username}'
            osConfiguration: {
              disablePasswordAuthentication: true
              osType: 'Linux'
              sshKeyPair: {
                privateKey: 'xyz'
                publicKey: 'abc'
              }
            }
          }
          vmSize: 'Standard_E32ds_v4'
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
      softwareConfiguration: {
        centralServerVmId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Compute/virtualMachines/sapq20scsvm0'
        softwareInstallationType: 'External'
      }
    }
    environment: 'NonProd'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Detect SAP Software Installation on an HA System with Availability Set
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        highAvailabilityConfig: {
          highAvailabilityType: 'AvailabilitySet'
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
      softwareConfiguration: {
        centralServerVmId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Compute/virtualMachines/sapq20scsvm0'
        softwareInstallationType: 'External'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Detect SAP Software Installation on an HA System with Availability Zone
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/dindurkhya-e2etesting/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: '8.4.2021091202'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: 'xyz'
                  publicKey: 'abc'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        highAvailabilityConfig: {
          highAvailabilityType: 'AvailabilityZone'
        }
      }
      osSapConfiguration: {
        sapFqdn: 'xyz.test.com'
      }
      softwareConfiguration: {
        centralServerVmId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Compute/virtualMachines/sapq20scsvm0'
        softwareInstallationType: 'External'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Install SAP Software on Distributed System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: '{{resourcegrp}}'
        applicationServer: {
          instanceCount: 2
          subnetId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/app'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '8.2'
              version: '8.2.2021091201'
            }
            osProfile: {
              adminUsername: 'azureuser'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: '{{privateKey}}'
                  publicKey: '{{sshkey}}'
                }
              }
            }
            vmSize: 'Standard_E4ds_v4'
          }
        }
        centralServer: {
          instanceCount: 1
          subnetId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/app'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '8.2'
              version: '8.2.2021091201'
            }
            osProfile: {
              adminUsername: 'azureuser'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: '{{privateKey}}'
                  publicKey: '{{sshkey}}'
                }
              }
            }
            vmSize: 'Standard_E4ds_v4'
          }
        }
        databaseServer: {
          instanceCount: 1
          subnetId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/app'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '8.2'
              version: '8.2.2021091201'
            }
            osProfile: {
              adminUsername: 'azureuser'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: '{{privateKey}}'
                  publicKey: '{{sshkey}}'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        networkConfiguration: {
          isSecondaryIpEnabled: true
        }
      }
      osSapConfiguration: {
        sapFqdn: 'sap.bpaas.com'
      }
      softwareConfiguration: {
        bomUrl: 'https://teststorageaccount.blob.core.windows.net/sapbits/sapfiles/boms/S41909SPS03_v0011ms/S41909SPS03_v0011ms.yaml'
        sapBitsStorageAccountId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Storage/storageAccounts/teststorageaccount'
        softwareInstallationType: 'SAPInstallWithoutOSConfig'
        softwareVersion: 'SAP S/4HANA 1909 SPS 03'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
    created by: 'azureuser'
  }
}
```

Install SAP Software on HA System with Availability Set
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: '{{resourcegrp}}'
        applicationServer: {
          instanceCount: 2
          subnetId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/app'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '8.2'
              version: '8.2.2021091201'
            }
            osProfile: {
              adminUsername: 'azureuser'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: '{{privateKey}}'
                  publicKey: '{{sshkey}}'
                }
              }
            }
            vmSize: 'Standard_E4ds_v4'
          }
        }
        centralServer: {
          instanceCount: 2
          subnetId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/app'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '8.2'
              version: '8.2.2021091201'
            }
            osProfile: {
              adminUsername: 'azureuser'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: '{{privateKey}}'
                  publicKey: '{{sshkey}}'
                }
              }
            }
            vmSize: 'Standard_E4ds_v4'
          }
        }
        databaseServer: {
          instanceCount: 2
          subnetId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/app'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '8.2'
              version: '8.2.2021091201'
            }
            osProfile: {
              adminUsername: 'azureuser'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: '{{privateKey}}'
                  publicKey: '{{sshkey}}'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        highAvailabilityConfig: {
          highAvailabilityType: 'AvailabilitySet'
        }
        networkConfiguration: {
          isSecondaryIpEnabled: true
        }
      }
      osSapConfiguration: {
        sapFqdn: 'sap.bpaas.com'
      }
      softwareConfiguration: {
        bomUrl: 'https://teststorageaccount.blob.core.windows.net/sapbits/sapfiles/boms/S41909SPS03_v0011ms/S41909SPS03_v0011ms.yaml'
        highAvailabilitySoftwareConfiguration: {
          fencingClientId: 'serviceprincipalID'
          fencingClientPassword: 'serviceprincipalPassword'
        }
        sapBitsStorageAccountId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Storage/storageAccounts/teststorageaccount'
        softwareInstallationType: 'SAPInstallWithoutOSConfig'
        softwareVersion: 'SAP S/4HANA 1909 SPS 03'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
    created by: 'azureuser'
  }
}
```

Install SAP Software on HA System with Availability Zone
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: '{{resourcegrp}}'
        applicationServer: {
          instanceCount: 2
          subnetId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/app'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '8.2'
              version: '8.2.2021091201'
            }
            osProfile: {
              adminUsername: 'azureuser'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: '{{privateKey}}'
                  publicKey: '{{sshkey}}'
                }
              }
            }
            vmSize: 'Standard_E4ds_v4'
          }
        }
        centralServer: {
          instanceCount: 2
          subnetId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/app'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '8.2'
              version: '8.2.2021091201'
            }
            osProfile: {
              adminUsername: 'azureuser'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: '{{privateKey}}'
                  publicKey: '{{sshkey}}'
                }
              }
            }
            vmSize: 'Standard_E4ds_v4'
          }
        }
        databaseServer: {
          instanceCount: 2
          subnetId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/app'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '8.2'
              version: '8.2.2021091201'
            }
            osProfile: {
              adminUsername: 'azureuser'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                sshKeyPair: {
                  privateKey: '{{privateKey}}'
                  publicKey: '{{sshkey}}'
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
        highAvailabilityConfig: {
          highAvailabilityType: 'AvailabilityZone'
        }
        networkConfiguration: {
          isSecondaryIpEnabled: true
        }
      }
      osSapConfiguration: {
        sapFqdn: 'sap.bpaas.com'
      }
      softwareConfiguration: {
        bomUrl: 'https://teststorageaccount.blob.core.windows.net/sapbits/sapfiles/boms/S41909SPS03_v0011ms/S41909SPS03_v0011ms.yaml'
        highAvailabilitySoftwareConfiguration: {
          fencingClientId: 'serviceprincipalID'
          fencingClientPassword: 'serviceprincipalPassword'
        }
        sapBitsStorageAccountId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Storage/storageAccounts/teststorageaccount'
        softwareInstallationType: 'SAPInstallWithoutOSConfig'
        softwareVersion: 'SAP S/4HANA 1909 SPS 03'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
    created by: 'azureuser'
  }
}
```

Install SAP Software on Single Server System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'DeploymentWithOSConfig'
      infrastructureConfiguration: {
        appResourceGroup: 'test-rg'
        deploymentType: 'SingleServer'
        subnetId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/testsubnet'
        virtualMachineConfiguration: {
          imageReference: {
            offer: 'SLES-SAP'
            publisher: 'SUSE'
            sku: '12-sp4-gen2'
            version: '2022.02.01'
          }
          osProfile: {
            adminUsername: 'azureappadmin'
            osConfiguration: {
              disablePasswordAuthentication: true
              osType: 'Linux'
              sshKeyPair: {
                privateKey: '{{privateKey}}'
                publicKey: '{{sshkey}}'
              }
            }
          }
          vmSize: 'Standard_E32ds_v4'
        }
      }
      osSapConfiguration: {
        sapFqdn: 'sap.bpaas.com'
      }
      softwareConfiguration: {
        bomUrl: 'https://teststorageaccount.blob.core.windows.net/sapbits/sapfiles/boms/S41909SPS03_v0011ms/S41909SPS03_v0011ms.yaml'
        sapBitsStorageAccountId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Storage/storageAccounts/teststorageaccount'
        softwareInstallationType: 'SAPInstallWithoutOSConfig'
        softwareVersion: 'SAP S/4HANA 1909 SPS 03'
      }
    }
    environment: 'NonProd'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Register existing SAP system as Virtual Instance for SAP solutions.
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2021-12-01-preview' = {
  name: 'example'
  location: 'northeurope'
  properties: {
    configuration: {
      centralServerVmId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Compute/virtualMachines/sapq20scsvm0'
      configurationType: 'Discovery'
    }
    environment: 'NonProd'
    sapProduct: 'S4HANA'
  }
  tags: {
    createdby: 'abc@microsoft.com'
    test: 'abc'
  }
}
```

## microsoft.workloads/sapvirtualinstances/centralinstances

Create SAP Central Instances for HA System with Availability Set
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances/centralInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
  }
  tags: {
  }
}
```

SAPCentralInstances_Create
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances/centralInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
  }
  tags: {
  }
}
```

## microsoft.workloads/sapvirtualinstances/databaseinstances

Create SAP Database Instances for HA System with Availability Set
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances/databaseInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
  }
  tags: {
  }
}
```

SAPDatabaseInstances_Create
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances/databaseInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
  }
  tags: {
  }
}
```

## microsoft.workloads/sapvirtualinstances/applicationinstances

Create SAP Application Server Instances for HA System with Availability Set
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances/applicationInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
  }
  tags: {
  }
}
```

SAPApplicationServerInstances_Create
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances/applicationInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
  }
  tags: {
  }
}
```

## microsoft.workloads/monitors/providerinstances

Create a Db2 provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbName: 'dbName'
      dbPassword: 'password'
      dbPasswordUri: ''
      dbPort: 'dbPort'
      dbUsername: 'username'
      hostname: 'hostname'
      providerType: 'Db2'
      sapSid: 'SID'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a Db2 provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbName: 'dbName'
      dbPassword: 'password'
      dbPasswordUri: ''
      dbPort: 'dbPort'
      dbUsername: 'username'
      hostname: 'hostname'
      providerType: 'Db2'
      sapSid: 'SID'
      sslPreference: 'RootCertificate'
    }
  }
}
```

Create a MsSqlServer provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbPassword: '****'
      dbPasswordUri: ''
      dbPort: '5912'
      dbUsername: 'user'
      hostname: 'hostname'
      providerType: 'MsSqlServer'
      sapSid: 'sid'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a MsSqlServer provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbPassword: '****'
      dbPasswordUri: ''
      dbPort: '5912'
      dbUsername: 'user'
      hostname: 'hostname'
      providerType: 'MsSqlServer'
      sapSid: 'sid'
      sslPreference: 'RootCertificate'
    }
  }
}
```

Create a OS provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      prometheusUrl: 'http://192.168.0.0:9090/metrics'
      providerType: 'PrometheusOS'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a OS provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      prometheusUrl: 'http://192.168.0.0:9090/metrics'
      providerType: 'PrometheusOS'
      sslPreference: 'RootCertificate'
    }
  }
}
```

Create a PrometheusHaCluster provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      clusterName: 'clusterName'
      hostname: 'hostname'
      prometheusUrl: 'http://192.168.0.0:9090/metrics'
      providerType: 'PrometheusHaCluster'
      sid: 'sid'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a PrometheusHaCluster provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      clusterName: 'clusterName'
      hostname: 'hostname'
      prometheusUrl: 'http://192.168.0.0:9090/metrics'
      providerType: 'PrometheusHaCluster'
      sid: 'sid'
      sslPreference: 'RootCertificate'
    }
  }
}
```

Create a SAP monitor Hana provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbName: 'db'
      dbPassword: '****'
      dbPasswordUri: ''
      dbUsername: 'user'
      hostname: 'name'
      instanceNumber: '00'
      providerType: 'SapHana'
      sqlPort: '0000'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslHostNameInCertificate: 'xyz.domain.com'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a SAP monitor Hana provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbName: 'db'
      dbPassword: '****'
      dbPasswordUri: ''
      dbUsername: 'user'
      hostname: 'name'
      instanceNumber: '00'
      providerType: 'SapHana'
      sqlPort: '0000'
      sslHostNameInCertificate: 'xyz.domain.com'
      sslPreference: 'RootCertificate'
    }
  }
}
```

Create a SAP monitor NetWeaver provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      providerType: 'SapNetWeaver'
      sapClientId: '111'
      sapHostFileEntries: [
        '127.0.0.1 name fqdn'
      ]
      sapHostname: 'name'
      sapInstanceNr: '00'
      sapPassword: '****'
      sapPasswordUri: ''
      sapPortNumber: '1234'
      sapSid: 'SID'
      sapUsername: 'username'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a SAP monitor NetWeaver provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      providerType: 'SapNetWeaver'
      sapClientId: '111'
      sapHostFileEntries: [
        '127.0.0.1 name fqdn'
      ]
      sapHostname: 'name'
      sapInstanceNr: '00'
      sapPassword: '****'
      sapPasswordUri: ''
      sapPortNumber: '1234'
      sapSid: 'SID'
      sapUsername: 'username'
      sslPreference: 'RootCertificate'
    }
  }
}
```
