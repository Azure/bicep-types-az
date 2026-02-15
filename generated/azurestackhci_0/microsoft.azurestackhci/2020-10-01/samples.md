# Microsoft.AzureStackHCI
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azurestackhci/clusters

Create cluster
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters@2020-10-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    aadClientId: '24a6e53d-04e5-44d2-b7cc-1b732a847dfc'
    aadTenantId: '7e589cc1-a8b6-4dff-91bd-5ec0fa18db94'
  }
}
```
