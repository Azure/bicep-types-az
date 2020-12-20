# Microsoft.Communication @ 2020-08-20-preview

## Resource Microsoft.Communication/communicationServices@2020-08-20-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-20-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: CommunicationServiceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Communication/communicationServices' (ReadOnly, DeployTimeConstant)

## Function listKeys (Microsoft.Communication/communicationServices@2020-08-20-preview
* **Resource**: Microsoft.Communication/communicationServices@2020-08-20-preview
* **Output**: CommunicationServiceKeys

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

## CommunicationServiceKeys
### Properties
* **primaryConnectionString**: string (ReadOnly)
* **primaryKey**: string (ReadOnly)
* **secondaryConnectionString**: string (ReadOnly)
* **secondaryKey**: string (ReadOnly)

