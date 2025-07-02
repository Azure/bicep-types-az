# Microsoft.Authorization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.authorization/variables

Create or update a variable
```bicep
resource exampleResource 'Microsoft.Authorization/variables@2022-08-01-preview' = {
  name: 'example'
  properties: {
    columns: [
      {
        columnName: 'TestColumn'
      }
    ]
  }
}
```

## microsoft.authorization/variables/values

Create or update a variable value
```bicep
resource exampleResource 'Microsoft.Authorization/variables/values@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    values: [
      {
        columnName: 'StringColumn'
        columnValue: 'SampleValue'
      }
      {
        columnName: 'IntegerColumn'
        columnValue: 10
      }
    ]
  }
}
```
