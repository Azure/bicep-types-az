# Microsoft.Kubernetes @ 2020-01-01-preview

## Resource Microsoft.Kubernetes/connectedClusters@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ConnectedClusterIdentity (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectedClusterProperties (Required)
* **tags**: TrackedResourceTags
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
* **connectivityStatus**: 'Connected' | 'Connecting' | 'Expired' | 'Offline'
* **distribution**: string
* **infrastructure**: string
* **kubernetesVersion**: string (ReadOnly)
* **lastConnectivityTime**: string (ReadOnly)
* **managedIdentityCertificateExpirationTime**: string (ReadOnly)
* **offering**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating'
* **totalCoreCount**: int (ReadOnly)
* **totalNodeCount**: int (ReadOnly)

## ConnectedClusterAADProfile
### Properties
* **clientAppId**: string (Required)
* **serverAppId**: string (Required)
* **tenantId**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

