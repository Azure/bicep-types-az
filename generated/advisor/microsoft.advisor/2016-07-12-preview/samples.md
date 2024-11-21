# Microsoft.Advisor
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.advisor/recommendations/suppressions

CreateSuppression
```bicep
resource exampleResource 'Microsoft.Advisor/recommendations/suppressions@2016-07-12-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'suppressionName1'
  type: 'Microsoft.Advisor/suppressions'
  id: '/resourceUri/providers/Microsoft.Advisor/recommendations/recommendationId/suppressions/suppressionName1'
  ttl: '07:00:00:00'
}
```
