# Microsoft.ComputeSchedule
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.computeschedule/scheduledactions

ScheduledActions_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ComputeSchedule/scheduledActions@2026-03-01-preview' = {
  name: 'example'
  location: 'hwhsvnvuwsjwu'
  properties: {
    actionType: 'Start'
    disabled: true
    endTime: '2026-03-12T02:39:45.062Z'
    notificationSettings: [
      {
        type: 'Email'
        destination: 'zaaoabozbhyuhejwsrennfsxowp'
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
          retryCount: 19
          retryWindowInMinutes: 3
        }
      }
      requestedDaysOfTheMonth: [
        18
      ]
      requestedMonths: [
        'January'
      ]
      requestedWeekDays: [
        'Monday'
      ]
      scheduledTime: '12:00:00'
      timeZone: 'ywgarwvwqegtdsdvv'
    }
    startTime: '2026-03-12T02:39:45.061Z'
  }
  tags: {
    key1458: 'ahuv'
  }
}
```
