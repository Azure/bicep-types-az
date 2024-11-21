# Microsoft.MarketplaceOrdering
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.marketplaceordering/offertypes/publishers/offers/plans/agreements

SetMarketplaceTerms
```bicep
resource exampleResource 'Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements@2021-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accepted: false
    licenseTextLink: 'test.licenseLink'
    marketplaceTermsLink: 'test.marketplaceTermsLink'
    plan: 'planid'
    privacyPolicyLink: 'test.privacyPolicyLink'
    product: 'offid'
    publisher: 'pubid'
    retrieveDatetime: '2017-08-15T11:33:07.12132Z'
    signature: 'ASDFSDAFWEFASDGWERLWER'
  }
}
```
