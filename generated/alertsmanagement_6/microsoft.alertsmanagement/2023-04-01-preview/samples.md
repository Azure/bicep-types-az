# Microsoft.AlertsManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.alertsmanagement/tenantactivitylogalerts

Create or update a Tenant Activity Log Alert rule for tenant level events
```bicep
resource exampleResource 'Microsoft.AlertsManagement/tenantActivityLogAlerts@2023-04-01-preview' = {
  name: 'example'
  location: 'Global'
  properties: {
    description: 'Description of sample Activity Log Alert service health rule on tenant level events.'
    actions: {
      actionGroups: [
        {
          actionGroupId: '/providers/Microsoft.Management/ManagementGroups/72f988bf-86f1-41af-91ab-2d7cd011db47/providers/Microsoft.Insights/actionGroups/SampleActionGroup'
          actionProperties: {
            'Email.Title': 'my email title'
          }
          webhookProperties: {
            sampleWebhookProperty: 'SamplePropertyValue'
          }
        }
      ]
    }
    condition: {
      allOf: [
        {
          equals: 'ServiceHealth'
          field: 'category'
        }
      ]
    }
    enabled: true
    tenantScope: '72f988bf-86f1-41af-91ab-2d7cd011db47'
  }
  tags: {
  }
}
```
