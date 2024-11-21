# Microsoft.CostManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.costmanagement/scheduledactions

CreateOrUpdatePrivateScheduledAction
```bicep
resource exampleResource 'Microsoft.CostManagement/scheduledActions@2022-04-01-preview' = {
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
