# Microsoft.KubernetesConfiguration

## microsoft.kubernetesconfiguration/fluxconfigurations

Create Flux Configuration
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/fluxConfigurations@2022-03-01' = {
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
      srs-kustomization1: {
        path: './test/path'
        dependsOn: [
        ]
        syncIntervalInSeconds: 600
        timeoutInSeconds: 600
      }
      srs-kustomization2: {
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
    sourceKind: 'GitRepository'
    suspend: false
  }
}
```

Create Flux Configuration with Bucket Source Kind
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/fluxConfigurations@2022-03-01' = {
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
      srs-kustomization1: {
        path: './test/path'
        dependsOn: [
        ]
        syncIntervalInSeconds: 600
        timeoutInSeconds: 600
      }
      srs-kustomization2: {
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

## microsoft.kubernetesconfiguration/sourcecontrolconfigurations

Create Source Control Configuration
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/sourceControlConfigurations@2022-03-01' = {
  name: 'example'
  properties: {
    configurationProtectedSettings: {
      protectedSetting1Key: 'protectedSetting1Value'
    }
    enableHelmOperator: true
    helmOperatorProperties: {
      chartValues: '--set git.ssh.secretName=flux-git-deploy --set tillerNamespace=kube-system'
      chartVersion: '0.3.0'
    }
    operatorInstanceName: 'SRSGitHubFluxOp-01'
    operatorNamespace: 'SRS_Namespace'
    operatorParams: '--git-email=xyzgituser@users.srs.github.com'
    operatorScope: 'namespace'
    operatorType: 'Flux'
    repositoryUrl: 'git@github.com:k8sdeveloper425/flux-get-started'
    sshKnownHostsContents: 'c3NoLmRldi5henVyZS5jb20gc3NoLXJzYSBBQUFBQjNOemFDMXljMkVBQUFBREFRQUJBQUFCQVFDN0hyMW9UV3FOcU9sekdKT2ZHSjROYWtWeUl6ZjFyWFlkNGQ3d282akJsa0x2Q0E0b2RCbEwwbURVeVowL1FVZlRUcWV1K3RtMjJnT3N2K1ZyVlRNazZ2d1JVNzVnWS95OXV0NU1iM2JSNUJWNThkS1h5cTlBOVVlQjVDYWtlaG41WmdtNngxbUtvVnlmK0ZGbjI2aVlxWEpSZ3pJWlpjWjVWNmhyRTBRZzM5a1ptNGF6NDhvMEFVYmY2U3A0U0xkdm51TWEyc1ZOd0hCYm9TN0VKa201N1hRUFZVMy9RcHlOTEhiV0Rkend0cmxTK2V6MzBTM0FkWWhMS0VPeEFHOHdlT255cnRMSkFVZW45bVRrb2w4b0lJMWVkZjdtV1diV1ZmMG5CbWx5MjErblpjbUNUSVNRQnRkY3lQYUVubzdmRlFNREQyNi9zMGxmS29iNEt3OEg='
  }
}
```

## microsoft.kubernetesconfiguration/extensions

Create Extension
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/extensions@2022-03-01' = {
  name: 'example'
  properties: {
    autoUpgradeMinorVersion: true
    configurationProtectedSettings: {
      omsagent.secret.key: 'secretKeyValue01'
    }
    configurationSettings: {
      omsagent.env.clusterName: 'clusterName1'
      omsagent.secret.wsid: 'fakeTokenPlaceholder'
    }
    extensionType: 'azuremonitor-containers'
    releaseTrain: 'Preview'
    scope: {
      cluster: {
        releaseNamespace: 'kube-system'
      }
    }
  }
}
```
