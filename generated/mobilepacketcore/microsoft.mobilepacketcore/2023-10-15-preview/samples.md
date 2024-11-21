# Microsoft.MobilePacketCore
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.mobilepacketcore/amfdeployments

AmfDeployments_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.MobilePacketCore/amfDeployments@2023-10-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    clusterService: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.MobilePacketCore/clusterServices/byoCluster'
    componentParameters: '{"global": {"registry": {"docker": []}}}'
    secretsParameters: '{"global": {"secret": {"secretValue": []}}}'
  }
}
```

## microsoft.mobilepacketcore/clusterservices

ClusterServices_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.MobilePacketCore/clusterServices@2023-10-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    clusterTypeSpecificData: {
      type: 'NexusAks'
      customLocationId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ExtendedLocation/customLocations/cluster124Location'
    }
    componentParameters: [
      {
        type: 'fed-crds'
        parameters: '{"global": {"registry": {"docker": []}}}'
        secrets: '{"global": {"secret": {"secretValue": []}}}'
      }
    ]
    deploymentType: 'Production'
    releaseVersion: '4.3.0-alpha'
  }
}
```

## microsoft.mobilepacketcore/nrfdeployments

NrfDeployments_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.MobilePacketCore/nrfDeployments@2023-10-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    clusterService: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.MobilePacketCore/clusterServices/byoCluster'
    componentParameters: '{"global": {"registry": {"docker": []}}}'
    secretsParameters: '{"global": {"secret": {"secretValue": []}}}'
  }
}
```

## microsoft.mobilepacketcore/nssfdeployments

NssfDeployments_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.MobilePacketCore/nssfDeployments@2023-10-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    clusterService: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.MobilePacketCore/clusterServices/byoCluster'
    componentParameters: '{"global": {"registry": {"docker": []}}}'
    secretsParameters: '{"global": {"secret": {"secretValue": []}}}'
  }
}
```

## microsoft.mobilepacketcore/observabilityservices

ObservabilityServices_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.MobilePacketCore/observabilityServices@2023-10-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    clusterService: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.MobilePacketCore/clusterServices/byoCluster'
    componentParameters: [
      {
        type: 'fed-crds'
        parameters: '{"global": {"registry": {"docker": []}}}'
        secrets: '{"global": {"secret": {"secretValue": []}}}'
      }
    ]
  }
}
```

## microsoft.mobilepacketcore/smfdeployments

SmfDeployments_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.MobilePacketCore/smfDeployments@2023-10-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    clusterService: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.MobilePacketCore/clusterServices/byoCluster'
    componentParameters: '{"global": {"registry": {"docker": []}}}'
    secretsParameters: '{"global": {"secret": {"secretValue": []}}}'
  }
}
```

## microsoft.mobilepacketcore/upfdeployments

UpfDeployments_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.MobilePacketCore/upfDeployments@2023-10-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    clusterService: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.MobilePacketCore/clusterServices/byoCluster'
    componentParameters: '{"global": {"registry": {"docker": []}}}'
    secretsParameters: '{"global": {"secret": {"secretValue": []}}}'
  }
}
```
