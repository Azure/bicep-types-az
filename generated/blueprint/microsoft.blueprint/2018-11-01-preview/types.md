# Microsoft.Blueprint @ 2018-11-01-preview

## Resource Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity) (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AssignmentProperties](#assignmentproperties) (Required)
* **type**: 'Microsoft.Blueprint/blueprintAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Blueprint/blueprints@2018-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BlueprintProperties](#blueprintproperties) (Required)
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
* **properties**: [PolicyAssignmentArtifactProperties](#policyassignmentartifactproperties) (Required)

### roleAssignment
#### Properties
* **kind**: 'roleAssignment' (Required)
* **properties**: [RoleAssignmentArtifactProperties](#roleassignmentartifactproperties) (Required)

### template
#### Properties
* **kind**: 'template' (Required)
* **properties**: [TemplateArtifactProperties](#templateartifactproperties) (Required)


## Resource Microsoft.Blueprint/blueprints/versions@2018-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PublishedBlueprintProperties](#publishedblueprintproperties) (Required)
* **type**: 'Microsoft.Blueprint/blueprints/versions' (ReadOnly, DeployTimeConstant)

## ManagedServiceIdentity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: [Dictionary<string,UserAssignedIdentity>](#dictionarystringuserassignedidentity)

## Dictionary<string,UserAssignedIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string
* **principalId**: string

## AssignmentProperties
### Properties
* **blueprintId**: string
* **description**: string
* **displayName**: string
* **locks**: [AssignmentLockSettings](#assignmentlocksettings)
* **parameters**: [Dictionary<string,ParameterValue>](#dictionarystringparametervalue) (Required)
* **provisioningState**: 'canceled' | 'cancelling' | 'creating' | 'deleting' | 'deploying' | 'failed' | 'locking' | 'succeeded' | 'validating' | 'waiting' (ReadOnly)
* **resourceGroups**: [Dictionary<string,ResourceGroupValue>](#dictionarystringresourcegroupvalue) (Required)
* **scope**: string
* **status**: [AssignmentStatus](#assignmentstatus) (ReadOnly)

## AssignmentLockSettings
### Properties
* **excludedActions**: string[]
* **excludedPrincipals**: string[]
* **mode**: 'AllResourcesDoNotDelete' | 'AllResourcesReadOnly' | 'None'

## Dictionary<string,ParameterValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValue](#parametervalue)

## ParameterValue
### Properties
* **reference**: [SecretValueReference](#secretvaluereference)
* **value**: any

## SecretValueReference
### Properties
* **keyVault**: [keyVaultReference](#keyvaultreference) (Required)
* **secretName**: string (Required)
* **secretVersion**: string

## keyVaultReference
### Properties
* **id**: string (Required)

## Dictionary<string,ResourceGroupValue>
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
* **managedResources**: string[] (ReadOnly)
* **timeCreated**: string (ReadOnly)

## BlueprintProperties
### Properties
* **description**: string
* **displayName**: string
* **layout**: any
* **parameters**: [Dictionary<string,ParameterDefinition>](#dictionarystringparameterdefinition)
* **resourceGroups**: [Dictionary<string,ResourceGroupDefinition>](#dictionarystringresourcegroupdefinition)
* **status**: [BlueprintStatus](#blueprintstatus) (ReadOnly)
* **targetScope**: 'managementGroup' | 'subscription'
* **versions**: any

## Dictionary<string,ParameterDefinition>
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

## Dictionary<string,ResourceGroupDefinition>
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupDefinition](#resourcegroupdefinition)

## ResourceGroupDefinition
### Properties
* **dependsOn**: string[]
* **location**: string
* **metadata**: [ParameterDefinitionMetadata](#parameterdefinitionmetadata)
* **name**: string
* **tags**: [Dictionary<string,String>](#dictionarystringstring)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BlueprintStatus
### Properties
* **lastModified**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)

## policyAssignment
### Properties
* **kind**: 'policyAssignment' (Required)
* **properties**: [PolicyAssignmentArtifactProperties](#policyassignmentartifactproperties) (Required)

## PolicyAssignmentArtifactProperties
### Properties
* **dependsOn**: string[]
* **description**: string
* **displayName**: string
* **parameters**: [Dictionary<string,ParameterValue>](#dictionarystringparametervalue) (Required)
* **policyDefinitionId**: string (Required)
* **resourceGroup**: string

## Dictionary<string,ParameterValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValue](#parametervalue)

## roleAssignment
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

## template
### Properties
* **kind**: 'template' (Required)
* **properties**: [TemplateArtifactProperties](#templateartifactproperties) (Required)

## TemplateArtifactProperties
### Properties
* **dependsOn**: string[]
* **description**: string
* **displayName**: string
* **parameters**: [Dictionary<string,ParameterValue>](#dictionarystringparametervalue) (Required)
* **resourceGroup**: string
* **template**: any (Required)

## Dictionary<string,ParameterValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterValue](#parametervalue)

## PublishedBlueprintProperties
### Properties
* **blueprintName**: string
* **changeNotes**: string
* **description**: string
* **displayName**: string
* **parameters**: [Dictionary<string,ParameterDefinition>](#dictionarystringparameterdefinition)
* **resourceGroups**: [Dictionary<string,ResourceGroupDefinition>](#dictionarystringresourcegroupdefinition)
* **status**: [BlueprintStatus](#blueprintstatus) (ReadOnly)
* **targetScope**: 'managementGroup' | 'subscription'

## Dictionary<string,ParameterDefinition>
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterDefinition](#parameterdefinition)

## Dictionary<string,ResourceGroupDefinition>
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceGroupDefinition](#resourcegroupdefinition)

