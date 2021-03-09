# Microsoft.Blueprint @ 2017-11-11-preview

## Resource Microsoft.Blueprint/blueprintAssignments@2017-11-11-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AssignmentProperties (Required)
* **type**: 'Microsoft.Blueprint/blueprintAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Blueprint/blueprints@2017-11-11-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BlueprintProperties (Required)
* **type**: 'Microsoft.Blueprint/blueprints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Blueprint/blueprints/artifacts@2017-11-11-preview
* **Valid Scope(s)**: ManagementGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Blueprint/blueprints/artifacts' (ReadOnly, DeployTimeConstant)
### policyAssignment
#### Properties
* **kind**: 'policyAssignment' (Required)
* **properties**: PolicyAssignmentArtifactProperties (Required)

### roleAssignment
#### Properties
* **kind**: 'roleAssignment' (Required)
* **properties**: RoleAssignmentArtifactProperties (Required)

### template
#### Properties
* **kind**: 'template' (Required)
* **properties**: TemplateArtifactProperties (Required)


## Resource Microsoft.Blueprint/blueprints/versions@2017-11-11-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2017-11-11-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PublishedBlueprintProperties (ReadOnly)
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
* **locks**: AssignmentLockSettings
* **parameters**: Dictionary<string,ParameterValueBase> (Required)
* **provisioningState**: 'canceled' | 'cancelling' | 'creating' | 'deleting' | 'deploying' | 'failed' | 'locking' | 'succeeded' | 'validating' | 'waiting' (ReadOnly)
* **resourceGroups**: Dictionary<string,ResourceGroupValue> (Required)
* **status**: AssignmentStatus (ReadOnly)

## AssignmentLockSettings
### Properties
* **mode**: 'AllResources' | 'None'

## Dictionary<string,ParameterValueBase>
### Properties
### Additional Properties
* **Additional Properties Type**: ParameterValueBase

## ParameterValueBase
### Properties
* **description**: string

## Dictionary<string,ResourceGroupValue>
### Properties
### Additional Properties
* **Additional Properties Type**: ResourceGroupValue

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
* **parameters**: Dictionary<string,ParameterDefinition>
* **resourceGroups**: Dictionary<string,ResourceGroupDefinition>
* **status**: BlueprintStatus (ReadOnly)
* **targetScope**: 'managementGroup' | 'subscription'
* **versions**: any

## Dictionary<string,ParameterDefinition>
### Properties
### Additional Properties
* **Additional Properties Type**: ParameterDefinition

## ParameterDefinition
### Properties
* **allowedValues**: any[]
* **defaultValue**: any
* **metadata**: ParameterDefinitionMetadata
* **type**: 'array' | 'bool' | 'int' | 'object' | 'secureObject' | 'secureString' | 'string' (Required)

## ParameterDefinitionMetadata
### Properties
* **description**: string
* **displayName**: string
* **strongType**: string

## Dictionary<string,ResourceGroupDefinition>
### Properties
### Additional Properties
* **Additional Properties Type**: ResourceGroupDefinition

## ResourceGroupDefinition
### Properties
* **dependsOn**: string[]
* **location**: string
* **metadata**: ParameterDefinitionMetadata
* **name**: string

## BlueprintStatus
### Properties
* **lastModified**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)

## policyAssignment
### Properties
* **kind**: 'policyAssignment' (Required)
* **properties**: PolicyAssignmentArtifactProperties (Required)

## PolicyAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]
* **description**: string
* **displayName**: string
* **parameters**: Dictionary<string,ParameterValueBase> (Required)
* **policyDefinitionId**: string (Required)
* **resourceGroup**: string

## Dictionary<string,ParameterValueBase>
### Properties
### Additional Properties
* **Additional Properties Type**: ParameterValueBase

## roleAssignment
### Properties
* **kind**: 'roleAssignment' (Required)
* **properties**: RoleAssignmentArtifactProperties (Required)

## RoleAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]
* **description**: string
* **displayName**: string
* **principalIds**: any (Required)
* **resourceGroup**: string
* **roleDefinitionId**: string (Required)

## template
### Properties
* **kind**: 'template' (Required)
* **properties**: TemplateArtifactProperties (Required)

## TemplateArtifactProperties
### Properties
* **dependsOn**: string[]
* **description**: string
* **displayName**: string
* **parameters**: Dictionary<string,ParameterValueBase> (Required)
* **resourceGroup**: string
* **template**: any (Required)

## Dictionary<string,ParameterValueBase>
### Properties
### Additional Properties
* **Additional Properties Type**: ParameterValueBase

## PublishedBlueprintProperties
### Properties
* **blueprintName**: string (ReadOnly)
* **changeNotes**: string (ReadOnly)
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **parameters**: Dictionary<string,ParameterDefinition> (ReadOnly)
* **resourceGroups**: Dictionary<string,ResourceGroupDefinition> (ReadOnly)
* **status**: BlueprintStatus (ReadOnly)
* **targetScope**: 'managementGroup' | 'subscription' (ReadOnly)

## Dictionary<string,ParameterDefinition>
### Properties
### Additional Properties
* **Additional Properties Type**: ParameterDefinition

## Dictionary<string,ResourceGroupDefinition>
### Properties
### Additional Properties
* **Additional Properties Type**: ResourceGroupDefinition

