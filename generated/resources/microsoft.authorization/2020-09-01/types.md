# Microsoft.Authorization @ 2020-09-01

## Resource Microsoft.Authorization/policyAssignments@2020-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyAssignmentProperties
* **type**: 'Microsoft.Authorization/policyAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policyDefinitions@2020-09-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyDefinitionProperties
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policyDefinitions@2020-09-01
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyDefinitionProperties
* **type**: 'Microsoft.Authorization/policyDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policySetDefinitions@2020-09-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicySetDefinitionProperties
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/policySetDefinitions@2020-09-01
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicySetDefinitionProperties
* **type**: 'Microsoft.Authorization/policySetDefinitions' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## PolicyAssignmentProperties
### Properties
* **description**: string
* **displayName**: string
* **enforcementMode**: 'Default' | 'DoNotEnforce'
* **metadata**: any
* **nonComplianceMessages**: NonComplianceMessage[]
* **notScopes**: string[]
* **parameters**: Dictionary<string,ParameterValuesValue>
* **policyDefinitionId**: string
* **scope**: string (ReadOnly)

## NonComplianceMessage
### Properties
* **message**: string (Required)
* **policyDefinitionReferenceId**: string

## Dictionary<string,ParameterValuesValue>
### Additional Properties
* **Additional Properties Type**: ParameterValuesValue

## ParameterValuesValue
### Properties
* **value**: any

## PolicyDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **mode**: string
* **parameters**: Dictionary<string,ParameterDefinitionsValue>
* **policyRule**: any
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static'

## Dictionary<string,ParameterDefinitionsValue>
### Additional Properties
* **Additional Properties Type**: ParameterDefinitionsValue

## ParameterDefinitionsValue
### Properties
* **allowedValues**: any[]
* **defaultValue**: any
* **metadata**: schemas:10_metadata
* **type**: 'Array' | 'Boolean' | 'DateTime' | 'Float' | 'Integer' | 'Object' | 'String'

## schemas:10_metadata
### Properties
* **assignPermissions**: bool
* **description**: string
* **displayName**: string
* **strongType**: string
### Additional Properties
* **Additional Properties Type**: any

## PolicySetDefinitionProperties
### Properties
* **description**: string
* **displayName**: string
* **metadata**: any
* **parameters**: Dictionary<string,ParameterDefinitionsValue>
* **policyDefinitionGroups**: PolicyDefinitionGroup[]
* **policyDefinitions**: PolicyDefinitionReference[] (Required)
* **policyType**: 'BuiltIn' | 'Custom' | 'NotSpecified' | 'Static'

## Dictionary<string,ParameterDefinitionsValue>
### Additional Properties
* **Additional Properties Type**: ParameterDefinitionsValue

## PolicyDefinitionGroup
### Properties
* **additionalMetadataId**: string
* **category**: string
* **description**: string
* **displayName**: string
* **name**: string (Required)

## PolicyDefinitionReference
### Properties
* **groupNames**: string[]
* **parameters**: Dictionary<string,ParameterValuesValue>
* **policyDefinitionId**: string (Required)
* **policyDefinitionReferenceId**: string

## Dictionary<string,ParameterValuesValue>
### Additional Properties
* **Additional Properties Type**: ParameterValuesValue

