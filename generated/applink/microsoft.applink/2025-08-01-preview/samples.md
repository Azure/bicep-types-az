# Microsoft.AppLink
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.applink/applinks

AppLinks_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppLink/appLinks@2025-08-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'westus2'
  properties: {
  }
  tags: {
    key2913: 'test_tag'
  }
}
```

## microsoft.applink/applinks/applinkmembers

AppLinkMembers_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppLink/appLinks/appLinkMembers@2025-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus2'
  properties: {
    clusterType: 'AKS'
    connectivityProfile: {
      eastWestGateway: {
        visibility: 'Internal'
      }
      privateConnect: {
        subnetResourceId: '/subscriptions/bc7e0da9-5e4c-4a91-9252-9658837006cf/resourceGroups/applink-vnet-rg/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
      }
    }
    metadata: {
      resourceId: '/subscriptions/bc7e0da9-5e4c-4a91-9252-9658837006cf/resourcegroups/applink-rg/providers/Microsoft.ContainerService/managedClusters/applink-member1'
    }
    upgradeProfile: {
      fullyManagedUpgradeProfile: {
        releaseChannel: 'Stable'
      }
      mode: 'FullyManaged'
    }
  }
  tags: {
    key2913: 'test_tag'
  }
}
```
