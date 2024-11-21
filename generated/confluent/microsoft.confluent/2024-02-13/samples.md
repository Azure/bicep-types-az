# Microsoft.Confluent
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.confluent/organizations

Organization_Create
```bicep
resource exampleResource 'Microsoft.Confluent/organizations@2024-02-13' = {
  name: 'example'
  location: 'West US'
  properties: {
    linkOrganization: {
      token: 'string'
    }
    offerDetail: {
      id: 'string'
      planId: 'string'
      planName: 'string'
      privateOfferId: 'string'
      privateOfferIds: [
        'string'
      ]
      publisherId: 'string'
      termUnit: 'string'
    }
    userDetail: {
      aadEmail: 'contoso@microsoft.com'
      emailAddress: 'contoso@microsoft.com'
      firstName: 'string'
      lastName: 'string'
      userPrincipalName: 'contoso@microsoft.com'
    }
  }
  tags: {
    Environment: 'Dev'
  }
}
```
