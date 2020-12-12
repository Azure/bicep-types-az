# Microsoft.ApiManagement @ 2016-07-07

## Resource Microsoft.ApiManagement/service@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiManagementServiceProperties
* **sku**: ApiManagementServiceSkuProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ApiManagement/service' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **authenticationSettings**: AuthenticationSettingsContract
* **dependsOn**: resourceref[] (WriteOnly)
* **description**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **path**: string (Required)
* **protocols**: 'Http' | 'Https'[] (Required)
* **serviceUrl**: string (Required)
* **subscriptionKeyParameterNames**: SubscriptionKeyParameterNamesContract
* **type**: 'Microsoft.ApiManagement/service/apis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **description**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **method**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **request**: RequestContract
* **responses**: ResultContract[]
* **templateParameters**: ParameterContract[]
* **type**: 'Microsoft.ApiManagement/service/apis/operations' (ReadOnly, DeployTimeConstant)
* **urlTemplate**: string (Required)

## Resource Microsoft.ApiManagement/service/authorizationServers@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **authorizationEndpoint**: string (Required)
* **authorizationMethods**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE'[]
* **bearerTokenSendingMethods**: 'authorizationHeader' | 'query'[]
* **clientAuthenticationMethod**: 'Basic' | 'Body'[]
* **clientId**: string (Required)
* **clientRegistrationEndpoint**: string (Required)
* **clientSecret**: string
* **defaultScope**: string
* **dependsOn**: resourceref[] (WriteOnly)
* **description**: string
* **grantTypes**: 'authorizationCode' | 'clientCredentials' | 'implicit' | 'resourceOwnerPassword'[] (Required)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **resourceOwnerPassword**: string
* **resourceOwnerUsername**: string
* **supportState**: bool
* **tokenBodyParameters**: TokenBodyParameterContract[]
* **tokenEndpoint**: string
* **type**: 'Microsoft.ApiManagement/service/authorizationServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/backends@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **host**: string (Required)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **skipCertificateChainValidation**: bool
* **type**: 'Microsoft.ApiManagement/service/backends' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/certificates@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **data**: string (Required, WriteOnly)
* **dependsOn**: resourceref[] (WriteOnly)
* **expirationDate**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **password**: string (Required, WriteOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/groups@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **builtIn**: bool (ReadOnly)
* **dependsOn**: resourceref[] (WriteOnly)
* **description**: string
* **externalId**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/groups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/identityProviders@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allowedTenants**: string[]
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **clientId**: string (Required)
* **clientSecret**: string (Required)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'aad' | 'facebook' | 'google' | 'microsoft' | 'twitter' (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/identityProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/loggers@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **credentials**: Dictionary<string,String> (Required)
* **dependsOn**: resourceref[] (WriteOnly)
* **description**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **isBuffered**: bool
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/loggers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/openidConnectProviders@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **clientId**: string (Required)
* **clientSecret**: string
* **dependsOn**: resourceref[] (WriteOnly)
* **description**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **metadataEndpoint**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/openidConnectProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **approvalRequired**: bool
* **dependsOn**: resourceref[] (WriteOnly)
* **description**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **state**: 'NotPublished' | 'Published'
* **subscriptionRequired**: bool
* **subscriptionsLimit**: int
* **terms**: string
* **type**: 'Microsoft.ApiManagement/service/products' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/properties@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **secret**: bool
* **tags**: string[]
* **type**: 'Microsoft.ApiManagement/service/properties' (ReadOnly, DeployTimeConstant)
* **value**: string (Required)

## Resource Microsoft.ApiManagement/service/subscriptions@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **createdDate**: string (ReadOnly)
* **dependsOn**: resourceref[] (WriteOnly)
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

## Resource Microsoft.ApiManagement/service/users@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **email**: string (Required)
* **firstName**: string (Required)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identities**: UserIdentityContract[] (ReadOnly)
* **lastName**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **note**: string
* **password**: string (Required, WriteOnly)
* **registrationDate**: string (ReadOnly)
* **state**: 'Active' | 'Blocked'
* **type**: 'Microsoft.ApiManagement/service/users' (ReadOnly, DeployTimeConstant)

## ApiManagementServiceProperties
### Properties
* **additionalLocations**: AdditionalRegion[]
* **addresserEmail**: string
* **createdAtUtc**: string (ReadOnly)
* **customProperties**: Dictionary<string,String>
* **hostnameConfigurations**: HostnameConfiguration[]
* **managementApiUrl**: string (ReadOnly)
* **portalUrl**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **publisherEmail**: string (Required)
* **publisherName**: string (Required)
* **runtimeUrl**: string (ReadOnly)
* **scmUrl**: string (ReadOnly)
* **staticIPs**: string[] (ReadOnly)
* **targetProvisioningState**: string (ReadOnly)
* **vpnconfiguration**: VirtualNetworkConfiguration
* **vpnType**: 'External' | 'Internal' | 'None'

## AdditionalRegion
### Properties
* **location**: string (Required)
* **skuType**: 'Developer' | 'Premium' | 'Standard' (Required)
* **skuUnitCount**: int
* **staticIPs**: string[] (ReadOnly)
* **vpnconfiguration**: VirtualNetworkConfiguration

## VirtualNetworkConfiguration
### Properties
* **location**: string
* **subnetname**: string (ReadOnly)
* **subnetResourceId**: string
* **vnetid**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## HostnameConfiguration
### Properties
* **certificate**: CertificateInformation (Required)
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## AuthenticationSettingsContract
### Properties
* **oAuth2**: OAuth2AuthenticationSettingsContract

## OAuth2AuthenticationSettingsContract
### Properties
* **authorizationServerId**: string
* **scope**: string

## SubscriptionKeyParameterNamesContract
### Properties
* **header**: string
* **query**: string

## RequestContract
### Properties
* **description**: string
* **headers**: ParameterContract[]
* **queryParameters**: ParameterContract[]
* **representations**: RepresentationContract[]

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
* **representations**: RepresentationContract[]
* **statusCode**: int (Required)

## TokenBodyParameterContract
### Properties
* **name**: string (Required)
* **value**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## UserIdentityContract
### Properties
* **id**: string (ReadOnly)
* **provider**: string (ReadOnly)

