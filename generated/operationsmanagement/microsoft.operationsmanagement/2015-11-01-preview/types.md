# Microsoft.OperationsManagement @ 2015-11-01-preview

## Resource Microsoft.OperationsManagement/ManagementAssociations@2015-11-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagementAssociationProperties](#managementassociationproperties)
* **type**: 'Microsoft.OperationsManagement/ManagementAssociations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationsManagement/ManagementConfigurations@2015-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagementConfigurationProperties](#managementconfigurationproperties)
* **type**: 'Microsoft.OperationsManagement/ManagementConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationsManagement/solutions@2015-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: [SolutionPlan](#solutionplan)
* **properties**: [SolutionProperties](#solutionproperties)
* **tags**: [SolutionTags](#solutiontags)
* **type**: 'Microsoft.OperationsManagement/solutions' (ReadOnly, DeployTimeConstant)

## ManagementAssociationProperties
### Properties
* **applicationId**: string (Required)

## ManagementConfigurationProperties
### Properties
* **applicationId**: string
* **parameters**: [ArmTemplateParameter](#armtemplateparameter)[] (Required)
* **parentResourceType**: string (Required)
* **provisioningState**: string (ReadOnly)
* **template**: any (Required)

## ArmTemplateParameter
### Properties
* **name**: string
* **value**: string

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

## SolutionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

