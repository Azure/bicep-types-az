# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects

AssessmentProjectsOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects@2023-03-15' = {
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

## microsoft.migrate/assessmentprojects/groups

GroupsOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/groups@2023-03-15' = {
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
resource exampleResource 'Microsoft.Migrate/assessmentProjects/groups/assessments@2023-03-15' = {
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
resource exampleResource 'Microsoft.Migrate/assessmentProjects/groups/avsAssessments@2023-03-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    assessmentType: 'AvsAssessment'
    azureLocation: 'EastUs'
    azureOfferCode: 'MSAZR0003P'
    currency: 'USD'
    dedupeCompression: 1.5
    discountPercentage: 0
    failuresToTolerateAndRaidLevel: 'Ftt1Raid1'
    groupType: 'Default'
    isStretchClusterEnabled: true
    memOvercommit: 1
    nodeType: 'AV36'
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
resource exampleResource 'Microsoft.Migrate/assessmentProjects/groups/sqlAssessments@2023-03-15' = {
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

## microsoft.migrate/assessmentprojects/hypervcollectors

HypervCollectorsOperations_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/hypervcollectors@2023-03-15' = {
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
resource exampleResource 'Microsoft.Migrate/assessmentProjects/importcollectors@2023-03-15' = {
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
resource exampleResource 'Microsoft.Migrate/assessmentProjects/privateEndpointConnections@2023-03-15' = {
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
resource exampleResource 'Microsoft.Migrate/assessmentProjects/servercollectors@2023-03-15' = {
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
resource exampleResource 'Microsoft.Migrate/assessmentProjects/sqlcollectors@2023-03-15' = {
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
resource exampleResource 'Microsoft.Migrate/assessmentProjects/vmwarecollectors@2023-03-15' = {
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
