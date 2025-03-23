# Microsoft.KubernetesConfiguration
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.kubernetesconfiguration/fluxconfigurations

Create Flux Configuration
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/fluxConfigurations@2024-11-01' = {
  name: 'example'
  properties: {
    gitRepository: {
      httpsCACert: 'ZXhhbXBsZWNlcnRpZmljYXRl'
      repositoryRef: {
        branch: 'master'
      }
      syncIntervalInSeconds: 600
      timeoutInSeconds: 600
      url: 'https://github.com/Azure/arc-k8s-demo'
    }
    kustomizations: {
      'srs-kustomization1': {
        path: './test/path'
        dependsOn: [
        ]
        postBuild: {
          substitute: {
            cluster_env: 'prod'
            replica_count: '2'
          }
          substituteFrom: [
            {
              name: 'cluster-test'
              kind: 'ConfigMap'
              optional: true
            }
          ]
        }
        syncIntervalInSeconds: 600
        timeoutInSeconds: 600
        wait: true
      }
      'srs-kustomization2': {
        path: './other/test/path'
        dependsOn: [
          'srs-kustomization1'
        ]
        postBuild: {
          substituteFrom: [
            {
              name: 'cluster-values'
              kind: 'ConfigMap'
              optional: true
            }
            {
              name: 'secret-name'
              kind: 'Secret'
              optional: false
            }
          ]
        }
        prune: false
        retryIntervalInSeconds: 600
        syncIntervalInSeconds: 600
        timeoutInSeconds: 600
        wait: false
      }
    }
    namespace: 'srs-namespace'
    reconciliationWaitDuration: 'PT30M'
    scope: 'cluster'
    sourceKind: 'GitRepository'
    suspend: false
    waitForReconciliation: true
  }
}
```

Create Flux Configuration with Bucket Source Kind
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/fluxConfigurations@2024-11-01' = {
  name: 'example'
  properties: {
    bucket: {
      accessKey: 'fluxminiotest'
      bucketName: 'flux'
      syncIntervalInSeconds: 1000
      timeoutInSeconds: 1000
      url: 'https://fluxminiotest.az.minio.io'
    }
    kustomizations: {
      'srs-kustomization1': {
        path: './test/path'
        dependsOn: [
        ]
        syncIntervalInSeconds: 600
        timeoutInSeconds: 600
      }
      'srs-kustomization2': {
        path: './other/test/path'
        dependsOn: [
          'srs-kustomization1'
        ]
        prune: false
        retryIntervalInSeconds: 600
        syncIntervalInSeconds: 600
        timeoutInSeconds: 600
      }
    }
    namespace: 'srs-namespace'
    scope: 'cluster'
    sourceKind: 'Bucket'
    suspend: false
  }
}
```

Create Flux Configuration with Git Repository Provider
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/fluxConfigurations@2024-11-01' = {
  name: 'example'
  properties: {
    gitRepository: {
      httpsCACert: 'ZXhhbXBsZWNlcnRpZmljYXRl'
      provider: 'Azure'
      repositoryRef: {
        branch: 'master'
      }
      syncIntervalInSeconds: 600
      timeoutInSeconds: 600
      url: 'https://dev.azure.com/org/proj/_git/arc-k8s-demo'
    }
    kustomizations: {
      'srs-kustomization1': {
        path: './test/path'
        dependsOn: [
        ]
        postBuild: {
          substitute: {
            cluster_env: 'prod'
            replica_count: '2'
          }
          substituteFrom: [
            {
              name: 'cluster-test'
              kind: 'ConfigMap'
              optional: true
            }
          ]
        }
        syncIntervalInSeconds: 600
        timeoutInSeconds: 600
        wait: true
      }
      'srs-kustomization2': {
        path: './other/test/path'
        dependsOn: [
          'srs-kustomization1'
        ]
        postBuild: {
          substituteFrom: [
            {
              name: 'cluster-values'
              kind: 'ConfigMap'
              optional: true
            }
            {
              name: 'secret-name'
              kind: 'Secret'
              optional: false
            }
          ]
        }
        prune: false
        retryIntervalInSeconds: 600
        syncIntervalInSeconds: 600
        timeoutInSeconds: 600
        wait: false
      }
    }
    namespace: 'srs-namespace'
    reconciliationWaitDuration: 'PT30M'
    scope: 'cluster'
    sourceKind: 'GitRepository'
    suspend: false
    waitForReconciliation: true
  }
}
```

Create Flux Configuration with OCIRepository Source Kind
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/fluxConfigurations@2024-11-01' = {
  name: 'example'
  properties: {
    kustomizations: {
      'srs-kustomization1': {
        path: './test/path'
        dependsOn: [
        ]
        syncIntervalInSeconds: 600
        timeoutInSeconds: 600
      }
      'srs-kustomization2': {
        path: './other/test/path'
        dependsOn: [
          'srs-kustomization1'
        ]
        prune: false
        retryIntervalInSeconds: 600
        syncIntervalInSeconds: 600
        timeoutInSeconds: 600
      }
    }
    namespace: 'srs-namespace'
    ociRepository: {
      serviceAccountName: 'testserviceaccount'
      syncIntervalInSeconds: 1000
      timeoutInSeconds: 1000
      url: 'oci://ghcr.io/stefanprodan/manifests/podinfo'
    }
    scope: 'cluster'
    sourceKind: 'OCIRepository'
    suspend: false
  }
}
```
