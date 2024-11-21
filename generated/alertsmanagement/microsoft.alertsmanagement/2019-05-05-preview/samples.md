# Microsoft.AlertsManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.alertsmanagement/actionrules

PutActionRule
```bicep
resource exampleResource 'Microsoft.AlertsManagement/actionRules@2019-05-05-preview' = {
  name: 'example'
  location: 'Global'
  properties: {
    type: 'Suppression'
    description: 'Action rule on resource group for daily suppression'
    conditions: {
      monitorCondition: {
        operator: 'Equals'
        values: [
          'Fired'
        ]
      }
      monitorService: {
        operator: 'Equals'
        values: [
          'Platform'
          'Application Insights'
        ]
      }
      severity: {
        operator: 'Equals'
        values: [
          'Sev0'
          'Sev2'
        ]
      }
      targetResourceType: {
        operator: 'NotEquals'
        values: [
          'Microsoft.Compute/VirtualMachines'
        ]
      }
    }
    scope: {
      scopeType: 'ResourceGroup'
      values: [
        '/subscriptions/1e3ff1c0-771a-4119-a03b-be82a51e232d/resourceGroups/alertscorrelationrg'
      ]
    }
    status: 'Enabled'
    suppressionConfig: {
      recurrenceType: 'Daily'
      schedule: {
        endDate: '12/18/2018'
        endTime: '14:00:00'
        startDate: '12/09/2018'
        startTime: '06:00:00'
      }
    }
  }
  tags: {
  }
}
```
