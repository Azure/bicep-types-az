# Microsoft.EventGrid
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.eventgrid/domains

Domains_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/domains@2019-06-01' = {
  name: 'example'
  location: 'westus2'
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.eventgrid/eventsubscriptions

EventSubscriptions_CreateOrUpdateForCustomTopic_EventHubDestination
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2019-06-01' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2019-06-01' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2019-06-01' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2019-06-01' = {
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

EventSubscriptions_CreateOrUpdateForResource
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2019-06-01' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2019-06-01' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2019-06-01' = {
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

## microsoft.eventgrid/topics

Topics_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/topics@2019-06-01' = {
  name: 'example'
  location: 'westus2'
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```
