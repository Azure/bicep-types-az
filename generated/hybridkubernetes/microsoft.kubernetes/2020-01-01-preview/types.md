# Microsoft.Kubernetes @ 2020-01-01-preview

## Resource Microsoft.Kubernetes/connectedClusters@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ConnectedClusterIdentity](#connectedclusteridentity) (Required): The identity of the connected cluster.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectedClusterProperties](#connectedclusterproperties) (Required): Describes the connected cluster resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Kubernetes/connectedClusters' (ReadOnly, DeployTimeConstant): The resource type

## Function listClusterUserCredentials (Microsoft.Kubernetes/connectedClusters@2020-01-01-preview)
* **Resource**: Microsoft.Kubernetes/connectedClusters
* **ApiVersion**: 2020-01-01-preview
* **Input**: [AuthenticationDetails](#authenticationdetails)
* **Output**: [CredentialResults](#credentialresults)

## AuthenticationDetails
### Properties
* **authenticationMethod**: 'Token' | string (Required): The mode of client authentication.
* **value**: [AuthenticationDetailsValue](#authenticationdetailsvalue) (Required): Authentication token value.

## AuthenticationDetailsValue
### Properties
* **token**: string: Authentication token.

## ConnectedClusterAADProfile
### Properties
* **clientAppId**: string (Required): The client app id configured on target K8 cluster
* **serverAppId**: string (Required): The server app id to access AD server
* **tenantId**: string (Required): The aad tenant id which is configured on target K8s cluster

## ConnectedClusterIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of connected cluster identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the connected cluster. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' (Required): The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster.

## ConnectedClusterProperties
### Properties
* **aadProfile**: [ConnectedClusterAADProfile](#connectedclusteraadprofile) (Required): AAD profile of the connected cluster.
* **agentPublicKeyCertificate**: string (Required): Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
* **agentVersion**: string (ReadOnly): Version of the agent running on the connected cluster resource
* **connectivityStatus**: 'Connected' | 'Connecting' | 'Expired' | 'Offline' | string: Represents the connectivity status of the connected cluster.
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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

