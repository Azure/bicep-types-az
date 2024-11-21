# Microsoft.CognitiveServices

## microsoft.cognitiveservices/accounts

Create Account
```bicep
resource exampleResource 'Microsoft.CognitiveServices/accounts@2022-12-01' = {
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
resource exampleResource 'Microsoft.CognitiveServices/accounts@2022-12-01' = {
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
resource exampleResource 'Microsoft.CognitiveServices/accounts/privateEndpointConnections@2022-12-01' = {
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
resource exampleResource 'Microsoft.CognitiveServices/accounts/deployments@2022-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    model: {
      name: 'ada'
      format: 'OpenAI'
      version: '1'
    }
    scaleSettings: {
      capacity: 1
      scaleType: 'Manual'
    }
  }
}
```

## microsoft.cognitiveservices/accounts/commitmentplans

PutCommitmentPlan
```bicep
resource exampleResource 'Microsoft.CognitiveServices/accounts/commitmentPlans@2022-12-01' = {
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
resource exampleResource 'Microsoft.CognitiveServices/commitmentPlans@2022-12-01' = {
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
resource exampleResource 'Microsoft.CognitiveServices/commitmentPlans/accountAssociations@2022-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accountId: '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.CognitiveServices/accounts/accountName'
  }
}
```
