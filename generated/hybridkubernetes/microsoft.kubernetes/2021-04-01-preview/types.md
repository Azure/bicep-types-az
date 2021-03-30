# Microsoft.Kubernetes @ 2021-04-01-preview

## Resource Microsoft.Kubernetes/connectedClusters@2021-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ConnectedClusterIdentity](#connectedclusteridentity) (Required): Identity for the connected cluster.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectedClusterProperties](#connectedclusterproperties) (Required): Properties of the connected cluster.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Kubernetes/connectedClusters' (ReadOnly, DeployTimeConstant): The resource type

## ConnectedClusterIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of connected cluster identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the connected cluster. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' (Required): The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster. Possible values include: 'None', 'SystemAssigned'

## ConnectedClusterProperties
### Properties
* **agentPublicKeyCertificate**: string (Required): Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
* **agentVersion**: string (ReadOnly): Version of the agent running on the connected cluster resource
* **connectivityStatus**: 'Connected' | 'Connecting' | 'Expired' | 'Offline' (ReadOnly): Represents the connectivity status of the connected cluster. Possible values include: 'Connecting', 'Connected', 'Offline', 'Expired'
* **distribution**: string: The Kubernetes distribution running on this connected cluster.
* **infrastructure**: string: The infrastructure on which the Kubernetes cluster represented by this connected cluster is running on.
* **kubernetesVersion**: string (ReadOnly): The Kubernetes version of the connected cluster resource
* **lastConnectivityTime**: string (ReadOnly): Time representing the last instance when heart beat was received from the cluster
* **managedIdentityCertificateExpirationTime**: string (ReadOnly): Expiration time of the managed identity certificate
* **offering**: string (ReadOnly): Connected cluster offering
* **privateLinkScopeResourceId**: string: The resource id of the private link scope this connected cluster is assigned to, if any.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating': Provisioning state of the connected cluster resource. Possible values include: 'Succeeded', 'Failed', 'Canceled', 'Provisioning', 'Updating', 'Deleting', 'Accepted'
* **totalCoreCount**: int (ReadOnly): Number of CPU cores present in the connected cluster resource
* **totalNodeCount**: int (ReadOnly): Number of nodes present in the connected cluster resource

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
* **lastModifiedAt**: string: The timestamp of resource modification (UTC).
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

