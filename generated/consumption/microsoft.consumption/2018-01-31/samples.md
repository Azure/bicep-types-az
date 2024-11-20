# Microsoft.Consumption

## microsoft.consumption/budgets

CreateOrUpdateBudget
```bicep
resource exampleResource 'Microsoft.Consumption/budgets@2018-01-31' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    amount: 100.65
    category: 'Cost'
    filters: {
      meters: [
        'fe167397-a38d-43c3-9bb3-8e2907e56a41'
      ]
      resourceGroups: [
        'MPDEVTESTRG'
      ]
      resources: [
        '/subscriptions/{subscription-id}/resourceGroups/MPDEVTESTRG/providers/Microsoft.Compute/virtualMachines/MSAWSIFT2'
        '/subscriptions/{subscription-id}/resourceGroups/MPDEVTESTRG/providers/Microsoft.Compute/virtualMachines/platformcloudplatformGeneric1'
      ]
    }
    notifications: {
      Actual_GreaterThan_80_Percent: {
        contactEmails: [
          'johndoe@contoso.com'
          'janesmith@contoso.com'
        ]
        contactGroups: [
          '/subscriptions/{subscription-id}/resourceGroups/MPDEVTESTRG/providers/microsoft.insights/actionGroups/SampleActionGroup'
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
