# Microsoft.Web @ 2015-08-01-preview

## Resource Microsoft.Web/connections@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:1_properties](#schemas1properties):
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.Web/connections' (ReadOnly, DeployTimeConstant): The resource type

## schemas:1_properties
### Properties
* **apiDefinitionUrl**: string: API definition Url - url where the swagger can be downloaded from
* **backendService**: [BackendServiceDefinition](#backendservicedefinition): API definitions with backend urls
* **capabilities**: string[]: Capabilities
* **changedTime**: string: Timestamp of last connection change.
* **connectionParameters**: [Dictionary<string,ConnectionParameter>](#dictionarystringconnectionparameter): Connection parameters
* **createdTime**: string: Timestamp of the connection creation
* **generalInformation**: [GeneralApiInformation](#generalapiinformation): General API information
* **metadata**: any:
* **name**: string: Name of the API
            the URL path of this API when exposed via APIM
* **path**: string: the URL path of this API when exposed via APIM
* **policies**: [ApiPolicies](#apipolicies): API policies
* **protocols**: string[]: Protocols supported by the front end - http/https
* **runtimeUrls**: string[]: Read only property returning the runtime endpoints where the API can be called

## BackendServiceDefinition
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [schemas:1_properties](#schemas1properties):
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: string: Resource type

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
* **defaultValue**: any:
* **oAuthSettings**: [ApiOAuthSettings](#apioauthsettings): OAuth settings for the connection provider
* **type**: 'array' | 'bool' | 'connection' | 'int' | 'oauthSetting' | 'object' | 'secureobject' | 'securestring' | 'string': Type of the parameter. Possible values include: 'string', 'securestring', 'secureobject', 'int', 'bool', 'object', 'array', 'oauthSetting', 'connection'
* **uiDefinition**: any:

## ApiOAuthSettings
### Properties
* **clientId**: string: Resource provider client id
* **clientSecret**: string: Client Secret needed for OAuth
* **customParameters**: [Dictionary<string,ApiOAuthSettingsParameter>](#dictionarystringapioauthsettingsparameter): OAuth parameters key is the name of parameter
* **identityProvider**: string: Identity provider
* **properties**: any:
* **redirectUrl**: string: Url
* **scopes**: string[]: OAuth scopes

## Dictionary<string,ApiOAuthSettingsParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: [ApiOAuthSettingsParameter](#apioauthsettingsparameter)

## ApiOAuthSettingsParameter
### Properties
* **options**: any:
* **uiDefinition**: any:
* **value**: string: Value

## GeneralApiInformation
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [schemas:1_properties](#schemas1properties):
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: string: Resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiPolicies
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [schemas:1_properties](#schemas1properties):
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: string: Resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

