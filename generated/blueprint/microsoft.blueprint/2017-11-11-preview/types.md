# Microsoft.Blueprint @ 2017-11-11-preview

## Resource Microsoft.Blueprint/blueprintAssignments@2017-11-11-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity) (Required): Managed Service Identity for this Blueprint assignment
* **location**: string (Required): The location of this Blueprint assignment.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssignmentProperties](#assignmentproperties) (Required): Properties for Assignment object.
* **type**: 'Microsoft.Blueprint/blueprintAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Blueprint/blueprints@2017-11-11-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BlueprintProperties](#blueprintproperties) (Required): Detailed properties for blueprint
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
* **properties**: [PolicyAssignmentArtifactProperties](#policyassignmentartifactproperties) (Required): properties for policyAssignment Artifact

### RoleAssignmentArtifact
#### Properties
* **kind**: 'roleAssignment' (Required): Specifies the kind of Blueprint artifact.
* **properties**: [RoleAssignmentArtifactProperties](#roleassignmentartifactproperties) (Required): Properties for roleAssignment artifact.

### TemplateArtifact
#### Properties
* **kind**: 'template' (Required): Specifies the kind of Blueprint artifact.
* **properties**: [TemplateArtifactProperties](#templateartifactproperties) (Required): Properties for template artifact


## Resource Microsoft.Blueprint/blueprints/versions@2017-11-11-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublishedBlueprintProperties](#publishedblueprintproperties) (ReadOnly): Detailed properties for published Blueprint
* **type**: 'Microsoft.Blueprint/blueprints/versions' (ReadOnly, DeployTimeConstant): The resource type

## AssignmentLockSettings
### Properties
* **mode**: 'AllResources' | 'None' | string: Lock mode.

## AssignmentProperties
### Properties
* **blueprintId**: string: ID of the Blueprint definition resource.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **locks**: [AssignmentLockSettings](#assignmentlocksettings): Defines how Blueprint-managed resources will be locked.
* **parameters**: [ParameterValueCollection](#parametervaluecollection) (Required): Blueprint parameter values.
* **provisioningState**: 'canceled' | 'cancelling' | 'creating' | 'deleting' | 'deploying' | 'failed' | 'locking' | 'succeeded' | 'validating' | 'waiting' | string (ReadOnly): State of the assignment.
* **resourceGroups**: [ResourceGroupValueCollection](#resourcegroupvaluecollection) (Required): Names and locations of resource group placeholders.
* **status**: [AssignmentStatus](#assignmentstatus) (ReadOnly): Status of Blueprint assignment. This field is readonly.

## AssignmentStatus
### Properties
* **lastModified**: string (ReadOnly): Last modified time of this blueprint.
* **timeCreated**: string (ReadOnly): Creation time of this blueprint.

## BlueprintProperties
### Properties
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **layout**: any: Layout view of the blueprint, for UI reference.
* **parameters**: [ParameterDefinitionCollection](#parameterdefinitioncollection): Parameters required by this Blueprint definition.
* **resourceGroups**: [ResourceGroupDefinitionCollection](#resourcegroupdefinitioncollection): Resource group placeholders defined by this Blueprint definition.
* **status**: [BlueprintStatus](#blueprintstatus) (ReadOnly): Status of the Blueprint. This field is readonly.
* **targetScope**: 'managementGroup' | 'subscription' | string: The scope where this Blueprint can be applied.
* **versions**: any: Published versions of this blueprint.

## BlueprintStatus
### Properties
* **lastModified**: string (ReadOnly): Last modified time of this blueprint.
* **timeCreated**: string (ReadOnly): Creation time of this blueprint.

## ManagedServiceIdentity
### Properties
* **principalId**: string: Azure Active Directory principal ID associated with this Identity.
* **tenantId**: string: ID of the Azure Active Directory.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' | string (Required): Type of the Managed Service Identity.

## ParameterDefinition
### Properties
* **allowedValues**: any[]: Array of allowed values for this parameter.
* **defaultValue**: any: Default Value for this parameter.
* **metadata**: [ParameterDefinitionMetadata](#parameterdefinitionmetadata): User-friendly properties for this parameter.
* **type**: 'array' | 'bool' | 'int' | 'object' | 'secureObject' | 'secureString' | 'string' | string (Required): Allowed data types for Azure Resource Manager template parameters.

## ParameterDefinitionCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinition](#parameterdefinition)

## ParameterDefinitionCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinition](#parameterdefinition)

## ParameterDefinitionMetadata
### Properties
* **description**: string: Description of this parameter/resourceGroup.
* **displayName**: string: DisplayName of this parameter/resourceGroup.
* **strongType**: string: StrongType for UI to render rich experience during assignment time.

## ParameterValueBase
### Properties
* **description**: string: Optional property, just to establish ParameterValueBase as a BaseClass.

## ParameterValueCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValueBase](#parametervaluebase)

## ParameterValueCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValueBase](#parametervaluebase)

## ParameterValueCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValueBase](#parametervaluebase)

## PolicyAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before the specified artifact.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **parameters**: [ParameterValueCollection](#parametervaluecollection) (Required): Parameter values for the policy definition.
* **policyDefinitionId**: string (Required): Azure resource ID of the policy definition.
* **resourceGroup**: string: Name of the resource group placeholder to which the policy will be assigned.

## PublishedBlueprintProperties
### Properties
* **blueprintName**: string (ReadOnly): Name of the Blueprint definition.
* **changeNotes**: string (ReadOnly): Version-specific change notes
* **description**: string (ReadOnly): Multi-line explain this resource.
* **displayName**: string (ReadOnly): One-liner string explain this resource.
* **parameters**: [ParameterDefinitionCollection](#parameterdefinitioncollection) (ReadOnly): Parameters required by this Blueprint definition.
* **resourceGroups**: [ResourceGroupDefinitionCollection](#resourcegroupdefinitioncollection) (ReadOnly): Resource group placeholders defined by this Blueprint definition.
* **status**: [BlueprintStatus](#blueprintstatus) (ReadOnly): Status of the Blueprint. This field is readonly.
* **targetScope**: 'managementGroup' | 'subscription' | string (ReadOnly): The scope where this Blueprint can be applied.

## ResourceGroupDefinition
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before this resource group.
* **location**: string: Location of this resourceGroup, leave empty if the resource group location will be specified during the Blueprint assignment.
* **metadata**: [ParameterDefinitionMetadata](#parameterdefinitionmetadata): User-friendly properties for this resource group.
* **name**: string: Name of this resourceGroup, leave empty if the resource group name will be specified during the Blueprint assignment.

## ResourceGroupDefinitionCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupDefinition](#resourcegroupdefinition)

## ResourceGroupDefinitionCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupDefinition](#resourcegroupdefinition)

## ResourceGroupValue
### Properties
* **location**: string: Location of the resource group
* **name**: string: Name of the resource group

## ResourceGroupValueCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupValue](#resourcegroupvalue)

## RoleAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before the specified artifact.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **principalIds**: any (Required): Array of user or group identities in Azure Active Directory. The roleDefinition will apply to these identity.
* **resourceGroup**: string: RoleAssignment will be scope to this resourceGroup, if left empty, it would scope to the subscription.
* **roleDefinitionId**: string (Required): Azure resource ID of the RoleDefinition.

## TemplateArtifactProperties
### Properties
* **dependsOn**: string[]: Artifacts which need to be deployed before the specified artifact.
* **description**: string: Multi-line explain this resource.
* **displayName**: string: One-liner string explain this resource.
* **parameters**: [ParameterValueCollection](#parametervaluecollection) (Required): Template parameter values.
* **resourceGroup**: string: If applicable, the name of the resource group placeholder to which the template will be deployed.
* **template**: any (Required): The Azure Resource Manager template body.

