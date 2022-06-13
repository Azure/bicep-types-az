# Microsoft.CognitiveServices @ 2016-02-01-preview

## Resource Microsoft.CognitiveServices/accounts@2016-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Entity Tag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Academic' | 'Bing.Autosuggest' | 'Bing.Search' | 'Bing.Speech' | 'Bing.SpellCheck' | 'ComputerVision' | 'ContentModerator' | 'Emotion' | 'Face' | 'LUIS' | 'Recommendations' | 'SpeakerRecognition' | 'Speech' | 'SpeechTranslation' | 'TextAnalytics' | 'TextTranslation' | 'WebLM' | string (Required): Required. Indicates the type of cognitive service account.
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (Required): Must exist in the request. Must not be null.
* **sku**: [Sku](#sku) (Required): The SKU of the cognitive services account.
* **tags**: [CognitiveServicesAccountCreateParametersTags](#cognitiveservicesaccountcreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
* **type**: 'Microsoft.CognitiveServices/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.CognitiveServices/accounts@2016-02-01-preview)
* **Resource**: Microsoft.CognitiveServices/accounts
* **ApiVersion**: 2016-02-01-preview
* **Output**: [CognitiveServicesAccountKeys](#cognitiveservicesaccountkeys)

## CognitiveServicesAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CognitiveServicesAccountKeys
### Properties
* **key1**: string (ReadOnly): Gets the value of key 1.
* **key2**: string (ReadOnly): Gets the value of key 2.

## Sku
### Properties
* **name**: 'F0' | 'P0' | 'P1' | 'P2' | 'S0' | 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6' | string (Required): Gets or sets the sku name. Required for account creation, optional for update.
* **tier**: 'Free' | 'Premium' | 'Standard' (ReadOnly): Gets the sku tier. This is based on the SKU name.

