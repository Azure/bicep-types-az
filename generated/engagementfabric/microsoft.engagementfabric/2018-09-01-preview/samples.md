# Microsoft.EngagementFabric

## microsoft.engagementfabric/accounts

AccountsCreateOrUpdateExample
```bicep
resource exampleResource 'Microsoft.EngagementFabric/Accounts@2018-09-01-preview' = {
  name: 'example'
  location: 'WestUS'
  sku: {
    name: 'B1'
  }
}
```

## microsoft.engagementfabric/accounts/channels

ChannelsCreateOrUpdateExample
```bicep
resource exampleResource 'Microsoft.EngagementFabric/Accounts/Channels@2018-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    channelFunctions: [
      'MockFunction1'
      'MockFunction2'
    ]
    channelType: 'MockChannel'
    credentials: {
      AppId: 'exampleApp'
      AppKey: 'exampleAppKey'
    }
  }
}
```
