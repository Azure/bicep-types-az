# Microsoft.KubernetesConfiguration

## microsoft.kubernetesconfiguration/extensions

Create Extension
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/extensions@2022-04-02-preview' = {
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

Create Extension with Plan
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/extensions@2022-04-02-preview' = {
  name: 'example'
  plan: {
    name: 'azure-vote-standard'
    product: 'azure-vote-standard-offer-id'
    publisher: 'Microsoft'
  }
  properties: {
    autoUpgradeMinorVersion: true
    extensionType: 'azure-vote'
    releaseTrain: 'Preview'
  }
}
```

## microsoft.kubernetesconfiguration/privatelinkscopes

PrivateLinkScopeCreate
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/privateLinkScopes@2022-04-02-preview' = {
  name: 'example'
  location: 'westus'
}
```

PrivateLinkScopeUpdate
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/privateLinkScopes@2022-04-02-preview' = {
  name: 'example'
  location: 'westus'
  tags: {
    Tag1: 'Value1'
  }
}
```

## microsoft.kubernetesconfiguration/privatelinkscopes/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.KubernetesConfiguration/privateLinkScopes/privateEndpointConnections@2022-04-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@contoso.com'
      status: 'Approved'
    }
  }
}
```
