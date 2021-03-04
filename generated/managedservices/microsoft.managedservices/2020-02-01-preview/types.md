# Microsoft.ManagedServices @ 2020-02-01-preview

## Resource Microsoft.ManagedServices/registrationAssignments@2020-02-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistrationAssignmentProperties
* **type**: 'Microsoft.ManagedServices/registrationAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ManagedServices/registrationDefinitions@2020-02-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **plan**: Plan
* **properties**: RegistrationDefinitionProperties
* **type**: 'Microsoft.ManagedServices/registrationDefinitions' (ReadOnly, DeployTimeConstant)

## RegistrationAssignmentProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **registrationDefinition**: RegistrationAssignmentPropertiesRegistrationDefinition (ReadOnly)
* **registrationDefinitionId**: string (Required)

## RegistrationAssignmentPropertiesRegistrationDefinition
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **plan**: Plan
* **properties**: RegistrationAssignmentPropertiesRegistrationDefinitionProperties
* **type**: string (ReadOnly)

## Plan
### Properties
* **name**: string (Required)
* **product**: string (Required)
* **publisher**: string (Required)
* **version**: string (Required)

## RegistrationAssignmentPropertiesRegistrationDefinitionProperties
### Properties
* **authorizations**: Authorization[]
* **description**: string
* **eligibleAuthorizations**: EligibleAuthorization[]
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

## EligibleAuthorization
### Properties
* **justInTimeAccessPolicy**: JustInTimeAccessPolicy
* **principalId**: string (Required)
* **principalIdDisplayName**: string
* **roleDefinitionId**: string (Required)

## JustInTimeAccessPolicy
### Properties
* **maximumActivationDuration**: any
* **multiFactorAuthProvider**: 'Azure' | 'None' (Required)

## RegistrationDefinitionProperties
### Properties
* **authorizations**: Authorization[] (Required)
* **description**: string
* **eligibleAuthorizations**: EligibleAuthorization[]
* **managedByTenantId**: string (Required)
* **managedByTenantName**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **registrationDefinitionName**: string

