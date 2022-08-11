# Microsoft.DBforMySQL @ 2017-12-01-preview

## Resource Microsoft.DBforMySQL/servers@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity) (ReadOnly): The Azure Active Directory identity of the server.
* **location**: string (Required): The location the resource resides in.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerPropertiesForCreateOrServerProperties](#serverpropertiesforcreateorserverproperties) (Required): Properties of the server.
* **sku**: [Sku](#sku): The SKU (pricing tier) of the server.
* **tags**: [ServerForCreateTags](#serverforcreatetags): Application-specific metadata in the form of key-value pairs.
* **type**: 'Microsoft.DBforMySQL/servers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/administrators@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'activeDirectory' (Required, DeployTimeConstant): The resource name
* **properties**: [ServerAdministratorProperties](#serveradministratorproperties): Properties of the server AAD administrator.
* **type**: 'Microsoft.DBforMySQL/servers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/configurations@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): The properties of a configuration.
* **type**: 'Microsoft.DBforMySQL/servers/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/databases@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The properties of a database.
* **type**: 'Microsoft.DBforMySQL/servers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/firewallRules@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a firewall rule.
* **type**: 'Microsoft.DBforMySQL/servers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/securityAlertPolicies@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties): Resource properties.
* **type**: 'Microsoft.DBforMySQL/servers/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/virtualNetworkRules@2017-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkRuleProperties](#virtualnetworkruleproperties): Resource properties.
* **type**: 'Microsoft.DBforMySQL/servers/virtualNetworkRules' (ReadOnly, DeployTimeConstant): The resource type

## ConfigurationProperties
### Properties
* **allowedValues**: string (ReadOnly): Allowed values of the configuration.
* **dataType**: string (ReadOnly): Data type of the configuration.
* **defaultValue**: string (ReadOnly): Default value of the configuration.
* **description**: string (ReadOnly): Description of the configuration.
* **source**: string: Source of the configuration.
* **value**: string: Value of the configuration.

## DatabaseProperties
### Properties
* **charset**: string: The charset of the database.
* **collation**: string: The collation of the database.

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required): The end IP address of the server firewall rule. Must be IPv4 format.
* **startIpAddress**: string (Required): The start IP address of the server firewall rule. Must be IPv4 format.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty): Connection state of the private endpoint connection.
* **provisioningState**: 'Approving' | 'Dropping' | 'Failed' | 'Ready' | 'Rejecting' | string (ReadOnly): State of the private endpoint connection.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: 'None' | string (ReadOnly): The actions required for private link service connection.
* **description**: string (Required): The private link service connection description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (Required): The private link service connection status.

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The Azure Active Directory principal id.
* **tenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'SystemAssigned' | string: The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.

## SecurityAlertPolicyProperties
### Properties
* **disabledAlerts**: string[]: Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly
* **emailAccountAdmins**: bool: Specifies that the alert is sent to the account administrators.
* **emailAddresses**: string[]: Specifies an array of e-mail addresses to which the alert is sent.
* **retentionDays**: int: Specifies the number of days to keep in the Threat Detection audit logs.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the policy, whether it is enabled or disabled.
* **storageAccountAccessKey**: string: Specifies the identifier key of the Threat Detection audit storage account.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.

## ServerAdministratorProperties
### Properties
* **administratorType**: 'ActiveDirectory' (Required): The type of administrator.
* **login**: string (Required): The server administrator login account name.
* **sid**: string (Required): The server administrator Sid (Secure ID).
* **tenantId**: string (Required): The server Active Directory Administrator tenant id.

## ServerForCreateTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerPrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Resource Id of the private endpoint connection.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Private endpoint connection properties

## ServerPropertiesForCreateOrServerProperties
* **Discriminator**: createMode

### Base Properties
* **administratorLogin**: string (ReadOnly): The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
* **byokEnforcement**: string (ReadOnly): Status showing whether the server data encryption is enabled with customer-managed keys.
* **earliestRestoreDate**: string (ReadOnly): Earliest restore point creation time (ISO8601 format)
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of a server.
* **infrastructureEncryption**: 'Disabled' | 'Enabled' | string (ReadOnly): Status showing whether the server enabled infrastructure encryption.
* **masterServerId**: string (ReadOnly): The master server id of a replica server.
* **minimalTlsVersion**: 'TLS1_0' | 'TLS1_1' | 'TLS1_2' | 'TLSEnforcementDisabled' | string: Enforce a minimal Tls version for the server.
* **privateEndpointConnections**: [ServerPrivateEndpointConnection](#serverprivateendpointconnection)[] (ReadOnly): List of private endpoint connections on a server
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string (ReadOnly): Whether or not public endpoint access is allowed for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
* **replicaCapacity**: int (ReadOnly): The maximum number of replicas that a master server can have.
* **replicationRole**: string (ReadOnly): The replication role of the server.
* **sslEnforcement**: 'Disabled' | 'Enabled': Enable ssl enforcement or not when connect to server.
* **storageProfile**: [StorageProfile](#storageprofile): Storage profile of a server.
* **userVisibleState**: 'Disabled' | 'Dropping' | 'Inaccessible' | 'Ready' | string (ReadOnly): A state of a server that is visible to user.
* **version**: '5.6' | '5.7' | '8.0' | string: Server version.

### ServerPropertiesForDefaultCreate
#### Properties
* **administratorLogin**: string (Required, WriteOnly): The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
* **administratorLoginPassword**: string (Required, WriteOnly): The password of the administrator login.
* **createMode**: 'Default' (Required): The mode to create a new server.

### ServerPropertiesForGeoRestore
#### Properties
* **createMode**: 'GeoRestore' (Required): The mode to create a new server.
* **sourceServerId**: string (Required, WriteOnly): The source server id to restore from.

### ServerPropertiesForRestore
#### Properties
* **createMode**: 'PointInTimeRestore' (Required): The mode to create a new server.
* **restorePointInTime**: string (Required, WriteOnly): Restore point creation time (ISO8601 format), specifying the time to restore from.
* **sourceServerId**: string (Required, WriteOnly): The source server id to restore from.

### ServerPropertiesForReplica
#### Properties
* **createMode**: 'Replica' (Required): The mode to create a new server.
* **sourceServerId**: string (Required, WriteOnly): The master server id to create replica from.


## Sku
### Properties
* **capacity**: int: The scale up/out capacity, representing server's compute units.
* **family**: string: The family of hardware.
* **name**: string (Required): The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8.
* **size**: string: The size code, to be interpreted by resource as appropriate.
* **tier**: 'Basic' | 'GeneralPurpose' | 'MemoryOptimized' | string: The tier of the particular SKU, e.g. Basic.

## StorageProfile
### Properties
* **backupRetentionDays**: int: Backup retention days for the server.
* **geoRedundantBackup**: 'Disabled' | 'Enabled' | string: Enable Geo-redundant or not for server backup.
* **storageAutogrow**: 'Disabled' | 'Enabled' | string: Enable Storage Auto Grow.
* **storageMB**: int: Max storage allowed for a server.

## VirtualNetworkRuleProperties
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool: Create firewall rule before the virtual network has vnet service endpoint enabled.
* **state**: 'Deleting' | 'InProgress' | 'Initializing' | 'Ready' | 'Unknown' | string (ReadOnly): Virtual Network Rule State
* **virtualNetworkSubnetId**: string (Required): The ARM resource id of the virtual network subnet.

