# Microsoft.Kusto
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.kusto/clusters

KustoClustersCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters@2018-09-07-preview' = {
  name: 'example'
  location: 'westus'
  sku: {
    name: 'L8'
    capacity: 2
    tier: 'Standard'
  }
}
```

## microsoft.kusto/clusters/databases

KustoDatabasesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases@2018-09-07-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    softDeletePeriodInDays: 1
  }
}
```

## microsoft.kusto/clusters/databases/eventhubconnections

KustoEventHubConnectionsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases/eventhubconnections@2018-09-07-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    consumerGroup: 'testConsumerGroup1'
    eventHubResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.EventHub/namespaces/eventhubTestns1/eventhubs/eventhubTest1'
  }
}
```
