# Microsoft.ServiceBus

## microsoft.servicebus/namespaces/ipfilterrules

NameSpaceIpFilterRuleCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/ipfilterrules@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    action: 'Accept'
    filterName: 'sdk-IPFilterRules-7337'
    ipMask: '13.78.143.246/32'
  }
}
```

## microsoft.servicebus/namespaces

NameSpaceCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces@2018-01-01-preview' = {
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

## microsoft.servicebus/namespaces/virtualnetworkrules

NameSpaceVirtualNetworkRuleCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/virtualnetworkrules@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    virtualNetworkSubnetId: '/subscriptions/Subscription/resourceGroups/sbehvnettest/providers/Microsoft.Network/virtualNetworks/sbehvnettest/subnets/default'
  }
}
```

## microsoft.servicebus/namespaces/authorizationrules

NameSpaceAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/AuthorizationRules@2018-01-01-preview' = {
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

## microsoft.servicebus/namespaces/networkrulesets

NameSpaceNetworkRuleSetCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/networkRuleSets@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    defaultAction: 'Deny'
    ipRules: [
      {
        action: 'Allow'
        ipMask: '1.1.1.1'
      }
      {
        action: 'Allow'
        ipMask: '1.1.1.2'
      }
      {
        action: 'Allow'
        ipMask: '1.1.1.3'
      }
      {
        action: 'Allow'
        ipMask: '1.1.1.4'
      }
      {
        action: 'Allow'
        ipMask: '1.1.1.5'
      }
    ]
    virtualNetworkRules: [
      {
        ignoreMissingVnetServiceEndpoint: true
        subnet: {
          id: '/subscriptions/854d368f-1828-428f-8f3c-f2affa9b2f7d/resourcegroups/alitest/providers/Microsoft.Network/virtualNetworks/myvn/subnets/subnet2'
        }
      }
      {
        ignoreMissingVnetServiceEndpoint: false
        subnet: {
          id: '/subscriptions/854d368f-1828-428f-8f3c-f2affa9b2f7d/resourcegroups/alitest/providers/Microsoft.Network/virtualNetworks/myvn/subnets/subnet3'
        }
      }
      {
        ignoreMissingVnetServiceEndpoint: false
        subnet: {
          id: '/subscriptions/854d368f-1828-428f-8f3c-f2affa9b2f7d/resourcegroups/alitest/providers/Microsoft.Network/virtualNetworks/myvn/subnets/subnet6'
        }
      }
    ]
  }
}
```

## microsoft.servicebus/namespaces/privateendpointconnections

NameSpacePrivateEndPointConnectionCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/privateEndpointConnections@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
      id: '/subscriptions/dbedb4e0-40e6-4145-81f3-f1314c150774/resourceGroups/SDK-ServiceBus-8396/providers/Microsoft.Network/privateEndpoints/sdk-Namespace-2847'
    }
    privateLinkServiceConnectionState: {
      description: 'testing'
      status: 'Rejected'
    }
    provisioningState: 'Succeeded'
  }
}
```

## microsoft.servicebus/namespaces/disasterrecoveryconfigs

SBAliasCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    alternateName: 'alternameforAlias-Namespace-8860'
    partnerNamespace: 'sdk-Namespace-37'
  }
}
```

## microsoft.servicebus/namespaces/queues/authorizationrules

QueueAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/queues/authorizationRules@2018-01-01-preview' = {
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

## microsoft.servicebus/namespaces/queues

QueueCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/queues@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enablePartitioning: true
  }
}
```

## microsoft.servicebus/namespaces/topics/authorizationrules

TopicAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics/authorizationRules@2018-01-01-preview' = {
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
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enableExpress: true
  }
}
```

## microsoft.servicebus/namespaces/migrationconfigurations

MigrationConfigurationsStartMigration
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/migrationConfigurations@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    postMigrationName: 'sdk-PostMigration-5919'
    targetNamespace: '/subscriptions/SubscriptionId/resourceGroups/ResourceGroup/providers/Microsoft.ServiceBus/namespaces/sdk-Namespace-4028'
  }
}
```

## microsoft.servicebus/namespaces/topics/subscriptions

SubscriptionCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics/subscriptions@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enableBatchedOperations: true
  }
}
```

## microsoft.servicebus/namespaces/topics/subscriptions/rules

RulesCreateCorrelationFilter
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    correlationFilter: {
      properties: {
        topicHint: 'Crop'
      }
    }
    filterType: 'CorrelationFilter'
  }
}
```

RulesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```

RulesCreateSqlFilter
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    filterType: 'SqlFilter'
    sqlFilter: {
      sqlExpression: 'myproperty=test'
    }
  }
}
```
