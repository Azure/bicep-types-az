# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/locations/jitnetworkaccesspolicies

Create JIT network access policy
```bicep
resource exampleResource 'Microsoft.Security/locations/jitNetworkAccessPolicies@2015-06-01-preview' = {
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
