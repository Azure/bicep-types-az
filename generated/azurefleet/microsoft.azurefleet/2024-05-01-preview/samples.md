# Microsoft.AzureFleet

## microsoft.azurefleet/fleets

Fleets_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AzureFleet/fleets@2024-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      key9851: {
      }
    }
  }
  location: 'westus'
  plan: {
    name: 'jwgrcrnrtfoxn'
    product: 'cgopbyvdyqikahwyxfpzwaqk'
    promotionCode: 'naglezezplcaruqogtxnuizslqnnbr'
    publisher: 'iozjbiqqckqm'
    version: 'wa'
  }
  properties: {
    computeProfile: {
      baseVirtualMachineProfile: {
        applicationProfile: {
          galleryApplications: [
            {
              configurationReference: 'ulztmiavpojpbpbddgnuuiimxcpau'
              enableAutomaticUpgrade: true
              order: 5
              packageReferenceId: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{applicationName}/versions/{versionName}'
              tags: 'eyrqjbib'
              treatFailureAsDeploymentFailure: true
            }
          ]
        }
        capacityReservation: {
          capacityReservationGroup: {
            id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}'
          }
        }
        diagnosticsProfile: {
          bootDiagnostics: {
            enabled: true
            storageUri: 'http://myStorageAccountName.blob.core.windows.net'
          }
        }
        extensionProfile: {
          extensionsTimeBudget: 'mbhjahtdygwgyszdwjtvlvtgchdwil'
          extensions: [
            {
              name: 'bndxuxx'
              properties: {
                type: 'pgjilctjjwaa'
                autoUpgradeMinorVersion: true
                enableAutomaticUpgrade: true
                forceUpdateTag: 'yhgxw'
                protectedSettings: {
                }
                protectedSettingsFromKeyVault: {
                  secretUrl: 'https://myvaultName.vault.azure.net/secrets/secret/mySecretName'
                  sourceVault: {
                    id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}'
                  }
                }
                provisionAfterExtensions: [
                  'nftzosroolbcwmpupujzqwqe'
                ]
                publisher: 'kpxtirxjfprhs'
                settings: {
                }
                suppressFailures: true
                typeHandlerVersion: 'zevivcoilxmbwlrihhhibq'
              }
            }
          ]
        }
        hardwareProfile: {
          vmSizeProperties: {
            vCPUsAvailable: 16
            vCPUsPerCore: 23
          }
        }
        licenseType: 'v'
        networkProfile: {
          healthProbe: {
            id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'
          }
          networkApiVersion: '2020-11-01'
          networkInterfaceConfigurations: [
            {
              name: 'i'
              properties: {
                auxiliaryMode: 'None'
                auxiliarySku: 'None'
                deleteOption: 'Delete'
                disableTcpStateTracking: true
                dnsSettings: {
                  dnsServers: [
                    'nxmmfolhclsesu'
                  ]
                }
                enableAcceleratedNetworking: true
                enableFpga: true
                enableIPForwarding: true
                ipConfigurations: [
                  {
                    name: 'oezqhkidfhyywlfzwuotilrpbqnjg'
                    properties: {
                      applicationGatewayBackendAddressPools: [
                        {
                          id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/backendAddressPools/{backendAddressPoolName}'
                        }
                      ]
                      applicationSecurityGroups: [
                        {
                          id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups/{applicationSecurityGroupName}'
                        }
                      ]
                      loadBalancerBackendAddressPools: [
                        {
                          id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}'
                        }
                      ]
                      loadBalancerInboundNatPools: [
                        {
                          id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/inboundNatPools/{inboundNatPoolName}'
                        }
                      ]
                      primary: true
                      privateIPAddressVersion: 'IPv4'
                      publicIPAddressConfiguration: {
                        name: 'fvpqf'
                        properties: {
                          deleteOption: 'Delete'
                          dnsSettings: {
                            domainNameLabel: 'ukrddzvmorpmfsczjwtbvp'
                            domainNameLabelScope: 'TenantReuse'
                          }
                          idleTimeoutInMinutes: 9
                          ipTags: [
                            {
                              ipTagType: 'sddgsoemnzgqizale'
                              tag: 'wufmhrjsakbiaetyara'
                            }
                          ]
                          publicIPAddressVersion: 'IPv4'
                          publicIPPrefix: {
                            id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}'
                          }
                        }
                        sku: {
                          name: 'Basic'
                          tier: 'Regional'
                        }
                      }
                      subnet: {
                        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}'
                      }
                    }
                  }
                ]
                networkSecurityGroup: {
                  id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}'
                }
                primary: true
              }
            }
          ]
        }
        osProfile: {
          adminPassword: 'adfbrdxpv'
          adminUsername: 'nrgzqciiaaxjrqldbmjbqkyhntp'
          allowExtensionOperations: true
          computerNamePrefix: 'o'
          customData: 'xjjib'
          linuxConfiguration: {
            disablePasswordAuthentication: true
            enableVMAgentPlatformUpdates: true
            patchSettings: {
              assessmentMode: 'ImageDefault'
              automaticByPlatformSettings: {
                bypassPlatformSafetyChecksOnUserSchedule: true
                rebootSetting: 'Unknown'
              }
              patchMode: 'ImageDefault'
            }
            provisionVMAgent: true
            ssh: {
              publicKeys: [
                {
                  path: 'kmqz'
                  keyData: 'kivgsubusvpprwqaqpjcmhsv'
                }
              ]
            }
          }
          requireGuestProvisionSignal: true
          secrets: [
            {
              sourceVault: {
                id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}'
              }
              vaultCertificates: [
                {
                  certificateStore: 'nlxrwavpzhueffxsshlun'
                  certificateUrl: 'https://myVaultName.vault.azure.net/secrets/myCertName'
                }
              ]
            }
          ]
          windowsConfiguration: {
            additionalUnattendContent: [
              {
                componentName: 'Microsoft-Windows-Shell-Setup'
                content: 'bubmqbxjkj'
                passName: 'OobeSystem'
                settingName: 'AutoLogon'
              }
            ]
            enableAutomaticUpdates: true
            enableVMAgentPlatformUpdates: true
            patchSettings: {
              assessmentMode: 'ImageDefault'
              automaticByPlatformSettings: {
                bypassPlatformSafetyChecksOnUserSchedule: true
                rebootSetting: 'Unknown'
              }
              enableHotpatching: true
              patchMode: 'Manual'
            }
            provisionVMAgent: true
            timeZone: 'hlyjiqcfksgrpjrct'
            winRM: {
              listeners: [
                {
                  certificateUrl: 'https://myVaultName.vault.azure.net/secrets/myCertName'
                  protocol: 'Https'
                }
              ]
            }
          }
        }
        scheduledEventsProfile: {
          osImageNotificationProfile: {
            enable: true
            notBeforeTimeout: 'olbpadmevekyczfokodtfprxti'
          }
          terminateNotificationProfile: {
            enable: true
            notBeforeTimeout: 'iljppmmw'
          }
        }
        securityPostureReference: {
          excludeExtensions: [
            '{securityPostureVMExtensionName}'
          ]
          id: '/CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch}|{major.*}|latest'
          isOverridable: true
        }
        securityProfile: {
          encryptionAtHost: true
          encryptionIdentity: {
            userAssignedIdentityResourceId: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{userAssignedIdentityName}'
          }
          proxyAgentSettings: {
            enabled: true
            keyIncarnationId: 20
            mode: 'Audit'
          }
          securityType: 'TrustedLaunch'
          uefiSettings: {
            secureBootEnabled: true
            vTpmEnabled: true
          }
        }
        serviceArtifactReference: {
          id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactsName}/vmArtifactsProfiles/{vmArtifactsProfileName}'
        }
        storageProfile: {
          dataDisks: [
            {
              name: 'eogiykmdmeikswxmigjws'
              caching: 'None'
              createOption: 'FromImage'
              deleteOption: 'Delete'
              diskIOPSReadWrite: 27
              diskMBpsReadWrite: 2
              diskSizeGB: 6
              lun: 14
              managedDisk: {
                diskEncryptionSet: {
                  id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}'
                }
                securityProfile: {
                  diskEncryptionSet: {
                    id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}'
                  }
                  securityEncryptionType: 'VMGuestStateOnly'
                }
                storageAccountType: 'Standard_LRS'
              }
              writeAcceleratorEnabled: true
            }
          ]
          diskControllerType: 'uzb'
          imageReference: {
            communityGalleryImageId: 'vlqe'
            id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageName}/versions/{versionName}'
            offer: 'isxgumkarlkomp'
            publisher: 'mqxgwbiyjzmxavhbkd'
            sharedGalleryImageId: 'kmkgihoxwlawuuhcinfirktdwkmx'
            sku: 'eojmppqcrnpmxirtp'
            version: 'wvpcqefgtmqdgltiuz'
          }
          osDisk: {
            name: 'wfttw'
            caching: 'None'
            createOption: 'FromImage'
            deleteOption: 'Delete'
            diffDiskSettings: {
              option: 'Local'
              placement: 'CacheDisk'
            }
            diskSizeGB: 14
            image: {
              uri: 'https://myStorageAccountName.blob.core.windows.net/myContainerName/myVhdName.vhd'
            }
            managedDisk: {
              diskEncryptionSet: {
                id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}'
              }
              securityProfile: {
                diskEncryptionSet: {
                  id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}'
                }
                securityEncryptionType: 'VMGuestStateOnly'
              }
              storageAccountType: 'Standard_LRS'
            }
            osType: 'Windows'
            vhdContainers: [
              'tkzcwddtinkfpnfklatw'
            ]
            writeAcceleratorEnabled: true
          }
        }
        userData: 's'
      }
      computeApiVersion: '2023-07-01'
      platformFaultDomainCount: 1
    }
    regularPriorityProfile: {
      allocationStrategy: 'LowestPrice'
      capacity: 20
      minCapacity: 10
    }
    spotPriorityProfile: {
      allocationStrategy: 'PriceCapacityOptimized'
      capacity: 20
      evictionPolicy: 'Delete'
      maintain: true
      maxPricePerVM: 0.00865
      minCapacity: 10
    }
    vmSizesProfile: [
      {
        name: 'Standard_d1_v2'
        rank: 19225
      }
    ]
  }
  tags: {
    key3518: 'luvrnuvsgdpbuofdskkcoqhfh'
  }
  zones: [
    'zone1'
    'zone2'
  ]
}
```

Fleets_CreateOrUpdate_MinimumSet
```bicep
resource exampleResource 'Microsoft.AzureFleet/fleets@2024-05-01-preview' = {
  name: 'example'
  location: 'eastus2euap'
  properties: {
    computeProfile: {
      baseVirtualMachineProfile: {
        networkProfile: {
          networkApiVersion: '2022-07-01'
          networkInterfaceConfigurations: [
            {
              name: 'vmNameTest'
              properties: {
                enableAcceleratedNetworking: false
                enableIPForwarding: true
                ipConfigurations: [
                  {
                    name: 'vmNameTest'
                    properties: {
                      loadBalancerBackendAddressPools: [
                        {
                          id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}'
                        }
                      ]
                      primary: true
                      subnet: {
                        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}'
                      }
                    }
                  }
                ]
                primary: true
              }
            }
          ]
        }
        osProfile: {
          adminPassword: 'TestPassword$0'
          adminUsername: 'azureuser'
          computerNamePrefix: 'prefix'
          linuxConfiguration: {
            disablePasswordAuthentication: false
          }
        }
        storageProfile: {
          imageReference: {
            offer: '0001-com-ubuntu-server-focal'
            publisher: 'canonical'
            sku: '20_04-lts-gen2'
            version: 'latest'
          }
          osDisk: {
            caching: 'ReadWrite'
            createOption: 'FromImage'
            managedDisk: {
              storageAccountType: 'Standard_LRS'
            }
            osType: 'Linux'
          }
        }
      }
      computeApiVersion: '2023-09-01'
      platformFaultDomainCount: 1
    }
    regularPriorityProfile: {
      allocationStrategy: 'LowestPrice'
      capacity: 2
      minCapacity: 1
    }
    spotPriorityProfile: {
      allocationStrategy: 'PriceCapacityOptimized'
      capacity: 2
      evictionPolicy: 'Delete'
      maintain: true
      minCapacity: 1
    }
    vmSizesProfile: [
      {
        name: 'Standard_D2s_v3'
      }
      {
        name: 'Standard_D4s_v3'
      }
      {
        name: 'Standard_E2s_v3'
      }
    ]
  }
  tags: {
    key: 'fleets-test'
  }
}
```
