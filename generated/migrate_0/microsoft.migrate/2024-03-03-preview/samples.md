# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects

AssessmentProjectsOperations_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects@2024-03-03-preview' = {
  name: 'example'
  location: 'southeastasia'
  properties: {
    assessmentSolutionId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/sakanwar/providers/Microsoft.Storage/storageAccounts/sakanwar1204usa'
    customerStorageAccountArmId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/sakanwar/providers/Microsoft.Storage/storageAccounts/sakanwar1204usa'
    customerWorkspaceId: {
    }
    customerWorkspaceLocation: {
    }
    projectStatus: 'Active'
    publicNetworkAccess: 'Disabled'
  }
  tags: {
    'Migrate Project': 'sakanwar-PE-SEA'
  }
}
```

## microsoft.migrate/assessmentprojects/aksassessments

AksAssessmentOperations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/aksAssessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    scope: {
      azureResourceGraphQuery: 'zyhczkubwaqjqrmyithugmedmtdjxb'
      scopeType: 'ServerGroupId'
      serverGroupId: 'this-will-be-a-valid-arm-id'
    }
    settings: {
      azureLocation: 'EastUS'
      billingSettings: {
        licensingProgram: 'EA'
        subscriptionId: '572C3D3F-425D-4AE8-A935-72631EADDE56'
      }
      category: 'All'
      consolidation: 'Full'
      currency: 'USD'
      discountPercentage: 14
      environmentType: 'Production'
      performanceData: {
        percentile: 'Unknown'
        perfDataEndTime: '2025-02-14T07:09:09.242Z'
        perfDataStartTime: '2025-02-14T07:09:09.242Z'
        timeRange: 'Day'
      }
      pricingTier: 'Standard'
      savingsSettings: {
        azureOfferCode: 'Unknown'
        savingsOptions: 'None'
      }
      scalingFactor: 20
      sizingCriterion: 'PerformanceBased'
    }
  }
}
```

## microsoft.migrate/assessmentprojects/assessments

MachineAssessmentsV2Operations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/assessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    scope: {
      azureResourceGraphQuery: 'hfhwuqalmenpcttboxvo'
      scopeType: 'ServerGroupId'
      serverGroupId: 'f'
    }
    settings: {
      azureDiskTypes: [
        'Unknown'
      ]
      azureHybridUseBenefit: 'Unknown'
      azureLocation: 'rsequlcso'
      azurePricingTier: 'Standard'
      azureSecurityOfferingType: 'NO'
      azureStorageRedundancy: 'Unknown'
      azureVmFamilies: [
        'Unknown'
      ]
      azureVmSecurityOptions: [
        'TVM'
      ]
      billingSettings: {
        licensingProgram: 'Retail'
        subscriptionId: 'lee'
      }
      currency: 'Unknown'
      discountPercentage: 5
      environmentType: 'Production'
      linuxAzureHybridUseBenefit: 'Unknown'
      performanceData: {
        percentile: 'Unknown'
        perfDataEndTime: '2025-02-21T05:47:51.336Z'
        perfDataStartTime: '2025-02-21T05:47:51.336Z'
        timeRange: 'Day'
      }
      savingsSettings: {
        azureOfferCode: 'Unknown'
        savingsOptions: 'None'
      }
      scalingFactor: 9
      sizingCriterion: 'PerformanceBased'
      vmUptime: {
        daysPerMonth: 9
        hoursPerDay: 10
      }
    }
    details: {
      status: 'Created'
    }
  }
}
```

## microsoft.migrate/assessmentprojects/avsassessments

AvsAssessmentsV2Operations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/avsAssessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fallbackMachineAssessmentArmId: 'tpjvxfcyxsgngqdxyrrfh'
    scope: {
      azureResourceGraphQuery: 'ylnfwgptlyzwzkotmunbx'
      scopeType: 'ServerGroupId'
      serverGroupId: 'fxonspfmzfuiaepr'
    }
    settings: {
      avsAssessmentScenario: 'Unknown'
      azureLocation: 'actuloeieva'
      billingSettings: {
        licensingProgram: 'Retail'
        subscriptionId: 'xvtuenxmmjuqlhgmvev'
      }
      cpuHeadroom: 27
      currency: 'Unknown'
      dedupeCompression: 26
      discountPercentage: 27
      environmentType: 'Production'
      externalStorageTypes: [
        'Unknown'
      ]
      failuresToTolerateAndRaidLevelList: [
        'Unknown'
      ]
      isStretchClusterEnabled: true
      isVcfByolEnabled: true
      memOvercommit: 11
      nodeTypes: [
        'Unknown'
      ]
      performanceData: {
        percentile: 'Unknown'
        perfDataEndTime: '2025-02-21T05:36:34.751Z'
        perfDataStartTime: '2025-02-21T05:36:34.751Z'
        timeRange: 'Day'
      }
      savingsSettings: {
        azureOfferCode: 'Unknown'
        savingsOptions: 'None'
      }
      scalingFactor: 28
      sizingCriterion: 'PerformanceBased'
      vcpuOversubscription: 25
    }
    details: {
      status: 'Created'
    }
  }
}
```

## microsoft.migrate/assessmentprojects/businesscases

BusinessCaseOperations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/businessCases@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    businessCaseScope: {
      scopeType: 'Datacenter'
    }
    settings: {
      azureArcSettings: {
        azureArcState: 'Disabled'
        laborCostPercentage: 46
        managementSettings: {
          monitoringSettings: {
            alertRulesCount: 19
            logsVolumeInGB: 17
          }
        }
      }
      azureSettings: {
        avsLaborCostPercentage: 2
        businessCaseType: 'Unknown'
        comfortFactor: 19
        currency: 'Unknown'
        discountPercentage: 48
        iaasLaborCostPercentage: 51
        infrastructureGrowthRate: 79
        networkCostPercentage: 81
        paasLaborCostPercentage: 13
        perYearMigrationCompletionPercentage: [
          {
            name: 'cthxvjhedpsnbddvyghswtgp'
            value: 13
          }
        ]
        performanceDataEndTime: '2024-11-14T10:27:58.436Z'
        performanceDataStartTime: '2024-11-14T10:27:58.436Z'
        performanceUtilizationPercentile: 93
        savingsOption: 'Unknown'
        targetLocation: 'hpocokeckktxpzilk'
        wacc: 43
        workloadDiscoverySource: 'Unknown'
      }
      onPremiseSettings: {
        computeSettings: {
          computeHardwareMaintenanceCost: 1
          cpuOversubscriptionRatio: 10
          hyperthreadCoreToMemoryRatio: 26
          price: 8
          rhelLinuxServerLicensing: {
            licenseCost: 7
          }
          sqlServerLicensing: [
            {
              licenseCost: 28
              softwareAssuranceCost: 27
              version: 'Unknown'
            }
          ]
          suseLinuxServerLicensing: {
            licenseCost: 7
          }
          virtualizationSoftwareSettings: {
            vMwareCloudFoundationLicenseCost: 23
          }
          vmOversubscriptionRatio: 10
          windowsServerLicensing: {
            licenseCost: 2
            licensesPerCore: 21
            softwareAssuranceCost: 6
          }
        }
        facilitySettings: {
          facilitiesCostPerKwh: 1
          powerUtilizationEfficiency: 25
        }
        laborSettings: {
          hourlyAdminCost: 22
          physicalServersPerAdmin: 16
          virtualMachinesPerAdmin: 18
        }
        managementSettings: {
          hypervVirtualizationManagementSettings: {
            licenseAndSupportList: [
              {
                licenseCost: 1
                licenseType: 'Unknown'
              }
            ]
            numberOfPhysicalCoresPerLicense: 8
            softwareAssuranceCost: 15
          }
          otherManagementCostsSettings: {
            dataProtectionCostPerServerPerYear: 4
            monitoringCostPerServerPerYear: 2
            patchingCostPerServerPerYear: 28
          }
          thirdPartyManagementSettings: {
            licenseCost: 1
            supportCost: 13
          }
        }
        networkSettings: {
          averageCostPerCabinet: 27
          maintenanceCostPercentage: 84
          physicalServersPerCabinet: 18
        }
        securitySettings: {
          serverSecurityCostPerServerPerYear: 6
          sqlServerSecurityCostPerServerPerYear: 10
        }
        storageSettings: {
          costPerGbPerYear: 12
          maintainanceCostPercentageToAcquisitionCost: 5
        }
      }
    }
    state: 'Unknown'
  }
}
```

## microsoft.migrate/assessmentprojects/heterogeneousassessments

HeterogeneousAssessmentOperations_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/heterogeneousAssessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    assessmentArmIds: [
      'gartykxgfvqccfs'
    ]
    sizingCriterion: 'PerformanceBased'
    status: 'Created'
  }
}
```

## microsoft.migrate/assessmentprojects/hypervcollectors

HypervCollectorsOperations_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/hypervcollectors@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    agentProperties: {
      id: '12f1d90f-b3fa-4926-8893-e56803a09af0'
      lastHeartbeatUtc: '2022-07-07T14:25:35.708325Z'
      spnDetails: {
        applicationId: 'e3bd6eaa-980b-40ae-a30e-2a5069ba097c'
        audience: 'e3bd6eaa-980b-40ae-a30e-2a5069ba097c'
        authority: 'https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47'
        objectId: '01b9f9e2-2d82-414c-adaa-09ce259b6b44'
        tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47'
      }
      version: '2.0.1993.19'
    }
    discoverySiteId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/ayagrawRG/providers/Microsoft.OffAzure/HyperVSites/test-60527site'
  }
}
```

## microsoft.migrate/assessmentprojects/importcollectors

ImportCollectorsOperations_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/importcollectors@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoverySiteId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourcegroups/ayagrawRG/providers/microsoft.offazure/importsites/actualSEA37d4importSite'
  }
}
```

## microsoft.migrate/assessmentprojects/importsqlcollectors

ImportSqlCollectorOperations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/importSqlCollectors@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoverySiteId: '/subscriptions/C1DB66AE-BCF9-42FD-ADC2-390E0721C351/resourceGroups/rgsqlAssessments/providers/Microsoft.OffAzure/MasterSites/testproject8566mastersite/SqlSites/testproject8566sqlsites'
  }
}
```

## microsoft.migrate/assessmentprojects/privateendpointconnections

PrivateEndpointConnectionOperations_Update
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/privateEndpointConnections@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
    }
    privateLinkServiceConnectionState: {
      description: {
      }
      actionsRequired: ''
      status: 'Approved'
    }
  }
}
```

## microsoft.migrate/assessmentprojects/servercollectors

ServerCollectorsOperations_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/servercollectors@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    agentProperties: {
      id: '498e4965-bbb1-47c2-8613-345baff9c509'
      lastHeartbeatUtc: {
      }
      spnDetails: {
        applicationId: '65153d2f-9afb-44e8-b3ca-1369150b7354'
        audience: '65153d2f-9afb-44e8-b3ca-1369150b7354'
        authority: 'https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47'
        objectId: 'ddde6f96-87c8-420b-9d4d-f16a5090519e'
        tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47'
      }
      version: {
      }
    }
    discoverySiteId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/ayagrawRG/providers/Microsoft.OffAzure/ServerSites/walter7155site'
  }
}
```

## microsoft.migrate/assessmentprojects/sqlassessments

SqlAssessmentV3Operations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/sqlAssessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fallbackMachineAssessmentArmId: 'jfwkifsuigza'
    scope: {
      azureResourceGraphQuery: 'ddqs'
      scopeType: 'ServerGroupId'
      serverGroupId: 'ppxcjyrxfmpm'
    }
    settings: {
      asyncCommitModeIntent: 'None'
      azureLocation: 'vtpazagckatiezkiwol'
      azureSecurityOfferingType: 'NO'
      azureSqlDatabaseSettings: {
        azureSqlComputeTier: 'Unknown'
        azureSqlDataBaseType: 'Unknown'
        azureSqlPurchaseModel: 'Unknown'
        azureSqlServiceTier: 'SqlService_Unknown'
      }
      azureSqlManagedInstanceSettings: {
        azureSqlInstanceType: 'Unknown'
        azureSqlServiceTier: 'SqlService_Unknown'
      }
      azureSqlVmSettings: {
        instanceSeries: [
          'Unknown'
        ]
      }
      billingSettings: {
        licensingProgram: 'Retail'
        subscriptionId: 'sp'
      }
      currency: 'Unknown'
      disasterRecoveryLocation: 'Unknown'
      discountPercentage: 8
      enableHadrAssessment: true
      entityUptime: {
        daysPerMonth: 2
        hoursPerDay: 28
      }
      environmentType: 'Production'
      isInternetAccessAvailable: true
      multiSubnetIntent: 'None'
      osLicense: 'Unknown'
      performanceData: {
        percentile: 'Unknown'
        perfDataEndTime: '2025-02-21T05:15:28.133Z'
        perfDataStartTime: '2025-02-21T05:15:28.133Z'
        timeRange: 'Day'
      }
      preferredTargets: [
        'Unknown'
      ]
      savingsSettings: {
        azureOfferCode: 'Unknown'
        savingsOptions: 'None'
      }
      scalingFactor: 27
      sizingCriterion: 'PerformanceBased'
      sqlServerLicense: 'Unknown'
    }
    details: {
      status: 'Created'
    }
  }
}
```

## microsoft.migrate/assessmentprojects/sqlcollectors

SqlCollectorOperations_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/sqlcollectors@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    agentProperties: {
      id: '630da710-4d44-41f7-a189-72fe3db5502b-agent'
      lastHeartbeatUtc: {
      }
      spnDetails: {
        applicationId: 'db9c4c3d-477c-4d5a-817b-318276713565'
        audience: 'db9c4c3d-477c-4d5a-817b-318276713565'
        authority: 'https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47'
        objectId: 'e50236ad-ad07-47d4-af71-ed7b52d200d5'
        tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47'
      }
      version: {
      }
    }
    discoverySiteId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/bansalankit-rg/providers/Microsoft.OffAzure/MasterSites/fci-ankit-test6065mastersite/SqlSites/fci-ankit-test6065sqlsites'
  }
}
```

## microsoft.migrate/assessmentprojects/vmwarecollectors

VmwareCollectorsOperations_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/vmwarecollectors@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    agentProperties: {
      id: 'fe243486-3318-41fa-aaba-c48b5df75308'
      lastHeartbeatUtc: '2022-03-29T12:10:08.9167289Z'
      spnDetails: {
        applicationId: '82b3e452-c0e8-4662-8347-58282925ae84'
        audience: '82b3e452-c0e8-4662-8347-58282925ae84'
        authority: 'https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47'
        objectId: '3fc89111-1405-4938-9214-37aa4739401d'
        tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47'
      }
      version: '1.0.8.383'
    }
    discoverySiteId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/ayagrawRG/providers/Microsoft.OffAzure/VMwareSites/Vmware2744site'
  }
}
```

## microsoft.migrate/assessmentprojects/webappassessments

WebAppAssessmentV3Operations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/webAppAssessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fallbackMachineAssessmentArmId: 'gfjcubgnh'
    scope: {
      azureResourceGraphQuery: 'mjonozzzflcglhdb'
      scopeType: 'ServerGroupId'
      serverGroupId: 'sxwigkygd'
    }
    settings: {
      appSvcContainerSettings: {
        isolationRequired: true
      }
      appSvcNativeSettings: {
        isolationRequired: true
      }
      azureLocation: 'khzvggbrcnpkzrqdtvvyytc'
      azureSecurityOfferingType: 'NO'
      billingSettings: {
        licensingProgram: 'Retail'
        subscriptionId: 'lakvxkjeqpajer'
      }
      currency: 'Unknown'
      discountPercentage: 12
      environmentType: 'Production'
      performanceData: {
        percentile: 'Unknown'
        perfDataEndTime: '2025-02-21T06:18:34.789Z'
        perfDataStartTime: '2025-02-21T06:18:34.789Z'
        timeRange: 'Day'
      }
      savingsSettings: {
        azureOfferCode: 'Unknown'
        savingsOptions: 'None'
      }
      scalingFactor: 6
      sizingCriterion: 'PerformanceBased'
    }
    details: {
      status: 'Created'
    }
  }
}
```

## microsoft.migrate/assessmentprojects/webappcollectors

WebAppCollectorOperations_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/webAppCollectors@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    agentProperties: {
      id: 'fed93df5-b787-4e3f-a764-e3d2b9101a59-agent'
      lastHeartbeatUtc: '2023-11-03T05:43:02.078Z'
      spnDetails: {
        applicationId: '2f70d5e8-7adc-4c64-910a-7031079efc6e'
        audience: '2f70d5e8-7adc-4c64-910a-7031079efc6e'
        authority: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47'
        objectId: '2f70d5e8-7adc-4c64-910a-7031079efc6e'
        tenantId: '2f70d5e8-7adc-4c64-910a-7031079efc6e'
      }
      version: {
      }
    }
    discoverySiteId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/sumukk-ccy-bcs/providers/Microsoft.OffAzure/MasterSites/sumukk-ccy-bcs9880mastersite/WebAppSites/sumukk-ccy-bcs9880webappsites'
  }
}
```

## microsoft.migrate/assessmentprojects/webappcompoundassessments

CompoundAssessmentOperations_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/webAppCompoundAssessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fallbackMachineAssessmentArmId: '/subscriptions/6898488D-BBF0-40FC-A5E3-3DF2C00C5F21/resourceGroups/rgwebAppCompoundAssessments/providers/Microsoft.Migrate/assessmentprojects/contosoProject/assessments/nameOfAssessment'
    targetAssessmentArmIds: {
      aks: '/subscriptions/6898488D-BBF0-40FC-A5E3-3DF2C00C5F21/resourceGroups/rgwebAppCompoundAssessments/providers/Microsoft.Migrate/assessmentprojects/contosoProject/aksAssessments/nameOfAssessment'
      azureAppService: '/subscriptions/6898488D-BBF0-40FC-A5E3-3DF2C00C5F21/resourceGroups/rgwebAppCompoundAssessments/providers/Microsoft.Migrate/assessmentprojects/contosoProject/webAppAssessments/nameOfAssessment'
      azureAppServiceContainer: '/subscriptions/6898488D-BBF0-40FC-A5E3-3DF2C00C5F21/resourceGroups/rgwebAppCompoundAssessments/providers/Microsoft.Migrate/assessmentprojects/contosoProject/webAppAssessments/nameOfAssessment'
    }
    details: {
      createdTimestamp: '2024-11-14T12:23:57.664Z'
      status: 'Created'
      updatedTimestamp: '2024-11-14T12:23:57.664Z'
    }
  }
}
```
