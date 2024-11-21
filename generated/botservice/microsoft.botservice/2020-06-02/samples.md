# Microsoft.BotService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.botservice/botservices

Create Bot
```bicep
resource exampleResource 'Microsoft.BotService/botServices@2020-06-02' = {
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

Create Alexa Bot
```bicep
resource exampleResource 'Microsoft.BotService/botServices/channels@2020-06-02' = {
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

Create Bot
```bicep
resource exampleResource 'Microsoft.BotService/botServices/channels@2020-06-02' = {
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

Create DirectLine Speech Bot
```bicep
resource exampleResource 'Microsoft.BotService/botServices/channels@2020-06-02' = {
  parent: parentResource 
  name: 'example'
  location: 'global'
  properties: {
    channelName: 'DirectLineSpeechChannel'
    properties: {
      cognitiveServicesSubscriptionId: 'XcognitiveServicesSubscriptionIdX'
      isEnabled: true
    }
  }
}
```

Create Line Bot
```bicep
resource exampleResource 'Microsoft.BotService/botServices/channels@2020-06-02' = {
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
resource exampleResource 'Microsoft.BotService/botServices/connections@2020-06-02' = {
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
