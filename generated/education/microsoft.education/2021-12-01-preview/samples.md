# Microsoft.Education
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.education/labs

CreateLab
```bicep
resource exampleResource 'Microsoft.Education/labs@2021-12-01-preview' = {
  name: 'example'
  properties: {
    description: 'example lab description'
    budgetPerStudent: {
      currency: 'USD'
      value: 100
    }
    displayName: 'example lab'
    expirationDate: '2021-12-09T22:11:29.422Z'
  }
}
```

## microsoft.education/labs/students

Student
```bicep
resource exampleResource 'Microsoft.Education/labs/students@2021-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    budget: {
      currency: 'USD'
      value: 100
    }
    email: 'test@contoso.com'
    expirationDate: '2021-11-09T22:13:21.795Z'
    firstName: 'test'
    lastName: 'user'
    role: 'Student'
  }
}
```
