# Microsoft.Authorization @ 2022-08-01-preview

## Resource Microsoft.Authorization/roleManagementAlertConfigurations@2022-08-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2022-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertConfigurationProperties](#alertconfigurationproperties) (ReadOnly): Alert configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/roleManagementAlertConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleManagementAlertDefinitions@2022-08-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2022-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertDefinitionProperties](#alertdefinitionproperties) (ReadOnly): Alert definition properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/roleManagementAlertDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleManagementAlerts@2022-08-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2022-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): Alert properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/roleManagementAlerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/roleManagementAlerts/alertIncidents@2022-08-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2022-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertIncidentProperties](#alertincidentproperties) (ReadOnly): Alert incident properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/roleManagementAlerts/alertIncidents' (ReadOnly, DeployTimeConstant): The resource type

## AlertConfiguration
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [AlertConfigurationProperties](#alertconfigurationproperties): Alert configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## AlertConfigurationProperties
* **Discriminator**: alertConfigurationType

### Base Properties
* **alertDefinition**: [AlertDefinition](#alertdefinition) (ReadOnly): The alert definition.
* **alertDefinitionId**: string (ReadOnly): The alert definition ID.
* **isEnabled**: bool: True if the alert is enabled, false will disable the scanning for the specific alert.
* **scope**: string (ReadOnly): The alert scope.

### AzureRolesAssignedOutsidePimAlertConfigurationProperties
#### Properties
* **alertConfigurationType**: 'AzureRolesAssignedOutsidePimAlertConfiguration' (Required): The alert configuration type.

### DuplicateRoleCreatedAlertConfigurationProperties
#### Properties
* **alertConfigurationType**: 'DuplicateRoleCreatedAlertConfiguration' (Required): The alert configuration type.

### TooManyOwnersAssignedToResourceAlertConfigurationProperties
#### Properties
* **alertConfigurationType**: 'TooManyOwnersAssignedToResourceAlertConfiguration' (Required): The alert configuration type.
* **thresholdNumberOfOwners**: int: The threshold number of owners.
* **thresholdPercentageOfOwnersOutOfAllRoleMembers**: int: The threshold percentage of owners out of all role members.

### TooManyPermanentOwnersAssignedToResourceAlertConfigurationProperties
#### Properties
* **alertConfigurationType**: 'TooManyPermanentOwnersAssignedToResourceAlertConfiguration' (Required): The alert configuration type.
* **thresholdNumberOfPermanentOwners**: int: The threshold number of permanent owners.
* **thresholdPercentageOfPermanentOwnersOutOfAllOwners**: int: The threshold percentage of permanent owners out of all owners.


## AlertDefinition
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [AlertDefinitionProperties](#alertdefinitionproperties): Alert definition properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## AlertDefinitionProperties
### Properties
* **description**: string (ReadOnly): The alert description.
* **displayName**: string (ReadOnly): The alert display name.
* **howToPrevent**: string (ReadOnly): The ways to prevent the alert.
* **isConfigurable**: bool (ReadOnly): True if the alert configuration can be configured; false, otherwise.
* **isRemediatable**: bool (ReadOnly): True if the alert can be remediated; false, otherwise.
* **mitigationSteps**: string (ReadOnly): The methods to mitigate the alert.
* **scope**: string (ReadOnly): The alert scope.
* **securityImpact**: string (ReadOnly): Security impact of the alert.
* **severityLevel**: 'High' | 'Low' | 'Medium' | string (ReadOnly): Severity level of the alert.

## AlertIncident
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [AlertIncidentProperties](#alertincidentproperties): Alert incident properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## AlertIncidentProperties
* **Discriminator**: alertIncidentType

### Base Properties

### AzureRolesAssignedOutsidePimAlertIncidentProperties
#### Properties
* **alertIncidentType**: 'AzureRolesAssignedOutsidePimAlertIncident' (Required): The alert incident type.
* **assigneeDisplayName**: string (ReadOnly): The assignee display name.
* **assigneeId**: string (ReadOnly): The assignee ID.
* **assigneeUserPrincipalName**: string (ReadOnly): The assignee user principal name.
* **assignmentActivatedDate**: string (ReadOnly): The date the assignment was activated.
* **requestorDisplayName**: string (ReadOnly): The requestor display name.
* **requestorId**: string (ReadOnly): The requestor ID.
* **requestorUserPrincipalName**: string (ReadOnly): The requestor user principal name.
* **roleDefinitionId**: string (ReadOnly): The role definition ID.
* **roleDisplayName**: string (ReadOnly): The role display name.
* **roleTemplateId**: string (ReadOnly): The role template ID.

### DuplicateRoleCreatedAlertIncidentProperties
#### Properties
* **alertIncidentType**: 'DuplicateRoleCreatedAlertIncident' (Required): The alert incident type.
* **duplicateRoles**: string (ReadOnly): The duplicate roles.
* **reason**: string (ReadOnly): The reason for the incident.
* **roleName**: string (ReadOnly): The role name.

### TooManyOwnersAssignedToResourceAlertIncidentProperties
#### Properties
* **alertIncidentType**: 'TooManyOwnersAssignedToResourceAlertIncident' (Required): The alert incident type.
* **assigneeName**: string (ReadOnly): The assignee name.
* **assigneeType**: string (ReadOnly): The assignee type.

### TooManyPermanentOwnersAssignedToResourceAlertIncidentProperties
#### Properties
* **alertIncidentType**: 'TooManyPermanentOwnersAssignedToResourceAlertIncident' (Required): The alert incident type.
* **assigneeName**: string (ReadOnly): The assignee name.
* **assigneeType**: string (ReadOnly): The assignee type.


## AlertProperties
### Properties
* **alertConfiguration**: [AlertConfiguration](#alertconfiguration) (ReadOnly): The alert configuration.
* **alertDefinition**: [AlertDefinition](#alertdefinition) (ReadOnly): The alert definition.
* **alertIncidents**: [AlertIncident](#alertincident)[] (ReadOnly): The alert incidents.
* **incidentCount**: int (ReadOnly): The number of generated incidents of the alert.
* **isActive**: bool: False by default; true if the alert is active.
* **lastModifiedDateTime**: string (ReadOnly): The date time when the alert configuration was updated or new incidents were generated.
* **lastScannedDateTime**: string (ReadOnly): The date time when the alert was last scanned.
* **scope**: string (ReadOnly): The alert scope.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

