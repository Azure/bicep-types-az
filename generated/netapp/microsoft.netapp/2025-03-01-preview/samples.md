# Microsoft.NetApp
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.netapp/netappaccounts

Accounts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts@2025-03-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
}
```

Accounts_CreateOrUpdateWithActiveDirectory
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts@2025-03-01-preview' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/backupPolicies@2025-03-01-preview' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/backupVaults@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
}
```

## microsoft.netapp/netappaccounts/backupvaults/backups

BackupsUnderBackupVault_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/backupVaults/backups@2025-03-01-preview' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools@2025-03-01-preview' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools@2025-03-01-preview' = {
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

## microsoft.netapp/netappaccounts/capacitypools/volumes

Volumes_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2025-03-01-preview' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/buckets@2025-03-01-preview' = {
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
    server: {
      certificateObject: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURuVENDQW9XZ0F3SUJBZ0lRR3FXdnRxeHBvSTFJV3Z4VGdJbElWREFOQmdrcWhraUc5dzBCQVFzRkFEQlYKTVJNd0VRWUtDWkltaVpQeUxHUUJHUllEWTI5dE1SY3dGUVlLQ1pJbWlaUHlMR1FCR1JZSGFHRnlhV3R5WWpFbApNQ01HQTFVRUF4TWNhR0Z5YVd0eVlpMVhTVTR0TWtKUFZrRkZTMEkwTkVJdFEwRXRNakFlRncweU1EQTFNRFV3Ck56TTVORGxhRncweU1EQTFNRFl3TnpRNU5EaGFNRlV4RXpBUkJnb0praWFKay9Jc1pBRVpGZ05qYjIweEZ6QVYKQmdvSmtpYUprL0lzWkFFWkZnZG9ZWEpwYTNKaU1TVXdJd1lEVlFRREV4eG9ZWEpwYTNKaUxWZEpUaTB5UWs5VwpRVVZMUWpRMFFpMURRUzB5TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFqMHByCnhaaXpNaDBqYnRwN1ZOc0JrRVJ2MVpZT0MzMEtqaGRWdEExRm1MeFM2cXlycmpMZUdXOXRSd2ZnUkR0eVBodTIKZVJTcVpTUjF6Z1hZR0s0Nys3Y3F0YnB2UElOektCb0dOWERIVTNxVWlleXJWSjFDVzRKNjJodUdrbUV1VVVkMApKMXBxNTVxbjk1SmRUbWh1dmZlTUxxeHB5c01nbGVnY281ZFhoN0hsQkhwaTNKMFN4ZnhVWmxKMVZiOFJZVEZhCkJiMGFlTVZaRzRKeVREaktiMlR1TmFXOG1aUE5vOFBMRDRocjdndFNZUEQvQ1dVVGV5QlpoZC9LTzNPczlWVEIKYmpLUGtWd0J2WEs2SlFMSGprNFBHS3VYZDhaWVFyajBtOWNIZDNmcWNYTXlQUnQ2TlJ4ak0yMTUxckFzSkVhNgpWZC9ta056akpXalBrT2VZUVFJREFRQUJvMmt3WnpBVEJna3JCZ0VFQVlJM0ZBSUVCaDRFQUVNQVFUQU9CZ05WCkhROEJBZjhFQkFNQ0FZWXdEd1lEVlIwVEFRSC9CQVV3QXdFQi96QWRCZ05WSFE0RUZnUVVDVEc2ODJSay9kMysKWGtHa0VMakRFMjI4ZjNnd0VBWUpLd1lCQkFHQ054VUJCQU1DQVFBd0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQgpBR1RjTTNnWExIU05wS014RHEvUFpZbWZCMmNlN3VhMmxxbXpzZSt4QmthSTE0WXdzZE5ZQjZBVTNFWDM3QWpZCjd3bm9xQzY1N0U2RVhTODVDckoyNXJNTHo4OEtONGI3cUg5RUowSS9XVHg5YTdUT0ZENENWQThuL0xwNGh1Ym4KNlBFalY5NFlZWXBXTG1hTkkvbGFReWsxSHVJbDFSTCttVDFnSWQ4ZWZXZ1UvNmlVVEw3eGMrdjkyNHBuTHhISwpOSnNTV3c0NFk5a0R5SU9KOXFjWUlBN1lhTkxPZTRjSysvQlRvdDh0dVVKT1hHLzdBRmtxR2EyQVA4MmFZOStKCnkwSmU2OG5nTHJ1dVU4VHpneVpqdkFHcTRrVEVOdWFoaFdHVC9KWkEzOXhSNUV4MmNMUUplcE5NdnlZbUZ3Z1UKME8zYlA0OWNBVFVCMXoyQ3Y5aTRQbVk9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K'
      fqdn: 'fullyqualified.domainname.com'
    }
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes/snapshots

Snapshots_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes/subvolumes

Subvolumes_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes@2025-03-01-preview' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules@2025-03-01-preview' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/snapshotPolicies@2025-03-01-preview' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/volumeGroups@2025-03-01-preview' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/volumeGroups@2025-03-01-preview' = {
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
