# Microsoft.Workloads @ 2024-02-01-preview

## Resource Microsoft.Workloads/monitors@2024-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/monitors/alerts@2024-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[a-zA-Z0-9-_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties): Alert Instance properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Workloads/monitors/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/monitors/alertTemplates@2024-02-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, pattern: "^[a-zA-Z0-9-_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AlertTemplateProperties](#alerttemplateproperties) (ReadOnly): Alert Template properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Workloads/monitors/alertTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProviderInstanceProperties](#providerinstanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Workloads/monitors/providerInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/monitors/sapLandscapeMonitor@2024-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SapLandscapeMonitorProperties](#saplandscapemonitorproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Workloads/monitors/sapLandscapeMonitor' (ReadOnly, DeployTimeConstant): The resource type

## AlertProperties
### Properties
* **alertRuleProperties**: [AlertRuleProperties](#alertruleproperties): Describes the properties of an alert.
* **alertRuleResourceId**: string (ReadOnly): ID of the alert rule resource created.
* **errors**: [ErrorDetail](#errordetail) (ReadOnly): Defines the alert instance errors.
* **providerNames**: string[]: Name of provider instances associated with the alert.
* **providerType**: string: The provider type for alert. For example, the value can be SapHana.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the alert instance
* **templateName**: string: Name of the alert template from which it was created.

## AlertQueryParameter
### Properties
* **name**: string: The name of the alert query parameter.
* **value**: string: The value of the alert query parameter.

## AlertRuleProperties
### Properties
* **actionGroups**: string[]: Action Group resource Ids to invoke when the alert fires
* **alertQueryParameters**: [AlertQueryParameter](#alertqueryparameter)[]: The alert query parameters.
* **autoMitigate**: 'Disable' | 'Enable' | string: The value that indicates whether the alert should be automatically resolved or not. The default is Disable.
* **dimension**: string: Evaluation of metric on a particular column.
* **evaluationFrequency**: int: How often the scheduled query rule is evaluated.
* **failingPeriodsOperator**: 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string: The operator for failing periods.
* **failingPeriodsToAlert**: int: The number of failing periods to trigger an alert.
* **muteActionsDuration**: int: Mute actions for the chosen period of time after the alert is fired.
* **severity**: int {minValue: 0, maxValue: 4}: Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest.
* **status**: 'Disabled' | 'Enabled' | string: Indicates whether the alert is in an enabled state.
* **threshold**: int: The threshold of the alert.
* **thresholdOperator**: 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string: The threshold operator of the alert.
* **windowSize**: int: The period of time on which the Alert query will be executed.

## AlertTemplateMetricMeasurement
### Properties
* **frequencyInMinutes**: int: Frequency (mins) value Associated with the Alert Template for Metric Measurement.
* **metricColumn**: string: Metric Column Associated with the Alert Template for Metric Measurement.
* **metricTriggerType**: 'Consecutive' | 'Total' | string: Metric Trigger Type Associated with the Alert Template for Metric Measurement.
* **threshold**: int: The Threshold Value Associated with the Alert Template for Metric Measurement.
* **thresholdOperator**: 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string: Operator used for threshold comparison.
* **timeWindowInMinutes**: int: Time Window (mins) Value Associated with the Alert Template for Metric Measurement.

## AlertTemplateProperties
### Properties
* **alertUnit**: string: Unit of the alert.
* **defaultThreshold**: int: Default threshold value.
* **defaultThresholdInputOption**: 'NotRequired' | 'Optional' | 'Required' | string: Input option for the default threshold.
* **description**: string: Description of the template.
* **errors**: [ErrorDetail](#errordetail) (ReadOnly): Defines the SAP monitor Alert Template errors.
* **lowerBound**: int: Minimum possible Default Threshold Value Associated with the Alert Template.
* **metricMeasurement**: [AlertTemplateMetricMeasurement](#alerttemplatemetricmeasurement): Describes the properties for metric measurement in alerts template.
* **providerType**: string: The provider type for alert template. For example, the value can be SapHana.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the Alert Template.
* **query**: string: Query associated with the alert template.
* **queryInputParameters**: [AlertTemplateQueryInputParameter](#alerttemplatequeryinputparameter)[] {maxLength: 50}: Describes the Query Input Parameter properties in alerts template.
* **severity**: int {minValue: 0, maxValue: 4}: Severity of the alert. Should be an integer between [0-4]. Value of 0 is most severe and value of 4 is least severe.
* **templateDisplayName**: string: Display name of the alert template.
* **thresholdOperator**: 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string: Operator used for threshold comparison.
* **upperBound**: int: Maximum possible Default Threshold Value Associated with the Alert Template.

## AlertTemplateQueryInputParameter
### Properties
* **defaultValue**: string: Default Value of the Query Input Parameter
* **description**: string: Description of the Query Input Parameter
* **displayName**: string: Display Name of the Query Input Parameter.
* **laQuery**: string: Log Analytics query associated with the parameter.
* **name**: string: Name of the Query Input Parameter
* **selectionMode**: 'Multiple' | 'Single' | string: Selection mode for the parameter.
* **type**: 'CustomInput' | 'LogAnalyticsQuery' | 'ProviderProperty' | string: Type of the Query Input Parameter

## AppServicePlanConfiguration
### Properties
* **capacity**: int {minValue: 0}: The number of workers in app service plan. If this is not set or set to 0, auto scale will be configured for the app service plan, otherwise, instance count is set to this number.
* **tier**: 'ElasticPremium' | 'PremiumV3' | string: The App Service plan tier.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## Health
### Properties
* **healthState**: 'Degraded' | 'Healthy' | 'Unavailable' | 'Unknown' | string (ReadOnly): Health state of the resource
* **impactingReasons**: string (ReadOnly): Reasons impacting health state

## ManagedResourceGroupConfiguration
### Properties
* **name**: string: Managed resource group name

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MonitorProperties
### Properties
* **appLocation**: string: The SAP monitor resources will be deployed in the SAP monitoring region. The subnet region should be same as the SAP monitoring region.
* **appServicePlanConfiguration**: [AppServicePlanConfiguration](#appserviceplanconfiguration): App service plan configuration
* **errors**: [ErrorDetail](#errordetail) (ReadOnly): Defines the SAP monitor errors.
* **logAnalyticsWorkspaceArmId**: string: The ARM ID of the Log Analytics Workspace that is used for SAP monitoring.
* **managedResourceGroupConfiguration**: [ManagedResourceGroupConfiguration](#managedresourcegroupconfiguration): Managed resource group configuration
* **monitorSubnet**: string: The subnet which the SAP monitor will be deployed in
* **msiArmId**: string (ReadOnly): The ARM ID of the MSI used for SAP monitoring.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the SAP monitor.
* **routingPreference**: 'Default' | 'RouteAll' | string: Sets the routing preference of the SAP monitor. By default only RFC1918 traffic is routed to the customer VNET.
* **storageAccountArmId**: string (ReadOnly): The ARM ID of the Storage account used for SAP monitoring.
* **zoneRedundancyPreference**: string: Sets the preference for zone redundancy on resources created for the SAP monitor. By default resources will be created which do not support zone redundancy.

## ProviderInstanceProperties
### Properties
* **errors**: [ErrorDetail](#errordetail) (ReadOnly): Defines the provider instance errors.
* **health**: [Health](#health) (ReadOnly): Resource health details
* **providerSettings**: [ProviderSpecificProperties](#providerspecificproperties): Defines the provider specific properties.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the provider instance

## ProviderSpecificProperties
* **Discriminator**: providerType

### Base Properties

### Db2ProviderInstanceProperties
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

### OracleProviderInstanceProperties
#### Properties
* **dbName**: string: Gets or sets the oracle database name.
* **dbPassword**: string {sensitive}: Gets or sets the oracle database password.
* **dbPasswordUri**: string: Gets or sets the key vault URI to secret with the database password.
* **dbPort**: string: Gets or sets the oracle database sql port.
* **dbUsername**: string: Gets or sets the oracle database user name.
* **hostname**: string: Gets or sets the target virtual machine name.
* **providerType**: 'Oracle' (Required): The provider type. For example, the value can be SapHana.
* **sapSid**: string: Gets or sets the SAP System Identifier
* **sslCertificateUri**: string: Gets or sets the blob URI to SSL certificate for the Oracle Database.
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

### PrometheusOsProviderInstanceProperties
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
* **topMetricsThresholds**: [SapLandscapeMonitorMetricThresholds](#saplandscapemonitormetricthresholds)[] {maxLength: 50}: Gets or sets the list Top Metric Thresholds for SAP Landscape Monitor Dashboard

## SapLandscapeMonitorPropertiesGrouping
### Properties
* **landscape**: [SapLandscapeMonitorSidMapping](#saplandscapemonitorsidmapping)[] {maxLength: 50}: Gets or sets the list of landscape to SID mappings.
* **sapApplication**: [SapLandscapeMonitorSidMapping](#saplandscapemonitorsidmapping)[] {maxLength: 50}: Gets or sets the list of Sap Applications to SID mappings.

## SapLandscapeMonitorSidMapping
### Properties
* **name**: string: Gets or sets the name of the grouping.
* **topSid**: string[] {maxLength: 50}: Gets or sets the list of SID's.

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

