# Microsoft.DataLakeStore

## microsoft.datalakestore/accounts

Creates the specified Data Lake Store account
```bicep
resource exampleResource 'Microsoft.DataLakeStore/accounts@2016-11-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2'
  properties: {
    defaultGroup: 'test_default_group'
    encryptionConfig: {
      type: 'UserManaged'
      keyVaultMetaInfo: {
        encryptionKeyName: 'test_encryption_key_name'
        encryptionKeyVersion: 'encryption_key_version'
        keyVaultResourceId: '34adfa4f-cedf-4dc0-ba29-b6d1a69ab345'
      }
    }
    encryptionState: 'Enabled'
    firewallAllowAzureIps: 'Enabled'
    firewallRules: [
      {
        name: 'test_rule'
        properties: {
          endIpAddress: '2.2.2.2'
          startIpAddress: '1.1.1.1'
        }
      }
    ]
    firewallState: 'Enabled'
    newTier: 'Consumption'
    trustedIdProviderState: 'Enabled'
    trustedIdProviders: [
      {
        name: 'test_trusted_id_provider_name'
        properties: {
          idProvider: 'https://sts.windows.net/ea9ec534-a3e3-4e45-ad36-3afc5bb291c1'
        }
      }
    ]
  }
  tags: {
    test_key: 'test_value'
  }
}
```

## microsoft.datalakestore/accounts/firewallrules

Creates or updates the specified firewall rule. During update, the firewall rule with the specified name will be replaced with this new firewall rule
```bicep
resource exampleResource 'Microsoft.DataLakeStore/accounts/firewallRules@2016-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '2.2.2.2'
    startIpAddress: '1.1.1.1'
  }
}
```

## microsoft.datalakestore/accounts/virtualnetworkrules

Creates or updates the specified virtual network rule. During update, the virtual network rule with the specified name will be replaced with this new virtual network rule.
```bicep
resource exampleResource 'Microsoft.DataLakeStore/accounts/virtualNetworkRules@2016-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    subnetId: 'test_subnetId'
  }
}
```

## microsoft.datalakestore/accounts/trustedidproviders

Creates or updates the specified trusted identity provider. During update, the trusted identity provider with the specified name will be replaced with this new provider
```bicep
resource exampleResource 'Microsoft.DataLakeStore/accounts/trustedIdProviders@2016-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    idProvider: 'https://sts.windows.net/ea9ec534-a3e3-4e45-ad36-3afc5bb291c1'
  }
}
```
