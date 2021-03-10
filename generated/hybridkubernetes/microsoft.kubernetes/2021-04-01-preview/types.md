# Microsoft.Kubernetes @ 2021-04-01-preview

## Resource Microsoft.Kubernetes/connectedClusters@2021-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ConnectedClusterIdentity](#connectedclusteridentity) (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectedClusterProperties](#connectedclusterproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Kubernetes/connectedClusters' (ReadOnly, DeployTimeConstant)

## ConnectedClusterIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## ConnectedClusterProperties
### Properties
* **agentPublicKeyCertificate**: string (Required)
* **agentVersion**: string (ReadOnly)
* **connectivityStatus**: 'Connected' | 'Connecting' | 'Expired' | 'Offline' (ReadOnly)
* **distribution**: string
* **infrastructure**: string
* **kubernetesVersion**: string (ReadOnly)
* **lastConnectivityTime**: string (ReadOnly)
* **managedIdentityCertificateExpirationTime**: string (ReadOnly)
* **offering**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating'
* **totalCoreCount**: int (ReadOnly)
* **totalNodeCount**: int (ReadOnly)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

