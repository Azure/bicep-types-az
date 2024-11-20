# Microsoft.ServiceBus

## microsoft.servicebus/namespaces

NameSpaceCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces@2015-08-01' = {
  name: 'example'
  location: 'West US'
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

## microsoft.servicebus/namespaces/authorizationrules

NameSpaceAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/AuthorizationRules@2015-08-01' = {
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

## microsoft.servicebus/namespaces/queues

QueueCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/queues@2015-08-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    enableExpress: false
    enablePartitioning: false
  }
}
```

## microsoft.servicebus/namespaces/queues/authorizationrules

QueueAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/queues/authorizationRules@2015-08-01' = {
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

## microsoft.servicebus/namespaces/topics

TopicCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics@2015-08-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
}
```

## microsoft.servicebus/namespaces/topics/authorizationrules

TopicAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics/authorizationRules@2015-08-01' = {
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

## microsoft.servicebus/namespaces/topics/subscriptions

SubscriptionCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics/subscriptions@2015-08-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
}
```
