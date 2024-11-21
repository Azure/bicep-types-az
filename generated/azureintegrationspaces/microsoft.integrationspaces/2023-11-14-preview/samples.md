# Microsoft.IntegrationSpaces
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.integrationspaces/spaces

CreateOrUpdateSpace
```bicep
resource exampleResource 'Microsoft.IntegrationSpaces/spaces@2023-11-14-preview' = {
  name: 'example'
  location: 'CentralUS'
  properties: {
    description: 'This is the user provided description of the space resource.'
  }
  tags: {
    key1: 'Value1'
  }
}
```

## microsoft.integrationspaces/spaces/applications

CreateOrUpdateApplication
```bicep
resource exampleResource 'Microsoft.IntegrationSpaces/spaces/applications@2023-11-14-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'CentralUS'
  properties: {
    description: 'This is the user provided description of the application.'
    trackingDataStores: {
      dataStoreName1: {
        dataStoreIngestionUri: 'https://ingest-someClusterName.someRegionName.kusto.windows.net'
        dataStoreResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testrg/providers/Microsoft.Kusto/Clusters/cluster1'
        dataStoreUri: 'https://someClusterName.someRegionName.kusto.windows.net'
        databaseName: 'testDatabase1'
      }
      dataStoreName2: {
        dataStoreIngestionUri: 'https://ingest-someClusterName.someRegionName.kusto.windows.net'
        dataStoreResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testrg/providers/Microsoft.Kusto/Clusters/cluster1'
        dataStoreUri: 'https://someClusterName.someRegionName.kusto.windows.net'
        databaseName: 'testDatabase1'
      }
    }
  }
  tags: {
    key1: 'Value1'
  }
}
```

## microsoft.integrationspaces/spaces/applications/businessprocesses

CreateOrUpdateBusinessProcess
```bicep
resource exampleResource 'Microsoft.IntegrationSpaces/spaces/applications/businessProcesses@2023-11-14-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'First Business Process'
    businessProcessMapping: {
      Completed: {
        logicAppResourceId: 'subscriptions/sub1/resourcegroups/group1/providers/Microsoft.Web/sites/logicApp1'
        operationName: 'CompletedPO'
        operationType: 'Action'
        workflowName: 'Fulfillment'
      }
      Denied: {
        logicAppResourceId: 'subscriptions/sub1/resourcegroups/group1/providers/Microsoft.Web/sites/logicApp1'
        operationName: 'DeniedPO'
        operationType: 'Action'
        workflowName: 'Fulfillment'
      }
      Processing: {
        logicAppResourceId: 'subscriptions/sub1/resourcegroups/group1/providers/Microsoft.Web/sites/logicApp1'
        operationName: 'ApprovedPO'
        operationType: 'Action'
        workflowName: 'PurchaseOrder'
      }
      Received: {
        logicAppResourceId: 'subscriptions/sub1/resourcegroups/group1/providers/Microsoft.Web/sites/logicApp1'
        operationName: 'manual'
        operationType: 'Trigger'
        workflowName: 'PurchaseOrder'
      }
      Shipped: {
        logicAppResourceId: 'subscriptions/sub1/resourcegroups/group1/providers/Microsoft.Web/sites/logicApp1'
        operationName: 'ShippedPO'
        operationType: 'Action'
        workflowName: 'Fulfillment'
      }
    }
    businessProcessStages: {
      Completed: {
        description: 'Completed'
        stagesBefore: [
          'Shipped'
        ]
      }
      Denied: {
        description: 'Denied'
        stagesBefore: [
          'Processing'
        ]
      }
      Processing: {
        description: 'Processing'
        properties: {
          ApprovalState: 'String'
          ApproverName: 'String'
          POAmount: 'Integer'
        }
        stagesBefore: [
          'Received'
        ]
      }
      Received: {
        description: 'received'
        properties: {
          City: 'String'
          Product: 'String'
          Quantity: 'Integer'
          State: 'String'
        }
      }
      Shipped: {
        description: 'Shipped'
        properties: {
          ShipPriority: 'Integer'
          TrackingID: 'Integer'
        }
        stagesBefore: [
          'Denied'
        ]
      }
    }
    identifier: {
      propertyName: 'businessIdentifier-1'
      propertyType: 'String'
    }
    tableName: 'table1'
    trackingDataStoreReferenceName: 'trackingDataStoreReferenceName1'
  }
}
```

## microsoft.integrationspaces/spaces/applications/resources

CreateOrUpdateApplicationResource
```bicep
resource exampleResource 'Microsoft.IntegrationSpaces/spaces/applications/resources@2023-11-14-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testrg/providers/Microsoft.Web/sites/LogicApp1'
    resourceKind: 'LogicApp'
    resourceType: 'Microsoft.Web/sites'
  }
}
```

## microsoft.integrationspaces/spaces/infrastructureresources

CreateOrUpdateInfrastructureResource
```bicep
resource exampleResource 'Microsoft.IntegrationSpaces/spaces/infrastructureResources@2023-11-14-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testrg/providers/Microsoft.ApiManagement/service/APIM1'
    resourceType: 'Microsoft.ApiManagement/service'
  }
}
```
