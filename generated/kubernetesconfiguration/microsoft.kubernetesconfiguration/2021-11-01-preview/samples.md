# Microsoft.KubernetesConfiguration
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.kubernetesconfiguration/extensions

Create Extension
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/extensions@2021-11-01-preview' = {
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

## microsoft.kubernetesconfiguration/fluxconfigurations

Create Flux Configuration
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/fluxConfigurations@2021-11-01-preview' = {
  name: 'example'
  properties: {
    gitRepository: {
      httpsCAFile: 'ZXhhbXBsZWNlcnRpZmljYXRl'
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
        validation: 'none'
      }
      srs-kustomization2: {
        path: './other/test/path'
        dependsOn: [
          {
            kustomizationName: 'srs-kustomization1'
          }
        ]
        prune: false
        retryIntervalInSeconds: 600
        syncIntervalInSeconds: 600
        timeoutInSeconds: 600
        validation: 'none'
      }
    }
    namespace: 'srs-namespace'
    scope: 'cluster'
    sourceKind: 'GitRepository'
    suspend: false
  }
}
```

## microsoft.kubernetesconfiguration/sourcecontrolconfigurations

Create Source Control Configuration
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/sourceControlConfigurations@2021-11-01-preview' = {
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
