# Microsoft.ManagedServices @ 2019-09-01

## Resource Microsoft.ManagedServices/marketplaceRegistrationDefinitions@2019-09-01 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan) (ReadOnly): Plan details for the managed services.
* **properties**: [MarketplaceRegistrationDefinitionProperties](#marketplaceregistrationdefinitionproperties) (ReadOnly): Properties of a marketplace registration definition.
* **type**: 'Microsoft.ManagedServices/marketplaceRegistrationDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ManagedServices/registrationAssignments@2019-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegistrationAssignmentProperties](#registrationassignmentproperties): Properties of a registration assignment.
* **type**: 'Microsoft.ManagedServices/registrationAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ManagedServices/registrationDefinitions@2019-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Plan details for the managed services.
* **properties**: [RegistrationDefinitionProperties](#registrationdefinitionproperties): Properties of a registration definition.
* **type**: 'Microsoft.ManagedServices/registrationDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Authorization
### Properties
* **delegatedRoleDefinitionIds**: string[]: The delegatedRoleDefinitionIds field is required when the roleDefinitionId refers to the User Access Administrator Role. It is the list of role definition ids which define all the permissions that the user in the authorization can assign to other security groups/service principals/users.
* **principalId**: string (Required): Principal Id of the security group/service principal/user that would be assigned permissions to the projected subscription
* **principalIdDisplayName**: string: Display name of the principal Id.
* **roleDefinitionId**: string (Required): The role definition identifier. This role will define all the permissions that the security group/service principal/user must have on the projected subscription. This role cannot be an owner role.

## MarketplaceRegistrationDefinitionProperties
### Properties
* **authorizations**: [Authorization](#authorization)[] (Required): Authorization tuple containing principal id of the user/security group or service principal and id of the build-in role.
* **managedByTenantId**: string (Required): Id of the managedBy tenant.
* **offerDisplayName**: string: The marketplace offer display name.
* **planDisplayName**: string: The marketplace plan display name.
* **publisherDisplayName**: string: The marketplace publisher display name.

## Plan
### Properties
* **name**: string (Required): The plan name.
* **product**: string (Required): The product code.
* **publisher**: string (Required): The publisher ID.
* **version**: string (Required): The plan's version.

## RegistrationAssignmentProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Current state of the registration assignment.
* **registrationDefinition**: [RegistrationAssignmentPropertiesRegistrationDefinition](#registrationassignmentpropertiesregistrationdefinition) (ReadOnly): Registration definition inside registration assignment.
* **registrationDefinitionId**: string (Required): Fully qualified path of the registration definition.

## RegistrationAssignmentPropertiesRegistrationDefinition
### Properties
* **id**: string (ReadOnly): Fully qualified path of the registration definition.
* **name**: string (ReadOnly): Name of the registration definition.
* **plan**: [Plan](#plan): Plan details for the managed services.
* **properties**: [RegistrationAssignmentPropertiesRegistrationDefinitionProperties](#registrationassignmentpropertiesregistrationdefinitionproperties): Properties of registration definition inside registration assignment.
* **type**: string (ReadOnly): Type of the resource (Microsoft.ManagedServices/registrationDefinitions).

## RegistrationAssignmentPropertiesRegistrationDefinitionProperties
### Properties
* **authorizations**: [Authorization](#authorization)[]: Authorization tuple containing principal id of the user/security group or service principal and id of the build-in role.
* **description**: string: Description of the registration definition.
* **managedByTenantId**: string: Id of the managedBy tenant.
* **managedByTenantName**: string: Name of the managedBy tenant.
* **manageeTenantId**: string: Id of the home tenant.
* **manageeTenantName**: string: Name of the home tenant.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' | string: Current state of the registration definition.
* **registrationDefinitionName**: string: Name of the registration definition.

## RegistrationDefinitionProperties
### Properties
* **authorizations**: [Authorization](#authorization)[] (Required): Authorization tuple containing principal id of the user/security group or service principal and id of the build-in role.
* **description**: string: Description of the registration definition.
* **managedByTenantId**: string (Required): Id of the managedBy tenant.
* **managedByTenantName**: string (ReadOnly): Name of the managedBy tenant.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Current state of the registration definition.
* **registrationDefinitionName**: string: Name of the registration definition.

