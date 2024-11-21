# Microsoft.AAD
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.aad/domainservices

Create Domain Service
```bicep
resource exampleResource 'Microsoft.AAD/domainServices@2017-01-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    domainName: 'zdomain.zforest.com'
    domainSecuritySettings: {
      ntlmV1: 'Enabled'
      syncNtlmPasswords: 'Enabled'
      tlsV1: 'Disabled'
    }
    filteredSync: 'Enabled'
    ldapsSettings: {
      externalAccess: 'Enabled'
      ldaps: 'Enabled'
      pfxCertificate: 'MIIDPDCCAiSgAwIBAgIQQUI9P6tq2p9OFIJa7DLNvTANBgkqhkiG9w0BAQsFADAgMR4w...'
      pfxCertificatePassword: '<pfxCertificatePassword>'
    }
    notificationSettings: {
      additionalRecipients: [
        'jicha@microsoft.com'
        'caalmont@microsoft.com'
      ]
      notifyDcAdmins: 'Enabled'
      notifyGlobalAdmins: 'Enabled'
    }
    subnetId: '/subscriptions/1639790a-76a2-4ac4-98d9-8562f5dfcb4d/resourceGroups/Default-Networking/providers/Microsoft.ClassicNetwork/virtualNetworks/DCIaasTmpWusNet/subnets/Subnet-1'
  }
}
```
