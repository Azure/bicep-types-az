# Microsoft.DevCenter
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devcenter/devcenters

DevCenters_Create
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters@2025-07-01-preview' = {
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
resource exampleResource 'Microsoft.DevCenter/devcenters@2025-07-01-preview' = {
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
resource exampleResource 'Microsoft.DevCenter/devcenters@2025-07-01-preview' = {
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

DevCenters_CreateWithUserIdentity
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters@2025-07-01-preview' = {
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
resource exampleResource 'Microsoft.DevCenter/devcenters/attachednetworks@2025-07-01-preview' = {
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
resource exampleResource 'Microsoft.DevCenter/devcenters/catalogs@2025-07-01-preview' = {
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
resource exampleResource 'Microsoft.DevCenter/devcenters/catalogs@2025-07-01-preview' = {
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
resource exampleResource 'Microsoft.DevCenter/devcenters/devboxdefinitions@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'centralus'
  properties: {
    hibernateSupport: 'Enabled'
    imageReference: {
      id: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff/resourceGroups/Example/providers/Microsoft.DevCenter/devcenters/Contoso/galleries/contosogallery/images/exampleImage/versions/1.0.0'
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
resource exampleResource 'Microsoft.DevCenter/devcenters/encryptionSets@2025-07-01-preview' = {
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
    keyEncryptionKeyIdentity: {
      type: 'UserAssigned'
      userAssignedIdentityResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/identityGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity1'
    }
    keyEncryptionKeyUrl: 'https://contosovaultwestus.vault.azure.net/keys/contosokek'
  }
}
```

## microsoft.devcenter/devcenters/environmenttypes

EnvironmentTypes_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/environmentTypes@2025-07-01-preview' = {
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
resource exampleResource 'Microsoft.DevCenter/devcenters/galleries@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    galleryResourceId: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff/resourceGroups/rg1/providers/Microsoft.Compute/galleries/StandardGallery'
  }
}
```

## microsoft.devcenter/devcenters/projectpolicies

ProjectPolicies_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/devcenters/projectPolicies@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resourcePolicies: [
      {
        resources: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff1/resourceGroups/rg1/providers/Microsoft.DevCenter/devcenters/Contoso/attachednetworks/network-westus3'
      }
    ]
    scopes: [
      '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff1/resourceGroups/rg1/providers/Microsoft.DevCenter/projects/DevProject'
    ]
  }
}
```

## microsoft.devcenter/networkconnections

NetworkConnections_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevCenter/networkConnections@2025-07-01-preview' = {
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
resource exampleResource 'Microsoft.DevCenter/projects@2025-07-01-preview' = {
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

Projects_CreateOrUpdateWithCustomizationSettings
```bicep
resource exampleResource 'Microsoft.DevCenter/projects@2025-07-01-preview' = {
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
    description: 'This is my first project.'
    customizationSettings: {
      identities: [
        {
          identityResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/identityGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity1'
          identityType: 'userAssignedIdentity'
        }
      ]
    }
    devCenterId: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff/resourceGroups/rg1/providers/Microsoft.DevCenter/devcenters/Contoso'
  }
  tags: {
    CostCenter: 'R&D'
  }
}
```

Projects_CreateOrUpdateWithCustomizationSettings_SystemIdentity
```bicep
resource exampleResource 'Microsoft.DevCenter/projects@2025-07-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'centralus'
  properties: {
    description: 'This is my first project.'
    customizationSettings: {
      identities: [
        {
          identityType: 'systemAssignedIdentity'
        }
      ]
    }
    devCenterId: '/subscriptions/0ac520ee-14c0-480f-b6c9-0a90c58ffff/resourceGroups/rg1/providers/Microsoft.DevCenter/devcenters/Contoso'
  }
  tags: {
    CostCenter: 'R&D'
  }
}
```

Projects_CreateOrUpdateWithLimitsPerDev
```bicep
resource exampleResource 'Microsoft.DevCenter/projects@2025-07-01-preview' = {
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
resource exampleResource 'Microsoft.DevCenter/projects/catalogs@2025-07-01-preview' = {
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
resource exampleResource 'Microsoft.DevCenter/projects/catalogs@2025-07-01-preview' = {
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
resource exampleResource 'Microsoft.DevCenter/projects/environmentTypes@2025-07-01-preview' = {
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
resource exampleResource 'Microsoft.DevCenter/projects/pools@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'centralus'
  properties: {
    activeHoursConfiguration: {
      autoStartEnableStatus: 'Enabled'
      daysOfWeekLimit: 5
      defaultDaysOfWeek: [
        'Monday'
        'Tuesday'
        'Wednesday'
        'Thursday'
        'Friday'
      ]
      defaultEndTimeHour: 17
      defaultStartTimeHour: 9
      defaultTimeZone: 'America/Los_Angeles'
      keepAwakeEnableStatus: 'Enabled'
    }
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
    stopOnNoConnect: {
      gracePeriodMinutes: 120
      status: 'Enabled'
    }
    virtualNetworkType: 'Unmanaged'
  }
}
```

Pools_CreateOrUpdateWithManagedNetwork
```bicep
resource exampleResource 'Microsoft.DevCenter/projects/pools@2025-07-01-preview' = {
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
    stopOnNoConnect: {
      gracePeriodMinutes: 120
      status: 'Enabled'
    }
    virtualNetworkType: 'Managed'
  }
}
```

Pools_CreateOrUpdateWithValueDevBoxDefinition
```bicep
resource exampleResource 'Microsoft.DevCenter/projects/pools@2025-07-01-preview' = {
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
    stopOnNoConnect: {
      gracePeriodMinutes: 120
      status: 'Enabled'
    }
    virtualNetworkType: 'Unmanaged'
  }
}
```

## microsoft.devcenter/projects/pools/schedules

Schedules_CreateDailyShutdownPoolSchedule
```bicep
resource exampleResource 'Microsoft.DevCenter/projects/pools/schedules@2025-07-01-preview' = {
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
