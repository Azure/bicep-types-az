# Microsoft.Communication @ 2020-08-20

## Resource Microsoft.Communication/communicationServices@2020-08-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CommunicationServiceProperties](#communicationserviceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TaggedResourceTags](#taggedresourcetags)
* **type**: 'Microsoft.Communication/communicationServices' (ReadOnly, DeployTimeConstant)

## CommunicationServiceProperties
### Properties
* **dataLocation**: string (Required)
* **hostName**: string (ReadOnly)
* **immutableResourceId**: string (ReadOnly)
* **notificationHubId**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **version**: string (ReadOnly)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## TaggedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

