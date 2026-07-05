# Microsoft.TestBase
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.testbase/testbaseaccounts

TestBaseAccountCreate
```bicep
resource exampleResource 'Microsoft.TestBase/testBaseAccounts@2022-04-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    sku: {
      name: 'S0'
      tier: 'Standard'
    }
  }
}
```

## microsoft.testbase/testbaseaccounts/customerevents

CustomerEventCreate
```bicep
resource exampleResource 'Microsoft.TestBase/testBaseAccounts/customerEvents@2022-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    eventName: 'WeeklySummary'
    receivers: [
      {
        receiverType: 'UserObjects'
        receiverValue: {
          userObjectReceiverValue: {
            userObjectIds: [
              '245245245245325'
              '365365365363565'
            ]
          }
        }
      }
      {
        receiverType: 'DistributionGroup'
        receiverValue: {
          distributionGroupListReceiverValue: {
            distributionGroups: [
              'test@microsoft.com'
            ]
          }
        }
      }
    ]
  }
}
```

## microsoft.testbase/testbaseaccounts/packages

PackageCreate
```bicep
resource exampleResource 'Microsoft.TestBase/testBaseAccounts/packages@2022-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    applicationName: 'contoso-package2'
    blobPath: 'storageAccountPath/package.zip'
    flightingRing: 'Insider Beta Channel'
    targetOSList: [
      {
        osUpdateType: 'Security updates'
        targetOSs: [
          'Windows 10 2004'
          'Windows 10 1903'
        ]
      }
    ]
    tests: [
      {
        isActive: true
        testType: 'OutOfBoxTest'
        commands: [
          {
            name: 'Install'
            action: 'Install'
            alwaysRun: true
            applyUpdateBefore: false
            content: 'app/scripts/install/job.ps1'
            contentType: 'Path'
            maxRunTime: 1800
            restartAfter: true
            runAsInteractive: true
            runElevated: true
          }
          {
            name: 'Launch'
            action: 'Launch'
            alwaysRun: false
            applyUpdateBefore: true
            content: 'app/scripts/launch/job.ps1'
            contentType: 'Path'
            maxRunTime: 1800
            restartAfter: false
            runAsInteractive: true
            runElevated: true
          }
          {
            name: 'Close'
            action: 'Close'
            alwaysRun: false
            applyUpdateBefore: false
            content: 'app/scripts/close/job.ps1'
            contentType: 'Path'
            maxRunTime: 1800
            restartAfter: false
            runAsInteractive: true
            runElevated: true
          }
          {
            name: 'Uninstall'
            action: 'Uninstall'
            alwaysRun: true
            applyUpdateBefore: false
            content: 'app/scripts/uninstall/job.ps1'
            contentType: 'Path'
            maxRunTime: 1800
            restartAfter: false
            runAsInteractive: true
            runElevated: true
          }
        ]
      }
    ]
    version: '1.0.0'
  }
  tags: {
  }
}
```

## microsoft.testbase/testbaseaccounts/packages/favoriteprocesses

FavoriteProcessCreate
```bicep
resource exampleResource 'Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses@2022-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    actualProcessName: 'testApp&.exe'
  }
}
```
