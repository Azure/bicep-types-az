# Microsoft.Billing

## microsoft.billing/billingaccounts/billingprofiles/instructions

PutInstruction
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles/instructions@2019-10-01-preview' = {
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
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles@2019-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  address: {
    addressLine1: '1 Microsoft Way'
    city: 'Redmond'
    country: 'US'
    firstName: 'Test'
    lastName: 'User'
    postalCode: '98052'
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
```

## microsoft.billing/billingaccounts/billingprofiles/invoicesections

CreateInvoiceSection
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2019-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  displayName: 'invoiceSection1'
}
```

## microsoft.billing/billingaccounts/billingprofiles/policies

UpdateBillingProfile
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles/policies@2019-10-01-preview' = {
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
resource exampleResource 'Microsoft.Billing/billingAccounts/customers/policies@2019-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    viewCharges: 'NotAllowed'
  }
}
```

## microsoft.billing/billingaccounts/billingroleassignments

PutEnrollmentAdministratorRoleAssignment
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingRoleAssignments@2019-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principalId: '99a1a759-30dd-42c2-828c-db398826bb67'
    principalTenantId: '7ca289b9-c32d-4f01-8566-7ff93261d76f'
    roleDefinitionId: '/providers/Microsoft.Billing/billingAccounts/7898901/billingRoleDefinitions/9f1983cb-2574-400c-87e9-34cf8e2280db'
  }
}
```

## microsoft.billing/billingaccounts/departments/billingroleassignments

PutEnrollmentDepartmentAdministratorRoleAssignment
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/departments/billingRoleAssignments@2019-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principalId: '99a1a759-30dd-42c2-828c-db398826bb67'
    principalTenantId: '7ca289b9-c32d-4f01-8566-7ff93261d76f'
    roleDefinitionId: '/providers/Microsoft.Billing/billingAccounts/7898901/departments/97603/billingRoleDefinitions/fb2cf67f-be5b-42e7-8025-4683c668f840'
  }
}
```

## microsoft.billing/billingaccounts/enrollmentaccounts/billingroleassignments

PutEnrollmentAccountSubscriptionCreatorRoleAssignment
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments@2019-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principalId: '99a1a759-30dd-42c2-828c-db398826bb67'
    principalTenantId: '7ca289b9-c32d-4f01-8566-7ff93261d76f'
    roleDefinitionId: '/providers/Microsoft.Billing/billingAccounts/7898901/enrollmentAccounts/225314/billingRoleDefinitions/a0bcee42-bf30-4d1b-926a-48d21664ef71'
  }
}
```
