# Microsoft.Resources
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.resources/deploymentscripts

DeploymentScriptsCreate
```bicep
resource exampleResource 'Microsoft.Resources/deploymentScripts@2020-10-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scriptRG/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uai': {
      }
    }
  }
  kind: 'AzurePowerShell'
  location: 'westus'
  properties: {
    arguments: '-Location \'westus\' -Name "*rg2"'
    azPowerShellVersion: '1.7.0'
    cleanupPreference: 'Always'
    retentionInterval: 'PT7D'
    scriptContent: 'Param([string]$Location,[string]$Name) $deploymentScriptOutputs[\'test\'] = \'value\' Get-AzResourceGroup -Location $Location -Name $Name'
    supportingScriptUris: [
      'https://uri1.to.supporting.script'
      'https://uri2.to.supporting.script'
    ]
    timeout: 'PT1H'
  }
}
```

DeploymentScriptsCreate_MinCreate
```bicep
resource exampleResource 'Microsoft.Resources/deploymentScripts@2020-10-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scriptRG/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uai': {
      }
    }
  }
  kind: 'AzurePowerShell'
  location: 'westus'
  properties: {
    arguments: '-Location \'westus\' -Name "*rg2"'
    azPowerShellVersion: '1.7.0'
    retentionInterval: 'P7D'
    scriptContent: 'Param([string]$Location,[string]$Name) $deploymentScriptOutputs[\'test\'] = \'value\' Get-AzResourceGroup -Location $Location -Name $Name'
  }
}
```

DeploymentScriptsCreate_UsingCustomACIName
```bicep
resource exampleResource 'Microsoft.Resources/deploymentScripts@2020-10-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scriptRG/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uai': {
      }
    }
  }
  kind: 'AzurePowerShell'
  location: 'westus'
  properties: {
    arguments: '-Location \'westus\' -Name "*rg2"'
    azPowerShellVersion: '1.7.0'
    cleanupPreference: 'Always'
    containerSettings: {
      containerGroupName: 'contoso-aci'
    }
    retentionInterval: 'PT7D'
    scriptContent: 'Param([string]$Location,[string]$Name) $deploymentScriptOutputs[\'test\'] = \'value\' Get-AzResourceGroup -Location $Location -Name $Name'
    supportingScriptUris: [
      'https://uri1.to.supporting.script'
      'https://uri2.to.supporting.script'
    ]
    timeout: 'PT1H'
  }
}
```

DeploymentScriptsCreate_UsingExistingStorageAccount
```bicep
resource exampleResource 'Microsoft.Resources/deploymentScripts@2020-10-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scriptRG/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uai': {
      }
    }
  }
  kind: 'AzurePowerShell'
  location: 'westus'
  properties: {
    arguments: '-Location \'westus\' -Name "*rg2"'
    azPowerShellVersion: '1.7.0'
    cleanupPreference: 'Always'
    retentionInterval: 'PT7D'
    scriptContent: 'Param([string]$Location,[string]$Name) $deploymentScriptOutputs[\'test\'] = \'value\' Get-AzResourceGroup -Location $Location -Name $Name'
    storageAccountSettings: {
      storageAccountKey: 'contosostoragekey'
      storageAccountName: 'contosostorage'
    }
    supportingScriptUris: [
      'https://uri1.to.supporting.script'
      'https://uri2.to.supporting.script'
    ]
    timeout: 'PT1H'
  }
}
```

DeploymentScriptsCreateNoUserManagedIdentity
```bicep
resource exampleResource 'Microsoft.Resources/deploymentScripts@2020-10-01' = {
  name: 'example'
  kind: 'AzurePowerShell'
  location: 'westus'
  properties: {
    arguments: '-Location \'westus\' -Name "*rg2"'
    azPowerShellVersion: '1.7.0'
    cleanupPreference: 'Always'
    retentionInterval: 'PT7D'
    scriptContent: 'Param([string]$Location,[string]$Name) $deploymentScriptOutputs[\'test\'] = \'value\' Get-AzResourceGroup -Location $Location -Name $Name'
    supportingScriptUris: [
      'https://uri1.to.supporting.script'
      'https://uri2.to.supporting.script'
    ]
    timeout: 'PT1H'
  }
}
```
