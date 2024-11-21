# Microsoft.RecoveryServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.recoveryservices/vaults

Create or Update Recovery Services vault
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults@2021-08-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
  }
  sku: {
    name: 'Standard'
  }
}
```

Create or Update Vault with CustomerManagedKeys
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults@2021-08-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/85bf5e8c-3084-4f42-add2-746ebb7e97b2/resourcegroups/defaultrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplemsi: {
      }
    }
  }
  location: 'West US'
  properties: {
    encryption: {
      infrastructureEncryption: 'Enabled'
      kekIdentity: {
        userAssignedIdentity: '/subscriptions/85bf5e8c-3084-4f42-add2-746ebb7e97b2/resourcegroups/defaultrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplemsi'
      }
      keyVaultProperties: {
        keyUri: 'https://cmk2xkv.vault.azure.net/keys/Key1/0767b348bb1a4c07baa6c4ec0055d2b3'
      }
    }
  }
  sku: {
    name: 'Standard'
  }
}
```

Create or Update Vault with User Assigned Identity
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults@2021-08-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/85bf5e8c-3084-4f42-add2-746ebb7e97b2/resourcegroups/defaultrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplemsi: {
      }
    }
  }
  location: 'West US'
  properties: {
  }
  sku: {
    name: 'Standard'
  }
}
```

## microsoft.recoveryservices/vaults/certificates

Download vault credential file
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/certificates@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authType: 'AAD'
    certificate: 'MTTC3TCCAcWgAwIBAgIQEj9h+ZLlXK9KrqZX9UkAnzANBgkqhkiG9w0BAQUFADAeMRwwGgYDVQQDExNXaW5kb3dzIEF6dXJlIFRvb2xzMB4XDTE3MTIxODA5MTc1M1oXDTE3MTIyMzA5Mjc1M1owHjEcMBoGA1UEAxMTV2luZG93cyBBenVyZSBUb29sczCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAK773/eZZ69RbZZAT05r9MjUxu9y1L1Pn1EgPk62IPJyHlO3OZA922eSBahhP4bgmFljN4LVReqQ5eT/wqO0Zhc+yFkUy4U4RdbQLeUZt2W7yy9XLXgVvqeYDgsjg/QhHetgHArQBW+tlQq5+zPdU7zchI4rbShSJrWhLrZFWiOyFPsuAE4joUQHNlRifdCTsBGKk8HRCY3j1S3c4bfEn3zxlrvrXXssRuW5mJM95rMk0tskoRxXSCi6i9bnlki2Cs9mpVMmBFeofs41KwzlWU0TgpdD8s1QEdvfGB5NbByfetPX7MfJaTBeHZEGbv/Iq8l72u8sPBoOhcaH7qDE/mECAwEAAaMXMBUwEwYDVR0lBAwwCgYIKwYBBQUHAwIwDQYJKoZIhvcNAQEFBQADggEBAILfgHluye1Q+WelhgWhpBBdIq2C0btfV8eFsZaTlBUrM0fwpxQSlAWc2oYHVMQI4A5iUjbDOY35O4yc+TnWKDBKf+laqDP+yos4aiUPuadGUZfvDk7kuw7xeECs64JpHAIEKdRHFW9rD3gwG+nIWaDnEL/7rTyhL3kXrRW2MSUAL8g3GX8Z45c+MQY0jmASIqWdhGn1vpAGyA9mKkzsqg7FXjg8GZb24tGl5Ky85+ip4dkBfXinDD8WwaGyjhGGK97ErvNmN36qly/H0H1Qngiovg1FbHDmkcFO5QclnEJsFFmcO2CcHp5Fqh2wXn5O1cQaxCIRTpQ/uXRpDjl2wKs='
  }
}
```
