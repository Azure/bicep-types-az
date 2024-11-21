# Microsoft.Databricks
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.databricks/accessconnectors

Create an azure databricks accessConnector with SystemAssigned Identity
```bicep
resource exampleResource 'Microsoft.Databricks/accessConnectors@2022-10-01-preview' = {
  name: 'example'
  location: 'westus'
}
```

Create an azure databricks accessConnector with UserAssigned Identity
```bicep
resource exampleResource 'Microsoft.Databricks/accessConnectors@2022-10-01-preview' = {
  name: 'example'
  location: 'westus'
}
```
