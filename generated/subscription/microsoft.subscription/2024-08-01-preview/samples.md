# Microsoft.Subscription
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.subscription/aliases

CreateAlias
```bicep
resource exampleResource 'Microsoft.Subscription/aliases@2024-08-01-preview' = {
  name: 'example'
  properties: {
    additionalProperties: {
      managementGroupId: {
      }
      subscriptionOwnerId: 'f09b39eb-c496-482c-9ab9-afd799572f4c'
      subscriptionTenantId: '66f6e4d6-07dc-4aea-94ea-e12d3026a3c8'
      tags: {
        tag1: 'Messi'
        tag2: 'Ronaldo'
        tag3: 'Lebron'
      }
    }
    billingScope: '/billingAccounts/af6231a7-7f8d-4fcc-a993-dd8466108d07:c663dac6-a9a5-405a-8938-cd903e12ab5b_2019_05_31/billingProfiles/QWDQ-QWHI-AUW-SJDO-DJH/invoiceSections/FEUF-EUHE-ISJ-SKDW-DJH'
    displayName: 'Test Subscription'
    subscriptionId: {
    }
    workload: 'Production'
  }
}
```

## microsoft.subscription/changetenantrequest

putTargetDirectory
```bicep
resource exampleResource 'Microsoft.Subscription/changeTenantRequest@2024-08-01-preview' = {
  name: 'example'
  properties: {
    destinationOwnerId: 'abhaypratap@live.com'
    destinationTenantId: '111a82eb-4c7b-48bb-962b-49363c510130'
  }
}
```

## microsoft.subscription/policies

TenantPolicy
```bicep
resource exampleResource 'Microsoft.Subscription/policies@2024-08-01-preview' = {
  name: 'example'
  blockSubscriptionsIntoTenant: true
  blockSubscriptionsLeavingTenant: true
  exemptedPrincipals: [
    'e879cf0f-2b4d-5431-109a-f72fc9868693'
    '9792da87-c97b-410d-a97d-27021ba09ce6'
  ]
}
```
