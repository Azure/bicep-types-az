# Microsoft.Communication

## microsoft.communication/communicationservices

Create or update resource
```bicep
resource exampleResource 'Microsoft.Communication/communicationServices@2020-08-20-preview' = {
  name: 'example'
  location: 'Global'
  properties: {
    dataLocation: 'United States'
  }
}
```
