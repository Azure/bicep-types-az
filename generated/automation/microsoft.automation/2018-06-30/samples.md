# Microsoft.Automation
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.automation/automationaccounts/python2packages

Create or update a python 2 package
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/python2Packages@2018-06-30' = {
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

## microsoft.automation/automationaccounts/runbooks

Create or update runbook and publish it
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/runbooks@2018-06-30' = {
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
    runbookType: 'PowerShellWorkflow'
  }
  tags: {
    tag01: 'value01'
    tag02: 'value02'
  }
}
```

Create runbook as draft
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/runbooks@2018-06-30' = {
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
    runbookType: 'PowerShellWorkflow'
  }
  tags: {
    tag01: 'value01'
    tag02: 'value02'
  }
}
```

## microsoft.automation/automationaccounts/runbooks/draft

Create test job
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/runbooks/draft@2018-06-30' = {
  parent: parentResource 
  name: 'example'
  parameters: {
    key01: 'value01'
    key02: 'value02'
  }
  runOn: ''
}
```
