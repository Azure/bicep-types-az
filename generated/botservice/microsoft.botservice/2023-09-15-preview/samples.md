# Microsoft.BotService

## microsoft.botservice/botservices

Create Bot
```bicep
resource exampleResource 'Microsoft.BotService/botServices@2023-09-15-preview' = {
  name: 'example'
  etag: 'etag1'
  kind: 'sdk'
  location: 'West US'
  properties: {
    description: 'The description of the bot'
    cmekKeyVaultUrl: 'https://myCmekKey'
    developerAppInsightKey: 'appinsightskey'
    developerAppInsightsApiKey: 'appinsightsapikey'
    developerAppInsightsApplicationId: 'appinsightsappid'
    disableLocalAuth: true
    displayName: 'The Name of the bot'
    endpoint: 'http://mybot.coffee'
    iconUrl: 'http://myicon'
    isCmekEnabled: true
    luisAppIds: [
      'luisappid1'
      'luisappid2'
    ]
    luisKey: 'luiskey'
    msaAppId: 'exampleappid'
    msaAppMSIResourceId: '/subscriptions/foo/resourcegroups/bar/providers/microsoft.managedidentity/userassignedidentities/sampleId'
    msaAppTenantId: 'exampleapptenantid'
    msaAppType: 'UserAssignedMSI'
    publicNetworkAccess: 'Enabled'
    schemaTransformationVersion: '1.0'
  }
  sku: {
    name: 'S1'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.botservice/botservices/channels

Create Alexa Channel
```bicep
resource exampleResource 'Microsoft.BotService/botServices/channels@2023-09-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'global'
  properties: {
    channelName: 'AlexaChannel'
    properties: {
      alexaSkillId: 'XAlexaSkillIdX'
      isEnabled: true
    }
  }
}
```

Create Channel
```bicep
resource exampleResource 'Microsoft.BotService/botServices/channels@2023-09-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'global'
  properties: {
    channelName: 'EmailChannel'
    properties: {
      emailAddress: 'a@b.com'
      isEnabled: true
      password: 'pwd'
    }
  }
}
```

Create DirectLine Speech Channel
```bicep
resource exampleResource 'Microsoft.BotService/botServices/channels@2023-09-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'global'
  properties: {
    channelName: 'DirectLineSpeechChannel'
    properties: {
      cognitiveServiceRegion: 'XcognitiveServiceRegionX'
      cognitiveServiceSubscriptionKey: 'XcognitiveServiceSubscriptionKeyX'
      isEnabled: true
    }
  }
}
```

Create Email Channel
```bicep
resource exampleResource 'Microsoft.BotService/botServices/channels@2023-09-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'global'
  properties: {
    channelName: 'EmailChannel'
    properties: {
      authMethod: 1
      emailAddress: 'a@b.com'
      isEnabled: true
      magicCode: '000000'
    }
  }
}
```

Create Line Channel
```bicep
resource exampleResource 'Microsoft.BotService/botServices/channels@2023-09-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'global'
  properties: {
    channelName: 'LineChannel'
    properties: {
      lineRegistrations: [
        {
          channelAccessToken: 'channelAccessToken'
          channelSecret: 'channelSecret'
        }
      ]
    }
  }
}
```

## microsoft.botservice/botservices/connections

Create Connection Setting
```bicep
resource exampleResource 'Microsoft.BotService/botServices/connections@2023-09-15-preview' = {
  parent: parentResource 
  name: 'example'
  etag: 'etag1'
  location: 'West US'
  properties: {
    clientId: 'sampleclientid'
    clientSecret: 'samplesecret'
    parameters: [
      {
        key: 'key1'
        value: 'value1'
      }
      {
        key: 'key2'
        value: 'value2'
      }
    ]
    scopes: 'samplescope'
    serviceProviderId: 'serviceproviderid'
  }
}
```

## microsoft.botservice/botservices/privateendpointconnections

Put Private Endpoint Connection
```bicep
resource exampleResource 'Microsoft.BotService/botServices/privateEndpointConnections@2023-09-15-preview' = {
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
