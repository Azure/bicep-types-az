# Microsoft.DelegatedNetwork
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.delegatednetwork/controller

Create controller
```bicep
resource exampleResource 'Microsoft.DelegatedNetwork/controller@2023-06-27-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    purpose: 'test'
  }
}
```

## microsoft.delegatednetwork/delegatedsubnets

put delegated subnet
```bicep
resource exampleResource 'Microsoft.DelegatedNetwork/delegatedSubnets@2023-06-27-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    controllerDetails: {
      id: '/subscriptions/613192d7-503f-477a-9cfe-4efc3ee2bd60/resourceGroups/TestRG/providers/Microsoft.DelegatedNetwork/controller/dnctestcontroller'
    }
    subnetDetails: {
      id: '/subscriptions/613192d7-503f-477a-9cfe-4efc3ee2bd60/resourceGroups/TestRG/providers/Microsoft.Network/virtualNetworks/testvnet/subnets/testsubnet'
    }
  }
}
```

put delegated subnet vnetblock
```bicep
resource exampleResource 'Microsoft.DelegatedNetwork/delegatedSubnets@2023-06-27-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    allocationBlockPrefixSize: 27
    controllerDetails: {
      id: '/subscriptions/613192d7-503f-477a-9cfe-4efc3ee2bd60/resourceGroups/TestRG/providers/Microsoft.DelegatedNetwork/controller/dnctestcontroller'
    }
    subnetDetails: {
      id: '/subscriptions/613192d7-503f-477a-9cfe-4efc3ee2bd60/resourceGroups/TestRG/providers/Microsoft.Network/virtualNetworks/testvnet/subnets/testsubnet'
    }
  }
}
```

## microsoft.delegatednetwork/orchestrators

Create orchestrator instance
```bicep
resource exampleResource 'Microsoft.DelegatedNetwork/orchestrators@2023-06-27-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  kind: 'Kubernetes'
  location: 'West US'
  properties: {
    apiServerEndpoint: 'https://testk8s.cloudapp.net'
    clusterRootCA: 'ddsadsad344mfdsfdl'
    controllerDetails: {
      id: '/subscriptions/613192d7-503f-477a-9cfe-4efc3ee2bd60/resourceGroups/TestRG/providers/Microsoft.DelegatedNetwork/controller/testcontroller'
    }
    orchestratorAppId: '546192d7-503f-477a-9cfe-4efc3ee2b6e1'
    orchestratorTenantId: 'da6192d7-503f-477a-9cfe-4efc3ee2b6c3'
    privateLinkResourceId: '/subscriptions/613192d7-503f-477a-9cfe-4efc3ee2bd60/resourceGroups/TestRG/providers/Microsoft.Network/privateLinkServices/plresource1'
  }
}
```
