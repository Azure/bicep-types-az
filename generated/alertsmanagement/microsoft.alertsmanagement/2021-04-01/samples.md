# microsoft.alertsManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.alertsmanagement/smartdetectoralertrules

Create or update a Smart Detector alert rule
```bicep
resource exampleResource 'microsoft.alertsManagement/smartDetectorAlertRules@2021-04-01' = {
  name: 'example'
  properties: {
    description: 'Sample smart detector alert rule description'
    actionGroups: {
      customEmailSubject: 'My custom email subject'
      customWebhookPayload: '{"AlertRuleName":"#alertrulename"}'
      groupIds: [
        '/subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourcegroups/actionGroups/providers/microsoft.insights/actiongroups/MyActionGroup'
      ]
    }
    detector: {
      id: 'VMMemoryLeak'
    }
    frequency: 'PT5M'
    scope: [
      '/subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/MyVms/providers/Microsoft.Compute/virtualMachines/vm1'
    ]
    severity: 'Sev3'
    state: 'Enabled'
    throttling: {
      duration: 'PT20M'
    }
  }
}
```
