# Microsoft.HealthBot
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.healthbot/healthbots

BotCreate
```bicep
resource exampleResource 'Microsoft.HealthBot/healthBots@2025-11-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/subscription-id/resourcegroups/myrg/providers/microsoft.managedidentity/userassignedidentities/my-mi': {
      }
      '/subscriptions/subscription-id/resourcegroups/myrg/providers/microsoft.managedidentity/userassignedidentities/my-mi2': {
      }
    }
  }
  location: 'East US'
  sku: {
    name: 'F0'
  }
}
```
