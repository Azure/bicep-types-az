# Microsoft.Web @ 2015-08-01-preview

## Resource Microsoft.Web/connections@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:1_properties](#schemas1properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/connections' (ReadOnly, DeployTimeConstant)

## schemas:1_properties
### Properties
* **apiDefinitionUrl**: string
* **backendService**: [BackendServiceDefinition](#backendservicedefinition)
* **capabilities**: string[]
* **changedTime**: string
* **connectionParameters**: [Dictionary<string,ConnectionParameter>](#dictionarystringconnectionparameter)
* **createdTime**: string
* **generalInformation**: [GeneralApiInformation](#generalapiinformation)
* **metadata**: any
* **name**: string
* **path**: string
* **policies**: [ApiPolicies](#apipolicies)
* **protocols**: string[]
* **runtimeUrls**: string[]

## BackendServiceDefinition
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: [schemas:1_properties](#schemas1properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,ConnectionParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnectionParameter](#connectionparameter)

## ConnectionParameter
### Properties
* **defaultValue**: any
* **oAuthSettings**: [ApiOAuthSettings](#apioauthsettings)
* **type**: 'array' | 'bool' | 'connection' | 'int' | 'oauthSetting' | 'object' | 'secureobject' | 'securestring' | 'string'
* **uiDefinition**: any

## ApiOAuthSettings
### Properties
* **clientId**: string
* **clientSecret**: string
* **customParameters**: [Dictionary<string,ApiOAuthSettingsParameter>](#dictionarystringapioauthsettingsparameter)
* **identityProvider**: string
* **properties**: any
* **redirectUrl**: string
* **scopes**: string[]

## Dictionary<string,ApiOAuthSettingsParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: [ApiOAuthSettingsParameter](#apioauthsettingsparameter)

## ApiOAuthSettingsParameter
### Properties
* **options**: any
* **uiDefinition**: any
* **value**: string

## GeneralApiInformation
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: [schemas:1_properties](#schemas1properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiPolicies
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: [schemas:1_properties](#schemas1properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

