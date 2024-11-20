# Microsoft.Advisor

## microsoft.advisor/recommendations/suppressions

CreateSuppression
```bicep
resource exampleResource 'Microsoft.Advisor/recommendations/suppressions@2017-04-19' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ttl: '07:00:00:00'
  }
}
```
