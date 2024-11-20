# Microsoft.Databricks

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
