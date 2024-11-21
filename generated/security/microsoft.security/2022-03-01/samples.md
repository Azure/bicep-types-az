# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/pricings

Update pricing on subscription
```bicep
resource exampleResource 'Microsoft.Security/pricings@2022-03-01' = {
  name: 'example'
  properties: {
    pricingTier: 'Standard'
    subPlan: 'P2'
  }
}
```
