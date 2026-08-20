# Microsoft.GraphServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.graphservices/accounts

Create Account resource
```bicep
resource exampleResource 'Microsoft.GraphServices/accounts@2022-09-22-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    appId: '11111111-aaaa-1111-bbbb-111111111111'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```
