# Microsoft.DigitalTwins @ 2020-03-01-preview

## Resource Microsoft.DigitalTwins/digitalTwinsInstances@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DigitalTwinsProperties](#digitaltwinsproperties): DigitalTwins instance properties.
* **sku**: [DigitalTwinsSkuInfo](#digitaltwinsskuinfo): This property is reserved for future use, and will be ignored/omitted
* **tags**: [DigitalTwinsResourceTags](#digitaltwinsresourcetags): The resource tags.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DigitalTwinsEndpointResourceProperties](#digitaltwinsendpointresourceproperties): DigitalTwinsInstance endpoint resource properties.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## DigitalTwinsEndpointResourceProperties
* **Discriminator**: endpointType

### Base Properties
* **createdTime**: string (ReadOnly): Time when the Endpoint was added to DigitalTwinsInstance.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state.
* **tags**: [DigitalTwinsEndpointResourcePropertiesTags](#digitaltwinsendpointresourcepropertiestags): The resource tags.

### EventGrid
#### Properties
* **accessKey1**: string (Required): EventGrid secondary accesskey. Will be obfuscated during read
* **accessKey2**: string (Required): EventGrid secondary accesskey. Will be obfuscated during read
* **endpointType**: 'EventGrid' (Required): The type of Digital Twins endpoint
* **TopicEndpoint**: string: EventGrid Topic Endpoint

### EventHub
#### Properties
* **connectionString-PrimaryKey**: string (Required): PrimaryConnectionString of the endpoint. Will be obfuscated during read
* **connectionString-SecondaryKey**: string (Required): SecondaryConnectionString of the endpoint. Will be obfuscated during read
* **endpointType**: 'EventHub' (Required): The type of Digital Twins endpoint

### ServiceBus
#### Properties
* **endpointType**: 'ServiceBus' (Required): The type of Digital Twins endpoint
* **primaryConnectionString**: string (Required): PrimaryConnectionString of the endpoint. Will be obfuscated during read
* **secondaryConnectionString**: string (Required): SecondaryConnectionString of the endpoint. Will be obfuscated during read


## DigitalTwinsEndpointResourcePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DigitalTwinsProperties
### Properties
* **createdTime**: string (ReadOnly): Time when DigitalTwinsInstance was created.
* **hostName**: string (ReadOnly): Api endpoint to work with DigitalTwinsInstance.
* **lastUpdatedTime**: string (ReadOnly): Time when DigitalTwinsInstance was created.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state.

## DigitalTwinsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DigitalTwinsSkuInfo
### Properties
* **name**: 'F1' | string (Required): The name of the SKU.

