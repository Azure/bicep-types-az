# Microsoft.Workloads
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.workloads/sapvirtualinstances

Create Infrastructure (with OS configuration) with Azure Compute Gallery Image
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'Deployment'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              id: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Compute/galleries/testgallery/images/rhelimagetest/versions/0.0.1'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                ssh: {
                  publicKeys: [
                    {
                      keyData: 'ssh-rsa public key'
                    }
                  ]
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              id: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Compute/galleries/testgallery/images/rhelimagetest/versions/0.0.1'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                ssh: {
                  publicKeys: [
                    {
                      keyData: 'ssh-rsa public key'
                    }
                  ]
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              id: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Compute/galleries/testgallery/images/rhelimagetest/versions/0.0.1'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                ssh: {
                  publicKeys: [
                    {
                      keyData: 'ssh-rsa public key'
                    }
                  ]
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
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure (with OS configuration) with custom resource names for Distributed System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
        customResourceNames: {
          applicationServer: {
            availabilitySetName: 'appAvSet'
            virtualMachines: [
              {
                dataDiskNames: {
                  default: [
                    'app0disk0'
                  ]
                }
                hostName: 'apphostName0'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'appnic0'
                  }
                ]
                osDiskName: 'app0osdisk'
                vmName: 'appvm0'
              }
              {
                dataDiskNames: {
                  default: [
                    'app1disk0'
                  ]
                }
                hostName: 'apphostName1'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'appnic1'
                  }
                ]
                osDiskName: 'app1osdisk'
                vmName: 'appvm1'
              }
            ]
          }
          centralServer: {
            virtualMachines: [
              {
                dataDiskNames: {
                  default: [
                    'ascsdisk0'
                  ]
                }
                hostName: 'ascshostName'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'ascsnic'
                  }
                ]
                osDiskName: 'ascsosdisk'
                vmName: 'ascsvm'
              }
            ]
          }
          databaseServer: {
            virtualMachines: [
              {
                dataDiskNames: {
                  hanaData: [
                    'hanadata0'
                    'hanadata1'
                  ]
                  hanaLog: [
                    'hanalog0'
                    'hanalog1'
                    'hanalog2'
                  ]
                  hanaShared: [
                    'hanashared0'
                    'hanashared1'
                  ]
                  usrSap: [
                    'usrsap0'
                  ]
                }
                hostName: 'dbhostName'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'dbnic'
                  }
                ]
                osDiskName: 'dbosdisk'
                vmName: 'dbvm'
              }
            ]
          }
          namingPatternType: 'FullResourceName'
          sharedStorage: {
            sharedStorageAccountName: 'storageacc'
            sharedStorageAccountPrivateEndPointName: 'peForxNFS'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 1
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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

Create Infrastructure (with OS configuration) with custom resource names for HA System with Availability Set
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
        customResourceNames: {
          applicationServer: {
            availabilitySetName: 'appAvSet'
            virtualMachines: [
              {
                dataDiskNames: {
                  default: [
                    'app0disk0'
                  ]
                }
                hostName: 'apphostName0'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'appnic0'
                  }
                ]
                osDiskName: 'app0osdisk'
                vmName: 'appvm0'
              }
              {
                dataDiskNames: {
                  default: [
                    'app1disk0'
                  ]
                }
                hostName: 'apphostName1'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'appnic1'
                  }
                ]
                osDiskName: 'app1osdisk'
                vmName: 'appvm1'
              }
            ]
          }
          centralServer: {
            availabilitySetName: 'csAvSet'
            loadBalancer: {
              backendPoolNames: [
                'ascsBackendPool'
              ]
              frontendIpConfigurationNames: [
                'ascsip0'
                'ersip0'
              ]
              healthProbeNames: [
                'ascsHealthProbe'
                'ersHealthProbe'
              ]
              loadBalancerName: 'ascslb'
            }
            virtualMachines: [
              {
                hostName: 'ascshostName'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'ascsnic'
                  }
                ]
                osDiskName: 'ascsosdisk'
                vmName: 'ascsvm'
              }
              {
                hostName: 'ershostName'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'ersnic'
                  }
                ]
                osDiskName: 'ersosdisk'
                vmName: 'ersvm'
              }
            ]
          }
          databaseServer: {
            availabilitySetName: 'dbAvSet'
            loadBalancer: {
              backendPoolNames: [
                'dbBackendPool'
              ]
              frontendIpConfigurationNames: [
                'dbip'
              ]
              healthProbeNames: [
                'dbHealthProbe'
              ]
              loadBalancerName: 'dblb'
            }
            virtualMachines: [
              {
                dataDiskNames: {
                  hanaData: [
                    'hanadatapr0'
                    'hanadatapr1'
                  ]
                  hanaLog: [
                    'hanalogpr0'
                    'hanalogpr1'
                    'hanalogpr2'
                  ]
                  hanaShared: [
                    'hanasharedpr0'
                    'hanasharedpr1'
                  ]
                  usrSap: [
                    'usrsappr0'
                  ]
                }
                hostName: 'dbprhostName'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'dbprnic'
                  }
                ]
                osDiskName: 'dbprosdisk'
                vmName: 'dbvmpr'
              }
              {
                dataDiskNames: {
                  hanaData: [
                    'hanadatasr0'
                    'hanadatasr1'
                  ]
                  hanaLog: [
                    'hanalogsr0'
                    'hanalogsr1'
                    'hanalogsr2'
                  ]
                  hanaShared: [
                    'hanasharedsr0'
                    'hanasharedsr1'
                  ]
                  usrSap: [
                    'usrsapsr0'
                  ]
                }
                hostName: 'dbsrhostName'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'dbsrnic'
                  }
                ]
                osDiskName: 'dbsrosdisk'
                vmName: 'dbvmsr'
              }
            ]
          }
          namingPatternType: 'FullResourceName'
          sharedStorage: {
            sharedStorageAccountName: 'storageacc'
            sharedStorageAccountPrivateEndPointName: 'peForxNFS'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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

Create Infrastructure (with OS configuration) with custom resource names for HA system with Availability Zone
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
        customResourceNames: {
          applicationServer: {
            virtualMachines: [
              {
                dataDiskNames: {
                  default: [
                    'app0disk0'
                  ]
                }
                hostName: 'apphostName0'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'appnic0'
                  }
                ]
                osDiskName: 'app0osdisk'
                vmName: 'appvm0'
              }
              {
                dataDiskNames: {
                  default: [
                    'app1disk0'
                  ]
                }
                hostName: 'apphostName1'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'appnic1'
                  }
                ]
                osDiskName: 'app1osdisk'
                vmName: 'appvm1'
              }
            ]
          }
          centralServer: {
            loadBalancer: {
              backendPoolNames: [
                'ascsBackendPool'
              ]
              frontendIpConfigurationNames: [
                'ascsip0'
                'ersip0'
              ]
              healthProbeNames: [
                'ascsHealthProbe'
                'ersHealthProbe'
              ]
              loadBalancerName: 'ascslb'
            }
            virtualMachines: [
              {
                hostName: 'ascshostName'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'ascsnic'
                  }
                ]
                osDiskName: 'ascsosdisk'
                vmName: 'ascsvm'
              }
              {
                hostName: 'ershostName'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'ersnic'
                  }
                ]
                osDiskName: 'ersosdisk'
                vmName: 'ersvm'
              }
            ]
          }
          databaseServer: {
            loadBalancer: {
              backendPoolNames: [
                'dbBackendPool'
              ]
              frontendIpConfigurationNames: [
                'dbip'
              ]
              healthProbeNames: [
                'dbHealthProbe'
              ]
              loadBalancerName: 'dblb'
            }
            virtualMachines: [
              {
                dataDiskNames: {
                  hanaData: [
                    'hanadatapr0'
                    'hanadatapr1'
                  ]
                  hanaLog: [
                    'hanalogpr0'
                    'hanalogpr1'
                    'hanalogpr2'
                  ]
                  hanaShared: [
                    'hanasharedpr0'
                    'hanasharedpr1'
                  ]
                  usrSap: [
                    'usrsappr0'
                  ]
                }
                hostName: 'dbprhostName'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'dbprnic'
                  }
                ]
                osDiskName: 'dbprosdisk'
                vmName: 'dbvmpr'
              }
              {
                dataDiskNames: {
                  hanaData: [
                    'hanadatasr0'
                    'hanadatasr1'
                  ]
                  hanaLog: [
                    'hanalogsr0'
                    'hanalogsr1'
                    'hanalogsr2'
                  ]
                  hanaShared: [
                    'hanasharedsr0'
                    'hanasharedsr1'
                  ]
                  usrSap: [
                    'usrsapsr0'
                  ]
                }
                hostName: 'dbsrhostName'
                networkInterfaces: [
                  {
                    networkInterfaceName: 'dbsrnic'
                  }
                ]
                osDiskName: 'dbsrosdisk'
                vmName: 'dbvmsr'
              }
            ]
          }
          namingPatternType: 'FullResourceName'
          sharedStorage: {
            sharedStorageAccountName: 'storageacc'
            sharedStorageAccountPrivateEndPointName: 'peForxNFS'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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

Create Infrastructure (with OS configuration) with custom resource names for Single Server System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
        subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
        virtualMachineConfiguration: {
          imageReference: {
            offer: 'RHEL-SAP'
            publisher: 'RedHat'
            sku: '84sapha-gen2'
            version: 'latest'
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

Create Infrastructure (with OS configuration) with trusted access enabled
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
    managedResourcesNetworkAccessType: 'Private'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure only for Distributed System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'Deployment'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                ssh: {
                  publicKeys: [
                    {
                      keyData: 'ssh-rsa public key'
                    }
                  ]
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                ssh: {
                  publicKeys: [
                    {
                      keyData: 'ssh-rsa public key'
                    }
                  ]
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                ssh: {
                  publicKeys: [
                    {
                      keyData: 'ssh-rsa public key'
                    }
                  ]
                }
              }
            }
            vmSize: 'Standard_M32ts'
          }
        }
        deploymentType: 'ThreeTier'
      }
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure only for HA System with Availability Set
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'Deployment'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 5
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                ssh: {
                  publicKeys: [
                    {
                      keyData: 'ssh-rsa public key'
                    }
                  ]
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                ssh: {
                  publicKeys: [
                    {
                      keyData: 'ssh-rsa public key'
                    }
                  ]
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                ssh: {
                  publicKeys: [
                    {
                      keyData: 'ssh-rsa public key'
                    }
                  ]
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
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure only for HA System with Availability Zone
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'Deployment'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        applicationServer: {
          instanceCount: 6
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                ssh: {
                  publicKeys: [
                    {
                      keyData: 'ssh-rsa public key'
                    }
                  ]
                }
              }
            }
            vmSize: 'Standard_E32ds_v4'
          }
        }
        centralServer: {
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                ssh: {
                  publicKeys: [
                    {
                      keyData: 'ssh-rsa public key'
                    }
                  ]
                }
              }
            }
            vmSize: 'Standard_E16ds_v4'
          }
        }
        databaseServer: {
          databaseType: 'HANA'
          instanceCount: 2
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
            }
            osProfile: {
              adminUsername: '{your-username}'
              osConfiguration: {
                disablePasswordAuthentication: true
                osType: 'Linux'
                ssh: {
                  publicKeys: [
                    {
                      keyData: 'ssh-rsa public key'
                    }
                  ]
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
    }
    environment: 'Prod'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure only for Single Server System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    configuration: {
      appLocation: 'eastus'
      configurationType: 'Deployment'
      infrastructureConfiguration: {
        appResourceGroup: 'X00-RG'
        databaseType: 'HANA'
        deploymentType: 'SingleServer'
        networkConfiguration: {
          isSecondaryIpEnabled: true
        }
        subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
        virtualMachineConfiguration: {
          imageReference: {
            offer: 'RHEL-SAP'
            publisher: 'RedHat'
            sku: '84sapha-gen2'
            version: 'latest'
          }
          osProfile: {
            adminUsername: '{your-username}'
            osConfiguration: {
              disablePasswordAuthentication: true
              osType: 'Linux'
              ssh: {
                publicKeys: [
                  {
                    keyData: 'ssh-rsa public key'
                  }
                ]
              }
            }
          }
          vmSize: 'Standard_E32ds_v4'
        }
      }
    }
    environment: 'NonProd'
    sapProduct: 'S4HANA'
  }
  tags: {
  }
}
```

Create Infrastructure with a new SAP Transport Directory Fileshare
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
            id: '/subscriptions/49d64d54-e888-4c46-a868-1936802b762c/resourceGroups/testrg/providers/Microsoft.Network/privateEndpoints/endpoint'
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

Create Infrastructure with Disk and OS configuration for Distributed System (Recommended)
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              'hana/data': {
                count: 4
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
              'hana/log': {
                count: 3
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
              'hana/shared': {
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
              'usr/sap': {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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

Create Infrastructure with Disk and OS configuration for HA System with Availability Set (Recommended)
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              'hana/data': {
                count: 4
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
              'hana/log': {
                count: 3
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
              'hana/shared': {
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
              'usr/sap': {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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

Create Infrastructure with Disk and OS configuration for HA System with Availability Zone (Recommended)
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              'hana/data': {
                count: 4
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
              'hana/log': {
                count: 3
                sizeGB: 128
                sku: {
                  name: 'Premium_LRS'
                }
              }
              'hana/shared': {
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
              'usr/sap': {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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

Create Infrastructure with Disk and OS configurations for Single Server System (Recommended)
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
            'hana/data': {
              count: 4
              sizeGB: 128
              sku: {
                name: 'Premium_LRS'
              }
            }
            'hana/log': {
              count: 3
              sizeGB: 128
              sku: {
                name: 'Premium_LRS'
              }
            }
            'hana/shared': {
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
            'usr/sap': {
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
            offer: 'RHEL-SAP'
            publisher: 'RedHat'
            sku: '84sapha-gen2'
            version: 'latest'
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

Create Infrastructure with OS configuration for Distributed System (Recommended)
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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

Create Infrastructure with OS configuration for HA System with Availability Set (Recommended)
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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

Create Infrastructure with OS configuration for HA System with Availability Zone (Recommended)
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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

Create Infrastructure with OS configuration for Single Server System (Recommended)
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
        subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
        virtualMachineConfiguration: {
          imageReference: {
            offer: 'RHEL-SAP'
            publisher: 'RedHat'
            sku: '84sapha-gen2'
            version: 'latest'
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

Create Infrastructure without a SAP Transport Directory Fileshare
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
              offer: 'RHEL-SAP'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              version: 'latest'
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
              version: 'latest'
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
              version: 'latest'
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
    'created by': 'azureuser'
  }
}
```

Detect SAP Software Installation on a Single Server System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
        subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
        virtualMachineConfiguration: {
          imageReference: {
            offer: 'RHEL-SAP-HA'
            publisher: 'RedHat'
            sku: '84sapha-gen2'
            version: 'latest'
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
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              version: 'latest'
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
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
              version: 'latest'
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
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/appsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
          subnetId: '/subscriptions/49d64d54-e966-4c46-a868-1999802b762c/resourceGroups/test-rg/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/dbsubnet'
          virtualMachineConfiguration: {
            imageReference: {
              offer: 'RHEL-SAP-HA'
              publisher: 'RedHat'
              sku: '84sapha-gen2'
              version: 'latest'
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
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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
    'created by': 'azureuser'
  }
}
```

Install SAP Software on Single Server System
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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

Register existing SAP system as Virtual Instance for SAP solutions with optional customizations.
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
  name: 'example'
  location: 'northeurope'
  properties: {
    configuration: {
      centralServerVmId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Compute/virtualMachines/sapq20scsvm0'
      configurationType: 'Discovery'
      managedRgStorageAccountName: 'q20saacssgrs'
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

Register existing SAP system as Virtual Instance for SAP solutions.
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
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

Register with trusted access enabled
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances@2024-09-01' = {
  name: 'example'
  location: 'northeurope'
  properties: {
    configuration: {
      centralServerVmId: '/subscriptions/8e17e36c-42e9-4cd5-a078-7b44883414e0/resourceGroups/test-rg/providers/Microsoft.Compute/virtualMachines/sapq20scsvm0'
      configurationType: 'Discovery'
    }
    environment: 'NonProd'
    managedResourcesNetworkAccessType: 'Private'
    sapProduct: 'S4HANA'
  }
  tags: {
    createdby: 'abc@microsoft.com'
    test: 'abc'
  }
}
```

## microsoft.workloads/sapvirtualinstances/applicationinstances

Create SAP Application Server Instances for HA System with Availability Set
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances/applicationInstances@2024-09-01' = {
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
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances/applicationInstances@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
  }
  tags: {
  }
}
```

## microsoft.workloads/sapvirtualinstances/centralinstances

Create SAP Central Instances for HA System with Availability Set
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances/centralInstances@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
  }
  tags: {
  }
}
```

SapCentralServerInstances_Create
```bicep
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances/centralInstances@2024-09-01' = {
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
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances/databaseInstances@2024-09-01' = {
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
resource exampleResource 'Microsoft.Workloads/sapVirtualInstances/databaseInstances@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
  }
  tags: {
  }
}
```
