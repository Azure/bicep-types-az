# Microsoft.Chaos @ 2024-03-22-preview

## Resource Microsoft.Chaos/experiments@2024-03-22-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ExperimentIdentity](#experimentidentity): The identity of the experiment resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentProperties](#experimentproperties) (Required): The properties of the experiment resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Chaos/experiments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/targetTypes@2024-03-22-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the Target Type resource.
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetTypeProperties](#targettypeproperties) (ReadOnly): The properties of the target type resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/locations/targetTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/locations/targetTypes/capabilityTypes@2024-03-22-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the Capability Type resource.
* **name**: string {pattern: "^[a-zA-Z0-9\-\.]+-\d\.\d$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityTypeProperties](#capabilitytypeproperties) (ReadOnly): The properties of the capability type resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/locations/targetTypes/capabilityTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/privateAccesses@2024-03-22-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateAccessProperties](#privateaccessproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Chaos/privateAccesses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/privateAccesses/privateEndpointConnections@2024-03-22-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>%&:?#/\\]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/privateAccesses/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/targets@2024-03-22-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2024-03-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the target resource.
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetProperties](#targetproperties) (Required): The properties of the target resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/targets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Chaos/targets/capabilities@2024-03-22-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2024-03-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\-\.]+-\d\.\d$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityProperties](#capabilityproperties) (ReadOnly): The properties of a capability resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Chaos/targets/capabilities' (ReadOnly, DeployTimeConstant): The resource type

## Action
* **Discriminator**: type

### Base Properties
* **name**: string {maxLength: 2048} (Required): String that represents a Capability URN.

### ContinuousAction
#### Properties
* **duration**: string (Required): ISO8601 formatted string that represents a duration.
* **parameters**: [KeyValuePair](#keyvaluepair)[] (Required): List of key value pairs.
* **selectorId**: string {minLength: 1} (Required): String that represents a selector.
* **type**: 'continuous' (Required): Enum that discriminates between action models.

### DelayAction
#### Properties
* **duration**: string (Required): ISO8601 formatted string that represents a duration.
* **type**: 'delay' (Required): Enum that discriminates between action models.

### DiscreteAction
#### Properties
* **parameters**: [KeyValuePair](#keyvaluepair)[] (Required): List of key value pairs.
* **selectorId**: string {minLength: 1} (Required): String that represents a selector.
* **type**: 'discrete' (Required): Enum that discriminates between action models.


## Branch
### Properties
* **actions**: [Action](#action)[] {minLength: 1, maxLength: 9} (Required): List of actions.
* **name**: string {minLength: 1} (Required): String of the branch name.

## CapabilityProperties
### Properties
* **description**: string (ReadOnly): Localized string of the description.
* **parametersSchema**: string {maxLength: 2048} (ReadOnly): URL to retrieve JSON schema of the Capability parameters.
* **publisher**: string (ReadOnly): String of the Publisher that this Capability extends.
* **targetType**: string (ReadOnly): String of the Target Type that this Capability extends.
* **urn**: string {maxLength: 2048} (ReadOnly): String of the URN for this Capability Type.

## CapabilityTypeProperties
### Properties
* **azureRbacActions**: string[]: Control plane actions necessary to execute capability type.
* **azureRbacDataActions**: string[]: Data plane actions necessary to execute capability type.
* **description**: string (ReadOnly): Localized string of the description.
* **displayName**: string (ReadOnly): Localized string of the display name.
* **kind**: string (ReadOnly): String of the kind of this Capability Type.
* **parametersSchema**: string {maxLength: 2048} (ReadOnly): URL to retrieve JSON schema of the Capability Type parameters.
* **publisher**: string (ReadOnly): String of the Publisher that this Capability Type extends.
* **runtimeProperties**: [CapabilityTypePropertiesRuntimeProperties](#capabilitytypepropertiesruntimeproperties): Runtime properties of this Capability Type.
* **targetType**: string (ReadOnly): String of the Target Type that this Capability Type extends.
* **urn**: string {maxLength: 2048} (ReadOnly): String of the URN for this Capability Type.

## CapabilityTypePropertiesRuntimeProperties
### Properties
* **kind**: string (ReadOnly): String of the kind of the resource's action type (continuous or discrete).

## CustomerDataStorageProperties
### Properties
* **blobContainerName**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9]([a-z0-9]|(-(?!-))){1,61}[a-z0-9]$"}: Name of the Azure Blob Storage container to use or create.
* **storageAccountResourceId**: string: ARM Resource ID of the Storage account to use for Customer Data storage.

## ExperimentIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ExperimentProperties
### Properties
* **customerDataStorage**: [CustomerDataStorageProperties](#customerdatastorageproperties): Optional customer-managed Storage account where Experiment schema will be stored.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Most recent provisioning state for the given experiment resource.
* **selectors**: [Selector](#selector)[] {minLength: 1} (Required): List of selectors.
* **steps**: [Step](#step)[] {minLength: 1, maxLength: 4} (Required): List of steps.

## Filter
* **Discriminator**: type

### Base Properties

### SimpleFilter
#### Properties
* **parameters**: [SimpleFilterParameters](#simplefilterparameters): Model that represents the Simple filter parameters.
* **type**: 'Simple' (Required): Enum that discriminates between filter types. Currently only `Simple` type is supported.


## KeyValuePair
### Properties
* **key**: string {minLength: 1} (Required): The name of the setting for the action.
* **value**: string {minLength: 1} (Required): The value of the setting for the action.

## PrivateAccessProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): A readonly collection of private endpoint connection. Currently only one endpoint connection is supported.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Most recent provisioning state for the given privateAccess resource.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Public Network Access Control for PrivateAccess resource.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
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
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string: The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## Selector
* **Discriminator**: type

### Base Properties
* **filter**: [Filter](#filter): Model that represents available filter types that can be applied to a targets list.
* **id**: string {minLength: 1} (Required): String of the selector ID.

### ListSelector
#### Properties
* **targets**: [TargetReference](#targetreference)[] {minLength: 1, maxLength: 50} (Required): List of Target references.
* **type**: 'List' (Required): Enum of the selector type.

### QuerySelector
#### Properties
* **queryString**: string (Required): Azure Resource Graph (ARG) Query Language query for target resources.
* **subscriptionIds**: string[] {minLength: 1} (Required): Subscription id list to scope resource query.
* **type**: 'Query' (Required): Enum of the selector type.


## SimpleFilterParameters
### Properties
* **zones**: string[]: List of Azure availability zones to filter targets by.

## Step
### Properties
* **branches**: [Branch](#branch)[] {minLength: 1, maxLength: 9} (Required): List of branches.
* **name**: string {minLength: 1} (Required): String of the step name.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TargetProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## TargetReference
### Properties
* **id**: string {pattern: "^\/[Ss][Uu][Bb][Ss][Cc][Rr][Ii][Pp][Tt][Ii][Oo][Nn][Ss]\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\/[Rr][Ee][Ss][Oo][Uu][Rr][Cc][Ee][Gg][Rr][Oo][Uu][Pp][Ss]\/[a-zA-Z0-9_\-\.\(\)]*[a-zA-Z0-9_\-\(\)]\/[Pp][Rr][Oo][Vv][Ii][Dd][Ee][Rr][Ss]\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+\/[a-zA-Z0-9_\-\.]+\/[a-zA-Z0-9_\-\.]+\/[Pp][Rr][Oo][Vv][Ii][Dd][Ee][Rr][Ss]\/[Mm][Ii][Cc][Rr][Oo][Ss][Oo][Ff][Tt]\.[Cc][Hh][Aa][Oo][Ss]\/[Tt][Aa][Rr][Gg][Ee][Tt][Ss]\/[a-zA-Z0-9_\-\.]+$"} (Required): String of the resource ID of a Target resource.
* **type**: 'ChaosTarget' | string (Required): Enum of the Target reference type.

## TargetTypeProperties
### Properties
* **description**: string (ReadOnly): Localized string of the description.
* **displayName**: string (ReadOnly): Localized string of the display name.
* **propertiesSchema**: string {maxLength: 2048} (ReadOnly): URL to retrieve JSON schema of the Target Type properties.
* **resourceTypes**: string[] (ReadOnly): List of resource types this Target Type can extend.

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

