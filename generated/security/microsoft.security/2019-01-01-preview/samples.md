# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/alertssuppressionrules

Update or create suppression rule for subscription
```bicep
resource exampleResource 'Microsoft.Security/alertsSuppressionRules@2019-01-01-preview' = {
  name: 'example'
  properties: {
    alertType: 'IpAnomaly'
    comment: 'Test VM'
    expirationDateUtc: '2019-12-01T19:50:47.083633Z'
    reason: 'FalsePositive'
    state: 'Enabled'
    suppressionAlertsScope: {
      allOf: [
        {
          field: 'entities.ip.address'
          in: [
            '104.215.95.187'
            '52.164.206.56'
          ]
        }
        {
          contains: 'POWERSHELL.EXE'
          field: 'entities.process.commandline'
        }
      ]
    }
  }
}
```

## microsoft.security/assessmentmetadata

Create security assessment metadata for subscription
```bicep
resource exampleResource 'Microsoft.Security/assessmentMetadata@2019-01-01-preview' = {
  name: 'example'
  properties: {
    description: 'Install an endpoint protection solution on your virtual machines scale sets, to protect them from threats and vulnerabilities.'
    assessmentType: 'CustomerManaged'
    categories: [
      'Compute'
    ]
    displayName: 'Install endpoint protection solution on virtual machine scale sets'
    implementationEffort: 'Low'
    remediationDescription: 'To install an endpoint protection solution: 1.  <a href="https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-faq#how-do-i-turn-on-antimalware-in-my-virtual-machine-scale-set">Follow the instructions in How do I turn on antimalware in my virtual machine scale set</a>'
    severity: 'Medium'
    threats: [
      'dataExfiltration'
      'dataSpillage'
      'maliciousInsider'
    ]
    userImpact: 'Low'
  }
}
```

## microsoft.security/assessments

Create security recommendation task on a resource
```bicep
resource exampleResource 'Microsoft.Security/assessments@2019-01-01-preview' = {
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
