# Microsoft.AzureFleet
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azurefleet/fleets

Fleets_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AzureFleet/fleets@2025-07-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
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
    additionalLocationsProfile: {
      locationProfiles: [
        {
          location: 'ekbzgzhs'
          virtualMachineProfileOverride: {
            applicationProfile: {
              galleryApplications: [
                {
                  configurationReference: 'gqxsvizquzglpsgqaundtyh'
                  enableAutomaticUpgrade: true
                  order: 19
                  packageReferenceId: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{applicationName}/versions/{versionName}'
                  tags: 'fronuehbtzhxaoijmdmjzwaswgevh'
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
                storageUri: 'https://microsoft.com/a'
              }
            }
            extensionProfile: {
              extensionsTimeBudget: 'srxtwxrc'
              extensions: [
                {
                  name: 'dockglmmvl'
                  properties: {
                    type: 'xzhgosms'
                    autoUpgradeMinorVersion: true
                    enableAutomaticUpgrade: true
                    forceUpdateTag: 'wzyqlpszoiewqbhlnzckfshdtpwkbd'
                    protectedSettings: {
                    }
                    protectedSettingsFromKeyVault: {
                      secretUrl: 'https://microsoft.com/ahygahgb'
                      sourceVault: {
                        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}'
                      }
                    }
                    provisionAfterExtensions: [
                      'rqrycujrpdodllirebkfg'
                    ]
                    publisher: 'iikgjziralgrfsrxrlrdigqyfhuqg'
                    settings: {
                    }
                    suppressFailures: true
                    typeHandlerVersion: 'mfzdzdwucagkogmxoosyjpej'
                  }
                }
              ]
            }
            hardwareProfile: {
              vmSizeProperties: {
                vCPUsAvailable: 1
                vCPUsPerCore: 4
              }
            }
            licenseType: 'hilutelnuqxtpdznq'
            networkProfile: {
              healthProbe: {
                id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'
              }
              networkApiVersion: '2020-11-01'
              networkInterfaceConfigurations: [
                {
                  name: 'uyemquurltujhbjkhm'
                  properties: {
                    auxiliaryMode: 'None'
                    auxiliarySku: 'None'
                    deleteOption: 'Delete'
                    disableTcpStateTracking: true
                    dnsSettings: {
                      dnsServers: [
                        'ajcsckebabrus'
                      ]
                    }
                    enableAcceleratedNetworking: true
                    enableFpga: true
                    enableIPForwarding: true
                    ipConfigurations: [
                      {
                        name: 'xpwuwsvkuml'
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
                            name: 'wbpdlbxflssopphq'
                            properties: {
                              deleteOption: 'Delete'
                              dnsSettings: {
                                domainNameLabel: 'uwjtwqgwalsctypszcbnxo'
                                domainNameLabelScope: 'TenantReuse'
                              }
                              idleTimeoutInMinutes: 9
                              ipTags: [
                                {
                                  ipTagType: 'hxkbmbisknggtfdqoaqagjhipdkd'
                                  tag: 'vzxhyyrzieaocbxyxieivj'
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
              adminPassword: '<a-password-goes-here>'
              adminUsername: 'wwjyuhblwecni'
              allowExtensionOperations: true
              computerNamePrefix: 'xoxwfnjjuqibzxldgxu'
              customData: 'gvyvbgcgutteiivwjn'
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
                      path: 'bci'
                      keyData: 'meokrrrddgnyxyhg'
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
                      certificateStore: 'hdts'
                      certificateUrl: 'https://microsoft.com/a'
                    }
                  ]
                }
              ]
              windowsConfiguration: {
                additionalUnattendContent: [
                  {
                    componentName: 'Microsoft-Windows-Shell-Setup'
                    content: 'ynkrgbreqtuxgftjgeuvozzypzx'
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
                timeZone: 'oqpoladmchkkugpxocrynztkok'
                winRM: {
                  listeners: [
                    {
                      certificateUrl: 'https://microsoft.com/a'
                      protocol: 'Http'
                    }
                  ]
                }
              }
            }
            scheduledEventsProfile: {
              osImageNotificationProfile: {
                enable: true
                notBeforeTimeout: 'nbgfbvisxveyywfyjgcfb'
              }
              terminateNotificationProfile: {
                enable: true
                notBeforeTimeout: 'jgycfvgxpzvgsdylbcspkrxwhgxkyd'
              }
            }
            securityPostureReference: {
              excludeExtensions: [
                'zagiokiwvg'
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
                keyIncarnationId: 22
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
                  name: 'nqblcowgig'
                  caching: 'None'
                  createOption: 'FromImage'
                  deleteOption: 'Delete'
                  diskIOPSReadWrite: 5
                  diskMBpsReadWrite: 4
                  diskSizeGB: 11
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
              diskControllerType: 'SCSI'
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
                name: 'xhwnqpqigoymwwetvhjuuhiu'
                caching: 'None'
                createOption: 'FromImage'
                deleteOption: 'Delete'
                diffDiskSettings: {
                  option: 'Local'
                  placement: 'CacheDisk'
                }
                diskSizeGB: 21
                image: {
                  uri: 'https://microsoft.com/a'
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
                  'mgyqnavpb'
                ]
                writeAcceleratorEnabled: true
              }
            }
            userData: 'ezhyl'
          }
        }
      ]
    }
    capacityType: 'VCpu'
    computeProfile: {
      additionalVirtualMachineCapabilities: {
        hibernationEnabled: true
        ultraSSDEnabled: true
      }
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
    mode: 'Instance'
    regularPriorityProfile: {
      allocationStrategy: 'Prioritized'
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
    vmAttributes: {
      acceleratorCount: {
        max: 4
        min: 2
      }
      acceleratorManufacturers: [
        'AMD'
      ]
      acceleratorSupport: 'Excluded'
      acceleratorTypes: [
        'GPU'
      ]
      architectureTypes: [
        'ARM64'
      ]
      burstableSupport: 'Excluded'
      cpuManufacturers: [
        'Intel'
      ]
      dataDiskCount: {
        max: 4
        min: 2
      }
      excludedVMSizes: [
        'Standard_A1'
      ]
      localStorageDiskTypes: [
        'HDD'
      ]
      localStorageInGiB: {
        max: 4
        min: 2
      }
      localStorageSupport: 'Excluded'
      memoryInGiB: {
        max: 4
        min: 2
      }
      memoryInGiBPerVCpu: {
        max: 4
        min: 2
      }
      networkBandwidthInMbps: {
        max: 4
        min: 2
      }
      networkInterfaceCount: {
        max: 4
        min: 2
      }
      rdmaNetworkInterfaceCount: {
        max: 4
        min: 2
      }
      rdmaSupport: 'Excluded'
      vCpuCount: {
        max: 4
        min: 2
      }
      vmCategories: [
        'GpuAccelerated'
      ]
    }
    vmSizesProfile: [
      {
        name: 'Standard_D1_v2'
        rank: 0
      }
      {
        name: 'Standard_D2_v2'
        rank: 1
      }
    ]
    zoneAllocationPolicy: {
      distributionStrategy: 'Prioritized'
      zonePreferences: [
        {
          rank: 0
          zone: '1'
        }
        {
          rank: 1
          zone: '2'
        }
      ]
    }
  }
  tags: {
  }
  zones: [
    '1'
    '2'
  ]
}
```
