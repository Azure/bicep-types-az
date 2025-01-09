# Microsoft.Confluent
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.confluent/organizations

Organization_Create
```bicep
resource exampleResource 'Microsoft.Confluent/organizations@2024-07-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    linkOrganization: {
      token: 'string'
    }
    offerDetail: {
      id: 'string'
      planId: 'string'
      planName: 'string'
      privateOfferId: 'string'
      privateOfferIds: [
        'string'
      ]
      publisherId: 'string'
      termUnit: 'string'
    }
    userDetail: {
      aadEmail: 'contoso@microsoft.com'
      emailAddress: 'contoso@microsoft.com'
      firstName: 'string'
      lastName: 'string'
      userPrincipalName: 'contoso@microsoft.com'
    }
  }
  tags: {
    Environment: 'Dev'
  }
}
```

## microsoft.confluent/organizations/environments

Environment_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Confluent/organizations/environments@2024-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    streamGovernanceConfig: {
      package: 'ESSENTIALS'
    }
  }
}
```

## microsoft.confluent/organizations/environments/clusters

Cluster_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Confluent/organizations/environments/clusters@2024-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    spec: {
      environment: {
        id: 'env-1'
      }
      package: 'ESSENTIALS'
      region: 'us-east4'
    }
  }
}
```

## microsoft.confluent/organizations/environments/clusters/connectors

Connector_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Confluent/organizations/environments/clusters/connectors@2024-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    connectorBasicInfo: {
      connectorClass: 'AZUREBLOBSTORAGESINK'
      connectorName: 'connector-1'
      connectorType: 'SINK'
    }
    connectorServiceTypeInfo: {
      connectorServiceType: 'AzureBlobStorageSinkConnector'
      storageAccountKey: '*******'
      storageAccountName: 'stcfaccount-1'
      storageContainerName: 'continer-1'
    }
    partnerConnectorInfo: {
      apiKey: 'xxxxxxx'
      apiSecret: '*******'
      authType: 'KAFKA_API_KEY'
      flushSize: '1000'
      inputFormat: 'JSON'
      maxTasks: '2'
      outputFormat: 'JSON'
      partnerConnectorType: 'KafkaAzureBlobStorageSink'
      timeInterval: 'DAILY'
      topics: [
        'topic-1'
      ]
      topicsDir: 'topicsDir'
    }
  }
}
```

## microsoft.confluent/organizations/environments/clusters/topics

Topics_Create
```bicep
resource exampleResource 'Microsoft.Confluent/organizations/environments/clusters/topics@2024-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    inputConfigs: [
      {
        name: 'cleanup.policy'
        value: 'compact'
      }
      {
        name: 'retention.ms'
        value: '86400000'
      }
    ]
    partitionsCount: '1'
    replicationFactor: '3'
  }
}
```
