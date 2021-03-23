# Microsoft.IoTSecurity @ 2021-02-01-preview

## Resource Microsoft.IoTSecurity/defenderSettings@2021-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [DefenderSettingsProperties](#defendersettingsproperties)
* **type**: 'Microsoft.IoTSecurity/defenderSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.IoTSecurity/onPremiseSensors@2021-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.IoTSecurity/onPremiseSensors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.IoTSecurity/sensors@2021-02-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SensorProperties](#sensorproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.IoTSecurity/sensors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.IoTSecurity/sites@2021-02-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [SiteProperties](#siteproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.IoTSecurity/sites' (ReadOnly, DeployTimeConstant)

## DefenderSettingsProperties
### Properties
* **deviceQuota**: int (Required)
* **onboardingKind**: 'Default' | 'MigratedToAzure' (Required)
* **sentinelWorkspaceResourceIds**: string[] (Required)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## SensorProperties
### Properties
* **connectivityTime**: string (ReadOnly)
* **dynamicLearning**: bool (ReadOnly)
* **learningMode**: bool (ReadOnly)
* **sensorStatus**: 'Disconnected' | 'Ok' | 'Unavailable' (ReadOnly)
* **sensorVersion**: string (ReadOnly)
* **tiAutomaticUpdates**: bool
* **tiStatus**: 'Failed' | 'InProgress' | 'Ok' | 'UpdateAvailable' (ReadOnly)
* **tiVersion**: string (ReadOnly)
* **zone**: string

## SiteProperties
### Properties
* **displayName**: string (Required)
* **tags**: [SitePropertiesTags](#sitepropertiestags)

## SitePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

