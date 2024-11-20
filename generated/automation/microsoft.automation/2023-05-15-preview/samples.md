# Microsoft.Automation

## microsoft.automation/automationaccounts/softwareupdateconfigurations

Create software update configuration
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2023-05-15-preview' = {
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
              tags: {
                tag1: [
                  'tag1Value1'
                  'tag1Value2'
                  'tag1Value3'
                ]
                tag2: [
                  'tag2Value1'
                  'tag2Value2'
                  'tag2Value3'
                ]
              }
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

## microsoft.automation/automationaccounts

Create or update automation account
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts@2023-05-15-preview' = {
  name: 'example'
  name: 'myAutomationAccount9'
  location: 'East US 2'
  properties: {
    sku: {
      name: 'Free'
    }
  }
}
```

## microsoft.automation/automationaccounts/certificates

Create or update a certificate
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/certificates@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'testCert'
  properties: {
    description: 'Sample Cert'
    base64Value: 'base 64 value of cert'
    isExportable: false
    thumbprint: 'thumbprint of cert'
  }
}
```

## microsoft.automation/automationaccounts/connections

Create or update connection
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/connections@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'mysConnection'
  properties: {
    description: 'my description goes here'
    connectionType: {
      name: 'Azure'
    }
    fieldDefinitionValues: {
      AutomationCertificateName: 'mysCertificateName'
      SubscriptionID: 'subid'
    }
  }
}
```

## microsoft.automation/automationaccounts/connectiontypes

Create or update connection type
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/connectionTypes@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'myCT'
  properties: {
    fieldDefinitions: {
      myBoolField: {
        type: 'bool'
        isEncrypted: false
        isOptional: false
      }
      myStringField: {
        type: 'string'
        isEncrypted: false
        isOptional: false
      }
      myStringFieldEncrypted: {
        type: 'string'
        isEncrypted: true
        isOptional: false
      }
    }
    isGlobal: false
  }
}
```

## microsoft.automation/automationaccounts/credentials

Create a credential
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/credentials@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'myCredential'
  properties: {
    description: 'my description goes here'
    password: '<password>'
    userName: 'mylingaiah'
  }
}
```

## microsoft.automation/automationaccounts/compilationjobs

Create or update a DSC Compilation job
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/compilationjobs@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    configuration: {
      name: 'SetupServer'
    }
  }
}
```

## microsoft.automation/automationaccounts/configurations

Create or Update Configuration
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/configurations@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'SetupServer'
  location: 'East US 2'
  properties: {
    description: 'sample configuration'
    source: {
      type: 'embeddedContent'
      hash: {
        algorithm: 'sha256'
        value: 'A9E5DB56BA21513F61E0B3868816FDC6D4DF5131F5617D7FF0D769674BD5072F'
      }
      value: 'Configuration SetupServer {\r\n    Node localhost {\r\n                               WindowsFeature IIS {\r\n                               Name = "Web-Server";\r\n            Ensure = "Present"\r\n        }\r\n    }\r\n}'
    }
  }
}
```

## microsoft.automation/automationaccounts/nodeconfigurations

Create node configuration
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/nodeConfigurations@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'configName.nodeConfigName'
  properties: {
    configuration: {
      name: 'configName'
    }
    incrementNodeConfigurationBuild: true
    source: {
      type: 'embeddedContent'
      hash: {
        algorithm: 'sha256'
        value: '6DE256A57F01BFA29B88696D5E77A383D6E61484C7686E8DB955FA10ACE9FFE5'
      }
      value: '\r\ninstance of MSFT_RoleResource as $MSFT_RoleResource1ref\r\n{\r\nResourceID = "[WindowsFeature]IIS";\r\n Ensure = "Present";\r\n SourceInfo = "::3::32::WindowsFeature";\r\n Name = "Web-Server";\r\n ModuleName = "PsDesiredStateConfiguration";\r\n\r\nModuleVersion = "1.0";\r\r\n ConfigurationName = "configName";\r\r\n};\r\ninstance of OMI_ConfigurationDocument\r\n\r\r\n                    {\r\n Version="2.0.0";\r\n \r\r\n                        MinimumCompatibleVersion = "1.0.0";\r\n \r\r\n                        CompatibleVersionAdditionalProperties= {"Omi_BaseResource:ConfigurationName"};\r\n \r\r\n                        Author="weijiel";\r\n \r\r\n                        GenerationDate="03/30/2017 13:40:25";\r\n \r\r\n                        GenerationHost="TEST-BACKEND";\r\n \r\r\n                        Name="configName";\r\n\r\r\n                    };\r\n'
      version: '1.0'
    }
  }
}
```

## microsoft.automation/automationaccounts/jobs

Create job
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/jobs@2023-05-15-preview' = {
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

## microsoft.automation/automationaccounts/jobschedules

Create a job schedule
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/jobSchedules@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    parameters: {
      jobscheduletag01: 'jobschedulevalue01'
      jobscheduletag02: 'jobschedulevalue02'
    }
    runbook: {
      name: 'TestRunbook'
    }
    schedule: {
      name: 'ScheduleNameGoesHere332204b5-debe-4348-a5c7-6357457189f2'
    }
  }
}
```

## microsoft.automation/automationaccounts/modules

Create or update a module
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/modules@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contentLink: {
      contentHash: {
        algorithm: 'sha265'
        value: '07E108A962B81DD9C9BAA89BB47C0F6EE52B29E83758B07795E408D258B2B87A'
      }
      uri: 'https://teststorage.blob.core.windows.net/dsccomposite/OmsCompositeResources.zip'
      version: '1.0.0.0'
    }
  }
}
```

## microsoft.automation/automationaccounts/runtimeenvironments/packages

Create or update a package
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/runtimeEnvironments/packages@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contentLink: {
      contentHash: {
        algorithm: 'sha265'
        value: '07E108A962B81DD9C9BAA89BB47C0F6EE52B29E83758B07795E408D258B2B87A'
      }
      uri: 'https://teststorage.blob.core.windows.net/dsccomposite/OmsCompositeResources.zip'
    }
  }
}
```

## microsoft.automation/automationaccounts/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/privateEndpointConnections@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@contoso.com'
      status: 'Approved'
    }
  }
}
```

## microsoft.automation/automationaccounts/python2packages

Create or update a python 2 package
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/python2Packages@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contentLink: {
      contentHash: {
        algorithm: 'sha265'
        value: '07E108A962B81DD9C9BAA89BB47C0F6EE52B29E83758B07795E408D258B2B87A'
      }
      uri: 'https://teststorage.blob.core.windows.net/dsccomposite/OmsCompositeResources.zip'
      version: '1.0.0.0'
    }
  }
  tags: {
  }
}
```

## microsoft.automation/automationaccounts/python3packages

Create or update a python 3 package
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/python3Packages@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contentLink: {
      contentHash: {
        algorithm: 'sha265'
        value: '07E108A962B81DD9C9BAA89BB47C0F6EE52B29E83758B07795E408D258B2B87A'
      }
      uri: 'https://teststorage.blob.core.windows.net/dsccomposite/OmsCompositeResources.zip'
      version: '1.0.0.0'
    }
  }
  tags: {
  }
}
```

## microsoft.automation/automationaccounts/runbooks/draft

Create test job
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/runbooks/draft@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  parameters: {
    key01: 'value01'
    key02: 'value02'
  }
  runOn: ''
  runtimeEnvironment: 'runtimeEnvironmentName'
}
```

## microsoft.automation/automationaccounts/runbooks

Create or update runbook and publish it
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/runbooks@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'Get-AzureVMTutorial'
  location: 'East US 2'
  properties: {
    description: 'Description of the Runbook'
    logActivityTrace: 1
    logProgress: true
    logVerbose: false
    publishContentLink: {
      contentHash: {
        algorithm: 'SHA256'
        value: '115775B8FF2BE672D8A946BD0B489918C724DDE15A440373CA54461D53010A80'
      }
      uri: 'https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/101-automation-runbook-getvms/Runbooks/Get-AzureVMTutorial.ps1'
    }
    runbookType: 'PowerShell'
    runtimeEnvironment: 'environmentName'
  }
  tags: {
    tag01: 'value01'
    tag02: 'value02'
  }
}
```

Create runbook as draft
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/runbooks@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'Get-AzureVMTutorial'
  location: 'East US 2'
  properties: {
    description: 'Description of the Runbook'
    draft: {
    }
    logProgress: false
    logVerbose: false
    runbookType: 'PowerShell'
    runtimeEnvironment: 'environmentName'
  }
  tags: {
    tag01: 'value01'
    tag02: 'value02'
  }
}
```

## microsoft.automation/automationaccounts/runtimeenvironments

Create or update automation account
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/runtimeEnvironments@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'East US 2'
  properties: {
    defaultPackages: {
      Az: '8.3.0'
    }
    runtime: {
      version: '7.1'
      language: 'PowerShell'
    }
  }
}
```

## microsoft.automation/automationaccounts/schedules

Create or update a schedule
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/schedules@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'mySchedule'
  properties: {
    description: 'my description of schedule goes here'
    advancedSchedule: {
    }
    expiryTime: '2017-04-01T17:28:57.2494819Z'
    frequency: 'Hour'
    interval: 1
    startTime: '2017-03-27T17:28:57.2494819Z'
  }
}
```

## microsoft.automation/automationaccounts/sourcecontrols

Create or update a source control
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/sourceControls@2023-05-15-preview' = {
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
resource exampleResource 'Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    commitId: '9de0980bfb45026a3d97a1b0522d98a9f604226e'
  }
}
```

## microsoft.automation/automationaccounts/variables

Create or update a variable
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/variables@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'sampleVariable'
  properties: {
    description: 'my description'
    isEncrypted: false
    value: '"ComputerName.domain.com"'
  }
}
```

## microsoft.automation/automationaccounts/watchers

Create or update watcher
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/watchers@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  type: {
  }
  etag: {
  }
  location: {
  }
  properties: {
    description: 'This is a test watcher.'
    executionFrequencyInSeconds: 60
    lastModifiedBy: {
    }
    scriptName: 'MyTestWatcherRunbook'
    scriptParameters: {
    }
    scriptRunOn: 'MyTestHybridWorkerGroup'
  }
  tags: {
  }
}
```

## microsoft.automation/automationaccounts/webhooks

Create or update webhook
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/webhooks@2023-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'TestWebhook'
  properties: {
    expiryTime: '2018-03-29T22:18:13.7002872Z'
    isEnabled: true
    runbook: {
      name: 'TestRunbook'
    }
    uri: '<uri>'
  }
}
```
