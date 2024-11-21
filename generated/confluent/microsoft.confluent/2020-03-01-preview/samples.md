# Microsoft.Confluent
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.confluent/organizations

Organization_Create
```bicep
resource exampleResource 'Microsoft.Confluent/organizations@2020-03-01-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    offerDetail: {
      id: 'string'
      planId: 'string'
      planName: 'string'
      publisherId: 'string'
      termUnit: 'string'
    }
    userDetail: {
      emailAddress: 'contoso@microsoft.com'
      firstName: 'string'
      lastName: 'string'
    }
  }
  tags: {
    Environment: 'Dev'
  }
}
```
