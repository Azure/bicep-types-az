# Microsoft.MarketplaceOrdering

## microsoft.marketplaceordering/offertypes/publishers/offers/plans/agreements

SetMarketplaceTerms
```bicep
resource exampleResource 'Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements@2015-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accepted: false
    licenseTextLink: 'test.licenseLink'
    plan: 'planid'
    privacyPolicyLink: 'test.privacyPolicyLink'
    product: 'offid'
    publisher: 'pubid'
    retrieveDatetime: '2017-08-15T11:33:07.12132Z'
    signature: 'ASDFSDAFWEFASDGWERLWER'
  }
}
```
