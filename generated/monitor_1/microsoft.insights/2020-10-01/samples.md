# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/activitylogalerts

Create or update an Activity Log Alert rule
```bicep
resource exampleResource 'Microsoft.Insights/activityLogAlerts@2020-10-01' = {
  name: 'example'
  location: 'Global'
  properties: {
    description: 'Description of sample Activity Log Alert rule.'
    actions: {
      actionGroups: [
        {
          actionGroupId: '/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/MyResourceGroup/providers/Microsoft.Insights/actionGroups/SampleActionGroup'
          webhookProperties: {
            sampleWebhookProperty: 'SamplePropertyValue'
          }
        }
      ]
    }
    condition: {
      allOf: [
        {
          equals: 'Administrative'
          field: 'category'
        }
        {
          equals: 'Error'
          field: 'level'
        }
      ]
    }
    enabled: true
    scopes: [
      '/subscriptions/187f412d-1758-44d9-b052-169e2564721d'
    ]
  }
  tags: {
  }
}
```

Create or update an Activity Log Alert rule with 'anyOf' condition
```bicep
resource exampleResource 'Microsoft.Insights/activityLogAlerts@2020-10-01' = {
  name: 'example'
  location: 'Global'
  properties: {
    description: 'Description of sample Activity Log Alert rule with \'anyOf\' condition.'
    actions: {
      actionGroups: [
        {
          actionGroupId: '/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/MyResourceGroup/providers/Microsoft.Insights/actionGroups/SampleActionGroup'
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
        {
          anyOf: [
            {
              equals: 'Incident'
              field: 'properties.incidentType'
            }
            {
              equals: 'Maintenance'
              field: 'properties.incidentType'
            }
          ]
        }
      ]
    }
    enabled: true
    scopes: [
      'subscriptions/187f412d-1758-44d9-b052-169e2564721d'
    ]
  }
  tags: {
  }
}
```

Create or update an Activity Log Alert rule with 'containsAny'
```bicep
resource exampleResource 'Microsoft.Insights/activityLogAlerts@2020-10-01' = {
  name: 'example'
  location: 'Global'
  properties: {
    description: 'Description of sample Activity Log Alert rule with \'containsAny\'.'
    actions: {
      actionGroups: [
        {
          actionGroupId: '/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/MyResourceGroup/providers/Microsoft.Insights/actionGroups/SampleActionGroup'
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
        {
          containsAny: [
            'North Europe'
            'West Europe'
          ]
          field: 'properties.impactedServices[*].ImpactedRegions[*].RegionName'
        }
      ]
    }
    enabled: true
    scopes: [
      'subscriptions/187f412d-1758-44d9-b052-169e2564721d'
    ]
  }
  tags: {
  }
}
```
