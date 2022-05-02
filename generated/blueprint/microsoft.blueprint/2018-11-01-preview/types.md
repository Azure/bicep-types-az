# Microsoft.Blueprint @ 2018-11-01-preview

## Resource Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity) (Required): Managed identity generic object.
* **location**: string (Required): The location of this blueprint assignment.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssignmentProperties](#assignmentproperties) (Required): Detailed properties for a blueprint assignment.
* **type**: 'Microsoft.Blueprint/blueprintAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Blueprint/blueprintAssignments/assignmentOperations@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssignmentOperationProperties](#assignmentoperationproperties) (ReadOnly): Properties of AssignmentOperation.
* **type**: 'Microsoft.Blueprint/blueprintAssignments/assignmentOperations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Blueprint/blueprints@2018-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BlueprintProperties](#blueprintproperties) (Required): Schema for blueprint definition properties.
* **type**: 'Microsoft.Blueprint/blueprints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview
* **Valid Scope(s)**: Unknown
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Blueprint/blueprints/artifacts' (ReadOnly, DeployTimeConstant): The resource type
### PolicyAssignmentArtifact
#### Properties
* **kind**: 'policyAssignment' (Required): Specifies the kind of blueprint artifact.
* **properties**: [PolicyAssignmentArtifactProperties](#policyassignmentartifactproperties) (Required): Properties of a Policy assignment blueprint artifact.

### RoleAssignmentArtifact
#### Properties
* **kind**: 'roleAssignment' (Required): Specifies the kind of blueprint artifact.
* **properties**: [RoleAssignmentArtifactProperties](#roleassignmentartifactproperties) (Required): Properties of a Role assignment blueprint artifact.

### TemplateArtifact
#### Properties
* **kind**: 'template' (Required): Specifies the kind of blueprint artifact.
* **properties**: [TemplateArtifactProperties](#templateartifactproperties) (Required): Properties of a Resource Manager template blueprint artifact.


## Resource Microsoft.Blueprint/blueprints/versions@2018-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublishedBlueprintProperties](#publishedblueprintproperties) (Required): Schema for published blueprint definition properties.
* **type**: 'Microsoft.Blueprint/blueprints/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Blueprint/blueprints/versions/artifacts@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Blueprint/blueprints/versions/artifacts' (ReadOnly, DeployTimeConstant): The resource type
### PolicyAssignmentArtifact
#### Properties
* **kind**: 'policyAssignment' (Required): Specifies the kind of blueprint artifact.
* **properties**: [PolicyAssignmentArtifactProperties](#policyassignmentartifactproperties) (ReadOnly): Properties of a Policy assignment blueprint artifact.

### RoleAssignmentArtifact
#### Properties
* **kind**: 'roleAssignment' (Required): Specifies the kind of blueprint artifact.
* **properties**: [RoleAssignmentArtifactProperties](#roleassignmentartifactproperties) (ReadOnly): Properties of a Role assignment blueprint artifact.

### TemplateArtifact
#### Properties
* **kind**: 'template' (Required): Specifies the kind of blueprint artifact.
* **properties**: [TemplateArtifactProperties](#templateartifactproperties) (ReadOnly): Properties of a Resource Manager template blueprint artifact.


## ManagedServiceIdentity
### Properties
* **principalId**: string: Azure Active Directory principal ID associated with this Identity.
* **tenantId**: string: ID of the Azure Active Directory.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required): Type of the managed identity.
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string: Client App Id associated with this identity.
* **principalId**: string: Azure Active Directory principal ID associated with this Identity.

## AssignmentProperties
### Properties
* **blueprintId**: string: ID of the published version of a blueprint definition.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **locks**: [AssignmentLockSettings](#assignmentlocksettings): Defines how resources deployed by a blueprint assignment are locked.
* **parameters**: [AssignmentPropertiesParameters](#assignmentpropertiesparameters) (Required): Blueprint assignment parameter values.
* **provisioningState**: 'canceled' | 'cancelling' | 'creating' | 'deleting' | 'deploying' | 'failed' | 'locking' | 'succeeded' | 'validating' | 'waiting' (ReadOnly): State of the blueprint assignment.
* **resourceGroups**: [AssignmentPropertiesResourceGroups](#assignmentpropertiesresourcegroups) (Required): Names and locations of resource group placeholders.
* **scope**: string: The target subscription scope of the blueprint assignment (format: '/subscriptions/{subscriptionId}'). For management group level assignments, the property is required.
* **status**: [AssignmentStatus](#assignmentstatus) (ReadOnly): The status of a blueprint assignment. This field is readonly.

## AssignmentLockSettings
### Properties
* **excludedActions**: string[]: List of management operations that are excluded from blueprint locks. Up to 200 actions are permitted. If the lock mode is set to 'AllResourcesReadOnly', then the following actions are automatically appended to 'excludedActions': '*/read', 'Microsoft.Network/virtualNetworks/subnets/join/action' and 'Microsoft.Authorization/locks/delete'. If the lock mode is set to 'AllResourcesDoNotDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will get removed.
* **excludedPrincipals**: string[]: List of AAD principals excluded from blueprint locks. Up to 5 principals are permitted.
* **mode**: 'AllResourcesDoNotDelete' | 'AllResourcesReadOnly' | 'None': Lock mode.

## AssignmentPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValue](#parametervalue)

## ParameterValue
### Properties
* **reference**: [SecretValueReference](#secretvaluereference): Reference to a Key Vault secret.
* **value**: any: Any object

## SecretValueReference
### Properties
* **keyVault**: [KeyVaultReference](#keyvaultreference) (Required): Specifies the link to a Key Vault.
* **secretName**: string (Required): Name of the secret.
* **secretVersion**: string: The version of the secret to use. If left blank, the latest version of the secret is used.

## KeyVaultReference
### Properties
* **id**: string (Required): Azure resource ID of the Key Vault.

## AssignmentPropertiesResourceGroups
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupValue](#resourcegroupvalue)

## ResourceGroupValue
### Properties
* **location**: string: Location of the resource group.
* **name**: string: Name of the resource group.

## AssignmentStatus
### Properties
* **lastModified**: string (ReadOnly): Last modified time of this blueprint definition.
* **managedResources**: string[] (ReadOnly): List of resources that were created by the blueprint assignment.
* **timeCreated**: string (ReadOnly): Creation time of this blueprint definition.

## AssignmentOperationProperties
### Properties
* **assignmentState**: string (ReadOnly): State of this blueprint assignment operation.
* **blueprintVersion**: string (ReadOnly): The published version of the blueprint definition used for the blueprint assignment operation.
* **deployments**: [AssignmentDeploymentJob](#assignmentdeploymentjob)[] (ReadOnly): List of jobs in this blueprint assignment operation.
* **timeCreated**: string (ReadOnly): Create time of this blueprint assignment operation.
* **timeFinished**: string (ReadOnly): Finish time of the overall underlying deployments.
* **timeStarted**: string (ReadOnly): Start time of the underlying deployment.

## AssignmentDeploymentJob
### Properties
* **action**: string (ReadOnly): Name of the action performed in this job.
* **history**: [AssignmentDeploymentJobResult](#assignmentdeploymentjobresult)[] (ReadOnly): Result of this deployment job for each retry.
* **jobId**: string (ReadOnly): Id of this job.
* **jobState**: string (ReadOnly): State of this job.
* **kind**: string (ReadOnly): Kind of job.
* **requestUri**: string (ReadOnly): Reference to deployment job resource id.
* **result**: [AssignmentDeploymentJobResult](#assignmentdeploymentjobresult) (ReadOnly): Result of each individual deployment in a blueprint assignment.

## AssignmentDeploymentJobResult
### Properties
* **error**: [AzureResourceManagerError](#azureresourcemanagererror) (ReadOnly): Error code and message
* **resources**: [AssignmentJobCreatedResource](#assignmentjobcreatedresource)[] (ReadOnly): Resources created as result of the deployment job.

## AzureResourceManagerError
### Properties
* **code**: string (ReadOnly): Error code.
* **message**: string (ReadOnly): Error message.

## AssignmentJobCreatedResource
### Properties
* **id**: string (ReadOnly): String Id used to locate any resource on Azure.
* **name**: string (ReadOnly): Name of this resource.
* **properties**: [AssignmentJobCreatedResourceProperties](#assignmentjobcreatedresourceproperties) (ReadOnly): Additional properties in a dictionary.
* **type**: string (ReadOnly): Type of this resource.

## AssignmentJobCreatedResourceProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BlueprintProperties
### Properties
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **layout**: any (ReadOnly): Any object
* **parameters**: [SharedBlueprintPropertiesParameters](#sharedblueprintpropertiesparameters): Parameters required by this blueprint definition.
* **resourceGroups**: [SharedBlueprintPropertiesResourceGroups](#sharedblueprintpropertiesresourcegroups): Resource group placeholders defined by this blueprint definition.
* **status**: [BlueprintStatus](#blueprintstatus) (ReadOnly): The status of the blueprint. This field is readonly.
* **targetScope**: 'managementGroup' | 'subscription': The scope where this blueprint definition can be assigned.
* **versions**: any: Any object

## SharedBlueprintPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinition](#parameterdefinition)

## ParameterDefinition
### Properties
* **allowedValues**: any[]: Array of allowed values for this parameter.
* **defaultValue**: any: Anything
* **metadata**: [ParameterDefinitionMetadata](#parameterdefinitionmetadata): User-friendly properties for this parameter.
* **type**: 'array' | 'bool' | 'int' | 'object' | 'secureObject' | 'secureString' | 'string' (Required): Allowed data types for Resource Manager template parameters.

## ParameterDefinitionMetadata
### Properties
* **description**: string: Description of this parameter/resourceGroup.
* **displayName**: string: DisplayName of this parameter/resourceGroup.
* **strongType**: string: StrongType for UI to render rich experience during blueprint assignment. Supported strong types are resourceType, principalId and location.

## SharedBlueprintPropertiesResourceGroups
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupDefinition](#resourcegroupdefinition)

## ResourceGroupDefinition
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before this resource group.
* **location**: string: Location of this resourceGroup. Leave empty if the resource group location will be specified during the blueprint assignment.
* **metadata**: [ParameterDefinitionMetadata](#parameterdefinitionmetadata): User-friendly properties for this parameter.
* **name**: string: Name of this resourceGroup. Leave empty if the resource group name will be specified during the blueprint assignment.
* **tags**: [ResourceGroupDefinitionTags](#resourcegroupdefinitiontags): Tags to be assigned to this resource group.

## ResourceGroupDefinitionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BlueprintStatus
### Properties
* **lastModified**: string (ReadOnly): Last modified time of this blueprint definition.
* **timeCreated**: string (ReadOnly): Creation time of this blueprint definition.

## PolicyAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before the specified artifact.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **parameters**: [PolicyAssignmentArtifactPropertiesParameters](#policyassignmentartifactpropertiesparameters) (Required): Parameter values for the policy definition.
* **policyDefinitionId**: string (Required): Azure resource ID of the policy definition.
* **resourceGroup**: string: Name of the resource group placeholder to which the policy will be assigned.

## PolicyAssignmentArtifactPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValue](#parametervalue)

## RoleAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before the specified artifact.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **principalIds**: any (Required): Anything
* **resourceGroup**: string: RoleAssignment will be scope to this resourceGroup. If empty, it scopes to the subscription.
* **roleDefinitionId**: string (Required): Azure resource ID of the RoleDefinition.

## TemplateArtifactProperties
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before the specified artifact.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **parameters**: [TemplateArtifactPropertiesParameters](#templateartifactpropertiesparameters) (Required): Resource Manager template blueprint artifact parameter values.
* **resourceGroup**: string: If applicable, the name of the resource group placeholder to which the Resource Manager template blueprint artifact will be deployed.
* **template**: any (Required): Any object

## TemplateArtifactPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValue](#parametervalue)

## PublishedBlueprintProperties
### Properties
* **blueprintName**: string: Name of the published blueprint definition.
* **changeNotes**: string: Version-specific change notes.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **parameters**: [SharedBlueprintPropertiesParameters](#sharedblueprintpropertiesparameters): Parameters required by this blueprint definition.
* **resourceGroups**: [SharedBlueprintPropertiesResourceGroups](#sharedblueprintpropertiesresourcegroups): Resource group placeholders defined by this blueprint definition.
* **status**: [BlueprintStatus](#blueprintstatus) (ReadOnly): The status of the blueprint. This field is readonly.
* **targetScope**: 'managementGroup' | 'subscription': The scope where this blueprint definition can be assigned.

## SharedBlueprintPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinition](#parameterdefinition)

## SharedBlueprintPropertiesResourceGroups
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupDefinition](#resourcegroupdefinition)

