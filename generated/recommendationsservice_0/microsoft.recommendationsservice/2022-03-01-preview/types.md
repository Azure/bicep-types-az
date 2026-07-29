# Microsoft.RecommendationsService @ 2022-03-01-preview

## Resource Microsoft.RecommendationsService/accounts@2022-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity used for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountResourceProperties](#accountresourceproperties): Account resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.RecommendationsService/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecommendationsService/accounts/modeling@2022-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ModelingResourceProperties](#modelingresourceproperties): Modeling resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.RecommendationsService/accounts/modeling' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecommendationsService/accounts/serviceEndpoints@2022-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceEndpointResourceProperties](#serviceendpointresourceproperties): ServiceEndpoint resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.RecommendationsService/accounts/serviceEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Function status (Microsoft.RecommendationsService/accounts@2022-03-01-preview)
* **Resource**: Microsoft.RecommendationsService/accounts
* **ApiVersion**: 2022-03-01-preview
* **Output**: [AccountStatus](#accountstatus)

## AccountResourceProperties
### Properties
* **configuration**: 'Capacity' | 'Free' | string: Account configuration. This can only be set at RecommendationsService Account creation.
* **cors**: [CorsRule](#corsrule)[]: The list of CORS details.
* **endpointAuthentications**: [EndpointAuthentication](#endpointauthentication)[]: The list of service endpoints authentication details.
* **provisioningState**: string (ReadOnly): The resource provisioning state.
* **reportsConnectionString**: string: Connection string to write Accounts reports to.

## AccountStatus
### Properties
* **scopesStatuses**: [ScopeStatuses](#scopestatuses)[]: The list of scopes statuses.

## CorsRule
### Properties
* **allowedHeaders**: string[]: The request headers that the origin domain may specify on the CORS request.
* **allowedMethods**: string[]: The methods (HTTP request verbs) that the origin domain may use for a CORS request.
* **allowedOrigins**: string[] {minLength: 1} (Required): The origin domains that are permitted to make a request against the service via CORS.
* **exposedHeaders**: string[]: The response headers to expose to CORS clients.
* **maxAgeInSeconds**: int {minValue: 0}: The number of seconds that the client/browser should cache a preflight response.

## EndpointAuthentication
### Properties
* **aadTenantID**: string: AAD tenant ID.
* **principalID**: string: AAD principal ID.
* **principalType**: 'Application' | 'User' | string: AAD principal type.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ModelingInputData
### Properties
* **connectionString**: string: Connection string to raw input data.

## ModelingResourceProperties
### Properties
* **features**: 'Basic' | 'Premium' | 'Standard' | string: Modeling features controls the set of supported scenarios\models being computed. This can only be set at Modeling creation.
* **frequency**: 'High' | 'Low' | 'Medium' | string: Modeling frequency controls the modeling compute frequency.
* **inputData**: [ModelingInputData](#modelinginputdata): The configuration to raw CDM data to be used as Modeling resource input.
* **provisioningState**: string (ReadOnly): The resource provisioning state.
* **size**: 'Large' | 'Medium' | 'Small' | string: Modeling size controls the maximum supported input data size.

## ScopeStatuses
### Properties
* **scope**: string: The scope that the statuses refers to.
* **statuses**: [StageStatus](#stagestatus)[]: Scope stage statuses.

## ServiceEndpointResourceProperties
### Properties
* **pairedLocation**: string (ReadOnly): The paired location that will be used by this ServiceEndpoint.
* **preAllocatedCapacity**: int {minValue: 0}: ServiceEndpoint pre-allocated capacity controls the maximum requests-per-second allowed for that endpoint. Only applicable when Account configuration is Capacity.
* **provisioningState**: string (ReadOnly): The resource provisioning state.
* **url**: string (ReadOnly): The URL where the ServiceEndpoint API is accessible at.

## StageStatus
### Properties
* **stage**: string: The stage name.
* **status**: string: The status of the stage.
* **time**: string: The time of the status.

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

