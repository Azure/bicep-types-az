# Microsoft.Consumption
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.consumption/budgets

CreateOrUpdateBudget
```bicep
resource exampleResource 'Microsoft.Consumption/budgets@2019-10-01' = {
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
      endDate: '2018-10-31T00:00:00Z'
      startDate: '2017-10-01T00:00:00Z'
    }
  }
}
```
