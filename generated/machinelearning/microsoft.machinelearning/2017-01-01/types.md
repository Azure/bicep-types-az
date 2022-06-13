# Microsoft.MachineLearning @ 2017-01-01

## Resource Microsoft.MachineLearning/webServices@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebServiceProperties](#webserviceproperties) (Required): Contains the property payload that describes the web service.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearning/webServices' (ReadOnly, DeployTimeConstant): The resource type

## AssetItem
### Properties
* **id**: string: Asset's Id.
* **inputPorts**: [AssetItemInputPorts](#assetiteminputports): Information about the asset's input ports.
* **locationInfo**: [BlobLocation](#bloblocation) (Required): Access information for the asset.
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

## BlobLocation
### Properties
* **credentials**: string: Access credentials for the blob, if applicable (e.g. blob specified by storage account connection string + blob URI)
* **uri**: string (Required): The URI from which the blob is accessible from. For example, aml://abc for system assets or https://xyz for user assets or payload.

## ColumnSpecification
### Properties
* **enum**: any[]: If the data type is categorical, this provides the list of accepted categories.
* **format**: 'Byte' | 'Char' | 'Complex128' | 'Complex64' | 'Date-time' | 'Date-timeOffset' | 'Double' | 'Duration' | 'Float' | 'Int16' | 'Int32' | 'Int64' | 'Int8' | 'Uint16' | 'Uint32' | 'Uint64' | 'Uint8' | string: Additional format information for the data type.
* **type**: 'Boolean' | 'Integer' | 'Number' | 'String' | string (Required): Data type of the column.
* **x-ms-isnullable**: bool: Flag indicating if the type supports null values or not.
* **x-ms-isordered**: bool: Flag indicating whether the categories are treated as an ordered set or not, if this is a categorical column.

## CommitmentPlan
### Properties
* **id**: string (Required): Specifies the Azure Resource Manager ID of the commitment plan associated with the web service.

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
* **Additional Properties Type**: [WebServiceParameter](#webserviceparameter)

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

## OutputPort
### Properties
* **type**: 'Dataset' | string: Port data type.

## RealtimeConfiguration
### Properties
* **maxConcurrentCalls**: int: Specifies the maximum concurrent calls that can be made to the web service. Minimum value: 4, Maximum value: 200.

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

## WebServiceKeys
### Properties
* **primary**: string: The primary access key.
* **secondary**: string: The secondary access key.

## WebServiceParameter
### Properties
* **certificateThumbprint**: string: If the parameter value in 'value' field is encrypted, the thumbprint of the certificate should be put here.
* **value**: any: The parameter value

## WebServiceProperties
* **Discriminator**: packageType

### Base Properties
* **assets**: [WebServicePropertiesAssets](#webservicepropertiesassets): Contains user defined properties describing web service assets. Properties are expressed as Key/Value pairs.
* **commitmentPlan**: [CommitmentPlan](#commitmentplan): Contains the commitment plan associated with this web service. Set at creation time. Once set, this value cannot be changed. Note: The commitment plan is not returned from calls to GET operations.
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
* **payloadsInBlobStorage**: bool: When set to true, indicates that the payload size is larger than 3 MB. Otherwise false. If the payload size exceed 3 MB, the payload is stored in a blob and the PayloadsLocation parameter contains the URI of the blob. Otherwise, this will be set to false and Assets, Input, Output, Package, Parameters, ExampleRequest are inline. The Payload sizes is determined by adding the size of the Assets, Input, Output, Package, Parameters, and the ExampleRequest.
* **payloadsLocation**: [BlobLocation](#bloblocation): The URI of the payload blob. This parameter contains a value only if the payloadsInBlobStorage parameter is set to true. Otherwise is set to null.
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
* **Additional Properties Type**: [WebServiceParameter](#webserviceparameter)

