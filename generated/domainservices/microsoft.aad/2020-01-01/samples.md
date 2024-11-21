# Microsoft.AAD

## microsoft.aad/domainservices

Create Domain Service
```bicep
resource exampleResource 'Microsoft.AAD/domainServices@2020-01-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    domainName: 'TestDomainService.com'
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
    replicaSets: [
      {
        location: 'West US'
        subnetId: '/subscriptions/1639790a-76a2-4ac4-98d9-8562f5dfcb4d/resourceGroups/TestNetworkResourceGroup/providers/Microsoft.Network/virtualNetworks/TestVnetWUS/subnets/TestSubnetWUS'
      }
    ]
  }
}
```

## microsoft.aad/domainservices/oucontainer

Create Domain Service
```bicep
resource exampleResource 'Microsoft.Aad/domainServices/ouContainer@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  accountName: 'AccountName1'
  password: '<password>'
  spn: 'Spn1'
}
```
