# Microsoft.Blueprint @ 2017-11-11-preview

## Resource Microsoft.Blueprint/blueprintAssignments@2017-11-11-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity) (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AssignmentProperties](#assignmentproperties) (Required)
* **type**: 'Microsoft.Blueprint/blueprintAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Blueprint/blueprints@2017-11-11-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BlueprintProperties](#blueprintproperties) (Required)
* **type**: 'Microsoft.Blueprint/blueprints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Blueprint/blueprints/artifacts@2017-11-11-preview
* **Valid Scope(s)**: ManagementGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Blueprint/blueprints/artifacts' (ReadOnly, DeployTimeConstant)
### PolicyAssignmentArtifact
#### Properties
* **kind**: 'policyAssignment' (Required)
* **properties**: [PolicyAssignmentArtifactProperties](#policyassignmentartifactproperties) (Required)

### RoleAssignmentArtifact
#### Properties
* **kind**: 'roleAssignment' (Required)
* **properties**: [RoleAssignmentArtifactProperties](#roleassignmentartifactproperties) (Required)

### TemplateArtifact
#### Properties
* **kind**: 'template' (Required)
* **properties**: [TemplateArtifactProperties](#templateartifactproperties) (Required)


## Resource Microsoft.Blueprint/blueprints/versions@2017-11-11-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PublishedBlueprintProperties](#publishedblueprintproperties) (ReadOnly)
* **type**: 'Microsoft.Blueprint/blueprints/versions' (ReadOnly, DeployTimeConstant)

## ManagedServiceIdentity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required)

## AssignmentProperties
### Properties
* **blueprintId**: string
* **description**: string
* **displayName**: string
* **locks**: [AssignmentLockSettings](#assignmentlocksettings)
* **parameters**: [ParameterValueCollection](#parametervaluecollection) (Required)
* **provisioningState**: 'canceled' | 'cancelling' | 'creating' | 'deleting' | 'deploying' | 'failed' | 'locking' | 'succeeded' | 'validating' | 'waiting' (ReadOnly)
* **resourceGroups**: [ResourceGroupValueCollection](#resourcegroupvaluecollection) (Required)
* **status**: [AssignmentStatus](#assignmentstatus) (ReadOnly)

## AssignmentLockSettings
### Properties
* **mode**: 'AllResources' | 'None'

## ParameterValueCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValueBase](#parametervaluebase)

## ParameterValueBase
### Properties
* **description**: string

## ResourceGroupValueCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupValue](#resourcegroupvalue)

## ResourceGroupValue
### Properties
* **location**: string
* **name**: string

## AssignmentStatus
### Properties
* **lastModified**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)

## BlueprintProperties
### Properties
* **description**: string
* **displayName**: string
* **layout**: any
* **parameters**: [ParameterDefinitionCollection](#parameterdefinitioncollection)
* **resourceGroups**: [ResourceGroupDefinitionCollection](#resourcegroupdefinitioncollection)
* **status**: [BlueprintStatus](#blueprintstatus) (ReadOnly)
* **targetScope**: 'managementGroup' | 'subscription'
* **versions**: any

## ParameterDefinitionCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinition](#parameterdefinition)

## ParameterDefinition
### Properties
* **allowedValues**: any[]
* **defaultValue**: any
* **metadata**: [ParameterDefinitionMetadata](#parameterdefinitionmetadata)
* **type**: 'array' | 'bool' | 'int' | 'object' | 'secureObject' | 'secureString' | 'string' (Required)

## ParameterDefinitionMetadata
### Properties
* **description**: string
* **displayName**: string
* **strongType**: string

## ResourceGroupDefinitionCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupDefinition](#resourcegroupdefinition)

## ResourceGroupDefinition
### Properties
* **dependsOn**: string[]
* **location**: string
* **metadata**: [ParameterDefinitionMetadata](#parameterdefinitionmetadata)
* **name**: string

## BlueprintStatus
### Properties
* **lastModified**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)

## PolicyAssignmentArtifact
### Properties
* **kind**: 'policyAssignment' (Required)
* **properties**: [PolicyAssignmentArtifactProperties](#policyassignmentartifactproperties) (Required)

## PolicyAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]
* **description**: string
* **displayName**: string
* **parameters**: [ParameterValueCollection](#parametervaluecollection) (Required)
* **policyDefinitionId**: string (Required)
* **resourceGroup**: string

## ParameterValueCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValueBase](#parametervaluebase)

## RoleAssignmentArtifact
### Properties
* **kind**: 'roleAssignment' (Required)
* **properties**: [RoleAssignmentArtifactProperties](#roleassignmentartifactproperties) (Required)

## RoleAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]
* **description**: string
* **displayName**: string
* **principalIds**: any (Required)
* **resourceGroup**: string
* **roleDefinitionId**: string (Required)

## TemplateArtifact
### Properties
* **kind**: 'template' (Required)
* **properties**: [TemplateArtifactProperties](#templateartifactproperties) (Required)

## TemplateArtifactProperties
### Properties
* **dependsOn**: string[]
* **description**: string
* **displayName**: string
* **parameters**: [ParameterValueCollection](#parametervaluecollection) (Required)
* **resourceGroup**: string
* **template**: any (Required)

## ParameterValueCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValueBase](#parametervaluebase)

## PublishedBlueprintProperties
### Properties
* **blueprintName**: string (ReadOnly)
* **changeNotes**: string (ReadOnly)
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **parameters**: [ParameterDefinitionCollection](#parameterdefinitioncollection) (ReadOnly)
* **resourceGroups**: [ResourceGroupDefinitionCollection](#resourcegroupdefinitioncollection) (ReadOnly)
* **status**: [BlueprintStatus](#blueprintstatus) (ReadOnly)
* **targetScope**: 'managementGroup' | 'subscription' (ReadOnly)

## ParameterDefinitionCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinition](#parameterdefinition)

## ResourceGroupDefinitionCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupDefinition](#resourcegroupdefinition)

