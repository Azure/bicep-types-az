# Microsoft.BillingBenefits
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.billingbenefits/conditionalcredits

ConditionalCreditCreateContributor
```bicep
resource exampleResource 'Microsoft.BillingBenefits/conditionalCredits@2025-12-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    displayName: 'Contributor Conditional Credit 20250801'
    entityType: 'Contributor'
    primaryResourceId: '/subscriptions/10000000-0000-0000-0000-000000000000/resourceGroups/resource_group_name_01/providers/Microsoft.BillingBenefits/conditionalCredits/conditionalCredit_20250801'
    productCode: '000187f7-0000-0260-ab43-b8473ce57f1d'
    startAt: '2025-09-01T00:00:00Z'
  }
  tags: {
    environment: 'dev'
    team: 'finance'
  }
}
```

ConditionalCreditCreatePrimary
```bicep
resource exampleResource 'Microsoft.BillingBenefits/conditionalCredits@2025-12-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    allowContributors: 'Enabled'
    displayName: 'Conditional Credit 20250801'
    entityType: 'Primary'
    milestones: [
      {
        name: 'Milestone 1'
        award: {
          credit: {
            amount: 5000
            currencyCode: 'USD'
            grain: 'FullTerm'
          }
          duration: 'P3M'
        }
        endAt: '2025-09-30T23:59:59Z'
        spendTarget: {
          amount: 50000
          currencyCode: 'USD'
        }
      }
      {
        name: 'Milestone 2'
        award: {
          credit: {
            amount: 10000
            currencyCode: 'USD'
            grain: 'FullTerm'
          }
          duration: 'P3M'
        }
        endAt: '2025-12-31T23:59:59Z'
        spendTarget: {
          amount: 100000
          currencyCode: 'USD'
        }
      }
    ]
    productCode: '000187f7-0000-0260-ab43-b8473ce57f1d'
    startAt: '2025-07-01T00:00:00Z'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.billingbenefits/credits

CreditCreate
```bicep
resource exampleResource 'Microsoft.BillingBenefits/credits@2025-12-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    credit: {
      amount: 20000
      currencyCode: 'USD'
      grain: 'FullTerm'
    }
    endAt: '2024-01-12T00:00:00Z'
    productCode: '0002d726-0000-0160-330f-a0b98cdbbdc4'
    startAt: '2023-12-12T00:00:00Z'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

EndCustomerInvestmentFundCreditCreate
```bicep
resource exampleResource 'Microsoft.BillingBenefits/credits@2025-12-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    breakdown: [
      {
        allocation: {
          amount: 25000
          currencyCode: 'USD'
          grain: 'FullTerm'
        }
        dimensions: [
          {
            key: 'productFamily'
            value: 'Azure'
          }
          {
            key: 'productCode'
            value: '00002b30-0000-0260-d348-f3ffcd565473'
          }
          {
            key: 'creditType'
            value: 'EndCustomerInvestmentCredit'
          }
          {
            key: 'supplierType'
            value: 'External'
          }
        ]
        endAt: '2025-08-31T23:59:59.999Z'
        startAt: '2025-08-01T00:00:00Z'
      }
    ]
    credit: {
      amount: 25000
      currencyCode: 'USD'
      grain: 'FullTerm'
    }
    endAt: '2025-08-31T23:59:59.999Z'
    productCode: '00002b30-0000-0260-d348-f3ffcd565473'
    startAt: '2025-08-01T00:00:00Z'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

PromotionalCreditCreate
```bicep
resource exampleResource 'Microsoft.BillingBenefits/credits@2025-12-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    policies: {
      expiration: 'SuspendBillingProfile'
      redemption: 'AutoRedeem'
    }
    productCode: '0002d726-0000-0160-330f-a0b98cdbbdc4'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.billingbenefits/credits/sources

CreditSourceCreate
```bicep
resource exampleResource 'Microsoft.BillingBenefits/credits/sources@2025-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'global'
  properties: {
    credit: {
      amount: 20000
      currencyCode: 'USD'
      grain: 'FullTerm'
    }
    impactedBillingPeriod: '202304'
    sourceResourceId: '/subscriptions/{subId}'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.billingbenefits/discounts

DiscountsCreateAffiliate
```bicep
resource exampleResource 'Microsoft.BillingBenefits/discounts@2025-12-01-preview' = {
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
resource exampleResource 'Microsoft.BillingBenefits/discounts@2025-12-01-preview' = {
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
resource exampleResource 'Microsoft.BillingBenefits/discounts@2025-12-01-preview' = {
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
resource exampleResource 'Microsoft.BillingBenefits/discounts@2025-12-01-preview' = {
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
resource exampleResource 'Microsoft.BillingBenefits/discounts@2025-12-01-preview' = {
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
resource exampleResource 'Microsoft.BillingBenefits/discounts@2025-12-01-preview' = {
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

## microsoft.billingbenefits/freeservices

FreeServicesCreate
```bicep
resource exampleResource 'Microsoft.BillingBenefits/freeServices@2025-12-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    endAt: '2026-10-01T00:00:00Z'
    productCode: '0001d726-0000-0160-330f-a0b98cdbbdc4'
    startAt: '2025-10-01T00:00:00Z'
  }
  tags: {
    environment: 'production'
  }
}
```

## microsoft.billingbenefits/maccs

Contributor_Create
```bicep
resource exampleResource 'Microsoft.BillingBenefits/maccs@2025-12-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    endAt: '2024-07-01T00:00:00Z'
    entityType: 'Contributor'
    primaryResourceId: '/subscriptions/10000000-0000-0000-0000-000000000000/resourceGroups/resource_group_name_02/providers/Microsoft.BillingBenefits/maccs/macc_20230614'
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

Macc_Create
```bicep
resource exampleResource 'Microsoft.BillingBenefits/maccs@2025-12-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    allowContributors: true
    commitment: {
      amount: 20000
      currencyCode: 'USD'
      grain: 'FullTerm'
    }
    displayName: 'macc 20230614'
    endAt: '2024-07-01T00:00:00Z'
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

MaccWithMilestones_Create
```bicep
resource exampleResource 'Microsoft.BillingBenefits/maccs@2025-12-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    allowContributors: true
    commitment: {
      amount: 20000
      currencyCode: 'USD'
      grain: 'FullTerm'
    }
    displayName: 'macc 20230614'
    endAt: '2028-05-01T23:59:59Z'
    entityType: 'Primary'
    milestones: [
      {
        commitment: {
          amount: 10000
          currencyCode: 'USD'
        }
        endAt: '2026-05-31T23:59:59Z'
      }
      {
        commitment: {
          amount: 15000
          currencyCode: 'USD'
        }
        endAt: '2027-05-31T23:59:59Z'
      }
    ]
    productCode: '0001d726-0000-0160-330f-a0b98cdbbdc4'
    startAt: '2025-05-01T00:00:00Z'
    systemId: '13810867107109237'
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
resource exampleResource 'Microsoft.BillingBenefits/reservationOrderAliases@2025-12-01-preview' = {
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
resource exampleResource 'Microsoft.BillingBenefits/savingsPlanOrderAliases@2025-12-01-preview' = {
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
resource exampleResource 'Microsoft.BillingBenefits/savingsPlanOrderAliases@2025-12-01-preview' = {
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
