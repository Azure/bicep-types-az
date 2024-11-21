# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/pricings

Update pricing on subscription
```bicep
resource exampleResource 'Microsoft.Security/pricings@2018-06-01' = {
  name: 'example'
  name: 'VirtualMachines'
  type: 'Microsoft.Security/pricings'
  id: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/providers/Microsoft.Security/pricings/VirtualMachines'
  properties: {
    pricingTier: 'Standard'
  }
}
```
