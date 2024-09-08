# Microsoft.Kubernetes @ 2024-07-15-preview

## Resource Microsoft.Kubernetes/connectedClusters@2024-07-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ConnectedClusterIdentity](#connectedclusteridentity) (Required): The identity of the connected cluster.
* **kind**: 'ProvisionedCluster' | string: The kind of connected cluster.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectedClusterProperties](#connectedclusterproperties) (Required): Describes the connected cluster resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Kubernetes/connectedClusters' (ReadOnly, DeployTimeConstant): The resource type

## Function listClusterUserCredential (Microsoft.Kubernetes/connectedClusters@2024-07-15-preview)
* **Resource**: Microsoft.Kubernetes/connectedClusters
* **ApiVersion**: 2024-07-15-preview
* **Input**: [ListClusterUserCredentialProperties](#listclusterusercredentialproperties)
* **Output**: [CredentialResults](#credentialresults)

## AadProfile
### Properties
* **adminGroupObjectIDs**: string[]: The list of AAD group object IDs that will have admin role of the cluster.
* **enableAzureRBAC**: bool: Whether to enable Azure RBAC for Kubernetes authorization.
* **tenantID**: string: The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.

## AgentError
### Properties
* **component**: string (ReadOnly): Agent component where error message occured.
* **message**: string (ReadOnly): Agent error message.
* **severity**: string (ReadOnly): Severity of the error message.
* **time**: string (ReadOnly): The timestamp of error occured (UTC).

## ArcAgentProfile
### Properties
* **agentAutoUpgrade**: 'Disabled' | 'Enabled' | string: Indicates whether the Arc agents on the be upgraded automatically to the latest version. Defaults to Enabled.
* **agentErrors**: [AgentError](#agenterror)[]: List of arc agentry and system components errors on the cluster resource.
* **agentState**: string (ReadOnly): Represents the current state of the Arc agentry and its dependent components.
* **desiredAgentVersion**: string: Version of the Arc agents to be installed on the cluster resource
* **systemComponents**: [SystemComponent](#systemcomponent)[]: List of system extensions that are installed on the cluster resource.

## ArcAgentryConfigurations
### Properties
* **feature**: string: Specifies the name of the feature for the configuration setting.
* **protectedSettings**: [ArcAgentryConfigurationsProtectedSettings](#arcagentryconfigurationsprotectedsettings): The configuration settings for the feature that contain any sensitive or secret information.
* **settings**: [ArcAgentryConfigurationsSettings](#arcagentryconfigurationssettings): The configuration settings for the feature that do not contain any sensitive or secret information.

## ArcAgentryConfigurationsProtectedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ArcAgentryConfigurationsSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectedClusterIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of connected cluster identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the connected cluster. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' (Required): The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster.

## ConnectedClusterProperties
### Properties
* **aadProfile**: [AadProfile](#aadprofile): AAD profile for the connected cluster.
* **agentPublicKeyCertificate**: string (Required): Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
* **agentVersion**: string (ReadOnly): Version of the agent running on the connected cluster resource
* **arcAgentProfile**: [ArcAgentProfile](#arcagentprofile): Arc agentry configuration for the provisioned cluster.
* **arcAgentryConfigurations**: [ArcAgentryConfigurations](#arcagentryconfigurations)[]: Configuration settings for customizing the behavior of the connected cluster.
* **azureHybridBenefit**: 'False' | 'NotApplicable' | 'True' | string: Indicates whether Azure Hybrid Benefit is opted in
* **connectivityStatus**: 'Connected' | 'Connecting' | 'Expired' | 'Offline' | string (ReadOnly): Represents the connectivity status of the connected cluster.
* **distribution**: string: The Kubernetes distribution running on this connected cluster.
* **distributionVersion**: string: The Kubernetes distribution version on this connected cluster.
* **gateway**: [Gateway](#gateway): Details of the gateway used by the Arc router for connectivity.
* **infrastructure**: string: The infrastructure on which the Kubernetes cluster represented by this connected cluster is running on.
* **kubernetesVersion**: string (ReadOnly): The Kubernetes version of the connected cluster resource
* **lastConnectivityTime**: string (ReadOnly): Time representing the last instance when heart beat was received from the cluster
* **managedIdentityCertificateExpirationTime**: string (ReadOnly): Expiration time of the managed identity certificate
* **miscellaneousProperties**: [ConnectedClusterPropertiesMiscellaneousProperties](#connectedclusterpropertiesmiscellaneousproperties) (ReadOnly): More properties related to the Connected Cluster
* **offering**: string (ReadOnly): Connected cluster offering
* **oidcIssuerProfile**: [OidcIssuerProfile](#oidcissuerprofile): Open ID Connect (OIDC) Issuer Profile for the connected cluster.
* **privateLinkScopeResourceId**: string: This is populated only if privateLinkState is enabled. The resource id of the private link scope this connected cluster is assigned to, if any.
* **privateLinkState**: 'Disabled' | 'Enabled' | string: Property which describes the state of private link on a connected cluster resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string: Provisioning state of the connected cluster resource.
* **securityProfile**: [SecurityProfile](#securityprofile): Security profile for the connected cluster.
* **totalCoreCount**: int (ReadOnly): Number of CPU cores present in the connected cluster resource
* **totalNodeCount**: int (ReadOnly): Number of nodes present in the connected cluster resource

## ConnectedClusterPropertiesMiscellaneousProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CredentialResult
### Properties
* **name**: string (ReadOnly): The name of the credential.
* **value**: any (ReadOnly): Base64-encoded Kubernetes configuration file.

## CredentialResults
### Properties
* **hybridConnectionConfig**: [HybridConnectionConfig](#hybridconnectionconfig) (ReadOnly): Contains the REP (rendezvous endpoint) and “Sender” access token.
* **kubeconfigs**: [CredentialResult](#credentialresult)[] (ReadOnly): Base64-encoded Kubernetes configuration file.

## Gateway
### Properties
* **enabled**: bool: Indicates whether the gateway for arc router connectivity is enabled.
* **resourceId**: string: The resource ID of the gateway used for the Arc router feature.

## HybridConnectionConfig
### Properties
* **expirationTime**: int (ReadOnly): Timestamp when this token will be expired.
* **hybridConnectionName**: string (ReadOnly): Name of the connection
* **relay**: string (ReadOnly): Name of the relay.
* **relayTid**: string (ReadOnly): TenantID of the relay
* **relayType**: string (ReadOnly): Type of relay
* **token**: string (ReadOnly): Sender access token

## ListClusterUserCredentialProperties
### Properties
* **authenticationMethod**: 'AAD' | 'Token' | string (Required): The mode of client authentication.
* **clientProxy**: bool (Required): Boolean value to indicate whether the request is for client side proxy or not

## OidcIssuerProfile
### Properties
* **enabled**: bool: Whether to enable oidc issuer for workload identity integration.
* **issuerUrl**: string (ReadOnly): The issuer url for hybrid clusters connected to Arc used for the workload identity feature.
* **selfHostedIssuerUrl**: string: The issuer url for public cloud clusters - AKS, EKS, GKE - used for the workload identity feature.

## SecurityProfile
### Properties
* **workloadIdentity**: [SecurityProfileWorkloadIdentity](#securityprofileworkloadidentity): The workload identity feature webhook.

## SecurityProfileWorkloadIdentity
### Properties
* **enabled**: bool: Whether to enable or disable the workload identity Webhook

## SystemComponent
### Properties
* **currentVersion**: string (ReadOnly): Version of the system extension that is currently installed on the cluster resource.
* **majorVersion**: int: Major Version of the system extension that is currently installed on the cluster resource.
* **type**: string: Type of the system extension
* **userSpecifiedVersion**: string: Version of the system extension to be installed on the cluster resource.

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

