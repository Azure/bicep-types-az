# Microsoft.OperationsManagement @ 2015-11-01-preview

## Microsoft.OperationsManagement/ManagementAssociations
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagementAssociationProperties
* **type**: 'Microsoft.OperationsManagement/ManagementAssociations' (ReadOnly, DeployTimeConstant)

## ManagementAssociationProperties
### Properties
* **applicationId**: string (Required)

## Microsoft.OperationsManagement/ManagementConfigurations
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagementConfigurationProperties
* **type**: 'Microsoft.OperationsManagement/ManagementConfigurations' (ReadOnly, DeployTimeConstant)

## ManagementConfigurationProperties
### Properties
* **applicationId**: string
* **parameters**: ArmTemplateParameter[] (Required)
* **parentResourceType**: string (Required)
* **provisioningState**: string (ReadOnly)
* **template**: any (Required)

## ArmTemplateParameter
### Properties
* **name**: string
* **value**: string

## Microsoft.OperationsManagement/solutions
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: SolutionPlan
* **properties**: SolutionProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationsManagement/solutions' (ReadOnly, DeployTimeConstant)

## SolutionPlan
### Properties
* **name**: string
* **product**: string
* **promotionCode**: string
* **publisher**: string

## SolutionProperties
### Properties
* **containedResources**: string[]
* **provisioningState**: string (ReadOnly)
* **referencedResources**: string[]
* **workspaceResourceId**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

