# Microsoft.ComputeSchedule
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.computeschedule/scheduledactions

ScheduledActions_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ComputeSchedule/scheduledActions@2026-04-15-preview' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    actionType: 'Start'
    disabled: true
    endTime: '2026-03-12T02:39:45.062Z'
    notificationSettings: [
      {
        type: 'Email'
        destination: 'admin@contoso.com'
        disabled: true
        language: 'en-us'
      }
    ]
    resourceType: 'VirtualMachine'
    schedule: {
      deadlineType: 'Unknown'
      executionParameters: {
        optimizationPreference: 'Cost'
        retryPolicy: {
          onFailureAction: 'Unknown'
          retryCount: 3
          retryWindowInMinutes: 30
        }
      }
      requestedDaysOfTheMonth: [
        1
      ]
      requestedMonths: [
        'January'
      ]
      requestedWeekDays: [
        'Monday'
      ]
      scheduledTime: '12:00:00'
      timeZone: 'America/Los_Angeles'
    }
    startTime: '2026-03-12T02:39:45.061Z'
  }
  tags: {
    environment: 'production'
  }
}
```
