# Microsoft.ProfessionalService

## microsoft.professionalservice/resources

Create subscription level ProfessionalService resource (indefinite term)
```bicep
resource exampleResource 'Microsoft.ProfessionalService/resources@2023-07-01-preview' = {
  name: 'example'
  name: 'MyContosoPS'
  location: 'global'
  properties: {
    offerId: 'testprofservice'
    publisherId: 'microsoft-contoso'
    quoteId: 'quoteabc'
    skuId: 'ff051f4f-a6d9-4cbc-8d9a-2a41bd468abc'
  }
}
```

Create subscription level ProfessionalService resource (with term)
```bicep
resource exampleResource 'Microsoft.ProfessionalService/resources@2023-07-01-preview' = {
  name: 'example'
  name: 'MyContosoPS'
  location: 'global'
  properties: {
    billingPeriod: 'P1Y'
    offerId: 'testprofservice'
    publisherId: 'microsoft-contoso'
    quoteId: 'quoteabc'
    skuId: 'ff051f4f-a6d9-4cbc-8d9a-2a41bd468abc'
    termUnit: 'P3Y'
  }
}
```
