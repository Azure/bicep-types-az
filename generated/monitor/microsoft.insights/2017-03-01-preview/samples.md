# microsoft.insights

## microsoft.insights/activitylogalerts

Create or update an activity log alert
```bicep
resource exampleResource 'microsoft.insights/activityLogAlerts@2017-03-01-preview' = {
  name: 'example'
  location: 'Global'
  properties: {
    description: 'Sample activity log alert description'
    actions: {
      actionGroups: [
        {
          actionGroupId: '/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/Default-ActionGroups/providers/microsoft.insights/actionGroups/SampleActionGroup'
          webhookProperties: {
            sampleWebhookProperty: 'samplePropertyValue'
          }
        }
      ]
    }
    condition: {
      allOf: [
        {
          equals: 'Administrative'
          field: 'Category'
        }
        {
          equals: 'Error'
          field: 'Level'
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
