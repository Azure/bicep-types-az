# Microsoft.ManagedServices @ 2018-06-01-preview

## Microsoft.ManagedServices/registrationAssignments
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistrationAssignmentProperties
* **type**: 'Microsoft.ManagedServices/registrationAssignments' (ReadOnly, DeployTimeConstant)

## RegistrationAssignmentProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **registrationDefinition**: schemas:4_registrationDefinition (ReadOnly)
* **registrationDefinitionId**: string (Required)

## schemas:4_registrationDefinition
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **plan**: Plan
* **properties**: schemas:4_registrationDefinition_properties
* **type**: string (ReadOnly)

## Plan
### Properties
* **name**: string (Required)
* **product**: string (Required)
* **publisher**: string (Required)
* **version**: string (Required)

## schemas:4_registrationDefinition_properties
### Properties
* **authorizations**: Authorization[]
* **description**: string
* **managedByTenantId**: string
* **managedByTenantName**: string
* **manageeTenantId**: string
* **manageeTenantName**: string
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating'
* **registrationDefinitionName**: string

## Authorization
### Properties
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)

## Microsoft.ManagedServices/registrationDefinitions
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **plan**: Plan
* **properties**: RegistrationDefinitionProperties
* **type**: 'Microsoft.ManagedServices/registrationDefinitions' (ReadOnly, DeployTimeConstant)

## RegistrationDefinitionProperties
### Properties
* **authorizations**: Authorization[] (Required)
* **description**: string
* **managedByTenantId**: string (Required)
* **managedByTenantName**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **registrationDefinitionName**: string

