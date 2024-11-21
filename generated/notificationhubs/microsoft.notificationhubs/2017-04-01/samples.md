# Microsoft.NotificationHubs
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.notificationhubs/namespaces

NameSpaceCreate
```bicep
resource exampleResource 'Microsoft.NotificationHubs/namespaces@2017-04-01' = {
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

## microsoft.notificationhubs/namespaces/authorizationrules

NameSpaceAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.NotificationHubs/namespaces/AuthorizationRules@2017-04-01' = {
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

## microsoft.notificationhubs/namespaces/notificationhubs

NotificationHubCreate
```bicep
resource exampleResource 'Microsoft.NotificationHubs/namespaces/notificationHubs@2017-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
  }
}
```

## microsoft.notificationhubs/namespaces/notificationhubs/authorizationrules

NotificationHubAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01' = {
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
