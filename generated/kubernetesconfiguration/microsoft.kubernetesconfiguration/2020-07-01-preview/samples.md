# Microsoft.KubernetesConfiguration

## microsoft.kubernetesconfiguration/sourcecontrolconfigurations

Create Source Control Configuration
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/sourceControlConfigurations@2020-07-01-preview' = {
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
  }
}
```

## microsoft.kubernetesconfiguration/extensions

Create Extension
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/extensions@2020-07-01-preview' = {
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
