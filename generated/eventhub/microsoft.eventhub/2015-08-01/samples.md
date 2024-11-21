# Microsoft.EventHub
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.eventhub/namespaces

NamespaceCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces@2015-08-01' = {
  name: 'example'
  location: 'South Central US'
  sku: {
    name: 'Standard'
    tier: 'Standard'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.eventhub/namespaces/authorizationrules

NameSpaceAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/AuthorizationRules@2015-08-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    rights: [
      'Listen'
      'Send'
    ]
  }
}
```

## microsoft.eventhub/namespaces/eventhubs

EventHubCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/eventhubs@2015-08-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    messageRetentionInDays: 7
    partitionCount: 4
    status: 'Active'
  }
}
```

## microsoft.eventhub/namespaces/eventhubs/authorizationrules

EventHubAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2015-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    rights: [
      'Listen'
      'Send'
    ]
  }
}
```

## microsoft.eventhub/namespaces/eventhubs/consumergroups

ConsumerGroupCreate
```bicep
resource exampleResource 'Microsoft.EventHub/namespaces/eventhubs/consumergroups@2015-08-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
}
```
