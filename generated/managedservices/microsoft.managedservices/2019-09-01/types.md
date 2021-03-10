# Microsoft.ManagedServices @ 2019-09-01

## Resource Microsoft.ManagedServices/registrationAssignments@2019-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegistrationAssignmentProperties](#registrationassignmentproperties)
* **type**: 'Microsoft.ManagedServices/registrationAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ManagedServices/registrationDefinitions@2019-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **plan**: [Plan](#plan)
* **properties**: [RegistrationDefinitionProperties](#registrationdefinitionproperties)
* **type**: 'Microsoft.ManagedServices/registrationDefinitions' (ReadOnly, DeployTimeConstant)

## RegistrationAssignmentProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **registrationDefinition**: [RegistrationAssignmentPropertiesRegistrationDefinition](#registrationassignmentpropertiesregistrationdefinition) (ReadOnly)
* **registrationDefinitionId**: string (Required)

## RegistrationAssignmentPropertiesRegistrationDefinition
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **plan**: [Plan](#plan)
* **properties**: [RegistrationAssignmentPropertiesRegistrationDefinitionProperties](#registrationassignmentpropertiesregistrationdefinitionproperties)
* **type**: string (ReadOnly)

## Plan
### Properties
* **name**: string (Required)
* **product**: string (Required)
* **publisher**: string (Required)
* **version**: string (Required)

## RegistrationAssignmentPropertiesRegistrationDefinitionProperties
### Properties
* **authorizations**: [Authorization](#authorization)[]
* **description**: string
* **managedByTenantId**: string
* **managedByTenantName**: string
* **manageeTenantId**: string
* **manageeTenantName**: string
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating'
* **registrationDefinitionName**: string

## Authorization
### Properties
* **delegatedRoleDefinitionIds**: string[]
* **principalId**: string (Required)
* **principalIdDisplayName**: string
* **roleDefinitionId**: string (Required)

## RegistrationDefinitionProperties
### Properties
* **authorizations**: [Authorization](#authorization)[] (Required)
* **description**: string
* **managedByTenantId**: string (Required)
* **managedByTenantName**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **registrationDefinitionName**: string

