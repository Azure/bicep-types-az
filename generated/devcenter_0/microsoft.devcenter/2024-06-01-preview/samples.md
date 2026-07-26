# Microsoft.DevCenter
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devcenter/devcenters

DevCenters_Create
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters@2024-06-01-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    devBoxProvisioningSettings: {
      installAzureMonitorAgentEnableStatus: 'Enabled'
    }
    displayName: 'ContosoDevCenter'
    projectCatalogSettings: {
      catalogItemSyncEnableStatus: 'Enabled'
    }
  }
  tags: {
    CostCode: '12345'
  }
}
```

DevCenters_CreateWithDisabledManagedNetworks
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters@2024-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/identityGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity1': {
      }
    }
  }
  location: 'centralus'
  properties: {
    displayName: 'ContosoDevCenter'
    networkSettings: {
      microsoftHostedNetworkEnableStatus: 'Disabled'
    }
  }
  tags: {
    CostCode: '12345'
  }
}
```

DevCenters_CreateWithEncryption
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters@2024-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/identityGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity1': {
      }
    }
  }
  location: 'centralus'
  properties: {
    displayName: 'ContosoDevCenter'
    encryption: {
      customerManagedKeyEncryption: {
        keyEncryptionKeyIdentity: {
          identityType: 'userAssignedIdentity'
          userAssignedIdentityResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/identityGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity1'
        }
        keyEncryptionKeyUrl: 'https://contosovault.vault.azure.net/keys/contosokek'
      }
    }
  }
  tags: {
    CostCode: '12345'
  }
}
```

DevCenters_CreateWithPlanId
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters@2024-06-01-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    displayName: 'ContosoDevCenter'
    planId: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff/resourceGroups/rg1/providers/Microsoft.DevCenter/plans/ContosoPlan'
  }
  tags: {
    CostCode: '12345'
  }
}
```

DevCenters_CreateWithUserIdentity
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters@2024-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/identityGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity1': {
      }
    }
  }
  location: 'centralus'
  properties: {
    displayName: 'ContosoDevCenter'
  }
  tags: {
    CostCode: '12345'
  }
}
```

## microsoft.devcenter/devcenters/attachednetworks

AttachedNetworks_Create
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/attachednetworks@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    networkConnectionId: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff/resourceGroups/rg1/providers/Microsoft.DevCenter/NetworkConnections/network-uswest3'
  }
}
```

## microsoft.devcenter/devcenters/catalogs

Catalogs_CreateOrUpdateAdo
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/catalogs@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    adoGit: {
      path: '/templates'
      branch: 'main'
      secretIdentifier: 'https://contosokv.vault.azure.net/secrets/CentralRepoPat'
      uri: 'https://contoso@dev.azure.com/contoso/contosoOrg/_git/centralrepo-fakecontoso'
    }
    syncType: 'Scheduled'
  }
}
```

Catalogs_CreateOrUpdateGitHub
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/catalogs@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    gitHub: {
      path: '/templates'
      branch: 'main'
      secretIdentifier: 'https://contosokv.vault.azure.net/secrets/CentralRepoPat'
      uri: 'https://github.com/Contoso/centralrepo-fake.git'
    }
    syncType: 'Manual'
  }
}
```

## microsoft.devcenter/devcenters/devboxdefinitions

DevBoxDefinitions_Create
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/devboxdefinitions@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'centralus'
  properties: {
    hibernateSupport: 'Enabled'
    imageReference: {
      id: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff/resourceGroups/Example/providers/Microsoft.DevCenter/devcenters/Contoso/galleries/contosogallery/images/exampleImage/version/1.0.0'
    }
    sku: {
      name: 'Preview'
    }
  }
}
```

## microsoft.devcenter/devcenters/encryptionsets

EncryptionSets_Create
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/encryptionSets@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/identityGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity1': {
      }
    }
  }
  location: 'westus'
  properties: {
    devboxDisksEncryptionEnableStatus: 'Enabled'
    keyEncryptionKeyUrl: 'https://contosovaultwestus.vault.azure.net/keys/contosokek'
  }
}
```

## microsoft.devcenter/devcenters/environmenttypes

EnvironmentTypes_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/environmentTypes@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'Dev'
  }
  tags: {
    Owner: 'superuser'
  }
}
```

## microsoft.devcenter/devcenters/galleries

Galleries_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/galleries@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    galleryResourceId: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff/resourceGroups/rg1/providers/Microsoft.Compute/galleries/StandardGallery'
  }
}
```

## microsoft.devcenter/networkconnections

NetworkConnections_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/networkConnections@2024-06-01-preview' = {
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

## microsoft.devcenter/plans

Plans_Create
```bicep
resource exampleResource 'Microsoft.DevCenter/plans@2024-06-01-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
  }
  sku: {
    name: 'Preview'
  }
  tags: {
    CostCode: '12345'
  }
}
```

## microsoft.devcenter/plans/members

Plans_Create
```bicep
resource exampleResource 'Microsoft.DevCenter/plans/members@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    memberId: 'd702f662-b3f2-4796-9e8c-13c22378ced3'
    memberType: 'User'
  }
  tags: {
    CostCode: '12345'
  }
}
```

## microsoft.devcenter/projects

Projects_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/projects@2024-06-01-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'This is my first project.'
    devCenterId: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff/resourceGroups/rg1/providers/Microsoft.DevCenter/devcenters/Contoso'
    displayName: 'Dev'
  }
  tags: {
    CostCenter: 'R&D'
  }
}
```

Projects_CreateOrUpdateWithLimitsPerDev
```bicep
resource exampleResource 'Microsoft.DevCenter/projects@2024-06-01-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'This is my first project.'
    devCenterId: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff/resourceGroups/rg1/providers/Microsoft.DevCenter/devcenters/Contoso'
    maxDevBoxesPerUser: 3
  }
  tags: {
    CostCenter: 'R&D'
  }
}
```

## microsoft.devcenter/projects/catalogs

ProjectCatalogs_CreateOrUpdateAdo
```bicep
resource exampleResource 'Microsoft.DevCenter/projects/catalogs@2024-06-01-preview' = {
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

ProjectCatalogs_CreateOrUpdateGitHub
```bicep
resource exampleResource 'Microsoft.DevCenter/projects/catalogs@2024-06-01-preview' = {
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

## microsoft.devcenter/projects/environmenttypes

ProjectEnvironmentTypes_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/projects/environmentTypes@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/identityGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity1': {
      }
    }
  }
  properties: {
    creatorRoleAssignment: {
      roles: {
        '4cbf0b6c-e750-441c-98a7-10da8387e4d6': {
        }
      }
    }
    deploymentTargetId: '/subscriptions/00000000-0000-0000-0000-000000000000'
    status: 'Enabled'
    userRoleAssignments: {
      'e45e3m7c-176e-416a-b466-0c5ec8298f8a': {
        roles: {
          '4cbf0b6c-e750-441c-98a7-10da8387e4d6': {
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
resource exampleResource 'Microsoft.DevCenter/projects/pools@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'centralus'
  properties: {
    devBoxDefinitionName: 'WebDevBox'
    displayName: 'Developer Pool'
    licenseType: 'Windows_Client'
    localAdministrator: 'Enabled'
    networkConnectionName: 'Network1-westus2'
    singleSignOnStatus: 'Disabled'
    stopOnDisconnect: {
      gracePeriodMinutes: 60
      status: 'Enabled'
    }
    virtualNetworkType: 'Unmanaged'
  }
}
```

Pools_CreateOrUpdateWithManagedNetwork
```bicep
resource exampleResource 'Microsoft.DevCenter/projects/pools@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'centralus'
  properties: {
    devBoxDefinitionName: 'WebDevBox'
    displayName: 'Developer Pool'
    licenseType: 'Windows_Client'
    localAdministrator: 'Enabled'
    managedVirtualNetworkRegions: [
      'centralus'
    ]
    networkConnectionName: 'managedNetwork'
    singleSignOnStatus: 'Disabled'
    stopOnDisconnect: {
      gracePeriodMinutes: 60
      status: 'Enabled'
    }
    virtualNetworkType: 'Managed'
  }
}
```

Pools_CreateOrUpdateWithValueDevBoxDefinition
```bicep
resource exampleResource 'Microsoft.DevCenter/projects/pools@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'centralus'
  properties: {
    devBoxDefinition: {
      imageReference: {
        id: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff/resourceGroups/Example/providers/Microsoft.DevCenter/projects/DevProject/images/exampleImage/version/1.0.0'
      }
      sku: {
        name: 'Preview'
      }
    }
    devBoxDefinitionName: ''
    devBoxDefinitionType: 'Value'
    displayName: 'Developer Pool'
    licenseType: 'Windows_Client'
    localAdministrator: 'Enabled'
    networkConnectionName: 'Network1-westus2'
    singleSignOnStatus: 'Disabled'
    stopOnDisconnect: {
      gracePeriodMinutes: 60
      status: 'Enabled'
    }
    virtualNetworkType: 'Unmanaged'
  }
}
```

## microsoft.devcenter/projects/pools/schedules

Schedules_CreateDailyShutdownPoolSchedule
```bicep
resource exampleResource 'Microsoft.DevCenter/projects/pools/schedules@2024-06-01-preview' = {
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
