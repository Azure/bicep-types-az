# Microsoft.Databricks @ 2018-04-01

## Resource Microsoft.Databricks/workspaces@2018-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceProperties](#workspaceproperties) (Required)
* **sku**: [Sku](#sku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Databricks/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Databricks/workspaces/virtualNetworkPeerings@2018-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat) (Required)
* **type**: 'Microsoft.Databricks/workspaces/virtualNetworkPeerings' (ReadOnly, DeployTimeConstant)

## WorkspaceProperties
### Properties
* **authorizations**: [WorkspaceProviderAuthorization](#workspaceproviderauthorization)[]
* **createdBy**: [CreatedBy](#createdby)
* **createdDateTime**: string (ReadOnly)
* **managedResourceGroupId**: string (Required)
* **parameters**: [WorkspaceCustomParameters](#workspacecustomparameters)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **storageAccountIdentity**: [ManagedIdentityConfiguration](#managedidentityconfiguration)
* **uiDefinitionUri**: string
* **updatedBy**: [CreatedBy](#createdby)
* **workspaceId**: string (ReadOnly)
* **workspaceUrl**: string (ReadOnly)

## WorkspaceProviderAuthorization
### Properties
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)

## CreatedBy
### Properties
* **applicationId**: string (ReadOnly)
* **oid**: string (ReadOnly)
* **puid**: string (ReadOnly)

## WorkspaceCustomParameters
### Properties
* **amlWorkspaceId**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
* **customPrivateSubnetName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
* **customPublicSubnetName**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
* **customVirtualNetworkId**: [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
* **enableNoPublicIp**: [WorkspaceCustomBooleanParameter](#workspacecustombooleanparameter)
* **encryption**: [WorkspaceEncryptionParameter](#workspaceencryptionparameter)
* **prepareEncryption**: [WorkspaceCustomBooleanParameter](#workspacecustombooleanparameter)
* **requireInfrastructureEncryption**: [WorkspaceCustomBooleanParameter](#workspacecustombooleanparameter)

## WorkspaceCustomStringParameter
### Properties
* **type**: 'Bool' | 'Object' | 'String' (ReadOnly)
* **value**: string (Required)

## WorkspaceCustomBooleanParameter
### Properties
* **type**: 'Bool' | 'Object' | 'String' (ReadOnly)
* **value**: bool (Required)

## WorkspaceEncryptionParameter
### Properties
* **type**: 'Bool' | 'Object' | 'String' (ReadOnly)
* **value**: [Encryption](#encryption)

## Encryption
### Properties
* **KeyName**: string
* **keySource**: 'Default' | 'Microsoft.Keyvault'
* **keyvaulturi**: string
* **keyversion**: string

## ManagedIdentityConfiguration
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string (ReadOnly)

## Sku
### Properties
* **name**: string (Required)
* **tier**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkPeeringPropertiesFormat
### Properties
* **allowForwardedTraffic**: bool
* **allowGatewayTransit**: bool
* **allowVirtualNetworkAccess**: bool
* **databricksAddressSpace**: [AddressSpace](#addressspace)
* **databricksVirtualNetwork**: [VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetwork](#virtualnetworkpeeringpropertiesformatdatabricksvirtualnetwork)
* **peeringState**: 'Connected' | 'Disconnected' | 'Initiated' (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **remoteAddressSpace**: [AddressSpace](#addressspace)
* **remoteVirtualNetwork**: [VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetwork](#virtualnetworkpeeringpropertiesformatremotevirtualnetwork) (Required)
* **useRemoteGateways**: bool

## AddressSpace
### Properties
* **addressPrefixes**: string[]

## VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetwork
### Properties
* **id**: string

## VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetwork
### Properties
* **id**: string

