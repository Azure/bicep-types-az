# Microsoft.Kubernetes @ 2020-01-01-preview

## Microsoft.Kubernetes/connectedClusters
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ConnectedClusterIdentity (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectedClusterProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Kubernetes/connectedClusters' (ReadOnly, DeployTimeConstant)

## ConnectedClusterIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## ConnectedClusterProperties
### Properties
* **aadProfile**: ConnectedClusterAADProfile (Required)
* **agentPublicKeyCertificate**: string (Required)
* **agentVersion**: string (ReadOnly)
* **kubernetesVersion**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating'
* **totalNodeCount**: int (ReadOnly)

## ConnectedClusterAADProfile
### Properties
* **clientAppId**: string (Required)
* **serverAppId**: string (Required)
* **tenantId**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

