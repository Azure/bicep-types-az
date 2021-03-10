# Microsoft.DigitalTwins @ 2020-12-01

## Resource Microsoft.DigitalTwins/digitalTwinsInstances@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [DigitalTwinsIdentity](#digitaltwinsidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DigitalTwinsProperties](#digitaltwinsproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DigitalTwinsEndpointResourceProperties](#digitaltwinsendpointresourceproperties) (Required)
* **type**: 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:29_properties](#schemas29properties) (Required)
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
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]
* **provisioningState**: 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Moving' | 'Provisioning' | 'Restoring' | 'Succeeded' | 'Suspending' | 'Updating' | 'Warning' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [schemas:29_properties](#schemas29properties) (Required)
* **type**: string (ReadOnly)

## schemas:29_properties
### Properties
* **groupIds**: string[]
* **privateEndpoint**: [schemas:29_properties](#schemas29properties)
* **privateLinkServiceConnectionState**: [schemas:29_properties](#schemas29properties)
* **provisioningState**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (ReadOnly)

## Dictionary<string,String>
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

