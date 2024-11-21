# Microsoft.Capacity
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.capacity/resourceproviders/locations/servicelimits

Quotas_Request_ForCompute
```bicep
resource exampleResource 'Microsoft.Capacity/resourceProviders/locations/serviceLimits@2019-07-19-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    name: {
      value: 'standardFSv2Family'
    }
    limit: 200
    unit: 'Count'
  }
}
```

Quotas_Request_ForMachineLearningServices_DedicatedResource
```bicep
resource exampleResource 'Microsoft.Capacity/resourceProviders/locations/serviceLimits@2019-07-19-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    name: {
      value: 'StandardDv2Family'
    }
    limit: 200
    resourceType: 'dedicated'
    unit: 'Count'
  }
}
```

Quotas_Request_ForMachineLearningServices_LowPriorityResource
```bicep
resource exampleResource 'Microsoft.Capacity/resourceProviders/locations/serviceLimits@2019-07-19-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    name: {
      value: 'TotalLowPriorityCores'
    }
    limit: 200
    resourceType: 'lowPriority'
    unit: 'Count'
  }
}
```
