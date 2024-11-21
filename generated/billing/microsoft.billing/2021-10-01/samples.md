# Microsoft.Billing
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.billing/billingaccounts/billingsubscriptionaliases

PutBillingSubscription
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingSubscriptionAliases@2021-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    billingFrequency: 'P1M'
    billingProfileId: '/providers/Microsoft.Billing/BillingAccounts/{billingAccountName}/billingProfiles/2b72f936-0166-47d6-91a3-ef9f84f36664'
    customerId: 'e259ec08-fc9f-481c-a052-8b0c83a3a051'
    displayName: 'Subscription 3'
    invoiceSectionId: '/providers/Microsoft.Billing/BillingAccounts/{billingAccountName}/billingProfiles/2b72f936-0166-47d6-91a3-ef9f84f36664/5c562559-e31b-4bfe-b608-f8b5b3fbd073'
    productTypeId: 'CFQ7TTC0LDPB'
    quantity: 4
    skuId: '0001'
    termDuration: 'P1Y'
  }
}
```
