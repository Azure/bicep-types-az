# Microsoft.Authorization

## microsoft.authorization/policyexemptions

Create or update a policy exemption
```bicep
resource exampleResource 'Microsoft.Authorization/policyExemptions@2020-07-01-preview' = {
  name: 'example'
  properties: {
    description: 'Exempt demo cluster from limit sku'
    displayName: 'Exempt demo cluster'
    exemptionCategory: 'Waiver'
    metadata: {
      reason: 'Temporary exemption for a expensive VM demo'
    }
    policyAssignmentId: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyAssignments/CostManagement'
    policyDefinitionReferenceIds: [
      'Limit_Skus'
    ]
  }
}
```
