# Microsoft.Billing

## microsoft.billing/promotions

PromotionActivation
```bicep
resource exampleResource 'Microsoft.Billing/promotions@2020-09-01-preview' = {
  name: 'example'
  properties: {
    appliedScopes: [
      '/subscriptions/f6dc64c8-34bb-43d3-96b0-fd2b8c94f1c3'
    ]
    displayName: 'promotion-displayname'
    orderId: 'ff0f1add-122a-43c1-a2ec-c2277781667d'
  }
  sku: {
    name: 'wvd_promo_30p'
  }
}
```
