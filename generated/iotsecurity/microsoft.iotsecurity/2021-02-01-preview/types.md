# Microsoft.IoTSecurity @ 2021-02-01-preview

## Resource Microsoft.IoTSecurity/defenderSettings@2021-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [DefenderSettingsProperties](#defendersettingsproperties): IoT Defender settings properties
* **type**: 'Microsoft.IoTSecurity/defenderSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/locations@2021-02-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (ReadOnly): Any object
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.IoTSecurity/locations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/locations/deviceGroups@2021-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: Any object
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.IoTSecurity/locations/deviceGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/locations/deviceGroups/devices@2021-02-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeviceProperties](#deviceproperties) (ReadOnly): Device properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.IoTSecurity/locations/deviceGroups/devices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/onPremiseSensors@2021-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (ReadOnly): Any object
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.IoTSecurity/onPremiseSensors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/sensors@2021-02-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SensorProperties](#sensorproperties): IoT sensor properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.IoTSecurity/sensors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/sites@2021-02-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): IoT site properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.IoTSecurity/sites' (ReadOnly, DeployTimeConstant): The resource type

## DefenderSettingsProperties
### Properties
* **deviceQuota**: int (Required): Size of the device quota. Value is required to be in multiples of 100.
* **evaluationEndTime**: string (ReadOnly): End time of the evaluation period, if such exist
* **mdeIntegration**: [DefenderSettingsPropertiesMdeIntegration](#defendersettingspropertiesmdeintegration) (Required): MDE integration configuration
* **onboardingKind**: 'Default' | 'Evaluation' | 'MigratedToAzure' | 'Purchased' (Required): The kind of onboarding for the subscription
* **sentinelWorkspaceResourceIds**: string[] (Required): Sentinel Workspace Resource Ids

## DefenderSettingsPropertiesMdeIntegration
### Properties
* **status**: 'Disabled' | 'Enabled' (Required): Integration status

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## DeviceProperties
### Properties
* **additionalFields**: any (ReadOnly): Any object
* **authorizedState**: 'Authorized' | 'Unauthorized' (ReadOnly): Authorized state of the device.
* **businessFunction**: string (ReadOnly): Device business function
* **cpes**: string[] (ReadOnly): List of Common Platform Enumeration (CPE)
* **criticality**: 'High' | 'Low' | 'Normal' (ReadOnly): Device criticality.
* **deviceCategoryDisplayName**: string (ReadOnly): Device category display name
* **deviceCategoryId**: int (ReadOnly): Device category id
* **deviceDataSource**: 'CorpSensor' | 'Mde' | 'MicroAgent' | 'OtSensor' | 'Other' (ReadOnly): Device data source
* **deviceName**: string (ReadOnly): Device name
* **deviceStatus**: 'Active' | 'Deleted' | 'Inactive' | 'Removed' (ReadOnly): Device status.
* **deviceSubTypeDisplayName**: string (ReadOnly): Device sub type display name
* **deviceSubTypeId**: int (ReadOnly): Device sub type id
* **deviceTags**: string[] (ReadOnly): Device tags
* **deviceTypeDisplayName**: string (ReadOnly): Device type display name
* **deviceTypeId**: int (ReadOnly): Device type id
* **firmwares**: [Firmware](#firmware)[] (ReadOnly): List of device firmwares.
* **firstSeen**: string (ReadOnly): First time the device was seen.
* **hardware**: [Hardware](#hardware) (ReadOnly): Device hardware data
* **lastProgrammingTime**: string (ReadOnly): last time the device was programming or programed.
* **lastSeen**: string (ReadOnly): Last time the device was seen.
* **lastUpdated**: string (ReadOnly): Last time the device was updated by the profiler.
* **mergedDevices**: [MergedDevice](#mergeddevice)[] (ReadOnly): List of merged devices data
* **mergedToDeviceId**: string (ReadOnly): The device Id that this device was merged into
* **nics**: [Nic](#nic)[] (ReadOnly): List of the device network interface cards.
* **onboardingStatus**: 'InsufficientInfo' | 'NotOnboarded' | 'NotSupported' | 'Onboarded' (ReadOnly): Device onboarding status.
* **operatingSystem**: [OperatingSystem](#operatingsystem) (ReadOnly): Device operating system data
* **packages**: [Package](#package)[] (ReadOnly): List of device packages
* **parentDeviceId**: string (ReadOnly): For nested device, this is the parent device id.
* **parentRackNumber**: int (ReadOnly): For nested device, this is the rack number in the parent device that holds the nested device.
* **parentSlotNumber**: int (ReadOnly): For nested device, this is the slot number in the parent device that holds the nested device.
* **profilingConfidence**: int (ReadOnly): Confidence of the device profile
* **programmingState**: 'NotProgrammingDevice' | 'ProgrammingDevice' (ReadOnly): Indicates whether this device is programming
* **purdueLevel**: 'Enterprise' | 'ProcessControl' | 'Supervisory' (ReadOnly): Purdue level of the device.
* **riskScore**: int (ReadOnly): risk score of the device.
* **schemaVersion**: string (ReadOnly): Version of the device model schema
* **sensor**: [Sensor](#sensor) (ReadOnly): Sensor that scanned the device
* **slots**: [Slot](#slot)[] (ReadOnly): List of the device slot in the backplane

## Firmware
### Properties
* **additionalFields**: any (ReadOnly): Any object
* **moduleAddress**: string (ReadOnly): Firmware module address.
* **name**: string (ReadOnly): Firmware name.
* **serial**: string (ReadOnly): Firmware serial.
* **vendor**: string (ReadOnly): Firmware vendor.
* **version**: string (ReadOnly): Firmware version.

## Hardware
### Properties
* **model**: string (ReadOnly): Hardware model.
* **serialNumber**: string (ReadOnly): Hardware serial number.
* **vendor**: string (ReadOnly): Hardware vendor.

## MergedDevice
### Properties
* **deviceDataSource**: 'CorpSensor' | 'Mde' | 'MicroAgent' | 'OtSensor' | 'Other' (ReadOnly): Device data source
* **id**: string (ReadOnly): device id
* **sensor**: [Sensor](#sensor) (ReadOnly): Sensor that scanned the device

## Sensor
### Properties
* **name**: string (ReadOnly): Sensor name.
* **site**: string (ReadOnly): Sensor site.
* **type**: 'Enterprise' | 'Ot' (ReadOnly): Type of sensor
* **zone**: string (ReadOnly): Sensor zone.

## Nic
### Properties
* **ipv4Address**: string (ReadOnly): Ipv4 address
* **ipv6Address**: string (ReadOnly): Ipv6 address
* **lastSeen**: string (ReadOnly): Last seen time
* **macAddress**: string (ReadOnly): Mac address
* **macCertainty**: 'Certain' | 'Guess' (ReadOnly): Indicates whether the association of the mac to the ip address is certain or a guess.
* **networkAdapterVendor**: string (ReadOnly): Network adapter vendor.
* **vlans**: string[] (ReadOnly): List of virtual LAN (vlan)

## OperatingSystem
### Properties
* **architecture**: string (ReadOnly): OS architecture
* **build**: string (ReadOnly): OS build
* **distribution**: string (ReadOnly): OS distribution
* **platform**: string (ReadOnly): OS platform
* **version**: string (ReadOnly): OS version

## Package
### Properties
* **name**: string (ReadOnly): Package name.
* **version**: string (ReadOnly): Package version.

## Slot
### Properties
* **additionalData**: any (ReadOnly): Any object
* **cpes**: string[] (ReadOnly): List of Common Platform Enumeration (CPE) of the slot
* **firmwareVersion**: string (ReadOnly): Firmware revision of the slot.
* **hardwareRevision**: string (ReadOnly): Hardware revision of the slot.
* **hardwareVendor**: string (ReadOnly): Hardware vendor of the slot.
* **model**: string (ReadOnly): Model of the slot.
* **moduleVersion**: string (ReadOnly): Module version of the slot.
* **productCode**: string (ReadOnly): Product code of the slot.
* **rackNumber**: int (ReadOnly): Rack number in the backplane
* **serialNumber**: string (ReadOnly): Serial number of the slot.
* **slotNumber**: int (ReadOnly): Slot number inside the rack
* **slotType**: 'AnalogIO' | 'CommAdapter' | 'Cpu' | 'DigitalIO' | 'Generic' | 'Hmi' | 'Supply' (ReadOnly): Slot type.

## SensorProperties
### Properties
* **connectivityTime**: string (ReadOnly): Last connectivity time of the IoT sensor
* **dynamicLearning**: bool (ReadOnly): Dynamic mode status of the IoT sensor
* **learningMode**: bool (ReadOnly): Learning mode status of the IoT sensor
* **sensorStatus**: 'Disconnected' | 'Ok' | 'Unavailable' (ReadOnly): Status of the IoT sensor
* **sensorType**: 'Enterprise' | 'Ot': Type of sensor
* **sensorVersion**: string (ReadOnly): Version of the IoT sensor
* **tiAutomaticUpdates**: bool: TI Automatic mode status of the IoT sensor
* **tiStatus**: 'Failed' | 'InProgress' | 'Ok' | 'UpdateAvailable' (ReadOnly): TI Status of the IoT sensor
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

