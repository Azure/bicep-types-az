# Microsoft.KubernetesRuntime
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.kubernetesruntime/bgppeers

BgpPeers_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.KubernetesRuntime/bgpPeers@2024-03-01' = {
  name: 'example'
  properties: {
    myAsn: 64500
    peerAddress: '10.0.0.1'
    peerAsn: 64501
  }
}
```

## microsoft.kubernetesruntime/loadbalancers

LoadBalancers_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.KubernetesRuntime/loadBalancers@2024-03-01' = {
  name: 'example'
  properties: {
    addresses: [
      '192.168.50.1/24'
      '192.168.51.2-192.168.51.10'
    ]
    advertiseMode: 'ARP'
    serviceSelector: {
      app: 'frontend'
    }
  }
}
```

## microsoft.kubernetesruntime/services

Services_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.KubernetesRuntime/services@2024-03-01' = {
  name: 'example'
  properties: {
  }
}
```

## microsoft.kubernetesruntime/storageclasses

StorageClass_CreateOrUpdate_0
```bicep
resource exampleResource 'Microsoft.KubernetesRuntime/storageClasses@2024-03-01' = {
  name: 'example'
  properties: {
    typeProperties: {
      type: 'RWX'
      backingStorageClassName: 'default'
    }
  }
}
```
