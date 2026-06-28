# Commvault.ContentStore
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## commvault.contentstore/cloudaccounts

CloudAccounts_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Commvault.ContentStore/cloudAccounts@2025-01-01-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key2187: {
      }
    }
  }
  location: 'rnabz'
  properties: {
    marketplace: {
      offerDetails: {
        offerId: 'ezakpuy'
        planId: 'gx'
        planName: 'rthezqpqmubaplxtomikloht'
        publisherId: 'getsosssttt'
        termId: 'xhojpi'
        termUnit: 'llcvt'
      }
      subscriptionId: 'hsaaoltdgduclmfwnnbpuqu'
      subscriptionStatus: 'PendingFulfillmentStart'
    }
    user: {
      emailAddress: 'sample-email@example.com'
      firstName: 'kzie'
      lastName: 'arfdzvyixntuomyzsongeaka'
      phoneNumber: 'ogxajbkvpddnukezn'
      upn: 'nwnnfcajymkysehl'
    }
  }
  tags: {
    key4440: 'teaxncdnomltva'
  }
}
```

## commvault.contentstore/cloudaccounts/plans

Plans_CreateOrupdate_MaximumSet
```bicep
resource exampleResource 'Commvault.ContentStore/cloudAccounts/plans@2025-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    location: 'qpdwdryidlpgcirnzkyclgdglm'
    retention: {
      numberOfSnapshots: 2
    }
    schedules: [
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 12
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 29
        time: 'ojytia'
        timeZone: 'dpcnjpgcrnutlgxwxfvmozjdnp'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 12
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 29
        time: 'ojytia'
        timeZone: 'dpcnjpgcrnutlgxwxfvmozjdnp'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 12
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 29
        time: 'ojytia'
        timeZone: 'dpcnjpgcrnutlgxwxfvmozjdnp'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 12
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 29
        time: 'ojytia'
        timeZone: 'dpcnjpgcrnutlgxwxfvmozjdnp'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
    ]
    storagePlans: [
      {
        name: 'ub'
        backupRuleType: 'ALL_JOBS'
        copyName: 'yw'
        copyPrecedence: 29
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 11
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 4
        retentionTime: 'monthly'
        storagePoolId: 'kjtkdzoackwspfxszbhigoyratvlnx'
      }
      {
        name: 'ub'
        backupRuleType: 'ALL_JOBS'
        copyName: 'yw'
        copyPrecedence: 29
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 11
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 4
        retentionTime: 'monthly'
        storagePoolId: 'kjtkdzoackwspfxszbhigoyratvlnx'
      }
      {
        name: 'ub'
        backupRuleType: 'ALL_JOBS'
        copyName: 'yw'
        copyPrecedence: 29
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 11
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 4
        retentionTime: 'monthly'
        storagePoolId: 'kjtkdzoackwspfxszbhigoyratvlnx'
      }
      {
        name: 'ub'
        backupRuleType: 'ALL_JOBS'
        copyName: 'yw'
        copyPrecedence: 29
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 11
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 4
        retentionTime: 'monthly'
        storagePoolId: 'kjtkdzoackwspfxszbhigoyratvlnx'
      }
      {
        name: 'ub'
        backupRuleType: 'ALL_JOBS'
        copyName: 'yw'
        copyPrecedence: 29
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 11
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 4
        retentionTime: 'monthly'
        storagePoolId: 'kjtkdzoackwspfxszbhigoyratvlnx'
      }
      {
        name: 'ub'
        backupRuleType: 'ALL_JOBS'
        copyName: 'yw'
        copyPrecedence: 29
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 11
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 4
        retentionTime: 'monthly'
        storagePoolId: 'kjtkdzoackwspfxszbhigoyratvlnx'
      }
      {
        name: 'ub'
        backupRuleType: 'ALL_JOBS'
        copyName: 'yw'
        copyPrecedence: 29
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 11
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 4
        retentionTime: 'monthly'
        storagePoolId: 'kjtkdzoackwspfxszbhigoyratvlnx'
      }
      {
        name: 'ub'
        backupRuleType: 'ALL_JOBS'
        copyName: 'yw'
        copyPrecedence: 29
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 11
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 4
        retentionTime: 'monthly'
        storagePoolId: 'kjtkdzoackwspfxszbhigoyratvlnx'
      }
      {
        name: 'ub'
        backupRuleType: 'ALL_JOBS'
        copyName: 'yw'
        copyPrecedence: 29
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 11
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 4
        retentionTime: 'monthly'
        storagePoolId: 'kjtkdzoackwspfxszbhigoyratvlnx'
      }
      {
        name: 'ub'
        backupRuleType: 'ALL_JOBS'
        copyName: 'yw'
        copyPrecedence: 29
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 11
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 4
        retentionTime: 'monthly'
        storagePoolId: 'kjtkdzoackwspfxszbhigoyratvlnx'
      }
    ]
  }
}
```

## commvault.contentstore/cloudaccounts/protectiongroups

ProtectionGroups_CreateOrupdate_MaximumSet
```bicep
resource exampleResource 'Commvault.ContentStore/cloudAccounts/protectionGroups@2025-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataSourceType: 'AzureVM'
    plan: 'muxrxbqm'
    protectionStatus: 'all'
    resources: {
      manual: [
        'tnzhpi'
      ]
      matchRules: {
        matchType: 'all'
        rules: [
          {
            operator: 'contains'
            property: 'resourceGroup'
            value: 'zaagvqlzh'
          }
        ]
      }
    }
  }
}
```

## commvault.contentstore/cloudaccounts/storages

Storages_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Commvault.ContentStore/cloudAccounts/storages@2025-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    class: 'COLD'
    location: 'wyscuyguhnebaydfqdvurhroermphoatcaulmtccjmp'
    storageType: 'Air_Gap_Protect'
    vendor: 'Azure_Blob_Storage'
  }
}
```
