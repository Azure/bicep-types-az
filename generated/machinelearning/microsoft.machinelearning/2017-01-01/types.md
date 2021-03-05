# Microsoft.MachineLearning @ 2017-01-01

## Resource Microsoft.MachineLearning/webServices@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebServiceProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.MachineLearning/webServices' (ReadOnly, DeployTimeConstant)

## WebServiceProperties
* **Discriminator**: packageType

### Base Properties
* **assets**: WebServicePropertiesAssets
* **commitmentPlan**: CommitmentPlan
* **createdOn**: string (ReadOnly)
* **description**: string
* **diagnostics**: DiagnosticsConfiguration
* **exampleRequest**: ExampleRequest
* **exposeSampleData**: bool
* **input**: ServiceInputOutputSpecification
* **keys**: WebServiceKeys
* **machineLearningWorkspace**: MachineLearningWorkspace
* **modifiedOn**: string (ReadOnly)
* **output**: ServiceInputOutputSpecification
* **parameters**: WebServicePropertiesParameters
* **payloadsInBlobStorage**: bool
* **payloadsLocation**: BlobLocation
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' (ReadOnly)
* **readOnly**: bool
* **realtimeConfiguration**: RealtimeConfiguration
* **storageAccount**: StorageAccount
* **swaggerLocation**: string (ReadOnly)
* **title**: string
### WebServicePropertiesForGraph
#### Properties
* **package**: GraphPackage
* **packageType**: 'Graph' (Required)


## WebServicePropertiesAssets
### Properties
### Additional Properties
* **Additional Properties Type**: AssetItem

## AssetItem
### Properties
* **id**: string
* **inputPorts**: AssetItemInputPorts
* **locationInfo**: BlobLocation (Required)
* **metadata**: AssetItemMetadata
* **name**: string (Required)
* **outputPorts**: AssetItemOutputPorts
* **parameters**: ModuleAssetParameter[]
* **type**: 'Module' | 'Resource' (Required)

## AssetItemInputPorts
### Properties
### Additional Properties
* **Additional Properties Type**: InputPort

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
* **Additional Properties Type**: OutputPort

## OutputPort
### Properties
* **type**: 'Dataset'

## ModuleAssetParameter
### Properties
* **modeValuesInfo**: ModuleAssetParameterModeValuesInfo
* **name**: string
* **parameterType**: string

## ModuleAssetParameterModeValuesInfo
### Properties
### Additional Properties
* **Additional Properties Type**: ModeValueInfo

## ModeValueInfo
### Properties
* **interfaceString**: string
* **parameters**: ModuleAssetParameter[]

## CommitmentPlan
### Properties
* **id**: string (Required)

## DiagnosticsConfiguration
### Properties
* **expiry**: string
* **level**: 'All' | 'Error' | 'None' (Required)

## ExampleRequest
### Properties
* **globalParameters**: ExampleRequestGlobalParameters
* **inputs**: ExampleRequestInputs

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
* **properties**: ServiceInputOutputSpecificationProperties (Required)
* **title**: string
* **type**: string (Required)

## ServiceInputOutputSpecificationProperties
### Properties
### Additional Properties
* **Additional Properties Type**: TableSpecification

## TableSpecification
### Properties
* **description**: string
* **format**: string
* **properties**: TableSpecificationProperties
* **title**: string
* **type**: string (Required)

## TableSpecificationProperties
### Properties
### Additional Properties
* **Additional Properties Type**: ColumnSpecification

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
* **Additional Properties Type**: WebServiceParameter

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
* **package**: GraphPackage
* **packageType**: 'Graph' (Required)

## GraphPackage
### Properties
* **edges**: GraphEdge[]
* **graphParameters**: GraphPackageGraphParameters
* **nodes**: GraphPackageNodes

## GraphEdge
### Properties
* **sourceNodeId**: string
* **sourcePortId**: string
* **targetNodeId**: string
* **targetPortId**: string

## GraphPackageGraphParameters
### Properties
### Additional Properties
* **Additional Properties Type**: GraphParameter

## GraphParameter
### Properties
* **description**: string
* **links**: GraphParameterLink[] (Required)
* **type**: 'Boolean' | 'ColumnPicker' | 'Credential' | 'DataGatewayName' | 'Double' | 'Enumerated' | 'Float' | 'Int' | 'Mode' | 'ParameterRange' | 'Script' | 'String' (Required)

## GraphParameterLink
### Properties
* **nodeId**: string (Required)
* **parameterKey**: string (Required)

## GraphPackageNodes
### Properties
### Additional Properties
* **Additional Properties Type**: GraphNode

## GraphNode
### Properties
* **assetId**: string
* **inputId**: string
* **outputId**: string
* **parameters**: GraphNodeParameters

## GraphNodeParameters
### Properties
### Additional Properties
* **Additional Properties Type**: WebServiceParameter

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

