# Microsoft.Subscription

## microsoft.subscription/subscriptiondefinitions

createSubscriptionDefinition
```bicep
resource exampleResource 'Microsoft.Subscription/subscriptionDefinitions@2017-11-01-preview' = {
  name: 'example'
  properties: {
    offerType: 'MS-AZR-0017P'
    subscriptionDisplayName: 'My Azure Subscription Name'
  }
}
```
