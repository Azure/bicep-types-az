# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/assessmentmetadata

Create security assessment metadata for subscription
```bicep
resource exampleResource 'Microsoft.Security/assessmentMetadata@2020-01-01' = {
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
resource exampleResource 'Microsoft.Security/assessments@2020-01-01' = {
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

## microsoft.security/locations/jitnetworkaccesspolicies

Create JIT network access policy
```bicep
resource exampleResource 'Microsoft.Security/locations/jitNetworkAccessPolicies@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  name: 'default'
  type: 'Microsoft.Security/locations/jitNetworkAccessPolicies'
  id: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/myRg1/providers/Microsoft.Security/locations/westeurope/jitNetworkAccessPolicies/default'
  kind: 'Basic'
  location: 'westeurope'
  properties: {
    provisioningState: 'Succeeded'
    requests: [
      {
        requestor: 'barbara@contoso.com'
        startTimeUtc: '2018-05-17T08:06:45.5691611Z'
        virtualMachines: [
          {
            id: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/myRg1/providers/Microsoft.Compute/virtualMachines/vm1'
            ports: [
              {
                allowedSourceAddressPrefix: '192.127.0.2'
                endTimeUtc: '2018-05-17T09:06:45.5691611Z'
                number: 3389
                status: 'Initiated'
                statusReason: 'UserRequested'
              }
            ]
          }
        ]
      }
    ]
    virtualMachines: [
      {
        id: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/myRg1/providers/Microsoft.Compute/virtualMachines/vm1'
        ports: [
          {
            allowedSourceAddressPrefix: '*'
            maxRequestAccessDuration: 'PT3H'
            number: 22
            protocol: '*'
          }
          {
            allowedSourceAddressPrefix: '*'
            maxRequestAccessDuration: 'PT3H'
            number: 3389
            protocol: '*'
          }
        ]
      }
    ]
  }
}
```
