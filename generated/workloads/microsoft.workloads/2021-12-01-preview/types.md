# Microsoft.Workloads @ 2021-12-01-preview

## Resource Microsoft.Workloads/monitors@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): Describes the properties of a SAP monitor.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/monitors/providerInstances@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProviderInstanceProperties](#providerinstanceproperties): Describes the properties of a provider instance.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Workloads/monitors/providerInstances' (ReadOnly, DeployTimeConstant): The resource type

## MonitorProperties
### Properties
* **appLocation**: string: The monitor resources will be deployed in the monitoring region. The subnet region should be same as the monitoring region.
* **errors**: [MonitorPropertiesErrors](#monitorpropertieserrors) (ReadOnly): Defines the SAP monitor errors.
* **logAnalyticsWorkspaceArmId**: string: The ARM ID of the Log Analytics Workspace that is used for monitoring.
* **managedResourceGroupConfiguration**: [ManagedRGConfiguration](#managedrgconfiguration): Managed resource group configuration
* **monitorSubnet**: string: The subnet which the SAP monitor will be deployed in
* **msiArmId**: string (ReadOnly): The ARM ID of the MSI used for monitoring.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly): State of provisioning of the monitor.
* **routingPreference**: 'Default' | 'RouteAll': Sets the routing preference of the monitor. By default only RFC1918 traffic is routed to the customer VNET.

## MonitorPropertiesErrors
### Properties
* **code**: string (ReadOnly): Server-defined set of error codes.
* **details**: [Error](#error)[] (ReadOnly): Array of details about specific errors that led to this reported error.
* **innerError**: [ErrorInnerError](#errorinnererror) (ReadOnly): Object containing more specific information than  the current object about the error.
* **message**: string (ReadOnly): Human-readable representation of the error.
* **target**: string (ReadOnly): Target of the error.

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

## ManagedRGConfiguration
### Properties
* **name**: string: Managed resource group name

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProviderInstanceProperties
### Properties
* **errors**: [ProviderInstancePropertiesErrors](#providerinstancepropertieserrors) (ReadOnly): Defines the provider instance errors.
* **providerSettings**: [ProviderSpecificProperties](#providerspecificproperties): Gets or sets the provider specific properties.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly): State of provisioning of the monitor.

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
* **dbPassword**: string: Gets or sets the db2 database password.
* **dbPasswordUri**: string: Gets or sets the key vault URI to secret with the database password.
* **dbPort**: string: Gets or sets the db2 database sql port.
* **dbUsername**: string: Gets or sets the db2 database user name.
* **hostname**: string: Gets or sets the target virtual machine name.
* **providerType**: 'Db2' (Required): The provider type. For example, the value can be SapHana.
* **sapSid**: string: Gets or sets the SAP System Identifier

### MsSqlServerProviderInstanceProperties
#### Properties
* **dbPassword**: string: Gets or sets the database password.
* **dbPasswordUri**: string: Gets or sets the key vault URI to secret with the database password.
* **dbPort**: string: Gets or sets the database sql port.
* **dbUsername**: string: Gets or sets the database user name.
* **hostname**: string: Gets or sets the SQL server host name.
* **providerType**: 'MsSqlServer' (Required): The provider type. For example, the value can be SapHana.
* **sapSid**: string: Gets or sets the SAP System Identifier

### PrometheusHaClusterProviderInstanceProperties
#### Properties
* **clusterName**: string: Gets or sets the clusterName.
* **hostname**: string: Gets or sets the target machine name.
* **prometheusUrl**: string: URL of the Node Exporter endpoint.
* **providerType**: 'PrometheusHaCluster' (Required): The provider type. For example, the value can be SapHana.
* **sid**: string: Gets or sets the cluster sid.

### PrometheusOSProviderInstanceProperties
#### Properties
* **prometheusUrl**: string: URL of the Node Exporter endpoint
* **providerType**: 'PrometheusOS' (Required): The provider type. For example, the value can be SapHana.

### HanaDbProviderInstanceProperties
#### Properties
* **dbName**: string: Gets or sets the hana database name.
* **dbPassword**: string: Gets or sets the database password.
* **dbPasswordUri**: string: Gets or sets the key vault URI to secret with the database password.
* **dbSslCertificateUri**: string: Gets or sets the blob URI to SSL certificate for the DB.
* **dbUsername**: string: Gets or sets the database user name.
* **hostname**: string: Gets or sets the target virtual machine size.
* **instanceNumber**: string: Gets or sets the database instance number.
* **providerType**: 'SapHana' (Required): The provider type. For example, the value can be SapHana.
* **sqlPort**: string: Gets or sets the database sql port.
* **sslHostNameInCertificate**: string: Gets or sets the hostname(s) in the SSL certificate.

### SapNetWeaverProviderInstanceProperties
#### Properties
* **providerType**: 'SapNetWeaver' (Required): The provider type. For example, the value can be SapHana.
* **sapClientId**: string: Gets or sets the SAP Client ID.
* **sapHostFileEntries**: string[]: Gets or sets the list of HostFile Entries
* **sapHostname**: string: Gets or sets the target virtual machine IP Address/FQDN.
* **sapInstanceNr**: string: Gets or sets the instance number of SAP NetWeaver.
* **sapPassword**: string: Sets the SAP password.
* **sapPasswordUri**: string: Gets or sets the key vault URI to secret with the SAP password.
* **sapPortNumber**: string: Gets or sets the SAP HTTP port number.
* **sapSid**: string: Gets or sets the SAP System Identifier
* **sapSslCertificateUri**: string: Gets or sets the blob URI to SSL certificate for the SAP system.
* **sapUsername**: string: Gets or sets the SAP user name.


