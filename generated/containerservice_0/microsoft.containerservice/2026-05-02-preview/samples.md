# Microsoft.ContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerservice/aimanagers

Creates or updates an AI Manager resource.
```bicep
resource exampleResource 'Microsoft.ContainerService/aiManagers@2026-05-02-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus'
  properties: {
    deletePolicy: 'Keep'
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.containerservice/aimanagers/modelsources

ModelSources_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ContainerService/aiManagers/modelSources@2026-05-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Hugging Face model source'
    credential: {
      inline: {
        value: 'hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      }
    }
    sourceType: 'HuggingFace'
  }
}
```

## microsoft.containerservice/aimanagers/namespaces

Creates or updates an AI Manager namespace resource.
```bicep
resource exampleResource 'Microsoft.ContainerService/aiManagers/namespaces@2026-05-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    annotations: {
      note: 'example'
    }
    labels: {
      app: 'myapp'
    }
  }
}
```

## microsoft.containerservice/aimanagers/namespaces/modeldeployments

ModelDeployments_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ContainerService/aiManagers/namespaces/modelDeployments@2026-05-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    modelResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rgaimanagers/providers/Microsoft.ContainerService/aiModels/9806f0c862fdd920'
    modelSourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rgaimanagers/providers/Microsoft.ContainerService/aiManagers/aimanager1/modelSources/huggingface'
    performanceMode: 'Balanced'
    scale: {
      autoscale: {
        maxReplicas: 8
        minReplicas: 2
      }
    }
    status: {
    }
    vmSize: 'Standard_NC96ads_A100_v4'
  }
}
```
