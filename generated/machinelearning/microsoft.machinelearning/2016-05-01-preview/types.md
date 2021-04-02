# Microsoft.MachineLearning @ 2016-05-01-preview

## Resource Microsoft.MachineLearning/commitmentPlans@2016-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: An entity tag used to enforce optimistic concurrency.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CommitmentPlanProperties](#commitmentplanproperties) (ReadOnly): Properties of an Azure ML commitment plan.
* **sku**: [ResourceSku](#resourcesku): The SKU of a resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.MachineLearning/commitmentPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearning/webServices@2016-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebServiceProperties](#webserviceproperties) (Required): The set of properties specific to the Azure ML web service resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearning/webServices' (ReadOnly, DeployTimeConstant): The resource type

## CommitmentPlanProperties
### Properties
* **chargeForOverage**: bool (ReadOnly): Indicates whether usage beyond the commitment plan's included quantities will be charged.
* **chargeForPlan**: bool (ReadOnly): Indicates whether the commitment plan will incur a charge.
* **creationDate**: string (ReadOnly): The date at which this commitment plan was created, in ISO 8601 format.
* **includedQuantities**: [Dictionary<string,PlanQuantity>](#dictionarystringplanquantity) (ReadOnly): The included resource quantities this plan gives you.
* **maxAssociationLimit**: int (ReadOnly): The maximum number of commitment associations that can be children of this commitment plan.
* **maxCapacityLimit**: int (ReadOnly): The maximum scale-out capacity for this commitment plan.
* **minCapacityLimit**: int (ReadOnly): The minimum scale-out capacity for this commitment plan.
* **planMeter**: string (ReadOnly): The Azure meter which will be used to charge for this commitment plan.
* **refillFrequencyInDays**: int (ReadOnly): The frequency at which this commitment plan's included quantities are refilled.
* **suspendPlanOnOverage**: bool (ReadOnly): Indicates whether this commitment plan will be moved into a suspended state if usage goes beyond the commitment plan's included quantities.

## Dictionary<string,PlanQuantity>
### Properties
### Additional Properties
* **Additional Properties Type**: [PlanQuantity](#planquantity)

## PlanQuantity
### Properties
* **allowance**: int (ReadOnly): The quantity added to the commitment plan at an interval specified by its allowance frequency.
* **amount**: int (ReadOnly): The quantity available to the plan the last time usage was calculated.
* **includedQuantityMeter**: string (ReadOnly): The Azure meter for usage against included quantities.
* **overageMeter**: string (ReadOnly): The Azure meter for usage which exceeds included quantities.

## ResourceSku
### Properties
* **capacity**: int: The scale-out capacity of the resource. 1 is 1x, 2 is 2x, etc. This impacts the quantities and cost of any commitment plan resource.
* **name**: string: The SKU name. Along with tier, uniquely identifies the SKU.
* **tier**: string: The SKU tier. Along with name, uniquely identifies the SKU.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebServiceProperties
* **Discriminator**: packageType
### Base Properties
* **assets**: [Dictionary<string,AssetItem>](#dictionarystringassetitem): Contains user defined properties describing web service assets. Properties are expressed as Key/Value pairs.
* **commitmentPlan**: [CommitmentPlan](#commitmentplan): Information about the machine learning commitment plan associated with the web service.
* **createdOn**: string (ReadOnly): Read Only: The date and time when the web service was created.
* **description**: string: The description of the web service.
* **diagnostics**: [DiagnosticsConfiguration](#diagnosticsconfiguration): Diagnostics settings for an Azure ML web service.
* **exampleRequest**: [ExampleRequest](#examplerequest): Sample input data for the service's input(s).
* **exposeSampleData**: bool: When set to true, sample data is included in the web service's swagger definition. The default value is true.
* **input**: [ServiceInputOutputSpecification](#serviceinputoutputspecification): The swagger 2.0 schema describing the service's inputs or outputs. See Swagger specification: http://swagger.io/specification/
* **keys**: [WebServiceKeys](#webservicekeys): Access keys for the web service calls.
* **machineLearningWorkspace**: [MachineLearningWorkspace](#machinelearningworkspace): Information about the machine learning workspace containing the experiment that is source for the web service.
* **modifiedOn**: string (ReadOnly): Read Only: The date and time when the web service was last modified.
* **output**: [ServiceInputOutputSpecification](#serviceinputoutputspecification): The swagger 2.0 schema describing the service's inputs or outputs. See Swagger specification: http://swagger.io/specification/
* **parameters**: [Dictionary<string,String>](#dictionarystringstring): The set of global parameters values defined for the web service, given as a global parameter name to default value map. If no default value is specified, the parameter is considered to be required.
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' (ReadOnly): Read Only: The provision state of the web service. Valid values are Unknown, Provisioning, Succeeded, and Failed. Possible values include: 'Unknown', 'Provisioning', 'Succeeded', 'Failed'
* **readOnly**: bool: When set to true, indicates that the web service is read-only and can no longer be updated or patched, only removed. Default, is false. Note: Once set to true, you cannot change its value.
* **realtimeConfiguration**: [RealtimeConfiguration](#realtimeconfiguration): Holds the available configuration options for an Azure ML web service endpoint.
* **storageAccount**: [StorageAccount](#storageaccount): Access information for a storage account.
* **swaggerLocation**: string (ReadOnly): Read Only: Contains the URI of the swagger spec associated with this web service.
* **title**: string: The title of the web service.
### Graph
#### Properties
* **package**: [GraphPackage](#graphpackage): Defines the graph of modules making up the machine learning solution.
* **packageType**: 'Graph' (Required): Properties specific to a Graph based web service.


## Dictionary<string,AssetItem>
### Properties
### Additional Properties
* **Additional Properties Type**: [AssetItem](#assetitem)

## AssetItem
### Properties
* **id**: string: Asset's Id.
* **inputPorts**: [Dictionary<string,InputPort>](#dictionarystringinputport): Information about the asset's input ports.
* **locationInfo**: [AssetLocation](#assetlocation) (Required): Describes the access location for a web service asset.
* **metadata**: [Dictionary<string,String>](#dictionarystringstring): If the asset is a custom module, this holds the module's metadata.
* **name**: string (Required): Asset's friendly name.
* **outputPorts**: [Dictionary<string,OutputPort>](#dictionarystringoutputport): Information about the asset's output ports.
* **parameters**: [ModuleAssetParameter](#moduleassetparameter)[]: If the asset is a custom module, this holds the module's parameters.
* **type**: 'Module' | 'Resource' (Required): Asset's type. Possible values include: 'Module', 'Resource'

## Dictionary<string,InputPort>
### Properties
### Additional Properties
* **Additional Properties Type**: [InputPort](#inputport)

## InputPort
### Properties
* **type**: 'Dataset': Port data type. Possible values include: 'Dataset'

## AssetLocation
### Properties
* **credentials**: string: Access credentials for the asset, if applicable (e.g. asset specified by storage account connection string + blob URI)
* **uri**: string (Required): The URI where the asset is accessible from, (e.g. aml://abc for system assets or https://xyz for user assets

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,OutputPort>
### Properties
### Additional Properties
* **Additional Properties Type**: [OutputPort](#outputport)

## OutputPort
### Properties
* **type**: 'Dataset': Port data type. Possible values include: 'Dataset'

## ModuleAssetParameter
### Properties
* **modeValuesInfo**: [Dictionary<string,ModeValueInfo>](#dictionarystringmodevalueinfo): Definitions for nested interface parameters if this is a complex module parameter.
* **name**: string: Parameter name.
* **parameterType**: string: Parameter type.

## Dictionary<string,ModeValueInfo>
### Properties
### Additional Properties
* **Additional Properties Type**: [ModeValueInfo](#modevalueinfo)

## ModeValueInfo
### Properties
* **interfaceString**: string: The interface string name for the nested parameter.
* **parameters**: [ModuleAssetParameter](#moduleassetparameter)[]: The definition of the parameter.

## CommitmentPlan
### Properties
* **id**: string (Required): Specifies the Azure Resource Manager ID of the commitment plan associated with the web service.

## DiagnosticsConfiguration
### Properties
* **expiry**: string: Specifies the date and time when the logging will cease. If null, diagnostic collection is not time limited.
* **level**: 'All' | 'Error' | 'None' (Required): Specifies the verbosity of the diagnostic output. Valid values are: None - disables tracing; Error - collects only error (stderr) traces; All - collects all traces (stdout and stderr). Possible values include: 'None', 'Error', 'All'

## ExampleRequest
### Properties
* **globalParameters**: [Dictionary<string,Object>](#dictionarystringobject): Sample input data for the web service's global parameters
* **inputs**: [Dictionary<string,IList<IList<Object>>>](#dictionarystringilistilistobject): Sample input data for the web service's input(s) given as an input name to sample input values matrix map.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,IList<IList<Object>>>
### Properties
### Additional Properties
* **Additional Properties Type**: any[][]

## ServiceInputOutputSpecification
### Properties
* **description**: string: The description of the Swagger schema.
* **properties**: [Dictionary<string,TableSpecification>](#dictionarystringtablespecification) (Required): Specifies a collection that contains the column schema for each input or output of the web service. For more information, see the Swagger specification.
* **title**: string: The title of your Swagger schema.
* **type**: string (Required): The type of the entity described in swagger. Always 'object'.

## Dictionary<string,TableSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [TableSpecification](#tablespecification)

## TableSpecification
### Properties
* **description**: string: Swagger schema description.
* **format**: string: The format, if 'type' is not 'object'
* **properties**: [Dictionary<string,ColumnSpecification>](#dictionarystringcolumnspecification): The set of columns within the data table.
* **title**: string: Swagger schema title.
* **type**: string (Required): The type of the entity described in swagger.

## Dictionary<string,ColumnSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [ColumnSpecification](#columnspecification)

## ColumnSpecification
### Properties
* **enum**: any[]: If the data type is categorical, this provides the list of accepted categories.
* **format**: 'Byte' | 'Char' | 'Complex128' | 'Complex64' | 'Date-time' | 'Date-timeOffset' | 'Double' | 'Duration' | 'Float' | 'Int16' | 'Int32' | 'Int64' | 'Int8' | 'Uint16' | 'Uint32' | 'Uint64' | 'Uint8': Additional format information for the data type. Possible values include: 'Byte', 'Char', 'Complex64', 'Complex128', 'Date-time', 'Date-timeOffset', 'Double', 'Duration', 'Float', 'Int8', 'Int16', 'Int32', 'Int64', 'Uint8', 'Uint16', 'Uint32', 'Uint64'
* **type**: 'Boolean' | 'Integer' | 'Number' | 'String' (Required): Data type of the column. Possible values include: 'Boolean', 'Integer', 'Number', 'String'
* **x-ms-isnullable**: bool: Flag indicating if the type supports null values or not.
* **x-ms-isordered**: bool: Flag indicating whether the categories are treated as an ordered set or not, if this is a categorical column.

## WebServiceKeys
### Properties
* **primary**: string: The primary access key.
* **secondary**: string: The secondary access key.

## MachineLearningWorkspace
### Properties
* **id**: string (Required): Specifies the workspace ID of the machine learning workspace associated with the web service

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RealtimeConfiguration
### Properties
* **maxConcurrentCalls**: int: Specifies the maximum concurrent calls that can be made to the web service. Minimum value: 4, Maximum value: 200.

## StorageAccount
### Properties
* **key**: string: Specifies the key used to access the storage account.
* **name**: string: Specifies the name of the storage account.

## Graph
### Properties
* **package**: [GraphPackage](#graphpackage): Defines the graph of modules making up the machine learning solution.
* **packageType**: 'Graph' (Required): Properties specific to a Graph based web service.

## GraphPackage
### Properties
* **edges**: [GraphEdge](#graphedge)[]: The list of edges making up the graph.
* **graphParameters**: [Dictionary<string,GraphParameter>](#dictionarystringgraphparameter): The collection of global parameters for the graph, given as a global parameter name to GraphParameter map. Each parameter here has a 1:1 match with the global parameters values map declared at the WebServiceProperties level.
* **nodes**: [Dictionary<string,GraphNode>](#dictionarystringgraphnode): The set of nodes making up the graph, provided as a nodeId to GraphNode map

## GraphEdge
### Properties
* **sourceNodeId**: string: The source graph node's identifier.
* **sourcePortId**: string: The identifier of the source node's port that the edge connects from.
* **targetNodeId**: string: The destination graph node's identifier.
* **targetPortId**: string: The identifier of the destination node's port that the edge connects into.

## Dictionary<string,GraphParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: [GraphParameter](#graphparameter)

## GraphParameter
### Properties
* **description**: string: Description of this graph parameter.
* **links**: [GraphParameterLink](#graphparameterlink)[] (Required): Association links for this parameter to nodes in the graph.
* **type**: 'Boolean' | 'ColumnPicker' | 'Credential' | 'DataGatewayName' | 'Double' | 'Enumerated' | 'Float' | 'Int' | 'Mode' | 'ParameterRange' | 'Script' | 'String' (Required): Graph parameter's type. Possible values include: 'String', 'Int', 'Float', 'Enumerated', 'Script', 'Mode', 'Credential', 'Boolean', 'Double', 'ColumnPicker', 'ParameterRange', 'DataGatewayName'

## GraphParameterLink
### Properties
* **nodeId**: string (Required): The graph node's identifier
* **parameterKey**: string (Required): The identifier of the node parameter that the global parameter maps to.

## Dictionary<string,GraphNode>
### Properties
### Additional Properties
* **Additional Properties Type**: [GraphNode](#graphnode)

## GraphNode
### Properties
* **assetId**: string: The id of the asset represented by this node.
* **inputId**: string: The id of the input element represented by this node.
* **outputId**: string: The id of the output element represented by this node.
* **parameters**: [Dictionary<string,String>](#dictionarystringstring): If applicable, parameters of the node. Global graph parameters map into these, with values set at runtime.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

