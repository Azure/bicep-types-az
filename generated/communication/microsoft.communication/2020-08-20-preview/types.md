# Microsoft.Communication @ 2020-08-20-preview

## Resource Microsoft.Communication/communicationServices@2020-08-20-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure location where the CommunicationService is running.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CommunicationServiceProperties](#communicationserviceproperties): The properties of the service.
* **tags**: [TaggedResourceTags](#taggedresourcetags): Tags of the service which is a list of key value pairs that describe the resource.
* **type**: 'Microsoft.Communication/communicationServices' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Communication/communicationServices@2020-08-20-preview)
* **Resource**: Microsoft.Communication/communicationServices
* **ApiVersion**: 2020-08-20-preview
* **Output**: [CommunicationServiceKeys](#communicationservicekeys)

## CommunicationServiceKeys
### Properties
* **primaryConnectionString**: string (ReadOnly): CommunicationService connection string constructed via the primaryKey
* **primaryKey**: string (ReadOnly): The primary access key.
* **secondaryConnectionString**: string (ReadOnly): CommunicationService connection string constructed via the secondaryKey
* **secondaryKey**: string (ReadOnly): The secondary access key.

## CommunicationServiceProperties
### Properties
* **dataLocation**: string (Required): The location where the communication service stores its data at rest.
* **hostName**: string (ReadOnly): FQDN of the CommunicationService instance.
* **immutableResourceId**: string (ReadOnly): The immutable resource Id of the communication service.
* **notificationHubId**: string (ReadOnly): Resource ID of an Azure Notification Hub linked to this resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **version**: string (ReadOnly): Version of the CommunicationService resource. Probably you need the same or higher version of client SDKs.

## TaggedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

