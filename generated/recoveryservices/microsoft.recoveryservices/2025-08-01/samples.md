# Microsoft.RecoveryServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.recoveryservices/vaults

Create or Update Recovery Services vault
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults@2025-08-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    publicNetworkAccess: 'Enabled'
  }
  sku: {
    name: 'Standard'
  }
}
```

Create or Update Vault performing critical operation With MUA
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults@2025-08-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/85bf5e8c-3084-4f42-add2-746ebb7e97b2/resourcegroups/defaultrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplemsi': {
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
    publicNetworkAccess: 'Enabled'
    resourceGuardOperationRequests: [
      '/subscriptions/38304e13-357e-405e-9e9a-220351dcce8c/resourcegroups/ankurResourceGuard1/providers/Microsoft.DataProtection/resourceGuards/ResourceGuard38-1/modifyEncryptionSettings/default'
    ]
  }
  sku: {
    name: 'Standard'
  }
}
```

Create or Update Vault with CustomerManagedKeys
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults@2025-08-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/85bf5e8c-3084-4f42-add2-746ebb7e97b2/resourcegroups/defaultrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplemsi': {
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
    publicNetworkAccess: 'Enabled'
  }
  sku: {
    name: 'Standard'
  }
}
```

Create or Update Vault With Monitoring Setting
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults@2025-08-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    monitoringSettings: {
      azureMonitorAlertSettings: {
        alertsForAllFailoverIssues: 'Disabled'
        alertsForAllJobFailures: 'Enabled'
        alertsForAllReplicationIssues: 'Enabled'
      }
      classicAlertSettings: {
        alertsForCriticalOperations: 'Disabled'
        emailNotificationsForSiteRecovery: 'Enabled'
      }
    }
    publicNetworkAccess: 'Enabled'
  }
  sku: {
    name: 'Standard'
  }
}
```

Create or Update Vault With Redundancy Setting
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults@2025-08-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    publicNetworkAccess: 'Enabled'
    redundancySettings: {
      crossRegionRestore: 'Enabled'
      standardTierStorageRedundancy: 'GeoRedundant'
    }
  }
  sku: {
    name: 'Standard'
  }
}
```

Create or Update Vault with Source scan configuration
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults@2025-08-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    publicNetworkAccess: 'Enabled'
    securitySettings: {
      sourceScanConfiguration: {
        sourceScanIdentity: {
          operationIdentityType: 'SystemAssigned'
        }
        state: 'Enabled'
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
resource exampleResource 'Microsoft.RecoveryServices/vaults@2025-08-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/85bf5e8c-3084-4f42-add2-746ebb7e97b2/resourcegroups/defaultrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplemsi': {
      }
    }
  }
  location: 'West US'
  properties: {
    publicNetworkAccess: 'Enabled'
  }
  sku: {
    name: 'Standard'
  }
}
```

## microsoft.recoveryservices/vaults/certificates

Download vault credential file
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/certificates@2025-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authType: 'AAD'
    certificate: 'TUlJRE5EQ0NBaHlnQXdJQkFnSVFDYUxFKzVTSlNVeWdncDM0VS9HUm9qQU5CZ2txaGtpRzl3MEJBUXNGQURBWE1SVXdFd1lEVlFRREV3eGhiV05vWVc1a2JpNWpiMjB3SGhjTk1qSXhNREkwTVRJd05qRTRXaGNOTWpNeE1ESTBNVEl4TmpFNFdqQVhNUlV3RXdZRFZRUURFd3hoYldOb1lXNWtiaTVqYjIwd2dnRWlNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJEd0F3Z2dFS0FvSUJBUUN4cFpwS293a2p4VU9VWkpLT2JvdGdPWXkzaW9UVkxMMmZyaW9nZVN1Qm5IMWw3aVdQWW9kUHRoWS8yVmh6ZFVUckNXL25pNUh3b0JHYzZMMHF6UGlBWXpHek94RmpMQjZjdFNkbm9nL1A4eEV2OGE0cnJWZlBZdS9INStoTGx3N0RubXlTNWs4TU9sSVhUemVWNkxZV2I2RWlpTFppc0k1R3lLU1liemNaQmJKdnhLTVdGdHRCV08xZUwzUWNUejlpb1VGQzVnRlFKQzg3YXFkeDR1Wk9WYzRLM3Ixb09sTFBKdmRLN25YU3VWci9ZOC80ZHhCdDJZUTRia0hjM2EzcUNBbTZrV0QzamRiajhCZmhlWWNVNjFFZ3llVFV2MlI4dzRubWJqVXZxRW05cDZtTG4xMTdEWWpQTHNFODVTL0FpQmF0dkNhQ3hCZ0lxb1N1blBOUkFnTUJBQUdqZkRCNk1BNEdBMVVkRHdFQi93UUVBd0lGb0RBSkJnTlZIUk1FQWpBQU1CMEdBMVVkSlFRV01CUUdDQ3NHQVFVRkJ3TUJCZ2dyQmdFRkJRY0RBakFmQmdOVkhTTUVHREFXZ0JRR1NZcDJMUTJwOE5wMHUzRThJZDdRUjRTQXBqQWRCZ05WSFE0RUZnUVVCa21LZGkwTnFmRGFkTHR4UENIZTBFZUVnS1l3RFFZSktvWklodmNOQVFFTEJRQURnZ0VCQUp2ZG9yRmJ4cExZaUhYRHpnR001WmxMWTRDZE1LYW5BdzVDZDNFVnhDbkhtT05ISnpLRmpzdHZjdUN1TDZ2S1ptci9abm5ENXNLUnE0d0xnTXV6dlNXNGtQTXlWeENrYzdVYnNZSWJCSXNIUDl3cUNmcUY5aG5LSE9YZFJJV2tBVXhnbmYxSlpLZjR1NlpTSzZ3dExaME9VT0c5Mmd3SlB2eW5PVmJoeWpqczdQTVpONEw1djZyeHJkRWp0WG5sYzIvRDlnS0NOTFhFZHdRM0dzS05ZTGZvYy9DT3JmbEIrRHVPSThrVzM0WmxzYlFHelgyQ3ArWVVlSDNrQlBjY3RpUWNURHFQcW5YS0NNMTJ6MGZDTjVpNXRkRlUrM0VzemZBQkpiOEZpU2ZCWFF1UUZRRDNDTDkraVdjZXhrMmxQako2akZIbHZtak9XbTdjQllHZlc4ST0='
  }
}
```
