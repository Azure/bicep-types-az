# Microsoft.Databricks @ 2022-10-01-preview

## Resource Microsoft.Databricks/accessConnectors@2022-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessConnectorProperties](#accessconnectorproperties): Azure Databricks accessConnector properties
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Databricks/accessConnectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Databricks/workspaces@2022-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties) (Required): The workspace properties.
* **sku**: [Sku](#sku): The SKU of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Databricks/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Databricks/workspaces/privateEndpointConnections@2022-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): The private endpoint connection properties.
* **type**: 'Microsoft.Databricks/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Databricks/workspaces/privateLinkResources@2022-10-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GroupIdInformationProperties](#groupidinformationproperties) (ReadOnly): The group id properties.
* **type**: 'Microsoft.Databricks/workspaces/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Databricks/workspaces/virtualNetworkPeerings@2022-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat) (Required): List of properties for vNet Peering
* **type**: 'Microsoft.Databricks/workspaces/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant): The resource type

## AccessConnectorProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status of the accessConnector.

## AddressSpace
### Properties
* **addressPrefixes**: string[]: A list of address blocks reserved for this virtual network in CIDR notation.

## CreatedBy
### Properties
* **applicationId**: string (ReadOnly): The application ID of the application that initiated the creation of the workspace. For example, Azure Portal.
* **oid**: string (ReadOnly): The Object ID that created the workspace.
* **puid**: string (ReadOnly): The Personal Object ID corresponding to the object ID above

## Encryption
### Properties
* **KeyName**: string: The name of KeyVault key.
* **keySource**: 'Default' | 'Microsoft.Keyvault' | string: The encryption keySource (provider). Possible values (case-insensitive):  Default, Microsoft.Keyvault
* **keyvaulturi**: string: The Uri of KeyVault.
* **keyversion**: string: The version of KeyVault key.

## EncryptionEntitiesDefinition
### Properties
* **managedServices**: [EncryptionV2](#encryptionv2): Encryption properties for the databricks managed services.

## EncryptionV2
### Properties
* **keySource**: 'Microsoft.Keyvault' | string (Required): The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault
* **keyVaultProperties**: [EncryptionV2KeyVaultProperties](#encryptionv2keyvaultproperties): Key Vault input properties for encryption.

## EncryptionV2KeyVaultProperties
### Properties
* **keyName**: string (Required): The name of KeyVault key.
* **keyVaultUri**: string (Required): The Uri of KeyVault.
* **keyVersion**: string (Required): The version of KeyVault key.

## GroupIdInformationProperties
### Properties
* **groupId**: string: The group id
* **requiredMembers**: string[]: The required members for a specific group id
* **requiredZoneNames**: string[]: The required DNS zones for a specific group id

## ManagedIdentityConfiguration
### Properties
* **principalId**: string (ReadOnly): The objectId of the Managed Identity that is linked to the Managed Storage account.
* **tenantId**: string (ReadOnly): The tenant Id where the Managed Identity is created.
* **type**: string (ReadOnly): The type of Identity created. It can be either SystemAssigned or UserAssigned.

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The resource identifier.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (ReadOnly): The resource name.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): The private endpoint connection properties.
* **type**: string (ReadOnly): The resource type.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Private endpoint
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): Private endpoint connection state
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the private endpoint connection.

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string: Actions required for a private endpoint connection
* **description**: string: The description for the current state of a private endpoint connection
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (Required): The status of a private endpoint connection

## Sku
### Properties
* **name**: string (Required): The SKU name.
* **tier**: string: The SKU tier.

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
* **clientId**: string (ReadOnly): The client ID of the assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the assigned identity.

## VirtualNetworkPeeringPropertiesFormat
### Properties
* **allowForwardedTraffic**: bool: Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
* **allowGatewayTransit**: bool: If gateway links can be used in remote virtual networking to link to this virtual network.
* **allowVirtualNetworkAccess**: bool: Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
* **databricksAddressSpace**: [AddressSpace](#addressspace): The reference to the databricks virtual network address space.
* **databricksVirtualNetwork**: [VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetwork](#virtualnetworkpeeringpropertiesformatdatabricksvirtualnetwork): The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
* **peeringState**: 'Connected' | 'Disconnected' | 'Initiated' | string (ReadOnly): The status of the virtual network peering.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the virtual network peering resource.
* **remoteAddressSpace**: [AddressSpace](#addressspace): The reference to the remote virtual network address space.
* **remoteVirtualNetwork**: [VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetwork](#virtualnetworkpeeringpropertiesformatremotevirtualnetwork) (Required): The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
* **useRemoteGateways**: bool: If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.

## VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetwork
### Properties
* **id**: string: The Id of the databricks virtual network.

## VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetwork
### Properties
* **id**: string: The Id of the remote virtual network.

## WorkspaceCustomBooleanParameter
### Properties
* **type**: 'Bool' | 'Object' | 'String' | string (ReadOnly): The type of variable that this is
* **value**: bool (Required): The value which should be used for this field.

## WorkspaceCustomObjectParameter
### Properties
* **type**: 'Bool' | 'Object' | 'String' | string (ReadOnly): The type of variable that this is
* **value**: any (Required): The value which should be used for this field.

## WorkspaceCustomParameters
### Properties
* **amlWorkspaceId**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The ID of a Azure Machine Learning workspace to link with Databricks workspace
* **customPrivateSubnetName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The name of the Private Subnet within the Virtual Network
* **customPublicSubnetName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The name of a Public Subnet within the Virtual Network
* **customVirtualNetworkId**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The ID of a Virtual Network where this Databricks Cluster should be created
* **enableNoPublicIp**: [WorkspaceCustomBooleanParameter](#workspacecustombooleanparameter): Should the Public IP be Disabled?
* **encryption**: [WorkspaceEncryptionParameter](#workspaceencryptionparameter): Contains the encryption details for Customer-Managed Key (CMK) enabled workspace.
* **loadBalancerBackendPoolName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): Name of the outbound Load Balancer Backend Pool for Secure Cluster Connectivity (No Public IP).
* **loadBalancerId**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): Resource URI of Outbound Load balancer for Secure Cluster Connectivity (No Public IP) workspace.
* **natGatewayName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): Name of the NAT gateway for Secure Cluster Connectivity (No Public IP) workspace subnets.
* **prepareEncryption**: [WorkspaceCustomBooleanParameter](#workspacecustombooleanparameter): Prepare the workspace for encryption. Enables the Managed Identity for managed storage account.
* **publicIpName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): Name of the Public IP for No Public IP workspace with managed vNet.
* **requireInfrastructureEncryption**: [WorkspaceCustomBooleanParameter](#workspacecustombooleanparameter): A boolean indicating whether or not the DBFS root file system will be enabled with secondary layer of encryption with platform managed keys for data at rest.
* **resourceTags**: [WorkspaceCustomObjectParameter](#workspacecustomobjectparameter) (ReadOnly): Tags applied to resources under Managed resource group. These can be updated by updating tags at workspace level.
* **storageAccountName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): Default DBFS storage account name.
* **storageAccountSkuName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): Storage account SKU name, ex: Standard_GRS, Standard_LRS. Refer https://aka.ms/storageskus for valid inputs.
* **vnetAddressPrefix**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): Address prefix for Managed virtual network. Default value for this input is 10.139.

## WorkspaceCustomStringParameter
### Properties
* **type**: 'Bool' | 'Object' | 'String' | string (ReadOnly): The type of variable that this is
* **value**: string (Required): The value which should be used for this field.

## WorkspaceEncryptionParameter
### Properties
* **type**: 'Bool' | 'Object' | 'String' | string (ReadOnly): The type of variable that this is
* **value**: [Encryption](#encryption): The value which should be used for this field.

## WorkspaceProperties
### Properties
* **authorizations**: [WorkspaceProviderAuthorization](#workspaceproviderauthorization)[]: The workspace provider authorizations.
* **createdBy**: [CreatedBy](#createdby): Indicates the Object ID, PUID and Application ID of entity that created the workspace.
* **createdDateTime**: string (ReadOnly): Specifies the date and time when the workspace is created.
* **encryption**: [WorkspacePropertiesEncryption](#workspacepropertiesencryption): Encryption properties for databricks workspace
* **managedResourceGroupId**: string (Required): The managed resource group Id.
* **parameters**: [WorkspaceCustomParameters](#workspacecustomparameters): The workspace's custom parameters.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Private endpoint connections created on the workspace
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): The workspace provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: The network access type for accessing workspace. Set value to disabled to access workspace only via private link.
* **requiredNsgRules**: 'AllRules' | 'NoAzureDatabricksRules' | 'NoAzureServiceRules' | string: Gets or sets a value indicating whether data plane (clusters) to control plane communication happen over private endpoint. Supported values are 'AllRules' and 'NoAzureDatabricksRules'. 'NoAzureServiceRules' value is for internal use only.
* **storageAccountIdentity**: [ManagedIdentityConfiguration](#managedidentityconfiguration): The details of Managed Identity of Storage Account
* **uiDefinitionUri**: string: The blob URI where the UI definition file is located.
* **updatedBy**: [CreatedBy](#createdby): Indicates the Object ID, PUID and Application ID of entity that last updated the workspace.
* **workspaceId**: string (ReadOnly): The unique identifier of the databricks workspace in databricks control plane.
* **workspaceUrl**: string (ReadOnly): The workspace URL which is of the format 'adb-{workspaceId}.{random}.azuredatabricks.net'

## WorkspacePropertiesEncryption
### Properties
* **entities**: [EncryptionEntitiesDefinition](#encryptionentitiesdefinition) (Required): Encryption entities definition for the workspace.

## WorkspaceProviderAuthorization
### Properties
* **principalId**: string (Required): The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the workspace resources.
* **roleDefinitionId**: string (Required): The provider's role definition identifier. This role will define all the permissions that the provider must have on the workspace's container resource group. This role definition cannot have permission to delete the resource group.

