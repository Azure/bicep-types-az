# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/assessmentmetadata

Create security assessment metadata for subscription
```bicep
resource exampleResource 'Microsoft.Security/assessmentMetadata@2025-05-04-preview' = {
  name: 'example'
  properties: {
    description: 'Install an endpoint protection solution on your virtual machines scale sets, to protect them from threats and vulnerabilities.'
    assessmentType: 'CustomerManaged'
    categories: [
      'Compute'
    ]
    displayName: 'Install endpoint protection solution on virtual machine scale sets'
    remediationDescription: 'To install an endpoint protection solution: 1.  <a href="https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-faq#how-do-i-turn-on-antimalware-in-my-virtual-machine-scale-set">Follow the instructions in How do I turn on antimalware in my virtual machine scale set</a>'
    severity: 'Medium'
    threats: [
      'dataExfiltration'
      'dataSpillage'
      'maliciousInsider'
    ]
  }
}
```

## microsoft.security/assessments

Create security recommendation task on a resource
```bicep
resource exampleResource 'Microsoft.Security/assessments@2025-05-04-preview' = {
  name: 'example'
  properties: {
    resourceDetails: {
      source: 'Azure'
    }
    status: {
      code: 'Healthy'
    }
  }
}
```
