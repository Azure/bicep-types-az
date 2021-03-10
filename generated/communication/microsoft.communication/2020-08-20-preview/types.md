# Microsoft.Communication @ 2020-08-20-preview

## Resource Microsoft.Communication/communicationServices@2020-08-20-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-20-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CommunicationServiceProperties](#communicationserviceproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Communication/communicationServices' (ReadOnly, DeployTimeConstant)

## CommunicationServiceProperties
### Properties
* **dataLocation**: string (Required)
* **hostName**: string (ReadOnly)
* **immutableResourceId**: string (ReadOnly)
* **notificationHubId**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **version**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

