# Microsoft.Consumption

## microsoft.consumption/budgets

CreateOrUpdateBudget
```bicep
resource exampleResource 'Microsoft.Consumption/budgets@2017-12-30-preview' = {
  name: 'example'
  eTag: '"1d34d016a593709"'
  properties: {
    amount: 100.65
    category: 'Cost'
    notifications: {
      Actual_GreaterThan_80_Percent: {
        contactEmails: [
          'johndoe@contoso.com'
          'janesmith@contoso.com'
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
