# Microsoft.AppConfiguration
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.appconfiguration/configurationstores

ConfigurationStores_Create
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores@2025-06-01-preview' = {
  name: 'example'
  location: 'westus'
  sku: {
    name: 'Standard'
  }
  tags: {
    myTag: 'myTagValue'
  }
}
```

ConfigurationStores_Create_With_AzureFrontDoor
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores@2025-06-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    azureFrontDoor: {
      resourceId: '/subscriptions/c80fb759-c965-4c6a-9110-9b2b2d038882/resourceGroups/myResourceGroup/providers/microsoft.cdn/profiles/myAzureFrontDoorProfile'
    }
  }
  sku: {
    name: 'Standard'
  }
  tags: {
    myTag: 'myTagValue'
  }
}
```

ConfigurationStores_Create_With_Data_Plane_Proxy
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores@2025-06-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    dataPlaneProxy: {
      authenticationMode: 'Pass-through'
      privateLinkDelegation: 'Enabled'
    }
  }
  sku: {
    name: 'Standard'
  }
}
```

ConfigurationStores_Create_With_Identity
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores@2025-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/c80fb759-c965-4c6a-9110-9b2b2d038882/resourcegroups/myResourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity2': {
      }
    }
  }
  location: 'westus'
  sku: {
    name: 'Standard'
  }
  tags: {
    myTag: 'myTagValue'
  }
}
```

ConfigurationStores_Create_With_Local_Auth_Disabled
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores@2025-06-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    dataPlaneProxy: {
      authenticationMode: 'Pass-through'
      privateLinkDelegation: 'Disabled'
    }
    disableLocalAuth: true
  }
  sku: {
    name: 'Standard'
  }
}
```

ConfigurationStores_Create_With_Telemetry
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores@2025-06-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    telemetry: {
      resourceId: '/subscriptions/c80fb759-c965-4c6a-9110-9b2b2d038882/resourceGroups/myResourceGroup/providers/microsoft.insights/components/appInsightsName'
    }
  }
  sku: {
    name: 'Standard'
  }
  tags: {
    myTag: 'myTagValue'
  }
}
```

## microsoft.appconfiguration/configurationstores/keyvalues

KeyValues_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores/keyValues@2025-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    tags: {
      tag1: 'tagValue1'
      tag2: 'tagValue2'
    }
    value: 'myValue'
  }
}
```

## microsoft.appconfiguration/configurationstores/privateendpointconnections

PrivateEndpointConnection_Update
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2025-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      status: 'Approved'
    }
  }
}
```

## microsoft.appconfiguration/configurationstores/replicas

Replicas_Create
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores/replicas@2025-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
}
```

## microsoft.appconfiguration/configurationstores/snapshots

Snapshots_Create
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores/snapshots@2025-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    filters: [
      {
        key: 'app1/*'
        label: 'Production'
      }
    ]
    retentionPeriod: 3600
  }
}
```
