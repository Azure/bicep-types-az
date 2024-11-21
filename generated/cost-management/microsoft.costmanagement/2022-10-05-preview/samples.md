# Microsoft.CostManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.costmanagement/markuprules

CreateOrUpdatePrivateMarkupRules
```bicep
resource exampleResource 'Microsoft.CostManagement/markupRules@2022-10-05-preview' = {
  name: 'example'
  properties: {
    description: 'Markup rule for year 2022'
    customerDetails: {
      billingAccountId: 'cff9aa6d-941c-43f2-b6cb-1d2bb34a02b4:780237f3-1aa6-4159-943b-498e0d647dd9'
      billingProfileId: '08eeecee-efb2-40d5-817c-0a254d2e042c'
    }
    endDate: '2022-12-31T00:00:00Z'
    percentage: 5
    startDate: '2022-01-01T00:00:00Z'
  }
}
```

## microsoft.costmanagement/settings

CreateOrUpdateSettingByScope
```bicep
resource exampleResource 'Microsoft.CostManagement/settings@2022-10-05-preview' = {
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
resource exampleResource 'Microsoft.CostManagement/views@2022-10-05-preview' = {
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
