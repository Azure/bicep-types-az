# Microsoft.BotService

## microsoft.botservice/botservices

Create Bot
```bicep
resource exampleResource 'Microsoft.BotService/botServices@2018-07-12' = {
  name: 'example'
  name: 'samplename'
  type: 'sampletype'
  etag: 'etag1'
  id: 'someid'
  kind: 'sdk'
  location: 'West US'
  properties: {
    description: 'The description of the bot'
    developerAppInsightKey: 'appinsightskey'
    developerAppInsightsApiKey: 'appinsightsapikey'
    developerAppInsightsApplicationId: 'appinsightsappid'
    displayName: 'The Name of the bot'
    endpoint: 'http://mybot.coffee'
    iconUrl: 'http://myicon'
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

Create Bot
```bicep
resource exampleResource 'Microsoft.BotService/botServices/channels@2018-07-12' = {
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

## microsoft.botservice/botservices/connections

Create Connection Setting
```bicep
resource exampleResource 'Microsoft.BotService/botServices/Connections@2018-07-12' = {
  parent: parentResource 
  name: 'example'
  name: 'samplename'
  type: 'sampletype'
  etag: 'etag1'
  id: 'someid'
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

## microsoft.botservice/enterprisechannels

Create Enterprise Channel
```bicep
resource exampleResource 'Microsoft.BotService/enterpriseChannels@2018-07-12' = {
  name: 'example'
  etag: 'etag1'
  id: 'someid'
  location: 'West US'
  properties: {
    nodes: [
      {
        name: 'Node 1'
        azureLocation: 'WestUs'
        azureSku: 'Int1'
      }
    ]
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
