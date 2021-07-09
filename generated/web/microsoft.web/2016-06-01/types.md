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

## ConnectionGatewayDefinitionProperties
### Properties
* **backendUri**: string: The URI of the backend
* **connectionGatewayInstallation**: [ConnectionGatewayReference](#connectiongatewayreference): The gateway installation reference
* **contactInformation**: string[]: The gateway admin
* **description**: string: The gateway description
* **displayName**: string: The gateway display name
* **machineName**: string: The machine name of the gateway
* **status**: any: Any object

## ConnectionGatewayReference
### Properties
* **id**: string: Resource reference id
* **location**: string: Resource reference location
* **name**: string: Resource reference name
* **type**: string: Resource reference type

## TagsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## ApiReference
### Properties
* **brandColor**: string: Brand color
* **description**: string: The custom API description
* **displayName**: string: The display name
* **iconUri**: string: The icon URI
* **id**: string: Resource reference id
* **name**: string: The name of the API
* **swagger**: any: Any object
* **type**: string: Resource reference type

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

## ConnectionStatusDefinition
### Properties
* **error**: [ConnectionError](#connectionerror): Connection error
* **status**: string: The gateway status
* **target**: string: Target of the error

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

## TagsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiConnectionTestLink
### Properties
* **method**: string: HTTP Method
* **requestUri**: string: Test link request URI

## TagsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomApiPropertiesDefinition
### Properties
* **apiDefinitions**: [ApiResourceDefinitions](#apiresourcedefinitions): API Definitions
* **apiType**: 'NotSpecified' | 'Rest' | 'Soap': The API type
* **backendService**: [ApiResourceBackendService](#apiresourcebackendservice): The API backend service
* **brandColor**: string: Brand color
* **capabilities**: string[]: The custom API capabilities
* **connectionParameters**: [CustomApiPropertiesDefinitionConnectionParameters](#customapipropertiesdefinitionconnectionparameters): Connection parameters
* **description**: string: The custom API description
* **displayName**: string: The display name
* **iconUri**: string: The icon URI
* **runtimeUrls**: string[]: Runtime URLs
* **swagger**: any: Any object
* **wsdlDefinition**: [WsdlDefinition](#wsdldefinition): The WSDL definition

## ApiResourceDefinitions
### Properties
* **modifiedSwaggerUrl**: string: The modified swagger URL
* **originalSwaggerUrl**: string: The original swagger URL

## ApiResourceBackendService
### Properties
* **serviceUrl**: string: The service URL

## CustomApiPropertiesDefinitionConnectionParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnectionParameter](#connectionparameter)

## ConnectionParameter
### Properties
* **oAuthSettings**: [ApiOAuthSettings](#apioauthsettings): OAuth settings for the connection provider
* **type**: 'array' | 'bool' | 'connection' | 'int' | 'oauthSetting' | 'object' | 'secureobject' | 'securestring' | 'string': Type of the parameter

## ApiOAuthSettings
### Properties
* **clientId**: string: Resource provider client id
* **clientSecret**: string: Client Secret needed for OAuth
* **customParameters**: [ApiOAuthSettingsCustomParameters](#apioauthsettingscustomparameters): OAuth parameters key is the name of parameter
* **identityProvider**: string: Identity provider
* **properties**: any: Any object
* **redirectUrl**: string: Url
* **scopes**: string[]: OAuth scopes

## ApiOAuthSettingsCustomParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ApiOAuthSettingsParameter](#apioauthsettingsparameter)

## ApiOAuthSettingsParameter
### Properties
* **options**: any: Any object
* **uiDefinition**: any: Any object
* **value**: string: Value of the setting

## WsdlDefinition
### Properties
* **content**: string: The WSDL content
* **importMethod**: 'NotSpecified' | 'SoapPassThrough' | 'SoapToRest': The WSDL import method
* **service**: [WsdlService](#wsdlservice): The service with name and endpoint names
* **url**: string: The WSDL URL

## WsdlService
### Properties
* **endpointQualifiedNames**: string[]: List of the endpoints' qualified names
* **qualifiedName**: string (Required): The service's qualified name

## TagsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

