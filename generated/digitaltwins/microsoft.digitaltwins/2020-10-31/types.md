# Microsoft.DigitalTwins @ 2020-10-31

## Resource Microsoft.DigitalTwins/digitalTwinsInstances@2020-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DigitalTwinsProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DigitalTwinsEndpointResourceProperties (Required)
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints' (ReadOnly, DeployTimeConstant)

## DigitalTwinsProperties
### Properties
* **createdTime**: string (ReadOnly)
* **hostName**: string (ReadOnly)
* **lastUpdatedTime**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Warning' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## DigitalTwinsEndpointResourceProperties
* **Discriminator**: endpointType
### Base Properties
* **createdTime**: string (ReadOnly)
* **deadLetterSecret**: string
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Disabled' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Warning' (ReadOnly)
### EventGrid
#### Properties
* **accessKey1**: string (Required)
* **accessKey2**: string
* **endpointType**: 'EventGrid' (Required)
* **TopicEndpoint**: string (Required)

### EventHub
#### Properties
* **connectionStringPrimaryKey**: string (Required)
* **connectionStringSecondaryKey**: string
* **endpointType**: 'EventHub' (Required)

### ServiceBus
#### Properties
* **endpointType**: 'ServiceBus' (Required)
* **primaryConnectionString**: string (Required)
* **secondaryConnectionString**: string


## EventGrid
### Properties
* **accessKey1**: string (Required)
* **accessKey2**: string
* **endpointType**: 'EventGrid' (Required)
* **TopicEndpoint**: string (Required)

## EventHub
### Properties
* **connectionStringPrimaryKey**: string (Required)
* **connectionStringSecondaryKey**: string
* **endpointType**: 'EventHub' (Required)

## ServiceBus
### Properties
* **endpointType**: 'ServiceBus' (Required)
* **primaryConnectionString**: string (Required)
* **secondaryConnectionString**: string

