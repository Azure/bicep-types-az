# Microsoft.DigitalTwins @ 2020-10-31

## Resource Microsoft.DigitalTwins/digitalTwinsInstances@2020-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DigitalTwinsProperties](#digitaltwinsproperties): The properties of a DigitalTwinsInstance.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The resource tags.
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DigitalTwinsEndpointResourceProperties](#digitaltwinsendpointresourceproperties) (Required): Properties related to Digital Twins Endpoint
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## DigitalTwinsProperties
### Properties
* **createdTime**: string (ReadOnly): Time when DigitalTwinsInstance was created.
* **hostName**: string (ReadOnly): Api endpoint to work with DigitalTwinsInstance.
* **lastUpdatedTime**: string (ReadOnly): Time when DigitalTwinsInstance was updated.
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Warning' (ReadOnly): The provisioning state. Possible values include: 'Provisioning', 'Deleting', 'Succeeded', 'Failed', 'Canceled', 'Deleted', 'Warning', 'Suspending', 'Restoring', 'Moving'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DigitalTwinsEndpointResourceProperties
* **Discriminator**: endpointType
### Base Properties
* **createdTime**: string (ReadOnly): Time when the Endpoint was added to DigitalTwinsInstance.
* **deadLetterSecret**: string: Dead letter storage secret. Will be obfuscated during read.
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Disabled' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Warning' (ReadOnly): The provisioning state. Possible values include: 'Provisioning', 'Deleting', 'Succeeded', 'Failed', 'Canceled', 'Deleted', 'Warning', 'Suspending', 'Restoring', 'Moving', 'Disabled'
### EventGrid
#### Properties
* **accessKey1**: string (Required): EventGrid secondary accesskey. Will be obfuscated during read.
* **accessKey2**: string: EventGrid secondary accesskey. Will be obfuscated during read.
* **endpointType**: 'EventGrid' (Required): Properties related to EventGrid.
* **TopicEndpoint**: string (Required): EventGrid Topic Endpoint

### EventHub
#### Properties
* **connectionStringPrimaryKey**: string (Required): PrimaryConnectionString of the endpoint. Will be obfuscated during read.
* **connectionStringSecondaryKey**: string: SecondaryConnectionString of the endpoint. Will be obfuscated during read.
* **endpointType**: 'EventHub' (Required): Properties related to EventHub.

### ServiceBus
#### Properties
* **endpointType**: 'ServiceBus' (Required): Properties related to ServiceBus.
* **primaryConnectionString**: string (Required): PrimaryConnectionString of the endpoint. Will be obfuscated during read.
* **secondaryConnectionString**: string: SecondaryConnectionString of the endpoint. Will be obfuscated during read.


## EventGrid
### Properties
* **accessKey1**: string (Required): EventGrid secondary accesskey. Will be obfuscated during read.
* **accessKey2**: string: EventGrid secondary accesskey. Will be obfuscated during read.
* **endpointType**: 'EventGrid' (Required): Properties related to EventGrid.
* **TopicEndpoint**: string (Required): EventGrid Topic Endpoint

## EventHub
### Properties
* **connectionStringPrimaryKey**: string (Required): PrimaryConnectionString of the endpoint. Will be obfuscated during read.
* **connectionStringSecondaryKey**: string: SecondaryConnectionString of the endpoint. Will be obfuscated during read.
* **endpointType**: 'EventHub' (Required): Properties related to EventHub.

## ServiceBus
### Properties
* **endpointType**: 'ServiceBus' (Required): Properties related to ServiceBus.
* **primaryConnectionString**: string (Required): PrimaryConnectionString of the endpoint. Will be obfuscated during read.
* **secondaryConnectionString**: string: SecondaryConnectionString of the endpoint. Will be obfuscated during read.

