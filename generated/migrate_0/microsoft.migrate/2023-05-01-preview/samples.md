# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects

AssessmentProjectsOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects@2023-05-01-preview' = {
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
    provisioningState: 'Succeeded'
    publicNetworkAccess: 'Disabled'
  }
  tags: {
    'Migrate Project': 'sakanwar-PE-SEA'
  }
}
```

## microsoft.migrate/assessmentprojects/aksassessments

AksAssessmentOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/aksAssessments@2023-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    scope: {
      serverGroupId: '/subscriptions/D6F60DF4-CE70-4E39-8217-B8FBE7CA85AA/resourceGroups/rgaksswagger/providers/Microsoft.Migrate/assessmentProjects/testproject/groups/testgrp'
    }
    settings: {
      azureLocation: 'Unknown'
      category: 'All'
      consolidation: 'Full'
      currency: 'Unknown'
      discountPercentage: 15
      environmentType: 'Unknown'
      licensingProgram: 'Default'
      performanceData: {
        percentile: 'Percentile50'
        perfDataEndTime: '2023-11-07T06:51:24.320Z'
        perfDataStartTime: '2023-11-07T06:51:24.320Z'
        timeRange: 'Day'
      }
      pricingTier: 'Standard'
      savingsOptions: 'None'
      scalingFactor: 3
      sizingCriteria: 'PerformanceBased'
    }
  }
}
```

## microsoft.migrate/assessmentprojects/businesscases

BusinessCaseOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/businessCases@2023-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    settings: {
      azureSettings: {
        avsLaborCostPercentage: 0
        businessCaseType: 'OptimizeForCost'
        comfortFactor: 29
        currency: 'USD'
        discountPercentage: 83
        iaasLaborCostPercentage: 94
        infrastructureGrowthRate: 83
        networkCostPercentage: 40
        paasLaborCostPercentage: 47
        perYearMigrationCompletionPercentage: {
          Year0: 20
          Year1: 30
          Year2: 60
          Year3: 90
        }
        performanceDataEndTime: '2023-11-08T07:10:07.764Z'
        performanceDataStartTime: '2023-11-08T07:10:07.764Z'
        performanceUtilizationPercentile: 4
        savingsOption: 'RI3Year'
        targetLocation: 'WestUs2'
        wacc: 79
        workloadDiscoverySource: 'Appliance'
      }
      onPremiseSettings: {
        computeSettings: {
          hyperthreadCoreToMemoryRatio: 12
          price: 16
          rhelLinuxServerLicensing: {
            licenseCost: 9
          }
          sqlServerLicensing: [
            {
              licenseCost: 27
              softwareAssuranceCost: 16
              version: 'Enterprise'
            }
          ]
          suseLinuxServerLicensing: {
            licenseCost: 9
          }
          virtualizationSoftwareSettings: {
            licenseAndSupportList: [
              {
                basicSupportCost: 22
                licenseCost: 8
                licenseType: 'VSphereStandard'
                productionSupportCost: 22
              }
            ]
            numberOfPhysicalCoresPerLicense: 17
            softwareAssuranceCost: 14
          }
          windowsServerLicensing: {
            licenseCost: 9
            licensesPerCore: 11
            softwareAssuranceCost: 1
          }
        }
        facilitySettings: {
          facilitiesCost: 7
        }
        laborSettings: {
          hourlyAdminCost: 25
          physicalServersPerAdmin: 6
          virtualMachinesPerAdmin: 24
        }
        managementSettings: {
          hypervVirtualizationManagementSettings: {
            licenseAndSupportList: [
              {
                licenseCost: 4
                licenseType: 'Standard'
              }
            ]
            numberOfPhysicalCoresPerLicense: 2
            softwareAssuranceCost: 11
          }
          otherManagementCostsSettings: {
            dataProtectionCostPerServerPerYear: 18
            monitoringCostPerServerPerYear: 10
            patchingCostPerServerPerYear: 18
          }
          thirdPartyManagementSettings: {
            licenseCost: 23
            supportCost: 9
          }
          vsphereManagementSettings: {
            licenseAndSupportList: [
              {
                basicSupportCost: 1
                licenseCost: 6
                licenseType: 'VSphereServerStandard'
                productionSupportCost: 18
              }
            ]
          }
        }
        networkSettings: {
          hardwareSoftwareCostPercentage: 50
          maintenanceCostPercentage: 48
        }
        securitySettings: {
          serverSecurityCostPerServerPerYear: 14
          sqlServerSecurityCostPerServerPerYear: 7
        }
        storageSettings: {
          costPerGbPerMonth: 22
          maintainanceCostPercentageToAcquisitionCost: 1
        }
      }
    }
    state: 'InProgress'
  }
}
```

## microsoft.migrate/assessmentprojects/groups

GroupsOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/groups@2023-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupStatus: 'Completed'
    groupType: 'Default'
    provisioningState: 'Succeeded'
  }
}
```

## microsoft.migrate/assessmentprojects/groups/assessments

AssessmentsOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/groups/assessments@2023-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    assessmentType: 'Unknown'
    azureDiskTypes: [
      'Premium'
      'StandardSSD'
    ]
    azureHybridUseBenefit: 'Unknown'
    azureLocation: 'njxbwdtsxzhichsnk'
    azureOfferCode: 'Unknown'
    azurePricingTier: 'Standard'
    azureStorageRedundancy: 'Unknown'
    azureVmFamilies: [
      'D_series'
      'Lsv2_series'
      'M_series'
      'Mdsv2_series'
      'Msv2_series'
      'Mv2_series'
    ]
    currency: 'Unknown'
    discountPercentage: 6
    eaSubscriptionId: 'kwsu'
    groupType: 'Default'
    linuxAzureHybridUseBenefit: 'Unknown'
    percentile: 'Percentile50'
    perfDataEndTime: '2023-09-26T09:36:48.491Z'
    perfDataStartTime: '2023-09-26T09:36:48.491Z'
    provisioningState: 'Succeeded'
    reservedInstance: 'None'
    scalingFactor: 24
    sizingCriterion: 'PerformanceBased'
    stage: 'InProgress'
    status: 'Created'
    timeRange: 'Day'
    vmUptime: {
      daysPerMonth: 13
      hoursPerDay: 26
    }
  }
}
```

## microsoft.migrate/assessmentprojects/groups/avsassessments

AvsAssessmentsOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/groups/avsAssessments@2023-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    assessmentType: 'AvsAssessment'
    avsAssessmentScenario: 'NewAvsSddc'
    azureLocation: 'EastUs'
    azureOfferCode: 'MSAZR0003P'
    currency: 'USD'
    dedupeCompression: 1.5
    discountPercentage: 0
    externalStorageTypes: [
      'AnfStandard'
      'AnfPremium'
      'AnfUltra'
    ]
    failuresToTolerateAndRaidLevel: 'Unknown'
    failuresToTolerateAndRaidLevelList: [
      'Ftt1Raid1'
      'Ftt1Raid5'
      'Ftt3Raid1'
    ]
    groupType: 'Default'
    isStretchClusterEnabled: true
    isVcfByolEnabled: true
    memOvercommit: 1
    nodeType: 'Unknown'
    nodeTypes: [
      'AV36'
      'AV52'
      'AV36P'
      'AV64'
    ]
    percentile: 'Percentile95'
    perfDataEndTime: '2023-09-26T13:35:56.5671462Z'
    perfDataStartTime: '2023-09-25T13:35:56.5671462Z'
    provisioningState: 'Succeeded'
    reservedInstance: 'RI3Year'
    scalingFactor: 1
    sizingCriterion: 'AsOnPremises'
    stage: 'InProgress'
    status: 'Created'
    suitability: 'Unknown'
    suitabilityExplanation: 'Unknown'
    timeRange: 'Day'
    vcpuOversubscription: 4
  }
}
```

## microsoft.migrate/assessmentprojects/groups/sqlassessments

SqlAssessmentV2Operations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/groups/sqlAssessments@2023-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    asyncCommitModeIntent: 'DisasterRecovery'
    azureLocation: 'SoutheastAsia'
    azureOfferCode: 'MSAZR0003P'
    azureOfferCodeForVm: 'MSAZR0003P'
    azureSqlDatabaseSettings: {
      azureSqlComputeTier: 'Automatic'
      azureSqlDataBaseType: 'SingleDatabase'
      azureSqlPurchaseModel: 'VCore'
      azureSqlServiceTier: 'Automatic'
    }
    azureSqlManagedInstanceSettings: {
      azureSqlInstanceType: 'SingleInstance'
      azureSqlServiceTier: 'Automatic'
    }
    azureSqlVmSettings: {
      instanceSeries: [
        'Eadsv5_series'
      ]
    }
    currency: 'USD'
    disasterRecoveryLocation: 'EastAsia'
    discountPercentage: 0
    enableHadrAssessment: true
    entityUptime: {
      daysPerMonth: 30
      hoursPerDay: 24
    }
    environmentType: 'Production'
    multiSubnetIntent: 'DisasterRecovery'
    optimizationLogic: 'MinimizeCost'
    osLicense: 'Unknown'
    percentile: 'Percentile95'
    reservedInstance: 'None'
    reservedInstanceForVm: 'None'
    scalingFactor: 1
    sizingCriterion: 'PerformanceBased'
    sqlServerLicense: 'Unknown'
    timeRange: 'Day'
  }
}
```

## microsoft.migrate/assessmentprojects/groups/webappassessments

WebAppAssessmentV2Operations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/groups/webAppAssessments@2023-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    appSvcContainerSettings: {
      isolationRequired: true
    }
    appSvcNativeSettings: {
      isolationRequired: true
    }
    assessmentType: 'WebAppAssessment'
    azureLocation: 'UkWest'
    azureOfferCode: 'MSAZR0003P'
    azureSecurityOfferingType: 'NO'
    confidenceRatingInPercentage: 13
    currency: 'USD'
    discountPercentage: 13
    discoveredEntityLightSummary: {
      numberOfMachines: 27
      numberOfServers: 5
      numberOfWebApps: 23
    }
    eaSubscriptionId: ''
    entityUptime: {
      daysPerMonth: 18
      hoursPerDay: 13
    }
    environmentType: 'Production'
    groupType: 'Default'
    percentile: 'Percentile50'
    perfDataEndTime: '2023-11-03T05:42:45.496Z'
    perfDataStartTime: '2023-11-03T05:42:45.496Z'
    reservedInstance: 'None'
    scalingFactor: 17
    sizingCriterion: 'PerformanceBased'
    stage: 'InProgress'
    status: 'Created'
    timeRange: 'Day'
  }
}
```

## microsoft.migrate/assessmentprojects/hypervcollectors

HypervCollectorsOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/hypervcollectors@2023-05-01-preview' = {
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
    provisioningState: 'Succeeded'
  }
}
```

## microsoft.migrate/assessmentprojects/importcollectors

ImportCollectorsOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/importcollectors@2023-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoverySiteId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourcegroups/ayagrawRG/providers/microsoft.offazure/importsites/actualSEA37d4importSite'
    provisioningState: 'Succeeded'
  }
}
```

## microsoft.migrate/assessmentprojects/privateendpointconnections

PrivateEndpointConnectionOperations_Update_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/privateEndpointConnections@2023-05-01-preview' = {
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

ServerCollectorsOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/servercollectors@2023-05-01-preview' = {
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
    provisioningState: 'Succeeded'
  }
}
```

## microsoft.migrate/assessmentprojects/sqlcollectors

SqlCollectorOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/sqlcollectors@2023-05-01-preview' = {
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

VmwareCollectorsOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/vmwarecollectors@2023-05-01-preview' = {
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
    provisioningState: 'Succeeded'
  }
}
```

## microsoft.migrate/assessmentprojects/webappcollectors

WebAppCollectorOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/webAppCollectors@2023-05-01-preview' = {
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
