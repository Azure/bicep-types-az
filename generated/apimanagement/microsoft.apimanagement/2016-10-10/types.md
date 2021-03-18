# Microsoft.ApiManagement @ 2016-10-10

## Resource Microsoft.ApiManagement/service@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiManagementServiceProperties](#apimanagementserviceproperties) (Required)
* **sku**: [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.ApiManagement/service' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **authenticationSettings**: [AuthenticationSettingsContract](#authenticationsettingscontract) (WriteOnly)
* **content**: any (ReadOnly)
* **description**: string (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **path**: string (Required, WriteOnly)
* **protocols**: 'Http' | 'Https'[] (Required, WriteOnly)
* **requestId**: string (ReadOnly)
* **serviceUrl**: string (Required, WriteOnly)
* **statusCode**: 'Accepted' | 'Conflict' | 'Continue' | 'Created' | 'NotFound' | 'OK' (ReadOnly)
* **subscriptionKeyParameterNames**: [SubscriptionKeyParameterNamesContract](#subscriptionkeyparameternamescontract) (WriteOnly)
* **type**: 'Microsoft.ApiManagement/service/apis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **description**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **method**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **request**: [RequestContract](#requestcontract)
* **responses**: [ResultContract](#resultcontract)[]
* **templateParameters**: [ParameterContract](#parametercontract)[]
* **type**: 'Microsoft.ApiManagement/service/apis/operations' (ReadOnly, DeployTimeConstant)
* **urlTemplate**: string (Required)

## Resource Microsoft.ApiManagement/service/authorizationServers@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **authorizationEndpoint**: string (Required)
* **authorizationMethods**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE'[]
* **bearerTokenSendingMethods**: 'authorizationHeader' | 'query'[]
* **clientAuthenticationMethod**: 'Basic' | 'Body'[]
* **clientId**: string (Required)
* **clientRegistrationEndpoint**: string (Required)
* **clientSecret**: string
* **defaultScope**: string
* **description**: string
* **grantTypes**: 'authorizationCode' | 'clientCredentials' | 'implicit' | 'resourceOwnerPassword'[] (Required)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **resourceOwnerPassword**: string
* **resourceOwnerUsername**: string
* **supportState**: bool
* **tokenBodyParameters**: [TokenBodyParameterContract](#tokenbodyparametercontract)[]
* **tokenEndpoint**: string
* **type**: 'Microsoft.ApiManagement/service/authorizationServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/backends@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **certificate**: string[]
* **description**: string
* **header**: [BackendCredentialsContractHeader](#backendcredentialscontractheader)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **parameter**: string (Required)
* **password**: string
* **properties**: [BackendProperties](#backendproperties)
* **protocol**: 'http' | 'soap' (Required)
* **query**: [BackendCredentialsContractQuery](#backendcredentialscontractquery)
* **resourceId**: string
* **scheme**: string (Required)
* **title**: string
* **type**: 'Microsoft.ApiManagement/service/backends' (ReadOnly, DeployTimeConstant)
* **url**: string (Required)
* **username**: string

## Resource Microsoft.ApiManagement/service/certificates@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **data**: string (Required, WriteOnly)
* **expirationDate**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **password**: string (Required, WriteOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/groups@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **builtIn**: bool (ReadOnly)
* **description**: string
* **externalId**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/groups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/groups/users@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/groups/users' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/identityProviders@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allowedTenants**: string[]
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **clientId**: string (Required)
* **clientSecret**: string (Required)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter' (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/identityProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/loggers@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **credentials**: [LoggerCreateParametersCredentials](#loggercreateparameterscredentials) (Required)
* **description**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **isBuffered**: bool
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/loggers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/openidConnectProviders@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **clientId**: string (Required)
* **clientSecret**: string
* **description**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **metadataEndpoint**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/openidConnectProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **approvalRequired**: bool
* **description**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **state**: 'NotPublished' | 'Published'
* **subscriptionRequired**: bool
* **subscriptionsLimit**: int
* **terms**: string
* **type**: 'Microsoft.ApiManagement/service/products' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/apis@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/products/apis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/groups@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/products/groups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/properties@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **secret**: bool
* **tags**: string[]
* **type**: 'Microsoft.ApiManagement/service/properties' (ReadOnly, DeployTimeConstant)
* **value**: string (Required)

## Resource Microsoft.ApiManagement/service/subscriptions@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **createdDate**: string (ReadOnly)
* **endDate**: string (ReadOnly)
* **expirationDate**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **notificationDate**: string (ReadOnly)
* **primaryKey**: string
* **productId**: string (Required)
* **secondaryKey**: string
* **startDate**: string (ReadOnly)
* **state**: 'Active' | 'Cancelled' | 'Expired' | 'Rejected' | 'Submitted' | 'Suspended'
* **stateComment**: string (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/subscriptions' (ReadOnly, DeployTimeConstant)
* **userId**: string (Required)

## Resource Microsoft.ApiManagement/service/tenant@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/tenant' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/users@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant)
* **email**: string (Required)
* **firstName**: string (Required)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identities**: [UserIdentityContract](#useridentitycontract)[] (ReadOnly)
* **lastName**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **note**: string
* **password**: string (Required, WriteOnly)
* **registrationDate**: string (ReadOnly)
* **state**: 'Active' | 'Blocked'
* **type**: 'Microsoft.ApiManagement/service/users' (ReadOnly, DeployTimeConstant)

## ApiManagementServiceProperties
### Properties
* **additionalLocations**: [AdditionalRegion](#additionalregion)[]
* **addresserEmail**: string
* **createdAtUtc**: string (ReadOnly)
* **customProperties**: [ApiManagementServicePropertiesCustomProperties](#apimanagementservicepropertiescustomproperties)
* **hostnameConfigurations**: [HostnameConfiguration](#hostnameconfiguration)[]
* **managementApiUrl**: string (ReadOnly)
* **portalUrl**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **publisherEmail**: string (Required)
* **publisherName**: string (Required)
* **runtimeUrl**: string (ReadOnly)
* **scmUrl**: string (ReadOnly)
* **staticIPs**: string[] (ReadOnly)
* **targetProvisioningState**: string (ReadOnly)
* **vpnconfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration)
* **vpnType**: 'External' | 'Internal' | 'None'

## AdditionalRegion
### Properties
* **location**: string (Required)
* **skuType**: 'Developer' | 'Premium' | 'Standard' (Required)
* **skuUnitCount**: int
* **staticIPs**: string[] (ReadOnly)
* **vpnconfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration)

## VirtualNetworkConfiguration
### Properties
* **location**: string
* **subnetname**: string (ReadOnly)
* **subnetResourceId**: string
* **vnetid**: string (ReadOnly)

## ApiManagementServicePropertiesCustomProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HostnameConfiguration
### Properties
* **certificate**: [CertificateInformation](#certificateinformation) (Required)
* **hostname**: string (Required)
* **type**: 'Management' | 'Portal' | 'Proxy' | 'Scm' (Required)

## CertificateInformation
### Properties
* **expiry**: string (Required)
* **subject**: string (Required)
* **thumbprint**: string (Required)

## ApiManagementServiceSkuProperties
### Properties
* **capacity**: int
* **name**: 'Developer' | 'Premium' | 'Standard' (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AuthenticationSettingsContract
### Properties
* **oAuth2**: [OAuth2AuthenticationSettingsContract](#oauth2authenticationsettingscontract) (WriteOnly)

## OAuth2AuthenticationSettingsContract
### Properties
* **authorizationServerId**: string (WriteOnly)
* **scope**: string (WriteOnly)

## SubscriptionKeyParameterNamesContract
### Properties
* **header**: string (WriteOnly)
* **query**: string (WriteOnly)

## RequestContract
### Properties
* **description**: string
* **headers**: [ParameterContract](#parametercontract)[]
* **queryParameters**: [ParameterContract](#parametercontract)[]
* **representations**: [RepresentationContract](#representationcontract)[]

## ParameterContract
### Properties
* **defaultValue**: string
* **description**: string
* **name**: string (Required)
* **required**: bool
* **type**: string (Required)
* **values**: string[]

## RepresentationContract
### Properties
* **contentType**: string (Required)
* **sample**: string

## ResultContract
### Properties
* **description**: string
* **representations**: [RepresentationContract](#representationcontract)[]
* **statusCode**: int (Required)

## TokenBodyParameterContract
### Properties
* **name**: string (Required)
* **value**: string (Required)

## BackendCredentialsContractHeader
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## BackendProperties
### Properties
* **skipCertificateChainValidation**: bool
* **skipCertificateNameValidation**: bool

## BackendCredentialsContractQuery
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## LoggerCreateParametersCredentials
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserIdentityContract
### Properties
* **id**: string (ReadOnly)
* **provider**: string (ReadOnly)

