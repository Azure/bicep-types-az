# Microsoft.ConfidentialLedger
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.confidentialledger/ledgers

ConfidentialLedgerCreate
```bicep
resource exampleResource 'Microsoft.ConfidentialLedger/ledgers@2025-06-10-preview' = {
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
    hostLevel: 'Info'
    ledgerSku: 'Standard'
    ledgerType: 'Public'
    maxBodySizeInMb: 1
    nodeCount: 3
    subjectName: 'CN=CCF Node'
    workerThreads: 0
    writeLBAddressPrefix: 'write'
  }
  tags: {
    additionalProps1: 'additional properties'
  }
}
```
