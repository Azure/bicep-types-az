# Microsoft.Confluent

## microsoft.confluent/organizations

Organization_Create
```bicep
resource exampleResource 'Microsoft.Confluent/organizations@2023-08-22' = {
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
