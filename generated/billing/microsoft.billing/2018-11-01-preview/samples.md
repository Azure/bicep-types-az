# Microsoft.Billing
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.billing/billingaccounts/billingprofiles

UpdateBillingProfile
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles@2018-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'BillingProfile11'
    poNumber: 'ABC12345'
  }
}
```

## microsoft.billing/billingaccounts/billingprofiles/policies

UpdateBillingProfile
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles/policies@2018-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    marketplacePurchasesAllowed: false
    reservationPurchasesAllowed: true
    subscriptionOwnerCanViewCharges: true
  }
}
```

## microsoft.billing/billingaccounts/invoicesections

UpdateInvoiceSection
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/invoiceSections@2018-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'invoiceSection1'
  }
}
```

## microsoft.billing/billingaccounts/lineofcredit

IncreaseLineOfCreditBySubscription
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/lineOfCredit@2018-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    creditLimit: {
      value: 20000
    }
  }
}
```
