# Microsoft.Subscription
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
