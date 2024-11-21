# Microsoft.ConfidentialLedger
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.confidentialledger/ledgers

ConfidentialLedgerCreate
```bicep
resource exampleResource 'Microsoft.ConfidentialLedger/ledgers@2020-12-01-preview' = {
  name: 'example'
  location: 'WestUS'
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
        cert: '-----BEGIN CERTIFICATE-----\nMIIDBTCCAe2gAwIBAgIQXVogj9BAf49IpuOSIvztNDANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTIwMDMxNzAwMDAwMFoXDTI1MDMxNzAwMDAwMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANfLmdz9yIDskpZzrMXiDeVlCs75ZunrzwzBW5lz7UxdBjHu7Q9iT32otlBp++LOwBcKsVjuQ0GUbulX0FLsfLjEeCe58ZtSn//+6VRFSScg7i+WvDwEUWELR+vMPtCGcXBTpILEnYbSMz0No4+Jpkc1lyMIfDP/KSeqojo74xfW4RKtAgv39uwZ5Yz2hZ/IcWOvaQqMXp1lqhXLFIRWbwjLYYUbmwGwYpQ6++Cml0ucQoMkgYT88HpA/fzXQlLgrHamr3eE/lVp26ZWwfGLAvkdNBabQRSrk8k/c6BmY1mYpUFZo+795PI16mAdp1ioEwH8I5osis+/BR5GhPpwiA8CAwEAAaMhMB8wHQYDVR0OBBYEFF8MDGklOGhGNVJvsHHRCaqtzexcMA0GCSqGSIb3DQEBCwUAA4IBAQCKkegw/mdpCVl1lOpgU4G9RT+1gtcPqZK9kpimuDggSJju6KUQlOCi5/lIH5DCzpjFdmG17TjWVBNve5kowmrhLzovY0Ykk7+6hYTBK8dNNSmd4SK7zY++0aDIuOzHP2Cur+kgFC0gez50tPzotLDtMmp40gknXuzltwJfezNSw3gLgljDsGGcDIXK3qLSYh44qSuRGwulcN2EJUZBI9tIxoODpaWHIN8+z2uZvf8JBYFjA3+n9FRQn51X16CTcjq4QRTbNVpgVuQuyaYnEtx0ZnDvguB3RjGSPIXTRBkLl2x7e8/6uAZ6tchw8rhcOtPsFgJuoJokGjvcUSR/6Eqd\n-----END CERTIFICATE-----'
        ledgerRoleName: 'Reader'
      }
    ]
    ledgerStorageAccount: 'dummyStorageAccount'
    ledgerType: 'Public'
  }
  tags: {
    additionalProps1: 'additional properties'
  }
}
```
