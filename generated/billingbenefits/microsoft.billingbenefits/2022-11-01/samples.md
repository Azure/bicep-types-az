# Microsoft.BillingBenefits

## microsoft.billingbenefits/savingsplanorderaliases

SavingsPlanOrderAliasCreate
```bicep
resource exampleResource 'Microsoft.BillingBenefits/savingsPlanOrderAliases@2022-11-01' = {
  name: 'example'
  properties: {
    appliedScopeProperties: {
    }
    appliedScopeType: 'Shared'
    billingPlan: 'P1M'
    billingScopeId: '/subscriptions/30000000-0000-0000-0000-000000000000'
    commitment: {
      amount: 0.001
      currencyCode: 'USD'
      grain: 'Hourly'
    }
    displayName: 'Compute_SavingsPlan_10-28-2022_16-38'
    term: 'P3Y'
  }
  sku: {
    name: 'Compute_Savings_Plan'
  }
}
```

SavingsPlanOrderAliasCreateSingleScope
```bicep
resource exampleResource 'Microsoft.BillingBenefits/savingsPlanOrderAliases@2022-11-01' = {
  name: 'example'
  properties: {
    appliedScopeProperties: {
      subscriptionId: '/subscriptions/30000000-0000-0000-0000-000000000000'
    }
    appliedScopeType: 'Single'
    billingPlan: 'P1M'
    billingScopeId: '/providers/Microsoft.Billing/billingAccounts/1234567/billingSubscriptions/30000000-0000-0000-0000-000000000000'
    commitment: {
      amount: 0.001
      currencyCode: 'USD'
      grain: 'Hourly'
    }
    displayName: 'Compute_SavingsPlan_10-28-2022_16-38'
    term: 'P3Y'
  }
  sku: {
    name: 'Compute_Savings_Plan'
  }
}
```

## microsoft.billingbenefits/reservationorderaliases

ReservationOrderAliasCreate
```bicep
resource exampleResource 'Microsoft.BillingBenefits/reservationOrderAliases@2022-11-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    appliedScopeProperties: {
      resourceGroupId: '/subscriptions/10000000-0000-0000-0000-000000000000/resourceGroups/testrg'
    }
    appliedScopeType: 'Single'
    billingPlan: 'P1M'
    billingScopeId: '/subscriptions/10000000-0000-0000-0000-000000000000'
    displayName: 'ReservationOrder_2022-06-02'
    quantity: 5
    renew: true
    reservedResourceProperties: {
      instanceFlexibility: 'On'
    }
    reservedResourceType: 'VirtualMachines'
    term: 'P1Y'
  }
  sku: {
    name: 'Standard_M64s_v2'
  }
}
```
