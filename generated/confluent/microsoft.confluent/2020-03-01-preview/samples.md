# Microsoft.Confluent

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
