# Microsoft.ApiManagement @ 2016-07-07

## Resource Microsoft.ApiManagement/service@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiManagementServiceProperties
* **sku**: ApiManagementServiceSkuProperties
* **tags**: ApiManagementServiceBaseParametersTags
* **type**: 'Microsoft.ApiManagement/service' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/apis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
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
* **authorizationMethods**: array
* **bearerTokenSendingMethods**: array
* **clientAuthenticationMethod**: array
* **clientId**: string (Required)
* **clientRegistrationEndpoint**: string (Required)
* **clientSecret**: string
* **defaultScope**: string
* **description**: string
* **grantTypes**: array (Required)
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
* **host**: string (Required)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **skipCertificateChainValidation**: bool
* **type**: 'Microsoft.ApiManagement/service/backends' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/certificates@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/groups@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
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
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'aad' | 'facebook' | 'google' | 'microsoft' | 'twitter' (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/identityProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/loggers@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **credentials**: LoggerCreateParametersCredentials (Required)
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
* **description**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **subscriptionRequired**: bool
* **subscriptionsLimit**: int
* **terms**: string
* **type**: 'Microsoft.ApiManagement/service/products' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/properties@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
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
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **primaryKey**: string
* **productId**: string (Required)
* **secondaryKey**: string
* **type**: 'Microsoft.ApiManagement/service/subscriptions' (ReadOnly, DeployTimeConstant)
* **userId**: string (Required)

## Resource Microsoft.ApiManagement/service/users@2016-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-07-07' (ReadOnly, DeployTimeConstant)
* **email**: string (Required)
* **firstName**: string (Required)
* **id**: string (ReadOnly, DeployTimeConstant)
* **lastName**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **note**: string
* **type**: 'Microsoft.ApiManagement/service/users' (ReadOnly, DeployTimeConstant)

## ApiManagementServiceProperties
### Properties
* **additionalLocations**: AdditionalRegion[]
* **addresserEmail**: string
* **createdAtUtc**: string (ReadOnly)
* **customProperties**: ApiManagementServicePropertiesCustomProperties
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

## AdditionalRegion
### Properties
* **location**: string (Required)
* **skuUnitCount**: int
* **staticIPs**: string[] (ReadOnly)
* **vpnconfiguration**: VirtualNetworkConfiguration

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
* **certificate**: CertificateInformation (Required)
* **hostname**: string (Required)

## CertificateInformation
### Properties
* **expiry**: string (Required)
* **subject**: string (Required)
* **thumbprint**: string (Required)

## ApiManagementServiceSkuProperties
### Properties
* **capacity**: int

## ApiManagementServiceBaseParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## LoggerCreateParametersCredentials
### Properties
### Additional Properties
* **Additional Properties Type**: string

