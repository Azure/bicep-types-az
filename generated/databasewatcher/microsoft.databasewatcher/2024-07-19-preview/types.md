# Microsoft.DatabaseWatcher @ 2024-07-19-preview

## Resource Microsoft.DatabaseWatcher/watchers@2024-07-19-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-19-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9]{1}[a-zA-Z0-9-_]{3,60}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WatcherProperties](#watcherproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DatabaseWatcher/watchers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DatabaseWatcher/watchers/alertRuleResources@2024-07-19-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-19-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]{1}[a-zA-Z0-9-_.]{0,62}[a-zA-Z0-9_]{1}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AlertRuleResourceProperties](#alertruleresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DatabaseWatcher/watchers/alertRuleResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DatabaseWatcher/watchers/sharedPrivateLinkResources@2024-07-19-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-19-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]{1}[a-zA-Z0-9-_.]{0,62}[a-zA-Z0-9_]{1}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DatabaseWatcher/watchers/sharedPrivateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DatabaseWatcher/watchers/targets@2024-07-19-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-19-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]{1}[a-zA-Z0-9-_]{3,60}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TargetProperties](#targetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DatabaseWatcher/watchers/targets' (ReadOnly, DeployTimeConstant): The resource type

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
* **adxClusterResourceId**: string: The Azure ResourceId of an Azure Data Explorer cluster.
* **kustoClusterDisplayName**: string: The Kusto cluster display name.
* **kustoClusterUri**: string (Required): The Kusto cluster URI.
* **kustoDatabaseName**: string (Required): The name of a Kusto database.
* **kustoDataIngestionUri**: string (Required): The Kusto data ingestion URI.
* **kustoManagementUrl**: string (Required): The Kusto management URL.
* **kustoOfferingType**: 'adx' | 'fabric' | 'free' | string (Required): The type of a Kusto offering.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## SharedPrivateLinkResourceProperties
### Properties
* **dnsZone**: string: The DNS zone to be included in the DNS name of the shared private link. Value is service-specific.
* **groupId**: string (Required): The group id from the provider of resource the shared private link resource is for.
* **privateLinkResourceId**: string (Required): The resource id of the resource the shared private link resource is for.
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
* **connectionServerName**: string {maxLength: 200} (Required): The server name to use in the connection string when connecting to a target. Port number and instance name must be specified separately.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **targetAuthenticationType**: 'Aad' | 'Sql' | string (Required): The type of authentication to use when connecting to a target.
* **targetVault**: [VaultSecret](#vaultsecret): To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.

### SqlDbSingleDatabaseTargetProperties
#### Properties
* **readIntent**: bool: Set to true to monitor a high availability replica of specified target, if any.
* **sqlDbResourceId**: string (Required): The Azure ResourceId of an Azure SQL DB single database target.
* **targetType**: 'SqlDb' (Required): Discriminator property for TargetProperties.

### SqlDbElasticPoolTargetProperties
#### Properties
* **anchorDatabaseResourceId**: string (Required): The Azure ResourceId of the anchor database used to connect to an elastic pool.
* **readIntent**: bool: Set to true to monitor a high availability replica of specified target, if any.
* **sqlEpResourceId**: string (Required): The Azure ResourceId of an Azure SQL DB elastic pool target.
* **targetType**: 'SqlEp' (Required): Discriminator property for TargetProperties.

### SqlMiTargetProperties
#### Properties
* **connectionTcpPort**: int: The TCP port number to optionally use in the connection string when connecting to an Azure SQL Managed Instance target.
* **readIntent**: bool: Set to true to monitor a high availability replica of specified target, if any.
* **sqlMiResourceId**: string (Required): The Azure ResourceId of an Azure SQL Managed Instance target.
* **targetType**: 'SqlMi' (Required): Discriminator property for TargetProperties.

### SqlVmTargetProperties
#### Properties
* **connectionTcpPort**: int: The TCP port number to optionally use in the connection string when connecting to an Azure SQL VM target.
* **sqlNamedInstanceName**: string: The SQL instance name to optionally use in the connection string when connecting to an Azure SQL VM target.
* **sqlVmResourceId**: string (Required): The Azure ResourceId of an Azure SQL VM target.
* **targetType**: 'SqlVm' (Required): Discriminator property for TargetProperties.


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

## VaultSecret
### Properties
* **akvResourceId**: string: The Azure ResourceId of the Key Vault instance storing database authentication secrets.
* **akvTargetPassword**: string {pattern: "^[a-zA-Z0-9-]{1,127}$"}: The path to the Key Vault secret storing the password for authentication to a target.
* **akvTargetUser**: string {pattern: "^[a-zA-Z0-9-]{1,127}$"}: The path to the Key Vault secret storing the login name (aka user name, aka account name) for authentication to a target.

## WatcherProperties
### Properties
* **datastore**: [Datastore](#datastore): The data store for collected monitoring data.
* **defaultAlertRuleIdentityResourceId**: string: The resource ID of a user-assigned managed identity that will be assigned to a new alert rule.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource watcher.
* **status**: 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): The monitoring collection status of the watcher.

