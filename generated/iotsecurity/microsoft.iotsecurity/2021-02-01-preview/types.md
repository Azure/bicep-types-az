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
* **properties**: any (ReadOnly): IoT Defender location properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTSecurity/locations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/locations/deviceGroups@2021-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: Device group properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTSecurity/locations/deviceGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/locations/deviceGroups/devices@2021-02-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeviceProperties](#deviceproperties) (ReadOnly): Device properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTSecurity/locations/deviceGroups/devices' (ReadOnly, DeployTimeConstant): The resource type

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

## DeviceProperties
### Properties
* **additionalFields**: any: A bag of fields which extends the device information.
* **authorizedState**: 'Authorized' | 'Unauthorized' | string: Authorized state of the device.
* **businessFunction**: string: Device business function
* **cpes**: string[] (ReadOnly): List of Common Platform Enumeration (CPE)
* **criticality**: 'High' | 'Low' | 'Normal' | string: Device criticality.
* **deviceCategoryDisplayName**: string (ReadOnly): Device category display name
* **deviceCategoryId**: int: Device category id
* **deviceDataSource**: 'CorpSensor' | 'Mde' | 'MicroAgent' | 'OtSensor' | 'Other' | string (ReadOnly): Device data source.
* **deviceName**: string: Device name
* **deviceStatus**: 'Active' | 'Deleted' | 'Inactive' | 'Removed' | string (ReadOnly): Device status.
* **deviceSubTypeDisplayName**: string (ReadOnly): Device sub type display name
* **deviceSubTypeId**: int: Device sub type id
* **deviceTags**: string[]: Device tags
* **deviceTypeDisplayName**: string (ReadOnly): Device type display name
* **deviceTypeId**: int: Device type id
* **firmwares**: [Firmware](#firmware)[]: List of device firmwares.
* **firstSeen**: string (ReadOnly): First time the device was seen.
* **hardware**: [Hardware](#hardware): Device hardware data
* **lastProgrammingTime**: string (ReadOnly): last time the device was programming or programed.
* **lastSeen**: string (ReadOnly): Last time the device was seen.
* **lastUpdated**: string (ReadOnly): Last time the device was updated by the profiler.
* **mergedDevices**: [MergedDevice](#mergeddevice)[] (ReadOnly): List of merged devices data
* **mergedToDeviceId**: string (ReadOnly): The device Id that this device was merged into
* **nics**: [Nic](#nic)[] (ReadOnly): List of the device network interface cards.
* **onboardingStatus**: 'InsufficientInfo' | 'NotOnboarded' | 'NotSupported' | 'Onboarded' | string (ReadOnly): Device onboarding status.
* **operatingSystem**: [OperatingSystem](#operatingsystem): Device operating system data
* **packages**: [Package](#package)[]: List of device packages
* **parentDeviceId**: string (ReadOnly): For nested device, this is the parent device id.
* **parentRackNumber**: int (ReadOnly): For nested device, this is the rack number in the parent device that holds the nested device.
* **parentSlotNumber**: int (ReadOnly): For nested device, this is the slot number in the parent device that holds the nested device.
* **profilingConfidence**: int (ReadOnly): Confidence of the device profile
* **programmingState**: 'NotProgrammingDevice' | 'ProgrammingDevice' | string (ReadOnly): Indicates whether this device is programming
* **purdueLevel**: 'Enterprise' | 'ProcessControl' | 'Supervisory' | string: Purdue level of the device.
* **riskScore**: int (ReadOnly): risk score of the device.
* **schemaVersion**: string (ReadOnly): Version of the device model schema
* **sensor**: [Sensor](#sensor) (ReadOnly): Sensor that scanned this device.
* **slots**: [Slot](#slot)[] (ReadOnly): List of the device slot in the backplane

## Firmware
### Properties
* **additionalFields**: any: A bag of fields which extends the firmware information.
* **moduleAddress**: string: Firmware module address.
* **name**: string: Firmware name.
* **serial**: string: Firmware serial.
* **vendor**: string: Firmware vendor.
* **version**: string: Firmware version.

## Hardware
### Properties
* **model**: string: Hardware model.
* **serialNumber**: string: Hardware serial number.
* **vendor**: string: Hardware vendor.

## MergedDevice
### Properties
* **deviceDataSource**: 'CorpSensor' | 'Mde' | 'MicroAgent' | 'OtSensor' | 'Other' | string (ReadOnly): Device data source
* **id**: string (ReadOnly): device id
* **sensor**: [Sensor](#sensor) (ReadOnly): Device sensor data

## Nic
### Properties
* **ipv4Address**: string (ReadOnly): Ipv4 address
* **ipv6Address**: string (ReadOnly): Ipv6 address
* **lastSeen**: string (ReadOnly): Last seen time
* **macAddress**: string (ReadOnly): Mac address
* **macCertainty**: 'Certain' | 'Guess' | string (ReadOnly): Indicates whether the association of the mac to the ip address is certain or a guess.
* **networkAdapterVendor**: string (ReadOnly): Network adapter vendor.
* **vlans**: string[] (ReadOnly): List of virtual LAN (vlan)

## OperatingSystem
### Properties
* **architecture**: string: OS architecture
* **build**: string: OS build
* **distribution**: string: OS distribution
* **platform**: string: OS platform
* **version**: string: OS version

## Package
### Properties
* **name**: string: Package name.
* **version**: string: Package version.

## Sensor
### Properties
* **name**: string (ReadOnly): Sensor name.
* **site**: string (ReadOnly): Sensor site.
* **type**: 'Enterprise' | 'Ot' | string (ReadOnly): Sensor type.
* **zone**: string (ReadOnly): Sensor zone.

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

## Slot
### Properties
* **additionalData**: any: A bag of fields which extends the slot information.
* **cpes**: string[] (ReadOnly): List of Common Platform Enumeration (CPE) of the slot
* **firmwareVersion**: string: Firmware revision of the slot.
* **hardwareRevision**: string: Hardware revision of the slot.
* **hardwareVendor**: string: Hardware vendor of the slot.
* **model**: string: Model of the slot.
* **moduleVersion**: string: Module version of the slot.
* **productCode**: string: Product code of the slot.
* **rackNumber**: int (ReadOnly): Rack number in the backplane
* **serialNumber**: string: Serial number of the slot.
* **slotNumber**: int (ReadOnly): Slot number inside the rack
* **slotType**: 'AnalogIO' | 'CommAdapter' | 'Cpu' | 'DigitalIO' | 'Generic' | 'Hmi' | 'Supply' | string: Slot type.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

