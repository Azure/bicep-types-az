# Microsoft.Databricks

## microsoft.databricks/accessconnectors

Create an azure databricks accessConnector with SystemAssigned Identity
```bicep
resource exampleResource 'Microsoft.Databricks/accessConnectors@2023-05-01' = {
  name: 'example'
  location: 'westus'
}
```

Create an azure databricks accessConnector with UserAssigned Identity
```bicep
resource exampleResource 'Microsoft.Databricks/accessConnectors@2023-05-01' = {
  name: 'example'
  location: 'westus'
}
```
