# Microsoft.KubernetesConfiguration
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.kubernetesconfiguration/extensions

Create Extension
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/extensions@2025-03-01' = {
  name: 'example'
  properties: {
    autoUpgradeMinorVersion: true
    autoUpgradeMode: 'compatible'
    configurationProtectedSettings: {
      'omsagent.secret.key': 'secretKeyValue01'
    }
    configurationSettings: {
      'omsagent.env.clusterName': 'clusterName1'
      'omsagent.secret.wsid': 'fakeTokenPlaceholder'
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

Create Extension with Plan
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/extensions@2025-03-01' = {
  name: 'example'
  plan: {
    name: 'azure-vote-standard'
    product: 'azure-vote-standard-offer-id'
    publisher: 'Microsoft'
  }
  properties: {
    autoUpgradeMinorVersion: true
    autoUpgradeMode: 'compatible'
    extensionType: 'azure-vote'
    releaseTrain: 'Preview'
  }
}
```
