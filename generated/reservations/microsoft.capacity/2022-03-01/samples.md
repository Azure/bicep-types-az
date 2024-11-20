# Microsoft.Capacity

## microsoft.capacity/reservationorders

Purchase
```bicep
resource exampleResource 'Microsoft.Capacity/reservationOrders@2022-03-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    appliedScopeType: 'Shared'
    appliedScopes: {
    }
    billingPlan: 'Monthly'
    billingScopeId: '/subscriptions/ed3a1871-612d-abcd-a849-c2542a68be83'
    displayName: 'TestReservationOrder'
    quantity: 1
    renew: false
    reservedResourceProperties: {
      instanceFlexibility: 'On'
    }
    reservedResourceType: 'VirtualMachines'
    term: 'P1Y'
  }
  sku: {
    name: 'standard_D1'
  }
}
```
