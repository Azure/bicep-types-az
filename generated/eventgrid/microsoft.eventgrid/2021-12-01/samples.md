# Microsoft.EventGrid
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.eventgrid/domains

Domains_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/domains@2021-12-01' = {
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

## microsoft.eventgrid/domains/privateendpointconnections

PrivateEndpointConnections_Update
```bicep
resource exampleResource 'Microsoft.EventGrid/domains/privateEndpointConnections@2021-12-01' = {
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

## microsoft.eventgrid/eventsubscriptions

EventSubscriptions_CreateOrUpdateForCustomTopic_EventHubDestination
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-12-01' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-12-01' = {
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

EventSubscriptions_CreateOrUpdateForCustomTopic_StorageQueueDestination
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-12-01' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-12-01' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-12-01' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-12-01' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-12-01' = {
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

## microsoft.eventgrid/systemtopics

SystemTopics_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/systemTopics@2021-12-01' = {
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
resource exampleResource 'Microsoft.EventGrid/systemTopics/eventSubscriptions@2021-12-01' = {
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
resource exampleResource 'Microsoft.EventGrid/topics@2021-12-01' = {
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

## microsoft.eventgrid/topics/privateendpointconnections

PrivateEndpointConnections_Update
```bicep
resource exampleResource 'Microsoft.EventGrid/topics/privateEndpointConnections@2021-12-01' = {
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
