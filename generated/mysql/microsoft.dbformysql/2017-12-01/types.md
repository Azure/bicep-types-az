# Microsoft.DBforMySQL @ 2017-12-01

## Resource Microsoft.DBforMySQL/servers@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): Azure Active Directory identity configuration for a resource.
* **location**: string (Required): The location the resource resides in.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerPropertiesForCreate](#serverpropertiesforcreate) (Required): The properties used to create a new server.
* **sku**: [Sku](#sku): Billing information related properties of a server.
* **tags**: [ServerForCreateTags](#serverforcreatetags): Application-specific metadata in the form of key-value pairs.
* **type**: 'Microsoft.DBforMySQL/servers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/administrators@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'activeDirectory' (Required, DeployTimeConstant): The resource name
* **properties**: [ServerAdministratorProperties](#serveradministratorproperties): The properties of an server Administrator.
* **type**: 'Microsoft.DBforMySQL/servers/administrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/configurations@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): The properties of a configuration.
* **type**: 'Microsoft.DBforMySQL/servers/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/databases@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The properties of a database.
* **type**: 'Microsoft.DBforMySQL/servers/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/firewallRules@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties) (Required): The properties of a server firewall rule.
* **type**: 'Microsoft.DBforMySQL/servers/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/securityAlertPolicies@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Default' (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties): Properties of a security alert policy.
* **type**: 'Microsoft.DBforMySQL/servers/securityAlertPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/virtualNetworkRules@2017-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkRuleProperties](#virtualnetworkruleproperties): Properties of a virtual network rule.
* **type**: 'Microsoft.DBforMySQL/servers/virtualNetworkRules' (ReadOnly, DeployTimeConstant): The resource type

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The Azure Active Directory principal id.
* **tenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'SystemAssigned': The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.

## ServerPropertiesForCreate
* **Discriminator**: createMode

### Base Properties
* **administratorLogin**: string (ReadOnly): The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
* **byokEnforcement**: string (ReadOnly): Status showing whether the server data encryption is enabled with customer-managed keys.
* **earliestRestoreDate**: string (ReadOnly): Earliest restore point creation time (ISO8601 format)
* **fullyQualifiedDomainName**: string (ReadOnly): The fully qualified domain name of a server.
* **infrastructureEncryption**: 'Disabled' | 'Enabled': Add a second layer of encryption for your data using new encryption algorithm which gives additional data protection. Value is optional but if passed in, must be 'Disabled' or 'Enabled'.
* **masterServerId**: string (ReadOnly): The master server id of a replica server.
* **minimalTlsVersion**: 'TLS1_0' | 'TLS1_1' | 'TLS1_2' | 'TLSEnforcementDisabled': Enforce a minimal Tls version for the server.
* **privateEndpointConnections**: [ServerPrivateEndpointConnection](#serverprivateendpointconnection)[] (ReadOnly): List of private endpoint connections on a server
* **publicNetworkAccess**: 'Disabled' | 'Enabled': Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
* **replicaCapacity**: int (ReadOnly): The maximum number of replicas that a master server can have.
* **replicationRole**: string (ReadOnly): The replication role of the server.
* **sslEnforcement**: 'Disabled' | 'Enabled': Enable ssl enforcement or not when connect to server.
* **storageProfile**: [StorageProfile](#storageprofile): Storage Profile properties of a server
* **userVisibleState**: 'Disabled' | 'Dropping' | 'Inaccessible' | 'Ready' (ReadOnly): A state of a server that is visible to user.
* **version**: '5.6' | '5.7' | '8.0': The version of a server.
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


## ServerPrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Resource Id of the private endpoint connection.
* **properties**: [ServerPrivateEndpointConnectionProperties](#serverprivateendpointconnectionproperties) (ReadOnly): Properties of a private endpoint connection.

## ServerPrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty) (ReadOnly)
* **privateLinkServiceConnectionState**: [ServerPrivateLinkServiceConnectionStateProperty](#serverprivatelinkserviceconnectionstateproperty) (ReadOnly)
* **provisioningState**: 'Approving' | 'Dropping' | 'Failed' | 'Ready' | 'Rejecting' (ReadOnly): State of the private endpoint connection.

## PrivateEndpointProperty
### Properties
* **id**: string (ReadOnly): Resource id of the private endpoint.

## ServerPrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: 'None' (ReadOnly): The actions required for private link service connection.
* **description**: string (ReadOnly): The private link service connection description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (ReadOnly): The private link service connection status.

## StorageProfile
### Properties
* **backupRetentionDays**: int: Backup retention days for the server.
* **geoRedundantBackup**: 'Disabled' | 'Enabled': Enable Geo-redundant or not for server backup.
* **storageAutogrow**: 'Disabled' | 'Enabled': Enable Storage Auto Grow.
* **storageMB**: int: Max storage allowed for a server.

## Sku
### Properties
* **capacity**: int: The scale up/out capacity, representing server's compute units.
* **family**: string: The family of hardware.
* **name**: string (Required): The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8.
* **size**: string: The size code, to be interpreted by resource as appropriate.
* **tier**: 'Basic' | 'GeneralPurpose' | 'MemoryOptimized': The tier of the particular SKU, e.g. Basic.

## ServerForCreateTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerAdministratorProperties
### Properties
* **administratorType**: 'ActiveDirectory' (Required): The type of administrator.
* **login**: string (Required): The server administrator login account name.
* **sid**: string (Required): The server administrator Sid (Secure ID).
* **tenantId**: string (Required): The server Active Directory Administrator tenant id.

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

## SecurityAlertPolicyProperties
### Properties
* **disabledAlerts**: string[]: Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly
* **emailAccountAdmins**: bool: Specifies that the alert is sent to the account administrators.
* **emailAddresses**: string[]: Specifies an array of e-mail addresses to which the alert is sent.
* **retentionDays**: int: Specifies the number of days to keep in the Threat Detection audit logs.
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the policy, whether it is enabled or disabled.
* **storageAccountAccessKey**: string: Specifies the identifier key of the Threat Detection audit storage account.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.

## VirtualNetworkRuleProperties
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool: Create firewall rule before the virtual network has vnet service endpoint enabled.
* **state**: 'Deleting' | 'InProgress' | 'Initializing' | 'Ready' | 'Unknown' (ReadOnly): Virtual Network Rule State
* **virtualNetworkSubnetId**: string (Required): The ARM resource id of the virtual network subnet.

