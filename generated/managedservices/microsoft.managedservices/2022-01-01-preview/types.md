# Microsoft.ManagedServices @ 2022-01-01-preview

## Resource Microsoft.ManagedServices/registrationAssignments@2022-01-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegistrationAssignmentProperties](#registrationassignmentproperties): The properties of a registration assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The metadata for the registration assignment resource.
* **type**: 'Microsoft.ManagedServices/registrationAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ManagedServices/registrationDefinitions@2022-01-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): The details for the Managed Services offer’s plan in Azure Marketplace.
* **properties**: [RegistrationDefinitionProperties](#registrationdefinitionproperties): The properties of a registration definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The metadata for the registration assignment resource.
* **type**: 'Microsoft.ManagedServices/registrationDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Authorization
### Properties
* **delegatedRoleDefinitionIds**: string[]: The delegatedRoleDefinitionIds field is required when the roleDefinitionId refers to the User Access Administrator Role. It is the list of role definition ids which define all the permissions that the user in the authorization can assign to other principals.
* **principalId**: string (Required): The identifier of the Azure Active Directory principal.
* **principalIdDisplayName**: string: The display name of the Azure Active Directory principal.
* **roleDefinitionId**: string (Required): The identifier of the Azure built-in role that defines the permissions that the Azure Active Directory principal will have on the projected scope.

## EligibleApprover
### Properties
* **principalId**: string (Required): The identifier of the Azure Active Directory principal.
* **principalIdDisplayName**: string: The display name of the Azure Active Directory principal.

## EligibleAuthorization
### Properties
* **justInTimeAccessPolicy**: [JustInTimeAccessPolicy](#justintimeaccesspolicy): The just-in-time access policy setting.
* **principalId**: string (Required): The identifier of the Azure Active Directory principal.
* **principalIdDisplayName**: string: The display name of the Azure Active Directory principal.
* **roleDefinitionId**: string (Required): The identifier of the Azure built-in role that defines the permissions that the Azure Active Directory principal will have on the projected scope.

## JustInTimeAccessPolicy
### Properties
* **managedByTenantApprovers**: [EligibleApprover](#eligibleapprover)[]: The list of managedByTenant approvers for the eligible authorization.
* **maximumActivationDuration**: string: The maximum access duration in ISO 8601 format for just-in-time access requests.
* **multiFactorAuthProvider**: 'Azure' | 'None' | string (Required): The multi-factor authorization provider to be used for just-in-time access requests.

## Plan
### Properties
* **name**: string (Required): Azure Marketplace plan name.
* **product**: string (Required): Azure Marketplace product code.
* **publisher**: string (Required): Azure Marketplace publisher ID.
* **version**: string (Required): Azure Marketplace plan's version.

## RegistrationAssignmentProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the registration assignment.
* **registrationDefinition**: [RegistrationAssignmentPropertiesRegistrationDefinition](#registrationassignmentpropertiesregistrationdefinition) (ReadOnly): The registration definition associated with the registration assignment.
* **registrationDefinitionId**: string (Required): The fully qualified path of the registration definition.

## RegistrationAssignmentPropertiesRegistrationDefinition
### Properties
* **id**: string (ReadOnly): The fully qualified path of the registration definition.
* **name**: string (ReadOnly): The name of the registration definition.
* **plan**: [Plan](#plan): The details for the Managed Services offer’s plan in Azure Marketplace.
* **properties**: [RegistrationAssignmentPropertiesRegistrationDefinitionProperties](#registrationassignmentpropertiesregistrationdefinitionproperties): The properties of the registration definition associated with the registration assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The metadata for the registration definition resource.
* **type**: string (ReadOnly): The type of the Azure resource (Microsoft.ManagedServices/registrationDefinitions).

## RegistrationAssignmentPropertiesRegistrationDefinitionProperties
### Properties
* **authorizations**: [Authorization](#authorization)[]: The collection of authorization objects describing the access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant.
* **description**: string: The description of the registration definition.
* **eligibleAuthorizations**: [EligibleAuthorization](#eligibleauthorization)[]: The collection of eligible authorization objects describing the just-in-time access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant.
* **managedByTenantId**: string: The identifier of the managedBy tenant.
* **managedByTenantName**: string: The name of the managedBy tenant.
* **manageeTenantId**: string: The identifier of the managed tenant.
* **manageeTenantName**: string: The name of the managed tenant.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' | string: The current provisioning state of the registration definition.
* **registrationDefinitionName**: string: The name of the registration definition.

## RegistrationDefinitionProperties
### Properties
* **authorizations**: [Authorization](#authorization)[] (Required): The collection of authorization objects describing the access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant.
* **description**: string: The description of the registration definition.
* **eligibleAuthorizations**: [EligibleAuthorization](#eligibleauthorization)[]: The collection of eligible authorization objects describing the just-in-time access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant.
* **managedByTenantId**: string (Required): The identifier of the managedBy tenant.
* **managedByTenantName**: string (ReadOnly): The name of the managedBy tenant.
* **manageeTenantId**: string (ReadOnly): The identifier of the managed tenant.
* **manageeTenantName**: string (ReadOnly): The name of the managed tenant.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the registration definition.
* **registrationDefinitionName**: string: The name of the registration definition.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

