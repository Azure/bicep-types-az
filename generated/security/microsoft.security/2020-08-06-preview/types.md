# Microsoft.Security @ 2020-08-06-preview

## Resource Microsoft.Security/iotDefenderSettings@2020-08-06-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-08-06-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: IotDefenderSettingsProperties
* **type**: 'Microsoft.Security/iotDefenderSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/iotSensors@2020-08-06-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-08-06-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IotSensorProperties
* **type**: 'Microsoft.Security/iotSensors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/iotSites@2020-08-06-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-08-06-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: IotSiteProperties
* **type**: 'Microsoft.Security/iotSites' (ReadOnly, DeployTimeConstant)

## IotDefenderSettingsProperties
### Properties
* **deviceQuota**: int (Required)
* **sentinelWorkspaceResourceIds**: string[] (Required)

## IotSensorProperties
### Properties
* **connectivityTime**: string (ReadOnly)
* **creationTime**: string (ReadOnly)
* **dynamicLearning**: bool (ReadOnly)
* **isEnterpriseSensor**: bool
* **learningMode**: bool (ReadOnly)
* **sensorStatus**: 'Disconnected' | 'Ok' | 'Unavailable' (ReadOnly)
* **sensorVersion**: string (ReadOnly)
* **tiAutomaticUpdates**: bool
* **tiStatus**: 'Failed' | 'InProgress' | 'Ok' | 'UpdateAvailable' (ReadOnly)
* **tiVersion**: string (ReadOnly)
* **zone**: string

## IotSiteProperties
### Properties
* **displayName**: string (Required)
* **tags**: IotSitePropertiesTags

## IotSitePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

