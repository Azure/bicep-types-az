# Microsoft.Syntex
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.syntex/documentprocessors

DocumentProcessor_Create
```bicep
resource exampleResource 'Microsoft.Syntex/documentProcessors@2022-09-15-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    spoTenantId: 'e9bb744b-9558-4dc6-9e50-a3297e3332fa'
    spoTenantUrl: 'https://test123.sharepoint.com'
  }
  tags: {
    additionalProp1: 'string1'
    additionalProp2: 'string2'
    additionalProp3: 'string3'
  }
}
```
