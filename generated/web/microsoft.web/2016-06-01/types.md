# Microsoft.Web @ 2016-06-01

## Resource Microsoft.Web/connectionGateways@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Resource ETag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionGatewayDefinitionProperties](#connectiongatewaydefinitionproperties)
* **tags**: [TagsDictionary](#tagsdictionary): Resource tags
* **type**: 'Microsoft.Web/connectionGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/connections@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Resource ETag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiConnectionDefinitionProperties](#apiconnectiondefinitionproperties)
* **tags**: [TagsDictionary](#tagsdictionary): Resource tags
* **type**: 'Microsoft.Web/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/customApis@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Resource ETag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomApiPropertiesDefinition](#customapipropertiesdefinition): Custom API properties
* **tags**: [TagsDictionary](#tagsdictionary): Resource tags
* **type**: 'Microsoft.Web/customApis' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/locations/connectionGatewayInstallations@2016-06-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource ETag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionGatewayInstallationDefinitionProperties](#connectiongatewayinstallationdefinitionproperties) (ReadOnly)
* **tags**: [TagsDictionary](#tagsdictionary) (ReadOnly): Resource tags
* **type**: 'Microsoft.Web/locations/connectionGatewayInstallations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/locations/managedApis@2016-06-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource ETag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiResourceProperties](#apiresourceproperties) (ReadOnly): API resource properties
* **tags**: [TagsDictionary](#tagsdictionary) (ReadOnly): Resource tags
* **type**: 'Microsoft.Web/locations/managedApis' (ReadOnly, DeployTimeConstant): The resource type

## Function listConsentLinks (Microsoft.Web/connections@2016-06-01)
* **Resource**: Microsoft.Web/connections
* **ApiVersion**: 2016-06-01
* **Input**: [ListConsentLinksDefinition](#listconsentlinksdefinition)
* **Output**: [ConsentLinkCollection](#consentlinkcollection)

## Function listWsdlInterfaces (Microsoft.Web/locations@2016-06-01)
* **Resource**: Microsoft.Web/locations
* **ApiVersion**: 2016-06-01
* **Input**: [WsdlDefinition](#wsdldefinition)
* **Output**: [WsdlServiceCollection](#wsdlservicecollection)

## ApiConnectionDefinitionProperties
### Properties
* **api**: [ApiReference](#apireference)
* **changedTime**: string: Timestamp of last connection change
* **createdTime**: string: Timestamp of the connection creation
* **customParameterValues**: [ApiConnectionDefinitionPropertiesCustomParameterValues](#apiconnectiondefinitionpropertiescustomparametervalues): Dictionary of custom parameter values
* **displayName**: string: Display name
* **nonSecretParameterValues**: [ApiConnectionDefinitionPropertiesNonSecretParameterValues](#apiconnectiondefinitionpropertiesnonsecretparametervalues): Dictionary of nonsecret parameter values
* **parameterValues**: [ApiConnectionDefinitionPropertiesParameterValues](#apiconnectiondefinitionpropertiesparametervalues): Dictionary of parameter values
* **statuses**: [ConnectionStatusDefinition](#connectionstatusdefinition)[]: Status of the connection
* **testLinks**: [ApiConnectionTestLink](#apiconnectiontestlink)[]: Links to test the API connection

## ApiConnectionDefinitionPropertiesCustomParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiConnectionDefinitionPropertiesNonSecretParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiConnectionDefinitionPropertiesParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiConnectionTestLink
### Properties
* **method**: string: HTTP Method
* **requestUri**: string: Test link request URI

## ApiOAuthSettings
### Properties
* **clientId**: string: Resource provider client id
* **clientSecret**: string: Client Secret needed for OAuth
* **customParameters**: [ApiOAuthSettingsCustomParameters](#apioauthsettingscustomparameters): OAuth parameters key is the name of parameter
* **identityProvider**: string: Identity provider
* **properties**: any: Read only properties for this oauth setting.
* **redirectUrl**: string: Url
* **scopes**: string[]: OAuth scopes

## ApiOAuthSettingsCustomParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ApiOAuthSettingsParameter](#apioauthsettingsparameter)

## ApiOAuthSettingsParameter
### Properties
* **options**: any: Options available to this parameter
* **uiDefinition**: any: UI definitions per culture as caller can specify the culture
* **value**: string: Value of the setting

## ApiReference
### Properties
* **brandColor**: string: Brand color
* **description**: string: The custom API description
* **displayName**: string: The display name
* **iconUri**: string: The icon URI
* **id**: string: Resource reference id
* **name**: string: The name of the API
* **swagger**: any: The JSON representation of the swagger
* **type**: string: Resource reference type

## ApiResourceBackendService
### Properties
* **serviceUrl**: string: The service URL

## ApiResourceDefinitions
### Properties
* **modifiedSwaggerUrl**: string: The modified swagger URL
* **originalSwaggerUrl**: string: The original swagger URL

## ApiResourceGeneralInformation
### Properties
* **description**: string: The API description
* **displayName**: string: Display name
* **iconUrl**: string: The icon URL
* **releaseTag**: string: Release tag
* **termsOfUseUrl**: string: URL to the Terms of Use

## ApiResourceMetadata
### Properties
* **apiType**: 'NotSpecified' | 'Rest' | 'Soap' | string: The API type
* **brandColor**: string: Brand color
* **connectionType**: string: The connection type
* **hideKey**: string: Hide key
* **source**: string: The source
* **tags**: [TagsDictionary](#tagsdictionary): Resource tags
* **wsdlImportMethod**: 'NotSpecified' | 'SoapPassThrough' | 'SoapToRest' | string: The WSDL import method
* **wsdlService**: [WsdlService](#wsdlservice): The service with name and endpoint names

## ApiResourcePolicies
### Properties
* **content**: string: API level policies as XML
* **contentLink**: string: Link to the JSON of the policies

## ApiResourceProperties
### Properties
* **apiDefinitions**: [ApiResourceDefinitions](#apiresourcedefinitions): API Definitions
* **apiDefinitionUrl**: string: URL where the swagger can be downloaded from
* **backendService**: [ApiResourceBackendService](#apiresourcebackendservice): The API backend service
* **capabilities**: string[]: The managed API capabilities
* **connectionParameters**: [ApiResourcePropertiesConnectionParameters](#apiresourcepropertiesconnectionparameters): Connection parameters
* **generalInformation**: [ApiResourceGeneralInformation](#apiresourcegeneralinformation): General information about the API
* **metadata**: [ApiResourceMetadata](#apiresourcemetadata)
* **name**: string
* **policies**: [ApiResourcePolicies](#apiresourcepolicies): Describes the API policies either as embedded content or as a link to uploaded content
* **runtimeUrls**: string[]: Runtime URLs
* **swagger**: any: The JSON representation of the swagger

## ApiResourcePropertiesConnectionParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnectionParameter](#connectionparameter)

## ConnectionError
### Properties
* **etag**: string: Resource ETag
* **id**: string (ReadOnly): Resource id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [ConnectionErrorProperties](#connectionerrorproperties)
* **tags**: [TagsDictionary](#tagsdictionary): Resource tags
* **type**: string (ReadOnly): Resource type

## ConnectionErrorProperties
### Properties
* **code**: string: Code of the status
* **message**: string: Description of the status

## ConnectionGatewayDefinitionProperties
### Properties
* **backendUri**: string: The URI of the backend
* **connectionGatewayInstallation**: [ConnectionGatewayReference](#connectiongatewayreference): The gateway installation reference
* **contactInformation**: string[]: The gateway admin
* **description**: string: The gateway description
* **displayName**: string: The gateway display name
* **machineName**: string: The machine name of the gateway
* **status**: any: The gateway status

## ConnectionGatewayInstallationDefinitionProperties
### Properties
* **backendUri**: string: The URI of the backend
* **connectionGateway**: [ConnectionGatewayReference](#connectiongatewayreference): The gateway installation reference
* **contactInformation**: string[]: The gateway admin
* **description**: string: The gateway description
* **displayName**: string: The gateway display name
* **machineName**: string: The machine name of the gateway
* **status**: any: The gateway status

## ConnectionGatewayReference
### Properties
* **id**: string: Resource reference id
* **location**: string: Resource reference location
* **name**: string: Resource reference name
* **type**: string: Resource reference type

## ConnectionParameter
### Properties
* **oAuthSettings**: [ApiOAuthSettings](#apioauthsettings): OAuth settings for the connection provider
* **type**: 'array' | 'bool' | 'connection' | 'int' | 'oauthSetting' | 'object' | 'secureobject' | 'securestring' | 'string': Type of the parameter

## ConnectionStatusDefinition
### Properties
* **error**: [ConnectionError](#connectionerror): Connection error
* **status**: string: The gateway status
* **target**: string: Target of the error

## ConsentLinkCollection
### Properties
* **value**: [ConsentLinkDefinition](#consentlinkdefinition)[]: Collection of resources

## ConsentLinkDefinition
### Properties
* **displayName**: string: Display name of the parameter in the connection provider's OAuth settings
* **firstPartyLoginUri**: string: URI for first party login
* **link**: string: URI for the consent link
* **status**: 'Authenticated' | 'Error' | 'Unauthenticated' | string: Status of the link

## ConsentLinkParameterDefinition
### Properties
* **objectId**: string: AAD OID (user or group) if the principal type is ActiveDirectory. MSA PUID if the principal type is MicrosoftAccount
* **parameterName**: string: Name of the parameter in the connection provider's OAuth settings
* **redirectUrl**: string: Name of the parameter in the connection provider's OAuth settings
* **tenantId**: string: The tenant id

## CustomApiPropertiesDefinition
### Properties
* **apiDefinitions**: [ApiResourceDefinitions](#apiresourcedefinitions): API Definitions
* **apiType**: 'NotSpecified' | 'Rest' | 'Soap' | string: The API type
* **backendService**: [ApiResourceBackendService](#apiresourcebackendservice): The API backend service
* **brandColor**: string: Brand color
* **capabilities**: string[]: The custom API capabilities
* **connectionParameters**: [CustomApiPropertiesDefinitionConnectionParameters](#customapipropertiesdefinitionconnectionparameters): Connection parameters
* **description**: string: The custom API description
* **displayName**: string: The display name
* **iconUri**: string: The icon URI
* **runtimeUrls**: string[]: Runtime URLs
* **swagger**: any: The JSON representation of the swagger
* **wsdlDefinition**: [WsdlDefinition](#wsdldefinition): The WSDL definition

## CustomApiPropertiesDefinitionConnectionParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnectionParameter](#connectionparameter)

## ListConsentLinksDefinition
### Properties
* **parameters**: [ConsentLinkParameterDefinition](#consentlinkparameterdefinition)[]: Collection of resources

## TagsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WsdlDefinition
### Properties
* **content**: string: The WSDL content
* **importMethod**: 'NotSpecified' | 'SoapPassThrough' | 'SoapToRest' | string: The WSDL import method
* **service**: [WsdlService](#wsdlservice): The service with name and endpoint names
* **url**: string: The WSDL URL

## WsdlDefinition
### Properties
* **content**: string: The WSDL content
* **importMethod**: 'NotSpecified' | 'SoapPassThrough' | 'SoapToRest' | string: The WSDL import method
* **service**: [WsdlService](#wsdlservice): The service with name and endpoint names
* **url**: string: The WSDL URL

## WsdlService
### Properties
* **endpointQualifiedNames**: string[]: List of the endpoints' qualified names
* **qualifiedName**: string (Required): The service's qualified name

## WsdlServiceCollection
### Properties
* **value**: [WsdlService](#wsdlservice)[]: Collection of WSDL interfaces

