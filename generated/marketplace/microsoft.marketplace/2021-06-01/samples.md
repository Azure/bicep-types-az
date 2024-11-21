# Microsoft.Marketplace

## microsoft.marketplace/privatestores

PrivateStores_update
```bicep
resource exampleResource 'Microsoft.Marketplace/privateStores@2021-06-01' = {
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
resource exampleResource 'Microsoft.Marketplace/privateStores/adminRequestApprovals@2021-06-01' = {
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
resource exampleResource 'Microsoft.Marketplace/privateStores/collections@2021-06-01' = {
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
resource exampleResource 'Microsoft.Marketplace/privateStores/collections/offers@2021-06-01' = {
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
