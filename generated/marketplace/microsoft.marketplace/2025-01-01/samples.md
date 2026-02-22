# Microsoft.Marketplace
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.marketplace/privatestores

PrivateStores_update
```bicep
resource exampleResource 'Microsoft.Marketplace/privateStores@2025-01-01' = {
  name: 'example'
  properties: {
    availability: 'disabled'
    eTag: '"9301f4fd-0000-0100-0000-5e248b350345"'
  }
}
```

## microsoft.marketplace/privatestores/adminrequestapprovals

UpdateAdminRequestApproval
```bicep
resource exampleResource 'Microsoft.Marketplace/privateStores/adminRequestApprovals@2025-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    adminAction: 'Approved'
    approvedPlans: [
      'testPlan'
    ]
    collectionIds: [
      'f8ee227e-85d7-477d-abbf-854d6decaf70'
      '39246ad6-c521-4fed-8de7-77dede2e873f'
    ]
    comment: 'I\'m ok with that'
    publisherId: 'marketplacetestthirdparty'
  }
}
```

## microsoft.marketplace/privatestores/collections

CreatePrivateStoreCollection
```bicep
resource exampleResource 'Microsoft.Marketplace/privateStores/collections@2025-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allSubscriptions: false
    claim: ''
    collectionName: 'Test Collection'
    subscriptionsList: [
      'b340914e-353d-453a-85fb-8f9b65b51f91'
      'f2baa04d-5bfc-461b-b6d8-61b403c9ec48'
    ]
  }
}
```

## microsoft.marketplace/privatestores/collections/offers

PrivateStoreOffer_update
```bicep
resource exampleResource 'Microsoft.Marketplace/privateStores/collections/offers@2025-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    eTag: '"9301f4fd-0000-0100-0000-5e248b350666"'
    specificPlanIdsLimitation: [
      '0001'
      '0002'
    ]
  }
}
```

## microsoft.marketplace/privatestores/requestapprovals

CreateApprovalRequest
```bicep
resource exampleResource 'Microsoft.Marketplace/privateStores/requestApprovals@2025-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    plansDetails: [
      {
        justification: 'Because I want to....'
        planId: 'testPlanA'
        subscriptionId: '4ca4753c-5a1e-4913-b849-2c68880e03c2'
        subscriptionName: 'Test subscription 2'
      }
      {
        justification: 'try me :)'
        planId: '*'
        subscriptionId: '4ca4753c-5a1e-4913-b849-2c68880e03c2'
        subscriptionName: 'Test subscription 2'
      }
    ]
    publisherId: 'marketplacetestthirdparty'
  }
}
```
