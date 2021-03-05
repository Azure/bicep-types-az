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
### PolicyAssignmentArtifact
#### Properties
* **kind**: 'policyAssignment' (Required)
* **properties**: PolicyAssignmentArtifactProperties (Required)

### RoleAssignmentArtifact
#### Properties
* **kind**: 'roleAssignment' (Required)
* **properties**: RoleAssignmentArtifactProperties (Required)

### TemplateArtifact
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
* **userAssignedIdentities**: ManagedServiceIdentityUserAssignedIdentities

## ManagedServiceIdentityUserAssignedIdentities
### Properties
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
* **parameters**: AssignmentPropertiesParameters (Required)
* **provisioningState**: 'canceled' | 'cancelling' | 'creating' | 'deleting' | 'deploying' | 'failed' | 'locking' | 'succeeded' | 'validating' | 'waiting' (ReadOnly)
* **resourceGroups**: AssignmentPropertiesResourceGroups (Required)
* **scope**: string
* **status**: AssignmentStatus (ReadOnly)

## AssignmentLockSettings
### Properties
* **excludedActions**: string[]
* **excludedPrincipals**: string[]
* **mode**: 'AllResourcesDoNotDelete' | 'AllResourcesReadOnly' | 'None'

## AssignmentPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: ParameterValue

## ParameterValue
### Properties
* **reference**: SecretValueReference
* **value**: any

## SecretValueReference
### Properties
* **keyVault**: KeyVaultReference (Required)
* **secretName**: string (Required)
* **secretVersion**: string

## KeyVaultReference
### Properties
* **id**: string (Required)

## AssignmentPropertiesResourceGroups
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
* **managedResources**: string[] (ReadOnly)
* **timeCreated**: string (ReadOnly)

## BlueprintProperties
### Properties
* **description**: string
* **displayName**: string
* **layout**: any
* **parameters**: SharedBlueprintPropertiesParameters
* **resourceGroups**: SharedBlueprintPropertiesResourceGroups
* **status**: BlueprintStatus (ReadOnly)
* **targetScope**: 'managementGroup' | 'subscription'
* **versions**: any

## SharedBlueprintPropertiesParameters
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

## SharedBlueprintPropertiesResourceGroups
### Properties
### Additional Properties
* **Additional Properties Type**: ResourceGroupDefinition

## ResourceGroupDefinition
### Properties
* **dependsOn**: string[]
* **location**: string
* **metadata**: ParameterDefinitionMetadata
* **name**: string
* **tags**: ResourceGroupDefinitionTags

## ResourceGroupDefinitionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BlueprintStatus
### Properties
* **lastModified**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)

## PolicyAssignmentArtifact
### Properties
* **kind**: 'policyAssignment' (Required)
* **properties**: PolicyAssignmentArtifactProperties (Required)

## PolicyAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]
* **description**: string
* **displayName**: string
* **parameters**: PolicyAssignmentArtifactPropertiesParameters (Required)
* **policyDefinitionId**: string (Required)
* **resourceGroup**: string

## PolicyAssignmentArtifactPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: ParameterValue

## RoleAssignmentArtifact
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

## TemplateArtifact
### Properties
* **kind**: 'template' (Required)
* **properties**: TemplateArtifactProperties (Required)

## TemplateArtifactProperties
### Properties
* **dependsOn**: string[]
* **description**: string
* **displayName**: string
* **parameters**: TemplateArtifactPropertiesParameters (Required)
* **resourceGroup**: string
* **template**: any (Required)

## TemplateArtifactPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: ParameterValue

## PublishedBlueprintProperties
### Properties
* **blueprintName**: string
* **changeNotes**: string
* **description**: string
* **displayName**: string
* **parameters**: SharedBlueprintPropertiesParameters
* **resourceGroups**: SharedBlueprintPropertiesResourceGroups
* **status**: BlueprintStatus (ReadOnly)
* **targetScope**: 'managementGroup' | 'subscription'

## SharedBlueprintPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: ParameterDefinition

## SharedBlueprintPropertiesResourceGroups
### Properties
### Additional Properties
* **Additional Properties Type**: ResourceGroupDefinition

