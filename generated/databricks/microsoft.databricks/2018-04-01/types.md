# Microsoft.Databricks @ 2018-04-01

## Resource Microsoft.Databricks/workspaces@2018-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties) (Required): The workspace properties.
* **sku**: [Sku](#sku): SKU for the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Databricks/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Databricks/workspaces/virtualNetworkPeerings@2018-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat) (Required): Properties of the virtual network peering.
* **type**: 'Microsoft.Databricks/workspaces/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant): The resource type

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

## ManagedIdentityConfiguration
### Properties
* **principalId**: string (ReadOnly): The objectId of the Managed Identity that is linked to the Managed Storage account.
* **tenantId**: string (ReadOnly): The tenant Id where the Managed Identity is created.
* **type**: string (ReadOnly): The type of Identity created. It can be either SystemAssigned or UserAssigned.

## Sku
### Properties
* **name**: string (Required): The SKU name.
* **tier**: string: The SKU tier.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkPeeringPropertiesFormat
### Properties
* **allowForwardedTraffic**: bool: Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
* **allowGatewayTransit**: bool: If gateway links can be used in remote virtual networking to link to this virtual network.
* **allowVirtualNetworkAccess**: bool: Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
* **databricksAddressSpace**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
* **databricksVirtualNetwork**: [VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetwork](#virtualnetworkpeeringpropertiesformatdatabricksvirtualnetwork): The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
* **peeringState**: 'Connected' | 'Disconnected' | 'Initiated' | string (ReadOnly): The status of the virtual network peering.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state.
* **remoteAddressSpace**: [AddressSpace](#addressspace): AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
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
* **type**: 'Bool' | 'Object' | 'String' | string (ReadOnly): Provisioning status of the workspace.
* **value**: bool (Required): The value which should be used for this field.

## WorkspaceCustomObjectParameter
### Properties
* **type**: 'Bool' | 'Object' | 'String' | string (ReadOnly): Provisioning status of the workspace.
* **value**: any (Required): Any object

## WorkspaceCustomParameters
### Properties
* **amlWorkspaceId**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The Value.
* **customPrivateSubnetName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The Value.
* **customPublicSubnetName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The Value.
* **customVirtualNetworkId**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The Value.
* **enableNoPublicIp**: [WorkspaceCustomBooleanParameter](#workspacecustombooleanparameter): The value which should be used for this field.
* **encryption**: [WorkspaceEncryptionParameter](#workspaceencryptionparameter): The object that contains details of encryption used on the workspace.
* **loadBalancerBackendPoolName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The Value.
* **loadBalancerId**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The Value.
* **natGatewayName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The Value.
* **prepareEncryption**: [WorkspaceCustomBooleanParameter](#workspacecustombooleanparameter): The value which should be used for this field.
* **publicIpName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The Value.
* **requireInfrastructureEncryption**: [WorkspaceCustomBooleanParameter](#workspacecustombooleanparameter): The value which should be used for this field.
* **resourceTags**: [WorkspaceCustomObjectParameter](#workspacecustomobjectparameter) (ReadOnly): The value which should be used for this field.
* **storageAccountName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The Value.
* **storageAccountSkuName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The Value.
* **vnetAddressPrefix**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter): The Value.

## WorkspaceCustomStringParameter
### Properties
* **type**: 'Bool' | 'Object' | 'String' | string (ReadOnly): Provisioning status of the workspace.
* **value**: string (Required): The value which should be used for this field.

## WorkspaceEncryptionParameter
### Properties
* **type**: 'Bool' | 'Object' | 'String' | string (ReadOnly): Provisioning status of the workspace.
* **value**: [Encryption](#encryption): The object that contains details of encryption used on the workspace.

## WorkspaceProperties
### Properties
* **authorizations**: [WorkspaceProviderAuthorization](#workspaceproviderauthorization)[]: The workspace provider authorizations.
* **createdBy**: [CreatedBy](#createdby): Provides details of the entity that created/updated the workspace.
* **createdDateTime**: string (ReadOnly): The date and time stamp when the workspace was created.
* **managedResourceGroupId**: string (Required): The managed resource group Id.
* **parameters**: [WorkspaceCustomParameters](#workspacecustomparameters): Custom Parameters used for Cluster Creation.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status of the workspace.
* **storageAccountIdentity**: [ManagedIdentityConfiguration](#managedidentityconfiguration): The Managed Identity details for storage account.
* **uiDefinitionUri**: string: The blob URI where the UI definition file is located.
* **updatedBy**: [CreatedBy](#createdby): Provides details of the entity that created/updated the workspace.
* **workspaceId**: string (ReadOnly): The unique identifier of the databricks workspace in databricks control plane.
* **workspaceUrl**: string (ReadOnly): The workspace URL which is of the format 'adb-{workspaceId}.{random}.azuredatabricks.net'

## WorkspaceProviderAuthorization
### Properties
* **principalId**: string (Required): The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the workspace resources.
* **roleDefinitionId**: string (Required): The provider's role definition identifier. This role will define all the permissions that the provider must have on the workspace's container resource group. This role definition cannot have permission to delete the resource group.

