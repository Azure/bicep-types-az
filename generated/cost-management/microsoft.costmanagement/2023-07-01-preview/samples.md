# Microsoft.CostManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.costmanagement/exports

ExportCreateOrUpdateByBillingAccount
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2023-07-01-preview' = {
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
      recurrence: 'Daily'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ExportCreateOrUpdateByDepartment
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2023-07-01-preview' = {
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
          dataVersion: '2023-05-01'
        }
        granularity: 'Daily'
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    exportDescription: 'This is a test export.'
    partitionData: true
    schedule: {
      recurrence: 'Daily'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ExportCreateOrUpdateByEnrollmentAccount
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2023-07-01-preview' = {
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
          dataVersion: '2023-05-01'
        }
        granularity: 'Daily'
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    exportDescription: 'This is a test export.'
    partitionData: true
    schedule: {
      recurrence: 'Daily'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ExportCreateOrUpdateByManagementGroup
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2023-07-01-preview' = {
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
          dataVersion: '2023-05-01'
        }
        granularity: 'Daily'
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    exportDescription: 'This is a test export.'
    partitionData: true
    schedule: {
      recurrence: 'Daily'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ExportCreateOrUpdateByResourceGroup
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2023-07-01-preview' = {
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
          dataVersion: '2023-05-01'
        }
        granularity: 'Daily'
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    exportDescription: 'This is a test export.'
    partitionData: true
    schedule: {
      recurrence: 'Daily'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ExportCreateOrUpdateBySubscription
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2023-07-01-preview' = {
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
          dataVersion: '2023-05-01'
        }
        granularity: 'Daily'
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    exportDescription: 'This is a test export.'
    partitionData: true
    schedule: {
      recurrence: 'Daily'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

## microsoft.costmanagement/scheduledactions

CreateOrUpdatePrivateScheduledAction
```bicep
resource exampleResource 'Microsoft.CostManagement/scheduledActions@2023-07-01-preview' = {
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

## microsoft.costmanagement/views

CreateOrUpdatePrivateView
```bicep
resource exampleResource 'Microsoft.CostManagement/views@2023-07-01-preview' = {
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
