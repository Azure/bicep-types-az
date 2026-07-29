# Microsoft.OffAzure @ 2024-07-01-preview

## Resource Microsoft.OffAzure/hypervSites@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OffAzure/hypervSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/hypervSites/clusters@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HypervClusterProperties](#hypervclusterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/hypervSites/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/hypervSites/hosts@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HypervHostProperties](#hypervhostproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/hypervSites/hosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/hypervSites/jobs@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/hypervSites/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/hypervSites/machines@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HypervMachineProperties](#hypervmachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/hypervSites/machines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/hypervSites/machines/softwareInventories@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineSoftwareInventoryProperties](#machinesoftwareinventoryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/hypervSites/machines/softwareInventories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/hypervSites/runAsAccounts@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RunAsAccountProperties](#runasaccountproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/hypervSites/runAsAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/importSites@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImportSiteProperties](#importsiteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OffAzure/importSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/importSites/deleteJobs@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DeleteImportedMachinesJobProperties](#deleteimportedmachinesjobproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/importSites/deleteJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/importSites/jobs@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/importSites/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/importSites/machines@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImportMachineProperties](#importmachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/importSites/machines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MasterSiteProperties](#mastersiteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OffAzure/masterSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/privateEndpointConnections@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionPropertiesV2](#privateendpointconnectionpropertiesv2): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/privateLinkResources@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/sqlSites@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SqlSiteProperties](#sqlsiteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/sqlSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/sqlSites/discoverySiteDataSources@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SqlDiscoverySiteDataSourceProperties](#sqldiscoverysitedatasourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/sqlSites/discoverySiteDataSources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/sqlSites/jobs@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/sqlSites/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/sqlSites/runAsAccounts@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RunAsAccountProperties](#runasaccountproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/sqlSites/runAsAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/sqlSites/sqlAvailabilityGroups@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SqlAvailabilityGroupProperties](#sqlavailabilitygroupproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/sqlSites/sqlAvailabilityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/sqlSites/sqlDatabases@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SqlDatabasePropertiesV2](#sqldatabasepropertiesv2) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/sqlSites/sqlDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/sqlSites/sqlServers@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SqlServerProperties](#sqlserverproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/sqlSites/sqlServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/webAppSites@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebAppSiteProperties](#webappsiteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/webAppSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/webAppSites/discoverySiteDataSources@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DiscoverySiteDataSourceProperties](#discoverysitedatasourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/webAppSites/discoverySiteDataSources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/webAppSites/extendedMachines@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebAppExtendedMachineProperties](#webappextendedmachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/webAppSites/extendedMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/webAppSites/iisWebApplications@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IisWebApplicationProperties](#iiswebapplicationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/webAppSites/iisWebApplications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/webAppSites/iisWebServers@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IisWebServerProperties](#iiswebserverproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/webAppSites/iisWebServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/webAppSites/runasaccounts@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RunAsAccountProperties](#runasaccountproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/webAppSites/runasaccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/webAppSites/tomcatWebApplications@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TomcatWebApplicationProperties](#tomcatwebapplicationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/webAppSites/tomcatWebApplications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/webAppSites/tomcatWebServers@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TomcatWebServerProperties](#tomcatwebserverproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/masterSites/webAppSites/tomcatWebServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/serverSites@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SitesProperties](#sitesproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OffAzure/serverSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/serverSites/jobs@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/serverSites/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/serverSites/machines@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerProperties](#serverproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/serverSites/machines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/serverSites/machines/softwareInventories@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineSoftwareInventoryProperties](#machinesoftwareinventoryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/serverSites/machines/softwareInventories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/serverSites/runAsAccounts@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RunAsAccountProperties](#runasaccountproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/serverSites/runAsAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/vmwareSites@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SitesProperties](#sitesproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OffAzure/vmwareSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/vmwareSites/hosts@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VmwareHostProperties](#vmwarehostproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/vmwareSites/hosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/vmwareSites/jobs@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/vmwareSites/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/vmwareSites/machines@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VmwareMachineProperties](#vmwaremachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/vmwareSites/machines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/vmwareSites/machines/softwareInventories@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineSoftwareInventoryProperties](#machinesoftwareinventoryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/vmwareSites/machines/softwareInventories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/vmwareSites/runAsAccounts@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RunAsAccountProperties](#runasaccountproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/vmwareSites/runAsAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/vmwareSites/vcenters@2024-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VcenterProperties](#vcenterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OffAzure/vmwareSites/vcenters' (ReadOnly, DeployTimeConstant): The resource type

## Function clientGroupMembers (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsClientGroupMembersRequest](#dependencymapservicemapextensionsclientgroupmembersrequest)
* **Output**: any

## Function clientGroupMembers (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsClientGroupMembersRequest](#dependencymapservicemapextensionsclientgroupmembersrequest)
* **Output**: any

## Function clientGroupMembers (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsClientGroupMembersRequest](#dependencymapservicemapextensionsclientgroupmembersrequest)
* **Output**: any

## Function computeErrorSummary (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: any
* **Output**: [SiteErrorSummary](#siteerrorsummary)

## Function computeErrorSummary (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: any
* **Output**: [SiteErrorSummary](#siteerrorsummary)

## Function computeErrorSummary (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: any
* **Output**: [SiteErrorSummary](#siteerrorsummary)

## Function computeusage (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: any
* **Output**: [ServerSiteUsageResponse](#serversiteusageresponse)

## Function computeusage (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: any
* **Output**: [VmwareSiteUsage](#vmwaresiteusage)

## Function computeusage (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: any
* **Output**: [HypervSiteUsage](#hypervsiteusage)

## Function deleteImportedMachines (Microsoft.OffAzure/importSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/importSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: any
* **Output**: [SasUriResponse](#sasuriresponse)

## Function errorSummary (Microsoft.OffAzure/masterSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/masterSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [ErrorSummaryRequest](#errorsummaryrequest)
* **Output**: [SiteErrorSummary](#siteerrorsummary)

## Function errorSummary (Microsoft.OffAzure/masterSites/sqlSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/masterSites/sqlSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [ErrorSummaryRequest](#errorsummaryrequest)
* **Output**: [SiteErrorSummary](#siteerrorsummary)

## Function errorSummary (Microsoft.OffAzure/masterSites/webAppSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/masterSites/webAppSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [ErrorSummaryRequest](#errorsummaryrequest)
* **Output**: [SiteErrorSummary](#siteerrorsummary)

## Function exportApplications (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: any
* **Output**: any

## Function exportApplications (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: any
* **Output**: any

## Function exportApplications (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: any
* **Output**: any

## Function exportDependencies (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsExportDependenciesRequest](#dependencymapservicemapextensionsexportdependenciesrequest)
* **Output**: any

## Function exportDependencies (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsExportDependenciesRequest](#dependencymapservicemapextensionsexportdependenciesrequest)
* **Output**: any

## Function exportDependencies (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsExportDependenciesRequest](#dependencymapservicemapextensionsexportdependenciesrequest)
* **Output**: any

## Function exportInventory (Microsoft.OffAzure/masterSites/webAppSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/masterSites/webAppSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [ExportWebAppsRequest](#exportwebappsrequest)
* **Output**: any

## Function exportMachineErrors (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [ExportMachineErrorsRequest](#exportmachineerrorsrequest)
* **Output**: any

## Function exportMachineErrors (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [ExportMachineErrorsRequest](#exportmachineerrorsrequest)
* **Output**: any

## Function exportMachineErrors (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [ExportMachineErrorsRequest](#exportmachineerrorsrequest)
* **Output**: any

## Function exportMachines (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [ExportMachinesRequest](#exportmachinesrequest)
* **Output**: any

## Function exportSqlServerErrors (Microsoft.OffAzure/masterSites/sqlSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/masterSites/sqlSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: any
* **Output**: any

## Function exportSqlServers (Microsoft.OffAzure/masterSites/sqlSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/masterSites/sqlSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [ExportSqlServersRequest](#exportsqlserversrequest)
* **Output**: any

## Function exportUri (Microsoft.OffAzure/importSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/importSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [SasUriResponse](#sasuriresponse)
* **Output**: [SasUriResponse](#sasuriresponse)

## Function generateCoarseMap (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsScopeMapRequest](#dependencymapservicemapextensionsscopemaprequest)
* **Output**: any

## Function generateCoarseMap (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsScopeMapRequest](#dependencymapservicemapextensionsscopemaprequest)
* **Output**: any

## Function generateCoarseMap (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsScopeMapRequest](#dependencymapservicemapextensionsscopemaprequest)
* **Output**: any

## Function generateDetailedMap (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsSingleMachineDetailedMapRequest](#dependencymapservicemapextensionssinglemachinedetailedmaprequest)
* **Output**: any

## Function generateDetailedMap (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsSingleMachineDetailedMapRequest](#dependencymapservicemapextensionssinglemachinedetailedmaprequest)
* **Output**: any

## Function generateDetailedMap (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsSingleMachineDetailedMapRequest](#dependencymapservicemapextensionssinglemachinedetailedmaprequest)
* **Output**: any

## Function importUri (Microsoft.OffAzure/importSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/importSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [SasUriResponse](#sasuriresponse)
* **Output**: [SasUriResponse](#sasuriresponse)

## Function listHealthSummary (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Output**: [SiteHealthSummaryCollection](#sitehealthsummarycollection)

## Function listHealthSummary (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Output**: [SiteHealthSummaryCollection](#sitehealthsummarycollection)

## Function listHealthSummary (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Output**: [SiteHealthSummaryCollection](#sitehealthsummarycollection)

## Function refresh (Microsoft.OffAzure/masterSites/sqlSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/masterSites/sqlSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [SqlSiteRefreshBody](#sqlsiterefreshbody)
* **Output**: any

## Function refresh (Microsoft.OffAzure/masterSites/webAppSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/masterSites/webAppSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [ProxySiteRefreshBody](#proxysiterefreshbody)
* **Output**: any

## Function refreshArcStatus (Microsoft.OffAzure/masterSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/masterSites
* **ApiVersion**: 2024-07-01-preview
* **Output**: any

## Function refreshSite (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Output**: any

## Function serverGroupMembers (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsServerGroupMembersRequest](#dependencymapservicemapextensionsservergroupmembersrequest)
* **Output**: any

## Function serverGroupMembers (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsServerGroupMembersRequest](#dependencymapservicemapextensionsservergroupmembersrequest)
* **Output**: any

## Function serverGroupMembers (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [DependencyMapServiceMapextensionsServerGroupMembersRequest](#dependencymapservicemapextensionsservergroupmembersrequest)
* **Output**: any

## Function start (Microsoft.OffAzure/vmwareSites/machines@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites/machines
* **ApiVersion**: 2024-07-01-preview
* **Output**: any

## Function stop (Microsoft.OffAzure/vmwareSites/machines@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites/machines
* **ApiVersion**: 2024-07-01-preview
* **Output**: any

## Function summary (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Output**: [ServerSiteUsage](#serversiteusage)

## Function summary (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Output**: [VmwareSiteUsage](#vmwaresiteusage)

## Function summary (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Output**: [HypervSiteUsage](#hypervsiteusage)

## Function summary (Microsoft.OffAzure/masterSites/sqlSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/masterSites/sqlSites
* **ApiVersion**: 2024-07-01-preview
* **Output**: [SqlSiteUsage](#sqlsiteusage)

## Function summary (Microsoft.OffAzure/masterSites/webAppSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/masterSites/webAppSites
* **ApiVersion**: 2024-07-01-preview
* **Output**: [WebAppSiteUsage](#webappsiteusage)

## Function updateDependencyMapStatus (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [UpdateMachineDepMapStatus](#updatemachinedepmapstatus)
* **Output**: any

## Function updateDependencyMapStatus (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [UpdateMachineDepMapStatus](#updatemachinedepmapstatus)
* **Output**: any

## Function updateDependencyMapStatus (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [UpdateMachineDepMapStatus](#updatemachinedepmapstatus)
* **Output**: any

## Function updateProperties (Microsoft.OffAzure/serverSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/serverSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [MachineMetadataCollection](#machinemetadatacollection)
* **Output**: any

## Function updateProperties (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [MachineMetadataCollection](#machinemetadatacollection)
* **Output**: any

## Function updateProperties (Microsoft.OffAzure/hypervSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/hypervSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [MachineMetadataCollection](#machinemetadatacollection)
* **Output**: any

## Function updateProperties (Microsoft.OffAzure/masterSites/webAppSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/masterSites/webAppSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [WebAppPropertiesCollection](#webapppropertiescollection)
* **Output**: any

## Function updateRunAsAccount (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [UpdateMachineRunAsAccount](#updatemachinerunasaccount)
* **Output**: any

## Function updateTags (Microsoft.OffAzure/vmwareSites@2024-07-01-preview)
* **Resource**: Microsoft.OffAzure/vmwareSites
* **ApiVersion**: 2024-07-01-preview
* **Input**: [UpdateMachineTags](#updatemachinetags)
* **Output**: any

## Application
### Properties
* **name**: string (ReadOnly): Gets or sets Name of the Application.
* **provider**: string (ReadOnly): Gets or sets Provider of the Application.
* **version**: string (ReadOnly): Gets or sets Version of the Application.

## ApplicationDiscovery
### Properties
* **discoveryScopeStatus**: 'Disabled' | 'DiscoveryFailed' | 'DiscoveryInProgress' | 'DiscoveryNotStarted' | 'DiscoveryPartiallySucceded' | 'DiscoverySucceeded' | 'DiscoverySucceededAtleastOnce' | 'RunAsAccountNotAssociated' | string (ReadOnly): Gets discovery scope status.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Gets errors for discovery scope.
* **hydratedRunAsAccountId**: string (ReadOnly): Gets the run as account ID with which feature worked successfully. It is discovered by the agent from the list of credentials.

## AppsAndRoles
### Properties
* **applications**: [Application](#application)[] (ReadOnly): Gets or sets Applications of the AppsAndRoles.
* **bizTalkServers**: [BizTalkServer](#biztalkserver)[] (ReadOnly): Gets or sets BizTalkServers of the AppsAndRoles.
* **exchangeServers**: [ExchangeServer](#exchangeserver)[] (ReadOnly): Gets or sets ExchangeServers of the AppsAndRoles.
* **features**: [Feature](#feature)[] (ReadOnly): Gets or sets Features of the AppsAndRoles.
* **otherDatabases**: [OtherDatabase](#otherdatabase)[] (ReadOnly): Gets or sets OtherDatabaseServers of the AppsAndRoles.
* **sharePointServers**: [SharePointServer](#sharepointserver)[] (ReadOnly): Gets or sets SharePointServers of the AppsAndRoles.
* **sqlServers**: [SqlServerApplication](#sqlserverapplication)[] (ReadOnly): Gets or sets SQLServers of the AppsAndRoles.
* **systemCenters**: [SystemCenter](#systemcenter)[] (ReadOnly): Gets or sets SystemCenters of the AppsAndRoles.
* **webApplications**: [WebApplicationAppsAndRolesModel](#webapplicationappsandrolesmodel)[] (ReadOnly): Gets or sets WebApplications of the AppsAndRoles.

## ArcDiscovery
### Properties
* **machineResourceId**: string (Required, ReadOnly): Machine Resource Id.
* **status**: 'Enabled' | 'NotEnabled' | 'Unknown' | string (Required, ReadOnly): AzureArc status indicates whether arc discovery has successfully completed or not.

## BizTalkServer
### Properties
* **productName**: string (ReadOnly): Gets or sets ProductName of the BizTalkServer.
* **status**: string (ReadOnly): Gets or sets Status of the BizTalkServer.

## ConnectorUnit
### Properties
* **bindings**: [FrontEndBinding](#frontendbinding)[]: Gets or sets the bindings for the connector.

## DeleteImportedMachinesJobProperties
### Properties
* **blobName**: string: blob name
* **deletionConfirmation**: bool: deletion Confirmation
* **displayName**: string: Gets or sets the Display name.
* **endTime**: string: Gets or sets the Job end time.
* **errors**: string[] (ReadOnly): errors list
* **errorSasUri**: string: error Sas Uri
* **jobState**: 'Completed' | 'Failed' | 'Unknown' | 'Verified' | 'VerifiedWithErrors' | string: job State
* **numberOfMachinesDeleted**: int: number Of Machines Deleted
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string: The status of the last operation.
* **startTime**: string: Gets or sets the Job start time.
* **status**: string: Gets or sets the Job status.

## DependencyMapDiscovery
### Properties
* **discoveryScopeStatus**: 'Disabled' | 'DiscoveryFailed' | 'DiscoveryInProgress' | 'DiscoveryNotStarted' | 'DiscoveryPartiallySucceded' | 'DiscoverySucceeded' | 'DiscoverySucceededAtleastOnce' | 'RunAsAccountNotAssociated' | string (ReadOnly): Gets discovery scope status.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Gets errors for discovery scope.
* **hydratedRunAsAccountId**: string (ReadOnly): Gets the run as account ID with which feature worked successfully.It is discovered by the agent from the list of credentials.

## DependencyMapMachineInput
### Properties
* **isDependencyMapToBeEnabled**: bool: Gets or sets a value indicating whether dependency mapping is to be enabled or not.
* **machineId**: string: Gets or sets the ARM id of the machine.

## DependencyMapServiceMapextensionsClientGroupMembersRequest
### Properties
* **endTime**: string: end time
* **filters**: [DependencyMapServiceMapextensionsDependencyMapRequestFilters](#dependencymapservicemapextensionsdependencymaprequestfilters): optional filters
* **machineId**: string: id of machine
* **processGroupName**: string: process group name
* **processName**: string: name of process
* **startTime**: string: start time

## DependencyMapServiceMapextensionsDependencyMapRequestFilters
### Properties
* **machineIds**: string[]: array of machine ids
* **processIds**: string[]: array of process Ids

## DependencyMapServiceMapextensionsExportDependenciesRequest
### Properties
* **endTime**: string: end time
* **startTime**: string: start time

## DependencyMapServiceMapextensionsScopeMapRequest
### Properties
* **endTime**: string: end time
* **filters**: [DependencyMapServiceMapextensionsDependencyMapRequestFilters](#dependencymapservicemapextensionsdependencymaprequestfilters): optional filters
* **startTime**: string: start time

## DependencyMapServiceMapextensionsServerGroupMembersRequest
### Properties
* **endTime**: string: end time
* **filters**: [DependencyMapServiceMapextensionsDependencyMapRequestFilters](#dependencymapservicemapextensionsdependencymaprequestfilters): optional filters
* **serverPort**: int: port of server
* **startTime**: string: start time

## DependencyMapServiceMapextensionsSingleMachineDetailedMapRequest
### Properties
* **endTime**: string: end time
* **filters**: [DependencyMapServiceMapextensionsDependencyMapRequestFilters](#dependencymapservicemapextensionsdependencymaprequestfilters): optional filters
* **machineId**: string: id of machine
* **startTime**: string: start time

## DirectoryPath
### Properties
* **physical**: string: Gets or sets the physical path of the directory on the web server.
* **virtual**: string: Gets or sets the virtual path for the directory.

## DiscoveryScopeErrorSummary
### Properties
* **affectedObjectsCount**: int (Required): Count of affected objects.
* **affectedResourceType**: string (Required): Gets or sets the affected resource type.
* **discoveryScope**: 'AppsAndRoles' | 'DependencyMap' | 'SQLServerConnectionInfo' | 'StaticData' | string (Required): Gets or sets the count of affected objects.

## DiscoverySiteDataSourceProperties
### Properties
* **discoverySiteId**: string: Gets or sets the discovery site Id.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum

## ErrorDetails
### Properties
* **agentErrorCode**: string (ReadOnly): Gets the agent error code.
* **agentErrorMessage**: string (ReadOnly): Gets the error message from the agent.
* **agentErrorPossibleCauses**: string (ReadOnly): Gets possible causes for the agent error.
* **agentErrorRecommendedAction**: string (ReadOnly): Gets the recommended action for the agent error.
* **code**: string (ReadOnly): Gets the error code.
* **isAgentReportedError**: bool (ReadOnly): Gets a value indicating whether the error originated from a agent or not.
* **message**: string (ReadOnly): Gets the error message.
* **possibleCauses**: string (ReadOnly): Gets the possible causes of error.
* **recommendedAction**: string (ReadOnly): Gets the recommended action to resolve error.
* **severity**: string (ReadOnly): Gets the error severity.

## Errors
### Properties
* **applianceName**: string (ReadOnly): Gets the appliance name.
* **code**: string (ReadOnly): Gets the error name.
* **discoveryScope**: 'AppsAndRoles' | 'DependencyMap' | 'DiscoveryTargets' | 'SQLServerConnectionInfo' | 'StaticData' | string (ReadOnly): Gets discovery scope for which             error is encountered.
* **id**: int (ReadOnly): Gets the error ID.
* **message**: string (ReadOnly): Gets the error message.
* **messageParameters**: [ErrorsMessageParameters](#errorsmessageparameters) (ReadOnly): Gets the message parameters.
* **possibleCauses**: string (ReadOnly): Gets the possible causes of error.
* **recommendedAction**: string (ReadOnly): Gets the recommended action to resolve error.
* **runAsAccountId**: string (ReadOnly): Gets run as account id used while performing discovery             of entity.
* **severity**: string (ReadOnly): Gets the error severity.
* **source**: 'RefreshFabricLayout' | 'RefreshFabricLayoutDependencyMap' | 'RefreshFabricLayoutGuest' | string (ReadOnly): Gets the error source.
* **summaryMessage**: string (ReadOnly): Gets the error summary message.
* **updatedTimeStamp**: string (ReadOnly): Gets the time stamp when the error was updated.

## ErrorsMessageParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ErrorSummaryRequest
### Properties
* **applianceName**: string: Gets or sets the Appliance Name.

## ExchangeServer
### Properties
* **edition**: string (ReadOnly): Gets or sets Edition of the ExchangeServer.
* **productName**: string (ReadOnly): Gets or sets ProductName of the ExchangeServer.
* **roles**: string (ReadOnly): Gets or sets Roles of the ExchangeServer.
* **servicePack**: string (ReadOnly): Gets or sets ServicePack of the ExchangeServer.
* **version**: string (ReadOnly): Gets or sets Version of the ExchangeServer.

## ExportMachineErrorsRequest
### Properties
* **properties**: [RequestExportMachineErrorsProperties](#requestexportmachineerrorsproperties): Gets or sets the properties.

## ExportMachinesRequest
### Properties
* **filter**: string: filter options.

## ExportSqlServersRequest
### Properties
* **applianceName**: string: Gets or sets the Appliance Name.
* **filter**: string: filter options.

## ExportWebAppsRequest
### Properties
* **filter**: string: filter options.

## Feature
### Properties
* **featureType**: string (ReadOnly): Gets or sets FeatureType of the Feature.
* **name**: string (ReadOnly): Gets or sets Name of the Feature.
* **parent**: string (ReadOnly): Gets or sets Parent of the Feature.
* **status**: string (ReadOnly): Gets or sets Status of the Feature.

## FileMetaData
### Properties
* **fileType**: 'Filestream' | 'Fulltext' | 'Log' | 'NotSupported' | 'Rows' | string: Gets or sets the database file type.
* **isMemoryOptimizedDataOptionEnabled**: bool: Gets or sets a value indicating whether memory optimized data option is enabled.
* **logicalName**: string: Gets or sets the logical name of the file.
* **physicalFullName**: string: Gets or sets the operating-system full path of the file.
* **sizeInMb**: int: Gets or sets the size of the file in MB.

## FrontEndBinding
### Properties
* **hostName**: string: Gets or sets the Host name.
* **ipAddress**: string: Gets or sets the IP Address.
* **port**: string: Gets or sets the Port number.
* **protocol**: string: Gets or sets the Binding protocol.

## GuestOsDetails
### Properties
* **osArchitecture**: string: Gets or sets the Architecture of the operating system.
* **osName**: string: Gets or sets the Name of the operating system.
* **osType**: string: Gets or sets the type of the operating system.
* **osVersion**: string: Gets or sets the Version of the operating system.

## HealthErrorDetails
### Properties
* **applianceName**: string (ReadOnly): Gets the appliance name.
* **code**: string (ReadOnly): Gets the error name.
* **discoveryScope**: 'AppsAndRoles' | 'DependencyMap' | 'DiscoveryTargets' | 'SQLServerConnectionInfo' | 'StaticData' | string (ReadOnly): Gets discovery scope for which             error is encountered.
* **id**: int (ReadOnly): Gets the error ID.
* **message**: string (ReadOnly): Gets the error message.
* **messageParameters**: [HealthErrorDetailsMessageParameters](#healtherrordetailsmessageparameters) (ReadOnly): Gets the message parameters.
* **possibleCauses**: string (ReadOnly): Gets the possible causes of error.
* **recommendedAction**: string (ReadOnly): Gets the recommended action to resolve error.
* **runAsAccountId**: string (ReadOnly): Gets run as account id used while performing discovery             of entity.
* **severity**: string (ReadOnly): Gets the error severity.
* **source**: 'RefreshFabricLayout' | 'RefreshFabricLayoutDependencyMap' | 'RefreshFabricLayoutGuest' | string (ReadOnly): Gets the error source.
* **summaryMessage**: string (ReadOnly): Gets the error summary message.
* **updatedTimeStamp**: string (ReadOnly): Gets the time stamp when the error was updated.

## HealthErrorDetailsMessageParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HypervClusterProperties
### Properties
* **createdTimestamp**: string (ReadOnly): Gets the timestamp marking Hyper-V cluster creation.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Gets the errors.
* **fqdn**: string: Gets or sets the FQDN/IPAddress of the Hyper-V cluster.
* **functionalLevel**: int (ReadOnly): Gets the functional level of the Hyper-V cluster.
* **hostFqdnList**: string[]: Gets or sets list of hosts (FQDN) currently being tracked by the cluster.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string: The status of the last operation.
* **runAsAccountId**: string: Gets or sets Run as account ID of the Hyper-V cluster.
* **status**: string (ReadOnly): Gets the status of the Hyper-V cluster.
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last updated on the Hyper-V cluster.

## HypervDisk
### Properties
* **diskType**: string: Gets or sets Type of the disk.
* **instanceId**: string (ReadOnly): Id of the disk.
* **lun**: int: Gets or sets LUN of the disk.
* **maxSizeInBytes**: int: Gets or sets Bytes allocated for the disk.
* **name**: string: Gets or sets Name of the disk.
* **path**: string: Gets or sets Path of the disk.
* **vhdId**: string (ReadOnly): VHD Id of the disk.

## HypervHostProperties
### Properties
* **createdTimestamp**: string (ReadOnly): Gets the timestamp marking Hyper-V host creation.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Gets the errors.
* **fqdn**: string: Gets or sets the FQDN/IPAddress of the Hyper-V host.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string: The status of the last operation.
* **runAsAccountId**: string: Gets or sets the run as account ID of the Hyper-V host.
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last updated on the Hyper-V host.
* **version**: string (ReadOnly): Gets the version of the Hyper-V host.

## HypervMachineProperties
### Properties
* **allocatedMemoryInMb**: int: Gets or sets the allocated Memory in MB.
* **applianceNames**: string[] (ReadOnly): Gets the appliance names.
* **applicationDiscovery**: [ApplicationDiscovery](#applicationdiscovery) (ReadOnly): Gets the data related to application discovery.
* **appsAndRoles**: [AppsAndRoles](#appsandroles) (ReadOnly): Apps And Roles of the Server.
* **arcDiscovery**: [ArcDiscovery](#arcdiscovery) (ReadOnly): Gets the data related to Azure arc discovery.
* **biosGuid**: string: Gets or sets the BIOS GUID.
* **biosSerialNumber**: string: Gets or sets the Machine BIOS serial number.
* **clusterFqdn**: string (ReadOnly): Cluster FQDN/IPAddress.
* **clusterId**: string (ReadOnly): Cluster ARM ID.
* **createdTimestamp**: string (ReadOnly): Gets the marking machine creation.
* **dataProtectionRequested**: bool (ReadOnly): Gets or sets a value indicating whether data protection is requested for a VM.
* **dependencyMapDiscovery**: [DependencyMapDiscovery](#dependencymapdiscovery) (ReadOnly): Gets the data related to dependency map discovery.
* **dependencyMapping**: string (ReadOnly): Gets or sets if dependency mapping feature is enabled or not for the VM.
* **dependencyMappingEndTime**: string (ReadOnly): Gets or sets when dependency mapping collection was last disabled.
* **dependencyMappingStartTime**: string (ReadOnly): Gets or sets when dependency mapping collection is last started.
* **disks**: [HypervDisk](#hypervdisk)[] (ReadOnly): Disks attached to the machine.
* **displayName**: string (ReadOnly): Gets the Display name of the machine.
* **encryptStateAndVmMigrationTraffic**: bool (ReadOnly): Gets or sets a value indicating whether encryption of state and migration traffic is enabled for the VM.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Errors for machine.
* **firmware**: string: Gets or sets the firmware.
* **generation**: int (ReadOnly): Generation of the virtual machine.
* **guestDetailsDiscoveryTimestamp**: string (ReadOnly): The last time at which the Guest Details was discovered or the error while discovering guest details based discovery of the machine.
* **guestOsDetails**: [GuestOsDetails](#guestosdetails) (ReadOnly): Operating System Details extracted from the guest             bu executing script inside the guest VM.
* **highAvailability**: 'No' | 'Unknown' | 'Yes' | string (ReadOnly): Value indicating whether the VM is highly available.
* **hostFqdn**: string (ReadOnly): Host FQDN/IPAddress.
* **hostId**: string (ReadOnly): Host ARM ID.
* **iisDiscovery**: [WebAppDiscovery](#webappdiscovery) (ReadOnly): Gets the data related to iis discovery.
* **instanceUuid**: string (ReadOnly): On-premise Instance UUID of the machine.
* **isDeleted**: bool (ReadOnly): Value indicating whether VM is deleted.
* **isDynamicMemoryEnabled**: bool (ReadOnly): Value indicating whether dynamic memory is enabled for the VM.
* **isGuestDetailsDiscoveryInProgress**: bool (ReadOnly): Whether Refresh Fabric Layout Guest Details has been completed once. Portal will show discovery in progress, if this value is true.
* **ksdEnabled**: bool (ReadOnly): Gets or sets a value indicating whether key storage device is enabled on the VM.
* **managementServerType**: string (ReadOnly): Management server type captured as a string representation of the {Microsoft.Azure.FDS.WebRole.HyperVMachineBase.HyperVMachineBaseProperties.ManagementServerType} enumeration.
* **maxMemoryMb**: int (ReadOnly): Max memory of the virtual machine in MB.
* **networkAdapters**: [HypervNetworkAdapter](#hypervnetworkadapter)[] (ReadOnly): Network adapters attached to the machine.
* **numberOfApplications**: int (ReadOnly): Number of applications installed in the guest VM.
* **numberOfProcessorCore**: int: Gets or sets the Number of Processor Cores allocated for the machine.
* **operatingSystemDetails**: [OperatingSystem](#operatingsystem): Gets or sets the Operating System Details installed on the machine.
* **oracleDiscovery**: [OracleDiscovery](#oraclediscovery) (ReadOnly): Gets the data related to Oracle discovery.
* **powerStatus**: string (ReadOnly): Gets the Machine power status.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus): product support status.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): The status of the last operation.
* **runAsAccountId**: string: Gets or sets the run as account ID of the machine.
* **secureBootEnabled**: bool (ReadOnly): Gets or sets a value indicating whether Secure boot is enabled for the VM.
* **secureBootTemplate**: string (ReadOnly): Gets or sets the SecureBootTemplateId setting of the VM.
* **secureBootTemplateId**: string (ReadOnly): Gets or sets the SecureBootTemplateId setting of the VM.
* **shieldingRequested**: bool (ReadOnly): Gets or sets a value indicating whether shielding is enabled for the VM.
* **springBootDiscovery**: [SpringBootDiscovery](#springbootdiscovery) (ReadOnly): Gets the data related to SpringBoot discovery.
* **sqlDiscovery**: [SqlDiscovery](#sqldiscovery) (ReadOnly): Gets the data related to SQL discovery.
* **staticDiscovery**: [StaticDiscovery](#staticdiscovery) (ReadOnly): Gets the data related to static discovery.
* **tags**: [HypervMachinePropertiesTags](#hypervmachinepropertiestags): Gets or sets tags on the resource.
* **tomcatDiscovery**: [WebAppDiscovery](#webappdiscovery) (ReadOnly): Gets the data related to tomcat discovery.
* **tpmEnabled**: bool (ReadOnly): Gets or sets a value indicating whether trusted platform module is enabled on the VM.
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last updated on the machine.
* **version**: string (ReadOnly): VM version.
* **virtualizationBasedSecurityOptOut**: bool (ReadOnly): Gets or sets a value indicating whether VM virtualization based security is enabled for the VM.
* **vmConfigurationFileLocation**: string (ReadOnly): Gets the Root location of the VM configuration file.
* **vmFqdn**: string (ReadOnly): Gets the VM FQDN.
* **webAppDiscovery**: [WebAppDiscovery](#webappdiscovery) (ReadOnly): Gets the data related to Web application discovery.

## HypervMachinePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HypervNetworkAdapter
### Properties
* **ipAddressList**: string[] (ReadOnly): Gets IP addresses for the machine.
* **ipAddressType**: string: Gets or sets Type of the IP address.
* **macAddress**: string: Gets or sets Mac address of the NIC.
* **networkId**: string (ReadOnly): Network Id.
* **networkName**: string: Gets or sets Network Name.
* **nicId**: string: Gets or sets the NIC Id.
* **nicType**: string (ReadOnly): Mac address of the NIC.
* **staticIpAddress**: string (ReadOnly): Static IP address.
* **subnetName**: string (ReadOnly): Name of the VM subnet within the virtual network the NIC is attached to.

## HypervSiteUsage
### Properties
* **clusterCount**: int: Gets or sets the number of clusters part of the site.
* **hostCount**: int: Gets or sets the number of hosts part of the site.
* **machineCount**: int: Gets or sets the number of machines discovered in the site.
* **runAsAccountCount**: int: Gets or sets the number of run as accounts in the site.

## IisApplicationUnit
### Properties
* **applicationPoolName**: string: Gets or sets the path of the directory.
* **directories**: [DirectoryPath](#directorypath)[]: Gets or sets the list of directories.
* **enable32BitApiOnWin64**: bool: Gets or sets a value indicating whether 32 bit applications are allowed to run on 64 bit.
* **managedPipelineMode**: string: Gets or sets the managed pipeline mode.
* **path**: [DirectoryPath](#directorypath): Gets or sets the path of the directory.
* **runtimeVersion**: string: Gets or sets the runtime version.

## IisVirtualApplicationUnit
### Properties
* **directories**: [DirectoryPath](#directorypath)[]: Gets or sets the list of directories.
* **isVirtualDirectory**: bool (ReadOnly): Gets a value indicating whether the application corresponds to a directory.
* **path**: [DirectoryPath](#directorypath): Gets or sets the path of the directory.

## IisWebApplicationProperties
### Properties
* **applianceNames**: string[] (ReadOnly): Gets the appliance names.
* **applications**: [IisApplicationUnit](#iisapplicationunit)[] (ReadOnly): Gets the list of application units for the web site.
* **bindings**: [FrontEndBinding](#frontendbinding)[] (ReadOnly): Gets the front end bindings for the application.
* **configurations**: [WebApplicationConfigurationUnit](#webapplicationconfigurationunit)[] (ReadOnly): Gets the configuration.
* **createdTimestamp**: string (ReadOnly): Gets the timestamp marking creation of the entity.
* **directories**: [WebApplicationDirectoryUnit](#webapplicationdirectoryunit)[] (ReadOnly): Gets the directories.
* **displayName**: string (ReadOnly): Gets the display name.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Gets the Error details.
* **frameworks**: [WebApplicationFramework](#webapplicationframework)[] (ReadOnly): Gets the Error details.
* **hasErrors**: bool (ReadOnly): Gets a value indicating whether the WebApp has errors or not.
* **isDeleted**: bool (ReadOnly): Gets a value indicating whether application is deleted.
* **machineArmIds**: string[] (ReadOnly): Gets the list of machine ARM Ids on which the SQL server is deployed.
* **machineDisplayName**: string (ReadOnly): Machine display name
* **physicalPath**: string (ReadOnly): Gets the physical path of the application.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum
* **serverType**: string (ReadOnly): Gets the server type.
* **staticFolders**: string[] (ReadOnly): Static folders.
* **tags**: [IisWebApplicationPropertiesTags](#iiswebapplicationpropertiestags): Gets or sets tags on the resource.
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last update operation.
* **virtualApplications**: [IisVirtualApplicationUnit](#iisvirtualapplicationunit)[] (ReadOnly): Gets the list of application units for the web site.
* **virtualPath**: string (ReadOnly): Gets the virtual path of the application.
* **webServerId**: string (ReadOnly): Gets the web server id.
* **webServerName**: string (ReadOnly): Gets the web server name.

## IisWebApplicationPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IisWebServerProperties
### Properties
* **applianceNames**: string[] (ReadOnly): Gets the appliance names.
* **configurationLocation**: string (ReadOnly): Gets the configuration location.
* **createdTimestamp**: string (ReadOnly): Gets the timestamp marking creation of the entity.
* **displayName**: string (ReadOnly): Gets the display name.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Gets the Error details.
* **hasErrors**: bool (ReadOnly): Gets a value indicating whether the WebApp has errors or not.
* **isDeleted**: bool (ReadOnly): Gets a value indicating whether application is deleted.
* **machineIds**: string[] (ReadOnly): Gets the list of machines.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum
* **runAsAccountId**: string (ReadOnly): Gets the run as account id.
* **serverFqdn**: string (ReadOnly): Gets the server FQDN.
* **serverType**: string (ReadOnly): Gets the server type.
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last update operation.
* **version**: string (ReadOnly): Gets the configuration location.
* **webApplications**: string[] (ReadOnly): Gets the list of web applications.

## ImportMachineProperties
### Properties
* **allocatedMemoryInMb**: int: Gets or sets the allocated Memory in MB.
* **biosGuid**: string: Gets or sets the BIOS GUID.
* **biosSerialNumber**: string: Gets or sets the Machine BIOS serial number.
* **createdTimestamp**: string (ReadOnly): Gets the marking machine creation.
* **disks**: [WebRoleImportDisk](#webroleimportdisk)[] (ReadOnly): Disks attached to the machine.
* **displayName**: string (ReadOnly): Gets the Display name of the machine.
* **firmware**: string (ReadOnly): Firmware of the machine.
* **hypervisor**: string (ReadOnly): Fabric type.
* **hypervisorVersionNumber**: string (ReadOnly): Hypervisor version number.
* **ipAddresses**: string[] (ReadOnly): IP Addresses.
* **isDeleted**: bool (ReadOnly): Value indicating whether VM is deleted.
* **macAddress**: string (ReadOnly): MAC Address.
* **machineId**: string (ReadOnly): Machine ID.
* **machineManagerId**: string (ReadOnly): Machine manager ID.
* **networkInThroughput**: int (ReadOnly): Network in throughput.
* **networkOutThroughput**: int (ReadOnly): Network out throughput.
* **numberOfDisks**: int (ReadOnly): Number of disks.
* **numberOfNetworkAdapters**: int (ReadOnly): Number of network adapters.
* **numberOfProcessorCore**: int: Gets or sets the Number of Processor Cores allocated for the machine.
* **operatingSystemDetails**: [WebRoleOperatingSystem](#webroleoperatingsystem): Gets or sets the Operating System Details installed on the machine.
* **percentageCpuUtilization**: int (ReadOnly): CPU utilization.
* **percentageMemoryUtilization**: int (ReadOnly): Memory utilization.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string: The status of the last operation.
* **serverType**: string (ReadOnly): Server type.
* **storageInUseGb**: int (ReadOnly): Total storage in use.
* **tags**: [ImportMachinePropertiesTags](#importmachinepropertiestags) (Required): machine tags
* **totalDiskReadOperationsPerSecond**: int (ReadOnly): Total disk read operations per second.
* **totalDiskReadThroughput**: int (ReadOnly): Total disk read throughput.
* **totalDiskWriteOperationsPerSecond**: int (ReadOnly): Total disk write operations per second.
* **totalDiskWriteThroughput**: int (ReadOnly): Total disk write throughput.
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last updated on the machine.
* **vmFqdn**: string (ReadOnly): Server FQDN.

## ImportMachinePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ImportSiteProperties
### Properties
* **discoverySolutionId**: string: Gets or sets the ARM ID of migration hub solution for SDS.
* **masterSiteId**: string (ReadOnly): Gets the Master Site this site is linked to.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string: The status of the last operation.
* **serviceEndpoint**: string (ReadOnly): Gets the service endpoint.

## JobProperties
### Properties
* **activityId**: string (ReadOnly): Gets the activity Id used in the operation execution context.
* **clientRequestId**: string (ReadOnly): Gets the client request Id used in the operation execution context.
* **displayName**: string (ReadOnly): Gets or sets the display name of the Job.
* **endTime**: string (ReadOnly): Gets operation end time.
* **errors**: [ErrorDetails](#errordetails)[] (ReadOnly): Gets the errors.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): The status of the last operation.
* **startTime**: string (ReadOnly): Gets operation start time.
* **status**: string (ReadOnly): Gets operation status.

## MachineMetadata
### Properties
* **dependencyMapping**: string (Required): value representing state of dependency mapping (enabled/disabled).
* **machineArmId**: string (Required): arm id of the machine.
* **tags**: [MachineMetadataTags](#machinemetadatatags) (Required): machine tags

## MachineMetadataCollection
### Properties
* **value**: [MachineMetadata](#machinemetadata)[] (Required): The list of Machine MetaData.

## MachineMetadataTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MachineSoftwareInventoryProperties
### Properties
* **appsAndRoles**: [AppsAndRoles](#appsandroles) (ReadOnly): Apps And Roles of the machine entity.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum

## MasterSiteProperties
### Properties
* **allowMultipleSites**: bool: Gets or sets a value indicating whether multiple sites per site type are allowed.
* **customerStorageAccountArmId**: string: Gets or sets a value for customer storage account ARM id.
* **nestedSites**: string[] (ReadOnly): Gets the nested sites under Master Site.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Gets the private endpoint connections.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'NotSpecified' | string: Gets or sets the state of public network access.
* **sites**: string[]: Gets or sets the sites that are a part of Master Site. The key should contain the Site ARM name.

## OperatingSystem
### Properties
* **osArchitecture**: string: Gets or sets the Architecture of the operating system.
* **osName**: string: Gets or sets the Name of the operating system.
* **osType**: string: Gets or sets the type of the operating system.
* **osVersion**: string: Gets or sets the Version of the operating system.

## OracleDiscovery
### Properties
* **discoveryScopeStatus**: 'Disabled' | 'DiscoveryFailed' | 'DiscoveryInProgress' | 'DiscoveryNotStarted' | 'DiscoveryPartiallySucceded' | 'DiscoverySucceeded' | 'DiscoverySucceededAtleastOnce' | 'RunAsAccountNotAssociated' | string: Gets or sets status of partner discovery.
* **shallowDiscoveryStatus**: 'Disabled' | 'DiscoveryFailed' | 'DiscoveryInProgress' | 'DiscoveryNotStarted' | 'DiscoveryPartiallySucceded' | 'DiscoverySucceeded' | 'DiscoverySucceededAtleastOnce' | 'RunAsAccountNotAssociated' | string: Gets or sets status of partner shallow discovery.
* **totalDatabaseCount**: int: Gets or sets number of successfully discovered databases.
* **totalInstanceCount**: int: Gets or sets number of successfully discovered instances.

## OtherDatabase
### Properties
* **databaseType**: string (ReadOnly): Gets or sets DatabaseType of the OtherDatabase.
* **instance**: string (ReadOnly): Gets or sets Instance of the OtherDatabase.
* **version**: string (ReadOnly): Gets or sets Version of the OtherDatabase.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionPropertiesV2](#privateendpointconnectionpropertiesv2): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionPropertiesV2
### Properties
* **groupIds**: string[] (ReadOnly): array of group ids
* **privateEndpoint**: [ResourceId](#resourceid) (ReadOnly): private endpoints
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): private endpoints connection state
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum

## PrivateLinkResourceProperties
### Properties
* **groupId**: string: group id
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum
* **requiredMembers**: string[]: required members
* **requiredZoneNames**: string[]: required zone names

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: actions required
* **description**: string: description string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: state status

## ProcessorInfo
### Properties
* **name**: string: Gets or sets the name\model of a processor.
* **numberOfCoresPerSocket**: int: Gets or sets the total number of cores in a socket.
* **numberOfSockets**: int: Gets or sets the number of sockets.

## ProductSupportStatus
### Properties
* **currentVersion**: string: current version.
* **esuStatus**: 'Active' | 'InActive' | 'Unknown' | string: esu status.
* **esuYear**: 'FirstYear' | 'SecondYear' | 'ThirdYear' | 'Unknown' | 'UpgradeYear' | string: esu year.
* **supportEndDate**: string: support end date.
* **supportStatus**: 'Extended' | 'Mainstream' | 'Unknown' | string: support status.

## ProxySiteRefreshBody
### Properties
* **applianceName**: string: Gets or sets the appliance name of the agent in the site.

## RequestExportMachineErrorsProperties
### Properties
* **discoveryScope**: 'AppsAndRoles' | 'DependencyMap' | 'SQLServerConnectionInfo' | 'StaticData' | string: Gets or sets the discovery scope.

## ResourceId
### Properties
* **id**: string (ReadOnly): id name

## RunAsAccountMachineInput
### Properties
* **machineId**: string: Gets or sets the ARM id of the machine.
* **runAsAccountId**: string: run as AccountId

## RunAsAccountProperties
### Properties
* **applianceName**: string (ReadOnly): Gets the appliance name of the run as account.
* **createdTimestamp**: string (ReadOnly): Timestamp marking run as account creation.
* **credentialType**: string (ReadOnly): Gets the credential type of the run as account.
* **displayName**: string (ReadOnly): Display name of the run as account.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum
* **updatedTimestamp**: string (ReadOnly): Timestamp marking last updated on the run as account.

## SasUriResponse
### Properties
* **importType**: 'AzureMigrateCSV' | 'RVToolsXlsx' | string: Gets or sets the import type.
* **jobArmId**: string: Gets or sets the job ARM ID.
* **uri**: string: Gets or sets the SAS URI.

## ServerDisk
### Properties
* **diskType**: string: Gets or sets Type of the disk.
* **generatedId**: string: Gets or sets generated Id of the disk.
* **id**: string: Gets or sets Id of the disk.
* **lun**: int: Gets or sets LUN of the disk.
* **maxSizeInBytes**: int: Gets or sets Bytes allocated for the disk.
* **name**: string: Gets or sets Name of the disk.
* **path**: string: Gets or sets Path of the disk.

## ServerNetworkAdapter
### Properties
* **ipAddressList**: string[] (ReadOnly): Gets IP addresses for the machine.
* **ipAddressType**: string: Gets or sets Type of the IP address.
* **macAddress**: string: Gets or sets Mac address of the NIC.
* **networkName**: string: Gets or sets Network Name.
* **nicId**: string: Gets or sets the NIC Id.

## ServerProperties
### Properties
* **allocatedMemoryInMb**: int: Gets or sets the allocated Memory in MB.
* **applianceNames**: string[] (ReadOnly): Gets the appliance names.
* **applicationDiscovery**: [ApplicationDiscovery](#applicationdiscovery) (ReadOnly): Gets the data related to application discovery.
* **appsAndRoles**: [AppsAndRoles](#appsandroles) (ReadOnly): Apps And Roles of the Server.
* **arcDiscovery**: [ArcDiscovery](#arcdiscovery) (ReadOnly): Gets the data related to Azure arc discovery.
* **biosGuid**: string: Gets or sets the BIOS GUID.
* **biosSerialNumber**: string: Gets or sets the Machine BIOS serial number.
* **createdTimestamp**: string (ReadOnly): Gets the marking machine creation.
* **dependencyMapDiscovery**: [DependencyMapDiscovery](#dependencymapdiscovery) (ReadOnly): Gets the data related to dependency map discovery.
* **dependencyMapping**: string (ReadOnly): Gets or sets if dependency mapping feature is enabled or not for the VM.
* **dependencyMappingEndTime**: string (ReadOnly): Gets or sets when dependency mapping collection was last disabled.
* **dependencyMappingStartTime**: string (ReadOnly): Gets or sets when dependency mapping collection is last started.
* **disks**: [ServerDisk](#serverdisk)[]: Gets or sets the disk details of server.
* **displayName**: string (ReadOnly): Gets the Display name of the machine. For server entity hydrated FQDN is set as display name as the server id and server name are same.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Errors for machine.
* **firmware**: string: Gets or sets the firmware.
* **fqdn**: string: Gets or sets the FQDN/IPAddress of the server.
* **guestDetailsDiscoveryTimestamp**: string (ReadOnly): The last time at which the Guest Details was discovered or the error while discovering guest details based discovery of the machine.
* **guestOsDetails**: [GuestOsDetails](#guestosdetails) (ReadOnly): Operating System Details extracted from the guest bu executing script inside the guest VM.
* **hydratedFqdn**: string: Gets or sets the FQDN of machine which can be changed.
* **iisDiscovery**: [WebAppDiscovery](#webappdiscovery) (ReadOnly): Gets the data related to iis discovery.
* **isDeleted**: bool (ReadOnly): Value indicating whether VM is deleted.
* **isGuestDetailsDiscoveryInProgress**: bool (ReadOnly): Whether Refresh Fabric Layout Guest Details has been completed once. Portal will show discovery in progress, if this value is true.
* **networkAdapters**: [ServerNetworkAdapter](#servernetworkadapter)[]: Gets or sets the network adapters of the server.
* **numberOfApplications**: int (ReadOnly): Number of applications installed in the guest VM.
* **numberOfProcessorCore**: int: Gets or sets the Number of Processor Cores allocated for the machine.
* **operatingSystemDetails**: [OperatingSystem](#operatingsystem): Gets or sets the Operating System Details installed on the machine.
* **oracleDiscovery**: [OracleDiscovery](#oraclediscovery) (ReadOnly): Gets the data related to Oracle discovery.
* **processorInfo**: [ProcessorInfo](#processorinfo) (ReadOnly): Processor Info of the Server machine.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus): product support status.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string: Provisioning state of the server resource.
* **runAsAccountId**: string: Gets or sets the run as account ID of the machine.
* **springBootDiscovery**: [SpringBootDiscovery](#springbootdiscovery) (ReadOnly): Gets the data related to SpringBoot discovery.
* **sqlDiscovery**: [SqlDiscovery](#sqldiscovery) (ReadOnly): Gets the data related to SQL discovery.
* **staticDiscovery**: [StaticDiscovery](#staticdiscovery) (ReadOnly): Gets the data related to static discovery.
* **tags**: [ServerPropertiesTags](#serverpropertiestags): Gets or sets tags on the Server machine.
* **tomcatDiscovery**: [WebAppDiscovery](#webappdiscovery) (ReadOnly): Gets the data related to tomcat discovery.
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last updated on the machine.
* **validationRequired**: string: Gets or sets the validation required for the machine.
* **webAppDiscovery**: [WebAppDiscovery](#webappdiscovery) (ReadOnly): Gets the data related to Web application discovery.

## ServerPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ServerSiteUsage
### Properties
* **runAsAccountCount**: int: Gets or sets the number of run as accounts in the site.
* **serverCount**: int: Gets or sets the number of servers part of the site.

## ServerSiteUsageResponse
### Properties
* **runAsAccounts**: int (Required): Gets or sets the number of run as accounts in the site.
* **serverCount**: int (Required): Gets or sets the number of servers part of the site.

## SharePointServer
### Properties
* **isEnterprise**: bool (ReadOnly): Gets or sets a value indicating whether the SharePointServer is Enterprise.
* **productName**: string (ReadOnly): Gets or sets ProductName of the SharePointServer.
* **status**: string (ReadOnly): Gets or sets Status of the SharePointServer.
* **version**: string (ReadOnly): Gets or sets Version of the SharePointServer.

## SiteAgentProperties
### Properties
* **id**: string (ReadOnly): Gets the ID of the agent.
* **keyVaultId**: string: Gets or sets the key vault ARM Id.
* **keyVaultUri**: string: Gets or sets the key vault URI.
* **lastHeartBeatUtc**: string (ReadOnly): Gets the last heartbeat time of the agent in UTC.
* **version**: string (ReadOnly): Gets the version of the agent.

## SiteApplianceProperties
### Properties
* **agentDetails**: [SiteAgentProperties](#siteagentproperties): Gets or sets the on-premises agent details.
* **applianceName**: string: Gets or sets the Appliance Name.
* **servicePrincipalIdentityDetails**: [SiteSpnProperties](#sitespnproperties): Gets or sets the service principal identity details used by agent for  communication              to the service.

## SiteErrorSummary
### Properties
* **applianceName**: string (Required): Appliance Name.
* **discoveryScopeErrorSummaries**: [DiscoveryScopeErrorSummary](#discoveryscopeerrorsummary) (Required): Gets the error message.
* **nextLink**: string: The link to fetch more models.

## SiteHealthSummary
### Properties
* **affectedObjectsCount**: int: Gets or sets the count of affected objects.
* **affectedResources**: string[]: Gets or sets the affected resources.
* **affectedResourceType**: string (ReadOnly): Gets the affected resource type.
* **applianceName**: string (ReadOnly): Gets the appliance name.
* **errorCode**: string (ReadOnly): Gets the error code.
* **errorId**: int (ReadOnly): Gets the error Id.
* **errorMessage**: string (ReadOnly): Gets the error message.
* **fabricLayoutUpdateSources**: ('RefreshFabricLayout' | 'RefreshFabricLayoutDependencyMap' | 'RefreshFabricLayoutGuest' | string)[]: Gets or sets sources of the exception.
* **hitCount**: int: Gets or sets the hit count of the error.
* **remediationGuidance**: string (ReadOnly): Gets the remediation guidance.
* **severity**: string (ReadOnly): Gets the severity of error.
* **summaryMessage**: string (ReadOnly): Gets the summary message.

## SiteHealthSummaryCollection
### Properties
* **nextLink**: string (ReadOnly): Gets the value of next link.
* **value**: [SiteHealthSummary](#sitehealthsummary)[] (Required): Gets the list of SiteHealthSummary.

## SiteProperties
### Properties
* **agentDetails**: [SiteAgentProperties](#siteagentproperties): Gets or sets the on-premises agent details.
* **applianceName**: string: Gets or sets the Appliance Name.
* **discoveryScenario**: 'DR' | 'Migrate' | string: Gets or sets the discovery scenario.
* **discoverySolutionId**: string: Gets or sets the ARM ID of migration hub solution for SDS.
* **masterSiteId**: string (ReadOnly): Gets the Master Site this site is linked to.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string: The status of the last operation.
* **serviceEndpoint**: string (ReadOnly): Gets the service endpoint.
* **servicePrincipalIdentityDetails**: [SiteSpnProperties](#sitespnproperties): Gets or sets the service principal identity details used by agent for communication to the service.
* **siteAppliancePropertiesCollection**: [SiteApplianceProperties](#siteapplianceproperties)[]: Gets or sets the appliance details used by service to communicate to the appliance.

## SiteSpnProperties
### Properties
* **aadAuthority**: string: Gets or sets the AAD Authority URL which was used to request the token for the service principal.
* **applicationId**: string: Gets or sets the application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure             services.
* **audience**: string: Gets or sets the intended audience for the service principal.
* **machineResourceId**: string: Gets or sets the ARM ID of the arc for servers resource.
* **objectId**: string: Gets or sets the object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **rawCertData**: string: Gets or sets the raw certificate data for building certificate expiry flows.
* **tenantId**: string: Gets or sets the tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.

## SitesProperties
### Properties
* **agentDetails**: [SiteAgentProperties](#siteagentproperties): Gets or sets the on-premises agent details.
* **applianceName**: string: Gets or sets the Appliance Name.
* **discoveryScenario**: 'DR' | 'Migrate' | string: Gets or sets the discovery scenario.
* **discoverySolutionId**: string: Gets or sets the ARM ID of migration hub solution for SDS.
* **masterSiteId**: string (ReadOnly): Gets the Master Site this site is linked to.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): The status of the last operation.
* **serviceEndpoint**: string (ReadOnly): Gets the service endpoint.
* **servicePrincipalIdentityDetails**: [SiteSpnProperties](#sitespnproperties): Gets or sets the service principal identity details used by agent for communication to the service.
* **siteAppliancePropertiesCollection**: [SiteApplianceProperties](#siteapplianceproperties)[]: Gets or sets the appliance details used by service to communicate to the appliance.

## SpringBootDiscovery
### Properties
* **discoveryScopeStatus**: 'Disabled' | 'DiscoveryFailed' | 'DiscoveryInProgress' | 'DiscoveryNotStarted' | 'DiscoveryPartiallySucceded' | 'DiscoverySucceeded' | 'DiscoverySucceededAtleastOnce' | 'RunAsAccountNotAssociated' | string: Gets or sets status of partner discovery.
* **shallowDiscoveryStatus**: 'Disabled' | 'DiscoveryFailed' | 'DiscoveryInProgress' | 'DiscoveryNotStarted' | 'DiscoveryPartiallySucceded' | 'DiscoverySucceeded' | 'DiscoverySucceededAtleastOnce' | 'RunAsAccountNotAssociated' | string: Gets or sets status of partner shallow discovery.
* **totalApplicationCount**: int: Gets or sets number of successfully discovered applications.
* **totalInstanceCount**: int: Gets or sets number of successfully discovered instances.

## SqlAvailabilityGroupProperties
### Properties
* **availabilityGroupName**: string: Gets or sets the SQL Availability Group Name.
* **availabilityGroupType**: 'Distributed' | 'Traditional' | 'Unknown' | string: Gets or sets the type of availability group.             Currently there are two types of AGs Traditional and Distributed.
* **availabilityReplicas**: [SqlAvailabilityReplicaProperties](#sqlavailabilityreplicaproperties)[] (ReadOnly): Gets the list of availability replica properties which together forms this availability group.
* **clusterName**: string: Gets or sets the Cluster name where AG is hosted.
* **createdTimestamp**: string: Gets or sets the marking machine creation.
* **isDeleted**: bool: Gets or sets a value indicating whether the entity is deleted.
* **isMultiSubNet**: bool: Gets or sets a value indicating whether AG is multi subnet or not.
* **isPartOfDistributedAvailabilityGroup**: bool: Gets or sets a value indicating whether this Availability group is part of a distributed AG.
* **parentReplicaOverviewList**: [SqlAvailabilityReplicaOverview](#sqlavailabilityreplicaoverview)[] (ReadOnly): Gets the parent availability replica overview if any. This would be set with details of parent AG and AR for cases where this availability group is a part of a distributed AG. Currently, we do not populate this since discovery and linking of DAG(Distributed Availability Group) is not implemented.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum
* **updatedTimestamp**: string: Gets or sets the timestamp marking last updated on the machine.

## SqlAvailabilityGroupReplicaInfo
### Properties
* **availabilityGroupArmId**: string: Gets or sets the AG ARM ID which are part of this Replica.
* **availabilityGroupName**: string: Gets or sets the name of the availability replica.
* **clusterName**: string: Gets or sets the name of the cluster on which this replica is hosted.

## SqlAvailabilityReplicaOverview
### Properties
* **availabilityGroupArmId**: string: Gets or sets the Availability Group Id in which this database participates if any. It would be set if the database has {Microsoft.Azure.FDS.CosmosDB.SqlDatabaseEntity.IsDatabaseHighlyAvailable} has a value "true".
* **availabilityGroupName**: string: Gets or sets the SQL Availability group name.
* **availabilityReplicaId**: string: Gets or sets the SQL Availability Replica Id within the Availability Group this database is a part of.
* **replicaState**: 'Primary' | 'Secondary' | 'Unknown' | string: Gets or sets the state of the availability replica.

## SqlAvailabilityReplicaProperties
### Properties
* **availabilityReplicaId**: string: Gets or sets the SQL Availability Replica Id.
* **availabilityReplicaName**: string: Gets or sets the SQL Availability Replica Name.
* **replicaCommitMode**: 'Asynchronous' | 'Synchronous' | 'Unknown' | string: Gets or sets the commit mode of the replica.
* **replicaReadMode**: 'None' | 'ReadOnly' | 'ReadWrite' | 'Unknown' | string: Gets or sets the read mode of the replica.
* **replicaSeedMode**: 'Automatic' | 'Manual' | 'Unknown' | string: Gets or sets the seed mode of the replica.
* **replicaState**: 'Primary' | 'Secondary' | 'Unknown' | string: Gets or sets the state of the availability replica.
* **replicaSyncStatus**: 'Synchronized' | 'Unknown' | 'Unsynchronized' | string: Gets or sets the synchronization status of the replica.
* **replicaType**: 'AvailabilityGroupReplica' | 'DatabaseReplica' | 'Unknown' | string: Gets or sets the replica type of the availability group.
* **sqlAvailabilityGroupReplicaInfo**: [SqlAvailabilityGroupReplicaInfo](#sqlavailabilitygroupreplicainfo): Gets or sets the Availability Replica object if Replica is of type AG. This is null in case Replica is of type database. This is to be populated in case AG is of type DAG.
* **sqlDatabaseReplicaInfo**: [SqlDatabaseReplicaInfo](#sqldatabasereplicainfo): Gets or sets the Availability Replica object if Replica is of type database. This is null in case Replica is of type AG. This is to be populated in case of normal AG.

## SqlDatabasePropertiesV2
### Properties
* **compatibilityLevel**: string: Gets or sets the database compatibility level.
* **createdTimestamp**: string: Gets or sets the marking machine creation.
* **databaseName**: string: Gets or sets the SQL database name.
* **errors**: [Errors](#errors)[] (ReadOnly): Gets the errors.
* **fileMetadataList**: [FileMetaData](#filemetadata)[] (ReadOnly): Gets the file metadata list.
* **hostname**: string: Gets or sets the hostname.
* **isDatabaseHighlyAvailable**: bool: Gets or sets a value indicating whether this database is a part of an HA setup.
* **isDeleted**: bool: Gets or sets a value indicating whether the entity is deleted.
* **parentReplicaOverview**: [SqlAvailabilityReplicaOverview](#sqlavailabilityreplicaoverview): Gets or sets the Replica overview.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string: The status of the last operation.
* **sizeMb**: int: Gets or sets the size in Mb.
* **sqlServerArmId**: string: Gets or sets the SQL Server ARM Id in which the database resides.
* **sqlServerName**: string: Gets or sets the SQL Server Id in which the database resides.
* **status**: string: Gets or sets the status.
* **updatedTimestamp**: string: Gets or sets the timestamp marking last updated on the machine.

## SqlDatabaseReplicaInfo
### Properties
* **hostName**: string: Gets or sets the host name of the availability replica.
* **sqlServerArmId**: string: Gets or sets the SQL Server name of the availability replica.
* **sqlServerName**: string: Gets or sets the SQL Server name of the availability replica.

## SqlDiscovery
### Properties
* **discoveryScopeStatus**: 'Disabled' | 'DiscoveryFailed' | 'DiscoveryInProgress' | 'DiscoveryNotStarted' | 'DiscoveryPartiallySucceded' | 'DiscoverySucceeded' | 'DiscoverySucceededAtleastOnce' | 'RunAsAccountNotAssociated' | string: discovery Scope Status
* **sqlMetadataDiscoveryPipe**: 'CIM' | 'Other' | 'PowerShell' | 'SSH' | 'Unknown' | 'VMware' | string: sql Metadata DiscoveryPipe
* **sqlMetadataHydratedRunAsAccountId**: string: sql Metadata Hydrated RunAsAccountId
* **successfullyDiscoveredServerCount**: int: successfully Discovered ServerCount
* **totalServerCount**: int: total Server Count

## SqlDiscoverySiteDataSourceProperties
### Properties
* **discoverySiteId**: string: Gets or sets the discovery site Id.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum

## SqlFciProperties
### Properties
* **isMultiSubnet**: bool: Gets or sets a value indicating whether the FCI is hosted on possible owners which are in multiple subnets.
* **networkName**: string: Gets or sets the FCI Network Name used to connect to this FCI instance.
* **sharedDiskCount**: int: Gets or sets the count of Shared Disks for SQL FCI.
* **state**: 'Failed' | 'Inherited' | 'Initializing' | 'Offline' | 'OfflinePending' | 'Online' | 'OnlinePending' | 'Pending' | 'Unknown' | string: Gets or sets the state of the FCI instance.

## SqlMachineOverview
### Properties
* **displayName**: string: Gets or sets SQL machine display name.
* **fciRole**: 'ActiveNode' | 'NotApplicable' | 'PossibleOwnerNode' | 'Unknown' | string: Gets or sets SQL machine FCI role.
* **machineArmId**: string: Gets or sets SQL machine ARM ID.

## SqlServerApplication
### Properties
* **clustered**: string (ReadOnly): Gets or sets Clustered of the SQLServer.
* **clusterName**: string (ReadOnly): Gets or sets ClusterName of the SQLServer.
* **commaSeparatedIps**: string (ReadOnly): Gets or sets the comma separated IPs of the SQLServer.
* **dnsHostName**: string (ReadOnly): Gets or sets the DNS host name of SQLServer.
* **edition**: string (ReadOnly): Gets or sets Edition of the SQLServer.
* **isNamedPipeEnabled**: bool (ReadOnly): Gets or sets the value which reflects if Named Pipe is enabled or not.
* **isTcpIpEnabled**: bool (ReadOnly): Gets or sets the value which reflects if Named Pipe is enabled or not.
* **name**: string (ReadOnly): Gets or sets Name of the SQLServer.
* **namedPipeName**: string (ReadOnly): Gets the status.
* **port**: string (ReadOnly): Gets or sets the port of the SQLServer.
* **servicePack**: string (ReadOnly): Gets or sets ServicePack of the SQLServer.
* **status**: string (ReadOnly): Gets the status.
* **version**: string (ReadOnly): Gets or sets Version of the SQLServer.

## SqlServerProperties
### Properties
* **createdTimestamp**: string: Gets or sets the marking machine creation.
* **edition**: string: Gets or sets the SQL server edition.
* **engineEdition**: string: Gets or sets the SQL server engine edition.
* **errors**: [Errors](#errors)[] (ReadOnly): Gets the errors.
* **hostName**: string: Gets or sets hostname.
* **hydratedRunAsAccountId**: string: Gets or sets the hydrated run as account ID of the SQL server.
* **hyperthreadRatio**: int: Gets or sets the Hyper thread ratio.
* **isClustered**: bool: Gets or sets a value indicating whether failover cluster is configured or not.
* **isDeleted**: bool: Gets or sets a value indicating whether the entity is deleted.
* **isHighAvailabilityEnabled**: bool: Gets or sets a value indicating whether High Availability is enabled or not.
* **logicalCpuCount**: int: Gets or sets logical CPU count.
* **machineArmIds**: string[] (ReadOnly): Gets the list of machine ARM Ids on which the SQL server is deployed.
* **machineOverviewList**: [SqlMachineOverview](#sqlmachineoverview)[] (ReadOnly): Gets the Machine Overview properties of all machines on which the SQL server is deployed.
* **maxServerMemoryInUseInMb**: int: Gets or sets maximum server memory in use.
* **numberOfAgDatabases**: int: Gets or sets the number of databases part of availability group on this SQL instance.
* **numberOfUserDatabases**: int: Gets or sets total number of users databases.
* **numOfLogins**: int: Gets or sets number of logins.
* **physicalCpuCount**: int: Gets or sets physical CPU count.
* **portNumber**: int: Gets or sets the Preferred Port Number.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus): product support status.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string: The status of the last operation.
* **runAsAccountId**: string: Gets or sets the run as account ID of the SQL server.
* **sqlFciProperties**: [SqlFciProperties](#sqlfciproperties): Gets or sets the FCI properties if the instance is an FCI instance. This would be populated if IsClustered is true.
* **sqlServerName**: string: Gets or sets the SQL server instance name.
* **sqlStartTime**: string: Gets or sets the SQL start time.
* **status**: 'ContinuePending' | 'PausePending' | 'Paused' | 'Running' | 'StartPending' | 'StopPending' | 'Stopped' | 'Unknown' | string: Gets or sets the powered on status.
* **sumOfUserDatabasesSizeInMb**: int: Gets or sets total size of all user databases.
* **tags**: [SqlServerPropertiesTags](#sqlserverpropertiestags): Gets or sets tags on the resource.
* **tempDbSizeInMb**: int: Gets or sets size of temp database.
* **updatedTimestamp**: string: Gets or sets the timestamp marking last updated on the machine.
* **version**: string: Gets or sets the SQL server version.
* **visibleOnlineCoreCount**: int: Gets or sets the SQL server number of cores that have visible online status.

## SqlServerPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SqlSiteProperties
### Properties
* **discoveryScenario**: 'DR' | 'Migrate' | string: Gets or sets the discovery scenario.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum
* **serviceEndpoint**: string (ReadOnly): Gets the service endpoint.
* **siteAppliancePropertiesCollection**: [SiteApplianceProperties](#siteapplianceproperties)[]: Gets or sets the appliance details used by service to communicate to the appliance.

## SqlSiteRefreshBody
### Properties
* **applianceName**: string: Gets or sets the appliance name of the agent in the site.

## SqlSiteUsage
### Properties
* **databaseCount**: int: Gets or sets the number of databases discovered in the site.
* **runAsAccountCount**: int: Gets or sets the number of run as accounts in the site.
* **serverCount**: int: Gets or sets the number of servers discovered in the site.

## StaticDiscovery
### Properties
* **discoveryScopeStatus**: 'Disabled' | 'DiscoveryFailed' | 'DiscoveryInProgress' | 'DiscoveryNotStarted' | 'DiscoveryPartiallySucceded' | 'DiscoverySucceeded' | 'DiscoverySucceededAtleastOnce' | 'RunAsAccountNotAssociated' | string (ReadOnly): Gets discovery scope status.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Gets errors for discovery scope.
* **hydratedRunAsAccountId**: string (ReadOnly): Gets the run as account ID with which feature worked successfully. It is discovered by the agent from the list of credentials.

## SystemCenter
### Properties
* **productName**: string (ReadOnly): Gets or sets ProductName of the SystemCenter.
* **status**: string (ReadOnly): Gets or sets Status of the SystemCenter.
* **version**: string (ReadOnly): Gets or sets Version of the SystemCenter.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TagsMachineInput
### Properties
* **machineId**: string: Gets or sets the ARM id of the machine.
* **tags**: [TagsMachineInputTags](#tagsmachineinputtags): run as AccountId

## TagsMachineInputTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TomcatEngineUnit
### Properties
* **hosts**: [TomcatHostUnit](#tomcathostunit)[]: Gets or sets the hosts defined for the engine.
* **name**: string: Gets or sets the name of the engine.

## TomcatHostUnit
### Properties
* **appBase**: string: Gets or sets the app base value configured for the host.
* **appBasePath**: string: Gets or sets the app base path for the host.
* **name**: string: Gets or sets the name of the host.

## TomcatServiceUnit
### Properties
* **connectors**: [ConnectorUnit](#connectorunit)[]: Gets or sets the connectors defined for the service component.
* **engine**: [TomcatEngineUnit](#tomcatengineunit): Gets or sets the engine defined for the service component.
* **name**: string: Gets or sets the name of the service.

## TomcatWebApplicationProperties
### Properties
* **applianceNames**: string[] (ReadOnly): Gets the appliance names.
* **bindings**: [FrontEndBinding](#frontendbinding)[] (ReadOnly): Gets the front end bindings for the application.
* **configurations**: [WebApplicationConfigurationUnit](#webapplicationconfigurationunit)[] (ReadOnly): Gets the configuration.
* **createdTimestamp**: string (ReadOnly): Gets the timestamp marking creation of the entity.
* **directories**: [WebApplicationDirectoryUnit](#webapplicationdirectoryunit)[] (ReadOnly): Gets the directories.
* **displayName**: string (ReadOnly): Gets the display name.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Gets the Error details.
* **frameworks**: [WebApplicationFramework](#webapplicationframework)[] (ReadOnly): Gets the Error details.
* **hasDatabaseDependency**: bool (ReadOnly): Boolean value having true if the application has database dependency.
* **hasErrors**: bool (ReadOnly): Gets a value indicating whether the WebApp has errors or not.
* **isDeleted**: bool (ReadOnly): Gets a value indicating whether application is deleted.
* **isExternalLoggingConfigured**: bool (ReadOnly): Boolean value having true if the application has file dependency.
* **machineArmIds**: string[] (ReadOnly): Gets the list of machine ARM Ids on which the web application is deployed.
* **machineDisplayName**: string (ReadOnly): Machine display name
* **physicalPath**: string (ReadOnly): Gets the physical path of the application.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum
* **serverType**: string (ReadOnly): Gets the server type.
* **staticFolders**: string[] (ReadOnly): Static folders.
* **tags**: [TomcatWebApplicationPropertiesTags](#tomcatwebapplicationpropertiestags) (ReadOnly): Gets tags that can be used with ODATA.
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last update operation.
* **virtualPath**: string (ReadOnly): Gets the virtual path of the application.
* **webServerId**: string (ReadOnly): Gets the web server id.
* **webServerName**: string (ReadOnly): Gets the web server name.

## TomcatWebApplicationPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TomcatWebServerProperties
### Properties
* **applianceNames**: string[] (ReadOnly): Gets the appliance names.
* **catalinaHome**: string (ReadOnly): Catalina Home
* **configurationLocation**: string (ReadOnly): Gets the configuration location.
* **createdTimestamp**: string (ReadOnly): Gets the timestamp marking creation of the entity.
* **displayName**: string (ReadOnly): Gets the display name.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Gets the Error details.
* **hasErrors**: bool (ReadOnly): Gets a value indicating whether the WebApp has errors or not.
* **isAccessLogValvePresent**: bool (ReadOnly): is access log valve present
* **isClusteringPresent**: bool: Gets a value indicating whether application is deleted.
* **isDeleted**: bool (ReadOnly): Gets a value indicating whether application is deleted.
* **isMemoryRealmPresent**: bool (ReadOnly): Gets a value indicating whether application is deleted.
* **isSessionTrackingPresent**: bool (ReadOnly): is session tracking present
* **jvmVersion**: string (ReadOnly): Version  of the JVM
* **machineIds**: string[] (ReadOnly): Gets the list of machines.
* **maxMemoryUsageInMb**: string (ReadOnly): max memory usage in mb
* **operatingSystemDetails**: [OperatingSystem](#operatingsystem): Gets or sets the Operating System Details installed on the machine.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum
* **runAsAccountId**: string (ReadOnly): Gets the run as account id.
* **serverFqdn**: string (ReadOnly): Gets the server FQDN.
* **serverType**: string (ReadOnly): Gets the server type.
* **services**: [TomcatServiceUnit](#tomcatserviceunit)[]: Gets or sets the services defined in the server.
* **sessionPersistenceMechanism**: string (ReadOnly): session persistence mechanism
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last update operation.
* **version**: string (ReadOnly): Gets the configuration location.
* **webApplications**: string[] (ReadOnly): Gets the list of web applications.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UpdateMachineDepMapStatus
### Properties
* **machines**: [DependencyMapMachineInput](#dependencymapmachineinput)[]: Gets or sets the machine collection.

## UpdateMachineRunAsAccount
### Properties
* **machines**: [RunAsAccountMachineInput](#runasaccountmachineinput)[]: Gets or sets the machine collection.

## UpdateMachineTags
### Properties
* **machines**: [TagsMachineInput](#tagsmachineinput)[]: Gets or sets the machine collection.

## VcenterProperties
### Properties
* **createdTimestamp**: string (ReadOnly): Gets the timestamp marking vCenter creation.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Gets the errors.
* **fqdn**: string: Gets or sets the FQDN/IPAddress of the vCenter.
* **friendlyName**: string: Gets or sets the friendly name of the vCenter.
* **instanceUuid**: string (ReadOnly): Gets the instance UUID of the vCenter.
* **perfStatisticsLevel**: string (ReadOnly): Gets the performance statistics enabled on the vCenter.
* **port**: string: Gets or sets the port of the vCenter.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string: The status of the last operation.
* **runAsAccountId**: string: Gets or sets the run as account ID of the vCenter.
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last updated on the vCenter.
* **version**: string (ReadOnly): Gets the version of the vCenter.

## VmwareDatastore
### Properties
* **capacityInGb**: int (ReadOnly): Capacity of the data store.
* **freeSpaceInGb**: int (ReadOnly): Free space of the data store.
* **symbolicName**: string (ReadOnly): Symbolic name of the data store.
* **type**: 'CIFS' | 'NFS' | 'NFS41' | 'PMEM' | 'Unknown' | 'VFFS' | 'VMFS' | 'VSAN' | 'VVOL' | string (ReadOnly): Type of the data store.
* **uuid**: string (ReadOnly): Data store UUID.

## VmwareDisk
### Properties
* **controllerType**: string (ReadOnly): Gets or sets a value indicating the type of the disk controller type.
* **diskMode**: string (ReadOnly): Disk mode property used for identifying independent disks.
* **diskProvisioningPolicy**: string (ReadOnly): The provisioning policy of the disk. It is Thin or Thick or Unknown for the VMWare VMDK.
* **diskScrubbingPolicy**: string (ReadOnly): The scrubbing policy of disks which can be eagerly zeroed or lazily zeroed.
* **diskType**: string: Gets or sets Type of the disk.
* **label**: string (ReadOnly): Label of the disk.
* **lun**: int: Gets or sets LUN of the disk.
* **maxSizeInBytes**: int: Gets or sets Bytes allocated for the disk.
* **name**: string: Gets or sets Name of the disk.
* **path**: string: Gets or sets Path of the disk.
* **uuid**: string (ReadOnly): Disk UUID.

## VmwareHostProperties
### Properties
* **applianceNames**: string[] (ReadOnly): Gets the appliance names.
* **createdTimestamp**: string (ReadOnly): Gets the timestamp marking VMware host creation.
* **datastores**: [VmwareDatastore](#vmwaredatastore)[] (ReadOnly): Gets the data stores.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last updated on the VMware host.
* **uuid**: string (ReadOnly): Gets the instance UUID of the vmware host.
* **vcenterId**: string (ReadOnly): Gets the V-center ID.

## VmwareMachineProperties
### Properties
* **allocatedMemoryInMb**: int: Gets or sets the allocated Memory in MB.
* **altGuestName**: string (ReadOnly): Gets or sets the machine alt guest name.
* **applianceNames**: string[] (ReadOnly): Gets the appliance names.
* **applicationDiscovery**: [ApplicationDiscovery](#applicationdiscovery) (ReadOnly): Gets the data related to application discovery.
* **appsAndRoles**: [AppsAndRoles](#appsandroles) (ReadOnly): Apps And Roles of the Server.
* **arcDiscovery**: [ArcDiscovery](#arcdiscovery) (ReadOnly): Gets the data related to Azure arc discovery.
* **biosGuid**: string: Gets or sets the BIOS GUID.
* **biosSerialNumber**: string: Gets or sets the Machine BIOS serial number.
* **changeTrackingEnabled**: bool (ReadOnly): Value indicating whether change tracking is enabled.
* **changeTrackingSupported**: bool (ReadOnly): Value indicating whether change tracking is supported.
* **createdTimestamp**: string (ReadOnly): Gets the marking machine creation.
* **dataCenterScope**: string (ReadOnly): Scope of the data center.
* **dependencyMapDiscovery**: [DependencyMapDiscovery](#dependencymapdiscovery) (ReadOnly): Gets the data related to dependency map discovery.
* **dependencyMapping**: string (ReadOnly): Gets or sets if dependency mapping feature is enabled or not for the VM.
* **dependencyMappingEndTime**: string (ReadOnly): Gets or sets when dependency mapping collection was last disabled.
* **dependencyMappingStartTime**: string (ReadOnly): Gets or sets when dependency mapping collection is last started.
* **description**: string (ReadOnly): User description of the machine.
* **diskEnabledUuid**: string (ReadOnly): Gets or sets whether Disk Enabled UUID is set or not.
* **disks**: [VmwareDisk](#vmwaredisk)[] (ReadOnly): Disks attached to the machine.
* **displayName**: string (ReadOnly): Gets the Display name of the machine.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Errors for machine.
* **firmware**: string: Gets or sets the firmware.
* **guestDetailsDiscoveryTimestamp**: string (ReadOnly): The last time at which the Guest Details was discovered or the error while discovering guest details based discovery of the machine.
* **guestOsDetails**: [GuestOsDetails](#guestosdetails) (ReadOnly): Operating System Details extracted from the guest bu executing script inside the guest VM.
* **hostInMaintenanceMode**: bool (ReadOnly): Indicates whether the host is in maintenance mode.
* **hostName**: string (ReadOnly): The host name.
* **hostPowerState**: string (ReadOnly): The host power state.
* **hostVersion**: string (ReadOnly): The host version.
* **iisDiscovery**: [WebAppDiscovery](#webappdiscovery) (ReadOnly): Gets the data related to iis discovery.
* **instanceUuid**: string (ReadOnly): On-premise Instance UUID of the machine.
* **isDeleted**: bool (ReadOnly): Value indicating whether VM is deleted.
* **isGuestDetailsDiscoveryInProgress**: bool (ReadOnly): Whether Refresh Fabric Layout Guest Details has been completed once. Portal will show discovery in progress, if this value is true.
* **maxSnapshots**: int (ReadOnly): Maximum number of snapshots for the VM.            Default value is -1.
* **networkAdapters**: [VmwareNetworkAdapter](#vmwarenetworkadapter)[] (ReadOnly): Network adapters attached to the machine.
* **numberOfApplications**: int (ReadOnly): Number of applications installed in the guest VM.
* **numberOfProcessorCore**: int: Gets or sets the Number of Processor Cores allocated for the machine.
* **numberOfSnapshots**: int (ReadOnly): Number of snapshots for the VM.             Default value is -1.
* **operatingSystemDetails**: [OperatingSystem](#operatingsystem): Gets or sets the Operating System Details installed on the machine.
* **oracleDiscovery**: [OracleDiscovery](#oraclediscovery) (ReadOnly): Gets the data related to Oracle discovery.
* **powerStatus**: string (ReadOnly): Gets the Machine power status.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus): product support status.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): The status of the last operation.
* **runAsAccountId**: string: Gets or sets the run as account ID of the machine.
* **springBootDiscovery**: [SpringBootDiscovery](#springbootdiscovery) (ReadOnly): Gets the data related to SpringBoot discovery.
* **sqlDiscovery**: [SqlDiscovery](#sqldiscovery) (ReadOnly): Gets the data related to SQL discovery.
* **staticDiscovery**: [StaticDiscovery](#staticdiscovery) (ReadOnly): Gets the data related to static discovery.
* **tags**: [VmwareMachinePropertiesTags](#vmwaremachinepropertiestags): Gets or sets tags on the VMware machine.
* **tomcatDiscovery**: [WebAppDiscovery](#webappdiscovery) (ReadOnly): Gets the data related to tomcat discovery.
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last updated on the machine.
* **vCenterFqdn**: string (ReadOnly): VCenter FQDN/IPAddress.
* **vCenterId**: string (ReadOnly): VCenter ARM ID.
* **vmConfigurationFileLocation**: string (ReadOnly): Gets the Root location of the VM configuration file.
* **vmFqdn**: string (ReadOnly): Gets the VM FQDN.
* **vMwareToolsStatus**: string (ReadOnly): VMware tools status.
* **vMwareToolsVersion**: string (ReadOnly): VMware tools version.
* **webAppDiscovery**: [WebAppDiscovery](#webappdiscovery) (ReadOnly): Gets the data related to Web application discovery.

## VmwareMachinePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VmwareNetworkAdapter
### Properties
* **adapterType**: string (ReadOnly): Gets or sets the adapter type.
* **ipAddressList**: string[] (ReadOnly): Gets IP addresses for the machine.
* **ipAddressType**: string: Gets or sets Type of the IP address.
* **label**: string (ReadOnly): Label of the NIC.
* **macAddress**: string: Gets or sets Mac address of the NIC.
* **networkName**: string: Gets or sets Network Name.
* **nicId**: string: Gets or sets the NIC Id.

## VmwareSiteUsage
### Properties
* **machineCount**: int: Gets or sets the number of machines discovered in the site.
* **runAsAccountCount**: int: Gets or sets the number of run as accounts in the site.
* **vCenterCount**: int: Gets or sets the number of vCenters part of the site.

## WebAppDiscovery
### Properties
* **discoveryScopeStatus**: 'Disabled' | 'DiscoveryFailed' | 'DiscoveryInProgress' | 'DiscoveryNotStarted' | 'DiscoveryPartiallySucceded' | 'DiscoverySucceeded' | 'DiscoverySucceededAtleastOnce' | 'RunAsAccountNotAssociated' | string: Gets or sets status of partner discovery.
* **totalWebApplicationCount**: int: Gets or sets number of successfully discovered web applications.
* **totalWebServerCount**: int: Gets or sets number of successfully discovered web servers..

## WebAppExtendedMachineProperties
### Properties
* **createdTimestamp**: string (ReadOnly): Gets the timestamp marking creation of the entity.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Gets the Error details.
* **hostName**: string (ReadOnly): Gets the hydrated host name.
* **hydratedRunAsAccountId**: string (ReadOnly): Gets the agent hydrated run as account.
* **isDeleted**: bool (ReadOnly): Gets a value indicating whether application is deleted.
* **machineDisplayName**: string (ReadOnly): Gets the Name of the extended machine.
* **machineId**: string (ReadOnly): Gets the machine ARM id.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum
* **runAsAccountId**: string (ReadOnly): Gets the run as account ID of the machine used for web app discovery.
* **updatedTimestamp**: string (ReadOnly): Gets the timestamp marking last update operation.

## WebApplicationAppsAndRolesModel
### Properties
* **applicationPool**: string (ReadOnly): Gets or sets ApplicationPool of the WebApplication.
* **groupName**: string (ReadOnly): Gets or sets GroupName of the WebApplication.
* **name**: string (ReadOnly): Gets or sets Name of the WebApplication.
* **platform**: string (ReadOnly): Gets or sets Platform of the WebApplication.
* **status**: string (ReadOnly): Gets or sets Status of the WebApplication.
* **webServer**: string (ReadOnly): Gets or sets WebServer of the WebApplication.

## WebApplicationConfigurationUnit
### Properties
* **filePath**: string: Gets or sets the configuration file path.
* **identifier**: string: Gets or sets the identifier for the configuration.
* **isDeploymentTimeEditable**: bool: Gets or sets a value indicating whether the configuration is edited or not by the user.
* **localFilePath**: string: Gets or sets the configuration local file path.
* **name**: string: Gets or sets the configuration name.
* **section**: string: Gets or sets the configuration section in the file.
* **targetFilePath**: string: Gets or sets the configuration target file path.
* **type**: string: Gets or sets the configuration type.

## WebApplicationDirectoryUnit
### Properties
* **id**: string: Gets or sets the unique id corresponding to the application directory.
* **isEditable**: bool: Gets or sets a value indicating whether the directory object is editable. True when the directory is added as an optional directory, false when discovery is done manually.
* **localScratchPath**: string: Gets or sets the local scratch path at which the directories has been copied.
* **mountPath**: string: Gets or sets the mount path of the application directory.
* **sourcePaths**: string[]: Gets or sets the paths of the directory on the source machine.
* **sourceSize**: string: Gets or sets the size of the directory on the source machine.

## WebApplicationFramework
### Properties
* **name**: string: Gets or sets Name of the framework.
* **version**: string: Gets or sets Version of the framework.

## WebAppProperties
### Properties
* **tags**: [WebAppPropertiesTags](#webapppropertiestags): Gets or sets Tags.
* **webAppArmId**: string: Gets or sets the arm id of the web app.

## WebAppPropertiesCollection
### Properties
* **webApps**: [WebAppProperties](#webappproperties)[]: Gets or sets the list of web app properties.

## WebAppPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebAppSiteProperties
### Properties
* **discoveryScenario**: 'DR' | 'Migrate' | string: Gets or sets the discovery scenario.
* **provisioningState**: 'Canceled' | 'Completed' | 'Created' | 'Failed' | 'Running' | 'Succeeded' | 'Updated' | string (ReadOnly): provisioning state enum
* **serviceEndpoint**: string (ReadOnly): Gets the service endpoint.
* **siteAppliancePropertiesCollection**: [SiteApplianceProperties](#siteapplianceproperties)[]: Gets or sets the appliance details used by service to communicate to the appliance.

## WebAppSiteUsage
### Properties
* **runAsAccountCount**: int: Gets or sets the number of run as accounts in the site.
* **webApplicationCount**: int: Gets or sets the number of web applications discovered in the site.
* **webServerCount**: int: Gets or sets the number of web servers discovered in the site.

## WebRoleImportDisk
### Properties
* **diskType**: string: Gets or sets Type of the disk.
* **lun**: int: Gets or sets LUN of the disk.
* **maxSizeInBytes**: int: Gets or sets Bytes allocated for the disk.
* **megabytesPerSecondOfRead**: int (ReadOnly): Disk read throughput.
* **megabytesPerSecondOfWrite**: int (ReadOnly): Disk write throughput.
* **name**: string: Gets or sets Name of the disk.
* **numberOfReadOperationsPerSecond**: int (ReadOnly): Disk read IOPS.
* **numberOfWriteOperationsPerSecond**: int (ReadOnly): Disk write IOPS.
* **path**: string: Gets or sets Path of the disk.

## WebRoleOperatingSystem
### Properties
* **osArchitecture**: string: Gets or sets the Architecture of the operating system.
* **osName**: string: Gets or sets the Name of the operating system.
* **osType**: string: Gets or sets the type of the operating system.
* **osVersion**: string: Gets or sets the Version of the operating system.

