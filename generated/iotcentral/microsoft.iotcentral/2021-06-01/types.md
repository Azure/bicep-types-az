# Microsoft.IoTCentral @ 2021-06-01

## Resource Microsoft.IoTCentral/iotApps@2021-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [SystemAssignedServiceIdentity](#systemassignedserviceidentity): The managed identities for the IoT Central application.
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppProperties](#appproperties): The common properties of an IoT Central application.
* **sku**: [AppSkuInfo](#appskuinfo) (Required): A valid instance SKU.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.IoTCentral/iotApps' (ReadOnly, DeployTimeConstant): The resource type

## Function appTemplates (Microsoft.IoTCentral@2021-06-01)
* **Resource**: Microsoft.IoTCentral
* **ApiVersion**: 2021-06-01
* **Output**: [AppTemplatesResult](#apptemplatesresult)

## Function checkNameAvailability (Microsoft.IoTCentral@2021-06-01)
* **Resource**: Microsoft.IoTCentral
* **ApiVersion**: 2021-06-01
* **Input**: [OperationInputs](#operationinputs)
* **Output**: [AppAvailabilityInfo](#appavailabilityinfo)

## Function checkSubdomainAvailability (Microsoft.IoTCentral@2021-06-01)
* **Resource**: Microsoft.IoTCentral
* **ApiVersion**: 2021-06-01
* **Input**: [OperationInputs](#operationinputs)
* **Output**: [AppAvailabilityInfo](#appavailabilityinfo)

## AppAvailabilityInfo
### Properties
* **message**: string (ReadOnly): The detailed reason message.
* **nameAvailable**: bool (ReadOnly): The value which indicates whether the provided name is available.
* **reason**: string (ReadOnly): The reason for unavailability.

## AppProperties
### Properties
* **applicationId**: string (ReadOnly): The ID of the application.
* **displayName**: string: The display name of the application.
* **state**: 'created' | 'suspended' | string (ReadOnly): The current state of the application.
* **subdomain**: string: The subdomain of the application.
* **template**: string: The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.

## AppSkuInfo
### Properties
* **name**: 'ST0' | 'ST1' | 'ST2' | string (Required): The name of the SKU.

## AppTemplate
### Properties
* **description**: string (ReadOnly): The description of the template.
* **industry**: string (ReadOnly): The industry of the template.
* **locations**: [AppTemplateLocations](#apptemplatelocations)[] (ReadOnly): A list of locations that support the template.
* **manifestId**: string (ReadOnly): The ID of the template.
* **manifestVersion**: string (ReadOnly): The version of the template.
* **name**: string (ReadOnly): The name of the template.
* **order**: int (ReadOnly): The order of the template in the templates list.
* **title**: string (ReadOnly): The title of the template.

## AppTemplateLocations
### Properties
* **displayName**: string (ReadOnly): The display name of the location.
* **id**: string (ReadOnly): The ID of the location.

## AppTemplatesResult
### Properties
* **nextLink**: string: The link used to get the next page of IoT Central application templates.
* **value**: [AppTemplate](#apptemplate)[] (ReadOnly): A list of IoT Central Application Templates.

## OperationInputs
### Properties
* **name**: string (Required): The name of the IoT Central application instance to check.
* **type**: string: The type of the IoT Central resource to query.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemAssignedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | string (Required): Type of managed service identity (either system assigned, or none).

