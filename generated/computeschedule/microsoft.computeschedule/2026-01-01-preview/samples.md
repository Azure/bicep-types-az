# Microsoft.ComputeSchedule
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.computeschedule/scheduledactions

ScheduledActions_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ComputeSchedule/scheduledActions@2026-01-01-preview' = {
  name: 'example'
  location: 'eiahyxmcciku'
  properties: {
    actionType: 'Start'
    disabled: true
    endTime: '2025-12-10T14:39:52.436Z'
    notificationSettings: [
      {
        type: 'Email'
        destination: 'gdgyfwgpuqagfiaikwyn'
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
          retryWindowInMinutes: 17
        }
      }
      requestedDaysOfTheMonth: [
        2
      ]
      requestedMonths: [
        'January'
      ]
      requestedWeekDays: [
        'Monday'
      ]
      scheduledTime: '10:00:00'
      timeZone: 'yqgrkcggkihcvaf'
    }
    startTime: '2025-12-10T14:39:52.436Z'
  }
  tags: {
    key9509: 'durdwtoxhxmpsqrpyyv'
  }
}
```
