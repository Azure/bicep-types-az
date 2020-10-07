# Microsoft.Communication @ 2020-08-20-preview

## Microsoft.Communication/communicationServices
### Properties
* **apiVersion**: '2020-08-20-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: CommunicationServiceProperties
* **tags**: Dictionary<string,String>
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
### Additional Properties
* **Additional Properties Type**: string

