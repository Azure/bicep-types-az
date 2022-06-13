# Microsoft.IoTSecurity @ 2021-02-01-preview

## Resource Microsoft.IoTSecurity/defenderSettings@2021-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [DefenderSettingsProperties](#defendersettingsproperties): IoT Defender settings properties
* **type**: 'Microsoft.IoTSecurity/defenderSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/locations/deviceGroups@2021-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: Device group properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTSecurity/locations/deviceGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/onPremiseSensors@2021-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (ReadOnly): On-premise IoT sensor properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTSecurity/onPremiseSensors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/sensors@2021-02-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SensorProperties](#sensorproperties): IoT sensor properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTSecurity/sensors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/sites@2021-02-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): IoT site properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTSecurity/sites' (ReadOnly, DeployTimeConstant): The resource type

## DefenderSettingsProperties
### Properties
* **deviceQuota**: int (Required): Size of the device quota. Value is required to be in multiples of 100.
* **evaluationEndTime**: string (ReadOnly): End time of the evaluation period, if such exist
* **mdeIntegration**: [DefenderSettingsPropertiesMdeIntegration](#defendersettingspropertiesmdeintegration) (Required): MDE integration configuration
* **onboardingKind**: 'Default' | 'Evaluation' | 'MigratedToAzure' | 'Purchased' | string (Required): The kind of onboarding for the subscription
* **sentinelWorkspaceResourceIds**: string[] (Required): Sentinel Workspace Resource Ids

## DefenderSettingsPropertiesMdeIntegration
### Properties
* **status**: 'Disabled' | 'Enabled' | string (Required): Integration status

## SensorProperties
### Properties
* **connectivityTime**: string (ReadOnly): Last connectivity time of the IoT sensor
* **dynamicLearning**: bool (ReadOnly): Dynamic mode status of the IoT sensor
* **learningMode**: bool (ReadOnly): Learning mode status of the IoT sensor
* **sensorStatus**: 'Disconnected' | 'Ok' | 'Unavailable' | string (ReadOnly): Status of the IoT sensor
* **sensorType**: 'Enterprise' | 'Ot' | string: Type of sensor
* **sensorVersion**: string (ReadOnly): Version of the IoT sensor
* **tiAutomaticUpdates**: bool: TI Automatic mode status of the IoT sensor
* **tiStatus**: 'Failed' | 'InProgress' | 'Ok' | 'UpdateAvailable' | string (ReadOnly): TI Status of the IoT sensor
* **tiVersion**: string (ReadOnly): TI Version of the IoT sensor
* **zone**: string: Zone of the IoT sensor

## SiteProperties
### Properties
* **displayName**: string (Required): Display name of the IoT site
* **tags**: [SitePropertiesTags](#sitepropertiestags): Tags of the IoT site

## SitePropertiesTags
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

