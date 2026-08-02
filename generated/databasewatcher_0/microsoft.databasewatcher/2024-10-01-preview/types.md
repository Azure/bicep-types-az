# Microsoft.DatabaseWatcher @ 2024-10-01-preview

## Resource Microsoft.DatabaseWatcher/watchers@2024-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9]{1}[a-zA-Z0-9-_]{3,60}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WatcherProperties](#watcherproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DatabaseWatcher/watchers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DatabaseWatcher/watchers/alertRuleResources@2024-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]{1}[a-zA-Z0-9-_.]{0,62}[a-zA-Z0-9_]{1}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AlertRuleResourceProperties](#alertruleresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DatabaseWatcher/watchers/alertRuleResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DatabaseWatcher/watchers/healthValidations@2024-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]{1}[a-zA-Z0-9-_.]{0,62}[a-zA-Z0-9_]{1}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HealthValidationProperties](#healthvalidationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DatabaseWatcher/watchers/healthValidations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DatabaseWatcher/watchers/sharedPrivateLinkResources@2024-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]{1}[a-zA-Z0-9-_.]{0,62}[a-zA-Z0-9_]{1}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DatabaseWatcher/watchers/sharedPrivateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DatabaseWatcher/watchers/targets@2024-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]{1}[a-zA-Z0-9-_]{3,60}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetProperties](#targetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DatabaseWatcher/watchers/targets' (ReadOnly, DeployTimeConstant): The resource type

## Function start (Microsoft.DatabaseWatcher/watchers@2024-10-01-preview)
* **Resource**: Microsoft.DatabaseWatcher/watchers
* **ApiVersion**: 2024-10-01-preview
* **Output**: [Watcher](#watcher)

## Function startValidation (Microsoft.DatabaseWatcher/watchers/healthValidations@2024-10-01-preview)
* **Resource**: Microsoft.DatabaseWatcher/watchers/healthValidations
* **ApiVersion**: 2024-10-01-preview
* **Output**: [HealthValidation](#healthvalidation)

## Function stop (Microsoft.DatabaseWatcher/watchers@2024-10-01-preview)
* **Resource**: Microsoft.DatabaseWatcher/watchers
* **ApiVersion**: 2024-10-01-preview
* **Output**: [Watcher](#watcher)

## AlertRuleResourceProperties
### Properties
* **alertRuleResourceId**: string (Required): The resource ID of the alert rule resource.
* **alertRuleTemplateId**: string (Required): The template ID associated with alert rule resource.
* **alertRuleTemplateVersion**: string (Required): The alert rule template version.
* **createdWithProperties**: 'CreatedWithActionGroup' | 'None' | string (Required): The properties with which the alert rule resource was created.
* **creationTime**: string (Required): The creation time of the alert rule resource.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the alert rule resource.

## Datastore
### Properties
* **adxClusterResourceId**: string: The Azure resource ID of an Azure Data Explorer cluster.
* **kustoClusterDisplayName**: string: The Kusto cluster display name.
* **kustoClusterUri**: string (Required): The Kusto cluster URI.
* **kustoDatabaseName**: string (Required): The name of a Kusto database.
* **kustoDataIngestionUri**: string (Required): The Kusto data ingestion URI.
* **kustoManagementUrl**: string (Required): The Kusto management URL.
* **kustoOfferingType**: 'adx' | 'fabric' | 'free' | string (Required): The type of a Kusto offering.

## HealthValidation
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [HealthValidationProperties](#healthvalidationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## HealthValidationProperties
### Properties
* **endTime**: string (Required, ReadOnly): The end time of health validation, in UTC.
* **issues**: [ValidationIssue](#validationissue)[] (Required, ReadOnly): The list of issues found by health validation.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the health validation resource.
* **startTime**: string (Required, ReadOnly): The start time of health validation, in UTC.
* **status**: 'Canceled' | 'Failed' | 'NotStarted' | 'Running' | 'Succeeded' | 'TimedOut' | string (Required, ReadOnly): The current health validation status.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## SharedPrivateLinkResourceProperties
### Properties
* **dnsZone**: string: The DNS zone segment to be included in the DNS name of the shared private link. Value is required for Azure Data Explorer clusters and SQL managed instances, and must be omitted for SQL logical servers and key vaults. The value is the second segment of the host FQDN name of the resource that the shared private link resource is for. For example: if the host name is 'adx-cluster-21187695.eastus.kusto.windows.net', then the value is 'eastus'; if the host name is 'sql-mi-23961134.767d5869f605.database.windows.net', then the value is '767d5869f605'.
* **groupId**: string (Required): The group id from the provider of resource the shared private link resource is for.
* **privateLinkResourceId**: string (Required): The resource ID of the resource the shared private link resource is for.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **requestMessage**: string (Required): The request message for requesting approval of the shared private link resource.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (ReadOnly): Status of the shared private link resource. Can be Pending, Approved, Rejected or Disconnected.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TargetProperties
* **Discriminator**: targetType

### Base Properties
* **connectionServerName**: string {maxLength: 200} (Required): The FQDN host name of the server to use in the connection string when connecting to a target. For example, for an Azure SQL logical server in the Azure commercial cloud, the value might be 'sql-logical-server-22092780.database.windows.net'; for an Azure SQL managed instance in the Azure commercial cloud, the value might be 'sql-mi-39441134.767d5869f605.database.windows.net'. Port number and instance name must be specified separately.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **targetAuthenticationType**: 'Aad' | 'Sql' | string (Required): The type of authentication to use when connecting to a target.
* **targetVault**: [VaultSecret](#vaultsecret): To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.

### SqlDbSingleDatabaseTargetProperties
#### Properties
* **readIntent**: bool: Set to true to monitor a high availability replica of specified target, if any.
* **sqlDbResourceId**: string (Required): The Azure resource ID of an Azure SQL DB database target.
* **targetType**: 'SqlDb' (Required): Discriminator property for TargetProperties.

### SqlDbElasticPoolTargetProperties
#### Properties
* **anchorDatabaseResourceId**: string (Required): The Azure resource ID of the anchor database used to connect to an elastic pool.
* **readIntent**: bool: Set to true to monitor a high availability replica of specified target, if any.
* **sqlEpResourceId**: string (Required): The Azure resource ID of an Azure SQL DB elastic pool target.
* **targetType**: 'SqlEp' (Required): Discriminator property for TargetProperties.

### SqlMiTargetProperties
#### Properties
* **connectionTcpPort**: int: The TCP port number to optionally use in the connection string when connecting to an Azure SQL Managed Instance target.
* **readIntent**: bool: Set to true to monitor a high availability replica of specified target, if any.
* **sqlMiResourceId**: string (Required): The Azure resource ID of an Azure SQL Managed Instance target.
* **targetType**: 'SqlMi' (Required): Discriminator property for TargetProperties.

### SqlVmTargetProperties
#### Properties
* **connectionTcpPort**: int: The TCP port number to optionally use in the connection string when connecting to an Azure SQL VM target.
* **sqlNamedInstanceName**: string: The SQL instance name to optionally use in the connection string when connecting to an Azure SQL VM target.
* **sqlVmResourceId**: string (Required): The Azure resource ID of an Azure SQL VM target.
* **targetType**: 'SqlVm' (Required): Discriminator property for TargetProperties.


## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## ValidationIssue
### Properties
* **additionalDetails**: string (ReadOnly): The additional details for the issue.
* **errorCode**: string (Required, ReadOnly): The error code of the issue.
* **errorMessage**: string (Required, ReadOnly): The error message of the issue.
* **recommendationMessage**: string (Required, ReadOnly): The recommendation for resolving the issue.
* **recommendationUrl**: string (ReadOnly): The URL related to resolving the issue.
* **relatedResourceId**: string (ReadOnly): The resource ID of the Azure resource related to the issue.
* **relatedResourceType**: string (ReadOnly): The type of the Azure resource related to the issue.

## VaultSecret
### Properties
* **akvResourceId**: string: The Azure resource ID of the Key Vault instance storing database authentication secrets.
* **akvTargetPassword**: string {pattern: "^[a-zA-Z0-9-]{1,127}$"}: The path to the Key Vault secret storing the password for authentication to a target.
* **akvTargetUser**: string {pattern: "^[a-zA-Z0-9-]{1,127}$"}: The path to the Key Vault secret storing the login name (aka user name, aka account name) for authentication to a target.

## Watcher
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [WatcherProperties](#watcherproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## WatcherProperties
### Properties
* **datastore**: [Datastore](#datastore): The data store for collected monitoring data.
* **defaultAlertRuleIdentityResourceId**: string: The resource ID of a user-assigned managed identity that will be assigned to a new alert rule.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource watcher.
* **status**: 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): The monitoring collection status of the watcher.

