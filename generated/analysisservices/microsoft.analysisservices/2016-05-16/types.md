# Microsoft.AnalysisServices @ 2016-05-16

## Resource Microsoft.AnalysisServices/servers@2016-05-16
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-16' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AnalysisServicesServerProperties](#analysisservicesserverproperties)
* **sku**: [ResourceSku](#resourcesku) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.AnalysisServices/servers' (ReadOnly, DeployTimeConstant)

## AnalysisServicesServerProperties
### Properties
* **asAdministrators**: [ServerAdministrators](#serveradministrators)
* **backupBlobContainerUri**: string
* **managedMode**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly)
* **serverFullName**: string (ReadOnly)
* **serverMonitorMode**: int
* **state**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly)

## ServerAdministrators
### Properties
* **members**: string[]

## ResourceSku
### Properties
* **capacity**: int
* **name**: string (Required)
* **tier**: 'Basic' | 'Development' | 'Standard'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

