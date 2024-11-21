# Microsoft.EventGrid
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.eventgrid/domains

Domains_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/domains@2022-06-15' = {
  name: 'example'
  location: 'westus2'
  properties: {
    inboundIpRules: [
      {
        action: 'Allow'
        ipMask: '12.18.30.15'
      }
      {
        action: 'Allow'
        ipMask: '12.18.176.1'
      }
    ]
    publicNetworkAccess: 'Enabled'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.eventgrid/domains/eventsubscriptions

DomainEventSubscriptions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/domains/eventSubscriptions@2022-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destination: {
      endpointType: 'WebHook'
      properties: {
        endpointUrl: 'https://requestb.in/15ksip71'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

## microsoft.eventgrid/domains/privateendpointconnections

PrivateEndpointConnections_Update
```bicep
resource exampleResource 'Microsoft.EventGrid/domains/privateEndpointConnections@2022-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'approving connection'
      actionsRequired: 'None'
      status: 'Approved'
    }
  }
}
```

## microsoft.eventgrid/domains/topics/eventsubscriptions

DomainTopicEventSubscriptions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/domains/topics/eventSubscriptions@2022-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destination: {
      endpointType: 'WebHook'
      properties: {
        endpointUrl: 'https://requestb.in/15ksip71'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

## microsoft.eventgrid/eventsubscriptions

EventSubscriptions_CreateOrUpdateForCustomTopic
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2022-06-15' = {
  name: 'example'
  properties: {
    destination: {
      endpointType: 'EventHub'
      properties: {
        resourceId: '/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.EventHub/namespaces/ContosoNamespace/eventhubs/EH1'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

EventSubscriptions_CreateOrUpdateForCustomTopic_AzureFunctionDestination
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2022-06-15' = {
  name: 'example'
  properties: {
    deadLetterDestination: {
      endpointType: 'StorageBlob'
      properties: {
        blobContainerName: 'contosocontainer'
        resourceId: '/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg'
      }
    }
    destination: {
      endpointType: 'AzureFunction'
      properties: {
        resourceId: '/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Web/sites/ContosoSite/funtions/ContosoFunc'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

EventSubscriptions_CreateOrUpdateForCustomTopic_EventHubDestination
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2022-06-15' = {
  name: 'example'
  properties: {
    deadLetterDestination: {
      endpointType: 'StorageBlob'
      properties: {
        blobContainerName: 'contosocontainer'
        resourceId: '/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg'
      }
    }
    destination: {
      endpointType: 'EventHub'
      properties: {
        resourceId: '/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.EventHub/namespaces/ContosoNamespace/eventhubs/EH1'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

EventSubscriptions_CreateOrUpdateForCustomTopic_HybridConnectionDestination
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2022-06-15' = {
  name: 'example'
  properties: {
    deadLetterDestination: {
      endpointType: 'StorageBlob'
      properties: {
        blobContainerName: 'contosocontainer'
        resourceId: '/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg'
      }
    }
    destination: {
      endpointType: 'HybridConnection'
      properties: {
        resourceId: '/subscriptions/d33c5f7a-02ea-40f4-bf52-07f17e84d6a8/resourceGroups/TestRG/providers/Microsoft.Relay/namespaces/ContosoNamespace/hybridConnections/HC1'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

EventSubscriptions_CreateOrUpdateForCustomTopic_ServiceBusQueueDestination
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2022-06-15' = {
  name: 'example'
  properties: {
    deadLetterDestination: {
      endpointType: 'StorageBlob'
      properties: {
        blobContainerName: 'contosocontainer'
        resourceId: '/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg'
      }
    }
    destination: {
      endpointType: 'ServiceBusQueue'
      properties: {
        resourceId: '/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.ServiceBus/namespaces/ContosoNamespace/queues/SBQ'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

EventSubscriptions_CreateOrUpdateForCustomTopic_ServiceBusTopicDestination
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2022-06-15' = {
  name: 'example'
  properties: {
    deadLetterDestination: {
      endpointType: 'StorageBlob'
      properties: {
        blobContainerName: 'contosocontainer'
        resourceId: '/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg'
      }
    }
    destination: {
      endpointType: 'ServiceBusTopic'
      properties: {
        resourceId: '/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.ServiceBus/namespaces/ContosoNamespace/topics/SBT'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

EventSubscriptions_CreateOrUpdateForCustomTopic_StorageQueueDestination
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2022-06-15' = {
  name: 'example'
  properties: {
    deadLetterDestination: {
      endpointType: 'StorageBlob'
      properties: {
        blobContainerName: 'contosocontainer'
        resourceId: '/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg'
      }
    }
    destination: {
      endpointType: 'StorageQueue'
      properties: {
        queueName: 'queue1'
        resourceId: '/subscriptions/d33c5f7a-02ea-40f4-bf52-07f17e84d6a8/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

EventSubscriptions_CreateOrUpdateForCustomTopic_WebhookDestination
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2022-06-15' = {
  name: 'example'
  properties: {
    destination: {
      endpointType: 'WebHook'
      properties: {
        endpointUrl: 'https://azurefunctionexample.azurewebsites.net/runtime/webhooks/EventGrid?functionName=EventGridTrigger1&code=PASSWORDCODE'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

EventSubscriptions_CreateOrUpdateForResource
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2022-06-15' = {
  name: 'example'
  properties: {
    destination: {
      endpointType: 'WebHook'
      properties: {
        endpointUrl: 'https://requestb.in/15ksip71'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

EventSubscriptions_CreateOrUpdateForResourceGroup
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2022-06-15' = {
  name: 'example'
  properties: {
    destination: {
      endpointType: 'WebHook'
      properties: {
        endpointUrl: 'https://requestb.in/15ksip71'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

EventSubscriptions_CreateOrUpdateForSubscription
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2022-06-15' = {
  name: 'example'
  properties: {
    destination: {
      endpointType: 'WebHook'
      properties: {
        endpointUrl: 'https://requestb.in/15ksip71'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
    }
  }
}
```

## microsoft.eventgrid/partnerconfigurations

PartnerConfigurations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/partnerConfigurations@2022-06-15' = {
  name: 'example'
  properties: {
    partnerAuthorization: {
      authorizedPartnersList: [
        {
          authorizationExpirationTimeInUtc: '2022-01-28T01:20:55.142Z'
          partnerName: 'Contoso.Finance'
          partnerRegistrationImmutableId: '941892bc-f5d0-4d1c-8fb5-477570fc2b71'
        }
        {
          authorizationExpirationTimeInUtc: '2022-02-20T01:00:00.142Z'
          partnerName: 'fabrikam.HR'
          partnerRegistrationImmutableId: '5362bdb6-ce3e-4d0d-9a5b-3eb92c8aab38'
        }
      ]
      defaultMaximumExpirationTimeInDays: 10
    }
  }
}
```

## microsoft.eventgrid/partnernamespaces

PartnerNamespaces_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/partnerNamespaces@2022-06-15' = {
  name: 'example'
  location: 'westus'
  properties: {
    partnerRegistrationFullyQualifiedId: '/subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventGrid/partnerRegistrations/ContosoCorpAccount1'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.eventgrid/partnernamespaces/channels

Channels_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/partnerNamespaces/channels@2022-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    channelType: 'PartnerTopic'
    expirationTimeIfNotActivatedUtc: '2021-10-21T22:50:25.410433Z'
    messageForActivation: 'Example message to approver'
    partnerTopicInfo: {
      name: 'examplePartnerTopic1'
      azureSubscriptionId: '5b4b650e-28b9-4790-b3ab-ddbd88d727c4'
      resourceGroupName: 'examplerg2'
      source: 'ContosoCorp.Accounts.User1'
    }
  }
}
```

## microsoft.eventgrid/partnernamespaces/privateendpointconnections

PrivateEndpointConnections_Update
```bicep
resource exampleResource 'Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections@2022-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'approving connection'
      actionsRequired: 'None'
      status: 'Approved'
    }
  }
}
```

## microsoft.eventgrid/partnerregistrations

PartnerRegistrations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/partnerRegistrations@2022-06-15' = {
  name: 'example'
  location: 'global'
  tags: {
    key1: 'value1'
    key2: 'Value2'
    key3: 'Value3'
  }
}
```

## microsoft.eventgrid/partnertopics

PartnerTopics_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/partnerTopics@2022-06-15' = {
  name: 'example'
  location: 'westus2'
  properties: {
    expirationTimeIfNotActivatedUtc: '2022-03-23T23:06:13.109Z'
    messageForActivation: 'Example message for activation'
    partnerRegistrationImmutableId: '6f541064-031d-4cc8-9ec3-a3b4fc0f7185'
    partnerTopicFriendlyDescription: 'Example description'
    source: 'ContosoCorp.Accounts.User1'
  }
}
```

## microsoft.eventgrid/partnertopics/eventsubscriptions

PartnerTopicEventSubscriptions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/partnerTopics/eventSubscriptions@2022-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destination: {
      endpointType: 'WebHook'
      properties: {
        endpointUrl: 'https://requestb.in/15ksip71'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

## microsoft.eventgrid/systemtopics

SystemTopics_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/systemTopics@2022-06-15' = {
  name: 'example'
  location: 'westus2'
  properties: {
    source: '/subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/azureeventgridrunnerrgcentraluseuap/providers/microsoft.storage/storageaccounts/pubstgrunnerb71cd29e'
    topicType: 'microsoft.storage.storageaccounts'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.eventgrid/systemtopics/eventsubscriptions

SystemTopicEventSubscriptions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/systemTopics/eventSubscriptions@2022-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destination: {
      endpointType: 'WebHook'
      properties: {
        endpointUrl: 'https://requestb.in/15ksip71'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

## microsoft.eventgrid/topics

Topics_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/topics@2022-06-15' = {
  name: 'example'
  location: 'westus2'
  properties: {
    inboundIpRules: [
      {
        action: 'Allow'
        ipMask: '12.18.30.15'
      }
      {
        action: 'Allow'
        ipMask: '12.18.176.1'
      }
    ]
    publicNetworkAccess: 'Enabled'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.eventgrid/topics/eventsubscriptions

TopicEventSubscriptions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/topics/eventSubscriptions@2022-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destination: {
      endpointType: 'WebHook'
      properties: {
        endpointUrl: 'https://requestb.in/15ksip71'
      }
    }
    filter: {
      isSubjectCaseSensitive: false
      subjectBeginsWith: 'ExamplePrefix'
      subjectEndsWith: 'ExampleSuffix'
    }
  }
}
```

## microsoft.eventgrid/topics/privateendpointconnections

PrivateEndpointConnections_Update
```bicep
resource exampleResource 'Microsoft.EventGrid/topics/privateEndpointConnections@2022-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'approving connection'
      actionsRequired: 'None'
      status: 'Approved'
    }
  }
}
```
