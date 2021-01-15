# Microsoft.Web @ 2015-08-01-preview

## Resource Microsoft.Web/connections@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:1_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/connections' (ReadOnly, DeployTimeConstant)

## Function listConnectionKeys (Microsoft.Web/connections@2015-08-01-preview)
* **Resource**: Microsoft.Web/connections
* **ApiVersion**: 2015-08-01-preview
* **Input**: ListConnectionKeysInput
* **Output**: ConnectionSecrets

## Function listConsentLinks (Microsoft.Web/connections@2015-08-01-preview)
* **Resource**: Microsoft.Web/connections
* **ApiVersion**: 2015-08-01-preview
* **Input**: ConsentLinkInput
* **Output**: ConsentLinkPayload

## schemas:1_properties
### Properties
* **apiDefinitionUrl**: string
* **backendService**: BackendServiceDefinition
* **capabilities**: string[]
* **changedTime**: string
* **connectionParameters**: Dictionary<string,ConnectionParameter>
* **createdTime**: string
* **generalInformation**: GeneralApiInformation
* **metadata**: any
* **name**: string
* **path**: string
* **policies**: ApiPolicies
* **protocols**: string[]
* **runtimeUrls**: string[]

## BackendServiceDefinition
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: schemas:1_properties
* **tags**: Dictionary<string,String>
* **type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,ConnectionParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: ConnectionParameter

## ConnectionParameter
### Properties
* **defaultValue**: any
* **oAuthSettings**: ApiOAuthSettings
* **type**: 'array' | 'bool' | 'connection' | 'int' | 'oauthSetting' | 'object' | 'secureobject' | 'securestring' | 'string'
* **uiDefinition**: any

## ApiOAuthSettings
### Properties
* **clientId**: string
* **clientSecret**: string
* **customParameters**: Dictionary<string,ApiOAuthSettingsParameter>
* **identityProvider**: string
* **properties**: any
* **redirectUrl**: string
* **scopes**: string[]

## Dictionary<string,ApiOAuthSettingsParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: ApiOAuthSettingsParameter

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
* **properties**: schemas:1_properties
* **tags**: Dictionary<string,String>
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
* **properties**: schemas:1_properties
* **tags**: Dictionary<string,String>
* **type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ListConnectionKeysInput
### Properties
* **id**: string (WriteOnly)
* **kind**: string (WriteOnly)
* **location**: string (Required, WriteOnly)
* **name**: string (WriteOnly)
* **properties**: schemas:1_properties (WriteOnly)
* **tags**: Dictionary<string,String> (WriteOnly)
* **type**: string (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionSecrets
### Properties
* **connectionKey**: string (ReadOnly)
* **parameterValues**: Dictionary<string,Object> (ReadOnly)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ConsentLinkInput
### Properties
* **id**: string (WriteOnly)
* **kind**: string (WriteOnly)
* **location**: string (Required, WriteOnly)
* **name**: string (WriteOnly)
* **properties**: schemas:1_properties (WriteOnly)
* **tags**: Dictionary<string,String> (WriteOnly)
* **type**: string (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConsentLinkPayload
### Properties
* **value**: ConsentLink[] (ReadOnly)

## ConsentLink
### Properties
* **displayName**: string (ReadOnly)
* **firstPartyLoginUri**: string (ReadOnly)
* **link**: string (ReadOnly)
* **status**: 'Authenticated' | 'Error' | 'Unauthenticated' (ReadOnly)

