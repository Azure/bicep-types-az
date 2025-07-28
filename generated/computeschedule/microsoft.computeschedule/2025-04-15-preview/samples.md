# Microsoft.ComputeSchedule
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.computeschedule/scheduledactions

ScheduledActions_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ComputeSchedule/scheduledActions@2025-04-15-preview' = {
  name: 'example'
  location: 'vmuhgdgipeypkcv'
  properties: {
    actionType: 'Start'
    disabled: true
    endTime: '2025-04-17T00:23:55.286Z'
    notificationSettings: [
      {
        type: 'Email'
        destination: 'wbhryycyolvnypjxzlawwvb'
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
          retryCount: 17
          retryWindowInMinutes: 29
        }
      }
      requestedDaysOfTheMonth: [
        15
      ]
      requestedMonths: [
        'January'
      ]
      requestedWeekDays: [
        'Monday'
      ]
      scheduledTime: '19:00:00'
      timeZone: 'g'
    }
    startTime: '2025-04-17T00:23:55.281Z'
  }
  tags: {
    key2102: 'obwsqwdydpkscnzceopxgkrhrxtdhv'
  }
}
```
