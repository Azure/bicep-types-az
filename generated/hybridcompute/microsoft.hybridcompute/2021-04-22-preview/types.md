# Microsoft.HybridCompute @ 2021-04-22-preview

## Resource Microsoft.HybridCompute/machines@2021-04-22-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineProperties](#machineproperties): Hybrid Compute Machine properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridCompute/machines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/machines/extensions@2021-04-22-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineExtensionProperties](#machineextensionproperties): Describes Machine Extension Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridCompute/machines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/privateLinkScopes@2021-04-22-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridComputePrivateLinkScopeProperties](#hybridcomputeprivatelinkscopeproperties): Properties that define a Azure Arc PrivateLinkScope resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [PrivateLinkScopesResourceTags](#privatelinkscopesresourcetags): Resource tags
* **type**: 'Microsoft.HybridCompute/privateLinkScopes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections@2021-04-22-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/privateLinkScopes/privateLinkResources@2021-04-22-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.HybridCompute/privateLinkScopes/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## DetectedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## HybridComputePrivateLinkScopeProperties
### Properties
* **privateLinkScopeId**: string (ReadOnly): The Guid id of the private link scope.
* **provisioningState**: string (ReadOnly): Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## LocationData
### Properties
* **city**: string: The city or locality where the resource is located.
* **countryOrRegion**: string: The country or region where the resource is located
* **district**: string: The district, state, or province where the resource is located.
* **name**: string {maxLength: 256} (Required): A canonical name for the geographic or physical location.

## MachineExtensionInstanceView
### Properties
* **name**: string: The machine extension name.
* **status**: [MachineExtensionInstanceViewStatus](#machineextensioninstanceviewstatus): Instance view status.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## MachineExtensionInstanceViewStatus
### Properties
* **code**: string: The status code.
* **displayStatus**: string: The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning' | string: The level code.
* **message**: string: The detailed status message, including for alerts and error messages.
* **time**: string: The time of the status.

## MachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **instanceView**: [MachineExtensionInstanceView](#machineextensioninstanceview): The machine extension instance view.
* **protectedSettings**: any: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## MachineProperties
### Properties
* **adFqdn**: string (ReadOnly): Specifies the AD fully qualified display name.
* **agentVersion**: string (ReadOnly): The hybrid machine agent full version.
* **clientPublicKey**: string: Public Key that the client provides to be used during initial resource onboarding
* **detectedProperties**: [DetectedProperties](#detectedproperties) (ReadOnly): Detected properties from the machine.
* **displayName**: string (ReadOnly): Specifies the hybrid machine display name.
* **dnsFqdn**: string (ReadOnly): Specifies the DNS fully qualified display name.
* **domainName**: string (ReadOnly): Specifies the Windows domain name.
* **errorDetails**: [ErrorDetail](#errordetail)[] (ReadOnly): Details about the error state.
* **extensions**: [MachineExtensionInstanceView](#machineextensioninstanceview)[]: Machine Extensions information
* **lastStatusChange**: string (ReadOnly): The time of the last status change.
* **locationData**: [LocationData](#locationdata): Metadata pertaining to the geographic location of the resource.
* **machineFqdn**: string (ReadOnly): Specifies the hybrid machine FQDN.
* **osName**: string (ReadOnly): The Operating System running on the hybrid machine.
* **osProfile**: [OSProfile](#osprofile) (ReadOnly): Specifies the operating system settings for the hybrid machine.
* **osSku**: string (ReadOnly): Specifies the Operating System product SKU.
* **osVersion**: string (ReadOnly): The version of Operating System running on the hybrid machine.
* **parentClusterResourceId**: string: The resource id of the parent cluster (Azure HCI) this machine is assigned to, if any.
* **privateLinkScopeResourceId**: string: The resource id of the private link scope this machine is assigned to, if any.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **status**: 'Connected' | 'Disconnected' | 'Error' | string (ReadOnly): The status of the hybrid machine agent.
* **vmId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Specifies the hybrid machine unique ID.
* **vmUuid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): Specifies the Arc Machine's unique SMBIOS ID

## OSProfile
### Properties
* **computerName**: string (ReadOnly): Specifies the host OS name of the hybrid machine.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty): Connection state of the private endpoint connection.
* **provisioningState**: string (ReadOnly): State of the private endpoint connection.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[] (ReadOnly): Required DNS zone names of the the private link resource.

## PrivateLinkScopesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): The actions required for private link service connection.
* **description**: string (Required): The private link service connection description.
* **status**: string (Required): The private link service connection status.

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

