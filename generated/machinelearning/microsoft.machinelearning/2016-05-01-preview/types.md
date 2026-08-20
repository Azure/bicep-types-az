# Microsoft.MachineLearning @ 2016-05-01-preview

## Resource Microsoft.MachineLearning/commitmentPlans@2016-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: An entity tag used to enforce optimistic concurrency.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CommitmentPlanProperties](#commitmentplanproperties) (ReadOnly): The commitment plan properties.
* **sku**: [ResourceSku](#resourcesku): The commitment plan SKU.
* **tags**: [Tags](#tags): User-defined tags for the resource.
* **type**: 'Microsoft.MachineLearning/commitmentPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearning/commitmentPlans/commitmentAssociations@2016-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2016-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): An entity tag used to enforce optimistic concurrency.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CommitmentAssociationProperties](#commitmentassociationproperties) (ReadOnly): The properties of the commitment association resource.
* **tags**: [Tags](#tags) (ReadOnly): User-defined tags for the resource.
* **type**: 'Microsoft.MachineLearning/commitmentPlans/commitmentAssociations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearning/webServices@2016-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebServiceProperties](#webserviceproperties) (Required): Contains the property payload that describes the web service.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearning/webServices' (ReadOnly, DeployTimeConstant): The resource type

## Function move (Microsoft.MachineLearning/commitmentPlans/commitmentAssociations@2016-05-01-preview)
* **Resource**: Microsoft.MachineLearning/commitmentPlans/commitmentAssociations
* **ApiVersion**: 2016-05-01-preview
* **Input**: [MoveCommitmentAssociationRequest](#movecommitmentassociationrequest)
* **Output**: [CommitmentAssociation](#commitmentassociation)

## AssetItem
### Properties
* **id**: string: Asset's Id.
* **inputPorts**: [AssetItemInputPorts](#assetiteminputports): Information about the asset's input ports.
* **locationInfo**: [AssetLocation](#assetlocation) (Required): Access information for the asset.
* **metadata**: [AssetItemMetadata](#assetitemmetadata): If the asset is a custom module, this holds the module's metadata.
* **name**: string (Required): Asset's friendly name.
* **outputPorts**: [AssetItemOutputPorts](#assetitemoutputports): Information about the asset's output ports.
* **parameters**: [ModuleAssetParameter](#moduleassetparameter)[]: If the asset is a custom module, this holds the module's parameters.
* **type**: 'Module' | 'Resource' | string (Required): Asset's type.

## AssetItemInputPorts
### Properties
### Additional Properties
* **Additional Properties Type**: [InputPort](#inputport)

## AssetItemMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssetItemOutputPorts
### Properties
### Additional Properties
* **Additional Properties Type**: [OutputPort](#outputport)

## AssetLocation
### Properties
* **credentials**: string: Access credentials for the asset, if applicable (e.g. asset specified by storage account connection string + blob URI)
* **uri**: string (Required): The URI where the asset is accessible from, (e.g. aml://abc for system assets or https://xyz for user assets

## ColumnSpecification
### Properties
* **enum**: any[]: If the data type is categorical, this provides the list of accepted categories.
* **format**: 'Byte' | 'Char' | 'Complex128' | 'Complex64' | 'Date-time' | 'Date-timeOffset' | 'Double' | 'Duration' | 'Float' | 'Int16' | 'Int32' | 'Int64' | 'Int8' | 'Uint16' | 'Uint32' | 'Uint64' | 'Uint8' | string: Additional format information for the data type.
* **type**: 'Boolean' | 'Integer' | 'Number' | 'String' | string (Required): Data type of the column.
* **x-ms-isnullable**: bool: Flag indicating if the type supports null values or not.
* **x-ms-isordered**: bool: Flag indicating whether the categories are treated as an ordered set or not, if this is a categorical column.

## CommitmentAssociation
### Properties
* **etag**: string: An entity tag used to enforce optimistic concurrency.
* **id**: string (ReadOnly): Resource Id.
* **location**: string (Required): Resource location.
* **name**: string (ReadOnly): Resource name.
* **properties**: [CommitmentAssociationProperties](#commitmentassociationproperties): The properties of the commitment association resource.
* **tags**: [Tags](#tags): User-defined tags for the resource.
* **type**: string (ReadOnly): Resource type.

## CommitmentAssociationProperties
### Properties
* **associatedResourceId**: string (ReadOnly): The ID of the resource this association points to, such as the ARM ID of an Azure ML web service.
* **commitmentPlanId**: string (ReadOnly): The ARM ID of the parent Azure ML commitment plan.
* **creationDate**: string (ReadOnly): The date at which this commitment association was created, in ISO 8601 format.

## CommitmentPlanAutoGenerated
### Properties
* **id**: string (Required): Specifies the Azure Resource Manager ID of the commitment plan associated with the web service.

## CommitmentPlanProperties
### Properties
* **chargeForOverage**: bool (ReadOnly): Indicates whether usage beyond the commitment plan's included quantities will be charged.
* **chargeForPlan**: bool (ReadOnly): Indicates whether the commitment plan will incur a charge.
* **creationDate**: string (ReadOnly): The date at which this commitment plan was created, in ISO 8601 format.
* **includedQuantities**: [CommitmentPlanPropertiesIncludedQuantities](#commitmentplanpropertiesincludedquantities) (ReadOnly): The included resource quantities this plan gives you.
* **maxAssociationLimit**: int (ReadOnly): The maximum number of commitment associations that can be children of this commitment plan.
* **maxCapacityLimit**: int (ReadOnly): The maximum scale-out capacity for this commitment plan.
* **minCapacityLimit**: int (ReadOnly): The minimum scale-out capacity for this commitment plan.
* **planMeter**: string (ReadOnly): The Azure meter which will be used to charge for this commitment plan.
* **refillFrequencyInDays**: int (ReadOnly): The frequency at which this commitment plan's included quantities are refilled.
* **suspendPlanOnOverage**: bool (ReadOnly): Indicates whether this commitment plan will be moved into a suspended state if usage goes beyond the commitment plan's included quantities.

## CommitmentPlanPropertiesIncludedQuantities
### Properties
### Additional Properties
* **Additional Properties Type**: [PlanQuantity](#planquantity)

## DiagnosticsConfiguration
### Properties
* **expiry**: string: Specifies the date and time when the logging will cease. If null, diagnostic collection is not time limited.
* **level**: 'All' | 'Error' | 'None' | string (Required): Specifies the verbosity of the diagnostic output. Valid values are: None - disables tracing; Error - collects only error (stderr) traces; All - collects all traces (stdout and stderr).

## ExampleRequest
### Properties
* **globalParameters**: [ExampleRequestGlobalParameters](#examplerequestglobalparameters): Sample input data for the web service's global parameters
* **inputs**: [ExampleRequestInputs](#examplerequestinputs): Sample input data for the web service's input(s) given as an input name to sample input values matrix map.

## ExampleRequestGlobalParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ExampleRequestInputs
### Properties
### Additional Properties
* **Additional Properties Type**: any[][]

## GraphEdge
### Properties
* **sourceNodeId**: string: The source graph node's identifier.
* **sourcePortId**: string: The identifier of the source node's port that the edge connects from.
* **targetNodeId**: string: The destination graph node's identifier.
* **targetPortId**: string: The identifier of the destination node's port that the edge connects into.

## GraphNode
### Properties
* **assetId**: string: The id of the asset represented by this node.
* **inputId**: string: The id of the input element represented by this node.
* **outputId**: string: The id of the output element represented by this node.
* **parameters**: [GraphNodeParameters](#graphnodeparameters): If applicable, parameters of the node. Global graph parameters map into these, with values set at runtime.

## GraphNodeParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GraphPackage
### Properties
* **edges**: [GraphEdge](#graphedge)[]: The list of edges making up the graph.
* **graphParameters**: [GraphPackageGraphParameters](#graphpackagegraphparameters): The collection of global parameters for the graph, given as a global parameter name to GraphParameter map. Each parameter here has a 1:1 match with the global parameters values map declared at the WebServiceProperties level.
* **nodes**: [GraphPackageNodes](#graphpackagenodes): The set of nodes making up the graph, provided as a nodeId to GraphNode map

## GraphPackageGraphParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [GraphParameter](#graphparameter)

## GraphPackageNodes
### Properties
### Additional Properties
* **Additional Properties Type**: [GraphNode](#graphnode)

## GraphParameter
### Properties
* **description**: string: Description of this graph parameter.
* **links**: [GraphParameterLink](#graphparameterlink)[] (Required): Association links for this parameter to nodes in the graph.
* **type**: 'Boolean' | 'ColumnPicker' | 'Credential' | 'DataGatewayName' | 'Double' | 'Enumerated' | 'Float' | 'Int' | 'Mode' | 'ParameterRange' | 'Script' | 'String' | string (Required): Graph parameter's type.

## GraphParameterLink
### Properties
* **nodeId**: string (Required): The graph node's identifier
* **parameterKey**: string (Required): The identifier of the node parameter that the global parameter maps to.

## InputPort
### Properties
* **type**: 'Dataset' | string: Port data type.

## MachineLearningWorkspace
### Properties
* **id**: string (Required): Specifies the workspace ID of the machine learning workspace associated with the web service

## ModeValueInfo
### Properties
* **interfaceString**: string: The interface string name for the nested parameter.
* **parameters**: [ModuleAssetParameter](#moduleassetparameter)[]: The definition of the parameter.

## ModuleAssetParameter
### Properties
* **modeValuesInfo**: [ModuleAssetParameterModeValuesInfo](#moduleassetparametermodevaluesinfo): Definitions for nested interface parameters if this is a complex module parameter.
* **name**: string: Parameter name.
* **parameterType**: string: Parameter type.

## ModuleAssetParameterModeValuesInfo
### Properties
### Additional Properties
* **Additional Properties Type**: [ModeValueInfo](#modevalueinfo)

## MoveCommitmentAssociationRequest
### Properties
* **destinationPlanId**: string: The ARM ID of the commitment plan to re-parent the commitment association to.

## OutputPort
### Properties
* **type**: 'Dataset' | string: Port data type.

## PlanQuantity
### Properties
* **allowance**: int (ReadOnly): The quantity added to the commitment plan at an interval specified by its allowance frequency.
* **amount**: int (ReadOnly): The quantity available to the plan the last time usage was calculated.
* **includedQuantityMeter**: string (ReadOnly): The Azure meter for usage against included quantities.
* **overageMeter**: string (ReadOnly): The Azure meter for usage which exceeds included quantities.

## RealtimeConfiguration
### Properties
* **maxConcurrentCalls**: int {minValue: 4, maxValue: 200}: Specifies the maximum concurrent calls that can be made to the web service. Minimum value: 4, Maximum value: 200.

## ResourceSku
### Properties
* **capacity**: int: The scale-out capacity of the resource. 1 is 1x, 2 is 2x, etc. This impacts the quantities and cost of any commitment plan resource.
* **name**: string: The SKU name. Along with tier, uniquely identifies the SKU.
* **tier**: string: The SKU tier. Along with name, uniquely identifies the SKU.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceInputOutputSpecification
### Properties
* **description**: string: The description of the Swagger schema.
* **properties**: [ServiceInputOutputSpecificationProperties](#serviceinputoutputspecificationproperties) (Required): Specifies a collection that contains the column schema for each input or output of the web service. For more information, see the Swagger specification.
* **title**: string: The title of your Swagger schema.
* **type**: string (Required): The type of the entity described in swagger. Always 'object'.

## ServiceInputOutputSpecificationProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [TableSpecification](#tablespecification)

## StorageAccount
### Properties
* **key**: string: Specifies the key used to access the storage account.
* **name**: string: Specifies the name of the storage account.

## TableSpecification
### Properties
* **description**: string: Swagger schema description.
* **format**: string: The format, if 'type' is not 'object'
* **properties**: [TableSpecificationProperties](#tablespecificationproperties): The set of columns within the data table.
* **title**: string: Swagger schema title.
* **type**: string (Required): The type of the entity described in swagger.

## TableSpecificationProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ColumnSpecification](#columnspecification)

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebServiceKeys
### Properties
* **primary**: string: The primary access key.
* **secondary**: string: The secondary access key.

## WebServiceProperties
* **Discriminator**: packageType

### Base Properties
* **assets**: [WebServicePropertiesAssets](#webservicepropertiesassets): Contains user defined properties describing web service assets. Properties are expressed as Key/Value pairs.
* **commitmentPlan**: [CommitmentPlanAutoGenerated](#commitmentplanautogenerated): Contains the commitment plan associated with this web service. Set at creation time. Once set, this value cannot be changed. Note: The commitment plan is not returned from calls to GET operations.
* **createdOn**: string (ReadOnly): Read Only: The date and time when the web service was created.
* **description**: string: The description of the web service.
* **diagnostics**: [DiagnosticsConfiguration](#diagnosticsconfiguration): Settings controlling the diagnostics traces collection for the web service.
* **exampleRequest**: [ExampleRequest](#examplerequest): Defines sample input data for one or more of the service's inputs.
* **exposeSampleData**: bool: When set to true, sample data is included in the web service's swagger definition. The default value is true.
* **input**: [ServiceInputOutputSpecification](#serviceinputoutputspecification): Contains the Swagger 2.0 schema describing one or more of the web service's inputs. For more information, see the Swagger specification.
* **keys**: [WebServiceKeys](#webservicekeys): Contains the web service provisioning keys. If you do not specify provisioning keys, the Azure Machine Learning system generates them for you. Note: The keys are not returned from calls to GET operations.
* **machineLearningWorkspace**: [MachineLearningWorkspace](#machinelearningworkspace): Specifies the Machine Learning workspace containing the experiment that is source for the web service.
* **modifiedOn**: string (ReadOnly): Read Only: The date and time when the web service was last modified.
* **output**: [ServiceInputOutputSpecification](#serviceinputoutputspecification): Contains the Swagger 2.0 schema describing one or more of the web service's outputs. For more information, see the Swagger specification.
* **parameters**: [WebServicePropertiesParameters](#webservicepropertiesparameters): The set of global parameters values defined for the web service, given as a global parameter name to default value map. If no default value is specified, the parameter is considered to be required.
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' | string (ReadOnly): Read Only: The provision state of the web service. Valid values are Unknown, Provisioning, Succeeded, and Failed.
* **readOnly**: bool: When set to true, indicates that the web service is read-only and can no longer be updated or patched, only removed. Default, is false. Note: Once set to true, you cannot change its value.
* **realtimeConfiguration**: [RealtimeConfiguration](#realtimeconfiguration): Contains the configuration settings for the web service endpoint.
* **storageAccount**: [StorageAccount](#storageaccount): Specifies the storage account that Azure Machine Learning uses to store information about the web service. Only the name of the storage account is returned from calls to GET operations. When updating the storage account information, you must ensure that all necessary assets are available in the new storage account or calls to your web service will fail.
* **swaggerLocation**: string (ReadOnly): Read Only: Contains the URI of the swagger spec associated with this web service.
* **title**: string: The title of the web service.

### WebServicePropertiesForGraph
#### Properties
* **package**: [GraphPackage](#graphpackage): The definition of the graph package making up this web service.
* **packageType**: 'Graph' (Required): Specifies the package type. Valid values are Graph (Specifies a web service published through the Machine Learning Studio) and Code (Specifies a web service published using code such as Python). Note: Code is not supported at this time.


## WebServicePropertiesAssets
### Properties
### Additional Properties
* **Additional Properties Type**: [AssetItem](#assetitem)

## WebServicePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

