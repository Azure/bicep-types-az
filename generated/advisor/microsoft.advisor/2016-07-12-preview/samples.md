# Microsoft.Advisor

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
