# Microsoft.ConfidentialLedger

## microsoft.confidentialledger/ledgers

ConfidentialLedgerCreate
```bicep
resource exampleResource 'Microsoft.ConfidentialLedger/ledgers@2021-05-13-preview' = {
  name: 'example'
  location: 'EastUS'
  properties: {
    aadBasedSecurityPrincipals: [
      {
        ledgerRoleName: 'Administrator'
        principalId: '34621747-6fc8-4771-a2eb-72f31c461f2e'
        tenantId: 'bce123b9-2b7b-4975-8360-5ca0b9b1cd08'
      }
    ]
    certBasedSecurityPrincipals: [
      {
        cert: '-----BEGIN CERTIFICATE-----MIIBsjCCATigAwIBAgIUZWIbyG79TniQLd2UxJuU74tqrKcwCgYIKoZIzj0EAwMwEDEOMAwGA1UEAwwFdXNlcjAwHhcNMjEwMzE2MTgwNjExWhcNMjIwMzE2MTgwNjExWjAQMQ4wDAYDVQQDDAV1c2VyMDB2MBAGByqGSM49AgEGBSuBBAAiA2IABBiWSo/j8EFit7aUMm5lF+lUmCu+IgfnpFD+7QMgLKtxRJ3aGSqgS/GpqcYVGddnODtSarNE/HyGKUFUolLPQ5ybHcouUk0kyfA7XMeSoUA4lBz63Wha8wmXo+NdBRo39qNTMFEwHQYDVR0OBBYEFPtuhrwgGjDFHeUUT4nGsXaZn69KMB8GA1UdIwQYMBaAFPtuhrwgGjDFHeUUT4nGsXaZn69KMA8GA1UdEwEB/wQFMAMBAf8wCgYIKoZIzj0EAwMDaAAwZQIxAOnozm2CyqRwSSQLls5r+mUHRGRyXHXwYtM4Dcst/VEZdmS9fqvHRCHbjUlO/+HNfgIwMWZ4FmsjD3wnPxONOm9YdVn/PRD7SsPRPbOjwBiE4EBGaHDsLjYAGDSGi7NJnSkA-----END CERTIFICATE-----'
        ledgerRoleName: 'Reader'
      }
    ]
    ledgerType: 'Public'
  }
  tags: {
    additionalProps1: 'additional properties'
  }
}
```
