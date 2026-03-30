# Microsoft.ConfidentialLedger
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.confidentialledger/ledgers

ConfidentialLedgerCreate
```bicep
resource exampleResource 'Microsoft.ConfidentialLedger/ledgers@2026-02-23' = {
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
    applicationType: 'ConfidentialLedger'
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
    scittConfiguration: '{\r\n        "configuration": {\r\n          "policy": {\r\n            "policyScript": "export function apply(phdr) { if (!phdr.issuer) {return \'Issuer not found\'} else if (phdr.issuer !== \'did:x509:0:sha256:HnwZ4lezuxq/GVcl/Sk7YWW170qAD0DZBLXilXet0jg=::eku:1.3.6.1.4.1.311.10.3.13\') { return \'Invalid issuer\'; } return true; }"\r\n          },\r\n          "authentication": {\r\n            "allowUnauthenticated": false,\r\n            "jwt": {\r\n              "requiredClaims": {\r\n                "aud": "scitt",\r\n                "iss": "https://authserver.com/",\r\n                "http://unique.claim/department_id": "654987"\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }'
    subjectName: 'CN=CCF Node'
    workerThreads: 0
  }
  tags: {
    additionalProps1: 'additional properties'
  }
}
```
