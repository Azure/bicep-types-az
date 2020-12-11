# Microsoft.ApiManagement @ 2017-03-01

## Microsoft.ApiManagement/service
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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

## ApiManagementServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string (Required)

## ApiManagementServiceProperties
### Properties
* **additionalLocations**: AdditionalLocation[]
* **certificates**: CertificateConfiguration[]
* **createdAtUtc**: string (ReadOnly)
* **customProperties**: Dictionary<string,String>
* **gatewayRegionalUrl**: string (ReadOnly)
* **gatewayUrl**: string (ReadOnly)
* **hostnameConfigurations**: HostnameConfiguration[]
* **managementApiUrl**: string (ReadOnly)
* **notificationSenderEmail**: string
* **portalUrl**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **publisherEmail**: string (Required)
* **publisherName**: string (Required)
* **scmUrl**: string (ReadOnly)
* **staticIps**: string[] (ReadOnly)
* **targetProvisioningState**: string (ReadOnly)
* **virtualNetworkConfiguration**: VirtualNetworkConfiguration
* **virtualNetworkType**: 'External' | 'Internal' | 'None'

## AdditionalLocation
### Properties
* **gatewayRegionalUrl**: string (ReadOnly)
* **location**: string (Required)
* **sku**: ApiManagementServiceSkuProperties (Required)
* **staticIps**: string[] (ReadOnly)
* **virtualNetworkConfiguration**: VirtualNetworkConfiguration

## ApiManagementServiceSkuProperties
### Properties
* **capacity**: int
* **name**: 'Basic' | 'Developer' | 'Premium' | 'Standard' (Required)

## VirtualNetworkConfiguration
### Properties
* **subnetname**: string (ReadOnly)
* **subnetResourceId**: string
* **vnetid**: string (ReadOnly)

## CertificateConfiguration
### Properties
* **certificate**: CertificateInformation (ReadOnly)
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
* **certificate**: CertificateInformation (ReadOnly)
* **certificatePassword**: string
* **defaultSslBinding**: bool
* **encodedCertificate**: string
* **hostName**: string (Required)
* **keyVaultId**: string
* **negotiateClientCertificate**: bool
* **type**: 'Management' | 'Portal' | 'Proxy' | 'Scm' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.ApiManagement/service/api-version-sets
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiVersionSetContractProperties
* **type**: 'Microsoft.ApiManagement/service/api-version-sets' (ReadOnly, DeployTimeConstant)

## ApiVersionSetContractProperties
### Properties
* **description**: string
* **displayName**: string (Required)
* **versionHeaderName**: string
* **versioningScheme**: 'Header' | 'Query' | 'Segment' (Required)
* **versionQueryName**: string

## Microsoft.ApiManagement/service/apis
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiCreateOrUpdateProperties
* **type**: 'Microsoft.ApiManagement/service/apis' (ReadOnly, DeployTimeConstant)

## ApiCreateOrUpdateProperties
### Properties
* **apiRevision**: string
* **apiVersion**: string
* **apiVersionSet**: ApiVersionSetContract
* **apiVersionSetId**: string
* **authenticationSettings**: AuthenticationSettingsContract
* **contentFormat**: 'swagger-json' | 'swagger-link-json' | 'wadl-link-json' | 'wadl-xml' | 'wsdl-link' | 'wsdl' (WriteOnly)
* **contentValue**: string (WriteOnly)
* **description**: string
* **displayName**: string
* **isCurrent**: bool (ReadOnly)
* **isOnline**: bool (ReadOnly)
* **path**: string (Required)
* **protocols**: 'http' | 'https'[]
* **serviceUrl**: string
* **subscriptionKeyParameterNames**: SubscriptionKeyParameterNamesContract
* **type**: 'http' | 'soap'
* **wsdlSelector**: schemas:14_wsdlSelector (WriteOnly)

## ApiVersionSetContract
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: ApiVersionSetContractProperties
* **type**: string (ReadOnly)

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

## schemas:14_wsdlSelector
### Properties
* **wsdlEndpointName**: string (WriteOnly)
* **wsdlServiceName**: string (WriteOnly)

## Microsoft.ApiManagement/service/apis/diagnostics
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiagnosticContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/diagnostics' (ReadOnly, DeployTimeConstant)

## DiagnosticContractProperties
### Properties
* **enabled**: bool (Required)

## Microsoft.ApiManagement/service/apis/issues
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/operations/policies' (ReadOnly, DeployTimeConstant)

## PolicyContractProperties
### Properties
* **policyContent**: string (Required)

## Microsoft.ApiManagement/service/apis/policies
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyContractProperties
* **type**: 'Microsoft.ApiManagement/service/apis/policies' (ReadOnly, DeployTimeConstant)

## Microsoft.ApiManagement/service/apis/releases
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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
* **value**: string

## Microsoft.ApiManagement/service/apis/tagDescriptions
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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

## Microsoft.ApiManagement/service/authorizationServers
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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

## Microsoft.ApiManagement/service/certificates
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateCreateOrUpdateProperties
* **type**: 'Microsoft.ApiManagement/service/certificates' (ReadOnly, DeployTimeConstant)

## CertificateCreateOrUpdateProperties
### Properties
* **data**: string (Required, WriteOnly)
* **expirationDate**: string (ReadOnly)
* **password**: string (Required, WriteOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)

## Microsoft.ApiManagement/service/diagnostics
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiagnosticContractProperties
* **type**: 'Microsoft.ApiManagement/service/diagnostics' (ReadOnly, DeployTimeConstant)

## Microsoft.ApiManagement/service/groups
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter' (Required, DeployTimeConstant)
* **properties**: IdentityProviderContractProperties
* **type**: 'Microsoft.ApiManagement/service/identityProviders' (ReadOnly, DeployTimeConstant)

## IdentityProviderContractProperties
### Properties
* **allowedTenants**: string[]
* **clientId**: string (Required)
* **clientSecret**: string (Required)
* **passwordResetPolicyName**: string
* **profileEditingPolicyName**: string
* **signinPolicyName**: string
* **signupPolicyName**: string
* **type**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter'

## Microsoft.ApiManagement/service/loggers
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LoggerContractProperties
* **type**: 'Microsoft.ApiManagement/service/loggers' (ReadOnly, DeployTimeConstant)

## LoggerContractProperties
### Properties
* **credentials**: Dictionary<string,String> (Required)
* **description**: string
* **isBuffered**: bool
* **loggerType**: 'applicationInsights' | 'azureEventHub' (Required)
* **sampling**: LoggerSamplingContract

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## LoggerSamplingContract
### Properties
* **properties**: LoggerSamplingProperties

## LoggerSamplingProperties
### Properties
* **evaluationInterval**: string
* **initialPercentage**: int
* **maxPercentage**: int
* **maxTelemetryItemsPerSecond**: int
* **minPercentage**: int
* **movingAverageRatio**: int
* **percentage**: int
* **percentageDecreaseTimeout**: string
* **percentageIncreaseTimeout**: string
* **samplingType**: 'adaptive' | 'fixed'

## Microsoft.ApiManagement/service/openidConnectProviders
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyContractProperties
* **type**: 'Microsoft.ApiManagement/service/policies' (ReadOnly, DeployTimeConstant)

## Microsoft.ApiManagement/service/products
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyContractProperties
* **type**: 'Microsoft.ApiManagement/service/products/policies' (ReadOnly, DeployTimeConstant)

## Microsoft.ApiManagement/service/properties
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PropertyContractProperties
* **type**: 'Microsoft.ApiManagement/service/properties' (ReadOnly, DeployTimeConstant)

## PropertyContractProperties
### Properties
* **displayName**: string (Required)
* **secret**: bool
* **tags**: string[]
* **value**: string (Required)

## Microsoft.ApiManagement/service/subscriptions
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SubscriptionCreateParameterProperties
* **type**: 'Microsoft.ApiManagement/service/subscriptions' (ReadOnly, DeployTimeConstant)

## SubscriptionCreateParameterProperties
### Properties
* **createdDate**: string (ReadOnly)
* **displayName**: string (Required)
* **endDate**: string (ReadOnly)
* **expirationDate**: string (ReadOnly)
* **notificationDate**: string (ReadOnly)
* **primaryKey**: string
* **productId**: string (Required)
* **secondaryKey**: string
* **startDate**: string (ReadOnly)
* **state**: 'active' | 'cancelled' | 'expired' | 'rejected' | 'submitted' | 'suspended'
* **stateComment**: string (ReadOnly)
* **userId**: string (Required)

## Microsoft.ApiManagement/service/tags
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: UserCreateParameterProperties
* **type**: 'Microsoft.ApiManagement/service/users' (ReadOnly, DeployTimeConstant)

## UserCreateParameterProperties
### Properties
* **confirmation**: 'invite' | 'signup' (WriteOnly)
* **email**: string (Required)
* **firstName**: string (Required)
* **groups**: GroupContract[] (ReadOnly)
* **identities**: UserIdentityContract[] (ReadOnly)
* **lastName**: string (Required)
* **note**: string
* **password**: string (WriteOnly)
* **registrationDate**: string (ReadOnly)
* **state**: 'active' | 'blocked' | 'deleted' | 'pending'

## GroupContract
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: GroupContractProperties (ReadOnly)
* **type**: string (ReadOnly)

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

