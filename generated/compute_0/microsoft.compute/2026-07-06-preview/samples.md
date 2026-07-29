# Microsoft.Compute
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.compute/locations/bulkcreatecustom

BulkCreateCustom_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Compute/locations/bulkCreateCustom@2026-07-06-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    capacity: 10
    capacityType: 'VM'
    computeProfile: {
      computeApiVersion: '2024-11-01'
      virtualMachineProfile: {
        networkProfile: {
          networkApiVersion: '2020-11-01'
          networkInterfaceConfigurations: [
            {
              name: 'bulkvm-nic'
              properties: {
                deleteOption: 'Delete'
                ipConfigurations: [
                  {
                    name: 'bulkvm-ipconfig'
                    properties: {
                      primary: true
                      subnet: {
                        id: '/subscriptions/1FBA3C66-5C9C-4391-B72F-9F52735FC9F2/resourceGroups/rgBulkactions/providers/Microsoft.Network/virtualNetworks/bulkvnet/subnets/default'
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
          adminUsername: 'azureuser'
          computerName: 'bulkvm'
          linuxConfiguration: {
            disablePasswordAuthentication: true
            ssh: {
              publicKeys: [
                {
                  path: '/home/azureuser/.ssh/authorized_keys'
                  keyData: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDExampleKeyReplaceWithYourOwn azureuser@bulklaunch'
                }
              ]
            }
          }
        }
        storageProfile: {
          imageReference: {
            offer: '0001-com-ubuntu-server-jammy'
            publisher: 'Canonical'
            sku: '22_04-lts-gen2'
            version: 'latest'
          }
          osDisk: {
            caching: 'ReadWrite'
            createOption: 'FromImage'
            deleteOption: 'Delete'
            managedDisk: {
              storageAccountType: 'Premium_LRS'
            }
            osType: 'Linux'
          }
        }
      }
    }
    executionParameters: {
      retryPolicy: {
        onFailureAction: 'Delete'
        retryWindowInMinutes: 30
      }
    }
    overridesProfile: {
      overrides: [
        {
          tags: {
            env: 'prod'
            workload: 'payments'
          }
          virtualMachineName: 'bulkvm-payments-0'
        }
        {
          tags: {
            workload: 'batch'
          }
        }
      ]
      virtualMachineNamePrefix: 'bulkvm'
    }
    priorityProfile: {
      type: 'Spot'
      allocationStrategy: 'LowestPrice'
      evictionPolicy: 'Delete'
      maxPricePerVM: 0.2
    }
    vmSizesProfile: [
      {
        name: 'Standard_D2s_v5'
        rank: 1
      }
      {
        name: 'Standard_D4s_v5'
        override: {
          virtualMachineProfile: {
            storageProfile: {
              imageReference: {
                offer: '0001-com-ubuntu-server-jammy'
                publisher: 'Canonical'
                sku: '22_04-lts-arm64'
                version: 'latest'
              }
            }
          }
        }
        rank: 2
      }
    ]
    zoneAllocationPolicy: {
      distributionStrategy: 'BestEffortBalanced'
      zonePreferences: [
        {
          rank: 1
          zone: '1'
        }
        {
          rank: 2
          zone: '2'
        }
      ]
    }
  }
  tags: {
    env: 'prod'
    workload: 'batch-render'
  }
  zones: [
    '1'
    '2'
  ]
}
```

## microsoft.compute/locations/launchbulkinstancesoperations

LaunchBulkInstancesOperation_CreateOrUpdate_Example
```bicep
resource exampleResource 'Microsoft.Compute/locations/launchBulkInstancesOperations@2026-07-06-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key9643: {
      }
    }
  }
  plan: {
    name: 'iemasqqkbixbewezyrhnpntjd'
    product: 'bguuzrknnuohugjhernflurpx'
    promotionCode: 'bxgonranwqoryfkhkfaumdgz'
    publisher: 'bvggylbvfstnscuupuithafvvgc'
    version: 'uyxetqmmzvqianqv'
  }
  properties: {
    capacity: 21
    capacityType: 'VM'
    computeProfile: {
      computeApiVersion: 'qqxldedyfmfmidkvtkixh'
      virtualMachineProfile: {
        additionalCapabilities: {
          hibernationEnabled: true
          ultraSSDEnabled: true
        }
        applicationProfile: {
          galleryApplications: [
            {
              configurationReference: 'nmfaspclhidtznslsps'
              enableAutomaticUpgrade: true
              order: 8
              packageReferenceId: 'afrfkjdrtzftmwramfyu'
              tags: 'cmygipvpkegyclvpznfu'
              treatFailureAsDeploymentFailure: true
            }
          ]
        }
        capacityReservation: {
          capacityReservationGroup: {
            id: 'lvzxxyypkeqlflftmfn'
          }
        }
        diagnosticsProfile: {
          bootDiagnostics: {
            enabled: true
            storageUri: 'pxuhtzehlfsqolbdleirgj'
          }
        }
        extensionsTimeBudget: 'dnyqmcijikzkltjav'
        hardwareProfile: {
          vmSize: 'szrnjqwbruz'
          vmSizeProperties: {
            vCpusAvailable: 24
            vCpusPerCore: 6
          }
        }
        licenseType: 'ymwuemwuntbignqyvzqflvjpcdus'
        networkProfile: {
          networkApiVersion: '2020-11-01'
          networkInterfaceConfigurations: [
            {
              name: 'qrkzoctmzjketostzabnra'
              properties: {
                auxiliaryMode: 'None'
                auxiliarySku: 'None'
                deleteOption: 'Delete'
                disableTcpStateTracking: true
                dnsSettings: {
                  dnsServers: [
                    'tqcqopnanyyiavfwhqbkarxtrfqbww'
                  ]
                }
                dscpConfiguration: {
                  id: 'lvzxxyypkeqlflftmfn'
                }
                enableAcceleratedNetworking: true
                enableFpga: true
                enableIPForwarding: true
                ipConfigurations: [
                  {
                    name: 'gqymuvgzzfmxqvdadx'
                    properties: {
                      applicationGatewayBackendAddressPools: [
                        {
                          id: 'lvzxxyypkeqlflftmfn'
                        }
                      ]
                      applicationSecurityGroups: [
                        {
                          id: 'lvzxxyypkeqlflftmfn'
                        }
                      ]
                      loadBalancerBackendAddressPools: [
                        {
                          id: 'lvzxxyypkeqlflftmfn'
                        }
                      ]
                      primary: true
                      privateIPAddressVersion: 'IPv4'
                      publicIPAddressConfiguration: {
                        name: 'cwxsqjijtwbsyqdwht'
                        properties: {
                          deleteOption: 'Delete'
                          dnsSettings: {
                            domainNameLabel: 'fampou'
                            domainNameLabelScope: 'TenantReuse'
                          }
                          idleTimeoutInMinutes: 17
                          ipTags: [
                            {
                              ipTagType: 'hkjoxhqadudjartwooezaxl'
                              tag: 'xywunkjglkmmwfpf'
                            }
                          ]
                          publicIPAddressVersion: 'IPv4'
                          publicIPAllocationMethod: 'Dynamic'
                          publicIPPrefix: {
                            id: 'lvzxxyypkeqlflftmfn'
                          }
                        }
                        sku: {
                          name: 'Basic'
                          tier: 'Regional'
                        }
                        tags: {
                          key5442: 'qhpwpnylvmdthxazhxamnbhdfpf'
                        }
                      }
                      subnet: {
                        id: 'lvzxxyypkeqlflftmfn'
                      }
                    }
                  }
                ]
                networkSecurityGroup: {
                  id: 'lvzxxyypkeqlflftmfn'
                }
                primary: true
              }
              tags: {
                key9436: 'bjbadzbfvpszbsickv'
              }
            }
          ]
          networkInterfaces: [
            {
              id: 'ymfxctb'
              properties: {
                deleteOption: 'Delete'
                primary: true
              }
            }
          ]
        }
        osProfile: {
          adminPassword: '<a-password-goes-here>'
          adminUsername: 'fxzbi'
          allowExtensionOperations: true
          computerName: 'bplxnfp'
          customData: 'hbdlirohsgnbrahscboc'
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
                  path: 'mrdfxnfjazxog'
                  keyData: 'wfhrknkehgesontscqyrewfmhgwt'
                }
              ]
            }
          }
          requireGuestProvisionSignal: true
          secrets: [
            {
              sourceVault: {
                id: 'lvzxxyypkeqlflftmfn'
              }
              vaultCertificates: [
                {
                  certificateStore: 'hyx'
                  certificateUrl: 'crgbpfdvlohwkupdjp'
                }
              ]
            }
          ]
          windowsConfiguration: {
            additionalUnattendContent: [
              {
                componentName: 'Microsoft-Windows-Shell-Setup'
                content: 'rguazthnx'
                passName: 'OobeSystem'
                settingName: 'AutoLogon'
              }
            ]
            enableAutomaticUpdates: true
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
            timeZone: 't'
            winRM: {
              listeners: [
                {
                  certificateUrl: 'quhfapfpyeeocwvwtvuggoqqwt'
                  protocol: 'Http'
                }
              ]
            }
          }
        }
        scheduledEventsPolicy: {
          allInstancesDown: {
            automaticallyApprove: true
          }
          scheduledEventsAdditionalPublishingTargets: {
            eventGridAndResourceGraph: {
              enable: true
              scheduledEventsApiVersion: 'lifncbftlkounuyfn'
            }
          }
          userInitiatedReboot: {
            automaticallyApprove: true
          }
          userInitiatedRedeploy: {
            automaticallyApprove: true
          }
        }
        scheduledEventsProfile: {
          osImageNotificationProfile: {
            enable: true
            notBeforeTimeout: 'ataqykjdakdvyyzdspaqnhd'
          }
          terminateNotificationProfile: {
            enable: true
            notBeforeTimeout: 'owbwifqrlsdmm'
          }
        }
        securityProfile: {
          encryptionAtHost: true
          encryptionIdentity: {
            userAssignedIdentityResourceId: 'tnajlgbwcepmhytzb'
          }
          proxyAgentSettings: {
            addProxyAgentExtension: true
            enabled: true
            imds: {
              inVMAccessControlProfileReferenceId: 'xvlzroy'
              mode: 'Audit'
            }
            keyIncarnationId: 4
            mode: 'Audit'
            wireServer: {
              inVMAccessControlProfileReferenceId: 'xvlzroy'
              mode: 'Audit'
            }
          }
          securityType: 'TrustedLaunch'
          uefiSettings: {
            secureBootEnabled: true
            vTpmEnabled: true
          }
        }
        storageProfile: {
          dataDisks: [
            {
              name: 'nbthfzqsxyqvqnbgcljxbwyyoj'
              caching: 'None'
              createOption: 'FromImage'
              deleteOption: 'Delete'
              detachOption: 'ForceDetach'
              diskSizeGB: 19
              image: {
                uri: 'elpzggtxubepzgjqvdbjmbu'
              }
              lun: 7
              managedDisk: {
                diskEncryptionSet: {
                  id: 'magvkzhdmzhktjlqkkk'
                }
                id: 'numddbqmkxuu'
                securityProfile: {
                  diskEncryptionSet: {
                    id: 'magvkzhdmzhktjlqkkk'
                  }
                  securityEncryptionType: 'VMGuestStateOnly'
                }
                storageAccountType: 'Standard_LRS'
              }
              sourceResource: {
                id: 'qnukyordmomtjjqabovlsxl'
              }
              toBeDetached: true
              vhd: {
                uri: 'elpzggtxubepzgjqvdbjmbu'
              }
              writeAcceleratorEnabled: true
            }
          ]
          diskControllerType: 'SCSI'
          imageReference: {
            communityGalleryImageId: 'tsfpcq'
            id: 'cdbrkpdicibtlliq'
            offer: 'uvnqoxhkxefqwbsvjgbswqy'
            publisher: 'ojlplghybdamadvsrq'
            sharedGalleryImageId: 'fz'
            sku: 'hajdxhjmlkx'
            version: 'u'
          }
          osDisk: {
            name: 'opogpznvctmraoajgizcyrfvpt'
            caching: 'None'
            createOption: 'FromImage'
            deleteOption: 'Delete'
            diffDiskSettings: {
              option: 'Local'
              placement: 'CacheDisk'
            }
            diskSizeGB: 2
            encryptionSettings: {
              diskEncryptionKey: {
                secretUrl: 'vzkogocyw'
                sourceVault: {
                  id: 'lvzxxyypkeqlflftmfn'
                }
              }
              enabled: true
              keyEncryptionKey: {
                keyUrl: 'mjjkvgpoohatw'
                sourceVault: {
                  id: 'lvzxxyypkeqlflftmfn'
                }
              }
            }
            image: {
              uri: 'elpzggtxubepzgjqvdbjmbu'
            }
            managedDisk: {
              diskEncryptionSet: {
                id: 'magvkzhdmzhktjlqkkk'
              }
              id: 'numddbqmkxuu'
              securityProfile: {
                diskEncryptionSet: {
                  id: 'magvkzhdmzhktjlqkkk'
                }
                securityEncryptionType: 'VMGuestStateOnly'
              }
              storageAccountType: 'Standard_LRS'
            }
            osType: 'Windows'
            vhd: {
              uri: 'elpzggtxubepzgjqvdbjmbu'
            }
            writeAcceleratorEnabled: true
          }
        }
        userData: 'nwjvxe'
        vmExtensions: [
          {
            name: 'jkpmcxwuahpzwkvexgzpypk'
            properties: {
              type: 'ptlmlzpbpbkfbu'
              autoUpgradeMinorVersion: true
              enableAutomaticUpgrade: true
              forceUpdateTag: 'dockqxgatsfzhctxrncuw'
              protectedSettings: {
              }
              protectedSettingsFromKeyVault: {
                secretUrl: 'vzkogocyw'
                sourceVault: {
                  id: 'lvzxxyypkeqlflftmfn'
                }
              }
              provisionAfterExtensions: [
                'onbtyoeifafiktrkmal'
              ]
              publisher: 'qesyfldbfoaexyoywhcxafdtdwcg'
              settings: {
              }
              suppressFailures: true
              typeHandlerVersion: 'crllsludntz'
            }
          }
        ]
      }
      extensions: [
        {
          name: 'jkpmcxwuahpzwkvexgzpypk'
          properties: {
            type: 'ptlmlzpbpbkfbu'
            autoUpgradeMinorVersion: true
            enableAutomaticUpgrade: true
            forceUpdateTag: 'dockqxgatsfzhctxrncuw'
            protectedSettings: {
            }
            protectedSettingsFromKeyVault: {
              secretUrl: 'vzkogocyw'
              sourceVault: {
                id: 'lvzxxyypkeqlflftmfn'
              }
            }
            provisionAfterExtensions: [
              'onbtyoeifafiktrkmal'
            ]
            publisher: 'qesyfldbfoaexyoywhcxafdtdwcg'
            settings: {
            }
            suppressFailures: true
            typeHandlerVersion: 'crllsludntz'
          }
        }
      ]
    }
    priorityProfile: {
      type: 'Regular'
      allocationStrategy: 'LowestPrice'
      evictionPolicy: 'Delete'
      maxPricePerVM: 23
    }
    retryPolicy: {
      onFailureAction: 'Unknown'
      retryCount: 2
      retryWindowInMinutes: 19
    }
    vmAttributes: {
      acceleratorCount: {
        max: 0
        min: 0
      }
      acceleratorManufacturers: [
        'AMD'
      ]
      acceleratorSupport: 'Excluded'
      acceleratorTypes: [
        'GPU'
      ]
      allowedVMSizes: [
        'dwcsrlrzrzzqleqivkzwpczpf'
        'dwcsrlrzrzzqleqivkzwpczpf'
        'dwcsrlrzrzzqleqivkzwpczpf'
        'dwcsrlrzrzzqleqivkzwpczpf'
        'dwcsrlrzrzzqleqivkzwpczpf'
        'dwcsrlrzrzzqleqivkzwpczpf'
        'dwcsrlrzrzzqleqivkzwpczpf'
      ]
      architectureTypes: [
        'ARM64'
      ]
      burstableSupport: 'Excluded'
      cpuManufacturers: [
        'Intel'
      ]
      dataDiskCount: {
        max: 0
        min: 0
      }
      excludedVMSizes: [
        'igehpnuaybwy'
        'igehpnuaybwy'
        'igehpnuaybwy'
        'igehpnuaybwy'
        'igehpnuaybwy'
        'igehpnuaybwy'
        'igehpnuaybwy'
      ]
      hyperVGenerations: [
        'Gen1'
      ]
      localStorageDiskTypes: [
        'HDD'
      ]
      localStorageInGiB: {
        max: 0
        min: 0
      }
      localStorageSupport: 'Excluded'
      memoryInGiB: {
        max: 0
        min: 0
      }
      memoryInGiBPerVCpu: {
        max: 0
        min: 0
      }
      networkBandwidthInMbps: {
        max: 0
        min: 0
      }
      networkInterfaceCount: {
        max: 0
        min: 0
      }
      rdmaNetworkInterfaceCount: {
        max: 0
        min: 0
      }
      rdmaSupport: 'Excluded'
      vCpuCount: {
        max: 0
        min: 0
      }
      vmCategories: [
        'GeneralPurpose'
      ]
    }
    vmSizesProfile: [
      {
        name: 'frbnnpdkq'
        rank: 7
      }
    ]
    zoneAllocationPolicy: {
      distributionStrategy: 'BestEffortSingleZone'
      zonePreferences: [
        {
          rank: 19
          zone: 'ixksjnaxwelhfpsoyjfaezievquqv'
        }
      ]
    }
  }
  tags: {
    key1909: 'eaoznrkaglklvv'
  }
  zones: [
    'hzqzrbvpgsudtesi'
  ]
}
```

## microsoft.compute/scheduledactions

ScheduledActions_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Compute/scheduledActions@2026-07-06-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    actionType: 'Start'
    disabled: true
    endTime: '2025-04-17T00:23:55.286Z'
    notificationSettings: [
      {
        type: 'Email'
        destination: 'admin@contoso.com'
        disabled: true
        language: 'en-us'
      }
    ]
    resourceType: 'VirtualMachine'
    schedule: {
      deadlineType: 'Unknown'
      executionParameters: {
        optimizationPreference: 'Cost'
        retryPolicy: {
          retryCount: 17
          retryWindowInMinutes: 29
        }
      }
      requestedDaysOfTheMonth: [
        15
      ]
      requestedMonths: [
        'January'
      ]
      requestedWeekDays: [
        'Monday'
      ]
      scheduledTime: '19:00:00'
      timeZone: 'America/Los_Angeles'
    }
    startTime: '2025-04-17T00:23:55.281Z'
  }
  tags: {
    key2102: 'myTagValue'
  }
}
```
