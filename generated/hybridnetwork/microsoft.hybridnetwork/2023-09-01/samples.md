# Microsoft.HybridNetwork

## microsoft.hybridnetwork/publishers/configurationgroupschemas

Create or update the network function definition group
```bicep
resource exampleResource 'Microsoft.HybridNetwork/publishers/configurationGroupSchemas@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westUs2'
  properties: {
    description: 'Schema with no secrets'
    schemaDefinition: '{"type":"object","properties":{"interconnect-groups":{"type":"object","properties":{"type":"object","properties":{"name":{"type":"string"},"international-interconnects":{"type":"array","item":{"type":"string"}},"domestic-interconnects":{"type":"array","item":{"type":"string"}}}}},"interconnect-group-assignments":{"type":"object","properties":{"type":"object","properties":{"ssc":{"type":"string"},"interconnects-interconnects":{"type":"string"}}}}},"required":["interconnect-groups","interconnect-group-assignments"]}'
  }
}
```

## microsoft.hybridnetwork/configurationgroupvalues

Create or update configuration group value
```bicep
resource exampleResource 'Microsoft.HybridNetwork/configurationGroupValues@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    configurationGroupSchemaResourceReference: {
      id: '/subscriptions/subid/resourcegroups/testRG/providers/microsoft.hybridnetwork/publishers/testPublisher/configurationGroupSchemas/testConfigurationGroupSchemaName'
      idType: 'Open'
    }
    configurationType: 'Open'
    configurationValue: '{"interconnect-groups":{"stripe-one":{"name":"Stripe one","international-interconnects":["france","germany"],"domestic-interconnects":["birmingham","edinburgh"]},"stripe-two":{"name":"Stripe two","international-interconnects":["germany","italy"],"domestic-interconnects":["edinburgh","london"]}},"interconnect-group-assignments":{"ssc-one":{"ssc":"SSC 1","interconnects":"stripe-one"},"ssc-two":{"ssc":"SSC 2","interconnects":"stripe-two"}}}'
  }
}
```

Create or update configuration group value with secrets
```bicep
resource exampleResource 'Microsoft.HybridNetwork/configurationGroupValues@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    configurationGroupSchemaResourceReference: {
      id: '/subscriptions/subid/resourcegroups/testRG/providers/microsoft.hybridnetwork/publishers/testPublisher/configurationGroupSchemas/testConfigurationGroupSchemaName'
      idType: 'Open'
    }
    configurationType: 'Secret'
    secretConfigurationValue: '{"interconnect-groups":{"stripe-one":{"name":"Stripe one","international-interconnects":["france","germany"],"domestic-interconnects":["birmingham","edinburgh"]},"stripe-two":{"name":"Stripe two","international-interconnects":["germany","italy"],"domestic-interconnects":["edinburgh","london"]}},"interconnect-group-assignments":{"ssc-one":{"ssc":"SSC 1","interconnects":"stripe-one"},"ssc-two":{"ssc":"SSC 2","interconnects":"stripe-two"}}}'
  }
}
```

Create or update first party configuration group value
```bicep
resource exampleResource 'Microsoft.HybridNetwork/configurationGroupValues@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    configurationGroupSchemaResourceReference: {
      id: '/subscriptions/subid/resourcegroups/testRG/providers/microsoft.hybridnetwork/publishers/testPublisher/configurationGroupSchemas/testConfigurationGroupSchemaName'
      idType: 'Secret'
    }
    configurationType: 'Open'
    configurationValue: '{"interconnect-groups":{"stripe-one":{"name":"Stripe one","international-interconnects":["france","germany"],"domestic-interconnects":["birmingham","edinburgh"]},"stripe-two":{"name":"Stripe two","international-interconnects":["germany","italy"],"domestic-interconnects":["edinburgh","london"]}},"interconnect-group-assignments":{"ssc-one":{"ssc":"SSC 1","interconnects":"stripe-one"},"ssc-two":{"ssc":"SSC 2","interconnects":"stripe-two"}}}'
  }
}
```

## microsoft.hybridnetwork/networkfunctions

Create first party network function resource
```bicep
resource exampleResource 'Microsoft.HybridNetwork/networkFunctions@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    allowSoftwareUpdate: false
    configurationType: 'Open'
    deploymentValues: '{"releaseName":"testReleaseName","namespace":"testNamespace"}'
    networkFunctionDefinitionVersionResourceReference: {
      id: '/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/testVendor/networkFunctionDefinitionGroups/testnetworkFunctionDefinitionGroupName/networkFunctionDefinitionVersions/1.0.1'
      idType: 'Secret'
    }
    nfviId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation'
    nfviType: 'AzureArcKubernetes'
    roleOverrideValues: [
      '{"name":"testRoleOne","deployParametersMappingRuleProfile":{"helmMappingRuleProfile":{"helmPackageVersion":"2.1.3","values":"{\\"roleOneParam\\":\\"roleOneOverrideValue\\"}"}}}'
      '{"name":"testRoleTwo","deployParametersMappingRuleProfile":{"helmMappingRuleProfile":{"releaseName":"overrideReleaseName","releaseNamespace":"overrideNamespace","values":"{\\"roleTwoParam\\":\\"roleTwoOverrideValue\\"}"}}}'
    ]
  }
}
```

Create network function resource
```bicep
resource exampleResource 'Microsoft.HybridNetwork/networkFunctions@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    allowSoftwareUpdate: false
    configurationType: 'Open'
    deploymentValues: '{"releaseName":"testReleaseName","namespace":"testNamespace"}'
    networkFunctionDefinitionVersionResourceReference: {
      id: '/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/testVendor/networkFunctionDefinitionGroups/testnetworkFunctionDefinitionGroupName/networkFunctionDefinitionVersions/1.0.1'
      idType: 'Open'
    }
    nfviId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation'
    nfviType: 'AzureArcKubernetes'
    roleOverrideValues: [
      '{"name":"testRoleOne","deployParametersMappingRuleProfile":{"helmMappingRuleProfile":{"helmPackageVersion":"2.1.3","values":"{\\"roleOneParam\\":\\"roleOneOverrideValue\\"}"}}}'
      '{"name":"testRoleTwo","deployParametersMappingRuleProfile":{"helmMappingRuleProfile":{"releaseName":"overrideReleaseName","releaseNamespace":"overrideNamespace","values":"{\\"roleTwoParam\\":\\"roleTwoOverrideValue\\"}"}}}'
    ]
  }
}
```

Create network function resource with secrets
```bicep
resource exampleResource 'Microsoft.HybridNetwork/networkFunctions@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    allowSoftwareUpdate: false
    configurationType: 'Secret'
    networkFunctionDefinitionVersionResourceReference: {
      id: '/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/testVendor/networkFunctionDefinitionGroups/testnetworkFunctionDefinitionGroupName/networkFunctionDefinitionVersions/1.0.1'
      idType: 'Open'
    }
    nfviId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation'
    nfviType: 'AzureArcKubernetes'
    roleOverrideValues: [
      '{"name":"testRoleOne","deployParametersMappingRuleProfile":{"helmMappingRuleProfile":{"helmPackageVersion":"2.1.3","values":"{\\"roleOneParam\\":\\"roleOneOverrideValue\\"}"}}}'
      '{"name":"testRoleTwo","deployParametersMappingRuleProfile":{"helmMappingRuleProfile":{"releaseName":"overrideReleaseName","releaseNamespace":"overrideNamespace","values":"{\\"roleTwoParam\\":\\"roleTwoOverrideValue\\"}"}}}'
    ]
    secretDeploymentValues: '{"adminPassword":"password1","userPassword":"password2"}'
  }
}
```

Create virtual network function resource on AzureCore
```bicep
resource exampleResource 'Microsoft.HybridNetwork/networkFunctions@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    allowSoftwareUpdate: false
    configurationType: 'Open'
    deploymentValues: '{"virtualMachineName":"test-VM","cpuCores":4,"memorySizeGB":8,"cloudServicesNetworkAttachment":{"attachedNetworkId":"test-csnet","ipAllocationMethod":"Dynamic","networkAttachmentName":"test-cs-vlan"},"networkAttachments":[{"attachedNetworkId":"test-l3vlan","defaultGateway":"True","ipAllocationMethod":"Dynamic","networkAttachmentName":"test-vlan"}],"sshPublicKeys":[{"keyData":"ssh-rsa CMIIIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0TqlveKKlc2MFvEmuXJiLGBsY1t4ML4uiRADGSZlnc+7Ugv3h+MCjkkwOKiOdsNo8k4KSBIG5GcQfKYOOd17AJvqCL6cGQbaLuqv0a64jeDm8oO8/xN/IM0oKw7rMr/2oAJOgIsfeXPkRxWWic9AVIS++H5Qi2r7bUFX+cqFsyUCAwEBBQ=="}],"storageProfile":{"osDisk":{"createOption":"Ephemeral","deleteOption":"Delete","diskSizeGB":10}},"userData":"testUserData","adminUsername":"testUser","virtioInterface":"Transitional","isolateEmulatorThread":"False","bootMethod":"BIOS","placementHints":[]}'
    networkFunctionDefinitionVersionResourceReference: {
      id: '/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/testVendor/networkFunctionDefinitionGroups/testnetworkFunctionDefinitionGroupName/networkFunctionDefinitionVersions/1.0.1'
      idType: 'Open'
    }
    nfviId: '/subscriptions/subid/resourceGroups/testResourceGroup'
    nfviType: 'AzureCore'
  }
}
```

Create virtual network function resource on AzureOperatorNexus
```bicep
resource exampleResource 'Microsoft.HybridNetwork/networkFunctions@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    allowSoftwareUpdate: false
    configurationType: 'Open'
    deploymentValues: '{"virtualMachineName":"test-VM","extendedLocationName":"test-cluster","cpuCores":4,"memorySizeGB":8,"cloudServicesNetworkAttachment":{"attachedNetworkId":"test-csnet","ipAllocationMethod":"Dynamic","networkAttachmentName":"test-cs-vlan"},"networkAttachments":[{"attachedNetworkId":"test-l3vlan","defaultGateway":"True","ipAllocationMethod":"Dynamic","networkAttachmentName":"test-vlan"}],"sshPublicKeys":[{"keyData":"ssh-rsa CMIIIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0TqlveKKlc2MFvEmuXJiLGBsY1t4ML4uiRADGSZlnc+7Ugv3h+MCjkkwOKiOdsNo8k4KSBIG5GcQfKYOOd17AJvqCL6cGQbaLuqv0a64jeDm8oO8/xN/IM0oKw7rMr/2oAJOgIsfeXPkRxWWic9AVIS++H5Qi2r7bUFX+cqFsyUCAwEBBQ=="}],"storageProfile":{"osDisk":{"createOption":"Ephemeral","deleteOption":"Delete","diskSizeGB":10}},"userData":"testUserData","adminUsername":"testUser","virtioInterface":"Transitional","isolateEmulatorThread":"False","bootMethod":"BIOS","placementHints":[]}'
    networkFunctionDefinitionVersionResourceReference: {
      id: '/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/testVendor/networkFunctionDefinitionGroups/testnetworkFunctionDefinitionGroupName/networkFunctionDefinitionVersions/1.0.1'
      idType: 'Open'
    }
    nfviId: '/subscriptions/subid/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation'
    nfviType: 'AzureOperatorNexus'
  }
}
```

## microsoft.hybridnetwork/publishers/networkfunctiondefinitiongroups

Create or update the network function definition group
```bicep
resource exampleResource 'Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
}
```

## microsoft.hybridnetwork/publishers/networkfunctiondefinitiongroups/networkfunctiondefinitionversions

Create or update a network function definition version resource
```bicep
resource exampleResource 'Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups/networkFunctionDefinitionVersions@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    deployParameters: '{"type":"object","properties":{"releaseName":{"type":"string"},"namespace":{"type":"string"}}}'
    networkFunctionTemplate: {
      networkFunctionApplications: [
        {
          name: 'fedrbac'
          artifactProfile: {
            artifactStore: {
              id: '/subscriptions/subid/resourcegroups/rg/providers/microsoft.hybridnetwork/publishers/TestPublisher/artifactStores/testArtifactStore'
            }
            helmArtifactProfile: {
              helmPackageName: 'fed-rbac'
              helmPackageVersionRange: '~2.1.3'
              imagePullSecretsValuesPaths: [
                'global.imagePullSecrets'
              ]
              registryValuesPaths: [
                'global.registry.docker.repoPath'
              ]
            }
          }
          artifactType: 'HelmPackage'
          dependsOnProfile: {
            installDependsOn: [
            ]
            uninstallDependsOn: [
            ]
            updateDependsOn: [
            ]
          }
          deployParametersMappingRuleProfile: {
            applicationEnablement: 'Enabled'
            helmMappingRuleProfile: {
              helmPackageVersion: '2.1.3'
              options: {
                installOptions: {
                  atomic: 'true'
                  timeout: '30'
                  wait: 'true'
                }
                upgradeOptions: {
                  atomic: 'true'
                  timeout: '30'
                  wait: 'true'
                }
              }
              releaseName: '{deployParameters.releaseName}'
              releaseNamespace: '{deployParameters.namesapce}'
              values: ''
            }
          }
        }
      ]
      nfviType: 'AzureArcKubernetes'
    }
    networkFunctionType: 'ContainerizedNetworkFunction'
    versionState: 'Active'
  }
}
```

Create or update a network function definition version resource for AzureCore VNF
```bicep
resource exampleResource 'Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups/networkFunctionDefinitionVersions@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'test NFDV for AzureCore'
    deployParameters: '{"virtualMachineName":{"type":"string"},"cpuCores":{"type":"int"},"memorySizeGB":{"type":"int"},"cloudServicesNetworkAttachment":{"type":"object","properties":{"networkAttachmentName":{"type":"string"},"attachedNetworkId":{"type":"string"},"ipAllocationMethod":{"type":"string"},"ipv4Address":{"type":"string"},"ipv6Address":{"type":"string"},"defaultGateway":{"type":"string"}},"required":["attachedNetworkId","ipAllocationMethod"]},"networkAttachments":{"type":"array","items":{"type":"object","properties":{"networkAttachmentName":{"type":"string"},"attachedNetworkId":{"type":"string"},"ipAllocationMethod":{"type":"string"},"ipv4Address":{"type":"string"},"ipv6Address":{"type":"string"},"defaultGateway":{"type":"string"}},"required":["attachedNetworkId","ipAllocationMethod"]}},"storageProfile":{"type":"object","properties":{"osDisk":{"type":"object","properties":{"createOption":{"type":"string"},"deleteOption":{"type":"string"},"diskSizeGB":{"type":"integer"}},"required":["diskSizeGB"]}},"required":["osDisk"]},"sshPublicKeys":{"type":"array","items":{"type":"object","properties":{"keyData":{"type":"string"}},"required":["keyData"]}},"userData":{"type":"string"},"adminUsername":{"type":"string"},"bootMethod":{"type":"string","default":"UEFI","enum":["UEFI","BIOS"]},"isolateEmulatorThread":{"type":"string"},"virtioInterface":{"type":"string"},"placementHints":{"type":"array","items":{"type":"object","properties":{"hintType":{"type":"string","enum":["Affinity","AntiAffinity"]},"resourceId":{"type":"string"},"schedulingExecution":{"type":"string","enum":["Soft","Hard"]},"scope":{"type":"string"}},"required":["hintType","schedulingExecution","resourceId","scope"]}}}'
    networkFunctionTemplate: {
      networkFunctionApplications: [
        {
          name: 'testImageRole'
          artifactProfile: {
            artifactStore: {
              id: '/subscriptions/subid/resourceGroups/rg/providers/microsoft.hybridnetwork/publishers/TestPublisher/artifactStores/TestArtifactStore'
            }
            vhdArtifactProfile: {
              vhdName: 'test-image'
              vhdVersion: '1-0-0'
            }
          }
          artifactType: 'VhdImageFile'
          dependsOnProfile: {
            installDependsOn: [
            ]
            uninstallDependsOn: [
            ]
            updateDependsOn: [
            ]
          }
          deployParametersMappingRuleProfile: {
            applicationEnablement: 'Unknown'
            vhdImageMappingRuleProfile: {
              userConfiguration: ''
            }
          }
        }
        {
          name: 'testTemplateRole'
          artifactProfile: {
            artifactStore: {
              id: '/subscriptions/subid/resourceGroups/rg/providers/microsoft.hybridnetwork/publishers/TestPublisher/artifactStores/TestArtifactStore'
            }
            templateArtifactProfile: {
              templateName: 'test-template'
              templateVersion: '1.0.0'
            }
          }
          artifactType: 'ArmTemplate'
          dependsOnProfile: {
            installDependsOn: [
              'testImageRole'
            ]
            uninstallDependsOn: [
              'testImageRole'
            ]
            updateDependsOn: [
              'testImageRole'
            ]
          }
          deployParametersMappingRuleProfile: {
            applicationEnablement: 'Unknown'
            templateMappingRuleProfile: {
              templateParameters: '{"virtualMachineName":"{deployParameters.virtualMachineName}","cpuCores":"{deployParameters.cpuCores}","memorySizeGB":"{deployParameters.memorySizeGB}","cloudServicesNetworkAttachment":"{deployParameters.cloudServicesNetworkAttachment}","networkAttachments":"{deployParameters.networkAttachments}","sshPublicKeys":"{deployParameters.sshPublicKeys}","storageProfile":"{deployParameters.storageProfile}","isolateEmulatorThread":"{deployParameters.isolateEmulatorThread}","virtioInterface":"{deployParameters.virtioInterface}","userData":"{deployParameters.userData}","adminUsername":"{deployParameters.adminUsername}","bootMethod":"{deployParameters.bootMethod}","placementHints":"{deployParameters.placementHints}"}'
            }
          }
        }
      ]
      nfviType: 'AzureCore'
    }
    networkFunctionType: 'VirtualNetworkFunction'
    versionState: 'Preview'
  }
}
```

Create or update a network function definition version resource for AzureOperatorNexus VNF
```bicep
resource exampleResource 'Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups/networkFunctionDefinitionVersions@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'test NFDV for AzureOperatorNexus'
    deployParameters: '{"virtualMachineName":{"type":"string"},"extendedLocationName":{"type":"string"},"cpuCores":{"type":"int"},"memorySizeGB":{"type":"int"},"cloudServicesNetworkAttachment":{"type":"object","properties":{"networkAttachmentName":{"type":"string"},"attachedNetworkId":{"type":"string"},"ipAllocationMethod":{"type":"string"},"ipv4Address":{"type":"string"},"ipv6Address":{"type":"string"},"defaultGateway":{"type":"string"}},"required":["attachedNetworkId","ipAllocationMethod"]},"networkAttachments":{"type":"array","items":{"type":"object","properties":{"networkAttachmentName":{"type":"string"},"attachedNetworkId":{"type":"string"},"ipAllocationMethod":{"type":"string"},"ipv4Address":{"type":"string"},"ipv6Address":{"type":"string"},"defaultGateway":{"type":"string"}},"required":["attachedNetworkId","ipAllocationMethod"]}},"storageProfile":{"type":"object","properties":{"osDisk":{"type":"object","properties":{"createOption":{"type":"string"},"deleteOption":{"type":"string"},"diskSizeGB":{"type":"integer"}},"required":["diskSizeGB"]}},"required":["osDisk"]},"sshPublicKeys":{"type":"array","items":{"type":"object","properties":{"keyData":{"type":"string"}},"required":["keyData"]}},"userData":{"type":"string"},"adminUsername":{"type":"string"},"bootMethod":{"type":"string","default":"UEFI","enum":["UEFI","BIOS"]},"isolateEmulatorThread":{"type":"string"},"virtioInterface":{"type":"string"},"placementHints":{"type":"array","items":{"type":"object","properties":{"hintType":{"type":"string","enum":["Affinity","AntiAffinity"]},"resourceId":{"type":"string"},"schedulingExecution":{"type":"string","enum":["Soft","Hard"]},"scope":{"type":"string"}},"required":["hintType","schedulingExecution","resourceId","scope"]}}}'
    networkFunctionTemplate: {
      networkFunctionApplications: [
        {
          name: 'testImageRole'
          artifactProfile: {
            artifactStore: {
              id: '/subscriptions/subid/resourceGroups/rg/providers/microsoft.hybridnetwork/publishers/TestPublisher/artifactStores/TestArtifactStore'
            }
            imageArtifactProfile: {
              imageName: 'test-image'
              imageVersion: '1.0.0'
            }
          }
          artifactType: 'ImageFile'
          dependsOnProfile: {
            installDependsOn: [
            ]
            uninstallDependsOn: [
            ]
            updateDependsOn: [
            ]
          }
          deployParametersMappingRuleProfile: {
            applicationEnablement: 'Unknown'
            imageMappingRuleProfile: {
              userConfiguration: ''
            }
          }
        }
        {
          name: 'testTemplateRole'
          artifactProfile: {
            artifactStore: {
              id: '/subscriptions/subid/resourceGroups/rg/providers/microsoft.hybridnetwork/publishers/TestPublisher/artifactStores/TestArtifactStore'
            }
            templateArtifactProfile: {
              templateName: 'test-template'
              templateVersion: '1.0.0'
            }
          }
          artifactType: 'ArmTemplate'
          dependsOnProfile: {
            installDependsOn: [
              'testImageRole'
            ]
            uninstallDependsOn: [
              'testImageRole'
            ]
            updateDependsOn: [
              'testImageRole'
            ]
          }
          deployParametersMappingRuleProfile: {
            applicationEnablement: 'Unknown'
            templateMappingRuleProfile: {
              templateParameters: '{"virtualMachineName":"{deployParameters.virtualMachineName}","extendedLocationName":"{deployParameters.extendedLocationName}","cpuCores":"{deployParameters.cpuCores}","memorySizeGB":"{deployParameters.memorySizeGB}","cloudServicesNetworkAttachment":"{deployParameters.cloudServicesNetworkAttachment}","networkAttachments":"{deployParameters.networkAttachments}","sshPublicKeys":"{deployParameters.sshPublicKeys}","storageProfile":"{deployParameters.storageProfile}","isolateEmulatorThread":"{deployParameters.isolateEmulatorThread}","virtioInterface":"{deployParameters.virtioInterface}","userData":"{deployParameters.userData}","adminUsername":"{deployParameters.adminUsername}","bootMethod":"{deployParameters.bootMethod}","placementHints":"{deployParameters.placementHints}"}'
            }
          }
        }
      ]
      nfviType: 'AzureOperatorNexus'
    }
    networkFunctionType: 'VirtualNetworkFunction'
    versionState: 'Preview'
  }
}
```

## microsoft.hybridnetwork/publishers/networkservicedesigngroups

Create or update the network service design group
```bicep
resource exampleResource 'Microsoft.HybridNetwork/publishers/networkServiceDesignGroups@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
}
```

## microsoft.hybridnetwork/publishers/networkservicedesigngroups/networkservicedesignversions

Create or update a network service design version resource
```bicep
resource exampleResource 'Microsoft.HybridNetwork/publishers/networkServiceDesignGroups/networkServiceDesignVersions@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    configurationGroupSchemaReferences: {
      MyVM_Configuration: {
        id: '/subscriptions/subid/resourcegroups/contosorg1/providers/microsoft.hybridnetwork/publishers/contosoGroup/networkServiceDesignGroups/NSD_contoso/configurationGroupSchemas/MyVM_Configuration_Schema'
      }
    }
    resourceElementTemplates: [
      {
        name: 'MyVM'
        type: 'ArmResourceDefinition'
        configuration: {
          artifactProfile: {
            artifactName: 'MyVMArmTemplate'
            artifactStoreReference: {
              id: '/subscriptions/subid/providers/Microsoft.HybridNetwork/publishers/contosoGroup/artifactStoreReference/store1'
            }
            artifactVersion: '1.0.0'
          }
          parameterValues: '{"publisherName":"{configurationparameters(\'MyVM_Configuration\').publisherName}","skuGroupName":"{configurationparameters(\'MyVM_Configuration\').skuGroupName}","skuVersion":"{configurationparameters(\'MyVM_Configuration\').skuVersion}","skuOfferingLocation":"{configurationparameters(\'MyVM_Configuration\').skuOfferingLocation}","nfviType":"{nfvis().nfvisFromSitePerNfviType.AzureCore.nfviAlias1.nfviType}","nfviId":"{nfvis().nfvisFromSitePerNfviType.AzureCore.nfviAlias1.nfviId}","allowSoftwareUpdates":"{configurationparameters(\'MyVM_Configuration\').allowSoftwareUpdates}","virtualNetworkName":"{configurationparameters(\'MyVM_Configuration\').vnetName}","subnetName":"{configurationparameters(\'MyVM_Configuration\').subnetName}","subnetAddressPrefix":"{configurationparameters(\'MyVM_Configuration\').subnetAddressPrefix}","managedResourceGroup":"{configurationparameters(\'SNSSelf\').managedResourceGroupName}","adminPassword":"{secretparameters(\'MyVM_Configuration\').adminPassword}"}'
          templateType: 'ArmTemplate'
        }
        dependsOnProfile: {
          installDependsOn: [
          ]
        }
      }
    ]
    versionState: 'Active'
  }
}
```

## microsoft.hybridnetwork/publishers

Create or update a publisher resource
```bicep
resource exampleResource 'Microsoft.HybridNetwork/publishers@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    scope: 'Public'
  }
}
```

## microsoft.hybridnetwork/publishers/artifactstores

Create or update an artifact store of publisher resource
```bicep
resource exampleResource 'Microsoft.HybridNetwork/publishers/artifactStores@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    managedResourceGroupConfiguration: {
      name: 'testRg'
      location: 'eastus'
    }
    replicationStrategy: 'SingleReplication'
    storeType: 'AzureContainerRegistry'
  }
}
```

## microsoft.hybridnetwork/publishers/artifactstores/artifactmanifests

Create or update the artifact manifest resource
```bicep
resource exampleResource 'Microsoft.HybridNetwork/publishers/artifactStores/artifactManifests@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    artifacts: [
      {
        artifactName: 'fed-rbac'
        artifactType: 'OCIArtifact'
        artifactVersion: '1.0.0'
      }
      {
        artifactName: 'nginx'
        artifactType: 'OCIArtifact'
        artifactVersion: 'v1'
      }
    ]
  }
}
```

## microsoft.hybridnetwork/sites

Create network site
```bicep
resource exampleResource 'Microsoft.HybridNetwork/sites@2023-09-01' = {
  name: 'example'
  location: 'westUs2'
  properties: {
    nfvis: [
      {
        name: 'nfvi1'
        location: 'westUs2'
        nfviType: 'AzureCore'
      }
      {
        name: 'nfvi2'
        customLocationReference: {
          id: '/subscriptions/subid/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation1'
        }
        nfviType: 'AzureArcKubernetes'
      }
      {
        name: 'nfvi3'
        customLocationReference: {
          id: '/subscriptions/subid/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation2'
        }
        nfviType: 'AzureOperatorNexus'
      }
    ]
  }
}
```

## microsoft.hybridnetwork/sitenetworkservices

Create first party site network service
```bicep
resource exampleResource 'Microsoft.HybridNetwork/siteNetworkServices@2023-09-01' = {
  name: 'example'
  location: 'westUs2'
  properties: {
    desiredStateConfigurationGroupValueReferences: {
      MyVM_Configuration: {
        id: '/subscriptions/subid/resourcegroups/contosorg1/providers/microsoft.hybridnetwork/configurationgroupvalues/MyVM_Configuration1'
      }
    }
    networkServiceDesignVersionResourceReference: {
      id: '/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/TestPublisher/networkServiceDesignGroups/TestNetworkServiceDesignGroupName/networkServiceDesignVersions/1.0.0'
      idType: 'Secret'
    }
    siteReference: {
      id: '/subscriptions/subid/resourcegroups/contosorg1/providers/microsoft.hybridnetwork/sites/testSite'
    }
  }
  sku: {
    name: 'Standard'
  }
}
```

Create site network service
```bicep
resource exampleResource 'Microsoft.HybridNetwork/siteNetworkServices@2023-09-01' = {
  name: 'example'
  location: 'westUs2'
  properties: {
    desiredStateConfigurationGroupValueReferences: {
      MyVM_Configuration: {
        id: '/subscriptions/subid/resourcegroups/contosorg1/providers/microsoft.hybridnetwork/configurationgroupvalues/MyVM_Configuration1'
      }
    }
    networkServiceDesignVersionResourceReference: {
      id: '/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/TestPublisher/networkServiceDesignGroups/TestNetworkServiceDesignGroupName/networkServiceDesignVersions/1.0.0'
      idType: 'Open'
    }
    siteReference: {
      id: '/subscriptions/subid/resourcegroups/contosorg1/providers/microsoft.hybridnetwork/sites/testSite'
    }
  }
  sku: {
    name: 'Standard'
  }
}
```
