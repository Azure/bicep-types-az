# Microsoft.Blueprint @ 2018-11-01-preview

## Resource Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AssignmentProperties (Required)
* **type**: 'Microsoft.Blueprint/blueprintAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Blueprint/blueprints@2018-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BlueprintProperties (Required)
* **type**: 'Microsoft.Blueprint/blueprints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview
* **Valid Scope(s)**: Unknown
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
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


## Resource Microsoft.Blueprint/blueprints/versions@2018-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PublishedBlueprintProperties (Required)
* **type**: 'Microsoft.Blueprint/blueprints/versions' (ReadOnly, DeployTimeConstant)

## ManagedServiceIdentity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: Dictionary<string,UserAssignedIdentity>

## Dictionary<string,UserAssignedIdentity>
### Additional Properties
* **Additional Properties Type**: UserAssignedIdentity

## UserAssignedIdentity
### Properties
* **clientId**: string
* **principalId**: string

## AssignmentProperties
### Properties
* **blueprintId**: string
* **description**: string
* **displayName**: string
* **locks**: AssignmentLockSettings
* **parameters**: Dictionary<string,ParameterValue> (Required)
* **provisioningState**: 'canceled' | 'cancelling' | 'creating' | 'deleting' | 'deploying' | 'failed' | 'locking' | 'succeeded' | 'validating' | 'waiting' (ReadOnly)
* **resourceGroups**: Dictionary<string,ResourceGroupValue> (Required)
* **scope**: string
* **status**: AssignmentStatus (ReadOnly)

## AssignmentLockSettings
### Properties
* **excludedActions**: string[]
* **excludedPrincipals**: string[]
* **mode**: 'AllResourcesDoNotDelete' | 'AllResourcesReadOnly' | 'None'

## Dictionary<string,ParameterValue>
### Additional Properties
* **Additional Properties Type**: ParameterValue

## ParameterValue
### Properties
* **reference**: SecretValueReference
* **value**: any

## SecretValueReference
### Properties
* **keyVault**: keyVaultReference (Required)
* **secretName**: string (Required)
* **secretVersion**: string

## keyVaultReference
### Properties
* **id**: string (Required)

## Dictionary<string,ResourceGroupValue>
### Additional Properties
* **Additional Properties Type**: ResourceGroupValue

## ResourceGroupValue
### Properties
* **location**: string
* **name**: string

## AssignmentStatus
### Properties
* **lastModified**: string (ReadOnly)
* **managedResources**: string[] (ReadOnly)
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
### Additional Properties
* **Additional Properties Type**: ResourceGroupDefinition

## ResourceGroupDefinition
### Properties
* **dependsOn**: string[]
* **location**: string
* **metadata**: ParameterDefinitionMetadata
* **name**: string
* **tags**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

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
* **parameters**: Dictionary<string,ParameterValue> (Required)
* **policyDefinitionId**: string (Required)
* **resourceGroup**: string

## Dictionary<string,ParameterValue>
### Additional Properties
* **Additional Properties Type**: ParameterValue

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
* **parameters**: Dictionary<string,ParameterValue> (Required)
* **resourceGroup**: string
* **template**: any (Required)

## Dictionary<string,ParameterValue>
### Additional Properties
* **Additional Properties Type**: ParameterValue

## PublishedBlueprintProperties
### Properties
* **blueprintName**: string
* **changeNotes**: string
* **description**: string
* **displayName**: string
* **parameters**: Dictionary<string,ParameterDefinition>
* **resourceGroups**: Dictionary<string,ResourceGroupDefinition>
* **status**: BlueprintStatus (ReadOnly)
* **targetScope**: 'managementGroup' | 'subscription'

## Dictionary<string,ParameterDefinition>
### Additional Properties
* **Additional Properties Type**: ParameterDefinition

## Dictionary<string,ResourceGroupDefinition>
### Additional Properties
* **Additional Properties Type**: ResourceGroupDefinition

