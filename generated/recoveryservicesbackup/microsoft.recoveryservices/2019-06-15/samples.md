# Microsoft.RecoveryServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.recoveryservices/vaults/backupconfig

Update Vault Security Config
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupconfig@2019-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enhancedSecurityState: 'Enabled'
    softDeleteFeatureState: 'Enabled'
  }
}
```

## microsoft.recoveryservices/vaults/backupfabrics/protectioncontainers/protecteditems

Enable Protection on Azure IaasVm
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2019-06-15' = {
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
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2019-06-15' = {
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

Create or Update Full Azure Vm Protection Policy
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupPolicies@2019-06-15' = {
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
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupPolicies@2019-06-15' = {
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

Create or Update Simple Azure Vm Protection Policy
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupPolicies@2019-06-15' = {
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