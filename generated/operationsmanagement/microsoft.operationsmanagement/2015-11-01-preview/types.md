# Microsoft.OperationsManagement @ 2015-11-01-preview

## Resource Microsoft.OperationsManagement/ManagementAssociations@2015-11-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagementAssociationProperties](#managementassociationproperties): Properties for ManagementAssociation object supported by the OperationsManagement resource provider.
* **type**: 'Microsoft.OperationsManagement/ManagementAssociations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationsManagement/ManagementConfigurations@2015-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagementConfigurationProperties](#managementconfigurationproperties): Properties for ManagementConfiguration object supported by the OperationsManagement resource provider.
* **type**: 'Microsoft.OperationsManagement/ManagementConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationsManagement/solutions@2015-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [SolutionPlan](#solutionplan): Plan for solution object supported by the OperationsManagement resource provider.
* **properties**: [SolutionProperties](#solutionproperties): Properties for solution object supported by the OperationsManagement resource provider.
* **tags**: [SolutionTags](#solutiontags): Resource tags
* **type**: 'Microsoft.OperationsManagement/solutions' (ReadOnly, DeployTimeConstant): The resource type

## ArmTemplateParameter
### Properties
* **name**: string: name of the parameter.
* **value**: string: value for the parameter. In Jtoken

## ManagementAssociationProperties
### Properties
* **applicationId**: string (Required): The applicationId of the appliance for this association.

## ManagementConfigurationProperties
### Properties
* **applicationId**: string: The applicationId of the appliance for this Management.
* **parameters**: [ArmTemplateParameter](#armtemplateparameter)[] (Required): Parameters to run the ARM template
* **parentResourceType**: string (Required): The type of the parent resource.
* **provisioningState**: string (ReadOnly): The provisioning state for the ManagementConfiguration.
* **template**: any (Required): The Json object containing the ARM template to deploy

## SolutionPlan
### Properties
* **name**: string: name of the solution to be created. For Microsoft published solution it should be in the format of solutionType(workspaceName). SolutionType part is case sensitive. For third party solution, it can be anything.
* **product**: string: name of the solution to enabled/add. For Microsoft published gallery solution it should be in the format of OMSGallery/<solutionType>. This is case sensitive
* **promotionCode**: string: promotionCode, Not really used now, can you left as empty
* **publisher**: string: Publisher name. For gallery solution, it is Microsoft.

## SolutionProperties
### Properties
* **containedResources**: string[]: The azure resources that will be contained within the solutions. They will be locked and gets deleted automatically when the solution is deleted.
* **provisioningState**: string (ReadOnly): The provisioning state for the solution.
* **referencedResources**: string[]: The resources that will be referenced from this solution. Deleting any of those solution out of band will break the solution.
* **workspaceResourceId**: string (Required): The azure resourceId for the workspace where the solution will be deployed/enabled.

## SolutionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

