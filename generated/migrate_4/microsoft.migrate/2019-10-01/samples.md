# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects

Projects_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects@2019-10-01' = {
  name: 'example'
  eTag: ''
  location: 'West Europe'
  properties: {
    assessmentSolutionId: '/subscriptions/6393a73f-8d55-47ef-b6dd-179b3e0c7910/resourcegroups/abgoyal-westeurope/providers/microsoft.migrate/migrateprojects/abgoyalweselfhost/Solutions/Servers-Assessment-ServerAssessment'
    customerWorkspaceId: {
    }
    customerWorkspaceLocation: {
    }
    projectStatus: 'Active'
  }
  tags: {
  }
}
```

## microsoft.migrate/assessmentprojects/groups

Groups_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/groups@2019-10-01' = {
  parent: parentResource 
  name: 'example'
  eTag: '"1e000c2c-0000-0d00-0000-5cdaa4190000"'
  properties: {
  }
}
```

## microsoft.migrate/assessmentprojects/groups/assessments

Assessments_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/groups/assessments@2019-10-01' = {
  parent: parentResource 
  name: 'example'
  eTag: '"1e000c2c-0000-0d00-0000-5cdaa4190000"'
  properties: {
    azureDiskType: 'StandardOrPremium'
    azureHybridUseBenefit: 'Yes'
    azureLocation: 'NorthEurope'
    azureOfferCode: 'MSAZR0003P'
    azurePricingTier: 'Standard'
    azureStorageRedundancy: 'LocallyRedundant'
    azureVmFamilies: [
      'Dv2_series'
      'F_series'
      'Dv3_series'
      'DS_series'
      'DSv2_series'
      'Fs_series'
      'Dsv3_series'
      'Ev3_series'
      'Esv3_series'
      'D_series'
      'M_series'
      'Fsv2_series'
      'H_series'
    ]
    currency: 'USD'
    discountPercentage: 100
    percentile: 'Percentile95'
    reservedInstance: 'RI3Year'
    scalingFactor: 1
    sizingCriterion: 'PerformanceBased'
    stage: 'InProgress'
    timeRange: 'Day'
    vmUptime: {
      daysPerMonth: 31
      hoursPerDay: 24
    }
  }
}
```

## microsoft.migrate/assessmentprojects/hypervcollectors

HyperVCollectors_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/hypervcollectors@2019-10-01' = {
  parent: parentResource 
  name: 'example'
  eTag: '"00000981-0000-0300-0000-5d74cd5f0000"'
  properties: {
    agentProperties: {
      spnDetails: {
        applicationId: '827f1053-44dc-439f-b832-05416dcce12b'
        audience: 'https://72f988bf-86f1-41af-91ab-2d7cd011db47/migrateprojectce73agentauthaadapp'
        authority: 'https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47'
        objectId: 'be75098e-c0fc-4ac4-98c7-282ebbcf8370'
        tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47'
      }
    }
    discoverySiteId: '/subscriptions/8c3c936a-c09b-4de3-830b-3f5f244d72e9/resourceGroups/ContosoITHyperV/providers/Microsoft.OffAzure/HyperVSites/migrateprojectce73site'
  }
}
```

## microsoft.migrate/assessmentprojects/privateendpointconnections

PrivateEndpointConnections_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentprojects/privateEndpointConnections@2019-10-01' = {
  parent: parentResource 
  name: 'example'
  eTag: '"00009300-0000-0300-0000-602b967b0000"'
  properties: {
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

ServerCollectors_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/servercollectors@2019-10-01' = {
  parent: parentResource 
  name: 'example'
  eTag: '"00000606-0000-0d00-0000-605999bf0000"'
  properties: {
    agentProperties: {
      spnDetails: {
        applicationId: 'ad9f701a-cc08-4421-b51f-b5762d58e9ba'
        audience: 'https://72f988bf-86f1-41af-91ab-2d7cd011db47/app23df4authandaccessaadapp'
        authority: 'https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47'
        objectId: 'b4975e42-9248-4a36-b99f-37eca377ea00'
        tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47'
      }
    }
    discoverySiteId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/pajindTest/providers/Microsoft.OffAzure/ServerSites/app21141site'
  }
}
```

## microsoft.migrate/assessmentprojects/vmwarecollectors

VMwareCollectors_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/vmwarecollectors@2019-10-01' = {
  parent: parentResource 
  name: 'example'
  eTag: '"01003d32-0000-0d00-0000-5d74d2e50000"'
  properties: {
    agentProperties: {
      spnDetails: {
        applicationId: 'fc717575-8173-4b21-92a5-658b655e613e'
        audience: 'https://72f988bf-86f1-41af-91ab-2d7cd011db47/PortalvCenterbc2fagentauthaadapp'
        authority: 'https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47'
        objectId: '29d94f38-db94-4980-aec0-0cfd55ab1cd0'
        tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47'
      }
    }
    discoverySiteId: '/subscriptions/6393a73f-8d55-47ef-b6dd-179b3e0c7910/resourceGroups/abgoyal-westEurope/providers/Microsoft.OffAzure/VMwareSites/PortalvCenterbc2fsite'
  }
}
```
