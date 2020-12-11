# Microsoft.Automation @ 2018-01-15

## Microsoft.Automation/automationAccounts/compilationjobs
### Properties
* **apiVersion**: '2018-01-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DscCompilationJobCreateProperties (Required)
* **tags**: Dictionary<string,String> (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/compilationjobs' (ReadOnly, DeployTimeConstant)

## DscCompilationJobCreateProperties
### Properties
* **configuration**: DscConfigurationAssociationProperty (Required)
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **incrementNodeConfigurationBuild**: bool (WriteOnly)
* **jobId**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **parameters**: Dictionary<string,String>
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' (ReadOnly)
* **runOn**: string (ReadOnly)
* **startedBy**: string (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## DscConfigurationAssociationProperty
### Properties
* **name**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Automation/automationAccounts/nodeConfigurations
### Properties
* **apiVersion**: '2018-01-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DscNodeConfigurationCreateOrUpdateParametersProperties
* **tags**: Dictionary<string,String> (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/nodeConfigurations' (ReadOnly, DeployTimeConstant)

## DscNodeConfigurationCreateOrUpdateParametersProperties
### Properties
* **configuration**: DscConfigurationAssociationProperty (Required)
* **creationTime**: string (ReadOnly)
* **incrementNodeConfigurationBuild**: bool
* **lastModifiedTime**: string (ReadOnly)
* **nodeCount**: int (ReadOnly)
* **source**: ContentSource (Required)

## ContentSource
### Properties
* **hash**: ContentHash (WriteOnly)
* **type**: 'embeddedContent' | 'uri' (WriteOnly)
* **value**: string (WriteOnly)
* **version**: string (WriteOnly)

## ContentHash
### Properties
* **algorithm**: string (Required, WriteOnly)
* **value**: string (Required, WriteOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

