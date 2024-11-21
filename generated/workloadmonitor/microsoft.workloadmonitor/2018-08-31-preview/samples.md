# Microsoft.WorkloadMonitor

## microsoft.workloadmonitor/notificationsettings

NotificationSettings_Update
```bicep
resource exampleResource 'Microsoft.WorkloadMonitor/notificationSettings@2018-08-31-preview' = {
  name: 'example'
  properties: {
    actionGroupResourceIds: [
      '/subscriptions/12c5bb75-2c2c-44b1-8d7d-cbf4d12ff5c1/resourceGroups/vgajulaRG/providers/microsoft.insights/actiongroups/wli-we'
    ]
  }
}
```
