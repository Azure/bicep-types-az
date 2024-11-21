# Microsoft.Billing
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.billing/billingaccounts/associatedtenants

AssociatedTenantsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/associatedTenants@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    billingManagementState: 'Active'
    displayName: 'Contoso Finance'
    provisioningManagementState: 'Pending'
  }
}
```

## microsoft.billing/billingaccounts/billingprofiles

BillingProfilesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    billTo: {
      addressLine1: 'Test Address1'
      addressLine2: 'Test Address2'
      addressLine3: 'Test Address3'
      city: 'City'
      companyName: 'Contoso'
      country: 'US'
      email: 'abc@contoso.com'
      firstName: 'Test'
      isValidAddress: true
      lastName: 'User'
      phoneNumber: '000-000-0000'
      postalCode: '00000'
      region: 'WA'
    }
    displayName: 'Billing Profile 1'
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
    shipTo: {
      addressLine1: 'Test Address1'
      addressLine2: 'Test Address2'
      addressLine3: 'Test Address3'
      city: 'City'
      companyName: 'Contoso'
      country: 'US'
      email: 'abc@contoso.com'
      firstName: 'Test'
      isValidAddress: true
      lastName: 'User'
      phoneNumber: '000-000-0000'
      postalCode: '00000'
      region: 'WA'
    }
  }
}
```

## microsoft.billing/billingaccounts/billingprofiles/customers/policies

PoliciesPutByCustomer
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles/customers/policies@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    viewCharges: 'Allowed'
  }
}
```

## microsoft.billing/billingaccounts/billingprofiles/customers/transfers

InitiatePartnerTransfer
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles/customers/transfers@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    recipientEmailId: 'user@contoso.com'
  }
}
```

## microsoft.billing/billingaccounts/billingprofiles/invoicesections

InvoiceSectionsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'Invoice Section 1'
    tags: {
      costCategory: 'Support'
      pcCode: 'A123456'
    }
  }
}
```

## microsoft.billing/billingaccounts/billingprofiles/invoicesections/transfers

InitiateTransfer
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/transfers@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    recipientEmailId: 'user@contoso.com'
  }
}
```

## microsoft.billing/billingaccounts/billingprofiles/policies

PoliciesPutByBillingProfile
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingProfiles/policies@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    invoiceSectionLabelManagement: 'Allowed'
    marketplacePurchases: 'AllAllowed'
    reservationPurchases: 'Allowed'
    savingsPlanPurchases: 'Allowed'
  }
}
```

## microsoft.billing/billingaccounts/billingroleassignments

BillingRoleAssignmentCreateOrUpdateByBillingAccount
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingRoleAssignments@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principalId: '00000000-0000-0000-0000-000000000000'
    principalTenantId: '076915e7-de10-4323-bb34-a58c904068bb'
    roleDefinitionId: '/providers/Microsoft.Billing/billingAccounts/7898901/billingRoleDefinitions/9f1983cb-2574-400c-87e9-34cf8e2280db'
    userEmailAddress: 'john@contoso.com'
  }
}
```

## microsoft.billing/billingaccounts/billingsubscriptionaliases

BillingSubscriptionAliasCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/billingSubscriptionAliases@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    billingFrequency: 'P1M'
    displayName: 'Subscription 3'
    quantity: 1
    skuId: '0001'
    termDuration: 'P1M'
  }
}
```

## microsoft.billing/billingaccounts/customers/policies

PoliciesPutByCustomerAtBillingAccount
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/customers/policies@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    viewCharges: 'Allowed'
  }
}
```

## microsoft.billing/billingaccounts/departments/billingroleassignments

BillingRoleAssignmentCreateOrUpdateByDepartment
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/departments/billingRoleAssignments@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principalId: '00000000-0000-0000-0000-000000000000'
    principalTenantId: '076915e7-de10-4323-bb34-a58c904068bb'
    roleDefinitionId: '/providers/Microsoft.Billing/billingAccounts/7898901/departments/12345/billingRoleDefinitions/9f1983cb-2574-400c-87e9-34cf8e2280db'
    userEmailAddress: 'john@contoso.com'
  }
}
```

## microsoft.billing/billingaccounts/enrollmentaccounts/billingroleassignments

BillingRoleAssignmentCreateOrUpdateByEnrollmentAccount
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principalId: '00000000-0000-0000-0000-000000000000'
    principalTenantId: '076915e7-de10-4323-bb34-a58c904068bb'
    roleDefinitionId: '/providers/Microsoft.Billing/billingAccounts/7898901/enrollmentAccounts/123456/billingRoleDefinitions/9f1983cb-2574-400c-87e9-34cf8e2280db'
    userEmailAddress: 'john@contoso.com'
  }
}
```

## microsoft.billing/billingaccounts/policies

PoliciesPutByBillingAccount
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/policies@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enterpriseAgreementPolicies: {
      authenticationType: 'OrganizationalAccountOnly'
    }
    marketplacePurchases: 'AllAllowed'
    reservationPurchases: 'Allowed'
    savingsPlanPurchases: 'NotAllowed'
  }
}
```

## microsoft.billing/billingrequests

BillingRequestsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Billing/billingRequests@2024-04-01' = {
  name: 'example'
  properties: {
    type: 'RoleAssignment'
    additionalInformation: {
      RoleId: '40000000-aaaa-bbbb-cccc-200000000006'
    }
    decisionReason: 'New team member'
    requestScope: '/providers/Microsoft.Billing/billingAccounts/00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31/billingProfiles/xxxx-xxxx-xxx-xxx'
    status: 'Pending'
  }
}
```
