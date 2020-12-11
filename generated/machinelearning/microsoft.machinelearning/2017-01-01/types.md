# Microsoft.MachineLearning @ 2017-01-01

## Resource Microsoft.MachineLearning/webServices@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebServiceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearning/webServices' (ReadOnly, DeployTimeConstant)

## WebServiceProperties
* **Discriminator**: packageType
### Base Properties
* **assets**: Dictionary<string,AssetItem>
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
* **parameters**: Dictionary<string,WebServiceParameter>
* **payloadsInBlobStorage**: bool
* **payloadsLocation**: BlobLocation
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' (ReadOnly)
* **readOnly**: bool
* **realtimeConfiguration**: RealtimeConfiguration
* **storageAccount**: StorageAccount
* **swaggerLocation**: string (ReadOnly)
* **title**: string
### Graph
#### Properties
* **package**: GraphPackage
* **packageType**: 'Graph' (Required)


## Dictionary<string,AssetItem>
### Additional Properties
* **Additional Properties Type**: AssetItem

## AssetItem
### Properties
* **id**: string
* **inputPorts**: Dictionary<string,InputPort>
* **locationInfo**: BlobLocation (Required)
* **metadata**: Dictionary<string,String>
* **name**: string (Required)
* **outputPorts**: Dictionary<string,OutputPort>
* **parameters**: ModuleAssetParameter[]
* **type**: 'Module' | 'Resource' (Required)

## Dictionary<string,InputPort>
### Additional Properties
* **Additional Properties Type**: InputPort

## InputPort
### Properties
* **type**: 'Dataset'

## BlobLocation
### Properties
* **credentials**: string
* **uri**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,OutputPort>
### Additional Properties
* **Additional Properties Type**: OutputPort

## OutputPort
### Properties
* **type**: 'Dataset'

## ModuleAssetParameter
### Properties
* **modeValuesInfo**: Dictionary<string,ModeValueInfo>
* **name**: string
* **parameterType**: string

## Dictionary<string,ModeValueInfo>
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
* **globalParameters**: Dictionary<string,Object>
* **inputs**: Dictionary<string,IList<IList<Object>>>

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,IList<IList<Object>>>
### Additional Properties
* **Additional Properties Type**: any[][]

## ServiceInputOutputSpecification
### Properties
* **description**: string
* **properties**: Dictionary<string,TableSpecification> (Required)
* **title**: string
* **type**: string (Required)

## Dictionary<string,TableSpecification>
### Additional Properties
* **Additional Properties Type**: TableSpecification

## TableSpecification
### Properties
* **description**: string
* **format**: string
* **properties**: Dictionary<string,ColumnSpecification>
* **title**: string
* **type**: string (Required)

## Dictionary<string,ColumnSpecification>
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

## Dictionary<string,WebServiceParameter>
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

## Graph
### Properties
* **package**: GraphPackage
* **packageType**: 'Graph' (Required)

## GraphPackage
### Properties
* **edges**: GraphEdge[]
* **graphParameters**: Dictionary<string,GraphParameter>
* **nodes**: Dictionary<string,GraphNode>

## GraphEdge
### Properties
* **sourceNodeId**: string
* **sourcePortId**: string
* **targetNodeId**: string
* **targetPortId**: string

## Dictionary<string,GraphParameter>
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

## Dictionary<string,GraphNode>
### Additional Properties
* **Additional Properties Type**: GraphNode

## GraphNode
### Properties
* **assetId**: string
* **inputId**: string
* **outputId**: string
* **parameters**: Dictionary<string,WebServiceParameter>

## Dictionary<string,WebServiceParameter>
### Additional Properties
* **Additional Properties Type**: WebServiceParameter

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

