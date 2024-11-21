# Microsoft.CostManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.costmanagement/exports

ExportCreateOrUpdateByBillingAccount
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2021-01-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
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
    schedule: {
      recurrence: 'Weekly'
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
resource exampleResource 'Microsoft.CostManagement/exports@2021-01-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
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
    schedule: {
      recurrence: 'Weekly'
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
resource exampleResource 'Microsoft.CostManagement/exports@2021-01-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
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
    schedule: {
      recurrence: 'Weekly'
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
resource exampleResource 'Microsoft.CostManagement/exports@2021-01-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
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
    schedule: {
      recurrence: 'Weekly'
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
resource exampleResource 'Microsoft.CostManagement/exports@2021-01-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
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
    schedule: {
      recurrence: 'Weekly'
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
resource exampleResource 'Microsoft.CostManagement/exports@2021-01-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
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
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2020-06-01T00:00:00Z'
        to: '2020-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```
