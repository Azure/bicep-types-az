# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
