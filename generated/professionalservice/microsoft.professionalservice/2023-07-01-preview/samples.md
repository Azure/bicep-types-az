# Microsoft.ProfessionalService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
