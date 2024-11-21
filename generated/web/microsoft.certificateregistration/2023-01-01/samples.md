# Microsoft.CertificateRegistration
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.certificateregistration/certificateorders

Create Certificate order
```bicep
resource exampleResource 'Microsoft.CertificateRegistration/certificateOrders@2023-01-01' = {
  name: 'example'
  location: 'Global'
  properties: {
    autoRenew: true
    certificates: {
      SampleCertName1: {
        keyVaultId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/microsoft.keyvault/vaults/SamplevaultName'
        keyVaultSecretName: 'SampleSecretName1'
      }
      SampleCertName2: {
        keyVaultId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/microsoft.keyvault/vaults/SamplevaultName'
        keyVaultSecretName: 'SampleSecretName2'
      }
    }
    distinguishedName: 'CN=SampleCustomDomain.com'
    keySize: 2048
    productType: 'StandardDomainValidatedSsl'
    validityInYears: 2
  }
}
```

## microsoft.certificateregistration/certificateorders/certificates

Create Certificate
```bicep
resource exampleResource 'Microsoft.CertificateRegistration/certificateOrders/certificates@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Global'
  properties: {
    keyVaultId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/microsoft.keyvault/vaults/SamplevaultName'
    keyVaultSecretName: 'SampleSecretName1'
  }
}
```
