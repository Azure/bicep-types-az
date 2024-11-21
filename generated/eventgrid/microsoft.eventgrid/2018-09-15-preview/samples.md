# Microsoft.EventGrid
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.eventgrid/domains

Domains_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/domains@2018-09-15-preview' = {
  name: 'example'
  location: 'westus2'
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.eventgrid/eventsubscriptions

EventSubscriptions_CreateOrUpdateForCustomTopic
```bicep
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2018-09-15-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2018-09-15-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2018-09-15-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2018-09-15-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/topics@2018-09-15-preview' = {
  name: 'example'
  location: 'westus2'
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```
