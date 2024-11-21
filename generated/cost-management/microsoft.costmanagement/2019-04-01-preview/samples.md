# Microsoft.CostManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.costmanagement/budgets

CreateOrUpdateBudget
```bicep
resource exampleResource 'Microsoft.CostManagement/budgets@2019-04-01-preview' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    amount: 100.65
    category: 'Cost'
    filter: {
      and: [
        {
          dimension: {
            name: 'ResourceGroupName'
            operator: 'In'
            values: [
              'MYDEVTESTRG'
            ]
          }
        }
        {
          dimension: {
            name: 'ResourceId'
            operator: 'In'
            values: [
              '/subscriptions/{subscription-id}/resourceGroups/MYDEVTESTRG/providers/Microsoft.Compute/virtualMachines/MYVM2'
              '/subscriptions/{subscription-id}/resourceGroups/MYDEVTESTRG/providers/Microsoft.Compute/virtualMachines/platformcloudplatformGeneric1'
            ]
          }
        }
        {
          dimension: {
            name: 'Meter'
            operator: 'In'
            values: [
              '00000000-0000-0000-0000-000000000000'
            ]
          }
        }
        {
          tag: {
            name: 'Dev'
            operator: 'In'
            values: [
              'engineering'
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
          '/subscriptions/{subscription-id}/resourceGroups/MYDEVTESTRG/providers/microsoft.insights/actionGroups/SampleActionGroup'
        ]
        contactRoles: [
          'Contributor'
          'Reader'
        ]
        enabled: true
        operator: 'GreaterThan'
        threshold: 80
      }
    }
    timeGrain: 'Monthly'
    timePeriod: {
      endDate: '2018-10-31T00:00:00Z'
      startDate: '2017-10-01T00:00:00Z'
    }
  }
}
```

## microsoft.costmanagement/views

CreateOrUpdatePrivateView
```bicep
resource exampleResource 'Microsoft.CostManagement/views@2019-04-01-preview' = {
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
      dataset: {
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
