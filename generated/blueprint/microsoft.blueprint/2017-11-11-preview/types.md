# Microsoft.Blueprint @ 2017-11-11-preview

## Resource Microsoft.Blueprint/blueprintAssignments@2017-11-11-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity) (Required): Managed Service Identity
* **location**: string (Required): The location of this Blueprint assignment.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssignmentProperties](#assignmentproperties) (Required): Detailed properties for Assignment.
* **type**: 'Microsoft.Blueprint/blueprintAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Blueprint/blueprints@2017-11-11-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BlueprintProperties](#blueprintproperties) (Required): Schema for Blueprint properties.
* **type**: 'Microsoft.Blueprint/blueprints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Blueprint/blueprints/artifacts@2017-11-11-preview
* **Valid Scope(s)**: ManagementGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Blueprint/blueprints/artifacts' (ReadOnly, DeployTimeConstant): The resource type
### PolicyAssignmentArtifact
#### Properties
* **kind**: 'policyAssignment' (Required): Specifies the kind of Blueprint artifact.
* **properties**: [PolicyAssignmentArtifactProperties](#policyassignmentartifactproperties) (Required): PolicyAssignment properties

### RoleAssignmentArtifact
#### Properties
* **kind**: 'roleAssignment' (Required): Specifies the kind of Blueprint artifact.
* **properties**: [RoleAssignmentArtifactProperties](#roleassignmentartifactproperties) (Required): Properties of the Role assignment artifact.

### TemplateArtifact
#### Properties
* **kind**: 'template' (Required): Specifies the kind of Blueprint artifact.
* **properties**: [TemplateArtifactProperties](#templateartifactproperties) (Required): Properties of a Template Artifact.


## Resource Microsoft.Blueprint/blueprints/versions@2017-11-11-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublishedBlueprintProperties](#publishedblueprintproperties) (ReadOnly): Schema for published Blueprint properties.
* **type**: 'Microsoft.Blueprint/blueprints/versions' (ReadOnly, DeployTimeConstant): The resource type

## ManagedServiceIdentity
### Properties
* **principalId**: string: Azure Active Directory principal ID associated with this Identity.
* **tenantId**: string: ID of the Azure Active Directory.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required): Type of the Managed Service Identity.

## AssignmentProperties
### Properties
* **blueprintId**: string: ID of the Blueprint definition resource.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **locks**: [AssignmentLockSettings](#assignmentlocksettings): Defines how Blueprint-managed resources will be locked.
* **parameters**: [ParameterValueCollection](#parametervaluecollection) (Required): A dictionary for parameters and their corresponding values.
* **provisioningState**: 'canceled' | 'cancelling' | 'creating' | 'deleting' | 'deploying' | 'failed' | 'locking' | 'succeeded' | 'validating' | 'waiting' (ReadOnly): State of the assignment.
* **resourceGroups**: [ResourceGroupValueCollection](#resourcegroupvaluecollection) (Required): A dictionary which maps resource group placeholders to the resource groups which will be created.
* **status**: [AssignmentStatus](#assignmentstatus) (ReadOnly): The status of Blueprint assignment. This field is readonly.

## AssignmentLockSettings
### Properties
* **mode**: 'AllResources' | 'None': Lock mode.

## ParameterValueCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValueBase](#parametervaluebase)

## ParameterValueBase
### Properties
* **description**: string: Optional property, just to establish ParameterValueBase as a BaseClass.

## ResourceGroupValueCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupValue](#resourcegroupvalue)

## ResourceGroupValue
### Properties
* **location**: string: Location of the resource group
* **name**: string: Name of the resource group

## AssignmentStatus
### Properties
* **lastModified**: string (ReadOnly): Last modified time of this blueprint.
* **timeCreated**: string (ReadOnly): Creation time of this blueprint.

## BlueprintProperties
### Properties
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **layout**: any: Any object
* **parameters**: [ParameterDefinitionCollection](#parameterdefinitioncollection): A dictionary hold parameter name and it's metadata.
* **resourceGroups**: [ResourceGroupDefinitionCollection](#resourcegroupdefinitioncollection): A dictionary which maps resource group placeholders to the resource groups which will be created.
* **status**: [BlueprintStatus](#blueprintstatus) (ReadOnly): The status of the blueprint. This field is readonly.
* **targetScope**: 'managementGroup' | 'subscription': The scope where this Blueprint can be applied.
* **versions**: any: Any object

## ParameterDefinitionCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinition](#parameterdefinition)

## ParameterDefinition
### Properties
* **allowedValues**: any[]: Array of allowed values for this parameter.
* **defaultValue**: any: Any object
* **metadata**: [ParameterDefinitionMetadata](#parameterdefinitionmetadata): User-friendly properties for this parameter.
* **type**: 'array' | 'bool' | 'int' | 'object' | 'secureObject' | 'secureString' | 'string' (Required): Allowed data types for Azure Resource Manager template parameters.

## ParameterDefinitionMetadata
### Properties
* **description**: string: Description of this parameter/resourceGroup.
* **displayName**: string: DisplayName of this parameter/resourceGroup.
* **strongType**: string: StrongType for UI to render rich experience during assignment time.

## ResourceGroupDefinitionCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupDefinition](#resourcegroupdefinition)

## ResourceGroupDefinition
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before this resource group.
* **location**: string: Location of this resourceGroup, leave empty if the resource group location will be specified during the Blueprint assignment.
* **metadata**: [ParameterDefinitionMetadata](#parameterdefinitionmetadata): User-friendly properties for this parameter.
* **name**: string: Name of this resourceGroup, leave empty if the resource group name will be specified during the Blueprint assignment.

## BlueprintStatus
### Properties
* **lastModified**: string (ReadOnly): Last modified time of this blueprint.
* **timeCreated**: string (ReadOnly): Creation time of this blueprint.

## PolicyAssignmentArtifact
### Properties
* **kind**: 'policyAssignment' (Required): Specifies the kind of Blueprint artifact.
* **properties**: [PolicyAssignmentArtifactProperties](#policyassignmentartifactproperties) (Required): PolicyAssignment properties

## PolicyAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before the specified artifact.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **parameters**: [ParameterValueCollection](#parametervaluecollection) (Required): A dictionary for parameters and their corresponding values.
* **policyDefinitionId**: string (Required): Azure resource ID of the policy definition.
* **resourceGroup**: string: Name of the resource group placeholder to which the policy will be assigned.

## ParameterValueCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValueBase](#parametervaluebase)

## RoleAssignmentArtifact
### Properties
* **kind**: 'roleAssignment' (Required): Specifies the kind of Blueprint artifact.
* **properties**: [RoleAssignmentArtifactProperties](#roleassignmentartifactproperties) (Required): Properties of the Role assignment artifact.

## RoleAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before the specified artifact.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **principalIds**: any (Required): Any object
* **resourceGroup**: string: RoleAssignment will be scope to this resourceGroup, if left empty, it would scope to the subscription.
* **roleDefinitionId**: string (Required): Azure resource ID of the RoleDefinition.

## TemplateArtifact
### Properties
* **kind**: 'template' (Required): Specifies the kind of Blueprint artifact.
* **properties**: [TemplateArtifactProperties](#templateartifactproperties) (Required): Properties of a Template Artifact.

## TemplateArtifactProperties
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before the specified artifact.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **parameters**: [ParameterValueCollection](#parametervaluecollection) (Required): A dictionary for parameters and their corresponding values.
* **resourceGroup**: string: If applicable, the name of the resource group placeholder to which the template will be deployed.
* **template**: any (Required): Any object

## ParameterValueCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValueBase](#parametervaluebase)

## PublishedBlueprintProperties
### Properties
* **blueprintName**: string (ReadOnly): Name of the Blueprint definition.
* **changeNotes**: string (ReadOnly): Version-specific change notes
* **description**: string (ReadOnly): Multi-line explain this resource.
* **displayName**: string (ReadOnly): One-liner string explain this resource.
* **parameters**: [ParameterDefinitionCollection](#parameterdefinitioncollection) (ReadOnly): A dictionary hold parameter name and it's metadata.
* **resourceGroups**: [ResourceGroupDefinitionCollection](#resourcegroupdefinitioncollection) (ReadOnly): A dictionary which maps resource group placeholders to the resource groups which will be created.
* **status**: [BlueprintStatus](#blueprintstatus) (ReadOnly): The status of the blueprint. This field is readonly.
* **targetScope**: 'managementGroup' | 'subscription' (ReadOnly): The scope where this Blueprint can be applied.

## ParameterDefinitionCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinition](#parameterdefinition)

## ResourceGroupDefinitionCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupDefinition](#resourcegroupdefinition)

