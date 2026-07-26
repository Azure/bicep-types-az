# Microsoft.BillingBenefits
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.billingbenefits/discounts

DiscountsCreateAffiliate
```bicep
resource exampleResource 'Microsoft.BillingBenefits/discounts@2024-11-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    displayName: 'Virtual Machines D Series'
    entityType: 'Affiliate'
    productCode: '0001d726-0000-0160-330f-a0b98cdbbdc4'
    startAt: '2023-07-01T00:00:00Z'
    systemId: '13810867107109237'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

DiscountsCreatePrimary
```bicep
resource exampleResource 'Microsoft.BillingBenefits/discounts@2024-11-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    appliedScopeType: 'BillingAccount'
    discountTypeProperties: {
      applyDiscountOn: 'Purchase'
      conditions: [
        {
          type: 'equalAny'
          conditionName: 'Cloud'
          value: [
            'US-Sec'
          ]
        }
      ]
      discountCombinationRule: 'BestOf'
      discountPercentage: 14
      discountType: 'Sku'
      productFamilyName: 'Azure'
      productId: 'DZH318Z0BQ35'
      skuId: '0001'
    }
    displayName: 'Virtual Machines D Series'
    endAt: '2024-07-01T23:59:59Z'
    entityType: 'Primary'
    productCode: '0001d726-0000-0160-330f-a0b98cdbbdc4'
    startAt: '2023-07-01T00:00:00Z'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

DiscountsCreatePrimaryBackfill
```bicep
resource exampleResource 'Microsoft.BillingBenefits/discounts@2024-11-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    appliedScopeType: 'BillingAccount'
    discountTypeProperties: {
      applyDiscountOn: 'Purchase'
      conditions: [
        {
          type: 'equalAny'
          conditionName: 'Cloud'
          value: [
            'US-Sec'
          ]
        }
      ]
      discountCombinationRule: 'BestOf'
      discountPercentage: 14
      discountType: 'ProductFamily'
      productFamilyName: 'Azure'
    }
    displayName: 'Virtual Machines D Series'
    endAt: '2024-07-01T23:59:59Z'
    entityType: 'Primary'
    productCode: '0001d726-0000-0160-330f-a0b98cdbbdc4'
    startAt: '2023-07-01T00:00:00Z'
    systemId: '13810867107109237'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

DiscountsCreatePrimaryWithCustomPrice
```bicep
resource exampleResource 'Microsoft.BillingBenefits/discounts@2024-11-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    appliedScopeType: 'BillingAccount'
    discountTypeProperties: {
      applyDiscountOn: 'Purchase'
      conditions: [
        {
          type: 'equalAny'
          conditionName: 'Cloud'
          value: [
            'US-Sec'
          ]
        }
      ]
      customPriceProperties: {
        catalogClaims: [
          {
            catalogClaimsItemType: 'NationalCloud'
            value: 'USSec'
          }
        ]
        catalogId: '4'
        marketSetPrices: [
          {
            currency: 'USD'
            markets: [
              'US'
            ]
            value: 125.16
          }
        ]
        ruleType: 'FixedPriceLock'
        termUnits: 'ASI1251A'
      }
      discountCombinationRule: 'BestOf'
      discountPercentage: 14
      discountType: 'CustomPrice'
      productFamilyName: 'Azure'
      productId: 'DZH318Z0BQ35'
      skuId: '0001'
    }
    displayName: 'Virtual Machines D Series'
    endAt: '2024-07-01T23:59:59Z'
    entityType: 'Primary'
    productCode: '0001d726-0000-0160-330f-a0b98cdbbdc4'
    startAt: '2023-07-01T00:00:00Z'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

DiscountsCreatePrimaryWithCustomPriceMultiCurrency
```bicep
resource exampleResource 'Microsoft.BillingBenefits/discounts@2024-11-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    appliedScopeType: 'BillingAccount'
    discountTypeProperties: {
      applyDiscountOn: 'Purchase'
      conditions: [
        {
          type: 'equalAny'
          conditionName: 'Cloud'
          value: [
            'US-Sec'
          ]
        }
      ]
      customPriceProperties: {
        catalogClaims: [
          {
            catalogClaimsItemType: 'NationalCloud'
            value: 'USSec'
          }
        ]
        catalogId: '4'
        marketSetPrices: [
          {
            currency: 'USD'
            markets: [
              'US'
            ]
            value: 125.16
          }
          {
            currency: 'EUR'
            markets: [
              'FR'
            ]
            value: 110.16
          }
        ]
        ruleType: 'FixedPriceLock'
        termUnits: 'ASI1251A'
      }
      discountCombinationRule: 'BestOf'
      discountPercentage: 14
      discountType: 'CustomPriceMultiCurrency'
      productFamilyName: 'Azure'
      productId: 'DZH318Z0BQ35'
      skuId: '0001'
    }
    displayName: 'Virtual Machines D Series'
    endAt: '2024-07-01T23:59:59Z'
    entityType: 'Primary'
    productCode: '0001d726-0000-0160-330f-a0b98cdbbdc4'
    startAt: '2023-07-01T00:00:00Z'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

DiscountsCreatePrimaryWithPriceGuarantee
```bicep
resource exampleResource 'Microsoft.BillingBenefits/discounts@2024-11-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    appliedScopeType: 'BillingAccount'
    discountTypeProperties: {
      applyDiscountOn: 'Purchase'
      conditions: [
        {
          type: 'equalAny'
          conditionName: 'Cloud'
          value: [
            'US-Sec'
          ]
        }
      ]
      discountCombinationRule: 'BestOf'
      discountType: 'Sku'
      priceGuaranteeProperties: {
        priceGuaranteeDate: '2024-11-01T00:00:00'
        pricingPolicy: 'Protected'
      }
      productFamilyName: 'Azure'
      productId: 'DZH318Z0BQ35'
      skuId: '0001'
    }
    displayName: 'Virtual Machines D Series'
    endAt: '2024-07-01T23:59:59Z'
    entityType: 'Primary'
    productCode: '0001d726-0000-0160-330f-a0b98cdbbdc4'
    startAt: '2023-07-01T00:00:00Z'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.billingbenefits/reservationorderaliases

ReservationOrderAliasCreate
```bicep
resource exampleResource 'Microsoft.BillingBenefits/reservationOrderAliases@2024-11-01-preview' = {
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

## microsoft.billingbenefits/savingsplanorderaliases

SavingsPlanOrderAliasCreate
```bicep
resource exampleResource 'Microsoft.BillingBenefits/savingsPlanOrderAliases@2024-11-01-preview' = {
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
resource exampleResource 'Microsoft.BillingBenefits/savingsPlanOrderAliases@2024-11-01-preview' = {
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
