# Microsoft.Automation

## microsoft.automation/automationaccounts/softwareupdateconfigurations

Create software update configuration
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2017-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    scheduleInfo: {
      advancedSchedule: {
        weekDays: [
          'Monday'
          'Thursday'
        ]
      }
      expiryTime: '2018-11-09T11:22:57+00:00'
      frequency: 'Hour'
      interval: 1
      startTime: '2017-10-19T12:22:57+00:00'
      timeZone: 'America/Los_Angeles'
    }
    tasks: {
      postTask: {
        parameters: {
        }
        source: 'GetCache'
      }
      preTask: {
        parameters: {
          COMPUTERNAME: 'Computer1'
        }
        source: 'HelloWorld'
      }
    }
    updateConfiguration: {
      azureVirtualMachines: [
        '/subscriptions/5ae68d89-69a4-454f-b5ce-e443cc4e0067/resourceGroups/myresources/providers/Microsoft.Compute/virtualMachines/vm-01'
        '/subscriptions/5ae68d89-69a4-454f-b5ce-e443cc4e0067/resourceGroups/myresources/providers/Microsoft.Compute/virtualMachines/vm-02'
        '/subscriptions/5ae68d89-69a4-454f-b5ce-e443cc4e0067/resourceGroups/myresources/providers/Microsoft.Compute/virtualMachines/vm-03'
      ]
      duration: 'PT2H0M'
      nonAzureComputerNames: [
        'box1.contoso.com'
        'box2.contoso.com'
      ]
      operatingSystem: 'Windows'
      targets: {
        azureQueries: [
          {
            locations: [
              'Japan East'
              'UK South'
            ]
            scope: [
              '/subscriptions/5ae68d89-69a4-454f-b5ce-e443cc4e0067/resourceGroups/myresources'
              '/subscriptions/5ae68d89-69a4-454f-b5ce-e443cc4e0067'
            ]
            tagSettings: {
              filterOperator: 'All'
              tags: [
                {
                  tag1: [
                    'tag1Value1'
                    'tag1Value2'
                    'tag1Value3'
                  ]
                }
                {
                  tag2: [
                    'tag2Value1'
                    'tag2Value2'
                    'tag2Value3'
                  ]
                }
              ]
            }
          }
        ]
        nonAzureQueries: [
          {
            functionAlias: 'SavedSearch1'
            workspaceId: 'WorkspaceId1'
          }
          {
            functionAlias: 'SavedSearch2'
            workspaceId: 'WorkspaceId2'
          }
        ]
      }
      windows: {
        excludedKbNumbers: [
          '168934'
          '168973'
        ]
        includedUpdateClassifications: 'Critical'
        rebootSetting: 'IfRequired'
      }
    }
  }
}
```

## microsoft.automation/automationaccounts/sourcecontrols

Create or update a source control
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/sourceControls@2017-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'my description'
    autoSync: true
    branch: 'master'
    folderPath: '/folderOne/folderTwo'
    publishRunbook: true
    repoUrl: 'https://sampleUser.visualstudio.com/myProject/_git/myRepository'
    securityToken: {
      accessToken: '******'
      tokenType: 'PersonalAccessToken'
    }
    sourceType: 'VsoGit'
  }
}
```

## microsoft.automation/automationaccounts/sourcecontrols/sourcecontrolsyncjobs

Create or update a source control sync job
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2017-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    commitId: '9de0980bfb45026a3d97a1b0522d98a9f604226e'
  }
}
```

## microsoft.automation/automationaccounts/jobs

Create job
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/jobs@2017-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    parameters: {
      key01: 'value01'
      key02: 'value02'
    }
    runOn: ''
    runbook: {
      name: 'TestRunbook'
    }
  }
}
```
