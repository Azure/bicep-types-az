# Microsoft.MachineLearning @ 2017-01-01

## Resource Microsoft.MachineLearning/webServices@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebServiceProperties](#webserviceproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.MachineLearning/webServices' (ReadOnly, DeployTimeConstant)

## WebServiceProperties
* **Discriminator**: packageType

### Base Properties
* **assets**: [WebServicePropertiesAssets](#webservicepropertiesassets)
* **commitmentPlan**: [CommitmentPlan](#commitmentplan)
* **createdOn**: string (ReadOnly)
* **description**: string
* **diagnostics**: [DiagnosticsConfiguration](#diagnosticsconfiguration)
* **exampleRequest**: [ExampleRequest](#examplerequest)
* **exposeSampleData**: bool
* **input**: [ServiceInputOutputSpecification](#serviceinputoutputspecification)
* **keys**: [WebServiceKeys](#webservicekeys)
* **machineLearningWorkspace**: [MachineLearningWorkspace](#machinelearningworkspace)
* **modifiedOn**: string (ReadOnly)
* **output**: [ServiceInputOutputSpecification](#serviceinputoutputspecification)
* **parameters**: [WebServicePropertiesParameters](#webservicepropertiesparameters)
* **payloadsInBlobStorage**: bool
* **payloadsLocation**: [BlobLocation](#bloblocation)
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' (ReadOnly)
* **readOnly**: bool
* **realtimeConfiguration**: [RealtimeConfiguration](#realtimeconfiguration)
* **storageAccount**: [StorageAccount](#storageaccount)
* **swaggerLocation**: string (ReadOnly)
* **title**: string
### WebServicePropertiesForGraph
#### Properties
* **package**: [GraphPackage](#graphpackage)
* **packageType**: 'Graph' (Required)


## WebServicePropertiesAssets
### Properties
### Additional Properties
* **Additional Properties Type**: [AssetItem](#assetitem)

## AssetItem
### Properties
* **id**: string
* **inputPorts**: [AssetItemInputPorts](#assetiteminputports)
* **locationInfo**: [BlobLocation](#bloblocation) (Required)
* **metadata**: [AssetItemMetadata](#assetitemmetadata)
* **name**: string (Required)
* **outputPorts**: [AssetItemOutputPorts](#assetitemoutputports)
* **parameters**: [ModuleAssetParameter](#moduleassetparameter)[]
* **type**: 'Module' | 'Resource' (Required)

## AssetItemInputPorts
### Properties
### Additional Properties
* **Additional Properties Type**: [InputPort](#inputport)

## InputPort
### Properties
* **type**: 'Dataset'

## BlobLocation
### Properties
* **credentials**: string
* **uri**: string (Required)

## AssetItemMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssetItemOutputPorts
### Properties
### Additional Properties
* **Additional Properties Type**: [OutputPort](#outputport)

## OutputPort
### Properties
* **type**: 'Dataset'

## ModuleAssetParameter
### Properties
* **modeValuesInfo**: [ModuleAssetParameterModeValuesInfo](#moduleassetparametermodevaluesinfo)
* **name**: string
* **parameterType**: string

## ModuleAssetParameterModeValuesInfo
### Properties
### Additional Properties
* **Additional Properties Type**: [ModeValueInfo](#modevalueinfo)

## ModeValueInfo
### Properties
* **interfaceString**: string
* **parameters**: [ModuleAssetParameter](#moduleassetparameter)[]

## CommitmentPlan
### Properties
* **id**: string (Required)

## DiagnosticsConfiguration
### Properties
* **expiry**: string
* **level**: 'All' | 'Error' | 'None' (Required)

## ExampleRequest
### Properties
* **globalParameters**: [ExampleRequestGlobalParameters](#examplerequestglobalparameters)
* **inputs**: [ExampleRequestInputs](#examplerequestinputs)

## ExampleRequestGlobalParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ExampleRequestInputs
### Properties
### Additional Properties
* **Additional Properties Type**: any[][]

## ServiceInputOutputSpecification
### Properties
* **description**: string
* **properties**: [ServiceInputOutputSpecificationProperties](#serviceinputoutputspecificationproperties) (Required)
* **title**: string
* **type**: string (Required)

## ServiceInputOutputSpecificationProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [TableSpecification](#tablespecification)

## TableSpecification
### Properties
* **description**: string
* **format**: string
* **properties**: [TableSpecificationProperties](#tablespecificationproperties)
* **title**: string
* **type**: string (Required)

## TableSpecificationProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ColumnSpecification](#columnspecification)

## ColumnSpecification
### Properties
* **enum**: any[]
* **format**: 'Byte' | 'Char' | 'Complex128' | 'Complex64' | 'Date-time' | 'Date-timeOffset' | 'Double' | 'Duration' | 'Float' | 'Int16' | 'Int32' | 'Int64' | 'Int8' | 'Uint16' | 'Uint32' | 'Uint64' | 'Uint8'
* **type**: 'Boolean' | 'Integer' | 'Number' | 'String' (Required)
* **x-ms-isnullable**: bool
* **x-ms-isordered**: bool

## WebServiceKeys
### Properties
* **primary**: string
* **secondary**: string

## MachineLearningWorkspace
### Properties
* **id**: string (Required)

## WebServicePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [WebServiceParameter](#webserviceparameter)

## WebServiceParameter
### Properties
* **certificateThumbprint**: string
* **value**: any

## RealtimeConfiguration
### Properties
* **maxConcurrentCalls**: int

## StorageAccount
### Properties
* **key**: string
* **name**: string

## WebServicePropertiesForGraph
### Properties
* **package**: [GraphPackage](#graphpackage)
* **packageType**: 'Graph' (Required)

## GraphPackage
### Properties
* **edges**: [GraphEdge](#graphedge)[]
* **graphParameters**: [GraphPackageGraphParameters](#graphpackagegraphparameters)
* **nodes**: [GraphPackageNodes](#graphpackagenodes)

## GraphEdge
### Properties
* **sourceNodeId**: string
* **sourcePortId**: string
* **targetNodeId**: string
* **targetPortId**: string

## GraphPackageGraphParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [GraphParameter](#graphparameter)

## GraphParameter
### Properties
* **description**: string
* **links**: [GraphParameterLink](#graphparameterlink)[] (Required)
* **type**: 'Boolean' | 'ColumnPicker' | 'Credential' | 'DataGatewayName' | 'Double' | 'Enumerated' | 'Float' | 'Int' | 'Mode' | 'ParameterRange' | 'Script' | 'String' (Required)

## GraphParameterLink
### Properties
* **nodeId**: string (Required)
* **parameterKey**: string (Required)

## GraphPackageNodes
### Properties
### Additional Properties
* **Additional Properties Type**: [GraphNode](#graphnode)

## GraphNode
### Properties
* **assetId**: string
* **inputId**: string
* **outputId**: string
* **parameters**: [GraphNodeParameters](#graphnodeparameters)

## GraphNodeParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [WebServiceParameter](#webserviceparameter)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

