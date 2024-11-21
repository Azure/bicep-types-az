# Microsoft.Consumption

## microsoft.consumption/budgets

CreateOrUpdateBudget
```bicep
resource exampleResource 'Microsoft.Consumption/budgets@2018-03-31' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    amount: 100.65
    category: 'Cost'
    filters: {
      meters: [
        '00000000-0000-0000-0000-000000000000'
      ]
      resourceGroups: [
        'MYDEVTESTRG'
      ]
      resources: [
        '/subscriptions/{subscription-id}/resourceGroups/MYDEVTESTRG/providers/Microsoft.Compute/virtualMachines/MYVM2'
        '/subscriptions/{subscription-id}/resourceGroups/MYDEVTESTRG/providers/Microsoft.Compute/virtualMachines/platformcloudplatformGeneric1'
      ]
      tags: {
        category: [
          'Dev'
          'Prod'
        ]
        department: [
          'engineering'
          'sales'
        ]
      }
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
