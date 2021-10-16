# Microsoft.DataFactory @ 2017-09-01-preview

## Resource Microsoft.DataFactory/factories@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [FactoryIdentity](#factoryidentity): Identity properties of the factory resource.
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FactoryProperties](#factoryproperties): Factory resource properties.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.DataFactory/factories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/datasets@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Dataset](#dataset) (Required): The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents.
* **type**: 'Microsoft.DataFactory/factories/datasets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/integrationRuntimes@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationRuntime](#integrationruntime) (Required): Azure Data Factory nested object which serves as a compute resource for activities.
* **type**: 'Microsoft.DataFactory/factories/integrationRuntimes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/linkedservices@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedService](#linkedservice) (Required): The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource.
* **type**: 'Microsoft.DataFactory/factories/linkedservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/pipelines@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Pipeline](#pipeline) (Required): A data factory pipeline.
* **type**: 'Microsoft.DataFactory/factories/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/triggers@2017-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Trigger](#trigger) (Required): Azure data factory nested object which contains information about creating pipeline run
* **type**: 'Microsoft.DataFactory/factories/triggers' (ReadOnly, DeployTimeConstant): The resource type

## FactoryIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the identity.
* **tenantId**: string (ReadOnly): The client tenant id of the identity.
* **type**: 'SystemAssigned' (Required): The identity type. Currently the only supported type is 'SystemAssigned'.

## FactoryProperties
### Properties
* **createTime**: string (ReadOnly): Time the factory was created in ISO8601 format.
* **provisioningState**: string (ReadOnly): Factory provisioning state, example Succeeded.
* **version**: string (ReadOnly): Version of the factory.
* **vstsConfiguration**: [FactoryVstsConfiguration](#factoryvstsconfiguration): Factory's VSTS repo information.

## FactoryVstsConfiguration
### Properties
* **accountName**: string: VSTS account name.
* **collaborationBranch**: string: VSTS collaboration branch.
* **lastCommitId**: string: VSTS last commit id.
* **projectName**: string: VSTS project name.
* **repositoryName**: string: VSTS repository name.
* **rootFolder**: string: VSTS root folder.
* **tenantId**: string: VSTS tenant id.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dataset
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the Dataset.
* **description**: string: Dataset description.
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Definition of all parameters for an entity.
* **structure**: any: Any object

## LinkedServiceReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): An object mapping parameter names to argument values.
* **referenceName**: string (Required): Reference LinkedService name.
* **type**: 'LinkedServiceReference' (Required): Linked service reference type.

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ParameterDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## ParameterSpecification
### Properties
* **defaultValue**: any: Any object
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'Object' | 'SecureString' | 'String' (Required): Parameter type.

## IntegrationRuntime
* **Discriminator**: type

### Base Properties
* **description**: string: Integration runtime description.

## LinkedService
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the Dataset.
* **connectVia**: [IntegrationRuntimeReference](#integrationruntimereference): Integration runtime reference type.
* **description**: string: Linked service description.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Definition of all parameters for an entity.

## IntegrationRuntimeReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): An object mapping parameter names to argument values.
* **referenceName**: string (Required): Reference integration runtime name.
* **type**: 'IntegrationRuntimeReference' (Required): Type of integration runtime.

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ParameterDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## Pipeline
### Properties
* **activities**: [Activity](#activity)[]: List of activities in pipeline.
* **annotations**: any[]: List of tags that can be used for describing the Pipeline.
* **concurrency**: int: The max number of concurrent runs for the pipeline.
* **description**: string: The description of the pipeline.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Definition of all parameters for an entity.

## Activity
* **Discriminator**: type

### Base Properties
* **dependsOn**: [ActivityDependency](#activitydependency)[]: Activity depends on condition.
* **description**: string: Activity description.
* **name**: string (Required): Activity name.

## ActivityDependency
### Properties
* **activity**: string (Required): Activity name.
* **dependencyConditions**: 'Completed' | 'Failed' | 'Skipped' | 'Succeeded'[] (Required): Match-Condition for the dependency.
### Additional Properties
* **Additional Properties Type**: any

## ParameterDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## Trigger
* **Discriminator**: type

### Base Properties
* **description**: string: Trigger description.
* **runtimeState**: 'Disabled' | 'Started' | 'Stopped' (ReadOnly): Enumerates possible state of Triggers.

