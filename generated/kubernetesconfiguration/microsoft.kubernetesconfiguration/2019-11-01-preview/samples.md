# Microsoft.KubernetesConfiguration

## microsoft.kubernetesconfiguration/sourcecontrolconfigurations

Create Source Control Configuration
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/sourceControlConfigurations@2019-11-01-preview' = {
  name: 'example'
  properties: {
    enableHelmOperator: 'true'
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
