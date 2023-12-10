# Microsoft.OffAzureSpringBoot @ 2023-01-01-preview

## Resource Microsoft.OffAzureSpringBoot/springbootsites@2023-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [SpringbootsitesModelExtendedLocation](#springbootsitesmodelextendedlocation): The extended location definition.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-z][a-z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SpringbootsitesProperties](#springbootsitesproperties): The springbootsites resource definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OffAzureSpringBoot/springbootsites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzureSpringBoot/springbootsites/errorSummaries@2023-01-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[A-Za-z][A-Za-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ErrorSummariesProperties](#errorsummariesproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ErrorSummaryTags](#errorsummarytags) (ReadOnly): Resource tags
* **type**: 'Microsoft.OffAzureSpringBoot/springbootsites/errorSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzureSpringBoot/springbootsites/springbootapps@2023-01-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[A-Za-z0-9][A-Za-z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SpringbootappsProperties](#springbootappsproperties) (ReadOnly): The springbootapps resource definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [SpringbootappsModelTags](#springbootappsmodeltags) (ReadOnly): Resource tags
* **type**: 'Microsoft.OffAzureSpringBoot/springbootsites/springbootapps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzureSpringBoot/springbootsites/springbootservers@2023-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[A-Za-z0-9][A-Za-z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SpringbootserversProperties](#springbootserversproperties): The springbootservers resource definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [SpringbootserversModelTags](#springbootserversmodeltags): Resource tags
* **type**: 'Microsoft.OffAzureSpringBoot/springbootsites/springbootservers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzureSpringBoot/springbootsites/summaries@2023-01-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[A-Za-z][A-Za-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SummariesProperties](#summariesproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [SummaryTags](#summarytags) (ReadOnly): Resource tags
* **type**: 'Microsoft.OffAzureSpringBoot/springbootsites/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Error
### Properties
* **code**: string: The error code.
* **id**: int: The error ID.
* **message**: string: The detailed error message.
* **possibleCauses**: string: The error possible causes.
* **recommendedAction**: string: The error recommended action
* **runAsAccountId**: string: The account ID used to login.
* **severity**: string: The error severity
* **summaryMessage**: string: The summarized error message.
* **updatedTimeStamp**: string: Time when this error was last updated.

## ErrorSummariesProperties
### Properties
* **discoveryScopeErrorSummaries**: [ErrorSummaryModel](#errorsummarymodel)[]: The list of ErrorSummary.
* **errors**: [Error](#error)[]: The list of errors.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | string: The resource provisioning state.

## ErrorSummaryModel
### Properties
* **affectedObjectsCount**: int: The count.
* **affectedResourceType**: string: The type of Object.

## ErrorSummaryTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SpringbootappsModelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SpringbootappsProperties
### Properties
* **applicationConfigurations**: [SpringbootappsPropertiesApplicationConfigurationsItem](#springbootappspropertiesapplicationconfigurationsitem)[]: The application configuration file list.
* **appName**: string: The name of SpringBootApp.
* **appPort**: int: The application port.
* **appType**: string: The application type, whether it is a SpringBoot app.
* **artifactName**: string: The artifact name of SpringBootApp.
* **bindingPorts**: int[]: The application binding port list.
* **buildJdkVersion**: string: The jdk version in build.
* **certificates**: string[]: The certificate file list.
* **checksum**: string: The checksum of jar file.
* **connectionStrings**: string[]: The connection string list.
* **dependencies**: string[]: The dependency list.
* **environments**: string[]: The environment variable list.
* **errors**: [Error](#error)[]: The list of errors.
* **instanceCount**: int: The total instance count the app deployed.
* **instances**: [SpringbootappsPropertiesInstancesItem](#springbootappspropertiesinstancesitem)[]: The breakdown info for app instances on all the servers
* **jarFileLocation**: string: The jar file location on the server.
* **jvmMemoryInMB**: int: The jvm heap memory allocated.
* **jvmOptions**: string[]: The jvm options.
* **lastModifiedTime**: string: Time when this springbootapps jar file was last modified.
* **lastUpdatedTime**: string: Time when this springbootapps instance was last refreshed.
* **machineArmIds**: string[]: The machine ARM id list the app belongs to.
* **miscs**: [SpringbootappsPropertiesMiscsItem](#springbootappspropertiesmiscsitem)[]: The other types of date collected.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | string: The resource provisioning state.
* **runtimeJdkVersion**: string: The jdk version installed on server
* **servers**: string[]: The server list the app installed
* **siteName**: string: The site name.
* **springBootVersion**: string: The spring boot version.
* **staticContentLocations**: string[]: The static content location list.

## SpringbootappsPropertiesApplicationConfigurationsItem
### Properties
* **key**: string (Required): The application config file name.
* **value**: string: The application config file content, only contains config keys.

## SpringbootappsPropertiesInstancesItem
### Properties
* **instanceCount**: int: The instance count of this app instance
* **jvmMemoryInMB**: int: The jvm heap memory allocated of this app instance
* **machineArmId**: string (Required): The machine ARM resource Id of this app instance

## SpringbootappsPropertiesMiscsItem
### Properties
* **key**: string (Required): The miscs. key.
* **value**: string: The miscs. value.

## SpringbootserversModelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SpringbootserversProperties
### Properties
* **errors**: [Error](#error)[]: The list of errors.
* **fqdnAndIpAddressList**: string[]: The alternative FQDN or IP addresses to discover for this server
* **machineArmId**: string: The machine Id from ARM
* **port**: int: Target server port for remote login
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | string: The resource provisioning state.
* **server**: string (Required): Server is the target server name or ip address to discover of SpringBootServer.
* **springBootApps**: int: The total number of spring boot apps been discovered
* **totalApps**: int: The total number of apps been discovered

## SpringbootsitesModelExtendedLocation
### Properties
* **name**: string: The extended location name.
* **type**: string: The extended location type.

## SpringbootsitesProperties
### Properties
* **masterSiteId**: string: The master site ID from Azure Migrate.
* **migrateProjectId**: string: The migrate project ID from Azure Migrate.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | string: The resource provisioning state.

## SummariesProperties
### Properties
* **discoveredApps**: int: The of number discovered spring boot apps.
* **discoveredServers**: int: The of number discovered spring boot servers.
* **errors**: [Error](#error)[]: The list of errors.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | string: The resource provisioning state.

## SummaryTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

