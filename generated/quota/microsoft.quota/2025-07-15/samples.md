# Microsoft.Quota
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.quota/quotas

Quotas_Put_Request_ForCompute
```bicep
resource exampleResource 'Microsoft.Quota/quotas@2025-07-15' = {
  name: 'example'
  properties: {
    name: {
      value: 'standardFSv2Family'
    }
    limit: {
      limitObjectType: 'LimitValue'
      value: 10
    }
  }
}
```

Quotas_PutRequest_ForNetwork
```bicep
resource exampleResource 'Microsoft.Quota/quotas@2025-07-15' = {
  name: 'example'
  properties: {
    name: {
      value: 'MinPublicIpInterNetworkPrefixLength'
    }
    limit: {
      limitObjectType: 'LimitValue'
      value: 10
    }
    resourceType: 'MinPublicIpInterNetworkPrefixLength'
  }
}
```

Quotas_PutRequest_ForNetwork_StandardSkuPublicIpAddressesResource
```bicep
resource exampleResource 'Microsoft.Quota/quotas@2025-07-15' = {
  name: 'example'
  properties: {
    name: {
      value: 'StandardSkuPublicIpAddresses'
    }
    limit: {
      limitObjectType: 'LimitValue'
      value: 10
    }
    resourceType: 'PublicIpAddresses'
  }
}
```

Quotas_Request_ForMachineLearningServices_LowPriorityResource
```bicep
resource exampleResource 'Microsoft.Quota/quotas@2025-07-15' = {
  name: 'example'
  properties: {
    name: {
      value: 'TotalLowPriorityCores'
    }
    limit: {
      limitObjectType: 'LimitValue'
      value: 10
    }
    resourceType: 'lowPriority'
  }
}
```
