# Microsoft.DevCenter
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devcenter/devcenters

DevCenters_Create
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters@2022-10-12-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
  }
  tags: {
    CostCode: '12345'
  }
}
```

DevCenters_CreateWithUserIdentity
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters@2022-10-12-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/identityGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity1: {
      }
    }
  }
  location: 'centralus'
  properties: {
  }
  tags: {
    CostCode: '12345'
  }
}
```

## microsoft.devcenter/devcenters/attachednetworks

AttachedNetworks_Create
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/attachednetworks@2022-10-12-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    networkConnectionId: '/subscriptions/{subscriptionId}/resourceGroups/rg1/providers/Microsoft.DevCenter/NetworkConnections/network-uswest3'
  }
}
```

## microsoft.devcenter/devcenters/catalogs

Catalogs_CreateOrUpdateAdo
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/catalogs@2022-10-12-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    adoGit: {
      path: '/templates'
      branch: 'main'
      secretIdentifier: 'https://contosokv.vault.azure.net/secrets/CentralRepoPat'
      uri: 'https://contoso@dev.azure.com/contoso/contosoOrg/_git/centralrepo-fakecontoso'
    }
  }
}
```

Catalogs_CreateOrUpdateGitHub
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/catalogs@2022-10-12-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    gitHub: {
      path: '/templates'
      branch: 'main'
      secretIdentifier: 'https://contosokv.vault.azure.net/secrets/CentralRepoPat'
      uri: 'https://github.com/Contoso/centralrepo-fake.git'
    }
  }
}
```

## microsoft.devcenter/devcenters/devboxdefinitions

DevBoxDefinitions_Create
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/devboxdefinitions@2022-10-12-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'centralus'
  properties: {
    imageReference: {
      id: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff/resourceGroups/Example/providers/Microsoft.DevCenter/devcenters/Contoso/galleries/contosogallery/images/exampleImage/version/1.0.0'
    }
    osStorageType: 'SSD_1024'
    sku: {
      name: 'Preview'
    }
  }
}
```

## microsoft.devcenter/devcenters/environmenttypes

EnvironmentTypes_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/environmentTypes@2022-10-12-preview' = {
  parent: parentResource 
  name: 'example'
  tags: {
    Owner: 'superuser'
  }
}
```

## microsoft.devcenter/devcenters/galleries

Galleries_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/galleries@2022-10-12-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    galleryResourceId: '/subscriptions/{subscriptionId}/resourceGroups/rg1/providers/Microsoft.Compute/galleries/{galleryName}'
  }
}
```

## microsoft.devcenter/networkconnections

NetworkConnections_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/networkConnections@2022-10-12-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    domainJoinType: 'HybridAzureADJoin'
    domainName: 'mydomaincontroller.local'
    domainPassword: 'Password value for user'
    domainUsername: 'testuser@mydomaincontroller.local'
    networkingResourceGroupName: 'NetworkInterfaces'
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/ExampleRG/providers/Microsoft.Network/virtualNetworks/ExampleVNet/subnets/default'
  }
}
```

## microsoft.devcenter/projects

Projects_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/projects@2022-10-12-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'This is my first project.'
    devCenterId: '/subscriptions/{subscriptionId}/resourceGroups/rg1/providers/Microsoft.DevCenter/devcenters/{devCenterName}'
  }
  tags: {
    CostCenter: 'R&D'
  }
}
```

## microsoft.devcenter/projects/environmenttypes

ProjectEnvironmentTypes_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/projects/environmentTypes@2022-10-12-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/identityGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity1: {
      }
    }
  }
  properties: {
    creatorRoleAssignment: {
      roles: {
        4cbf0b6c-e750-441c-98a7-10da8387e4d6: {
        }
      }
    }
    deploymentTargetId: '/subscriptions/00000000-0000-0000-0000-000000000000'
    status: 'Enabled'
    userRoleAssignments: {
      e45e3m7c-176e-416a-b466-0c5ec8298f8a: {
        roles: {
          4cbf0b6c-e750-441c-98a7-10da8387e4d6: {
          }
        }
      }
    }
  }
  tags: {
    CostCenter: 'RnD'
  }
}
```

## microsoft.devcenter/projects/pools

Pools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/projects/pools@2022-10-12-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'centralus'
  properties: {
    devBoxDefinitionName: 'WebDevBox'
    licenseType: 'Windows_Client'
    localAdministrator: 'Enabled'
    networkConnectionName: 'Network1-westus2'
  }
}
```

## microsoft.devcenter/projects/pools/schedules

Schedules_CreateDailyShutdownPoolSchedule
```bicep
resource exampleResource 'Microsoft.DevCenter/projects/pools/schedules@2022-10-12-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'StopDevBox'
    frequency: 'Daily'
    state: 'Enabled'
    time: '17:30'
    timeZone: 'America/Los_Angeles'
  }
}
```
