# Microsoft.CostManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.costmanagement/costallocationrules

CostAllocationRulesCreateResourceGroup
```bicep
resource exampleResource 'Microsoft.CostManagement/costAllocationRules@2020-03-01-preview' = {
  name: 'example'
  properties: {
    description: 'This is a testRule'
    status: 'Active'
    details: {
      sourceResources: [
        {
          name: 'ResourceGroupName'
          resourceType: 'Dimension'
          values: [
            'sampleRG'
            'secondRG'
          ]
        }
      ]
      targetResources: [
        {
          name: 'ResourceGroupName'
          policyType: 'FixedProportion'
          resourceType: 'Dimension'
          values: [
            {
              name: 'destinationRG'
              percentage: 45
            }
            {
              name: 'destinationRG2'
              percentage: 54
            }
          ]
        }
      ]
    }
  }
}
```

CostAllocationRulesCreateTag
```bicep
resource exampleResource 'Microsoft.CostManagement/costAllocationRules@2020-03-01-preview' = {
  name: 'example'
  properties: {
    description: 'This is a testRule'
    status: 'Active'
    details: {
      sourceResources: [
        {
          name: 'category'
          resourceType: 'Tag'
          values: [
            'devops'
          ]
        }
      ]
      targetResources: [
        {
          name: 'ResourceGroupName'
          policyType: 'FixedProportion'
          resourceType: 'Dimension'
          values: [
            {
              name: 'destinationRG'
              percentage: 33.33
            }
            {
              name: 'destinationRG2'
              percentage: 33.33
            }
            {
              name: 'destinationRG3'
              percentage: 33.34
            }
          ]
        }
      ]
    }
  }
}
```
