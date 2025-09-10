# Microsoft.ApiCenter @ 2024-03-01

## Resource Microsoft.ApiCenter/services@2024-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9-]{3,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceProperties](#serviceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ApiCenter/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiCenter/services/metadataSchemas@2024-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9-]{3,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MetadataSchemaProperties](#metadataschemaproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiCenter/services/metadataSchemas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiCenter/services/workspaces@2024-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9-]{3,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiCenter/services/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiCenter/services/workspaces/apis@2024-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9-]{3,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ApiProperties](#apiproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiCenter/services/workspaces/apis' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiCenter/services/workspaces/apis/deployments@2024-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9-]{3,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiCenter/services/workspaces/apis/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiCenter/services/workspaces/apis/versions@2024-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9-]{3,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ApiVersionProperties](#apiversionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiCenter/services/workspaces/apis/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiCenter/services/workspaces/apis/versions/definitions@2024-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9-]{3,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ApiDefinitionProperties](#apidefinitionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiCenter/services/workspaces/apis/versions/definitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiCenter/services/workspaces/environments@2024-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9-]{3,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentProperties](#environmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiCenter/services/workspaces/environments' (ReadOnly, DeployTimeConstant): The resource type

## ApiDefinitionProperties
### Properties
* **description**: string: API definition description.
* **specification**: [ApiDefinitionPropertiesSpecification](#apidefinitionpropertiesspecification) (ReadOnly): API specification details.
* **title**: string {minLength: 1, maxLength: 50} (Required): API definition title.

## ApiDefinitionPropertiesSpecification
### Properties
* **name**: string: Specification name.
* **version**: string: Specification version.

## ApiProperties
### Properties
* **contacts**: [Contact](#contact)[]: The set of contacts
* **customProperties**: any: The custom metadata defined for API catalog entities.
* **description**: string {maxLength: 1000}: Description of the API.
* **externalDocumentation**: [ExternalDocumentation](#externaldocumentation)[] {maxLength: 20}: The set of external documentation
* **kind**: 'graphql' | 'grpc' | 'rest' | 'soap' | 'webhook' | 'websocket' | string (Required): Kind of API. For example, REST or GraphQL.
* **license**: [License](#license): The license information for the API.
* **lifecycleStage**: 'deprecated' | 'design' | 'development' | 'preview' | 'production' | 'retired' | 'testing' | string (ReadOnly): Current lifecycle stage of the API.
* **summary**: string {maxLength: 200}: Short description of the API.
* **termsOfService**: [TermsOfService](#termsofservice): Terms of service for the API.
* **title**: string {minLength: 1, maxLength: 50} (Required): API title.

## ApiVersionProperties
### Properties
* **lifecycleStage**: 'deprecated' | 'design' | 'development' | 'preview' | 'production' | 'retired' | 'testing' | string (Required): Current lifecycle stage of the API.
* **title**: string {minLength: 1, maxLength: 50} (Required): API version title.

## Contact
### Properties
* **email**: string {maxLength: 100}: Email address of the contact.
* **name**: string {maxLength: 100}: Name of the contact.
* **url**: string {maxLength: 200}: URL for the contact.

## DeploymentProperties
### Properties
* **customProperties**: any: The custom metadata defined for API catalog entities.
* **definitionId**: string: API center-scoped definition resource ID.
* **description**: string {maxLength: 500}: Description of the deployment.
* **environmentId**: string: API center-scoped environment resource ID.
* **server**: [DeploymentServer](#deploymentserver): The deployment server
* **state**: 'active' | 'inactive' | string: State of API deployment.
* **title**: string {minLength: 1, maxLength: 50}: API deployment title

## DeploymentServer
### Properties
* **runtimeUri**: (string {maxLength: 200})[]: Base runtime URLs for this deployment.

## EnvironmentProperties
### Properties
* **customProperties**: any: The custom metadata defined for API catalog entities.
* **description**: string: The environment description.
* **kind**: 'development' | 'production' | 'staging' | 'testing' | string (Required): Environment kind.
* **onboarding**: [Onboarding](#onboarding): Environment onboarding information
* **server**: [EnvironmentServer](#environmentserver): Server information of the environment.
* **title**: string {minLength: 1, maxLength: 50} (Required): Environment title.

## EnvironmentServer
### Properties
* **managementPortalUri**: string[] {maxLength: 1}: The location of the management portal
* **type**: 'AWS API Gateway' | 'Apigee API Management' | 'Azure API Management' | 'Azure compute service' | 'Kong API Gateway' | 'Kubernetes' | 'MuleSoft API Management' | string: Type of the server that represents the environment.

## ExternalDocumentation
### Properties
* **description**: string {maxLength: 500}: Description of the documentation.
* **title**: string {maxLength: 50}: Title of the documentation.
* **url**: string {maxLength: 200} (Required): URL pointing to the documentation.

## License
### Properties
* **identifier**: string {maxLength: 50}: SPDX license information for the API. The identifier field is mutually
exclusive of the URL field.
* **name**: string {maxLength: 100}: Name of the license.
* **url**: string {maxLength: 200}: URL pointing to the license details. The URL field is mutually exclusive of the
identifier field.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MetadataAssignment
### Properties
* **deprecated**: bool: Deprecated assignment
* **entity**: 'api' | 'deployment' | 'environment' | string: The entities this metadata schema component gets applied to.
* **required**: bool: Required assignment

## MetadataSchemaProperties
### Properties
* **assignedTo**: [MetadataAssignment](#metadataassignment)[]: The assignees
* **schema**: string (Required): The schema defining the type.

## Onboarding
### Properties
* **developerPortalUri**: string[] {maxLength: 1}: The location of the development portal
* **instructions**: string: Onboarding guide.

## ServiceProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the service.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TermsOfService
### Properties
* **url**: string {maxLength: 200} (Required): URL pointing to the terms of service.

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

## WorkspaceProperties
### Properties
* **description**: string: Workspace description.
* **title**: string {minLength: 1, maxLength: 50} (Required): Workspace title.

