# Microsoft.HardwareSecurityModules @ 2024-06-30-preview

## Resource Microsoft.HardwareSecurityModules/cloudHsmClusters@2024-06-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 23, pattern: "^[a-zA-Z0-9-]{3,23}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CloudHsmClusterProperties](#cloudhsmclusterproperties): Properties of the Cloud HSM Cluster
* **sku**: [CloudHsmClusterSku](#cloudhsmclustersku): SKU details
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HardwareSecurityModules/cloudHsmClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HardwareSecurityModules/cloudHsmClusters/privateEndpointConnections@2024-06-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Modified whenever there is a change in the state of private endpoint connection.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 24, pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HardwareSecurityModules/cloudHsmClusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HardwareSecurityModules/dedicatedHSMs@2024-06-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedHsmProperties](#dedicatedhsmproperties) (Required): Properties of the dedicated HSM
* **sku**: [Sku](#sku) (Required): SKU details
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HardwareSecurityModules/dedicatedHSMs' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The Dedicated Hsm zones.

## ApiEntityReference
### Properties
* **resourceId**: string: The Azure resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## CloudHsmClusterProperties
### Properties
* **activationState**: 'Active' | 'Failed' | 'NotActivated' | 'NotDefined' | 'Unknown' | string (ReadOnly): State of security domain activation
* **autoGeneratedDomainNameLabelScope**: 'NoReuse' | 'ResourceGroupReuse' | 'SubscriptionReuse' | 'TenantReuse' | string: The Cloud HSM Cluster's auto-generated Domain Name Label Scope
* **fipsApprovedMode**: bool: False: Non-FIPS Mode with single-factor authentication. True: FIPS Approved Mode with single-factor authentication
* **hsms**: [CloudHsmProperties](#cloudhsmproperties)[] (ReadOnly): An array of Cloud HSM Cluster's HSMs
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connection resources
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The Cloud HSM Cluster's provisioningState
* **publicNetworkAccess**: 'Disabled' | string: The Cloud HSM Cluster public network access
* **statusMessage**: string (ReadOnly): Cloud HSM Cluster status message

## CloudHsmClusterSku
### Properties
* **capacity**: int: Sku capacity
* **family**: 'B' | string (Required): Sku family of the Cloud HSM Cluster
* **name**: 'Standard B10' | 'Standard_B1' (Required): Sku name of the Cloud HSM Cluster

## CloudHsmProperties
### Properties
* **fqdn**: string: FQDN of the Cloud HSM
* **state**: string: The Cloud HSM State. Values are: Deploying, ConfiguringSlb, Starting, Starting, Failed, Failed, Deleting, DeletingSlbEntry, InitialProvisioning, Updating
* **stateMessage**: string: The Cloud HSM State message

## DedicatedHsmProperties
### Properties
* **managementNetworkProfile**: [NetworkProfile](#networkprofile): Specifies the management network interfaces of the dedicated hsm.
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network interfaces of the dedicated hsm.
* **provisioningState**: 'Allocating' | 'CheckingQuota' | 'Connecting' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **stampId**: string: This field will be used when RP does not support Availability zones.
* **statusMessage**: string (ReadOnly): Resource Status Message.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## NetworkInterface
### Properties
* **privateIpAddress**: string: Private Ip address of the interface
* **resourceId**: string (ReadOnly): The Azure resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## NetworkProfile
### Properties
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]: Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM.
* **subnet**: [ApiEntityReference](#apientityreference): Specifies the identifier of the subnet.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **etag**: string: Modified whenever there is a change in the state of private endpoint connection.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'InternalError' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## Sku
### Properties
* **name**: 'SafeNet Luna Network HSM A790' | 'payShield10K_LMK1_CPS250' | 'payShield10K_LMK1_CPS2500' | 'payShield10K_LMK1_CPS60' | 'payShield10K_LMK2_CPS250' | 'payShield10K_LMK2_CPS2500' | 'payShield10K_LMK2_CPS60' | string: SKU of the dedicated HSM

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.
