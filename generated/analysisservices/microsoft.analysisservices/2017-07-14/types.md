# Microsoft.AnalysisServices @ 2017-07-14

## Resource Microsoft.AnalysisServices/servers@2017-07-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-14' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the Analysis Services resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AnalysisServicesServerProperties](#analysisservicesserverproperties): Properties of Analysis Services resource.
* **sku**: [ResourceSku](#resourcesku) (Required): Represents the SKU name and Azure pricing tier for Analysis Services resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Key-value pairs of additional resource provisioning properties.
* **type**: 'Microsoft.AnalysisServices/servers' (ReadOnly, DeployTimeConstant): The resource type

## AnalysisServicesServerProperties
### Properties
* **asAdministrators**: [ServerAdministrators](#serveradministrators): An array of administrator user identities
* **backupBlobContainerUri**: string: The SAS container URI to the backup container.
* **gatewayDetails**: [GatewayDetails](#gatewaydetails): The gateway details.
* **managedMode**: int: The managed mode of the server (0 = not managed, 1 = managed).
* **provisioningState**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly): The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning.
* **serverFullName**: string (ReadOnly): The full name of the Analysis Services resource.
* **serverMonitorMode**: int: The server monitor mode for AS server
* **state**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly): The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning.

## ServerAdministrators
### Properties
* **members**: string[]: An array of administrator user identities.

## GatewayDetails
### Properties
* **dmtsClusterUri**: string (ReadOnly): Uri of the DMTS cluster.
* **gatewayObjectId**: string (ReadOnly): Gateway object id from in the DMTS cluster for the gateway resource.
* **gatewayResourceId**: string: Gateway resource to be associated with the server.

## ResourceSku
### Properties
* **name**: string (Required): Name of the SKU level.
* **tier**: 'Basic' | 'Development' | 'Standard': The name of the Azure pricing tier to which the SKU applies.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

