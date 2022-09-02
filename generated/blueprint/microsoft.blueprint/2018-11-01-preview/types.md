# Microsoft.Blueprint @ 2018-11-01-preview

## Resource Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity) (Required): Managed identity for this blueprint assignment.
* **location**: string (Required): The location of this blueprint assignment.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssignmentProperties](#assignmentproperties) (Required): Properties for blueprint assignment object.
* **type**: 'Microsoft.Blueprint/blueprintAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Blueprint/blueprintAssignments/assignmentOperations@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssignmentOperationProperties](#assignmentoperationproperties) (ReadOnly): Properties for AssignmentOperation.
* **type**: 'Microsoft.Blueprint/blueprintAssignments/assignmentOperations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Blueprint/blueprints@2018-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BlueprintProperties](#blueprintproperties) (Required): Detailed properties for blueprint definition.
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
* **properties**: [PolicyAssignmentArtifactProperties](#policyassignmentartifactproperties) (Required): properties for policyAssignment Artifact

### RoleAssignmentArtifact
#### Properties
* **kind**: 'roleAssignment' (Required): Specifies the kind of blueprint artifact.
* **properties**: [RoleAssignmentArtifactProperties](#roleassignmentartifactproperties) (Required): Properties for a Role assignment blueprint artifact.

### TemplateArtifact
#### Properties
* **kind**: 'template' (Required): Specifies the kind of blueprint artifact.
* **properties**: [TemplateArtifactProperties](#templateartifactproperties) (Required): Properties for a Resource Manager template blueprint artifact.


## Resource Microsoft.Blueprint/blueprints/versions@2018-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublishedBlueprintProperties](#publishedblueprintproperties) (Required): Detailed properties for published blueprint.
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
* **properties**: [PolicyAssignmentArtifactProperties](#policyassignmentartifactproperties) (ReadOnly): properties for policyAssignment Artifact

### RoleAssignmentArtifact
#### Properties
* **kind**: 'roleAssignment' (Required): Specifies the kind of blueprint artifact.
* **properties**: [RoleAssignmentArtifactProperties](#roleassignmentartifactproperties) (ReadOnly): Properties for a Role assignment blueprint artifact.

### TemplateArtifact
#### Properties
* **kind**: 'template' (Required): Specifies the kind of blueprint artifact.
* **properties**: [TemplateArtifactProperties](#templateartifactproperties) (ReadOnly): Properties for a Resource Manager template blueprint artifact.


## AssignmentDeploymentJob
### Properties
* **action**: string: Name of the action performed in this job.
* **history**: [AssignmentDeploymentJobResult](#assignmentdeploymentjobresult)[]: Result of this deployment job for each retry.
* **jobId**: string: Id of this job.
* **jobState**: string: State of this job.
* **kind**: string: Kind of job.
* **requestUri**: string: Reference to deployment job resource id.
* **result**: [AssignmentDeploymentJobResult](#assignmentdeploymentjobresult): Deployment job result.

## AssignmentDeploymentJobResult
### Properties
* **error**: [AzureResourceManagerError](#azureresourcemanagererror): Contains error details if deployment job failed.
* **resources**: [AssignmentJobCreatedResource](#assignmentjobcreatedresource)[]: Resources created as result of the deployment job.

## AssignmentJobCreatedResource
### Properties
* **id**: string (ReadOnly): String Id used to locate any resource on Azure.
* **name**: string (ReadOnly): Name of this resource.
* **properties**: [AssignmentJobCreatedResourceProperties](#assignmentjobcreatedresourceproperties): Additional properties in a dictionary.
* **type**: string (ReadOnly): Type of this resource.

## AssignmentJobCreatedResourceProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssignmentLockSettings
### Properties
* **excludedActions**: string[]: List of management operations that are excluded from blueprint locks. Up to 200 actions are permitted. If the lock mode is set to 'AllResourcesReadOnly', then the following actions are automatically appended to 'excludedActions': '*/read', 'Microsoft.Network/virtualNetworks/subnets/join/action' and 'Microsoft.Authorization/locks/delete'. If the lock mode is set to 'AllResourcesDoNotDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will get removed.
* **excludedPrincipals**: string[]: List of AAD principals excluded from blueprint locks. Up to 5 principals are permitted.
* **mode**: 'AllResourcesDoNotDelete' | 'AllResourcesReadOnly' | 'None' | string: Lock mode.

## AssignmentOperationProperties
### Properties
* **assignmentState**: string: State of this blueprint assignment operation.
* **blueprintVersion**: string: The published version of the blueprint definition used for the blueprint assignment operation.
* **deployments**: [AssignmentDeploymentJob](#assignmentdeploymentjob)[]: List of jobs in this blueprint assignment operation.
* **timeCreated**: string: Create time of this blueprint assignment operation.
* **timeFinished**: string: Finish time of the overall underlying deployments.
* **timeStarted**: string: Start time of the underlying deployment.

## AssignmentProperties
### Properties
* **blueprintId**: string: ID of the published version of a blueprint definition.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **locks**: [AssignmentLockSettings](#assignmentlocksettings): Defines how resources deployed by a blueprint assignment are locked.
* **parameters**: [AssignmentPropertiesParameters](#assignmentpropertiesparameters) (Required): Blueprint assignment parameter values.
* **provisioningState**: 'canceled' | 'cancelling' | 'creating' | 'deleting' | 'deploying' | 'failed' | 'locking' | 'succeeded' | 'validating' | 'waiting' | string (ReadOnly): State of the blueprint assignment.
* **resourceGroups**: [AssignmentPropertiesResourceGroups](#assignmentpropertiesresourcegroups) (Required): Names and locations of resource group placeholders.
* **scope**: string: The target subscription scope of the blueprint assignment (format: '/subscriptions/{subscriptionId}'). For management group level assignments, the property is required.
* **status**: [AssignmentStatus](#assignmentstatus) (ReadOnly): Status of blueprint assignment. This field is readonly.

## AssignmentPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValue](#parametervalue)

## AssignmentPropertiesResourceGroups
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupValue](#resourcegroupvalue)

## AssignmentStatus
### Properties
* **lastModified**: string (ReadOnly): Last modified time of this blueprint definition.
* **managedResources**: string[] (ReadOnly): List of resources that were created by the blueprint assignment.
* **timeCreated**: string (ReadOnly): Creation time of this blueprint definition.

## AzureResourceManagerError
### Properties
* **code**: string: Error code.
* **message**: string: Error message.

## BlueprintProperties
### Properties
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **layout**: any (ReadOnly): Layout view of the blueprint definition for UI reference.
* **parameters**: [SharedBlueprintPropertiesParameters](#sharedblueprintpropertiesparameters): Parameters required by this blueprint definition.
* **resourceGroups**: [SharedBlueprintPropertiesResourceGroups](#sharedblueprintpropertiesresourcegroups): Resource group placeholders defined by this blueprint definition.
* **status**: [BlueprintStatus](#blueprintstatus) (ReadOnly): Status of the blueprint. This field is readonly.
* **targetScope**: 'managementGroup' | 'subscription' | string: The scope where this blueprint definition can be assigned.
* **versions**: any: Published versions of this blueprint definition.

## BlueprintStatus
### Properties
* **lastModified**: string (ReadOnly): Last modified time of this blueprint definition.
* **timeCreated**: string (ReadOnly): Creation time of this blueprint definition.

## KeyVaultReference
### Properties
* **id**: string (Required): Azure resource ID of the Key Vault.

## ManagedServiceIdentity
### Properties
* **principalId**: string: Azure Active Directory principal ID associated with this Identity.
* **tenantId**: string: ID of the Azure Active Directory.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' | string (Required): Type of the managed identity.
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## ParameterDefinition
### Properties
* **allowedValues**: any[]: Array of allowed values for this parameter.
* **defaultValue**: any: Default Value for this parameter.
* **metadata**: [ParameterDefinitionMetadata](#parameterdefinitionmetadata): User-friendly properties for this parameter.
* **type**: 'array' | 'bool' | 'int' | 'object' | 'secureObject' | 'secureString' | 'string' | string (Required): Allowed data types for Resource Manager template parameters.

## ParameterDefinitionMetadata
### Properties
* **description**: string: Description of this parameter/resourceGroup.
* **displayName**: string: DisplayName of this parameter/resourceGroup.
* **strongType**: string: StrongType for UI to render rich experience during blueprint assignment. Supported strong types are resourceType, principalId and location.

## ParameterValue
### Properties
* **reference**: [SecretValueReference](#secretvaluereference): Parameter value as reference type.
* **value**: any: Parameter value. Any valid JSON value is allowed including objects, arrays, strings, numbers and booleans.

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

## PublishedBlueprintProperties
### Properties
* **blueprintName**: string: Name of the published blueprint definition.
* **changeNotes**: string: Version-specific change notes.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **parameters**: [SharedBlueprintPropertiesParameters](#sharedblueprintpropertiesparameters): Parameters required by this blueprint definition.
* **resourceGroups**: [SharedBlueprintPropertiesResourceGroups](#sharedblueprintpropertiesresourcegroups): Resource group placeholders defined by this blueprint definition.
* **status**: [BlueprintStatus](#blueprintstatus) (ReadOnly): Status of the blueprint. This field is readonly.
* **targetScope**: 'managementGroup' | 'subscription' | string: The scope where this blueprint definition can be assigned.

## ResourceGroupDefinition
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before this resource group.
* **location**: string: Location of this resourceGroup. Leave empty if the resource group location will be specified during the blueprint assignment.
* **metadata**: [ParameterDefinitionMetadata](#parameterdefinitionmetadata): User-friendly properties for this resource group.
* **name**: string: Name of this resourceGroup. Leave empty if the resource group name will be specified during the blueprint assignment.
* **tags**: [ResourceGroupDefinitionTags](#resourcegroupdefinitiontags): Tags to be assigned to this resource group.

## ResourceGroupDefinitionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceGroupValue
### Properties
* **location**: string: Location of the resource group.
* **name**: string: Name of the resource group.

## RoleAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before the specified artifact.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **principalIds**: any (Required): Array of user or group identities in Azure Active Directory. The roleDefinition will apply to each identity.
* **resourceGroup**: string: RoleAssignment will be scope to this resourceGroup. If empty, it scopes to the subscription.
* **roleDefinitionId**: string (Required): Azure resource ID of the RoleDefinition.

## SecretValueReference
### Properties
* **keyVault**: [KeyVaultReference](#keyvaultreference) (Required): Specifies the reference to a given Azure Key Vault.
* **secretName**: string (Required): Name of the secret.
* **secretVersion**: string: The version of the secret to use. If left blank, the latest version of the secret is used.

## SharedBlueprintPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinition](#parameterdefinition)

## SharedBlueprintPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinition](#parameterdefinition)

## SharedBlueprintPropertiesResourceGroups
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupDefinition](#resourcegroupdefinition)

## SharedBlueprintPropertiesResourceGroups
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupDefinition](#resourcegroupdefinition)

## TemplateArtifactProperties
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before the specified artifact.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **parameters**: [TemplateArtifactPropertiesParameters](#templateartifactpropertiesparameters) (Required): Resource Manager template blueprint artifact parameter values.
* **resourceGroup**: string: If applicable, the name of the resource group placeholder to which the Resource Manager template blueprint artifact will be deployed.
* **template**: any (Required): The Resource Manager template blueprint artifact body.

## TemplateArtifactPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValue](#parametervalue)

## UserAssignedIdentity
### Properties
* **clientId**: string: Client App Id associated with this identity.
* **principalId**: string: Azure Active Directory principal ID associated with this Identity.

