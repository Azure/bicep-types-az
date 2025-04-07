# Microsoft.Subscriptions.Admin
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.subscriptions.admin/directorytenants

Create or updates a directory tenant.
```bicep
resource exampleResource 'Microsoft.Subscriptions.Admin/directoryTenants@2015-11-01' = {
  name: 'example'
  properties: {
    tenantId: 'eb90516e-65d7-4bf6-8537-8322e9172832'
  }
}
```

## microsoft.subscriptions.admin/locations

Updates the specified location.
```bicep
resource exampleResource 'Microsoft.Subscriptions.Admin/locations@2015-11-01' = {
  name: 'example'
  name: 'local'
  displayName: 'local'
  latitude: '56'
  longitude: '65'
}
```

## microsoft.subscriptions.admin/offers

Create or update the offer.
```bicep
resource exampleResource 'Microsoft.Subscriptions.Admin/offers@2015-11-01' = {
  name: 'example'
  properties: {
    name: 'testOffer1'
    description: 'This is a test Offer'
    basePlanIds: [
      '/subscriptions/8ab2551d-41e5-489b-9273-1cdf1cbc7dc6/resourceGroups/Plans/providers/Microsoft.Subscriptions.Admin/plans/testplan'
    ]
    displayName: 'Test Offer'
    maxSubscriptionsPerAccount: 100
    state: 'Private'
    subscriptionCount: 0
  }
}
```

## microsoft.subscriptions.admin/offers/offerdelegations

Create or update the offer delegation.
```bicep
resource exampleResource 'Microsoft.Subscriptions.Admin/offers/offerDelegations@2015-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    subscriptionId: '20ff7fc3-e762-44dd-bd96-b71116dcdc23'
  }
}
```

## microsoft.subscriptions.admin/plans

Create or update the plan.
```bicep
resource exampleResource 'Microsoft.Subscriptions.Admin/plans@2015-11-01' = {
  name: 'example'
  properties: {
    name: 'newplan'
    description: 'test plan'
    displayName: 'testplans'
    quotaIds: [
      '123'
      'abc'
    ]
    subscriptionCount: 0
  }
}
```

## microsoft.subscriptions.admin/subscriptions

Creates or updates the specified subscription.
```bicep
resource exampleResource 'Microsoft.Subscriptions.Admin/subscriptions@2015-11-01' = {
  name: 'example'
  delegatedProviderSubscriptionId: 'd16dfcf0-44cc-4498-9937-08b94159d27b'
  displayName: 'Test Subscription'
  id: '/subscriptions/d16dfcf0-44cc-4498-9937-08b94159d27b/providers/Microsoft.Subscriptions.Admin/subscriptions/c79389af-4480-48cc-8fa2-ee8ced8e843d'
  offerId: '/subscriptions/d16dfcf0-44cc-4498-9937-08b94159d27b/resourceGroups/planrg/providers/Microsoft.Subscriptions.Admin/offers/testoffer'
  owner: 'tenantadmin1@msazurestack.onmicrosoft.com'
  routingResourceManagerType: 'Default'
  state: 'Enabled'
}
```

## microsoft.subscriptions.admin/subscriptions/acquiredplans

Creates or updates the acquired plan.
```bicep
resource exampleResource 'Microsoft.Subscriptions.Admin/subscriptions/acquiredPlans@2015-11-01' = {
  parent: parentResource 
  name: 'example'
  acquisitionId: '718c7f7c-4868-479a-98ce-5caaa8f158c8'
  id: '/subscriptions/8158498d-27b1-4ccf-9aa1-de0f925731e6/providers/Microsoft.Subscriptions/subscriptions/8158498d-27b1-4ccf-9aa1-de0f925731e6/acquiredPlans/718c7f7c-4868-479a-98ce-5caaa8f158c8'
  planId: '/subscriptions/8158498d-27b1-4ccf-9aa1-de0f925731e6/providers/Microsoft.Subscriptions/plans/balaplan'
}
```
