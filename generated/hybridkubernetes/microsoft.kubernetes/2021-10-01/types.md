# Microsoft.Kubernetes @ 2021-10-01

## Resource Microsoft.Kubernetes/connectedClusters@2021-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ConnectedClusterIdentity](#connectedclusteridentity) (Required): The identity of the connected cluster.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectedClusterProperties](#connectedclusterproperties) (Required): Describes the connected cluster resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Kubernetes/connectedClusters' (ReadOnly, DeployTimeConstant): The resource type

## Function listClusterUserCredential (Microsoft.Kubernetes/connectedClusters@2021-10-01)
* **Resource**: Microsoft.Kubernetes/connectedClusters
* **ApiVersion**: 2021-10-01
* **Input**: [ListClusterUserCredentialProperties](#listclusterusercredentialproperties)
* **Output**: [CredentialResults](#credentialresults)

## ConnectedClusterIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of connected cluster identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the connected cluster. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' (Required): The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster.

## ConnectedClusterProperties
### Properties
* **agentPublicKeyCertificate**: string (Required): Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
* **agentVersion**: string (ReadOnly): Version of the agent running on the connected cluster resource
* **connectivityStatus**: 'Connected' | 'Connecting' | 'Expired' | 'Offline' | string (ReadOnly): Represents the connectivity status of the connected cluster.
* **distribution**: string: The Kubernetes distribution running on this connected cluster.
* **infrastructure**: string: The infrastructure on which the Kubernetes cluster represented by this connected cluster is running on.
* **kubernetesVersion**: string (ReadOnly): The Kubernetes version of the connected cluster resource
* **lastConnectivityTime**: string (ReadOnly): Time representing the last instance when heart beat was received from the cluster
* **managedIdentityCertificateExpirationTime**: string (ReadOnly): Expiration time of the managed identity certificate
* **offering**: string (ReadOnly): Connected cluster offering
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string: Provisioning state of the connected cluster resource.
* **totalCoreCount**: int (ReadOnly): Number of CPU cores present in the connected cluster resource
* **totalNodeCount**: int (ReadOnly): Number of nodes present in the connected cluster resource

## CredentialResult
### Properties
* **name**: string (ReadOnly): The name of the credential.
* **value**: any (ReadOnly): Base64-encoded Kubernetes configuration file.

## CredentialResults
### Properties
* **hybridConnectionConfig**: [HybridConnectionConfig](#hybridconnectionconfig) (ReadOnly): Contains the REP (rendezvous endpoint) and “Sender” access token.
* **kubeconfigs**: [CredentialResult](#credentialresult)[] (ReadOnly): Base64-encoded Kubernetes configuration file.

## HybridConnectionConfig
### Properties
* **expirationTime**: int (ReadOnly): Timestamp when this token will be expired.
* **hybridConnectionName**: string (ReadOnly): Name of the connection
* **relay**: string (ReadOnly): Name of the relay.
* **token**: string (ReadOnly): Sender access token

## ListClusterUserCredentialProperties
### Properties
* **authenticationMethod**: 'AAD' | 'Token' | string (Required, WriteOnly): The mode of client authentication.
* **clientProxy**: bool (Required, WriteOnly): Boolean value to indicate whether the request is for client side proxy or not

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource modification (UTC).
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

