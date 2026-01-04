# Microsoft.AlertsManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.alertsmanagement/actionrules

Create or update a rule that adds an action group to all alerts in a subscription
```bicep
resource exampleResource 'Microsoft.AlertsManagement/actionRules@2021-08-08' = {
  name: 'example'
  location: 'Global'
  properties: {
    description: 'Add ActionGroup1 to all alerts in the subscription'
    actions: [
      {
        actionGroupIds: [
          '/subscriptions/subId1/resourcegroups/RGId1/providers/microsoft.insights/actiongroups/ActionGroup1'
        ]
        actionType: 'AddActionGroups'
      }
    ]
    enabled: true
    scopes: [
      '/subscriptions/subId1'
    ]
  }
  tags: {
  }
}
```

Create or update a rule that adds two action groups to all Sev0 and Sev1 alerts in two resource groups
```bicep
resource exampleResource 'Microsoft.AlertsManagement/actionRules@2021-08-08' = {
  name: 'example'
  location: 'Global'
  properties: {
    description: 'Add AGId1 and AGId2 to all Sev0 and Sev1 alerts in these resourceGroups'
    actions: [
      {
        actionGroupIds: [
          '/subscriptions/subId1/resourcegroups/RGId1/providers/microsoft.insights/actiongroups/AGId1'
          '/subscriptions/subId1/resourcegroups/RGId1/providers/microsoft.insights/actiongroups/AGId2'
        ]
        actionType: 'AddActionGroups'
      }
    ]
    conditions: [
      {
        field: 'Severity'
        operator: 'Equals'
        values: [
          'sev0'
          'sev1'
        ]
      }
    ]
    enabled: true
    scopes: [
      '/subscriptions/subId1/resourceGroups/RGId1'
      '/subscriptions/subId1/resourceGroups/RGId2'
    ]
  }
  tags: {
  }
}
```

Create or update a rule that removes all action groups from alerts on a specific VM during a one-off maintenance window (1800-2000 at a specific date, Pacific Standard Time)
```bicep
resource exampleResource 'Microsoft.AlertsManagement/actionRules@2021-08-08' = {
  name: 'example'
  location: 'Global'
  properties: {
    description: 'Removes all ActionGroups from all Alerts on VMName during the maintenance window'
    actions: [
      {
        actionType: 'RemoveAllActionGroups'
      }
    ]
    enabled: true
    schedule: {
      effectiveFrom: '2021-04-15T18:00:00'
      effectiveUntil: '2021-04-15T20:00:00'
      timeZone: 'Pacific Standard Time'
    }
    scopes: [
      '/subscriptions/subId1/resourceGroups/RGId1/providers/Microsoft.Compute/virtualMachines/VMName'
    ]
  }
  tags: {
  }
}
```

Create or update a rule that removes all action groups from all alerts in a subscription coming from a specific alert rule
```bicep
resource exampleResource 'Microsoft.AlertsManagement/actionRules@2021-08-08' = {
  name: 'example'
  location: 'Global'
  properties: {
    description: 'Removes all ActionGroups from all Alerts that fire on above AlertRule'
    actions: [
      {
        actionType: 'RemoveAllActionGroups'
      }
    ]
    conditions: [
      {
        field: 'AlertRuleId'
        operator: 'Equals'
        values: [
          '/subscriptions/suubId1/resourceGroups/Rgid2/providers/microsoft.insights/activityLogAlerts/RuleName'
        ]
      }
    ]
    enabled: true
    scopes: [
      '/subscriptions/subId1'
    ]
  }
  tags: {
  }
}
```

Create or update a rule that removes all action groups from all alerts on any VM in two resource groups during a recurring maintenance window (2200-0400 every Sat and Sun, India Standard Time)
```bicep
resource exampleResource 'Microsoft.AlertsManagement/actionRules@2021-08-08' = {
  name: 'example'
  location: 'Global'
  properties: {
    description: 'Remove all ActionGroups from all Vitual machine Alerts during the recurring maintenance'
    actions: [
      {
        actionType: 'RemoveAllActionGroups'
      }
    ]
    conditions: [
      {
        field: 'TargetResourceType'
        operator: 'Equals'
        values: [
          'microsoft.compute/virtualmachines'
        ]
      }
    ]
    enabled: true
    schedule: {
      recurrences: [
        {
          daysOfWeek: [
            'Saturday'
            'Sunday'
          ]
          endTime: '04:00:00'
          recurrenceType: 'Weekly'
          startTime: '22:00:00'
        }
      ]
      timeZone: 'India Standard Time'
    }
    scopes: [
      '/subscriptions/subId1/resourceGroups/RGId1'
      '/subscriptions/subId1/resourceGroups/RGId2'
    ]
  }
  tags: {
  }
}
```

Create or update a rule that removes all action groups outside business hours (Mon-Fri 09:00-17:00, Eastern Standard Time)
```bicep
resource exampleResource 'Microsoft.AlertsManagement/actionRules@2021-08-08' = {
  name: 'example'
  location: 'Global'
  properties: {
    description: 'Remove all ActionGroups outside business hours'
    actions: [
      {
        actionType: 'RemoveAllActionGroups'
      }
    ]
    enabled: true
    schedule: {
      recurrences: [
        {
          endTime: '09:00:00'
          recurrenceType: 'Daily'
          startTime: '17:00:00'
        }
        {
          daysOfWeek: [
            'Saturday'
            'Sunday'
          ]
          recurrenceType: 'Weekly'
        }
      ]
      timeZone: 'Eastern Standard Time'
    }
    scopes: [
      '/subscriptions/subId1'
    ]
  }
  tags: {
  }
}
```
