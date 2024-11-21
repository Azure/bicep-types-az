# Microsoft.Subscription
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.subscription/aliases

CreateAlias
```bicep
resource exampleResource 'Microsoft.Subscription/aliases@2020-09-01' = {
  name: 'example'
  properties: {
    billingScope: '/providers/Microsoft.Billing/billingAccounts/e879cf0f-2b4d-5431-109a-f72fc9868693:024cabf4-7321-4cf9-be59-df0c77ca51de_2019-05-31/billingProfiles/PE2Q-NOIT-BG7-TGB/invoiceSections/MTT4-OBS7-PJA-TGB'
    displayName: 'Contoso MCA subscription'
    workload: 'Production'
  }
}
```
