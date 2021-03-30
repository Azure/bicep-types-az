# Microsoft.Communication @ 2020-08-20

## Resource Microsoft.Communication/communicationServices@2020-08-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-20' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure location where the CommunicationService is running.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CommunicationServiceProperties](#communicationserviceproperties): A class that describes the properties of the CommunicationService.
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Tags of the service which is a list of key value pairs that describe the resource.
* **type**: 'Microsoft.Communication/communicationServices' (ReadOnly, DeployTimeConstant): The resource type

## CommunicationServiceProperties
### Properties
* **dataLocation**: string (Required): The location where the communication service stores its data at rest.
* **hostName**: string (ReadOnly): FQDN of the CommunicationService instance.
* **immutableResourceId**: string (ReadOnly): The immutable resource Id of the communication service.
* **notificationHubId**: string (ReadOnly): Resource ID of an Azure Notification Hub linked to this resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly): Provisioning state of the resource. Possible values include: 'Unknown', 'Succeeded', 'Failed', 'Canceled', 'Running', 'Creating', 'Updating', 'Deleting', 'Moving'
* **version**: string (ReadOnly): Version of the CommunicationService resource. Probably you need the same or higher version of client SDKs.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

