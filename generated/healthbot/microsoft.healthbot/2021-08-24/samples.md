# Microsoft.HealthBot

## microsoft.healthbot/healthbots

BotCreate
```bicep
resource exampleResource 'Microsoft.HealthBot/healthBots@2021-08-24' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      /subscriptions/subscription-id/resourcegroups/myrg/providers/microsoft.managedidentity/userassignedidentities/my-mi: {
      }
      /subscriptions/subscription-id/resourcegroups/myrg/providers/microsoft.managedidentity/userassignedidentities/my-mi2: {
      }
    }
  }
  location: 'East US'
  sku: {
    name: 'F0'
  }
}
```
