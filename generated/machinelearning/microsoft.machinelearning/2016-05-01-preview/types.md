# Microsoft.MachineLearning @ 2016-05-01-preview

## Resource Microsoft.MachineLearning/commitmentPlans@2016-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CommitmentPlanProperties](#commitmentplanproperties) (ReadOnly)
* **sku**: [ResourceSku](#resourcesku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MachineLearning/commitmentPlans' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearning/webServices@2016-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebServiceProperties](#webserviceproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MachineLearning/webServices' (ReadOnly, DeployTimeConstant)

## CommitmentPlanProperties
### Properties
* **chargeForOverage**: bool (ReadOnly)
* **chargeForPlan**: bool (ReadOnly)
* **creationDate**: string (ReadOnly)
* **includedQuantities**: [Dictionary<string,PlanQuantity>](#dictionarystringplanquantity) (ReadOnly)
* **maxAssociationLimit**: int (ReadOnly)
* **maxCapacityLimit**: int (ReadOnly)
* **minCapacityLimit**: int (ReadOnly)
* **planMeter**: string (ReadOnly)
* **refillFrequencyInDays**: int (ReadOnly)
* **suspendPlanOnOverage**: bool (ReadOnly)

## Dictionary<string,PlanQuantity>
### Properties
### Additional Properties
* **Additional Properties Type**: [PlanQuantity](#planquantity)

## PlanQuantity
### Properties
* **allowance**: int (ReadOnly)
* **amount**: int (ReadOnly)
* **includedQuantityMeter**: string (ReadOnly)
* **overageMeter**: string (ReadOnly)

## ResourceSku
### Properties
* **capacity**: int
* **name**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebServiceProperties
* **Discriminator**: packageType
### Base Properties
* **assets**: [Dictionary<string,AssetItem>](#dictionarystringassetitem)
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
* **parameters**: [Dictionary<string,String>](#dictionarystringstring)
* **provisioningState**: 'Failed' | 'Provisioning' | 'Succeeded' | 'Unknown' (ReadOnly)
* **readOnly**: bool
* **realtimeConfiguration**: [RealtimeConfiguration](#realtimeconfiguration)
* **storageAccount**: [StorageAccount](#storageaccount)
* **swaggerLocation**: string (ReadOnly)
* **title**: string
### Graph
#### Properties
* **package**: [GraphPackage](#graphpackage)
* **packageType**: 'Graph' (Required)


## Dictionary<string,AssetItem>
### Properties
### Additional Properties
* **Additional Properties Type**: [AssetItem](#assetitem)

## AssetItem
### Properties
* **id**: string
* **inputPorts**: [Dictionary<string,InputPort>](#dictionarystringinputport)
* **locationInfo**: [AssetLocation](#assetlocation) (Required)
* **metadata**: [Dictionary<string,String>](#dictionarystringstring)
* **name**: string (Required)
* **outputPorts**: [Dictionary<string,OutputPort>](#dictionarystringoutputport)
* **parameters**: [ModuleAssetParameter](#moduleassetparameter)[]
* **type**: 'Module' | 'Resource' (Required)

## Dictionary<string,InputPort>
### Properties
### Additional Properties
* **Additional Properties Type**: [InputPort](#inputport)

## InputPort
### Properties
* **type**: 'Dataset'

## AssetLocation
### Properties
* **credentials**: string
* **uri**: string (Required)

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
* **type**: 'Dataset'

## ModuleAssetParameter
### Properties
* **modeValuesInfo**: [Dictionary<string,ModeValueInfo>](#dictionarystringmodevalueinfo)
* **name**: string
* **parameterType**: string

## Dictionary<string,ModeValueInfo>
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
* **globalParameters**: [Dictionary<string,Object>](#dictionarystringobject)
* **inputs**: [Dictionary<string,IList<IList<Object>>>](#dictionarystringilistilistobject)

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
* **description**: string
* **properties**: [Dictionary<string,TableSpecification>](#dictionarystringtablespecification) (Required)
* **title**: string
* **type**: string (Required)

## Dictionary<string,TableSpecification>
### Properties
### Additional Properties
* **Additional Properties Type**: [TableSpecification](#tablespecification)

## TableSpecification
### Properties
* **description**: string
* **format**: string
* **properties**: [Dictionary<string,ColumnSpecification>](#dictionarystringcolumnspecification)
* **title**: string
* **type**: string (Required)

## Dictionary<string,ColumnSpecification>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RealtimeConfiguration
### Properties
* **maxConcurrentCalls**: int

## StorageAccount
### Properties
* **key**: string
* **name**: string

## Graph
### Properties
* **package**: [GraphPackage](#graphpackage)
* **packageType**: 'Graph' (Required)

## GraphPackage
### Properties
* **edges**: [GraphEdge](#graphedge)[]
* **graphParameters**: [Dictionary<string,GraphParameter>](#dictionarystringgraphparameter)
* **nodes**: [Dictionary<string,GraphNode>](#dictionarystringgraphnode)

## GraphEdge
### Properties
* **sourceNodeId**: string
* **sourcePortId**: string
* **targetNodeId**: string
* **targetPortId**: string

## Dictionary<string,GraphParameter>
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

## Dictionary<string,GraphNode>
### Properties
### Additional Properties
* **Additional Properties Type**: [GraphNode](#graphnode)

## GraphNode
### Properties
* **assetId**: string
* **inputId**: string
* **outputId**: string
* **parameters**: [Dictionary<string,String>](#dictionarystringstring)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

