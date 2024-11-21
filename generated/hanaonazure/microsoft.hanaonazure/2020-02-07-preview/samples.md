# Microsoft.HanaOnAzure
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.hanaonazure/sapmonitors

Create a SAP Monitor
```bicep
resource exampleResource 'Microsoft.HanaOnAzure/sapMonitors@2020-02-07-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    enableCustomerAnalytics: true
    logAnalyticsWorkspaceArmId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.operationalinsights/workspaces/myWorkspace'
    logAnalyticsWorkspaceId: '00000000-0000-0000-0000-000000000000'
    logAnalyticsWorkspaceSharedKey: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000=='
    monitorSubnet: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet'
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.hanaonazure/sapmonitors/providerinstances

Create a SAP Monitor
```bicep
resource exampleResource 'Microsoft.HanaOnAzure/sapMonitors/providerInstances@2020-02-07-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'hana'
    metadata: '{"key":"value"}'
    properties: '{"hostname":"10.0.0.6","dbName":"SYSTEMDB","sqlPort":30013,"dbUsername":"SYSTEM","dbPassword":"PASSWORD"}'
  }
}
```
