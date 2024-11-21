# Microsoft.CostManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.costmanagement/cloudconnectors

CloudConnector_Put
```bicep
resource exampleResource 'Microsoft.CostManagement/cloudConnectors@2019-03-01-preview' = {
  name: 'example'
  properties: {
    credentialsKey: 'arn:aws:iam::123456789012:role/AzureCostManagementRole'
    credentialsSecret: 'external-id'
    displayName: 'AWS-Consolidated-1'
    reportId: 'HourlyWithResources'
  }
}
```

## microsoft.costmanagement/showbackrules

ShowbackRules
```bicep
resource exampleResource 'Microsoft.CostManagement/showbackRules@2019-03-01-preview' = {
  name: 'example'
  properties: {
    description: 'Welcome to Showback demo'
    ruleType: 'CustomPrice'
    scopes: [
      {
        type: 'Enrollment'
        childScope: {
        }
        id: '292105a9-680d-48cf-bdad-1d023104d69f'
      }
    ]
    status: 'Active'
    details: {
      benefits: [
        'None'
      ]
      markups: [
        {
          percentage: '1.1'
        }
      ]
      pricesheet: 'Pay-As-You-Go (0003P)'
    }
  }
}
```
