# Microsoft.DigitalTwins @ 2020-03-01-preview

## Resource Microsoft.DigitalTwins/digitalTwinsInstances@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DigitalTwinsProperties
* **sku**: DigitalTwinsSkuInfo
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DigitalTwinsEndpointResourceProperties
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints' (ReadOnly, DeployTimeConstant)

## DigitalTwinsProperties
### Properties
* **createdTime**: string (ReadOnly)
* **hostName**: string (ReadOnly)
* **lastUpdatedTime**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)

## DigitalTwinsSkuInfo
### Properties
* **name**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DigitalTwinsEndpointResourceProperties
* **Discriminator**: endpointType
### Base Properties
* **createdTime**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **tags**: Dictionary<string,String>
### EventGrid
#### Properties
* **accessKey1**: string (Required)
* **accessKey2**: string (Required)
* **endpointType**: 'EventGrid' (Required)
* **TopicEndpoint**: string

### EventHub
#### Properties
* **connectionString-PrimaryKey**: string (Required)
* **connectionString-SecondaryKey**: string (Required)
* **endpointType**: 'EventHub' (Required)

### ServiceBus
#### Properties
* **endpointType**: 'ServiceBus' (Required)
* **primaryConnectionString**: string (Required)
* **secondaryConnectionString**: string (Required)


## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventGrid
### Properties
* **accessKey1**: string (Required)
* **accessKey2**: string (Required)
* **endpointType**: 'EventGrid' (Required)
* **TopicEndpoint**: string

## EventHub
### Properties
* **connectionString-PrimaryKey**: string (Required)
* **connectionString-SecondaryKey**: string (Required)
* **endpointType**: 'EventHub' (Required)

## ServiceBus
### Properties
* **endpointType**: 'ServiceBus' (Required)
* **primaryConnectionString**: string (Required)
* **secondaryConnectionString**: string (Required)

