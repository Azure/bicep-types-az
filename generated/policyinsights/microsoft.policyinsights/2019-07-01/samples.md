# Microsoft.PolicyInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.policyinsights/remediations

Create remediation at management group scope
```bicep
resource exampleResource 'Microsoft.PolicyInsights/remediations@2019-07-01' = {
  name: 'example'
  properties: {
    policyAssignmentId: '/providers/microsoft.management/managementGroups/financeMg/providers/microsoft.authorization/policyassignments/b101830944f246d8a14088c5'
  }
}
```
