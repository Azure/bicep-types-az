# Microsoft.Billing
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.billing/billingaccounts/migrations

CreateOrUpdateMigrationMapping
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/migrations@2024-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destinationBillingScope: '/providers/Microsoft.Billing/billingAccounts/8a1d33b5-73a1-5e7f-4b29-5afaebaba7e4:03059466-caec-4aa5-b458-2071484f7d32_2019-05-31/billingProfiles/APS5-RFWH-BG7-PGB'
    status: 'Draft'
  }
}
```

Migration Initiation Details
```bicep
resource exampleResource 'Microsoft.Billing/billingAccounts/migrations@2024-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destinationBillingScope: '/providers/Microsoft.Billing/billingAccounts/8a1d33b5-73a1-5e7f-4b29-5afaebaba7e4:03059466-caec-4aa5-b458-2071484f7d32_2019-05-31/billingProfiles/APS5-RFWH-BG7-PGB'
    status: 'InProgress'
  }
}
```
