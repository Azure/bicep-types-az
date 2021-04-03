# Microsoft.DigitalTwins @ 2020-03-01-preview

## Resource Microsoft.DigitalTwins/digitalTwinsInstances@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DigitalTwinsProperties](#digitaltwinsproperties): The properties of a DigitalTwinsInstance.
* **sku**: [DigitalTwinsSkuInfo](#digitaltwinsskuinfo): Information about the SKU of the DigitalTwinsInstance.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The resource tags.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DigitalTwinsEndpointResourceProperties](#digitaltwinsendpointresourceproperties): Properties related to Digital Twins Endpoint
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## DigitalTwinsProperties
### Properties
* **createdTime**: string (ReadOnly): Time when DigitalTwinsInstance was created.
* **hostName**: string (ReadOnly): Api endpoint to work with DigitalTwinsInstance.
* **lastUpdatedTime**: string (ReadOnly): Time when DigitalTwinsInstance was created.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly): The provisioning state.

## DigitalTwinsSkuInfo
### Properties
* **name**: string (Required): The name of the SKU.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DigitalTwinsEndpointResourceProperties
* **Discriminator**: endpointType
### Base Properties
* **createdTime**: string (ReadOnly): Time when the Endpoint was added to DigitalTwinsInstance.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly): The provisioning state.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The resource tags.
### EventGrid
#### Properties
* **accessKey1**: string (Required): EventGrid secondary accesskey. Will be obfuscated during read
* **accessKey2**: string (Required): EventGrid secondary accesskey. Will be obfuscated during read
* **endpointType**: 'EventGrid' (Required): properties related to eventgrid.
* **TopicEndpoint**: string: EventGrid Topic Endpoint

### EventHub
#### Properties
* **connectionString-PrimaryKey**: string (Required): PrimaryConnectionString of the endpoint. Will be obfuscated during read
* **connectionString-SecondaryKey**: string (Required): SecondaryConnectionString of the endpoint. Will be obfuscated during read
* **endpointType**: 'EventHub' (Required): properties related to eventhub.

### ServiceBus
#### Properties
* **endpointType**: 'ServiceBus' (Required): properties related to servicebus.
* **primaryConnectionString**: string (Required): PrimaryConnectionString of the endpoint. Will be obfuscated during read
* **secondaryConnectionString**: string (Required): SecondaryConnectionString of the endpoint. Will be obfuscated during read


## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventGrid
### Properties
* **accessKey1**: string (Required): EventGrid secondary accesskey. Will be obfuscated during read
* **accessKey2**: string (Required): EventGrid secondary accesskey. Will be obfuscated during read
* **endpointType**: 'EventGrid' (Required): properties related to eventgrid.
* **TopicEndpoint**: string: EventGrid Topic Endpoint

## EventHub
### Properties
* **connectionString-PrimaryKey**: string (Required): PrimaryConnectionString of the endpoint. Will be obfuscated during read
* **connectionString-SecondaryKey**: string (Required): SecondaryConnectionString of the endpoint. Will be obfuscated during read
* **endpointType**: 'EventHub' (Required): properties related to eventhub.

## ServiceBus
### Properties
* **endpointType**: 'ServiceBus' (Required): properties related to servicebus.
* **primaryConnectionString**: string (Required): PrimaryConnectionString of the endpoint. Will be obfuscated during read
* **secondaryConnectionString**: string (Required): SecondaryConnectionString of the endpoint. Will be obfuscated during read

