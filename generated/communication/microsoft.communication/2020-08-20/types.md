# Microsoft.Communication @ 2020-08-20

## Resource Microsoft.Communication/communicationServices@2020-08-20
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-20' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure location where the CommunicationService is running.
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[-\w]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CommunicationServiceProperties](#communicationserviceproperties): The properties of the service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TaggedResourceTags](#taggedresourcetags): Tags of the service which is a list of key value pairs that describe the resource.
* **type**: 'Microsoft.Communication/communicationServices' (ReadOnly, DeployTimeConstant): The resource type

## Function linkNotificationHub (Microsoft.Communication/communicationServices@2020-08-20)
* **Resource**: Microsoft.Communication/communicationServices
* **ApiVersion**: 2020-08-20
* **Input**: [LinkNotificationHubParameters](#linknotificationhubparameters)
* **Output**: [LinkedNotificationHub](#linkednotificationhub)

## Function listKeys (Microsoft.Communication/communicationServices@2020-08-20)
* **Resource**: Microsoft.Communication/communicationServices
* **ApiVersion**: 2020-08-20
* **Output**: [CommunicationServiceKeys](#communicationservicekeys)

## Function regenerateKey (Microsoft.Communication/communicationServices@2020-08-20)
* **Resource**: Microsoft.Communication/communicationServices
* **ApiVersion**: 2020-08-20
* **Input**: [RegenerateKeyParameters](#regeneratekeyparameters)
* **Output**: [CommunicationServiceKeys](#communicationservicekeys)

## CommunicationServiceKeys
### Properties
* **primaryConnectionString**: string: CommunicationService connection string constructed via the primaryKey
* **primaryKey**: string: The primary access key.
* **secondaryConnectionString**: string: CommunicationService connection string constructed via the secondaryKey
* **secondaryKey**: string: The secondary access key.

## CommunicationServiceProperties
### Properties
* **dataLocation**: string (Required): The location where the communication service stores its data at rest.
* **hostName**: string (ReadOnly): FQDN of the CommunicationService instance.
* **immutableResourceId**: string (ReadOnly): The immutable resource Id of the communication service.
* **notificationHubId**: string (ReadOnly): Resource ID of an Azure Notification Hub linked to this resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **version**: string (ReadOnly): Version of the CommunicationService resource. Probably you need the same or higher version of client SDKs.

## LinkedNotificationHub
### Properties
* **resourceId**: string: The resource ID of the notification hub

## LinkNotificationHubParameters
### Properties
* **connectionString**: string (Required): Connection string for the notification hub
* **resourceId**: string (Required): The resource ID of the notification hub

## RegenerateKeyParameters
### Properties
* **keyType**: 'Primary' | 'Secondary': The keyType to regenerate. Must be either 'primary' or 'secondary'(case-insensitive).

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TaggedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

