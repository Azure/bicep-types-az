# Microsoft.DigitalTwins @ 2020-10-31

## Microsoft.DigitalTwins/digitalTwinsInstances/endpoints
### Properties
* **apiVersion**: '2020-10-31' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DigitalTwinsEndpointResourceProperties (Required)
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints' (ReadOnly, DeployTimeConstant)

## DigitalTwinsEndpointResourceProperties
* **Discriminator**: endpointType
### Base Properties
* **createdTime**: string (ReadOnly)
* **deadLetterSecret**: string
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Disabled' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Warning' (ReadOnly)
### EventGrid
#### Properties
* **TopicEndpoint**: string (Required)
* **accessKey1**: string (Required)
* **accessKey2**: string
* **endpointType**: 'EventGrid' (Required)

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
* **TopicEndpoint**: string (Required)
* **accessKey1**: string (Required)
* **accessKey2**: string
* **endpointType**: 'EventGrid' (Required)

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

## Microsoft.DigitalTwins/digitalTwinsInstances
### Properties
* **apiVersion**: '2020-10-31' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DigitalTwinsProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances' (ReadOnly, DeployTimeConstant)

## DigitalTwinsProperties
### Properties
* **createdTime**: string (ReadOnly)
* **hostName**: string (ReadOnly)
* **lastUpdatedTime**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Warning' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

