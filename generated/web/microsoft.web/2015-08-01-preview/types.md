# Microsoft.Web @ 2015-08-01-preview

## Resource Microsoft.Web/connections@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionProperties](#connectionproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/connections' (ReadOnly, DeployTimeConstant): The resource type

## Function listConnectionKeys (Microsoft.Web/connections@2015-08-01-preview)
* **Resource**: Microsoft.Web/connections
* **ApiVersion**: 2015-08-01-preview
* **Input**: [ListConnectionKeysInput](#listconnectionkeysinput)
* **Output**: [ConnectionSecrets](#connectionsecrets)

## Function listConsentLinks (Microsoft.Web/connections@2015-08-01-preview)
* **Resource**: Microsoft.Web/connections
* **ApiVersion**: 2015-08-01-preview
* **Input**: [ConsentLinkInput](#consentlinkinput)
* **Output**: [ConsentLinkPayload](#consentlinkpayload)

## ApiEntity
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [ApiEntityProperties](#apientityproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## ApiEntityProperties
### Properties
* **apiDefinitionUrl**: string: API definition Url - url where the swagger can be downloaded from
* **backendService**: [BackendServiceDefinition](#backendservicedefinition): Backend service definition
* **capabilities**: string[]: Capabilities
* **changedTime**: string: Timestamp of last connection change.
* **connectionParameters**: [ApiEntityPropertiesConnectionParameters](#apientitypropertiesconnectionparameters): Connection parameters
* **createdTime**: string: Timestamp of the connection creation
* **generalInformation**: [GeneralApiInformation](#generalapiinformation): the URL path of this API when exposed via APIM
* **metadata**: any: Free form object for the data caller wants to store
* **name**: string: Name of the API
            the URL path of this API when exposed via APIM
* **path**: string: the URL path of this API when exposed via APIM
* **policies**: [ApiPolicies](#apipolicies): API policies
* **protocols**: string[]: Protocols supported by the front end - http/https
* **runtimeUrls**: string[]: Read only property returning the runtime endpoints where the API can be called

## ApiEntityPropertiesConnectionParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnectionParameter](#connectionparameter)

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
* **options**: any: Read only: Options available to this parameter
* **uiDefinition**: any: UI definitions per culture as caller can specify the culture
* **value**: string: Value

## ApiPolicies
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [ApiPoliciesProperties](#apipoliciesproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## ApiPoliciesProperties
### Properties
* **content**: string: Content of xml policy

## ArmPlan
### Properties
* **name**: string: The name
* **product**: string: The product
* **promotionCode**: string: The promotion code
* **publisher**: string: The publisher
* **version**: string: Version of product

## BackendServiceDefinition
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [BackendServiceDefinitionProperties](#backendservicedefinitionproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## BackendServiceDefinitionProperties
### Properties
* **hostingEnvironmentServiceUrls**: [HostingEnvironmentServiceDescriptions](#hostingenvironmentservicedescriptions)[]: Service Urls per Hosting environment
* **serviceUrl**: string: Url from which the swagger payload will be fetched

## ConnectionError
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [ConnectionErrorProperties](#connectionerrorproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## ConnectionErrorProperties
### Properties
* **code**: string: code of the status
* **message**: string: Description of the status

## ConnectionParameter
### Properties
* **defaultValue**: any: Default parameter value
* **oAuthSettings**: [ApiOAuthSettings](#apioauthsettings): Settings defining OAuth flow for the back end provider
* **type**: 'array' | 'bool' | 'connection' | 'int' | 'oauthSetting' | 'object' | 'secureobject' | 'securestring' | 'string': Type of the parameter
* **uiDefinition**: any: UI definitions

## ConnectionProperties
### Properties
* **api**: [ExpandedParentApiEntity](#expandedparentapientity): expanded connection provider name
* **changedTime**: string: Timestamp of last connection change.
* **createdTime**: string: Timestamp of the connection creation
* **customParameterValues**: [ConnectionPropertiesCustomParameterValues](#connectionpropertiescustomparametervalues): Custom login setting values.
* **displayName**: string: display name
* **firstExpirationTime**: string: Time in UTC when the first expiration of OAuth tokens
* **keywords**: string[]: List of Keywords that tag the acl
* **metadata**: any: Any object
* **name**: string: connection name
* **nonSecretParameterValues**: [ConnectionPropertiesNonSecretParameterValues](#connectionpropertiesnonsecretparametervalues): Tokens/Claim
* **parameterValues**: [ConnectionPropertiesParameterValues](#connectionpropertiesparametervalues): Tokens/Claim
* **statuses**: [ConnectionStatus](#connectionstatus)[]: Status of the connection
* **tenantId**: string

## ConnectionPropertiesCustomParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterCustomLoginSettingValues](#parametercustomloginsettingvalues)

## ConnectionPropertiesNonSecretParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ConnectionPropertiesParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ConnectionSecrets
### Properties
* **connectionKey**: string: Connection Key
* **parameterValues**: [ConnectionSecretsParameterValues](#connectionsecretsparametervalues): Tokens/Claim

## ConnectionSecretsParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ConnectionStatus
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [ConnectionStatusProperties](#connectionstatusproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## ConnectionStatusProperties
### Properties
* **error**: [ConnectionError](#connectionerror): Error details
* **status**: string: Status
* **target**: string: Target of the error

## ConsentLink
### Properties
* **displayName**: string: Display Name of the parameter in the connection provider's oauthSettings
* **firstPartyLoginUri**: string: Uri for first party login
* **link**: string: Uri for the consent link
* **status**: 'Authenticated' | 'Error' | 'Unauthenticated': Status of the link

## ConsentLinkInput
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [ConsentLinkInputProperties](#consentlinkinputproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## ConsentLinkInputParameter
### Properties
* **objectId**: string: AAD OID (user or group) if the principal type is ActiveDirectory.
            MSA PUID if the principal type is MicrosoftAccount.
* **parameterName**: string: Name of the parameter in the connection provider's oauthSettings
* **principalType**: 'ActiveDirectory' | 'Connection' | 'MicrosoftAccount': Principal type
* **redirectUrl**: string: Name of the parameter in the connection provider's oauthSettings
* **tenantId**: string: Tenant Id

## ConsentLinkInputProperties
### Properties
* **parameters**: [ConsentLinkInputParameter](#consentlinkinputparameter)[]: Array of links

## ConsentLinkPayload
### Properties
* **value**: [ConsentLink](#consentlink)[]: Collection of resources

## CustomLoginSettingValue
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [CustomLoginSettingValueProperties](#customloginsettingvalueproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## CustomLoginSettingValueProperties
### Properties
* **option**: string: Option selected for this custom login setting value

## ExpandedParentApiEntity
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [ExpandedParentApiEntityProperties](#expandedparentapientityproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## ExpandedParentApiEntityProperties
### Properties
* **entity**: [ResponseMessageEnvelopeApiEntity](#responsemessageenvelopeapientity): Id of connection provider
* **id**: string: Id of connection provider

## GeneralApiInformation
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [GeneralApiInformationProperties](#generalapiinformationproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## GeneralApiInformationProperties
### Properties
* **connectionDisplayName**: string: DefaultConnectionNameTemplate
* **connectionPortalUrl**: any: ConnectionPortalUrl
* **description**: string: Description
* **displayName**: string: Display Name
* **iconUrl**: string: Icon Url
* **termsOfUseUrl**: string: a public accessible url of the Terms Of Use Url of this API

## HostingEnvironmentServiceDescriptions
### Properties
* **hostId**: string: Host Id
* **hostingEnvironmentId**: string: Hosting environment Id
* **serviceUrl**: string: service url to use
* **useInternalRouting**: bool: When the backend url is in same ASE, for performance reason this flag can be set to true
            If WebApp.DisableHostNames is also set it improves the security by making the back end accessible only 
            via API calls
            Note: calls will fail if this option is used but back end is not on the same ASE

## ListConnectionKeysInput
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [ListConnectionKeysInputProperties](#listconnectionkeysinputproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## ListConnectionKeysInputProperties
### Properties
* **validityTimeSpan**: string: time span for how long the keys will be valid

## ParameterCustomLoginSettingValues
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [ParameterCustomLoginSettingValuesProperties](#parametercustomloginsettingvaluesproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## ParameterCustomLoginSettingValuesProperties
### Properties
* **customParameters**: [ParameterCustomLoginSettingValuesPropertiesCustomParameters](#parametercustomloginsettingvaluespropertiescustomparameters): Custom parameters.

## ParameterCustomLoginSettingValuesPropertiesCustomParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [CustomLoginSettingValue](#customloginsettingvalue)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResponseMessageEnvelopeApiEntity
### Properties
* **id**: string: Resource Id. Typically id is populated only for responses to GET requests. Caller is responsible for passing in this
            value for GET requests only.
            For example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupId}/providers/Microsoft.Web/sites/{sitename}
* **location**: string: Geo region resource belongs to e.g. SouthCentralUS, SouthEastAsia
* **name**: string: Name of resource
* **plan**: [ArmPlan](#armplan): Azure resource manager plan
* **properties**: [ApiEntity](#apientity): Resource specific properties
* **sku**: [SkuDescription](#skudescription): Sku description of the resource
* **tags**: [ResponseMessageEnvelopeApiEntityTags](#responsemessageenvelopeapientitytags): Tags associated with resource
* **type**: string: Type of resource e.g Microsoft.Web/sites

## ResponseMessageEnvelopeApiEntityTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SkuDescription
### Properties
* **capacity**: int: Current number of instances assigned to the resource
* **family**: string: Family code of the resource sku
* **name**: string: Name of the resource sku
* **size**: string: Size specifier of the resource sku
* **tier**: string: Service Tier of the resource sku

