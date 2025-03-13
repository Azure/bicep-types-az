# Microsoft.CostManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.costmanagement/budgets

CreateOrUpdate-Cost-Subscription-Budget
```bicep
resource exampleResource 'Microsoft.CostManagement/budgets@2024-10-01-preview' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    amount: 100.65
    category: 'Cost'
    filter: {
      and: [
        {
          dimensions: {
            name: 'ResourceId'
            operator: 'In'
            values: [
              '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Compute/virtualMachines/MSVM2'
              '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Compute/virtualMachines/platformcloudplatformGeneric1'
            ]
          }
        }
        {
          tags: {
            name: 'category'
            operator: 'In'
            values: [
              'Dev'
              'Prod'
            ]
          }
        }
        {
          tags: {
            name: 'department'
            operator: 'In'
            values: [
              'engineering'
              'sales'
            ]
          }
        }
      ]
    }
    notifications: {
      Actual_GreaterThan_80_Percent: {
        contactEmails: [
          'johndoe@contoso.com'
          'janesmith@contoso.com'
        ]
        contactGroups: [
          '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/microsoft.insights/actionGroups/SampleActionGroup'
        ]
        contactRoles: [
          'Contributor'
          'Reader'
        ]
        enabled: true
        locale: 'en-us'
        operator: 'GreaterThan'
        threshold: 80
        thresholdType: 'Actual'
      }
    }
    timeGrain: 'Monthly'
    timePeriod: {
      endDate: '2024-10-31T00:00:00Z'
      startDate: '2023-04-01T00:00:00Z'
    }
  }
}
```

CreateOrUpdate-ReservationUtilization-BillingAccountEA-AlertRule
```bicep
resource exampleResource 'Microsoft.CostManagement/budgets@2024-10-01-preview' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    category: 'ReservationUtilization'
    filter: {
    }
    notifications: {
      Actual_LessThan_99_Percent: {
        contactEmails: [
          'johndoe@contoso.com'
          'janesmith@contoso.com'
        ]
        enabled: true
        frequency: 'Weekly'
        locale: 'en-us'
        operator: 'LessThan'
        threshold: 99
      }
    }
    timeGrain: 'Last7Days'
    timePeriod: {
      endDate: '2025-04-01T00:00:00Z'
      startDate: '2023-04-01T00:00:00Z'
    }
  }
}
```

CreateOrUpdate-ReservationUtilization-BillingAccountEA-AlertRule-ReservationIdFilter
```bicep
resource exampleResource 'Microsoft.CostManagement/budgets@2024-10-01-preview' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    category: 'ReservationUtilization'
    filter: {
      dimensions: {
        name: 'ReservationId'
        operator: 'In'
        values: [
          '00000000-0000-0000-0000-000000000000'
          '00000000-0000-0000-0000-000000000001'
          '00000000-0000-0000-0000-000000000002'
        ]
      }
    }
    notifications: {
      Actual_LessThan_99_Percent: {
        contactEmails: [
          'johndoe@contoso.com'
          'janesmith@contoso.com'
        ]
        enabled: true
        frequency: 'Weekly'
        locale: 'en-us'
        operator: 'LessThan'
        threshold: 99
      }
    }
    timeGrain: 'Last7Days'
    timePeriod: {
      endDate: '2025-04-01T00:00:00Z'
      startDate: '2023-04-01T00:00:00Z'
    }
  }
}
```

CreateOrUpdate-ReservationUtilization-BillingAccountEA-AlertRule-ReservedResourceTypeFilter
```bicep
resource exampleResource 'Microsoft.CostManagement/budgets@2024-10-01-preview' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    category: 'ReservationUtilization'
    filter: {
      dimensions: {
        name: 'ReservedResourceType'
        operator: 'In'
        values: [
          'VirtualMachines'
          'SqlDatabases'
          'CosmosDb'
        ]
      }
    }
    notifications: {
      Actual_LessThan_99_Percent: {
        contactEmails: [
          'johndoe@contoso.com'
          'janesmith@contoso.com'
        ]
        enabled: true
        frequency: 'Weekly'
        locale: 'en-us'
        operator: 'LessThan'
        threshold: 99
      }
    }
    timeGrain: 'Last7Days'
    timePeriod: {
      endDate: '2025-04-01T00:00:00Z'
      startDate: '2023-04-01T00:00:00Z'
    }
  }
}
```

CreateOrUpdate-ReservationUtilization-BillingProfileMCA-AlertRule-ReservationIdFilter
```bicep
resource exampleResource 'Microsoft.CostManagement/budgets@2024-10-01-preview' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    category: 'ReservationUtilization'
    filter: {
      dimensions: {
        name: 'ReservationId'
        operator: 'In'
        values: [
          '00000000-0000-0000-0000-000000000000'
          '00000000-0000-0000-0000-000000000001'
          '00000000-0000-0000-0000-000000000002'
        ]
      }
    }
    notifications: {
      Actual_LessThan_99_Percent: {
        contactEmails: [
          'johndoe@contoso.com'
          'janesmith@contoso.com'
        ]
        enabled: true
        frequency: 'Daily'
        locale: 'en-us'
        operator: 'LessThan'
        threshold: 99
      }
    }
    timeGrain: 'Last30Days'
    timePeriod: {
      endDate: '2025-04-01T00:00:00Z'
      startDate: '2023-04-01T00:00:00Z'
    }
  }
}
```

CreateOrUpdate-ReservationUtilization-BillingProfileMCA-AlertRule-ReservedResourceTypeFilter
```bicep
resource exampleResource 'Microsoft.CostManagement/budgets@2024-10-01-preview' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    category: 'ReservationUtilization'
    filter: {
      dimensions: {
        name: 'ReservedResourceType'
        operator: 'In'
        values: [
          'VirtualMachines'
          'SqlDatabases'
          'CosmosDb'
        ]
      }
    }
    notifications: {
      Actual_LessThan_99_Percent: {
        contactEmails: [
          'johndoe@contoso.com'
          'janesmith@contoso.com'
        ]
        enabled: true
        frequency: 'Daily'
        locale: 'en-us'
        operator: 'LessThan'
        threshold: 99
      }
    }
    timeGrain: 'Last30Days'
    timePeriod: {
      endDate: '2025-04-01T00:00:00Z'
      startDate: '2023-04-01T00:00:00Z'
    }
  }
}
```

CreateOrUpdate-ReservationUtilization-BillingProfileMCA-AlertRule.json
```bicep
resource exampleResource 'Microsoft.CostManagement/budgets@2024-10-01-preview' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    category: 'ReservationUtilization'
    filter: {
    }
    notifications: {
      Actual_LessThan_99_Percent: {
        contactEmails: [
          'johndoe@contoso.com'
          'janesmith@contoso.com'
        ]
        enabled: true
        frequency: 'Daily'
        locale: 'en-us'
        operator: 'LessThan'
        threshold: 99
      }
    }
    timeGrain: 'Last30Days'
    timePeriod: {
      endDate: '2025-04-01T00:00:00Z'
      startDate: '2023-04-01T00:00:00Z'
    }
  }
}
```

CreateOrUpdate-ReservationUtilization-CustomerCSP-AlertRule-ReservationIdFilter
```bicep
resource exampleResource 'Microsoft.CostManagement/budgets@2024-10-01-preview' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    category: 'ReservationUtilization'
    filter: {
      dimensions: {
        name: 'ReservationId'
        operator: 'In'
        values: [
          '00000000-0000-0000-0000-000000000000'
          '00000000-0000-0000-0000-000000000001'
          '00000000-0000-0000-0000-000000000002'
        ]
      }
    }
    notifications: {
      Actual_LessThan_99_Percent: {
        contactEmails: [
          'johndoe@contoso.com'
          'janesmith@contoso.com'
        ]
        enabled: true
        frequency: 'Daily'
        locale: 'en-us'
        operator: 'LessThan'
        threshold: 99
      }
    }
    timeGrain: 'Last30Days'
    timePeriod: {
      endDate: '2025-04-01T00:00:00Z'
      startDate: '2023-04-01T00:00:00Z'
    }
  }
}
```

CreateOrUpdate-ReservationUtilization-CustomerCSP-AlertRule-ReservedResourceTypeFilter
```bicep
resource exampleResource 'Microsoft.CostManagement/budgets@2024-10-01-preview' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    category: 'ReservationUtilization'
    filter: {
      dimensions: {
        name: 'ReservedResourceType'
        operator: 'In'
        values: [
          'VirtualMachines'
          'SqlDatabases'
          'CosmosDb'
        ]
      }
    }
    notifications: {
      Actual_LessThan_99_Percent: {
        contactEmails: [
          'johndoe@contoso.com'
          'janesmith@contoso.com'
        ]
        enabled: true
        frequency: 'Daily'
        locale: 'en-us'
        operator: 'LessThan'
        threshold: 99
      }
    }
    timeGrain: 'Last30Days'
    timePeriod: {
      endDate: '2025-04-01T00:00:00Z'
      startDate: '2023-04-01T00:00:00Z'
    }
  }
}
```

CreateOrUpdate-ReservationUtilization-CustomerCSP-AlertRule.json
```bicep
resource exampleResource 'Microsoft.CostManagement/budgets@2024-10-01-preview' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    category: 'ReservationUtilization'
    filter: {
    }
    notifications: {
      Actual_LessThan_99_Percent: {
        contactEmails: [
          'johndoe@contoso.com'
          'janesmith@contoso.com'
        ]
        enabled: true
        frequency: 'Daily'
        locale: 'en-us'
        operator: 'LessThan'
        threshold: 99
      }
    }
    timeGrain: 'Last30Days'
    timePeriod: {
      endDate: '2025-04-01T00:00:00Z'
      startDate: '2023-04-01T00:00:00Z'
    }
  }
}
```

## microsoft.costmanagement/costallocationrules

CostAllocationRulesCreateResourceGroup
```bicep
resource exampleResource 'Microsoft.CostManagement/costAllocationRules@2024-10-01-preview' = {
  name: 'example'
  properties: {
    description: 'This is a testRule'
    status: 'Active'
    details: {
      sourceResources: [
        {
          name: 'ResourceGroupName'
          resourceType: 'Dimension'
          values: [
            'sampleRG'
            'secondRG'
          ]
        }
      ]
      targetResources: [
        {
          name: 'ResourceGroupName'
          policyType: 'FixedProportion'
          resourceType: 'Dimension'
          values: [
            {
              name: 'destinationRG'
              percentage: 45
            }
            {
              name: 'destinationRG2'
              percentage: 54
            }
          ]
        }
      ]
    }
  }
}
```

CostAllocationRulesCreateTag
```bicep
resource exampleResource 'Microsoft.CostManagement/costAllocationRules@2024-10-01-preview' = {
  name: 'example'
  properties: {
    description: 'This is a testRule'
    status: 'Active'
    details: {
      sourceResources: [
        {
          name: 'category'
          resourceType: 'Tag'
          values: [
            'devops'
          ]
        }
      ]
      targetResources: [
        {
          name: 'ResourceGroupName'
          policyType: 'FixedProportion'
          resourceType: 'Dimension'
          values: [
            {
              name: 'destinationRG'
              percentage: 33.33
            }
            {
              name: 'destinationRG2'
              percentage: 33.33
            }
            {
              name: 'destinationRG3'
              percentage: 33.34
            }
          ]
        }
      ]
    }
  }
}
```

## microsoft.costmanagement/exports

ExportCreateOrUpdateByBillingAccount
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2024-10-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'centralus'
  properties: {
    format: 'Csv'
    compressionMode: 'gzip'
    dataOverwriteBehavior: 'OverwritePreviousReport'
    definition: {
      type: 'ActualCost'
      dataSet: {
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'ResourceId'
            'ResourceLocation'
            'Quantity'
          ]
          dataVersion: '2023-05-01'
        }
        granularity: 'Daily'
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        type: 'AzureBlob'
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    exportDescription: 'This is a test export.'
    partitionData: true
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-06-30T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ExportCreateOrUpdateByDepartment
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2024-10-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'centralus'
  properties: {
    format: 'Csv'
    compressionMode: 'gzip'
    dataOverwriteBehavior: 'OverwritePreviousReport'
    definition: {
      type: 'ActualCost'
      dataSet: {
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'ResourceId'
            'ResourceLocation'
            'Quantity'
          ]
          dataVersion: '2023-05-01'
        }
        granularity: 'Daily'
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        type: 'AzureBlob'
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    exportDescription: 'This is a test export.'
    partitionData: true
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-06-30T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ExportCreateOrUpdateByEnrollmentAccount
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2024-10-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'centralus'
  properties: {
    format: 'Csv'
    compressionMode: 'gzip'
    dataOverwriteBehavior: 'OverwritePreviousReport'
    definition: {
      type: 'ActualCost'
      dataSet: {
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'ResourceId'
            'ResourceLocation'
            'Quantity'
          ]
          dataVersion: '2023-05-01'
        }
        granularity: 'Daily'
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        type: 'AzureBlob'
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    exportDescription: 'This is a test export.'
    partitionData: true
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-06-30T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ExportCreateOrUpdateByManagementGroup
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2024-10-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'centralus'
  properties: {
    format: 'Csv'
    compressionMode: 'gzip'
    dataOverwriteBehavior: 'OverwritePreviousReport'
    definition: {
      type: 'ActualCost'
      dataSet: {
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'ResourceId'
            'ResourceLocation'
            'Quantity'
          ]
          dataVersion: '2023-05-01'
        }
        granularity: 'Daily'
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        type: 'AzureBlob'
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    exportDescription: 'This is a test export.'
    partitionData: true
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-06-30T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ExportCreateOrUpdateByResourceGroup
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2024-10-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'centralus'
  properties: {
    format: 'Csv'
    compressionMode: 'gzip'
    dataOverwriteBehavior: 'OverwritePreviousReport'
    definition: {
      type: 'ActualCost'
      dataSet: {
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'ResourceId'
            'ResourceLocation'
            'Quantity'
          ]
          dataVersion: '2023-05-01'
        }
        granularity: 'Daily'
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        type: 'AzureBlob'
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    exportDescription: 'This is a test export.'
    partitionData: true
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-06-30T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ExportCreateOrUpdateBySubscription
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2024-10-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'centralus'
  properties: {
    format: 'Csv'
    compressionMode: 'gzip'
    dataOverwriteBehavior: 'OverwritePreviousReport'
    definition: {
      type: 'ActualCost'
      dataSet: {
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'ResourceId'
            'ResourceLocation'
            'Quantity'
          ]
          dataVersion: '2023-05-01'
        }
        granularity: 'Daily'
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        type: 'AzureBlob'
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    exportDescription: 'This is a test export.'
    partitionData: true
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-06-30T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ExportCreateOrUpdateBySubscriptionWithFabricDestination
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2024-10-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'centralus'
  properties: {
    format: 'Delta'
    compressionMode: {
    }
    dataOverwriteBehavior: 'OverwritePreviousReport'
    definition: {
      type: 'ActualCost'
      dataSet: {
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'ResourceId'
            'ResourceLocation'
            'Quantity'
          ]
          dataVersion: '2023-05-01'
        }
        granularity: 'Daily'
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        type: 'MicrosoftFabric'
        microsoftFabricSettings: {
          lakehouse: {
            displayName: 'MyLakehouse'
            id: '00000000-0000-0000-0000-000000000000'
          }
          tableName: 'testexport'
          workspace: {
            displayName: 'MyWorkspace'
            id: '00000000-0000-0000-0000-000000000000'
          }
        }
      }
    }
    exportDescription: 'This is a test export.'
    partitionData: true
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-06-30T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

## microsoft.costmanagement/scheduledactions

CreateOrUpdatePrivateScheduledAction
```bicep
resource exampleResource 'Microsoft.CostManagement/scheduledActions@2024-10-01-preview' = {
  name: 'example'
  kind: 'Email'
  properties: {
    displayName: 'Monthly Cost By Resource'
    notification: {
      subject: 'Cost by resource this month'
      to: [
        'user@gmail.com'
        'team@gmail.com'
      ]
    }
    schedule: {
      daysOfWeek: [
        'Monday'
      ]
      endDate: '2021-06-19T22:21:51.1287144Z'
      frequency: 'Monthly'
      hourOfDay: 10
      startDate: '2020-06-19T22:21:51.1287144Z'
      weeksOfMonth: [
        'First'
        'Third'
      ]
    }
    status: 'Enabled'
    viewId: '/providers/Microsoft.CostManagement/views/swaggerExample'
  }
}
```

## microsoft.costmanagement/settings

CreateOrUpdateSettingByScope
```bicep
resource exampleResource 'Microsoft.CostManagement/settings@2024-10-01-preview' = {
  name: 'example'
  kind: 'taginheritance'
  properties: {
    preferContainerTags: false
  }
}
```

## microsoft.costmanagement/views

CreateOrUpdatePrivateView
```bicep
resource exampleResource 'Microsoft.CostManagement/views@2024-10-01-preview' = {
  name: 'example'
  eTag: '"1d4ff9fe66f1d10"'
  properties: {
    accumulated: 'true'
    chart: 'Table'
    displayName: 'swagger Example'
    kpis: [
      {
        type: 'Forecast'
        enabled: true
        id: {
        }
      }
      {
        type: 'Budget'
        enabled: true
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Consumption/budgets/swaggerDemo'
      }
    ]
    metric: 'ActualCost'
    pivots: [
      {
        name: 'ServiceName'
        type: 'Dimension'
      }
      {
        name: 'MeterCategory'
        type: 'Dimension'
      }
      {
        name: 'swaggerTagKey'
        type: 'TagKey'
      }
    ]
    query: {
      type: 'Usage'
      dataSet: {
        aggregation: {
          totalCost: {
            name: 'PreTaxCost'
            function: 'Sum'
          }
        }
        granularity: 'Daily'
        grouping: [
        ]
        sorting: [
          {
            name: 'UsageDate'
            direction: 'Ascending'
          }
        ]
      }
      timeframe: 'MonthToDate'
    }
  }
}
```
