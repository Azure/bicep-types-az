# Microsoft.Automation @ 2018-01-15

## Resource Microsoft.Automation/automationAccounts/compilationjobs@2018-01-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DscCompilationJobCreateProperties (Required)
* **tags**: DscCompilationJobCreateParametersTags (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/compilationjobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/nodeConfigurations@2018-01-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DscNodeConfigurationCreateOrUpdateParametersProperties
* **tags**: DscNodeConfigurationCreateOrUpdateParametersTags (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/nodeConfigurations' (ReadOnly, DeployTimeConstant)

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
* **parameters**: DscCompilationJobCreatePropertiesParameters
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' (ReadOnly)
* **runOn**: string (ReadOnly)
* **startedBy**: string (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## DscConfigurationAssociationProperty
### Properties
* **name**: string

## DscCompilationJobCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscCompilationJobCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## DscNodeConfigurationCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

