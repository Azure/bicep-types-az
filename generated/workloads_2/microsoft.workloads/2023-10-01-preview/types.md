# Microsoft.Workloads @ 2023-10-01-preview

## Resource Microsoft.Workloads/sapDiscoverySites@2023-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location definition.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]{0,78}[a-zA-Z0-9_]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SAPDiscoverySiteProperties](#sapdiscoverysiteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/sapDiscoverySites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/sapDiscoverySites/sapInstances@2023-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]{0,78}[a-zA-Z0-9_]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SAPInstanceProperties](#sapinstanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Workloads/sapDiscoverySites/sapInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Workloads/sapDiscoverySites/sapInstances/serverInstances@2023-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]{0,78}[a-zA-Z0-9_]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServerInstanceProperties](#serverinstanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Workloads/sapDiscoverySites/sapInstances/serverInstances' (ReadOnly, DeployTimeConstant): The resource type

## Function importEntities (Microsoft.Workloads/sapDiscoverySites@2023-10-01-preview)
* **Resource**: Microsoft.Workloads/sapDiscoverySites
* **ApiVersion**: 2023-10-01-preview
* **Output**: [OperationStatusResult](#operationstatusresult)

## ConfigurationData
### Properties
* **cpu**: int (ReadOnly): Provide the CPU value of the server. For example, 16, 32 etc.
* **cpuInMhz**: int (ReadOnly): Provide the CPU clock speed of the server in MHz. This should be a non-zero value. For example, 2100.
* **cpuType**: string (ReadOnly): Provide the CPU architecture type of the server. For example, Xeon Platinum 8171M, Xeon E5-2673 v3.
* **databaseType**: 'Adabas' | 'Db2' | 'HANA' | 'Informix' | 'Oracle' | 'SAPASE' | 'SAPDB' | 'SAPMaxDB' | 'SQLServer' | string (ReadOnly): The database of this is a server instance. Applicable only if SAP instance type for this server instance is 'DB'.
* **hardwareManufacturer**: string (ReadOnly): Provide the HW manufacturer company of the server.  For example, Microsoft Corporation.
* **model**: string (ReadOnly): Specify if the Hardware is a physical server or virtual machine.
* **ram**: int (ReadOnly): Provide the RAM of the server. This should be a non-zero value. For example, 256.
* **saps**: int (ReadOnly): Provide the SAPS for each server of the SAP system. This should be a non-zero value. For example, 1000.
* **targetHanaRamSizeGB**: int (ReadOnly): Provide the target HANA database size you need. Applicable only if SAP instance type for this server instance is 'DB' and you are migrating an AnyDb database to SAP S/4HANA.
* **totalDiskIops**: int (ReadOnly): Provide the total disk IOPS capacity. Add the disk volume for each individual disk and provide the sum total in this field.
* **totalDiskSizeGB**: int (ReadOnly): Provide the total disk volume capacity in GB. Add the disk volume for each individual disks and provide the total sum in this field.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDefinition
### Properties
* **code**: string (ReadOnly): Service specific error code which serves as the substatus for the HTTP error code.
* **details**: [ErrorDefinition](#errordefinition)[] (ReadOnly): Internal error details.
* **message**: string (ReadOnly): Description of the error.
* **recommendation**: string (ReadOnly): Description of the recommendation.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ExtendedLocation
### Properties
* **name**: string (Required): The extended location name.
* **type**: string (Required): The extended location type.

## OperationStatusResult
### Properties
* **endTime**: string: The end time of the operation.
* **error**: [ErrorDetail](#errordetail): If present, details of the operation error.
* **id**: string: Fully qualified ID for the async operation.
* **name**: string: Name of the async operation.
* **operations**: [OperationStatusResult](#operationstatusresult)[]: The operations list.
* **percentComplete**: int {minValue: 0, maxValue: 100}: Percent of the operation that is complete.
* **startTime**: string: The start time of the operation.
* **status**: string (Required): Operation status.

## PerformanceData
* **Discriminator**: dataSource

### Base Properties

### ExcelPerformanceData
#### Properties
* **dataSource**: 'Excel' (Required): The data source of the performance data.
* **maxCpuLoad**: int (ReadOnly): Provide the max CPU percentage load on the server. Omit the percentage symbol while filling this value.
* **totalSourceDbSizeGB**: int (ReadOnly): Provide the source Database size in GB. Applicable only if SAP instance type for this server instance is 'DB'.

### NativePerformanceData
#### Properties
* **dataSource**: 'Native' (Required): The data source of the performance data.


## SAPDiscoverySiteProperties
### Properties
* **errors**: [SAPMigrateError](#sapmigrateerror) (ReadOnly): Indicates any errors on the SAP Migration discovery site resource.
* **masterSiteId**: string: The master site ID from Azure Migrate.
* **migrateProjectId**: string: The migrate project ID from Azure Migrate.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Defines the provisioning states.

## SAPInstanceProperties
### Properties
* **application**: string (ReadOnly): Enter a business function/department identifier to group multiple SIDs.
* **environment**: 'Development' | 'DisasterRecovery' | 'PreProduction' | 'Production' | 'QualityAssurance' | 'Sandbox' | 'Test' | 'Training' | string (ReadOnly): The Environment; PRD, QA, DEV, etc to which SAP system belongs to. Select from the list of available dropdown values.
* **errors**: [SAPMigrateError](#sapmigrateerror) (ReadOnly): Defines the errors related to SAP Instance resource.
* **landscapeSid**: string (ReadOnly): This is the SID of the production system in a landscape.  An SAP system could itself be a production SID or a part of a landscape with a different Production SID. This field can be used to relate non-prod SIDs, other components, SID (WEBDISP) to the prod SID. Enter the value of Production SID.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **systemSid**: string (ReadOnly): This is the SID of SAP System. Keeping this not equal to ID as different landscapes can have repeated System SID IDs.

## SAPMigrateError
### Properties
* **properties**: [ErrorDefinition](#errordefinition): The SAP Discovery site resource error body.

## ServerInstanceProperties
### Properties
* **configurationData**: [ConfigurationData](#configurationdata) (ReadOnly): Configuration data for this server instance.
* **errors**: [SAPMigrateError](#sapmigrateerror) (ReadOnly): Defines the errors related to SAP Instance resource.
* **instanceSid**: string (ReadOnly): This is the Instance SID for ASCS/AP/DB instance.  An SAP system with HANA database for example could have a different SID for database Instance than that of ASCS instance.
* **operatingSystem**: 'IBMAIX' | 'RedHat' | 'SUSE' | 'Solaris' | 'Unix' | 'WindowsServer' | string (ReadOnly): This is Operating System on which the host server is running.
* **performanceData**: [PerformanceData](#performancedata) (ReadOnly): Configuration data for this server instance.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **sapInstanceType**: 'APP' | 'ASCS' | 'DB' | 'SCS' | 'WEBDISP' | string (ReadOnly): Defines the type SAP instance on this server instance.
* **sapProduct**: string (ReadOnly): This is the SAP Application Component; e.g. SAP S/4HANA 2022, SAP ERP ENHANCE PACKAGE.
* **sapProductVersion**: string (ReadOnly): Provide the product version of the SAP product.
* **serverName**: string (ReadOnly): This is the Virtual Machine Name of the SAP system. Add all the virtual machines attached to an SAP system which you wish to migrate to Azure. Keeping this not equal to ID as for single tier all InstanceTypes would be on same server, leading to multiple resources with same servername.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

