# Microsoft.ApiManagement @ 2020-06-01-preview

## Resource Microsoft.ApiManagement/service@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ApiManagementServiceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiManagementServiceProperties (Required)
* **sku**: ApiManagementServiceSkuProperties (Required)
* **tags**: ApimResourceTags
* **type**: 'Microsoft.ApiManagement/service' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.ApiManagement/service/apiVersionSets@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiVersionSetContractProperties
* **type**: 'Microsoft.ApiManagement/service/apiVersionSets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **exportResultFormat**: 'openapi-link' | 'swagger-link-json' | 'wadl-link-json' | 'wsdl-link+xml' (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiCreateOrUpdateProperties (WriteOnly)
* **type**: 'Microsoft.ApiManagement/service/apis' (ReadOnly, DeployTimeConstant)
* **value**: ApiExportResultValue (ReadOnly)

## Resource Microsoft.ApiManagement/service/apis/diagnostics@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiagnosticContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/diagnostics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/issues@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IssueContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/issues' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/issues/attachments@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IssueAttachmentContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/issues/attachments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/issues/comments@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IssueCommentContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/issues/comments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OperationContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/operations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations/policies@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'policy' (Required, DeployTimeConstant)
* **properties**: PolicyContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/operations/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/policies@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'policy' (Required, DeployTimeConstant)
* **properties**: PolicyContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/releases@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiReleaseContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/releases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/schemas@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SchemaContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/schemas' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/tagDescriptions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TagDescriptionBaseProperties
* **type**: 'Microsoft.ApiManagement/service/apis/tagDescriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/authorizationServers@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationServerContractProperties
* **type**: 'Microsoft.ApiManagement/service/authorizationServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/backends@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BackendContractProperties
* **type**: 'Microsoft.ApiManagement/service/backends' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/caches@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CacheContractProperties
* **type**: 'Microsoft.ApiManagement/service/caches' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/certificates@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateCreateOrUpdateProperties
* **type**: 'Microsoft.ApiManagement/service/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/diagnostics@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiagnosticContractProperties
* **type**: 'Microsoft.ApiManagement/service/diagnostics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/gateways@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GatewayContractProperties
* **type**: 'Microsoft.ApiManagement/service/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/gateways/apis@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AssociationContractProperties (WriteOnly)
* **type**: 'Microsoft.ApiManagement/service/gateways/apis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/gateways/certificateAuthorities@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GatewayCertificateAuthorityContractProperties
* **type**: 'Microsoft.ApiManagement/service/gateways/certificateAuthorities' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/gateways/hostnameConfigurations@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GatewayHostnameConfigurationContractProperties
* **type**: 'Microsoft.ApiManagement/service/gateways/hostnameConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/groups@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GroupCreateParametersProperties
* **type**: 'Microsoft.ApiManagement/service/groups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/identityProviders@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter' (Required, DeployTimeConstant)
* **properties**: IdentityProviderCreateContractProperties
* **type**: 'Microsoft.ApiManagement/service/identityProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/loggers@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LoggerContractProperties
* **type**: 'Microsoft.ApiManagement/service/loggers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/namedValues@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NamedValueCreateContractProperties
* **type**: 'Microsoft.ApiManagement/service/namedValues' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/openidConnectProviders@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OpenidConnectProviderContractProperties
* **type**: 'Microsoft.ApiManagement/service/openidConnectProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/policies@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'policy' (Required, DeployTimeConstant)
* **properties**: PolicyContractProperties
* **type**: 'Microsoft.ApiManagement/service/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/portalRevisions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PortalRevisionContractProperties
* **type**: 'Microsoft.ApiManagement/service/portalRevisions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProductContractProperties
* **type**: 'Microsoft.ApiManagement/service/products' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/policies@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'policy' (Required, DeployTimeConstant)
* **properties**: PolicyContractProperties
* **type**: 'Microsoft.ApiManagement/service/products/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/subscriptions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SubscriptionCreateParameterProperties
* **type**: 'Microsoft.ApiManagement/service/subscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/tags@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TagContractProperties
* **type**: 'Microsoft.ApiManagement/service/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/templates@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'accountClosedDeveloper' | 'applicationApprovedNotificationMessage' | 'confirmSignUpIdentityDefault' | 'emailChangeIdentityDefault' | 'inviteUserNotificationMessage' | 'newCommentNotificationMessage' | 'newDeveloperNotificationMessage' | 'newIssueNotificationMessage' | 'passwordResetByAdminNotificationMessage' | 'passwordResetIdentityDefault' | 'purchaseDeveloperNotificationMessage' | 'quotaLimitApproachingDeveloperNotificationMessage' | 'rejectDeveloperNotificationMessage' | 'requestDeveloperNotificationMessage' (Required, DeployTimeConstant)
* **properties**: EmailTemplateUpdateParameterProperties
* **type**: 'Microsoft.ApiManagement/service/templates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/tenant@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'access' | 'getAccess' (Required, DeployTimeConstant)
* **properties**: AccessInformationCreateParameterProperties
* **type**: 'Microsoft.ApiManagement/service/tenant' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/users@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: UserCreateParameterProperties
* **type**: 'Microsoft.ApiManagement/service/users' (ReadOnly, DeployTimeConstant)

## ApiManagementServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: ApiManagementServiceIdentityUserAssignedIdentities

## ApiManagementServiceIdentityUserAssignedIdentities
### Properties
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
* **customProperties**: ApiManagementServiceBasePropertiesCustomProperties
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

## ApiManagementServiceBasePropertiesCustomProperties
### Properties
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

## ApimResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiVersionSetContractProperties
### Properties
* **description**: string
* **displayName**: string (Required)
* **versionHeaderName**: string
* **versioningScheme**: 'Header' | 'Query' | 'Segment' (Required)
* **versionQueryName**: string

## ApiCreateOrUpdateProperties
### Properties
* **apiRevision**: string (WriteOnly)
* **apiRevisionDescription**: string (WriteOnly)
* **apiType**: 'http' | 'soap' (WriteOnly)
* **apiVersion**: string (WriteOnly)
* **apiVersionDescription**: string (WriteOnly)
* **apiVersionSet**: ApiVersionSetContractDetails (WriteOnly)
* **apiVersionSetId**: string (WriteOnly)
* **authenticationSettings**: AuthenticationSettingsContract (WriteOnly)
* **description**: string (WriteOnly)
* **displayName**: string (WriteOnly)
* **format**: 'openapi' | 'openapi+json' | 'openapi+json-link' | 'openapi-link' | 'swagger-json' | 'swagger-link-json' | 'wadl-link-json' | 'wadl-xml' | 'wsdl' | 'wsdl-link' (WriteOnly)
* **isCurrent**: bool (WriteOnly)
* **isOnline**: bool (ReadOnly, WriteOnly)
* **path**: string (Required, WriteOnly)
* **protocols**: array (WriteOnly)
* **serviceUrl**: string (WriteOnly)
* **soapApiType**: 'http' | 'soap' (WriteOnly)
* **sourceApiId**: string (WriteOnly)
* **subscriptionKeyParameterNames**: SubscriptionKeyParameterNamesContract (WriteOnly)
* **subscriptionRequired**: bool (WriteOnly)
* **value**: string (WriteOnly)
* **wsdlSelector**: ApiCreateOrUpdatePropertiesWsdlSelector (WriteOnly)

## ApiVersionSetContractDetails
### Properties
* **description**: string (WriteOnly)
* **id**: string (WriteOnly)
* **name**: string (WriteOnly)
* **versionHeaderName**: string (WriteOnly)
* **versioningScheme**: 'Header' | 'Query' | 'Segment' (WriteOnly)
* **versionQueryName**: string (WriteOnly)

## AuthenticationSettingsContract
### Properties
* **oAuth2**: OAuth2AuthenticationSettingsContract (WriteOnly)
* **openid**: OpenIdAuthenticationSettingsContract (WriteOnly)

## OAuth2AuthenticationSettingsContract
### Properties
* **authorizationServerId**: string (WriteOnly)
* **scope**: string (WriteOnly)

## OpenIdAuthenticationSettingsContract
### Properties
* **bearerTokenSendingMethods**: 'authorizationHeader' | 'query'[] (WriteOnly)
* **openidProviderId**: string (WriteOnly)

## SubscriptionKeyParameterNamesContract
### Properties
* **header**: string (WriteOnly)
* **query**: string (WriteOnly)

## ApiCreateOrUpdatePropertiesWsdlSelector
### Properties
* **wsdlEndpointName**: string (WriteOnly)
* **wsdlServiceName**: string (WriteOnly)

## ApiExportResultValue
### Properties
* **link**: string (ReadOnly)

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

## IssueContractProperties
### Properties
* **apiId**: string
* **createdDate**: string
* **description**: string (Required)
* **state**: 'closed' | 'open' | 'proposed' | 'removed' | 'resolved'
* **title**: string (Required)
* **userId**: string (Required)

## IssueAttachmentContractProperties
### Properties
* **content**: string (Required)
* **contentFormat**: string (Required)
* **title**: string (Required)

## IssueCommentContractProperties
### Properties
* **createdDate**: string
* **text**: string (Required)
* **userId**: string (Required)

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

## PolicyContractProperties
### Properties
* **format**: 'rawxml' | 'rawxml-link' | 'xml' | 'xml-link'
* **value**: string (Required)

## ApiReleaseContractProperties
### Properties
* **apiId**: string
* **createdDateTime**: string (ReadOnly)
* **notes**: string
* **updatedDateTime**: string (ReadOnly)

## SchemaContractProperties
### Properties
* **contentType**: string (Required)
* **document**: SchemaDocumentProperties

## SchemaDocumentProperties
### Properties
* **value**: string

## TagDescriptionBaseProperties
### Properties
* **description**: string
* **displayName**: string (ReadOnly)
* **externalDocsDescription**: string
* **externalDocsUrl**: string
* **tagId**: string (ReadOnly)

## AuthorizationServerContractProperties
### Properties
* **authorizationEndpoint**: string (Required)
* **authorizationMethods**: array
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
* **certificateIds**: string[]
* **header**: BackendCredentialsContractHeader
* **query**: BackendCredentialsContractQuery

## BackendAuthorizationHeaderCredentials
### Properties
* **parameter**: string (Required)
* **scheme**: string (Required)

## BackendCredentialsContractHeader
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## BackendCredentialsContractQuery
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## BackendProperties
### Properties
* **serviceFabricCluster**: BackendServiceFabricClusterProperties

## BackendServiceFabricClusterProperties
### Properties
* **clientCertificateId**: string
* **clientCertificatethumbprint**: string
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

## CacheContractProperties
### Properties
* **connectionString**: string (Required)
* **description**: string
* **resourceId**: string
* **useFromLocation**: string (Required)

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

## AssociationContractProperties
### Properties

## GatewayCertificateAuthorityContractProperties
### Properties
* **isTrusted**: bool

## GatewayHostnameConfigurationContractProperties
### Properties
* **certificateId**: string
* **hostname**: string
* **http2Enabled**: bool
* **negotiateClientCertificate**: bool
* **tls10Enabled**: bool
* **tls11Enabled**: bool

## GroupCreateParametersProperties
### Properties
* **builtIn**: bool (ReadOnly)
* **description**: string
* **displayName**: string (Required)
* **externalId**: string

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

## LoggerContractProperties
### Properties
* **credentials**: LoggerContractPropertiesCredentials
* **description**: string
* **isBuffered**: bool
* **loggerType**: 'applicationInsights' | 'azureEventHub' | 'azureMonitor' (Required)
* **resourceId**: string

## LoggerContractPropertiesCredentials
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NamedValueCreateContractProperties
### Properties
* **displayName**: string (Required)
* **keyVault**: KeyVaultContractCreateProperties
* **secret**: bool
* **tags**: string[]
* **value**: string

## OpenidConnectProviderContractProperties
### Properties
* **clientId**: string (Required)
* **clientSecret**: string
* **description**: string
* **displayName**: string (Required)
* **metadataEndpoint**: string (Required)

## PortalRevisionContractProperties
### Properties
* **createdDateTime**: string (ReadOnly)
* **description**: string
* **isCurrent**: bool
* **status**: 'completed' | 'failed' | 'pending' | 'publishing' (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **updatedDateTime**: string (ReadOnly)

## ProductContractProperties
### Properties
* **approvalRequired**: bool
* **description**: string
* **displayName**: string (Required)
* **subscriptionRequired**: bool
* **subscriptionsLimit**: int
* **terms**: string

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
* **stateComment**: string (ReadOnly)

## TagContractProperties
### Properties
* **displayName**: string (Required)

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

## AccessInformationCreateParameterProperties
### Properties
* **enabled**: bool
* **id**: string (ReadOnly)
* **primaryKey**: string (WriteOnly)
* **principalId**: string
* **secondaryKey**: string (WriteOnly)

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

## UserIdentityContract
### Properties
* **id**: string
* **provider**: string

