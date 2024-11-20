# Microsoft.AzureFleet

## microsoft.azurefleet/fleets

Fleets_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.AzureFleet/fleets@2023-11-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      identityUrl: {
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
              configurationReference: 'auikpeahpgodbqdih'
              enableAutomaticUpgrade: true
              order: 4
              packageReferenceId: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{applicationName}/versions/{versionName}'
              tags: 'bevijlsuchspoihzlfjczuqttaqz'
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
          extensionsTimeBudget: 'srvemetinivyy'
          extensions: [
            {
              name: 'gioliweczgjegdfqyaqkdgwrmc'
              properties: {
                type: 'jrewfymdqgrlcudogunfog'
                autoUpgradeMinorVersion: true
                enableAutomaticUpgrade: true
                forceUpdateTag: 'bfapfyqglqyiy'
                protectedSettings: {
                }
                protectedSettingsFromKeyVault: {
                  secretUrl: 'https://myVaultName.vault.azure.net/secrets/secret/mySecretName'
                  sourceVault: {
                    id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}'
                  }
                }
                provisionAfterExtensions: [
                  'babgtjyllusylxsnfvepitrkmkcx'
                ]
                publisher: 'vmgltumwyjrsvlwcbgexcovgwyex'
                settings: {
                }
                suppressFailures: true
                typeHandlerVersion: 'vqrkrrankheuqbcopc'
              }
            }
          ]
        }
        hardwareProfile: {
          vmSizeProperties: {
            vCPUsAvailable: 14
            vCPUsPerCore: 24
          }
        }
        licenseType: 'ncc'
        networkProfile: {
          healthProbe: {
            id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'
          }
          networkApiVersion: '2020-11-01'
          networkInterfaceConfigurations: [
            {
              name: 'akgykxfyokjdwhjztro'
              properties: {
                auxiliaryMode: 'None'
                auxiliarySku: 'None'
                deleteOption: 'Delete'
                disableTcpStateTracking: true
                dnsSettings: {
                  dnsServers: [
                    'uptkfxtujkp'
                  ]
                }
                enableAcceleratedNetworking: true
                enableFpga: true
                enableIPForwarding: true
                ipConfigurations: [
                  {
                    name: 'et'
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
                        name: 'vphqhgnqqsbnafztnoq'
                        properties: {
                          deleteOption: 'Delete'
                          dnsSettings: {
                            domainNameLabel: 'fdwomemghickvduupceilj'
                            domainNameLabelScope: 'TenantReuse'
                          }
                          idleTimeoutInMinutes: 8
                          ipTags: [
                            {
                              ipTagType: 'odacxovypuippcmak'
                              tag: 'bbwjxnpervnfkaxvblftzfypky'
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
          adminPassword: 'wntdnosdvucijisma'
          adminUsername: 'offgcmltnjkbiakzjhosetqeslifah'
          allowExtensionOperations: true
          computerNamePrefix: 'svdrokuuojba'
          customData: 'konjpsuyijb'
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
                  path: 'pxxnbbcyekgdq'
                  keyData: 'lfxabidjysvtlm'
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
                  certificateStore: 'ofo'
                  certificateUrl: 'https://myVaultName.vault.azure.net/secrets/myCertName'
                }
              ]
            }
          ]
          windowsConfiguration: {
            additionalUnattendContent: [
              {
                componentName: 'Microsoft-Windows-Shell-Setup'
                content: 'kstwdekvloggaypeiqgzlcfsm'
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
            timeZone: 'kpfs'
            winRM: {
              listeners: [
                {
                  certificateUrl: 'https://myVaultName.vault.azure.net/secrets/myCertName'
                  protocol: 'Http'
                }
              ]
            }
          }
        }
        scheduledEventsProfile: {
          osImageNotificationProfile: {
            enable: true
            notBeforeTimeout: 'wletnpoxpngmbtrup'
          }
          terminateNotificationProfile: {
            enable: true
            notBeforeTimeout: 'yczcvhbnxumqmilfufwatqupjrniie'
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
            keyIncarnationId: 8
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
              name: 'lxrutjmjctse'
              caching: 'None'
              createOption: 'FromImage'
              deleteOption: 'Delete'
              diskIOPSReadWrite: 9
              diskMBpsReadWrite: 17
              diskSizeGB: 24
              lun: 17
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
          diskControllerType: 'yjhloknohphvezhkawonpaeyvkxed'
          imageReference: {
            communityGalleryImageId: 'ujhxcd'
            id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageName}/versions/{versionName}'
            offer: 'ruhnsiankpaqh'
            publisher: 'skk'
            sharedGalleryImageId: 'mkfpnxoxmkyrwpab'
            sku: 'bcwgmoqrsftfxshebubz'
            version: 'nhzyxfc'
          }
          osDisk: {
            name: 'qzchzeaaxupl'
            caching: 'None'
            createOption: 'FromImage'
            deleteOption: 'Delete'
            diffDiskSettings: {
              option: 'Local'
              placement: 'CacheDisk'
            }
            diskSizeGB: 18
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
              'ibogdijam'
            ]
            writeAcceleratorEnabled: true
          }
        }
        userData: 'jhlyuc'
      }
      computeApiVersion: '2023-07-01'
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
      maxPricePerVM: 0.00865
      minCapacity: 10
    }
    vmSizesProfile: [
      {
        name: 'Standard_d1_v2'
      }
    ]
  }
  tags: {
  }
  zones: [
    'zone1'
    'zone2'
  ]
}
```

Fleets_CreateOrUpdate_MinimumSet
```bicep
resource exampleResource 'Microsoft.AzureFleet/fleets@2023-11-01-preview' = {
  name: 'example'
  location: 'westus'
}
```
