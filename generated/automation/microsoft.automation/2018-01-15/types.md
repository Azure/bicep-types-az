# Microsoft.Automation @ 2018-01-15

## Resource Microsoft.Automation/automationAccounts/compilationjobs@2018-01-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DscCompilationJobCreateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/compilationjobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/nodeConfigurations@2018-01-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DscNodeConfigurationCreateOrUpdateParametersProperties
* **type**: 'Microsoft.Automation/automationAccounts/nodeConfigurations' (ReadOnly, DeployTimeConstant)

## DscCompilationJobCreateProperties
### Properties
* **configuration**: DscConfigurationAssociationProperty (Required)
* **parameters**: DscCompilationJobCreatePropertiesParameters

## DscConfigurationAssociationProperty
### Properties
* **name**: string

## DscCompilationJobCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscNodeConfigurationCreateOrUpdateParametersProperties
### Properties
* **configuration**: DscConfigurationAssociationProperty (Required)
* **incrementNodeConfigurationBuild**: bool
* **source**: ContentSource (Required)

## ContentSource
### Properties

