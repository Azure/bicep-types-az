# Microsoft.ProgrammableConnectivity
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.programmableconnectivity/gateways

Gateways_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProgrammableConnectivity/gateways@2024-01-15-preview' = {
  name: 'example'
  location: 'oryhozfmeohscezl'
  properties: {
  }
  tags: {
    key2642: 'ykmlftvwwpvcmriffxqh'
  }
}
```

## microsoft.programmableconnectivity/operatorapiconnections

OperatorApiConnections_Create
```bicep
resource exampleResource 'Microsoft.ProgrammableConnectivity/operatorApiConnections@2024-01-15-preview' = {
  name: 'example'
  location: 'dwvzfkjoepbmksygazllqryyinn'
  properties: {
    accountType: 'AzureManaged'
    appId: 'czgrhbvgr'
    appSecret: 'wtxnpes'
    configuredApplication: {
      name: 'idzqqen'
      applicationDescription: 'gjlwegnqvffvsc'
      applicationType: 'f'
      legalName: 'ar'
      organizationDescription: 'fcueqzlxxr'
      privacyContactEmailAddress: 'l'
      taxNumber: 'ngzv'
    }
    gatewayId: '/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/example-rg/providers/Microsoft.ProgrammableConnectivity/gateways/cdvcixxcdhjqw'
    operatorApiPlanId: '/subscriptions/00000000-0000-0000-0000-00000000000/providers/Microsoft.ProgrammableConnectivity/operatorApiPlans/livmzrh'
    saasProperties: {
      saasResourceId: 'pekejefyvfviabimdrmno'
      saasSubscriptionId: 'mgyusmqt'
    }
    status: {
      reason: 'fpteanxqzqixfmymib'
      state: 'rvez'
    }
  }
  tags: {
    key5536: 'bjhvpzsmtalqxmjjbsfdizhg'
  }
}
```
