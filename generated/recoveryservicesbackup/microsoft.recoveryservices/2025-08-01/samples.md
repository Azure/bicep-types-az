# Microsoft.RecoveryServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.recoveryservices/vaults/backupconfig

Update Vault Security Config
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupconfig@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enhancedSecurityState: 'Enabled'
    softDeleteFeatureState: 'Enabled'
  }
}
```

## microsoft.recoveryservices/vaults/backupencryptionconfigs

Update Vault Encryption Configuration
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupEncryptionConfigs@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    encryptionAtRestType: 'CustomerManaged'
    infrastructureEncryptionState: 'true'
    keyUri: 'https://gktestkv1.vault.azure.net/keys/Test1/ed2e8cdc7f86477ebf0c6462b504a9ed'
    subscriptionId: '1a2311d9-66f5-47d3-a9fb-7a37da63934b'
  }
}
```

## microsoft.recoveryservices/vaults/backupfabrics/backupprotectionintent

Create or Update Azure Vm Protection Intent
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policyId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.RecoveryServices/vaults/myVault/backupPolicies/myPolicy'
    protectionIntentItemType: 'AzureResourceItem'
    sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/chamsrgtest/providers/Microsoft.Compute/virtualMachines/chamscandel'
  }
}
```

## microsoft.recoveryservices/vaults/backupfabrics/protectioncontainers

RegisterAzure Storage ProtectionContainers
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    acquireStorageAccountLock: 'Acquire'
    backupManagementType: 'AzureStorage'
    containerType: 'StorageContainer'
    friendlyName: 'swaggertestsa'
    sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/SwaggerTestRg/providers/Microsoft.Storage/storageAccounts/swaggertestsa'
  }
}
```

## microsoft.recoveryservices/vaults/backupfabrics/protectioncontainers/protecteditems

Enable Protection on Azure IaasVm
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policyId: '/Subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/SwaggerTestRg/providers/Microsoft.RecoveryServices/vaults/NetSDKTestRsVault/backupPolicies/DefaultPolicy'
    protectedItemType: 'Microsoft.Compute/virtualMachines'
    sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/netsdktestrg/providers/Microsoft.Compute/virtualMachines/netvmtestv2vm1'
  }
}
```

Stop Protection with retain data on Azure IaasVm
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    protectedItemType: 'Microsoft.Compute/virtualMachines'
    protectionState: 'ProtectionStopped'
    sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/netsdktestrg/providers/Microsoft.Compute/virtualMachines/netvmtestv2vm1'
  }
}
```

## microsoft.recoveryservices/vaults/backuppolicies

Create or Update Azure Storage Vault Standard Protection Policy
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupPolicies@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backupManagementType: 'AzureStorage'
    schedulePolicy: {
      schedulePolicyType: 'SimpleSchedulePolicy'
      scheduleRunFrequency: 'Daily'
      scheduleRunTimes: [
        '2023-07-18T09:30:00.000Z'
      ]
    }
    timeZone: 'UTC'
    vaultRetentionPolicy: {
      snapshotRetentionInDays: 5
      vaultRetention: {
        dailySchedule: {
          retentionDuration: {
            count: 30
            durationType: 'Days'
          }
          retentionTimes: [
            '2023-07-18T09:30:00.000Z'
          ]
        }
        monthlySchedule: {
          retentionDuration: {
            count: 60
            durationType: 'Months'
          }
          retentionScheduleDaily: {
          }
          retentionScheduleFormatType: 'Weekly'
          retentionScheduleWeekly: {
            daysOfTheWeek: [
              'Sunday'
            ]
            weeksOfTheMonth: [
              'First'
            ]
          }
          retentionTimes: [
            '2023-07-18T09:30:00.000Z'
          ]
        }
        retentionPolicyType: 'LongTermRetentionPolicy'
        weeklySchedule: {
          daysOfTheWeek: [
            'Sunday'
          ]
          retentionDuration: {
            count: 12
            durationType: 'Weeks'
          }
          retentionTimes: [
            '2023-07-18T09:30:00.000Z'
          ]
        }
        yearlySchedule: {
          monthsOfYear: [
            'January'
          ]
          retentionDuration: {
            count: 10
            durationType: 'Years'
          }
          retentionScheduleDaily: {
          }
          retentionScheduleFormatType: 'Weekly'
          retentionScheduleWeekly: {
            daysOfTheWeek: [
              'Sunday'
            ]
            weeksOfTheMonth: [
              'First'
            ]
          }
          retentionTimes: [
            '2023-07-18T09:30:00.000Z'
          ]
        }
      }
    }
    workLoadType: 'AzureFileShare'
  }
}
```

Create or Update Daily Azure Storage Protection Policy
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupPolicies@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backupManagementType: 'AzureStorage'
    retentionPolicy: {
      dailySchedule: {
        retentionDuration: {
          count: 5
          durationType: 'Days'
        }
        retentionTimes: [
          '2021-09-29T08:00:00.000Z'
        ]
      }
      monthlySchedule: {
        retentionDuration: {
          count: 60
          durationType: 'Months'
        }
        retentionScheduleDaily: {
        }
        retentionScheduleFormatType: 'Weekly'
        retentionScheduleWeekly: {
          daysOfTheWeek: [
            'Sunday'
          ]
          weeksOfTheMonth: [
            'First'
          ]
        }
        retentionTimes: [
          '2021-09-29T08:00:00.000Z'
        ]
      }
      retentionPolicyType: 'LongTermRetentionPolicy'
      weeklySchedule: {
        daysOfTheWeek: [
          'Sunday'
        ]
        retentionDuration: {
          count: 12
          durationType: 'Weeks'
        }
        retentionTimes: [
          '2021-09-29T08:00:00.000Z'
        ]
      }
      yearlySchedule: {
        monthsOfYear: [
          'January'
        ]
        retentionDuration: {
          count: 10
          durationType: 'Years'
        }
        retentionScheduleDaily: {
        }
        retentionScheduleFormatType: 'Weekly'
        retentionScheduleWeekly: {
          daysOfTheWeek: [
            'Sunday'
          ]
          weeksOfTheMonth: [
            'First'
          ]
        }
        retentionTimes: [
          '2021-09-29T08:00:00.000Z'
        ]
      }
    }
    schedulePolicy: {
      schedulePolicyType: 'SimpleSchedulePolicy'
      scheduleRunFrequency: 'Daily'
      scheduleRunTimes: [
        '2021-09-29T08:00:00.000Z'
      ]
    }
    timeZone: 'UTC'
    workLoadType: 'AzureFileShare'
  }
}
```

Create or Update Enhanced Azure Vm Protection Policy with daily backup
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupPolicies@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backupManagementType: 'AzureIaasVM'
    instantRpRetentionRangeInDays: 30
    policyType: 'V2'
    retentionPolicy: {
      dailySchedule: {
        retentionDuration: {
          count: 180
          durationType: 'Days'
        }
        retentionTimes: [
          '2021-12-17T08:00:00+00:00'
        ]
      }
      monthlySchedule: {
        retentionDuration: {
          count: 60
          durationType: 'Months'
        }
        retentionScheduleDaily: {
        }
        retentionScheduleFormatType: 'Weekly'
        retentionScheduleWeekly: {
          daysOfTheWeek: [
            'Sunday'
          ]
          weeksOfTheMonth: [
            'First'
          ]
        }
        retentionTimes: [
          '2021-12-17T08:00:00+00:00'
        ]
      }
      retentionPolicyType: 'LongTermRetentionPolicy'
      weeklySchedule: {
        daysOfTheWeek: [
          'Sunday'
        ]
        retentionDuration: {
          count: 12
          durationType: 'Weeks'
        }
        retentionTimes: [
          '2021-12-17T08:00:00+00:00'
        ]
      }
      yearlySchedule: {
        monthsOfYear: [
          'January'
        ]
        retentionDuration: {
          count: 10
          durationType: 'Years'
        }
        retentionScheduleDaily: {
        }
        retentionScheduleFormatType: 'Weekly'
        retentionScheduleWeekly: {
          daysOfTheWeek: [
            'Sunday'
          ]
          weeksOfTheMonth: [
            'First'
          ]
        }
        retentionTimes: [
          '2021-12-17T08:00:00+00:00'
        ]
      }
    }
    schedulePolicy: {
      dailySchedule: {
        scheduleRunTimes: [
          '2018-01-24T10:00:00Z'
        ]
      }
      schedulePolicyType: 'SimpleSchedulePolicyV2'
      scheduleRunFrequency: 'Daily'
    }
    snapshotConsistencyType: 'OnlyCrashConsistent'
    timeZone: 'India Standard Time'
  }
}
```

Create or Update Enhanced Azure Vm Protection Policy with Hourly backup
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupPolicies@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backupManagementType: 'AzureIaasVM'
    instantRpRetentionRangeInDays: 30
    policyType: 'V2'
    retentionPolicy: {
      dailySchedule: {
        retentionDuration: {
          count: 180
          durationType: 'Days'
        }
        retentionTimes: [
          '2021-12-17T08:00:00+00:00'
        ]
      }
      monthlySchedule: {
        retentionDuration: {
          count: 60
          durationType: 'Months'
        }
        retentionScheduleDaily: {
        }
        retentionScheduleFormatType: 'Weekly'
        retentionScheduleWeekly: {
          daysOfTheWeek: [
            'Sunday'
          ]
          weeksOfTheMonth: [
            'First'
          ]
        }
        retentionTimes: [
          '2021-12-17T08:00:00+00:00'
        ]
      }
      retentionPolicyType: 'LongTermRetentionPolicy'
      weeklySchedule: {
        daysOfTheWeek: [
          'Sunday'
        ]
        retentionDuration: {
          count: 12
          durationType: 'Weeks'
        }
        retentionTimes: [
          '2021-12-17T08:00:00+00:00'
        ]
      }
      yearlySchedule: {
        monthsOfYear: [
          'January'
        ]
        retentionDuration: {
          count: 10
          durationType: 'Years'
        }
        retentionScheduleDaily: {
        }
        retentionScheduleFormatType: 'Weekly'
        retentionScheduleWeekly: {
          daysOfTheWeek: [
            'Sunday'
          ]
          weeksOfTheMonth: [
            'First'
          ]
        }
        retentionTimes: [
          '2021-12-17T08:00:00+00:00'
        ]
      }
    }
    schedulePolicy: {
      hourlySchedule: {
        interval: 4
        scheduleWindowDuration: 16
        scheduleWindowStartTime: '2021-12-17T08:00:00Z'
      }
      schedulePolicyType: 'SimpleSchedulePolicyV2'
      scheduleRunFrequency: 'Hourly'
    }
    snapshotConsistencyType: 'OnlyCrashConsistent'
    timeZone: 'India Standard Time'
  }
}
```

Create or Update Full Azure Vm Protection Policy
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupPolicies@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backupManagementType: 'AzureIaasVM'
    retentionPolicy: {
      monthlySchedule: {
        retentionDuration: {
          count: 2
          durationType: 'Months'
        }
        retentionScheduleFormatType: 'Weekly'
        retentionScheduleWeekly: {
          daysOfTheWeek: [
            'Wednesday'
            'Thursday'
          ]
          weeksOfTheMonth: [
            'First'
            'Third'
          ]
        }
        retentionTimes: [
          '2018-01-24T10:00:00Z'
        ]
      }
      retentionPolicyType: 'LongTermRetentionPolicy'
      weeklySchedule: {
        daysOfTheWeek: [
          'Monday'
          'Wednesday'
          'Thursday'
        ]
        retentionDuration: {
          count: 1
          durationType: 'Weeks'
        }
        retentionTimes: [
          '2018-01-24T10:00:00Z'
        ]
      }
      yearlySchedule: {
        monthsOfYear: [
          'February'
          'November'
        ]
        retentionDuration: {
          count: 4
          durationType: 'Years'
        }
        retentionScheduleFormatType: 'Weekly'
        retentionScheduleWeekly: {
          daysOfTheWeek: [
            'Monday'
            'Thursday'
          ]
          weeksOfTheMonth: [
            'Fourth'
          ]
        }
        retentionTimes: [
          '2018-01-24T10:00:00Z'
        ]
      }
    }
    schedulePolicy: {
      schedulePolicyType: 'SimpleSchedulePolicy'
      scheduleRunDays: [
        'Monday'
        'Wednesday'
        'Thursday'
      ]
      scheduleRunFrequency: 'Weekly'
      scheduleRunTimes: [
        '2018-01-24T10:00:00Z'
      ]
    }
    timeZone: 'Pacific Standard Time'
  }
}
```

Create or Update Full Azure Workload Protection Policy
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupPolicies@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backupManagementType: 'AzureWorkload'
    settings: {
      issqlcompression: false
      timeZone: 'Pacific Standard Time'
    }
    subProtectionPolicy: [
      {
        policyType: 'Full'
        retentionPolicy: {
          monthlySchedule: {
            retentionDuration: {
              count: 1
              durationType: 'Months'
            }
            retentionScheduleFormatType: 'Weekly'
            retentionScheduleWeekly: {
              daysOfTheWeek: [
                'Sunday'
              ]
              weeksOfTheMonth: [
                'Second'
              ]
            }
            retentionTimes: [
              '2018-01-24T10:00:00Z'
            ]
          }
          retentionPolicyType: 'LongTermRetentionPolicy'
          weeklySchedule: {
            daysOfTheWeek: [
              'Sunday'
              'Tuesday'
            ]
            retentionDuration: {
              count: 2
              durationType: 'Weeks'
            }
            retentionTimes: [
              '2018-01-24T10:00:00Z'
            ]
          }
          yearlySchedule: {
            monthsOfYear: [
              'January'
              'June'
              'December'
            ]
            retentionDuration: {
              count: 1
              durationType: 'Years'
            }
            retentionScheduleFormatType: 'Weekly'
            retentionScheduleWeekly: {
              daysOfTheWeek: [
                'Sunday'
              ]
              weeksOfTheMonth: [
                'Last'
              ]
            }
            retentionTimes: [
              '2018-01-24T10:00:00Z'
            ]
          }
        }
        schedulePolicy: {
          schedulePolicyType: 'SimpleSchedulePolicy'
          scheduleRunDays: [
            'Sunday'
            'Tuesday'
          ]
          scheduleRunFrequency: 'Weekly'
          scheduleRunTimes: [
            '2018-01-24T10:00:00Z'
          ]
        }
      }
      {
        policyType: 'Differential'
        retentionPolicy: {
          retentionDuration: {
            count: 8
            durationType: 'Days'
          }
          retentionPolicyType: 'SimpleRetentionPolicy'
        }
        schedulePolicy: {
          schedulePolicyType: 'SimpleSchedulePolicy'
          scheduleRunDays: [
            'Friday'
          ]
          scheduleRunFrequency: 'Weekly'
          scheduleRunTimes: [
            '2018-01-24T10:00:00Z'
          ]
        }
      }
      {
        policyType: 'Log'
        retentionPolicy: {
          retentionDuration: {
            count: 7
            durationType: 'Days'
          }
          retentionPolicyType: 'SimpleRetentionPolicy'
        }
        schedulePolicy: {
          scheduleFrequencyInMins: 60
          schedulePolicyType: 'LogSchedulePolicy'
        }
      }
    ]
    workLoadType: 'SQLDataBase'
  }
}
```

Create or Update Hourly Azure Storage Protection Policy
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupPolicies@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backupManagementType: 'AzureStorage'
    retentionPolicy: {
      dailySchedule: {
        retentionDuration: {
          count: 5
          durationType: 'Days'
        }
        retentionTimes: {
        }
      }
      monthlySchedule: {
        retentionDuration: {
          count: 60
          durationType: 'Months'
        }
        retentionScheduleDaily: {
        }
        retentionScheduleFormatType: 'Weekly'
        retentionScheduleWeekly: {
          daysOfTheWeek: [
            'Sunday'
          ]
          weeksOfTheMonth: [
            'First'
          ]
        }
        retentionTimes: {
        }
      }
      retentionPolicyType: 'LongTermRetentionPolicy'
      weeklySchedule: {
        daysOfTheWeek: [
          'Sunday'
        ]
        retentionDuration: {
          count: 12
          durationType: 'Weeks'
        }
        retentionTimes: {
        }
      }
      yearlySchedule: {
        monthsOfYear: [
          'January'
        ]
        retentionDuration: {
          count: 10
          durationType: 'Years'
        }
        retentionScheduleDaily: {
        }
        retentionScheduleFormatType: 'Weekly'
        retentionScheduleWeekly: {
          daysOfTheWeek: [
            'Sunday'
          ]
          weeksOfTheMonth: [
            'First'
          ]
        }
        retentionTimes: {
        }
      }
    }
    schedulePolicy: {
      hourlySchedule: {
        interval: 4
        scheduleWindowDuration: 12
        scheduleWindowStartTime: '2021-09-29T08:00:00.000Z'
      }
      schedulePolicyType: 'SimpleSchedulePolicy'
      scheduleRunFrequency: 'Hourly'
    }
    timeZone: 'UTC'
    workLoadType: 'AzureFileShare'
  }
}
```

Create or Update Simple Azure Vm Protection Policy
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupPolicies@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backupManagementType: 'AzureIaasVM'
    retentionPolicy: {
      dailySchedule: {
        retentionDuration: {
          count: 1
          durationType: 'Days'
        }
        retentionTimes: [
          '2018-01-24T02:00:00Z'
        ]
      }
      retentionPolicyType: 'LongTermRetentionPolicy'
    }
    schedulePolicy: {
      schedulePolicyType: 'SimpleSchedulePolicy'
      scheduleRunFrequency: 'Daily'
      scheduleRunTimes: [
        '2018-01-24T02:00:00Z'
      ]
    }
    timeZone: 'Pacific Standard Time'
  }
}
```

## microsoft.recoveryservices/vaults/backupresourceguardproxies

Create ResourceGuardProxy
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupResourceGuardProxies@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resourceGuardResourceId: '/subscriptions/c999d45b-944f-418c-a0d8-c3fcfd1802c8/resourceGroups/vaultguardRGNew/providers/Microsoft.DataProtection/resourceGuards/VaultGuardTestNew'
  }
}
```

## microsoft.recoveryservices/vaults/backupstorageconfig

Update Vault Storage Configuration
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupstorageconfig@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageType: 'LocallyRedundant'
    storageTypeState: 'Unlocked'
  }
}
```

## microsoft.recoveryservices/vaults/privateendpointconnections

Update PrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/privateEndpointConnections@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupIds: [
      'AzureBackup_secondary'
    ]
    privateEndpoint: {
      id: '/subscriptions/04cf684a-d41f-4550-9f70-7708a3a2283b/resourceGroups/gaallaRG/providers/Microsoft.Network/privateEndpoints/gaallatestpe3'
    }
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@company.com'
      status: 'Approved'
    }
    provisioningState: 'Succeeded'
  }
}
```
