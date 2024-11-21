# Microsoft.EventGrid
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.eventgrid/domains

Domains_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/domains@2021-06-01-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/domains/privateEndpointConnections@2021-06-01-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-06-01-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-06-01-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-06-01-preview' = {
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
        queueMessageTimeToLiveInSeconds: 300
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-06-01-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-06-01-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-06-01-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/eventSubscriptions@2021-06-01-preview' = {
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

## microsoft.eventgrid/partnernamespaces

PartnerNamespaces_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/partnerNamespaces@2021-06-01-preview' = {
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

## microsoft.eventgrid/partnernamespaces/eventchannels

EventChannels_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/partnerNamespaces/eventChannels@2021-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destination: {
      azureSubscriptionId: '5b4b650e-28b9-4790-b3ab-ddbd88d727c4'
      partnerTopicName: 'examplePartnerTopic1'
      resourceGroup: 'examplerg2'
    }
    source: {
      source: 'ContosoCorp.Accounts.User1'
    }
  }
}
```

## microsoft.eventgrid/partnernamespaces/privateendpointconnections

PrivateEndpointConnections_Update
```bicep
resource exampleResource 'Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections@2021-06-01-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/partnerRegistrations@2021-06-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    authorizedAzureSubscriptionIds: [
      'd48566a8-2428-4a6c-8347-9675d09fb851'
    ]
    logoUri: 'https://www.example.com/logo.png'
    partnerName: 'ContosoCorp'
    partnerResourceTypeDescription: 'ContocoCorp Accounts Description Text'
    partnerResourceTypeDisplayName: 'ContocoCorp Accounts DisplayName Text'
    partnerResourceTypeName: 'ContosoCorp.Accounts'
    setupUri: 'https://www.example.com/setup.html'
  }
  tags: {
    key1: 'value1'
    key2: 'Value2'
    key3: 'Value3'
  }
}
```

## microsoft.eventgrid/partnertopics/eventsubscriptions

PartnerTopicEventSubscriptions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.EventGrid/partnerTopics/eventSubscriptions@2021-06-01-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/systemTopics@2021-06-01-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/systemTopics/eventSubscriptions@2021-06-01-preview' = {
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
resource exampleResource 'Microsoft.EventGrid/topics@2021-06-01-preview' = {
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

Topics_CreateOrUpdateForAzureArc
```bicep
resource exampleResource 'Microsoft.EventGrid/topics@2021-06-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourcegroups/examplerg/providers/Microsoft.ExtendedLocation/CustomLocations/exampleCustomLocation'
    type: 'CustomLocation'
  }
  kind: 'AzureArc'
  location: 'westus2'
  properties: {
    inputSchema: 'CloudEventSchemaV1_0'
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
resource exampleResource 'Microsoft.EventGrid/topics/privateEndpointConnections@2021-06-01-preview' = {
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
