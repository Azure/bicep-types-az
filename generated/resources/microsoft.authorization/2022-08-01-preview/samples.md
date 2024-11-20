# Microsoft.Authorization

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
