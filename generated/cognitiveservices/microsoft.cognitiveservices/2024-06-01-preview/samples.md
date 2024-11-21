# Microsoft.CognitiveServices

## microsoft.cognitiveservices/accounts

Create Account
```bicep
resource exampleResource 'Microsoft.CognitiveServices/accounts@2024-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  kind: 'Emotion'
  location: 'West US'
  properties: {
    encryption: {
      keySource: 'Microsoft.KeyVault'
      keyVaultProperties: {
        keyName: 'KeyName'
        keyVaultUri: 'https://pltfrmscrts-use-pc-dev.vault.azure.net/'
        keyVersion: '891CF236-D241-4738-9462-D506AF493DFA'
      }
    }
    userOwnedStorage: [
      {
        resourceId: '/subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/myStorageAccount'
      }
    ]
  }
  sku: {
    name: 'S0'
  }
}
```

Create Account Min
```bicep
resource exampleResource 'Microsoft.CognitiveServices/accounts@2024-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  kind: 'CognitiveServices'
  location: 'West US'
  properties: {
  }
  sku: {
    name: 'S0'
  }
}
```

## microsoft.cognitiveservices/accounts/privateendpointconnections

PutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.CognitiveServices/accounts/privateEndpointConnections@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      status: 'Approved'
    }
  }
}
```

## microsoft.cognitiveservices/accounts/deployments

PutDeployment
```bicep
resource exampleResource 'Microsoft.CognitiveServices/accounts/deployments@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    model: {
      name: 'ada'
      format: 'OpenAI'
      version: '1'
    }
  }
  sku: {
    name: 'Standard'
    capacity: 1
  }
}
```

## microsoft.cognitiveservices/accounts/commitmentplans

PutCommitmentPlan
```bicep
resource exampleResource 'Microsoft.CognitiveServices/accounts/commitmentPlans@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    autoRenew: true
    current: {
      tier: 'T1'
    }
    hostingModel: 'Web'
    planType: 'Speech2Text'
  }
}
```

## microsoft.cognitiveservices/commitmentplans

Create Commitment Plan
```bicep
resource exampleResource 'Microsoft.CognitiveServices/commitmentPlans@2024-06-01-preview' = {
  name: 'example'
  kind: 'SpeechServices'
  location: 'West US'
  properties: {
    autoRenew: true
    current: {
      tier: 'T1'
    }
    hostingModel: 'Web'
    planType: 'STT'
  }
  sku: {
    name: 'S0'
  }
}
```

## microsoft.cognitiveservices/commitmentplans/accountassociations

PutCommitmentPlan
```bicep
resource exampleResource 'Microsoft.CognitiveServices/commitmentPlans/accountAssociations@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accountId: '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.CognitiveServices/accounts/accountName'
  }
}
```

## microsoft.cognitiveservices/accounts/encryptionscopes

PutEncryptionScope
```bicep
resource exampleResource 'Microsoft.CognitiveServices/accounts/encryptionScopes@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    keySource: 'Microsoft.KeyVault'
    keyVaultProperties: {
      identityClientId: '00000000-0000-0000-0000-000000000000'
      keyName: 'DevKeyWestUS2'
      keyVaultUri: 'https://devkvwestus2.vault.azure.net/'
      keyVersion: '9f85549d7bf14ff4bf178c10d3bdca95'
    }
    state: 'Enabled'
  }
}
```

## microsoft.cognitiveservices/accounts/raipolicies

PutRaiPolicy
```bicep
resource exampleResource 'Microsoft.CognitiveServices/accounts/raiPolicies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    basePolicyName: 'Microsoft.Default'
    contentFilters: [
      {
        name: 'hate'
        blocking: false
        enabled: false
        severityThreshold: 'High'
        source: 'Prompt'
      }
      {
        name: 'hate'
        blocking: true
        enabled: true
        severityThreshold: 'Medium'
        source: 'Completion'
      }
      {
        name: 'sexual'
        blocking: true
        enabled: true
        severityThreshold: 'High'
        source: 'Prompt'
      }
      {
        name: 'sexual'
        blocking: true
        enabled: true
        severityThreshold: 'Medium'
        source: 'Completion'
      }
      {
        name: 'selfharm'
        blocking: true
        enabled: true
        severityThreshold: 'High'
        source: 'Prompt'
      }
      {
        name: 'selfharm'
        blocking: true
        enabled: true
        severityThreshold: 'Medium'
        source: 'Completion'
      }
      {
        name: 'violence'
        blocking: true
        enabled: true
        severityThreshold: 'Medium'
        source: 'Prompt'
      }
      {
        name: 'violence'
        blocking: true
        enabled: true
        severityThreshold: 'Medium'
        source: 'Completion'
      }
      {
        name: 'jailbreak'
        blocking: true
        enabled: true
        source: 'Prompt'
      }
      {
        name: 'protected_material_text'
        blocking: true
        enabled: true
        source: 'Completion'
      }
      {
        name: 'protected_material_code'
        blocking: true
        enabled: true
        source: 'Completion'
      }
      {
        name: 'profanity'
        blocking: true
        enabled: true
        source: 'Prompt'
      }
    ]
    mode: 'Asynchronous_filter'
  }
}
```

## microsoft.cognitiveservices/accounts/raiblocklists

PutRaiBlocklist
```bicep
resource exampleResource 'Microsoft.CognitiveServices/accounts/raiBlocklists@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Basic blocklist description'
  }
}
```

## microsoft.cognitiveservices/accounts/raiblocklists/raiblocklistitems

PutRaiBlocklistItem
```bicep
resource exampleResource 'Microsoft.CognitiveServices/accounts/raiBlocklists/raiBlocklistItems@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    isRegex: false
    pattern: 'Pattern To Block'
  }
}
```

## microsoft.cognitiveservices/accounts/defenderforaisettings

PutDefenderForAISetting
```bicep
resource exampleResource 'Microsoft.CognitiveServices/accounts/defenderForAISettings@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```
