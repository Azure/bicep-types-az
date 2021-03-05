# Microsoft.DigitalTwins @ 2020-12-01

## Resource Microsoft.DigitalTwins/digitalTwinsInstances@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: DigitalTwinsIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DigitalTwinsProperties
* **tags**: DigitalTwinsResourceTags
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DigitalTwinsEndpointResourceProperties (Required)
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties (Required)
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## DigitalTwinsIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## DigitalTwinsProperties
### Properties
* **createdTime**: string (ReadOnly)
* **hostName**: string (ReadOnly)
* **lastUpdatedTime**: string (ReadOnly)
* **privateEndpointConnections**: PrivateEndpointConnection[]
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Updating' | 'Warning' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties (Required)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]
* **privateEndpoint**: ConnectionPropertiesPrivateEndpoint
* **privateLinkServiceConnectionState**: ConnectionPropertiesPrivateLinkServiceConnectionState
* **provisioningState**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (ReadOnly)

## ConnectionPropertiesPrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## ConnectionPropertiesPrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string (Required)
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (Required)

## DigitalTwinsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DigitalTwinsEndpointResourceProperties
* **Discriminator**: endpointType

### Base Properties
* **authenticationType**: 'IdentityBased' | 'KeyBased'
* **createdTime**: string (ReadOnly)
* **deadLetterSecret**: string
* **deadLetterUri**: string
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Disabled' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Warning' (ReadOnly)
### EventGrid
#### Properties
* **accessKey1**: string (Required)
* **accessKey2**: string
* **endpointType**: 'EventGrid' (Required)
* **TopicEndpoint**: string (Required)

### EventHub
#### Properties
* **connectionStringPrimaryKey**: string
* **connectionStringSecondaryKey**: string
* **endpointType**: 'EventHub' (Required)
* **endpointUri**: string
* **entityPath**: string

### ServiceBus
#### Properties
* **endpointType**: 'ServiceBus' (Required)
* **endpointUri**: string
* **entityPath**: string
* **primaryConnectionString**: string
* **secondaryConnectionString**: string


## EventGrid
### Properties
* **accessKey1**: string (Required)
* **accessKey2**: string
* **endpointType**: 'EventGrid' (Required)
* **TopicEndpoint**: string (Required)

## EventHub
### Properties
* **connectionStringPrimaryKey**: string
* **connectionStringSecondaryKey**: string
* **endpointType**: 'EventHub' (Required)
* **endpointUri**: string
* **entityPath**: string

## ServiceBus
### Properties
* **endpointType**: 'ServiceBus' (Required)
* **endpointUri**: string
* **entityPath**: string
* **primaryConnectionString**: string
* **secondaryConnectionString**: string

