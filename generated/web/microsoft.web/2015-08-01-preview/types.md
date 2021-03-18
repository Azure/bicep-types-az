# Microsoft.Web @ 2015-08-01-preview

## Resource Microsoft.Web/connections@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectionProperties](#connectionproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/connections' (ReadOnly, DeployTimeConstant)

## ConnectionProperties
### Properties
* **api**: [ExpandedParentApiEntity](#expandedparentapientity)
* **changedTime**: string
* **createdTime**: string
* **customParameterValues**: [ConnectionPropertiesCustomParameterValues](#connectionpropertiescustomparametervalues)
* **displayName**: string
* **firstExpirationTime**: string
* **keywords**: string[]
* **metadata**: any
* **name**: string
* **nonSecretParameterValues**: [ConnectionPropertiesNonSecretParameterValues](#connectionpropertiesnonsecretparametervalues)
* **parameterValues**: [ConnectionPropertiesParameterValues](#connectionpropertiesparametervalues)
* **statuses**: [ConnectionStatus](#connectionstatus)[]
* **tenantId**: string

## ExpandedParentApiEntity
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: [ExpandedParentApiEntityProperties](#expandedparentapientityproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string

## ExpandedParentApiEntityProperties
### Properties
* **entity**: [ResponseMessageEnvelopeApiEntity](#responsemessageenvelopeapientity)
* **id**: string

## ResponseMessageEnvelopeApiEntity
### Properties
* **id**: string
* **location**: string
* **name**: string
* **plan**: [ArmPlan](#armplan)
* **properties**: [ApiEntity](#apientity)
* **sku**: [SkuDescription](#skudescription)
* **tags**: [ResponseMessageEnvelopeApiEntityTags](#responsemessageenvelopeapientitytags)
* **type**: string

## ArmPlan
### Properties
* **name**: string
* **product**: string
* **promotionCode**: string
* **publisher**: string
* **version**: string

## ApiEntity
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: [ApiEntityProperties](#apientityproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string

## ApiEntityProperties
### Properties
* **apiDefinitionUrl**: string
* **backendService**: [BackendServiceDefinition](#backendservicedefinition)
* **capabilities**: string[]
* **changedTime**: string
* **connectionParameters**: [ApiEntityPropertiesConnectionParameters](#apientitypropertiesconnectionparameters)
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
* **properties**: [BackendServiceDefinitionProperties](#backendservicedefinitionproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string

## BackendServiceDefinitionProperties
### Properties
* **hostingEnvironmentServiceUrls**: [HostingEnvironmentServiceDescriptions](#hostingenvironmentservicedescriptions)[]
* **serviceUrl**: string

## HostingEnvironmentServiceDescriptions
### Properties
* **hostId**: string
* **hostingEnvironmentId**: string
* **serviceUrl**: string
* **useInternalRouting**: bool

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiEntityPropertiesConnectionParameters
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
* **customParameters**: [ApiOAuthSettingsCustomParameters](#apioauthsettingscustomparameters)
* **identityProvider**: string
* **properties**: any
* **redirectUrl**: string
* **scopes**: string[]

## ApiOAuthSettingsCustomParameters
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
* **properties**: [GeneralApiInformationProperties](#generalapiinformationproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string

## GeneralApiInformationProperties
### Properties
* **connectionDisplayName**: string
* **connectionPortalUrl**: any
* **description**: string
* **displayName**: string
* **iconUrl**: string
* **termsOfUseUrl**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiPolicies
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: [ApiPoliciesProperties](#apipoliciesproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string

## ApiPoliciesProperties
### Properties
* **content**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SkuDescription
### Properties
* **capacity**: int
* **family**: string
* **name**: string
* **size**: string
* **tier**: string

## ResponseMessageEnvelopeApiEntityTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionPropertiesCustomParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterCustomLoginSettingValues](#parametercustomloginsettingvalues)

## ParameterCustomLoginSettingValues
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: [ParameterCustomLoginSettingValuesProperties](#parametercustomloginsettingvaluesproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string

## ParameterCustomLoginSettingValuesProperties
### Properties
* **customParameters**: [ParameterCustomLoginSettingValuesPropertiesCustomParameters](#parametercustomloginsettingvaluespropertiescustomparameters)

## ParameterCustomLoginSettingValuesPropertiesCustomParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [CustomLoginSettingValue](#customloginsettingvalue)

## CustomLoginSettingValue
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: [CustomLoginSettingValueProperties](#customloginsettingvalueproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string

## CustomLoginSettingValueProperties
### Properties
* **option**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionPropertiesNonSecretParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ConnectionPropertiesParameterValues
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ConnectionStatus
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: [ConnectionStatusProperties](#connectionstatusproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string

## ConnectionStatusProperties
### Properties
* **error**: [ConnectionError](#connectionerror)
* **status**: string
* **target**: string

## ConnectionError
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: [ConnectionErrorProperties](#connectionerrorproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string

## ConnectionErrorProperties
### Properties
* **code**: string
* **message**: string

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

