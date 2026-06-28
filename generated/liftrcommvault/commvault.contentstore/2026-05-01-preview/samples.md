# Commvault.ContentStore
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## commvault.contentstore/cloudaccounts

CloudAccounts_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Commvault.ContentStore/cloudAccounts@2026-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key7962: {
      }
    }
  }
  location: 'bavyppukburneeafcnxsqxbrfg'
  properties: {
    marketplace: {
      offerDetails: {
        offerId: 'pbnyreioacbsftuobfhwddnohj'
        planId: 'wnewdlphkbcrulrfeaktkhkdelqqta'
        planName: 'auzgjbpncaj'
        publisherId: 'einccuritnxnahrtapue'
        termId: 'mmsqorzesxlolytlstdvamcslybkyq'
        termUnit: 'nifrovdjqreymsdcjggo'
      }
      subscriptionId: 'fsfffbdpdvdcmidzxd'
      subscriptionStatus: 'PendingFulfillmentStart'
    }
    user: {
      emailAddress: 'user@example.com'
      firstName: 't'
      lastName: 'rvonafoiqsapyte'
      phoneNumber: 'cjcttfeixlzxfuwsjrclna'
      upn: 'xzahqqyakaicyouwlge'
    }
  }
  tags: {
    key5455: 'pripbsnxxaggv'
  }
}
```

## commvault.contentstore/cloudaccounts/plans

Plans_CreateOrupdate_MaximumSet
```bicep
resource exampleResource 'Commvault.ContentStore/cloudAccounts/plans@2026-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    location: 'dketngehuj'
    retention: {
      numberOfSnapshots: 28
    }
    schedules: [
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 13
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 28
        time: 'ghdlt'
        timeZone: 'nhjoxypdtzuco'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 13
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 28
        time: 'ghdlt'
        timeZone: 'nhjoxypdtzuco'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 13
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 28
        time: 'ghdlt'
        timeZone: 'nhjoxypdtzuco'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 13
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 28
        time: 'ghdlt'
        timeZone: 'nhjoxypdtzuco'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 13
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 28
        time: 'ghdlt'
        timeZone: 'nhjoxypdtzuco'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 13
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 28
        time: 'ghdlt'
        timeZone: 'nhjoxypdtzuco'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 13
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 28
        time: 'ghdlt'
        timeZone: 'nhjoxypdtzuco'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 13
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 28
        time: 'ghdlt'
        timeZone: 'nhjoxypdtzuco'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 13
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 28
        time: 'ghdlt'
        timeZone: 'nhjoxypdtzuco'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
      {
        backupType: 'INCREMENTAL'
        dayOfMonth: 13
        dayOfWeek: 'SUNDAY'
        frequency: 'daily'
        monthOfYear: 'JANUARY'
        runsEvery: 28
        time: 'ghdlt'
        timeZone: 'nhjoxypdtzuco'
        weekOfMonth: 'FIRST'
        weeklyDays: [
          'SUNDAY'
        ]
      }
    ]
    storagePlans: [
      {
        name: 'jouqgamcdxrlqorjccacamxuzdwzi'
        backupRuleType: 'ALL_JOBS'
        copyName: 'ufahixzwublokxtfipjfanjzxvs'
        copyPrecedence: 7
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 14
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 2
        retentionTime: 'monthly'
        storagePoolId: 'xppbmpgmmjsovfsrbfmmsuxrq'
      }
      {
        name: 'jouqgamcdxrlqorjccacamxuzdwzi'
        backupRuleType: 'ALL_JOBS'
        copyName: 'ufahixzwublokxtfipjfanjzxvs'
        copyPrecedence: 7
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 14
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 2
        retentionTime: 'monthly'
        storagePoolId: 'xppbmpgmmjsovfsrbfmmsuxrq'
      }
      {
        name: 'jouqgamcdxrlqorjccacamxuzdwzi'
        backupRuleType: 'ALL_JOBS'
        copyName: 'ufahixzwublokxtfipjfanjzxvs'
        copyPrecedence: 7
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 14
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 2
        retentionTime: 'monthly'
        storagePoolId: 'xppbmpgmmjsovfsrbfmmsuxrq'
      }
      {
        name: 'jouqgamcdxrlqorjccacamxuzdwzi'
        backupRuleType: 'ALL_JOBS'
        copyName: 'ufahixzwublokxtfipjfanjzxvs'
        copyPrecedence: 7
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 14
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 2
        retentionTime: 'monthly'
        storagePoolId: 'xppbmpgmmjsovfsrbfmmsuxrq'
      }
      {
        name: 'jouqgamcdxrlqorjccacamxuzdwzi'
        backupRuleType: 'ALL_JOBS'
        copyName: 'ufahixzwublokxtfipjfanjzxvs'
        copyPrecedence: 7
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 14
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 2
        retentionTime: 'monthly'
        storagePoolId: 'xppbmpgmmjsovfsrbfmmsuxrq'
      }
      {
        name: 'jouqgamcdxrlqorjccacamxuzdwzi'
        backupRuleType: 'ALL_JOBS'
        copyName: 'ufahixzwublokxtfipjfanjzxvs'
        copyPrecedence: 7
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 14
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 2
        retentionTime: 'monthly'
        storagePoolId: 'xppbmpgmmjsovfsrbfmmsuxrq'
      }
      {
        name: 'jouqgamcdxrlqorjccacamxuzdwzi'
        backupRuleType: 'ALL_JOBS'
        copyName: 'ufahixzwublokxtfipjfanjzxvs'
        copyPrecedence: 7
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 14
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 2
        retentionTime: 'monthly'
        storagePoolId: 'xppbmpgmmjsovfsrbfmmsuxrq'
      }
      {
        name: 'jouqgamcdxrlqorjccacamxuzdwzi'
        backupRuleType: 'ALL_JOBS'
        copyName: 'ufahixzwublokxtfipjfanjzxvs'
        copyPrecedence: 7
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 14
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 2
        retentionTime: 'monthly'
        storagePoolId: 'xppbmpgmmjsovfsrbfmmsuxrq'
      }
      {
        name: 'jouqgamcdxrlqorjccacamxuzdwzi'
        backupRuleType: 'ALL_JOBS'
        copyName: 'ufahixzwublokxtfipjfanjzxvs'
        copyPrecedence: 7
        extendedRetention: [
          {
            backupRuleType: 'ALL_JOBS'
            retentionPeriod: 14
            retentionTime: 'monthly'
          }
        ]
        retentionPeriod: 2
        retentionTime: 'monthly'
        storagePoolId: 'xppbmpgmmjsovfsrbfmmsuxrq'
      }
    ]
  }
}
```

## commvault.contentstore/cloudaccounts/protectiongroups

ProtectionGroups_CreateOrupdate_MaximumSet
```bicep
resource exampleResource 'Commvault.ContentStore/cloudAccounts/protectionGroups@2026-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataSourceType: 'AzureVM'
    plan: 'yzvmkwtbtzsfmkszmcocucmpbm'
    protectionStatus: 'all'
    resources: {
      manual: [
        'nrkdentpshfypfnrirzyy'
      ]
      matchRules: {
        matchType: 'all'
        rules: [
          {
            operator: 'contains'
            property: 'resourceGroup'
            value: 'yfiqtixfafso'
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
resource exampleResource 'Commvault.ContentStore/cloudAccounts/storages@2026-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    class: 'COLD'
    location: 'vfjt'
    storageType: 'Air_Gap_Protect'
    vendor: 'Azure_Blob_Storage'
  }
}
```
