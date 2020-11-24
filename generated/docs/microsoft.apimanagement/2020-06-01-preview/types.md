# Microsoft.ApiManagement @ 2020-06-01-preview

## Microsoft.ApiManagement/service
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ApiManagementServiceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiManagementServiceProperties (Required)
* **sku**: ApiManagementServiceSkuProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ApiManagement/service' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## ApiManagementServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: Dictionary<string,UserIdentityProperties>

## Dictionary<string,UserIdentityProperties>
### Additional Properties
* **Additional Properties Type**: UserIdentityProperties

## UserIdentityProperties
### Properties
* **clientId**: string
* **principalId**: string

## ApiManagementServiceProperties
### Properties
* **additionalLocations**: AdditionalLocation[]
* **apiVersionConstraint**: ApiVersionConstraint
* **certificates**: CertificateConfiguration[]
* **createdAtUtc**: string (ReadOnly)
* **customProperties**: Dictionary<string,String>
* **developerPortalUrl**: string (ReadOnly)
* **disableGateway**: bool
* **enableClientCertificate**: bool
* **gatewayRegionalUrl**: string (ReadOnly)
* **gatewayUrl**: string (ReadOnly)
* **hostnameConfigurations**: HostnameConfiguration[]
* **managementApiUrl**: string (ReadOnly)
* **notificationSenderEmail**: string
* **portalUrl**: string (ReadOnly)
* **privateIPAddresses**: string[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **publicIPAddresses**: string[] (ReadOnly)
* **publisherEmail**: string (Required)
* **publisherName**: string (Required)
* **restore**: bool
* **scmUrl**: string (ReadOnly)
* **targetProvisioningState**: string (ReadOnly)
* **virtualNetworkConfiguration**: VirtualNetworkConfiguration
* **virtualNetworkType**: 'External' | 'Internal' | 'None'

## AdditionalLocation
### Properties
* **disableGateway**: bool
* **gatewayRegionalUrl**: string (ReadOnly)
* **location**: string (Required)
* **privateIPAddresses**: string[] (ReadOnly)
* **publicIPAddresses**: string[] (ReadOnly)
* **sku**: ApiManagementServiceSkuProperties (Required)
* **virtualNetworkConfiguration**: VirtualNetworkConfiguration
* **zones**: string[]

## ApiManagementServiceSkuProperties
### Properties
* **capacity**: int (Required)
* **name**: 'Basic' | 'Consumption' | 'Developer' | 'Isolated' | 'Premium' | 'Standard' (Required)

## VirtualNetworkConfiguration
### Properties
* **subnetname**: string (ReadOnly)
* **subnetResourceId**: string
* **vnetid**: string (ReadOnly)

## ApiVersionConstraint
### Properties
* **minApiVersion**: string

## CertificateConfiguration
### Properties
* **certificate**: CertificateInformation
* **certificatePassword**: string
* **encodedCertificate**: string
* **storeName**: 'CertificateAuthority' | 'Root' (Required)

## CertificateInformation
### Properties
* **expiry**: string (Required)
* **subject**: string (Required)
* **thumbprint**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## HostnameConfiguration
### Properties
* **certificate**: CertificateInformation
* **certificatePassword**: string
* **defaultSslBinding**: bool
* **encodedCertificate**: string
* **hostName**: string (Required)
* **identityClientId**: string
* **keyVaultId**: string
* **negotiateClientCertificate**: bool
* **type**: 'DeveloperPortal' | 'Management' | 'Portal' | 'Proxy' | 'Scm' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.ApiManagement/service/apis
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiCreateOrUpdateProperties
* **type**: 'Microsoft.ApiManagement/service/apis' (ReadOnly, DeployTimeConstant)

## ApiCreateOrUpdateProperties
### Properties
* **apiRevision**: string
* **apiRevisionDescription**: string
* **apiType**: 'http' | 'soap' (WriteOnly)
* **apiVersion**: string
* **apiVersionDescription**: string
* **apiVersionSet**: ApiVersionSetContractDetails
* **apiVersionSetId**: string
* **authenticationSettings**: AuthenticationSettingsContract
* **description**: string
* **displayName**: string
* **format**: 'openapi-link' | 'openapi' | 'openapi+json-link' | 'openapi+json' | 'swagger-json' | 'swagger-link-json' | 'wadl-link-json' | 'wadl-xml' | 'wsdl-link' | 'wsdl' (WriteOnly)
* **isCurrent**: bool
* **isOnline**: bool (ReadOnly)
* **path**: string (Required)
* **protocols**: 'http' | 'https'[]
* **serviceUrl**: string
* **sourceApiId**: string
* **subscriptionKeyParameterNames**: SubscriptionKeyParameterNamesContract
* **subscriptionRequired**: bool
* **type**: 'http' | 'soap'
* **value**: string (WriteOnly)
* **wsdlSelector**: schemas:43_wsdlSelector (WriteOnly)

## ApiVersionSetContractDetails
### Properties
* **description**: string
* **id**: string
* **name**: string
* **versionHeaderName**: string
* **versioningScheme**: 'Header' | 'Query' | 'Segment'
* **versionQueryName**: string

## AuthenticationSettingsContract
### Properties
* **oAuth2**: OAuth2AuthenticationSettingsContract
* **openid**: OpenIdAuthenticationSettingsContract

## OAuth2AuthenticationSettingsContract
### Properties
* **authorizationServerId**: string
* **scope**: string

## OpenIdAuthenticationSettingsContract
### Properties
* **bearerTokenSendingMethods**: 'authorizationHeader' | 'query'[]
* **openidProviderId**: string

## SubscriptionKeyParameterNamesContract
### Properties
* **header**: string
* **query**: string

## schemas:43_wsdlSelector
### Properties
* **wsdlEndpointName**: string (WriteOnly)
* **wsdlServiceName**: string (WriteOnly)

## Microsoft.ApiManagement/service/apis/diagnostics
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiagnosticContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/diagnostics' (ReadOnly, DeployTimeConstant)

## DiagnosticContractProperties
### Properties
* **alwaysLog**: 'allErrors'
* **backend**: PipelineDiagnosticSettings
* **frontend**: PipelineDiagnosticSettings
* **httpCorrelationProtocol**: 'Legacy' | 'None' | 'W3C'
* **logClientIp**: bool
* **loggerId**: string (Required)
* **operationNameFormat**: 'Name' | 'Url'
* **sampling**: SamplingSettings
* **verbosity**: 'error' | 'information' | 'verbose'

## PipelineDiagnosticSettings
### Properties
* **request**: HttpMessageDiagnostic
* **response**: HttpMessageDiagnostic

## HttpMessageDiagnostic
### Properties
* **body**: BodyDiagnosticSettings
* **dataMasking**: DataMasking
* **headers**: string[]

## BodyDiagnosticSettings
### Properties
* **bytes**: int

## DataMasking
### Properties
* **headers**: DataMaskingEntity[]
* **queryParams**: DataMaskingEntity[]

## DataMaskingEntity
### Properties
* **mode**: 'Hide' | 'Mask'
* **value**: string

## SamplingSettings
### Properties
* **percentage**: int
* **samplingType**: 'fixed'

## Microsoft.ApiManagement/service/apis/issues
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IssueContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/issues' (ReadOnly, DeployTimeConstant)

## IssueContractProperties
### Properties
* **apiId**: string
* **createdDate**: string
* **description**: string (Required)
* **state**: 'closed' | 'open' | 'proposed' | 'removed' | 'resolved'
* **title**: string (Required)
* **userId**: string (Required)

## Microsoft.ApiManagement/service/apis/issues/attachments
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IssueAttachmentContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/issues/attachments' (ReadOnly, DeployTimeConstant)

## IssueAttachmentContractProperties
### Properties
* **content**: string (Required)
* **contentFormat**: string (Required)
* **title**: string (Required)

## Microsoft.ApiManagement/service/apis/issues/comments
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IssueCommentContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/issues/comments' (ReadOnly, DeployTimeConstant)

## IssueCommentContractProperties
### Properties
* **createdDate**: string
* **text**: string (Required)
* **userId**: string (Required)

## Microsoft.ApiManagement/service/apis/operations
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OperationContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/operations' (ReadOnly, DeployTimeConstant)

## OperationContractProperties
### Properties
* **description**: string
* **displayName**: string (Required)
* **method**: string (Required)
* **policies**: string
* **request**: RequestContract
* **responses**: ResponseContract[]
* **templateParameters**: ParameterContract[]
* **urlTemplate**: string (Required)

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
* **formParameters**: ParameterContract[]
* **sample**: string
* **schemaId**: string
* **typeName**: string

## ResponseContract
### Properties
* **description**: string
* **headers**: ParameterContract[]
* **representations**: RepresentationContract[]
* **statusCode**: int (Required)

## Microsoft.ApiManagement/service/apis/operations/policies
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/operations/policies' (ReadOnly, DeployTimeConstant)

## PolicyContractProperties
### Properties
* **format**: 'rawxml-link' | 'rawxml' | 'xml-link' | 'xml'
* **value**: string (Required)

## Microsoft.ApiManagement/service/apis/policies
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/policies' (ReadOnly, DeployTimeConstant)

## Microsoft.ApiManagement/service/apis/releases
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiReleaseContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/releases' (ReadOnly, DeployTimeConstant)

## ApiReleaseContractProperties
### Properties
* **apiId**: string
* **createdDateTime**: string (ReadOnly)
* **notes**: string
* **updatedDateTime**: string (ReadOnly)

## Microsoft.ApiManagement/service/apis/schemas
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SchemaContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/schemas' (ReadOnly, DeployTimeConstant)

## SchemaContractProperties
### Properties
* **contentType**: string (Required)
* **document**: SchemaDocumentProperties

## SchemaDocumentProperties
### Properties
* **definitions**: any
* **value**: string

## Microsoft.ApiManagement/service/apis/tagDescriptions
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TagDescriptionBaseProperties
* **type**: 'Microsoft.ApiManagement/service/apis/tagDescriptions' (ReadOnly, DeployTimeConstant)

## TagDescriptionBaseProperties
### Properties
* **description**: string
* **displayName**: string (ReadOnly)
* **externalDocsDescription**: string
* **externalDocsUrl**: string
* **tagId**: string (ReadOnly)

## Microsoft.ApiManagement/service/apiVersionSets
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiVersionSetContractProperties
* **type**: 'Microsoft.ApiManagement/service/apiVersionSets' (ReadOnly, DeployTimeConstant)

## ApiVersionSetContractProperties
### Properties
* **description**: string
* **displayName**: string (Required)
* **versionHeaderName**: string
* **versioningScheme**: 'Header' | 'Query' | 'Segment' (Required)
* **versionQueryName**: string

## Microsoft.ApiManagement/service/authorizationServers
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationServerContractProperties
* **type**: 'Microsoft.ApiManagement/service/authorizationServers' (ReadOnly, DeployTimeConstant)

## AuthorizationServerContractProperties
### Properties
* **authorizationEndpoint**: string (Required)
* **authorizationMethods**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE'[]
* **bearerTokenSendingMethods**: 'authorizationHeader' | 'query'[]
* **clientAuthenticationMethod**: 'Basic' | 'Body'[]
* **clientId**: string (Required)
* **clientRegistrationEndpoint**: string (Required)
* **clientSecret**: string
* **defaultScope**: string
* **description**: string
* **displayName**: string (Required)
* **grantTypes**: 'authorizationCode' | 'clientCredentials' | 'implicit' | 'resourceOwnerPassword'[] (Required)
* **resourceOwnerPassword**: string
* **resourceOwnerUsername**: string
* **supportState**: bool
* **tokenBodyParameters**: TokenBodyParameterContract[]
* **tokenEndpoint**: string

## TokenBodyParameterContract
### Properties
* **name**: string (Required)
* **value**: string (Required)

## Microsoft.ApiManagement/service/backends
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackendContractProperties
* **type**: 'Microsoft.ApiManagement/service/backends' (ReadOnly, DeployTimeConstant)

## BackendContractProperties
### Properties
* **credentials**: BackendCredentialsContract
* **description**: string
* **properties**: BackendProperties
* **protocol**: 'http' | 'soap' (Required)
* **proxy**: BackendProxyContract
* **resourceId**: string
* **title**: string
* **tls**: BackendTlsProperties
* **url**: string (Required)

## BackendCredentialsContract
### Properties
* **authorization**: BackendAuthorizationHeaderCredentials
* **certificate**: string[]
* **header**: Dictionary<string,IList<String>>
* **query**: Dictionary<string,IList<String>>

## BackendAuthorizationHeaderCredentials
### Properties
* **parameter**: string (Required)
* **scheme**: string (Required)

## Dictionary<string,IList<String>>
### Additional Properties
* **Additional Properties Type**: string[]

## Dictionary<string,IList<String>>
### Additional Properties
* **Additional Properties Type**: string[]

## BackendProperties
### Properties
* **serviceFabricCluster**: BackendServiceFabricClusterProperties

## BackendServiceFabricClusterProperties
### Properties
* **clientCertificatethumbprint**: string (Required)
* **managementEndpoints**: string[] (Required)
* **maxPartitionResolutionRetries**: int
* **serverCertificateThumbprints**: string[]
* **serverX509Names**: X509CertificateName[]

## X509CertificateName
### Properties
* **issuerCertificateThumbprint**: string
* **name**: string

## BackendProxyContract
### Properties
* **password**: string
* **url**: string (Required)
* **username**: string

## BackendTlsProperties
### Properties
* **validateCertificateChain**: bool
* **validateCertificateName**: bool

## Microsoft.ApiManagement/service/caches
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CacheContractProperties
* **type**: 'Microsoft.ApiManagement/service/caches' (ReadOnly, DeployTimeConstant)

## CacheContractProperties
### Properties
* **connectionString**: string (Required)
* **description**: string
* **resourceId**: string
* **useFromLocation**: string (Required)

## Microsoft.ApiManagement/service/certificates
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateCreateOrUpdateProperties
* **type**: 'Microsoft.ApiManagement/service/certificates' (ReadOnly, DeployTimeConstant)

## CertificateCreateOrUpdateProperties
### Properties
* **data**: string (WriteOnly)
* **expirationDate**: string (ReadOnly)
* **keyVault**: KeyVaultContractCreateProperties
* **password**: string (WriteOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)

## KeyVaultContractCreateProperties
### Properties
* **identityClientId**: string
* **lastStatus**: KeyVaultLastAccessStatusContractProperties (ReadOnly)
* **secretIdentifier**: string

## KeyVaultLastAccessStatusContractProperties
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)
* **timeStampUtc**: string (ReadOnly)

## Microsoft.ApiManagement/service/diagnostics
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiagnosticContractProperties
* **type**: 'Microsoft.ApiManagement/service/diagnostics' (ReadOnly, DeployTimeConstant)

## Microsoft.ApiManagement/service/gateways
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GatewayContractProperties
* **type**: 'Microsoft.ApiManagement/service/gateways' (ReadOnly, DeployTimeConstant)

## GatewayContractProperties
### Properties
* **description**: string
* **locationData**: ResourceLocationDataContract

## ResourceLocationDataContract
### Properties
* **city**: string
* **countryOrRegion**: string
* **district**: string
* **name**: string (Required)

## Microsoft.ApiManagement/service/gateways/apis
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:274_properties
* **type**: 'Microsoft.ApiManagement/service/gateways/apis' (ReadOnly, DeployTimeConstant)

## schemas:274_properties
### Properties
* **provisioningState**: 'created'

## Microsoft.ApiManagement/service/gateways/hostnameConfigurations
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GatewayHostnameConfigurationContractProperties
* **type**: 'Microsoft.ApiManagement/service/gateways/hostnameConfigurations' (ReadOnly, DeployTimeConstant)

## GatewayHostnameConfigurationContractProperties
### Properties
* **certificateId**: string
* **hostname**: string
* **http2Enabled**: bool
* **negotiateClientCertificate**: bool
* **tls10Enabled**: bool
* **tls11Enabled**: bool

## Microsoft.ApiManagement/service/groups
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GroupCreateParametersProperties
* **type**: 'Microsoft.ApiManagement/service/groups' (ReadOnly, DeployTimeConstant)

## GroupCreateParametersProperties
### Properties
* **builtIn**: bool (ReadOnly)
* **description**: string
* **displayName**: string (Required)
* **externalId**: string
* **type**: 'custom' | 'external' | 'system'

## Microsoft.ApiManagement/service/identityProviders
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter' (Required, DeployTimeConstant)
* **properties**: IdentityProviderCreateContractProperties
* **type**: 'Microsoft.ApiManagement/service/identityProviders' (ReadOnly, DeployTimeConstant)

## IdentityProviderCreateContractProperties
### Properties
* **allowedTenants**: string[]
* **authority**: string
* **clientId**: string (Required)
* **clientSecret**: string (Required)
* **passwordResetPolicyName**: string
* **profileEditingPolicyName**: string
* **signinPolicyName**: string
* **signinTenant**: string
* **signupPolicyName**: string
* **type**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter'

## Microsoft.ApiManagement/service/loggers
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LoggerContractProperties
* **type**: 'Microsoft.ApiManagement/service/loggers' (ReadOnly, DeployTimeConstant)

## LoggerContractProperties
### Properties
* **credentials**: Dictionary<string,String>
* **description**: string
* **isBuffered**: bool
* **loggerType**: 'applicationInsights' | 'azureEventHub' | 'azureMonitor' (Required)
* **resourceId**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.ApiManagement/service/namedValues
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NamedValueCreateContractProperties
* **type**: 'Microsoft.ApiManagement/service/namedValues' (ReadOnly, DeployTimeConstant)

## NamedValueCreateContractProperties
### Properties
* **displayName**: string (Required)
* **keyVault**: KeyVaultContractCreateProperties
* **secret**: bool
* **tags**: string[]
* **value**: string

## Microsoft.ApiManagement/service/openidConnectProviders
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OpenidConnectProviderContractProperties
* **type**: 'Microsoft.ApiManagement/service/openidConnectProviders' (ReadOnly, DeployTimeConstant)

## OpenidConnectProviderContractProperties
### Properties
* **clientId**: string (Required)
* **clientSecret**: string
* **description**: string
* **displayName**: string (Required)
* **metadataEndpoint**: string (Required)

## Microsoft.ApiManagement/service/policies
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyContractProperties
* **type**: 'Microsoft.ApiManagement/service/policies' (ReadOnly, DeployTimeConstant)

## Microsoft.ApiManagement/service/products
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProductContractProperties
* **type**: 'Microsoft.ApiManagement/service/products' (ReadOnly, DeployTimeConstant)

## ProductContractProperties
### Properties
* **approvalRequired**: bool
* **description**: string
* **displayName**: string (Required)
* **state**: 'notPublished' | 'published'
* **subscriptionRequired**: bool
* **subscriptionsLimit**: int
* **terms**: string

## Microsoft.ApiManagement/service/products/policies
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyContractProperties
* **type**: 'Microsoft.ApiManagement/service/products/policies' (ReadOnly, DeployTimeConstant)

## Microsoft.ApiManagement/service/subscriptions
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SubscriptionCreateParameterProperties
* **type**: 'Microsoft.ApiManagement/service/subscriptions' (ReadOnly, DeployTimeConstant)

## SubscriptionCreateParameterProperties
### Properties
* **allowTracing**: bool
* **createdDate**: string (ReadOnly)
* **displayName**: string (Required)
* **endDate**: string (ReadOnly)
* **expirationDate**: string (ReadOnly)
* **notificationDate**: string (ReadOnly)
* **ownerId**: string
* **primaryKey**: string
* **scope**: string (Required)
* **secondaryKey**: string
* **startDate**: string (ReadOnly)
* **state**: 'active' | 'cancelled' | 'expired' | 'rejected' | 'submitted' | 'suspended'
* **stateComment**: string (ReadOnly)

## Microsoft.ApiManagement/service/tags
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TagContractProperties
* **type**: 'Microsoft.ApiManagement/service/tags' (ReadOnly, DeployTimeConstant)

## TagContractProperties
### Properties
* **displayName**: string (Required)

## Microsoft.ApiManagement/service/templates
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'accountClosedDeveloper' | 'applicationApprovedNotificationMessage' | 'confirmSignUpIdentityDefault' | 'emailChangeIdentityDefault' | 'inviteUserNotificationMessage' | 'newCommentNotificationMessage' | 'newDeveloperNotificationMessage' | 'newIssueNotificationMessage' | 'passwordResetByAdminNotificationMessage' | 'passwordResetIdentityDefault' | 'purchaseDeveloperNotificationMessage' | 'quotaLimitApproachingDeveloperNotificationMessage' | 'rejectDeveloperNotificationMessage' | 'requestDeveloperNotificationMessage' (Required, DeployTimeConstant)
* **properties**: EmailTemplateUpdateParameterProperties
* **type**: 'Microsoft.ApiManagement/service/templates' (ReadOnly, DeployTimeConstant)

## EmailTemplateUpdateParameterProperties
### Properties
* **body**: string
* **description**: string
* **isDefault**: bool (ReadOnly)
* **parameters**: EmailTemplateParametersContractProperties[]
* **subject**: string
* **title**: string

## EmailTemplateParametersContractProperties
### Properties
* **description**: string
* **name**: string
* **title**: string

## Microsoft.ApiManagement/service/users
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: UserCreateParameterProperties
* **type**: 'Microsoft.ApiManagement/service/users' (ReadOnly, DeployTimeConstant)

## UserCreateParameterProperties
### Properties
* **appType**: 'developerPortal' | 'portal' (WriteOnly)
* **confirmation**: 'invite' | 'signup' (WriteOnly)
* **email**: string (Required)
* **firstName**: string (Required)
* **groups**: GroupContractProperties[] (ReadOnly)
* **identities**: UserIdentityContract[]
* **lastName**: string (Required)
* **note**: string
* **password**: string (WriteOnly)
* **registrationDate**: string (ReadOnly)
* **state**: 'active' | 'blocked' | 'deleted' | 'pending'

## GroupContractProperties
### Properties
* **builtIn**: bool (ReadOnly)
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **externalId**: string (ReadOnly)
* **type**: 'custom' | 'external' | 'system' (ReadOnly)

## UserIdentityContract
### Properties
* **id**: string
* **provider**: string

