# Microsoft.Web @ 2015-08-01-preview

## Resource Microsoft.Web/connections@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectionProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/connections' (ReadOnly, DeployTimeConstant)

## ConnectionProperties
### Properties
* **api**: ExpandedParentApiEntity
* **changedTime**: string
* **createdTime**: string
* **customParameterValues**: ConnectionPropertiesCustomParameterValues
* **displayName**: string
* **firstExpirationTime**: string
* **keywords**: string[]
* **metadata**: any
* **name**: string
* **nonSecretParameterValues**: ConnectionPropertiesNonSecretParameterValues
* **parameterValues**: ConnectionPropertiesParameterValues
* **statuses**: ConnectionStatus[]
* **tenantId**: string

## ExpandedParentApiEntity
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: ExpandedParentApiEntityProperties
* **tags**: ResourceTags
* **type**: string

## ExpandedParentApiEntityProperties
### Properties
* **entity**: ResponseMessageEnvelopeApiEntity
* **id**: string

## ResponseMessageEnvelopeApiEntity
### Properties
* **id**: string
* **location**: string
* **name**: string
* **plan**: ArmPlan
* **properties**: ApiEntity
* **sku**: SkuDescription
* **tags**: ResponseMessageEnvelopeApiEntityTags
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
* **properties**: ApiEntityProperties
* **tags**: ResourceTags
* **type**: string

## ApiEntityProperties
### Properties
* **apiDefinitionUrl**: string
* **backendService**: BackendServiceDefinition
* **capabilities**: string[]
* **changedTime**: string
* **connectionParameters**: ApiEntityPropertiesConnectionParameters
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
* **properties**: BackendServiceDefinitionProperties
* **tags**: ResourceTags
* **type**: string

## BackendServiceDefinitionProperties
### Properties
* **hostingEnvironmentServiceUrls**: HostingEnvironmentServiceDescriptions[]
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
* **customParameters**: ApiOAuthSettingsCustomParameters
* **identityProvider**: string
* **properties**: any
* **redirectUrl**: string
* **scopes**: string[]

## ApiOAuthSettingsCustomParameters
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
* **properties**: GeneralApiInformationProperties
* **tags**: ResourceTags
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
* **properties**: ApiPoliciesProperties
* **tags**: ResourceTags
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
* **Additional Properties Type**: ParameterCustomLoginSettingValues

## ParameterCustomLoginSettingValues
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: ParameterCustomLoginSettingValuesProperties
* **tags**: ResourceTags
* **type**: string

## ParameterCustomLoginSettingValuesProperties
### Properties
* **customParameters**: ParameterCustomLoginSettingValuesPropertiesCustomParameters

## ParameterCustomLoginSettingValuesPropertiesCustomParameters
### Properties
### Additional Properties
* **Additional Properties Type**: CustomLoginSettingValue

## CustomLoginSettingValue
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: CustomLoginSettingValueProperties
* **tags**: ResourceTags
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
* **properties**: ConnectionStatusProperties
* **tags**: ResourceTags
* **type**: string

## ConnectionStatusProperties
### Properties
* **error**: ConnectionError
* **status**: string
* **target**: string

## ConnectionError
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: ConnectionErrorProperties
* **tags**: ResourceTags
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

