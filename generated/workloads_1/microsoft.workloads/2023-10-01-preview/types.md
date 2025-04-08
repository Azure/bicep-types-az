# Microsoft.Workloads @ 2023-10-01-preview

## Resource Microsoft.Workloads/monitors@2023-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The Managed service identity.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): SAP monitor properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProviderInstanceProperties](#providerinstanceproperties): Provider Instance properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Workloads/monitors/providerInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/monitors/sapLandscapeMonitor@2023-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SapLandscapeMonitorProperties](#saplandscapemonitorproperties): Sap Landscape Monitor properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Workloads/monitors/sapLandscapeMonitor' (ReadOnly, DeployTimeConstant): The resource type

## Error
### Properties
* **code**: string (ReadOnly): Server-defined set of error codes.
* **details**: [Error](#error)[] (ReadOnly): Array of details about specific errors that led to this reported error.
* **innerError**: [ErrorInnerError](#errorinnererror) (ReadOnly): Object containing more specific information than  the current object about the error.
* **message**: string (ReadOnly): Human-readable representation of the error.
* **target**: string (ReadOnly): Target of the error.

## ErrorInnerError
### Properties
* **innerError**: [Error](#error): Standard error object.

## Health
### Properties
* **healthState**: 'Degraded' | 'Healthy' | 'Unavailable' | 'Unknown' | string (ReadOnly): State of health of the provider instance
* **impactingReasons**: string (ReadOnly): Reasons impacting health state

## ManagedRGConfiguration
### Properties
* **name**: string: Managed resource group name

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' | string (Required): The managed service identity for all identities.
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MonitorProperties
### Properties
* **appLocation**: string: The SAP monitor resources will be deployed in the SAP monitoring region. The subnet region should be same as the SAP monitoring region.
* **errors**: [MonitorPropertiesErrors](#monitorpropertieserrors) (ReadOnly): Defines the SAP monitor errors.
* **logAnalyticsWorkspaceArmId**: string: The ARM ID of the Log Analytics Workspace that is used for SAP monitoring.
* **managedResourceGroupConfiguration**: [ManagedRGConfiguration](#managedrgconfiguration): Managed resource group configuration
* **monitorSubnet**: string: The subnet which the SAP monitor will be deployed in
* **msiArmId**: string (ReadOnly): The ARM ID of the MSI used for SAP monitoring.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the SAP monitor.
* **routingPreference**: 'Default' | 'RouteAll' | string: Sets the routing preference of the SAP monitor. By default only RFC1918 traffic is routed to the customer VNET.
* **storageAccountArmId**: string (ReadOnly): The ARM ID of the Storage account used for SAP monitoring.
* **zoneRedundancyPreference**: string: Sets the preference for zone redundancy on resources created for the SAP monitor. By default resources will be created which do not support zone redundancy.

## MonitorPropertiesErrors
### Properties
* **code**: string (ReadOnly): Server-defined set of error codes.
* **details**: [Error](#error)[] (ReadOnly): Array of details about specific errors that led to this reported error.
* **innerError**: [ErrorInnerError](#errorinnererror) (ReadOnly): Object containing more specific information than  the current object about the error.
* **message**: string (ReadOnly): Human-readable representation of the error.
* **target**: string (ReadOnly): Target of the error.

## ProviderInstanceProperties
### Properties
* **errors**: [ProviderInstancePropertiesErrors](#providerinstancepropertieserrors) (ReadOnly): Defines the provider instance errors.
* **health**: [Health](#health) (ReadOnly): Resource health details
* **providerSettings**: [ProviderSpecificProperties](#providerspecificproperties): Defines the provider specific properties.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the provider instance

## ProviderInstancePropertiesErrors
### Properties
* **code**: string (ReadOnly): Server-defined set of error codes.
* **details**: [Error](#error)[] (ReadOnly): Array of details about specific errors that led to this reported error.
* **innerError**: [ErrorInnerError](#errorinnererror) (ReadOnly): Object containing more specific information than  the current object about the error.
* **message**: string (ReadOnly): Human-readable representation of the error.
* **target**: string (ReadOnly): Target of the error.

## ProviderSpecificProperties
* **Discriminator**: providerType

### Base Properties

### DB2ProviderInstanceProperties
#### Properties
* **dbName**: string: Gets or sets the db2 database name.
* **dbPassword**: string {sensitive}: Gets or sets the db2 database password.
* **dbPasswordUri**: string: Gets or sets the key vault URI to secret with the database password.
* **dbPort**: string: Gets or sets the db2 database sql port.
* **dbUsername**: string: Gets or sets the db2 database user name.
* **hostname**: string: Gets or sets the target virtual machine name.
* **providerType**: 'Db2' (Required): The provider type. For example, the value can be SapHana.
* **sapSid**: string: Gets or sets the SAP System Identifier
* **sslCertificateUri**: string: Gets or sets the blob URI to SSL certificate for the DB2 Database.
* **sslPreference**: 'Disabled' | 'RootCertificate' | 'ServerCertificate' | string: Gets or sets certificate preference if secure communication is enabled.

### MsSqlServerProviderInstanceProperties
#### Properties
* **dbPassword**: string {sensitive}: Gets or sets the database password.
* **dbPasswordUri**: string: Gets or sets the key vault URI to secret with the database password.
* **dbPort**: string: Gets or sets the database sql port.
* **dbUsername**: string: Gets or sets the database user name.
* **hostname**: string: Gets or sets the SQL server host name.
* **providerType**: 'MsSqlServer' (Required): The provider type. For example, the value can be SapHana.
* **sapSid**: string: Gets or sets the SAP System Identifier
* **sslCertificateUri**: string: Gets or sets the blob URI to SSL certificate for the SQL Database.
* **sslPreference**: 'Disabled' | 'RootCertificate' | 'ServerCertificate' | string: Gets or sets certificate preference if secure communication is enabled.

### PrometheusHaClusterProviderInstanceProperties
#### Properties
* **clusterName**: string: Gets or sets the clusterName.
* **hostname**: string: Gets or sets the target machine name.
* **prometheusUrl**: string: URL of the Node Exporter endpoint.
* **providerType**: 'PrometheusHaCluster' (Required): The provider type. For example, the value can be SapHana.
* **sid**: string: Gets or sets the cluster sid.
* **sslCertificateUri**: string: Gets or sets the blob URI to SSL certificate for the HA cluster exporter.
* **sslPreference**: 'Disabled' | 'RootCertificate' | 'ServerCertificate' | string: Gets or sets certificate preference if secure communication is enabled.

### PrometheusOSProviderInstanceProperties
#### Properties
* **prometheusUrl**: string: URL of the Node Exporter endpoint
* **providerType**: 'PrometheusOS' (Required): The provider type. For example, the value can be SapHana.
* **sapSid**: string: Gets or sets the SAP System Identifier
* **sslCertificateUri**: string: Gets or sets the blob URI to SSL certificate for the prometheus node exporter.
* **sslPreference**: 'Disabled' | 'RootCertificate' | 'ServerCertificate' | string: Gets or sets certificate preference if secure communication is enabled.

### HanaDbProviderInstanceProperties
#### Properties
* **dbName**: string: Gets or sets the hana database name.
* **dbPassword**: string {sensitive}: Gets or sets the database password.
* **dbPasswordUri**: string: Gets or sets the key vault URI to secret with the database password.
* **dbUsername**: string: Gets or sets the database user name.
* **hostname**: string: Gets or sets the target virtual machine size.
* **instanceNumber**: string: Gets or sets the database instance number.
* **providerType**: 'SapHana' (Required): The provider type. For example, the value can be SapHana.
* **sapSid**: string: Gets or sets the SAP System Identifier.
* **sqlPort**: string: Gets or sets the database sql port.
* **sslCertificateUri**: string: Gets or sets the blob URI to SSL certificate for the DB.
* **sslHostNameInCertificate**: string: Gets or sets the hostname(s) in the SSL certificate.
* **sslPreference**: 'Disabled' | 'RootCertificate' | 'ServerCertificate' | string: Gets or sets certificate preference if secure communication is enabled.

### SapNetWeaverProviderInstanceProperties
#### Properties
* **providerType**: 'SapNetWeaver' (Required): The provider type. For example, the value can be SapHana.
* **sapClientId**: string: Gets or sets the SAP Client ID.
* **sapHostFileEntries**: string[]: Gets or sets the list of HostFile Entries
* **sapHostname**: string: Gets or sets the target virtual machine IP Address/FQDN.
* **sapInstanceNr**: string: Gets or sets the instance number of SAP NetWeaver.
* **sapPassword**: string {sensitive}: Sets the SAP password.
* **sapPasswordUri**: string: Gets or sets the key vault URI to secret with the SAP password.
* **sapPortNumber**: string: Gets or sets the SAP HTTP port number.
* **sapSid**: string: Gets or sets the SAP System Identifier
* **sapUsername**: string: Gets or sets the SAP user name.
* **sslCertificateUri**: string: Gets or sets the blob URI to SSL certificate for the SAP system.
* **sslPreference**: 'Disabled' | 'RootCertificate' | 'ServerCertificate' | string: Gets or sets certificate preference if secure communication is enabled.


## SapLandscapeMonitorMetricThresholds
### Properties
* **green**: int: Gets or sets the threshold value for Green.
* **name**: string: Gets or sets the name of the threshold.
* **red**: int: Gets or sets the threshold value for Red.
* **yellow**: int: Gets or sets the threshold value for Yellow.

## SapLandscapeMonitorProperties
### Properties
* **grouping**: [SapLandscapeMonitorPropertiesGrouping](#saplandscapemonitorpropertiesgrouping): Gets or sets the SID groupings by landscape and Environment.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'Succeeded' | string (ReadOnly): State of provisioning of the SAP monitor.
* **topMetricsThresholds**: [SapLandscapeMonitorMetricThresholds](#saplandscapemonitormetricthresholds)[]: Gets or sets the list Top Metric Thresholds for SAP Landscape Monitor Dashboard

## SapLandscapeMonitorPropertiesGrouping
### Properties
* **landscape**: [SapLandscapeMonitorSidMapping](#saplandscapemonitorsidmapping)[]: Gets or sets the list of landscape to SID mappings.
* **sapApplication**: [SapLandscapeMonitorSidMapping](#saplandscapemonitorsidmapping)[]: Gets or sets the list of Sap Applications to SID mappings.

## SapLandscapeMonitorSidMapping
### Properties
* **name**: string: Gets or sets the name of the grouping.
* **topSid**: string[]: Gets or sets the list of SID's.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

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

