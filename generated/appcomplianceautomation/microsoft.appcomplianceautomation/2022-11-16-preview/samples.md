# Microsoft.AppComplianceAutomation
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.appcomplianceautomation/reports

Report_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppComplianceAutomation/reports@2022-11-16-preview' = {
  name: 'example'
  properties: {
    offerGuid: '0000'
    resources: [
      {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.Network/privateEndpoints/myPrivateEndpoint'
        tags: {
          key1: 'value1'
        }
      }
    ]
    timeZone: 'GMT Standard Time'
    triggerTime: '2022-03-04T05:11:56.197Z'
  }
}
```
