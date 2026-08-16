# Microsoft.DigitalTwins @ 2020-10-31

## Resource Microsoft.DigitalTwins/digitalTwinsInstances@2020-10-31
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string {minLength: 3, maxLength: 63, pattern: "^(?!-)[A-Za-z0-9-]{3,63}(?<!-)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DigitalTwinsProperties](#digitaltwinsproperties): DigitalTwins instance properties.
* **tags**: [DigitalTwinsResourceTags](#digitaltwinsresourcetags): The resource tags.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-10-31
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 2, maxLength: 49, pattern: "^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DigitalTwinsEndpointResourceProperties](#digitaltwinsendpointresourceproperties) (Required): DigitalTwinsInstance endpoint resource properties.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.DigitalTwins/locations@2020-10-31)
* **Resource**: Microsoft.DigitalTwins/locations
* **ApiVersion**: 2020-10-31
* **Input**: [CheckNameRequest](#checknamerequest)
* **Output**: [CheckNameResult](#checknameresult)

## CheckNameRequest
### Properties
* **name**: string (Required): Resource name.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances' (Required): The type of resource, for instance Microsoft.DigitalTwins/digitalTwinsInstances.

## CheckNameResult
### Properties
* **message**: string: Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated.
* **nameAvailable**: bool: Specifies a Boolean value that indicates if the name is available.
* **reason**: 'AlreadyExists' | 'Invalid' | string: Message providing the reason why the given name is invalid.

## DigitalTwinsEndpointResourceProperties
* **Discriminator**: endpointType

### Base Properties
* **createdTime**: string (ReadOnly): Time when the Endpoint was added to DigitalTwinsInstance.
* **deadLetterSecret**: string {sensitive}: Dead letter storage secret. Will be obfuscated during read.
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Disabled' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Warning' | string (ReadOnly): The provisioning state.

### EventGrid
#### Properties
* **accessKey1**: string {sensitive} (Required): EventGrid secondary accesskey. Will be obfuscated during read.
* **accessKey2**: string {sensitive}: EventGrid secondary accesskey. Will be obfuscated during read.
* **endpointType**: 'EventGrid' (Required): The type of Digital Twins endpoint
* **TopicEndpoint**: string (Required): EventGrid Topic Endpoint

### EventHub
#### Properties
* **connectionStringPrimaryKey**: string {sensitive} (Required): PrimaryConnectionString of the endpoint. Will be obfuscated during read.
* **connectionStringSecondaryKey**: string {sensitive}: SecondaryConnectionString of the endpoint. Will be obfuscated during read.
* **endpointType**: 'EventHub' (Required): The type of Digital Twins endpoint

### ServiceBus
#### Properties
* **endpointType**: 'ServiceBus' (Required): The type of Digital Twins endpoint
* **primaryConnectionString**: string {sensitive} (Required): PrimaryConnectionString of the endpoint. Will be obfuscated during read.
* **secondaryConnectionString**: string {sensitive}: SecondaryConnectionString of the endpoint. Will be obfuscated during read.


## DigitalTwinsProperties
### Properties
* **createdTime**: string (ReadOnly): Time when DigitalTwinsInstance was created.
* **hostName**: string (ReadOnly): Api endpoint to work with DigitalTwinsInstance.
* **lastUpdatedTime**: string (ReadOnly): Time when DigitalTwinsInstance was updated.
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Warning' | string (ReadOnly): The provisioning state.

## DigitalTwinsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

