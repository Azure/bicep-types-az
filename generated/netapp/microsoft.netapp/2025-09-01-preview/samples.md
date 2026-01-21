# Microsoft.NetApp
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.netapp/activedirectoryconfigs

ActiveDirectoryConfigs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/activeDirectoryConfigs@2025-09-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.ManagedIdentity/userAssignedIdentities/userAssignedIdentity1': {
      }
    }
  }
  location: 'eastus'
  properties: {
    administrators: [
      'admin1'
    ]
    backupOperators: [
      'backupOp1'
    ]
    dns: [
      '10.10.10.4'
      '10.10.10.5'
    ]
    domain: 'example.net'
    organizationalUnit: 'OU=Computers,DC=corp,DC=contoso,DC=com'
    secretPassword: {
      identity: {
        userAssignedIdentity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.ManagedIdentity/userAssignedIdentities/userAssignedIdentity1'
      }
      keyVaultProperties: {
        keyVaultUri: 'https://example.vault.azure.net/'
        secretName: 'activeDirectoryPassword'
      }
    }
    securityOperators: [
      'secOp1'
    ]
    site: 'Default-First-Site-Name'
    smbServerName: 'smbServer'
    userName: 'admin1'
  }
  tags: {
    'ac-tag1': 'activeDirectoryConfig1'
  }
}
```

## microsoft.netapp/elasticaccounts

ElasticAccounts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/elasticAccounts@2025-09-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
  tags: {
    'ac-tag1': 'account1'
  }
}
```

## microsoft.netapp/elasticaccounts/elasticbackuppolicies

ElasticBackupPolicies_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/elasticAccounts/elasticBackupPolicies@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    dailyBackupsToKeep: 10
    monthlyBackupsToKeep: 10
    policyState: 'Enabled'
    weeklyBackupsToKeep: 10
  }
}
```

## microsoft.netapp/elasticaccounts/elasticbackupvaults

ElasticBackupVaults_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/elasticAccounts/elasticBackupVaults@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
}
```

## microsoft.netapp/elasticaccounts/elasticbackupvaults/elasticbackups

ElasticBackups_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/elasticAccounts/elasticBackupVaults/elasticBackups@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    elasticSnapshotResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/elasticAccounts/account1/elasticCapacityPools/pool1/elasticVolumes/volume1/elasticSnapshots/snap1'
    elasticVolumeResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/elasticAccounts/account1/elasticCapacityPools/pool1/elasticVolumes/volume1'
    label: 'myLabel'
    snapshotUsage: 'UseExistingSnapshot'
  }
}
```

## microsoft.netapp/elasticaccounts/elasticcapacitypools

ElasticCapacityPools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/elasticAccounts/elasticCapacityPools@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    activeDirectoryConfigResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/activeDirectoryConfigs/activeDirectoryConfig1'
    serviceLevel: 'ZoneRedundant'
    size: 4398046511104
    subnetResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
  }
  zones: [
    '1'
    '2'
    '3'
  ]
}
```

ElasticCapacityPools_CreateOrUpdateCMK
```bicep
resource exampleResource 'Microsoft.NetApp/elasticAccounts/elasticCapacityPools@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    activeDirectoryConfigResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/activeDirectoryConfigs/activeDirectoryConfig1'
    encryption: {
      elasticPoolEncryptionKeySource: 'NetApp'
      keyVaultPrivateEndpointResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.KeyVault/vaults/myKeyVault/privateEndpointConnections/myKeyVaultPec'
    }
    serviceLevel: 'ZoneRedundant'
    size: 4398046511104
    subnetResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
  }
  zones: [
    '1'
    '2'
    '3'
  ]
}
```

## microsoft.netapp/elasticaccounts/elasticcapacitypools/elasticvolumes

ElasticVolumes_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/elasticAccounts/elasticCapacityPools/elasticVolumes@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    dataProtection: {
      backup: {
        elasticBackupPolicyResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/elasticAccounts/account1/elasticBackupPolicies/elasticBackupPolicy1'
        elasticBackupVaultResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/elasticAccounts/account1/elasticBackupVaults/elasticBackupVault1'
        policyEnforcement: 'Enforced'
      }
      snapshot: {
        snapshotPolicyResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/elasticAccounts/account1/elasticSnapshotPolicies/policy1'
      }
    }
    exportPolicy: {
      rules: [
        {
          allowedClients: [
            '0.0.0.0/0'
          ]
          nfsv3: 'Enabled'
          nfsv4: 'Disabled'
          rootAccess: 'Disabled'
          ruleIndex: 1
          unixAccessRule: 'ReadOnly'
        }
      ]
    }
    filePath: 'my-unique-file-path'
    protocolTypes: [
      'NFSv3'
    ]
    size: 107374182400
  }
}
```

## microsoft.netapp/elasticaccounts/elasticcapacitypools/elasticvolumes/elasticsnapshots

ElasticSnapshots_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/elasticAccounts/elasticCapacityPools/elasticVolumes/elasticSnapshots@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.netapp/elasticaccounts/elasticsnapshotpolicies

ElasticSnapshotPolicies_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/elasticAccounts/elasticSnapshotPolicies@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    dailySchedule: {
      hour: 14
      minute: 30
      snapshotsToKeep: 4
    }
    hourlySchedule: {
      minute: 50
      snapshotsToKeep: 2
    }
    monthlySchedule: {
      daysOfMonth: [
        10
        11
        12
      ]
      hour: 14
      minute: 15
      snapshotsToKeep: 5
    }
    policyStatus: 'Enabled'
    weeklySchedule: {
      days: [
        'Wednesday'
      ]
      hour: 14
      minute: 45
      snapshotsToKeep: 3
    }
  }
}
```

## microsoft.netapp/netappaccounts

Accounts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts@2025-09-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
}
```

Accounts_CreateOrUpdateWithActiveDirectory
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts@2025-09-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    activeDirectories: [
      {
        aesEncryption: true
        dns: '10.10.10.3'
        domain: '10.10.10.3'
        ldapOverTLS: false
        ldapSigning: false
        organizationalUnit: 'OU=Engineering'
        password: '<REDACTED>'
        site: 'SiteName'
        smbServerName: 'SMBServer'
        username: 'ad_user_name'
      }
    ]
  }
}
```

## microsoft.netapp/netappaccounts/backuppolicies

BackupPolicies_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/backupPolicies@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    dailyBackupsToKeep: 10
    enabled: true
    monthlyBackupsToKeep: 10
    weeklyBackupsToKeep: 10
  }
}
```

## microsoft.netapp/netappaccounts/backupvaults

BackupVault_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/backupVaults@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
}
```

## microsoft.netapp/netappaccounts/backupvaults/backups

BackupsUnderBackupVault_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/backupVaults/backups@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    label: 'myLabel'
    volumeResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPool/pool1/volumes/volume1'
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools

Pools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    qosType: 'Auto'
    serviceLevel: 'Premium'
    size: 4398046511104
  }
}
```

Pools_CreateOrUpdate_CustomThroughput
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    customThroughputMibps: 128
    qosType: 'Manual'
    serviceLevel: 'Flexible'
    size: 4398046511104
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools/caches

Caches_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/caches@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    cacheSubnetResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/cacheVnet/subnets/cacheSubnet1'
    encryptionKeySource: 'Microsoft.NetApp'
    filepath: 'cache-west-us2-01'
    ldap: 'Enabled'
    ldapServerType: 'OpenLDAP'
    originClusterInformation: {
      peerAddresses: [
        '192.0.2.10'
        '192.0.2.11'
      ]
      peerClusterName: 'cluster1'
      peerVolumeName: 'originvol1'
      peerVserverName: 'vserver1'
    }
    peeringSubnetResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/icLifVnet/subnets/peeringSubnet1'
    size: 107374182400
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes

Volumes_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    creationToken: 'my-unique-file-path'
    serviceLevel: 'Premium'
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
    usageThreshold: 107374182400
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes/buckets

Buckets_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/buckets@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: '/path'
    fileSystemUser: {
      nfsUser: {
        groupId: 1000
        userId: 1001
      }
    }
    permissions: 'ReadOnly'
    server: {
      certificateObject: '<REDACTED>'
      fqdn: 'fullyqualified.domainname.com'
      onCertificateConflictAction: 'Update'
    }
  }
}
```

Buckets_CreateOrUpdateWithAkv
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/buckets@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: '/path'
    akvDetails: {
      certificateAkvDetails: {
        certificateKeyVaultUri: 'https://REDACTED.vault.azure.net/'
        certificateName: 'my-certificate'
      }
      credentialsAkvDetails: {
        credentialsKeyVaultUri: 'https://REDACTED.vault.azure.net/'
        secretName: 'my-secret'
      }
    }
    fileSystemUser: {
      nfsUser: {
        groupId: 1000
        userId: 1001
      }
    }
    permissions: 'ReadOnly'
    server: {
      fqdn: 'fullyqualified.domainname.com'
      onCertificateConflictAction: 'Fail'
    }
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes/snapshots

Snapshots_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes/subvolumes

Subvolumes_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: '/subvolumePath'
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes/volumequotarules

VolumeQuotaRules_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    quotaSizeInKiBs: 100005
    quotaTarget: '1821'
    quotaType: 'IndividualUserQuota'
  }
}
```

## microsoft.netapp/netappaccounts/snapshotpolicies

SnapshotPolicies_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/snapshotPolicies@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    dailySchedule: {
      hour: 14
      minute: 30
      snapshotsToKeep: 4
    }
    enabled: true
    hourlySchedule: {
      minute: 50
      snapshotsToKeep: 2
    }
    monthlySchedule: {
      daysOfMonth: '10,11,12'
      hour: 14
      minute: 15
      snapshotsToKeep: 5
    }
    weeklySchedule: {
      day: 'Wednesday'
      hour: 14
      minute: 45
      snapshotsToKeep: 3
    }
  }
}
```

## microsoft.netapp/netappaccounts/volumegroups

VolumeGroups_Create_Oracle
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/volumeGroups@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    groupMetaData: {
      applicationIdentifier: 'OR2'
      applicationType: 'ORACLE'
      groupDescription: 'Volume group'
    }
    volumes: [
      {
        name: 'test-ora-data1'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-ora-data1'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'ora-data1'
        }
        zones: [
          '1'
        ]
      }
      {
        name: 'test-ora-data2'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-ora-data2'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'ora-data2'
        }
        zones: [
          '1'
        ]
      }
      {
        name: 'test-ora-data3'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-ora-data3'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'ora-data3'
        }
        zones: [
          '1'
        ]
      }
      {
        name: 'test-ora-data4'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-ora-data4'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'ora-data4'
        }
        zones: [
          '1'
        ]
      }
      {
        name: 'test-ora-data5'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-ora-data5'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'ora-data5'
        }
        zones: [
          '1'
        ]
      }
      {
        name: 'test-ora-data6'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-ora-data6'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'ora-data6'
        }
        zones: [
          '1'
        ]
      }
      {
        name: 'test-ora-data7'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-ora-data7'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'ora-data7'
        }
        zones: [
          '1'
        ]
      }
      {
        name: 'test-ora-data8'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-ora-data8'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'ora-data8'
        }
        zones: [
          '1'
        ]
      }
      {
        name: 'test-ora-log'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-ora-log'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'ora-log'
        }
        zones: [
          '1'
        ]
      }
      {
        name: 'test-ora-log-mirror'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-ora-log-mirror'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'ora-log-mirror'
        }
        zones: [
          '1'
        ]
      }
      {
        name: 'test-ora-binary'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-ora-binary'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'ora-binary'
        }
        zones: [
          '1'
        ]
      }
      {
        name: 'test-ora-backup'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-ora-backup'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'ora-backup'
        }
        zones: [
          '1'
        ]
      }
    ]
  }
}
```

VolumeGroups_Create_SapHana
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/volumeGroups@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    groupMetaData: {
      applicationIdentifier: 'SH9'
      applicationType: 'SAP-HANA'
      groupDescription: 'Volume group'
    }
    volumes: [
      {
        name: 'test-data-mnt00001'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-data-mnt00001'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          proximityPlacementGroup: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg'
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'data'
        }
      }
      {
        name: 'test-log-mnt00001'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-log-mnt00001'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          proximityPlacementGroup: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg'
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'log'
        }
      }
      {
        name: 'test-shared'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-shared'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          proximityPlacementGroup: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg'
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'shared'
        }
      }
      {
        name: 'test-data-backup'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-data-backup'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          proximityPlacementGroup: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg'
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'data-backup'
        }
      }
      {
        name: 'test-log-backup'
        properties: {
          capacityPoolResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-log-backup'
          exportPolicy: {
            rules: [
              {
                allowedClients: '0.0.0.0/0'
                cifs: false
                hasRootAccess: true
                kerberos5ReadOnly: false
                kerberos5ReadWrite: false
                kerberos5iReadOnly: false
                kerberos5iReadWrite: false
                kerberos5pReadOnly: false
                kerberos5pReadWrite: false
                nfsv3: false
                nfsv41: true
                ruleIndex: 1
                unixReadOnly: true
                unixReadWrite: true
              }
            ]
          }
          protocolTypes: [
            'NFSv4.1'
          ]
          proximityPlacementGroup: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg'
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'log-backup'
        }
      }
    ]
  }
}
```
