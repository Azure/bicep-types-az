# Microsoft.AVS
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.avs/privateclouds

PrivateClouds_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds@2020-03-20' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    managementCluster: {
      clusterSize: 4
    }
    networkBlock: '192.168.48.0/22'
  }
  sku: {
    name: 'AV36'
  }
  tags: {
  }
}
```

## microsoft.avs/privateclouds/authorizations

Authorizations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/authorizations@2020-03-20' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.avs/privateclouds/clusters

Clusters_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/clusters@2020-03-20' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clusterSize: 3
  }
  sku: {
    name: 'AV20'
  }
}
```

## microsoft.avs/privateclouds/hcxenterprisesites

HcxEnterpriseSites_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/hcxEnterpriseSites@2020-03-20' = {
  parent: parentResource 
  name: 'example'
}
```
