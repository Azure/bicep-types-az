# Microsoft.PolicyInsights

## microsoft.policyinsights/remediations

Create remediation at management group scope
```bicep
resource exampleResource 'Microsoft.PolicyInsights/remediations@2021-10-01' = {
  name: 'example'
  properties: {
    policyAssignmentId: '/providers/microsoft.management/managementGroups/financeMg/providers/microsoft.authorization/policyassignments/b101830944f246d8a14088c5'
  }
}
```
