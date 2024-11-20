# Microsoft.ProviderHub

## microsoft.providerhub/providerregistrations/customrollouts

CustomRollouts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/customRollouts@2020-11-20' = {
  parent: parentResource 
  name: 'example'
  properties: {
    specification: {
      canary: {
        regions: [
          'brazilus'
        ]
      }
    }
  }
}
```

## microsoft.providerhub/providerregistrations/defaultrollouts

DefaultRollouts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/defaultRollouts@2020-11-20' = {
  parent: parentResource 
  name: 'example'
  properties: {
    specification: {
      canary: {
        skipRegions: [
          'eastus2euap'
        ]
      }
      restOfTheWorldGroupTwo: {
        waitDuration: 'PT4H'
      }
    }
  }
}
```

## microsoft.providerhub/providerregistrations/notificationregistrations

NotificationRegistrations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/notificationRegistrations@2020-11-20' = {
  parent: parentResource 
  name: 'example'
  properties: {
    includedEvents: [
      '*/write'
      'Microsoft.Contoso/employees/delete'
    ]
    messageScope: 'RegisteredSubscriptions'
    notificationEndpoints: [
      {
        locations: [
          ''
          'East US'
        ]
        notificationDestination: '/subscriptions/ac6bcfb5-3dc1-491f-95a6-646b89bf3e88/resourceGroups/mgmtexp-eastus/providers/Microsoft.EventHub/namespaces/unitedstates-mgmtexpint/eventhubs/armlinkednotifications'
      }
      {
        locations: [
          'North Europe'
        ]
        notificationDestination: '/subscriptions/ac6bcfb5-3dc1-491f-95a6-646b89bf3e88/resourceGroups/mgmtexp-northeurope/providers/Microsoft.EventHub/namespaces/europe-mgmtexpint/eventhubs/armlinkednotifications'
      }
    ]
    notificationMode: 'EventHub'
  }
}
```

## microsoft.providerhub/providerregistrations

ProviderRegistrations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations@2020-11-20' = {
  name: 'example'
  properties: {
    capabilities: [
      {
        effect: 'Allow'
        quotaId: 'CSP_2015-05-01'
      }
      {
        effect: 'Allow'
        quotaId: 'CSP_MG_2017-12-01'
      }
    ]
    management: {
      incidentContactEmail: 'helpme@contoso.com'
      incidentRoutingService: 'Contoso Resource Provider'
      incidentRoutingTeam: 'Contoso Triage'
    }
    providerType: 'Internal'
    providerVersion: '2.0'
  }
}
```

## microsoft.providerhub/providerregistrations/resourcetyperegistrations

ResourceTypeRegistrations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations@2020-11-20' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endpoints: [
      {
        apiVersions: [
          '2020-06-01-preview'
        ]
        locations: [
          'West US'
          'East US'
          'North Europe'
        ]
        requiredFeatures: [
          '<feature flag>'
        ]
      }
    ]
    regionality: 'Regional'
    routingType: 'Default'
    swaggerSpecifications: [
      {
        apiVersions: [
          '2020-06-01-preview'
        ]
        swaggerSpecFolderUri: 'https://github.com/Azure/azure-rest-api-specs/blob/feature/azure/contoso/specification/contoso/resource-manager/Microsoft.SampleRP/'
      }
    ]
  }
}
```

## microsoft.providerhub/providerregistrations/resourcetyperegistrations/skus

Skus_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus@2020-11-20' = {
  parent: parentResource 
  name: 'example'
  properties: {
    skuSettings: [
      {
        name: 'freeSku'
        kind: 'Standard'
        tier: 'Tier1'
      }
      {
        name: 'premiumSku'
        costs: [
          {
            meterId: 'xxx'
          }
        ]
        kind: 'Premium'
        tier: 'Tier2'
      }
    ]
  }
}
```

## microsoft.providerhub/providerregistrations/resourcetyperegistrations/resourcetyperegistrations/skus

Skus_CreateOrUpdateNestedResourceTypeFirst
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20' = {
  parent: parentResource 
  name: 'example'
  properties: {
    skuSettings: [
      {
        name: 'freeSku'
        kind: 'Standard'
        tier: 'Tier1'
      }
      {
        name: 'premiumSku'
        costs: [
          {
            meterId: 'xxx'
          }
        ]
        kind: 'Premium'
        tier: 'Tier2'
      }
    ]
  }
}
```

## microsoft.providerhub/providerregistrations/resourcetyperegistrations/resourcetyperegistrations/resourcetyperegistrations/skus

Skus_CreateOrUpdateNestedResourceTypeSecond
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20' = {
  parent: parentResource 
  name: 'example'
  properties: {
    skuSettings: [
      {
        name: 'freeSku'
        kind: 'Standard'
        tier: 'Tier1'
      }
      {
        name: 'premiumSku'
        costs: [
          {
            meterId: 'xxx'
          }
        ]
        kind: 'Premium'
        tier: 'Tier2'
      }
    ]
  }
}
```

## microsoft.providerhub/providerregistrations/resourcetyperegistrations/resourcetyperegistrations/resourcetyperegistrations/resourcetyperegistrations/skus

Skus_CreateOrUpdateNestedResourceTypeThird
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20' = {
  parent: parentResource 
  name: 'example'
  properties: {
    skuSettings: [
      {
        name: 'freeSku'
        kind: 'Standard'
        tier: 'Tier1'
      }
      {
        name: 'premiumSku'
        costs: [
          {
            meterId: 'xxx'
          }
        ]
        kind: 'Premium'
        tier: 'Tier2'
      }
    ]
  }
}
```
