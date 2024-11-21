# Microsoft.ServiceBus
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.servicebus/namespaces

NameSpaceCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces@2017-04-01' = {
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

## microsoft.servicebus/namespaces/authorizationrules

NameSpaceAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/AuthorizationRules@2017-04-01' = {
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

## microsoft.servicebus/namespaces/disasterrecoveryconfigs

SBAliasCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs@2017-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    alternateName: 'alternameforAlias-Namespace-8860'
    partnerNamespace: 'sdk-Namespace-37'
  }
}
```

## microsoft.servicebus/namespaces/migrationconfigurations

MigrationConfigurationsStartMigration
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/migrationConfigurations@2017-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    postMigrationName: 'sdk-PostMigration-5919'
    targetNamespace: '/subscriptions/SubscriptionId/resourceGroups/ResourceGroup/providers/Microsoft.ServiceBus/namespaces/sdk-Namespace-4028'
  }
}
```

## microsoft.servicebus/namespaces/networkrulesets

NameSpaceNetworkRuleSetCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/networkRuleSets@2017-04-01' = {
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
          id: '/subscriptions/subscriptionid/resourcegroups/resourcegroupid/providers/Microsoft.Network/virtualNetworks/myvn/subnets/subnet2'
        }
      }
      {
        ignoreMissingVnetServiceEndpoint: false
        subnet: {
          id: '/subscriptions/subscriptionid/resourcegroups/resourcegroupid/providers/Microsoft.Network/virtualNetworks/myvn/subnets/subnet3'
        }
      }
      {
        ignoreMissingVnetServiceEndpoint: false
        subnet: {
          id: '/subscriptions/subscriptionid/resourcegroups/resourcegroupid/providers/Microsoft.Network/virtualNetworks/myvn/subnets/subnet6'
        }
      }
    ]
  }
}
```

## microsoft.servicebus/namespaces/queues

QueueCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/queues@2017-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enablePartitioning: true
  }
}
```

## microsoft.servicebus/namespaces/queues/authorizationrules

QueueAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/queues/authorizationRules@2017-04-01' = {
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
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics@2017-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enableExpress: true
  }
}
```

## microsoft.servicebus/namespaces/topics/authorizationrules

TopicAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics/authorizationRules@2017-04-01' = {
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
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics/subscriptions@2017-04-01' = {
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
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2017-04-01' = {
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
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2017-04-01' = {
  parent: parentResource 
  name: 'example'
}
```

RulesCreateSqlFilter
```bicep
resource exampleResource 'Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2017-04-01' = {
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
