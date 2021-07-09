# Microsoft.Security @ 2020-08-06-preview

## Resource Microsoft.Security/iotDefenderSettings@2020-08-06-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-08-06-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [IotDefenderSettingsProperties](#iotdefendersettingsproperties): IoT Defender settings properties
* **type**: 'Microsoft.Security/iotDefenderSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSensors@2020-08-06-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-08-06-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IotSensorProperties](#iotsensorproperties): IoT sensor properties
* **type**: 'Microsoft.Security/iotSensors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/iotSites@2020-08-06-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-08-06-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [IotSiteProperties](#iotsiteproperties): IoT site properties
* **type**: 'Microsoft.Security/iotSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/onPremiseIotSensors@2020-08-06-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-08-06-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (ReadOnly): Any object
* **type**: 'Microsoft.Security/onPremiseIotSensors' (ReadOnly, DeployTimeConstant): The resource type

## IotDefenderSettingsProperties
### Properties
* **deviceQuota**: int (Required): Size of the device quota (as a opposed to a Pay as You Go billing model). Value is required to be in multiples of 1000.
* **evaluationEndTime**: string (ReadOnly): End time of the evaluation period, if such exist
* **onboardingKind**: 'Default' | 'Evaluation' | 'MigratedToAzure' | 'Purchased' (Required): The kind of onboarding for the subscription
* **sentinelWorkspaceResourceIds**: string[] (Required): Sentinel Workspace Resource Ids

## IotSensorProperties
### Properties
* **connectivityTime**: string (ReadOnly): Last connectivity time of the IoT sensor
* **creationTime**: string (ReadOnly): Creation time of the IoT sensor
* **dynamicLearning**: bool (ReadOnly): Dynamic mode status of the IoT sensor
* **learningMode**: bool (ReadOnly): Learning mode status of the IoT sensor
* **sensorStatus**: 'Disconnected' | 'Ok' | 'Unavailable' (ReadOnly): Status of the IoT sensor
* **sensorType**: 'Enterprise' | 'Ot': Type of sensor
* **sensorVersion**: string (ReadOnly): Version of the IoT sensor
* **tiAutomaticUpdates**: bool: TI Automatic mode status of the IoT sensor
* **tiStatus**: 'Failed' | 'InProgress' | 'Ok' | 'UpdateAvailable' (ReadOnly): TI Status of the IoT sensor
* **tiVersion**: string (ReadOnly): TI Version of the IoT sensor
* **zone**: string: Zone of the IoT sensor

## IotSiteProperties
### Properties
* **displayName**: string (Required): Display name of the IoT site
* **tags**: [IotSitePropertiesTags](#iotsitepropertiestags): Tags of the IoT site

## IotSitePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

