# Microsoft.Billing

## microsoft.billing/billingaccounts/billingprofiles/instructions

PutInstruction
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles/instructions@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    amount: 5000
    endDate: '2020-12-30T21:26:47.997Z'
    startDate: '2019-12-30T21:26:47.997Z'
  }
}
```

## microsoft.billing/billingaccounts/billingprofiles

CreateBillingProfile
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    billTo: {
      addressLine1: 'Test Address 1'
      city: 'Redmond'
      country: 'US'
      firstName: 'Test'
      lastName: 'User'
      postalCode: '12345'
      region: 'WA'
    }
    displayName: 'Finance'
    enabledAzurePlans: [
      {
        skuId: '0001'
      }
      {
        skuId: '0002'
      }
    ]
    invoiceEmailOptIn: true
    poNumber: 'ABC12345'
  }
}
```

## microsoft.billing/billingaccounts/billingprofiles/invoicesections

PutInvoiceSection
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'invoiceSection1'
    labels: {
      costCategory: 'Support'
      pcCode: 'A123456'
    }
  }
}
```

## microsoft.billing/billingaccounts/billingprofiles/policies

UpdatePolicy
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles/policies@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    marketplacePurchases: 'OnlyFreeAllowed'
    reservationPurchases: 'NotAllowed'
    viewCharges: 'Allowed'
  }
}
```

## microsoft.billing/billingaccounts/customers/policies

UpdateCustomer
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/customers/policies@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    viewCharges: 'NotAllowed'
  }
}
```
