# Microsoft.DataProtection
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dataprotection/backupvaults

Create BackupVault
```bicep
resource exampleResource 'Microsoft.DataProtection/backupVaults@2025-07-01' = {
  name: 'example'
  identity: {
    type: 'None'
  }
  location: 'WestUS'
  properties: {
    featureSettings: {
      crossRegionRestoreSettings: {
        state: 'Enabled'
      }
    }
    monitoringSettings: {
      azureMonitorAlertSettings: {
        alertsForAllJobFailures: 'Enabled'
      }
    }
    securitySettings: {
      softDeleteSettings: {
        retentionDurationInDays: 14
        state: 'Enabled'
      }
    }
    storageSettings: [
      {
        type: 'LocallyRedundant'
        datastoreType: 'VaultStore'
      }
    ]
  }
  tags: {
    key1: 'val1'
  }
}
```

Create BackupVault With CMK
```bicep
resource exampleResource 'Microsoft.DataProtection/backupVaults@2025-07-01' = {
  name: 'example'
  identity: {
    type: 'None'
  }
  location: 'WestUS'
  properties: {
    monitoringSettings: {
      azureMonitorAlertSettings: {
        alertsForAllJobFailures: 'Enabled'
      }
    }
    securitySettings: {
      encryptionSettings: {
        infrastructureEncryption: 'Enabled'
        kekIdentity: {
          identityId: '/subscriptions/85bf5e8c-3084-4f42-add2-746ebb7e97b2/resourcegroups/defaultrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplemsi'
          identityType: 'UserAssigned'
        }
        keyVaultProperties: {
          keyUri: 'https://cmk2xkv.vault.azure.net/keys/Key1/0767b348bb1a4c07baa6c4ec0055d2b3'
        }
        state: 'Enabled'
      }
      immutabilitySettings: {
        state: 'Disabled'
      }
      softDeleteSettings: {
        retentionDurationInDays: 0
        state: 'Off'
      }
    }
    storageSettings: [
      {
        type: 'LocallyRedundant'
        datastoreType: 'VaultStore'
      }
    ]
  }
  tags: {
    key1: 'val1'
  }
}
```

Create BackupVault With MSI
```bicep
resource exampleResource 'Microsoft.DataProtection/backupVaults@2025-07-01' = {
  name: 'example'
  identity: {
    type: 'systemAssigned'
  }
  location: 'WestUS'
  properties: {
    featureSettings: {
      crossRegionRestoreSettings: {
        state: 'Enabled'
      }
    }
    monitoringSettings: {
      azureMonitorAlertSettings: {
        alertsForAllJobFailures: 'Enabled'
      }
    }
    securitySettings: {
      softDeleteSettings: {
        retentionDurationInDays: 14
        state: 'Enabled'
      }
    }
    storageSettings: [
      {
        type: 'LocallyRedundant'
        datastoreType: 'VaultStore'
      }
    ]
  }
  tags: {
    key1: 'val1'
  }
}
```

## microsoft.dataprotection/backupvaults/backupinstances

Create BackupInstance
```bicep
resource exampleResource 'Microsoft.DataProtection/backupVaults/backupInstances@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataSourceInfo: {
      datasourceType: 'Microsoft.DBforPostgreSQL/servers/databases'
      objectType: 'Datasource'
      resourceID: '/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest/providers/Microsoft.DBforPostgreSQL/servers/viveksipgtest/databases/testdb'
      resourceLocation: ''
      resourceName: 'testdb'
      resourceType: 'Microsoft.DBforPostgreSQL/servers/databases'
      resourceUri: ''
    }
    dataSourceSetInfo: {
      datasourceType: 'Microsoft.DBforPostgreSQL/servers/databases'
      objectType: 'DatasourceSet'
      resourceID: '/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest/providers/Microsoft.DBforPostgreSQL/servers/viveksipgtest'
      resourceLocation: ''
      resourceName: 'viveksipgtest'
      resourceType: 'Microsoft.DBforPostgreSQL/servers'
      resourceUri: ''
    }
    datasourceAuthCredentials: {
      objectType: 'SecretStoreBasedAuthCredentials'
      secretStoreResource: {
        secretStoreType: 'AzureKeyVault'
        uri: 'https://samplevault.vault.azure.net/secrets/credentials'
      }
    }
    friendlyName: 'harshitbi2'
    identityDetails: {
      useSystemAssignedIdentity: false
      userAssignedIdentityArmUrl: '/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourcegroups/rg-name/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testUami'
    }
    objectType: 'BackupInstance'
    policyInfo: {
      policyId: '/subscriptions/04cf684a-d41f-4550-9f70-7708a3a2283b/resourceGroups/000pikumar/providers/Microsoft.DataProtection/Backupvaults/PratikPrivatePreviewVault1/backupPolicies/PratikPolicy1'
      policyParameters: {
        dataStoreParametersList: [
          {
            dataStoreType: 'OperationalStore'
            objectType: 'AzureOperationalStoreParameters'
            resourceGroupId: '/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest'
          }
        ]
      }
    }
    validationType: 'ShallowValidation'
  }
  tags: {
    key1: 'val1'
  }
}
```

Create BackupInstance to perform critical operation With MUA
```bicep
resource exampleResource 'Microsoft.DataProtection/backupVaults/backupInstances@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataSourceInfo: {
      datasourceType: 'Microsoft.DBforPostgreSQL/servers/databases'
      objectType: 'Datasource'
      resourceID: '/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest/providers/Microsoft.DBforPostgreSQL/servers/viveksipgtest/databases/testdb'
      resourceLocation: ''
      resourceName: 'testdb'
      resourceType: 'Microsoft.DBforPostgreSQL/servers/databases'
      resourceUri: ''
    }
    dataSourceSetInfo: {
      datasourceType: 'Microsoft.DBforPostgreSQL/servers/databases'
      objectType: 'DatasourceSet'
      resourceID: '/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest/providers/Microsoft.DBforPostgreSQL/servers/viveksipgtest'
      resourceLocation: ''
      resourceName: 'viveksipgtest'
      resourceType: 'Microsoft.DBforPostgreSQL/servers'
      resourceUri: ''
    }
    datasourceAuthCredentials: {
      objectType: 'SecretStoreBasedAuthCredentials'
      secretStoreResource: {
        secretStoreType: 'AzureKeyVault'
        uri: 'https://samplevault.vault.azure.net/secrets/credentials'
      }
    }
    friendlyName: 'harshitbi2'
    objectType: 'BackupInstance'
    policyInfo: {
      policyId: '/subscriptions/04cf684a-d41f-4550-9f70-7708a3a2283b/resourceGroups/000pikumar/providers/Microsoft.DataProtection/Backupvaults/PratikPrivatePreviewVault1/backupPolicies/PratikPolicy1'
      policyParameters: {
        dataStoreParametersList: [
          {
            dataStoreType: 'OperationalStore'
            objectType: 'AzureOperationalStoreParameters'
            resourceGroupId: '/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest'
          }
        ]
      }
    }
    resourceGuardOperationRequests: [
      '/subscriptions/38304e13-357e-405e-9e9a-220351dcce8c/resourcegroups/ankurResourceGuard1/providers/Microsoft.DataProtection/resourceGuards/ResourceGuard38-1/dppModifyPolicy/default'
    ]
    validationType: 'ShallowValidation'
  }
  tags: {
    key1: 'val1'
  }
}
```

Create BackupInstance With ADLSBlobBackupDatasourceParameters
```bicep
resource exampleResource 'Microsoft.DataProtection/backupVaults/backupInstances@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataSourceInfo: {
      datasourceType: 'Microsoft.Storage/storageAccounts/adlsBlobServices'
      objectType: 'Datasource'
      resourceID: '/subscriptions/54707983-993e-43de-8d94-074451394eda/resourceGroups/adlsrg/providers/Microsoft.Storage/storageAccounts/adlsstorageaccount'
      resourceLocation: 'centraluseuap'
      resourceName: 'adlsstorageaccount'
      resourceType: 'microsoft.storage/storageAccounts'
      resourceUri: '/subscriptions/54707983-993e-43de-8d94-074451394eda/resourceGroups/adlsrg/providers/Microsoft.Storage/storageAccounts/adlsstorageaccount'
    }
    dataSourceSetInfo: {
      datasourceType: 'Microsoft.Storage/storageAccounts/adlsBlobServices'
      objectType: 'DatasourceSet'
      resourceID: '/subscriptions/54707983-993e-43de-8d94-074451394eda/resourceGroups/adlsrg/providers/Microsoft.Storage/storageAccounts/adlsstorageaccount'
      resourceLocation: 'centraluseuap'
      resourceName: 'adlsstorageaccount'
      resourceType: 'microsoft.storage/storageAccounts'
      resourceUri: '/subscriptions/54707983-993e-43de-8d94-074451394eda/resourceGroups/adlsrg/providers/Microsoft.Storage/storageAccounts/adlsstorageaccount'
    }
    friendlyName: 'adlsstorageaccount\\adlsbackupinstance'
    objectType: 'BackupInstance'
    policyInfo: {
      policyId: '/subscriptions/54707983-993e-43de-8d94-074451394eda/resourceGroups/adlsrg/providers/Microsoft.DataProtection/backupVaults/adlsvault/backupPolicies/adlspolicy'
      policyParameters: {
        backupDatasourceParametersList: [
          {
            containersList: [
              'container1'
            ]
            objectType: 'AdlsBlobBackupDatasourceParameters'
          }
        ]
      }
    }
  }
  tags: {
    key1: 'val1'
  }
}
```

Create BackupInstance With KubernetesClusterBackupDatasourceParameters
```bicep
resource exampleResource 'Microsoft.DataProtection/backupVaults/backupInstances@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataSourceInfo: {
      datasourceType: 'Microsoft.ContainerService/managedclusters'
      objectType: 'Datasource'
      resourceID: '/subscriptions/62b829ee-7936-40c9-a1c9-47a93f9f3965/resourceGroups/aksrg/providers/Microsoft.ContainerService/managedClusters/akscluster'
      resourceLocation: 'eastus2euap'
      resourceName: 'akscluster'
      resourceType: 'Microsoft.ContainerService/managedclusters'
      resourceUri: '/subscriptions/62b829ee-7936-40c9-a1c9-47a93f9f3965/resourceGroups/aksrg/providers/Microsoft.ContainerService/managedClusters/akscluster'
    }
    dataSourceSetInfo: {
      datasourceType: 'Microsoft.ContainerService/managedclusters'
      objectType: 'DatasourceSet'
      resourceID: '/subscriptions/62b829ee-7936-40c9-a1c9-47a93f9f3965/resourceGroups/aksrg/providers/Microsoft.ContainerService/managedClusters/akscluster'
      resourceLocation: 'eastus2euap'
      resourceName: 'akscluster'
      resourceType: 'Microsoft.ContainerService/managedclusters'
      resourceUri: '/subscriptions/62b829ee-7936-40c9-a1c9-47a93f9f3965/resourceGroups/aksrg/providers/Microsoft.ContainerService/managedClusters/akscluster'
    }
    friendlyName: 'aksbi'
    objectType: 'BackupInstance'
    policyInfo: {
      policyId: '/subscriptions/62b829ee-7936-40c9-a1c9-47a93f9f3965/resourcegroups/aksrg/providers/Microsoft.DataProtection/BackupVaults/aksvault/backupPolicies/akspolicy'
      policyParameters: {
        backupDatasourceParametersList: [
          {
            excludedNamespaces: [
              'kube-system'
            ]
            excludedResourceTypes: [
              'v1/Secret'
            ]
            includeClusterScopeResources: true
            includedNamespaces: [
              'test'
            ]
            includedResourceTypes: [
            ]
            includedVolumeTypes: [
              'AzureDisk'
              'AzureFileShareSMB'
            ]
            labelSelectors: [
            ]
            objectType: 'KubernetesClusterBackupDatasourceParameters'
            snapshotVolumes: true
          }
        ]
        dataStoreParametersList: [
          {
            dataStoreType: 'OperationalStore'
            objectType: 'AzureOperationalStoreParameters'
            resourceGroupId: '/subscriptions/62b829ee-7936-40c9-a1c9-47a93f9f3965/resourceGroups/aksrg'
          }
        ]
      }
    }
  }
  tags: {
    key1: 'val1'
  }
}
```

## microsoft.dataprotection/backupvaults/backuppolicies

CreateOrUpdate BackupPolicy
```bicep
resource exampleResource 'Microsoft.DataProtection/backupVaults/backupPolicies@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    datasourceTypes: [
      'OssDB'
    ]
    objectType: 'BackupPolicy'
    policyRules: [
      {
        name: 'BackupWeekly'
        backupParameters: {
          backupType: 'Full'
          objectType: 'AzureBackupParams'
        }
        dataStore: {
          dataStoreType: 'VaultStore'
          objectType: 'DataStoreInfoBase'
        }
        objectType: 'AzureBackupRule'
        trigger: {
          objectType: 'ScheduleBasedTriggerContext'
          schedule: {
            repeatingTimeIntervals: [
              'R/2019-11-20T08:00:00-08:00/P1W'
            ]
          }
          taggingCriteria: [
            {
              isDefault: true
              tagInfo: {
                tagName: 'Default'
              }
              taggingPriority: 99
            }
            {
              criteria: [
                {
                  daysOfTheWeek: [
                    'Sunday'
                  ]
                  objectType: 'ScheduleBasedBackupCriteria'
                  scheduleTimes: [
                    '2019-03-01T13:00:00Z'
                  ]
                }
              ]
              isDefault: false
              tagInfo: {
                tagName: 'Weekly'
              }
              taggingPriority: 20
            }
          ]
        }
      }
      {
        name: 'Default'
        isDefault: true
        lifecycles: [
          {
            deleteAfter: {
              duration: 'P1W'
              objectType: 'AbsoluteDeleteOption'
            }
            sourceDataStore: {
              dataStoreType: 'VaultStore'
              objectType: 'DataStoreInfoBase'
            }
          }
        ]
        objectType: 'AzureRetentionRule'
      }
      {
        name: 'Weekly'
        isDefault: false
        lifecycles: [
          {
            deleteAfter: {
              duration: 'P12W'
              objectType: 'AbsoluteDeleteOption'
            }
            sourceDataStore: {
              dataStoreType: 'VaultStore'
              objectType: 'DataStoreInfoBase'
            }
          }
        ]
        objectType: 'AzureRetentionRule'
      }
    ]
  }
}
```

## microsoft.dataprotection/backupvaults/backupresourceguardproxies

Create ResourceGuardProxy
```bicep
resource exampleResource 'Microsoft.DataProtection/backupVaults/backupResourceGuardProxies@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resourceGuardResourceId: '/subscriptions/f9e67185-f313-4e79-aa71-6458d429369d/resourceGroups/ResourceGuardSecurityAdminRG/providers/Microsoft.DataProtection/resourceGuards/ResourceGuardTestResource'
  }
}
```

## microsoft.dataprotection/resourceguards

Create ResourceGuard
```bicep
resource exampleResource 'Microsoft.DataProtection/resourceGuards@2025-07-01' = {
  name: 'example'
  location: 'WestUS'
  tags: {
    key1: 'val1'
  }
}
```
