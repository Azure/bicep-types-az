# Microsoft.PolicyInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.policyinsights/attestations

Create attestation at subscription scope
```bicep
resource exampleResource 'Microsoft.PolicyInsights/attestations@2021-01-01' = {
  name: 'example'
  properties: {
    complianceState: 'Compliant'
    policyAssignmentId: '/subscriptions/35ee058e-5fa0-414c-8145-3ebb8d09b6e2/providers/microsoft.authorization/policyassignments/b101830944f246d8a14088c5'
  }
}
```

Create attestation at subscription scope with all properties
```bicep
resource exampleResource 'Microsoft.PolicyInsights/attestations@2021-01-01' = {
  name: 'example'
  properties: {
    comments: 'This subscription has passed a security audit.'
    complianceState: 'Compliant'
    evidence: [
      {
        description: 'The results of the security audit.'
        sourceUri: 'https://gist.github.com/contoso/9573e238762c60166c090ae16b814011'
      }
    ]
    expiresOn: '2021-06-15T00:00:00Z'
    owner: '55a32e28-3aa5-4eea-9b5a-4cd85153b966'
    policyAssignmentId: '/subscriptions/35ee058e-5fa0-414c-8145-3ebb8d09b6e2/providers/microsoft.authorization/policyassignments/b101830944f246d8a14088c5'
    policyDefinitionReferenceId: '0b158b46-ff42-4799-8e39-08a5c23b4551'
  }
}
```
