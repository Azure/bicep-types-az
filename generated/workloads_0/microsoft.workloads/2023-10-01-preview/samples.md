# Microsoft.Workloads
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.workloads/connectors

Create a connector resource.
```bicep
resource exampleResource 'Microsoft.Workloads/connectors@2023-10-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    sourceResourceId: '/subscriptions/6d875e77-e412-4d7d-9af4-8895278b4443/resourceGroups/test-rg/providers/Microsoft.Workloads/sapVirtualInstances/X00'
  }
  tags: {
  }
}
```

## microsoft.workloads/connectors/acssbackups

Create a db backup connection with a new backup policy.
```bicep
resource exampleResource 'Microsoft.Workloads/connectors/acssBackups@2023-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
    backupData: {
      backupPolicy: {
        name: 'defaultDbPolicy'
        properties: {
          backupManagementType: 'AzureWorkload'
          protectedItemsCount: 0
          settings: {
            isCompression: false
            issqlcompression: false
            timeZone: 'UTC'
          }
          subProtectionPolicy: [
            {
              policyType: 'Full'
              retentionPolicy: {
                dailySchedule: {
                  retentionDuration: {
                    count: 30
                    durationType: 'Days'
                  }
                  retentionTimes: [
                    '2018-01-10T18:30:00Z'
                  ]
                }
                retentionPolicyType: 'LongTermRetentionPolicy'
              }
              schedulePolicy: {
                schedulePolicyType: 'SimpleSchedulePolicy'
                scheduleRunFrequency: 'Daily'
                scheduleRunTimes: [
                  '2018-01-10T18:30:00Z'
                ]
                scheduleWeeklyFrequency: 0
              }
            }
            {
              policyType: 'Log'
              retentionPolicy: {
                retentionDuration: {
                  count: 30
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
      backupType: 'SQL'
      recoveryServicesVault: {
        id: '/subscriptions/6d875e77-e412-4d7d-9af4-8895278b4443/resourceGroups/test-rg/providers/Microsoft.RecoveryServices/vaults/test-vault'
        vaultType: 'Existing'
      }
    }
  }
  tags: {
  }
}
```

Create a db backup connection with an existing backup policy.
```bicep
resource exampleResource 'Microsoft.Workloads/connectors/acssBackups@2023-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
    backupData: {
      backupPolicy: {
        name: 'defaultDbPolicy'
      }
      backupType: 'SQL'
      recoveryServicesVault: {
        id: '/subscriptions/6d875e77-e412-4d7d-9af4-8895278b4443/resourceGroups/test-rg/providers/Microsoft.RecoveryServices/vaults/test-vault'
        vaultType: 'Existing'
      }
    }
  }
  tags: {
  }
}
```

Create a HANA backup connection with a new backup policy.
```bicep
resource exampleResource 'Microsoft.Workloads/connectors/acssBackups@2023-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
    backupData: {
      backupPolicy: {
        name: 'defaultHanaPolicy'
        properties: {
          backupManagementType: 'AzureWorkload'
          protectedItemsCount: 0
          settings: {
            isCompression: false
            issqlcompression: false
            timeZone: 'UTC'
          }
          subProtectionPolicy: [
            {
              policyType: 'Full'
              retentionPolicy: {
                dailySchedule: {
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
                    '2022-11-29T19:30:00.000Z'
                  ]
                }
                retentionPolicyType: 'LongTermRetentionPolicy'
                weeklySchedule: {
                  daysOfTheWeek: [
                    'Sunday'
                  ]
                  retentionDuration: {
                    count: 104
                    durationType: 'Weeks'
                  }
                  retentionTimes: [
                    '2022-11-29T19:30:00.000Z'
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
                    '2022-11-29T19:30:00.000Z'
                  ]
                }
              }
              schedulePolicy: {
                schedulePolicyType: 'SimpleSchedulePolicy'
                scheduleRunDays: [
                  'Sunday'
                ]
                scheduleRunFrequency: 'Weekly'
                scheduleRunTimes: [
                  '2022-11-29T19:30:00.000Z'
                ]
              }
              tieringPolicy: {
                ArchivedRP: {
                  tieringMode: 'DoNotTier'
                }
              }
            }
            {
              policyType: 'Differential'
              retentionPolicy: {
                retentionDuration: {
                  count: 30
                  durationType: 'Days'
                }
                retentionPolicyType: 'SimpleRetentionPolicy'
              }
              schedulePolicy: {
                schedulePolicyType: 'SimpleSchedulePolicy'
                scheduleRunDays: [
                  'Monday'
                ]
                scheduleRunFrequency: 'Weekly'
                scheduleRunTimes: [
                  '2022-09-29T02:00:00Z'
                ]
                scheduleWeeklyFrequency: 0
              }
            }
            {
              policyType: 'Log'
              retentionPolicy: {
                retentionDuration: {
                  count: 20
                  durationType: 'Days'
                }
                retentionPolicyType: 'SimpleRetentionPolicy'
              }
              schedulePolicy: {
                scheduleFrequencyInMins: 120
                schedulePolicyType: 'LogSchedulePolicy'
              }
            }
          ]
          workLoadType: 'SAPHanaDatabase'
        }
      }
      backupType: 'HANA'
      dbInstanceSnapshotBackupPolicy: {
        name: 'defaultDbInstanceSnapshotPolicy'
        properties: {
          backupManagementType: 'AzureWorkload'
          settings: {
            isCompression: false
            issqlcompression: false
            timeZone: 'UTC'
          }
          subProtectionPolicy: [
            {
              policyType: 'SnapshotFull'
              schedulePolicy: {
                schedulePolicyType: 'SimpleSchedulePolicy'
                scheduleRunDays: {
                }
                scheduleRunFrequency: 'Daily'
                scheduleRunTimes: [
                  '2023-09-18T06:30:00.000Z'
                ]
              }
              snapshotBackupAdditionalDetails: {
                instantRPDetails: 'test-rg'
                instantRpRetentionRangeInDays: 1
                userAssignedManagedIdentityDetails: {
                  identityArmId: '/subscriptions/6d875e77-e412-4d7d-9af4-8895278b4443/resourcegroups/test-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testMsi'
                  identityName: 'testMsi'
                  userAssignedIdentityProperties: {
                    clientId: 'c3a877cf-51f8-4031-8f17-ab562d1e7737'
                    principalId: '2f5834bd-4b86-4d85-a8df-6dd829a6418c'
                  }
                }
              }
            }
          ]
          workLoadType: 'SAPHanaDBInstance'
        }
      }
      hdbuserstoreKeyName: 'abcd'
      instanceNumber: '00'
      recoveryServicesVault: {
        name: 'test-vault'
        resourceGroup: 'test-rg'
        vaultType: 'New'
      }
      sslConfiguration: {
        sslCryptoProvider: 'commoncrypto'
        sslHostNameInCertificate: 'hostname'
        sslKeyStore: 'sapsrv.pse'
        sslTrustStore: 'sapsrv.pse'
      }
    }
  }
  tags: {
  }
}
```

Create a SQL backup connection with a new backup policy.
```bicep
resource exampleResource 'Microsoft.Workloads/connectors/acssBackups@2023-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
    backupData: {
      backupPolicy: {
        name: 'defaultSqlPolicy'
        properties: {
          backupManagementType: 'AzureWorkload'
          protectedItemsCount: 0
          settings: {
            isCompression: true
            issqlcompression: true
            timeZone: 'UTC'
          }
          subProtectionPolicy: [
            {
              policyType: 'Full'
              retentionPolicy: {
                dailySchedule: {
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
                    '2022-11-29T19:30:00.000Z'
                  ]
                }
                retentionPolicyType: 'LongTermRetentionPolicy'
                weeklySchedule: {
                  daysOfTheWeek: [
                    'Sunday'
                  ]
                  retentionDuration: {
                    count: 104
                    durationType: 'Weeks'
                  }
                  retentionTimes: [
                    '2022-11-29T19:30:00.000Z'
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
                    '2022-11-29T19:30:00.000Z'
                  ]
                }
              }
              schedulePolicy: {
                schedulePolicyType: 'SimpleSchedulePolicy'
                scheduleRunDays: [
                  'Sunday'
                ]
                scheduleRunFrequency: 'Weekly'
                scheduleRunTimes: [
                  '2022-11-29T19:30:00.000Z'
                ]
              }
              tieringPolicy: {
                ArchivedRP: {
                  duration: 45
                  durationType: 'Days'
                  tieringMode: 'TierAfter'
                }
              }
            }
            {
              policyType: 'Differential'
              retentionPolicy: {
                retentionDuration: {
                  count: 30
                  durationType: 'Days'
                }
                retentionPolicyType: 'SimpleRetentionPolicy'
              }
              schedulePolicy: {
                schedulePolicyType: 'SimpleSchedulePolicy'
                scheduleRunDays: [
                  'Monday'
                ]
                scheduleRunFrequency: 'Weekly'
                scheduleRunTimes: [
                  '2022-09-29T02:00:00Z'
                ]
                scheduleWeeklyFrequency: 0
              }
            }
            {
              policyType: 'Log'
              retentionPolicy: {
                retentionDuration: {
                  count: 20
                  durationType: 'Days'
                }
                retentionPolicyType: 'SimpleRetentionPolicy'
              }
              schedulePolicy: {
                scheduleFrequencyInMins: 120
                schedulePolicyType: 'LogSchedulePolicy'
              }
            }
          ]
          workLoadType: 'SQLDataBase'
        }
      }
      backupType: 'SQL'
      recoveryServicesVault: {
        name: 'test-vault'
        resourceGroup: 'test-rg'
        vaultType: 'New'
      }
    }
  }
  tags: {
  }
}
```

Create a VM backup connection with a new backup policy with tieringPolicy.
```bicep
resource exampleResource 'Microsoft.Workloads/connectors/acssBackups@2023-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
    backupData: {
      backupPolicy: {
        name: 'defaultVmPolicy'
        properties: {
          backupManagementType: 'AzureIaasVM'
          instantRPDetails: {
            azureBackupRGNamePrefix: 'dasas'
            azureBackupRGNameSuffix: 'a'
          }
          instantRpRetentionRangeInDays: 2
          policyType: 'V1'
          protectedItemsCount: 0
          retentionPolicy: {
            dailySchedule: {
              retentionDuration: {
                count: 30
                durationType: 'Days'
              }
              retentionTimes: [
                '2022-11-29T19:30:00.000Z'
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
                '2022-11-29T19:30:00.000Z'
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
                '2022-11-29T19:30:00.000Z'
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
                '2022-11-29T19:30:00.000Z'
              ]
            }
          }
          schedulePolicy: {
            schedulePolicyType: 'SimpleSchedulePolicy'
            scheduleRunDays: {
            }
            scheduleRunFrequency: 'Daily'
            scheduleRunTimes: [
              '2022-11-29T19:30:00.000Z'
            ]
          }
          tieringPolicy: {
            ArchivedRP: {
              duration: 3
              durationType: 'Months'
              tieringMode: 'TierAfter'
            }
          }
          timeZone: 'UTC'
        }
      }
      backupType: 'VM'
      diskExclusionProperties: {
        diskLunList: [
        ]
        isInclusionList: true
      }
      recoveryServicesVault: {
        name: 'test-vault'
        resourceGroup: 'test-rg'
        vaultType: 'New'
      }
    }
  }
  tags: {
  }
}
```

Create a vm backup connection with a new backup policy.
```bicep
resource exampleResource 'Microsoft.Workloads/connectors/acssBackups@2023-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
    backupData: {
      backupPolicy: {
        name: 'defaultVmPolicy'
        properties: {
          backupManagementType: 'AzureIaasVM'
          instantRPDetails: {
          }
          instantRpRetentionRangeInDays: 2
          protectedItemsCount: 0
          retentionPolicy: {
            dailySchedule: {
              retentionDuration: {
                count: 30
                durationType: 'Days'
              }
              retentionTimes: [
                '2018-01-10T18:30:00Z'
              ]
            }
            retentionPolicyType: 'LongTermRetentionPolicy'
          }
          schedulePolicy: {
            schedulePolicyType: 'SimpleSchedulePolicy'
            scheduleRunFrequency: 'Daily'
            scheduleRunTimes: [
              '2018-01-10T18:30:00Z'
            ]
            scheduleWeeklyFrequency: 0
          }
        }
      }
      backupType: 'VM'
      diskExclusionProperties: {
        diskLunList: [
        ]
        isInclusionList: true
      }
      recoveryServicesVault: {
        name: 'test-vault'
        resourceGroup: 'test-rg'
        vaultType: 'New'
      }
    }
  }
  tags: {
  }
}
```

Create a vm backup connection with an existing backup policy.
```bicep
resource exampleResource 'Microsoft.Workloads/connectors/acssBackups@2023-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
    backupData: {
      backupPolicy: {
        name: 'defaultVmPolicy'
      }
      backupType: 'VM'
      diskExclusionProperties: {
        diskLunList: [
        ]
        isInclusionList: true
      }
      recoveryServicesVault: {
        id: '/subscriptions/6d875e77-e412-4d7d-9af4-8895278b4443/resourceGroups/test-rg/providers/Microsoft.RecoveryServices/vaults/test-vault'
        vaultType: 'Existing'
      }
    }
  }
  tags: {
  }
}
```
