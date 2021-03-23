# Microsoft.ApiManagement @ 2018-01-01

## Resource Microsoft.ApiManagement/service@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ApiManagementServiceIdentity](#apimanagementserviceidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiManagementServiceProperties](#apimanagementserviceproperties) (Required)
* **sku**: [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties) (Required)
* **tags**: [ApimResourceTags](#apimresourcetags)
* **type**: 'Microsoft.ApiManagement/service' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/api-version-sets@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiVersionSetContractProperties](#apiversionsetcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/api-version-sets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **link**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiCreateOrUpdateProperties](#apicreateorupdateproperties) (WriteOnly)
* **type**: 'Microsoft.ApiManagement/service/apis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/diagnostics@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiagnosticContractProperties](#diagnosticcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/diagnostics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/diagnostics/loggers@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/apis/diagnostics/loggers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/issues@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IssueContractProperties](#issuecontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/issues' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/issues/attachments@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IssueAttachmentContractProperties](#issueattachmentcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/issues/attachments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/issues/comments@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IssueCommentContractProperties](#issuecommentcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/issues/comments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OperationContractProperties](#operationcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/operations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations/policies@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'policy' (Required, DeployTimeConstant)
* **properties**: [PolicyContractProperties](#policycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/operations/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations/tags@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/apis/operations/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/policies@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'policy' (Required, DeployTimeConstant)
* **properties**: [PolicyContractProperties](#policycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/releases@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiReleaseContractProperties](#apireleasecontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/releases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/schemas@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SchemaContractProperties](#schemacontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/schemas' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/tagDescriptions@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagDescriptionBaseProperties](#tagdescriptionbaseproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/tagDescriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/tags@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/apis/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/authorizationServers@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationServerContractProperties](#authorizationservercontractproperties)
* **type**: 'Microsoft.ApiManagement/service/authorizationServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/backends@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackendContractProperties](#backendcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/backends' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/certificates@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties)
* **type**: 'Microsoft.ApiManagement/service/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/diagnostics@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiagnosticContractProperties](#diagnosticcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/diagnostics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/diagnostics/loggers@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/diagnostics/loggers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/groups@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GroupCreateParametersProperties](#groupcreateparametersproperties)
* **type**: 'Microsoft.ApiManagement/service/groups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/groups/users@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/groups/users' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/identityProviders@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter' (Required, DeployTimeConstant)
* **properties**: [IdentityProviderContractProperties](#identityprovidercontractproperties)
* **type**: 'Microsoft.ApiManagement/service/identityProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/loggers@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LoggerContractProperties](#loggercontractproperties)
* **type**: 'Microsoft.ApiManagement/service/loggers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/notifications@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'AccountClosedPublisher' | 'BCC' | 'NewApplicationNotificationMessage' | 'NewIssuePublisherNotificationMessage' | 'PurchasePublisherNotificationMessage' | 'QuotaLimitApproachingPublisherNotificationMessage' | 'RequestPublisherNotificationMessage' (Required, DeployTimeConstant)
* **properties**: [NotificationContractProperties](#notificationcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/notifications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/notifications/recipientEmails@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/notifications/recipientEmails' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/notifications/recipientUsers@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/notifications/recipientUsers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/openidConnectProviders@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OpenidConnectProviderContractProperties](#openidconnectprovidercontractproperties)
* **type**: 'Microsoft.ApiManagement/service/openidConnectProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/policies@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'policy' (Required, DeployTimeConstant)
* **properties**: [PolicyContractProperties](#policycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/portalsettings@2018-01-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.ApiManagement/service/portalsettings
#### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'delegation' (Required, DeployTimeConstant)
* **properties**: [PortalDelegationSettingsProperties](#portaldelegationsettingsproperties)
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant)

### Microsoft.ApiManagement/service/portalsettings
#### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'signin' (Required, DeployTimeConstant)
* **properties**: [PortalSigninSettingProperties](#portalsigninsettingproperties)
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant)

### Microsoft.ApiManagement/service/portalsettings
#### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'signup' (Required, DeployTimeConstant)
* **properties**: [PortalSignupSettingsProperties](#portalsignupsettingsproperties)
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant)


## Resource Microsoft.ApiManagement/service/products@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProductContractProperties](#productcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/products' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/apis@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/products/apis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/groups@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/products/groups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/policies@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'policy' (Required, DeployTimeConstant)
* **properties**: [PolicyContractProperties](#policycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/products/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/tags@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/products/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/properties@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PropertyContractProperties](#propertycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/properties' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/subscriptions@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SubscriptionCreateParameterProperties](#subscriptioncreateparameterproperties)
* **type**: 'Microsoft.ApiManagement/service/subscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/tags@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagContractProperties](#tagcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/templates@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'accountClosedDeveloper' | 'applicationApprovedNotificationMessage' | 'confirmSignUpIdentityDefault' | 'emailChangeIdentityDefault' | 'inviteUserNotificationMessage' | 'newCommentNotificationMessage' | 'newDeveloperNotificationMessage' | 'newIssueNotificationMessage' | 'passwordResetByAdminNotificationMessage' | 'passwordResetIdentityDefault' | 'purchaseDeveloperNotificationMessage' | 'quotaLimitApproachingDeveloperNotificationMessage' | 'rejectDeveloperNotificationMessage' | 'requestDeveloperNotificationMessage' (Required, DeployTimeConstant)
* **properties**: [EmailTemplateUpdateParameterProperties](#emailtemplateupdateparameterproperties)
* **type**: 'Microsoft.ApiManagement/service/templates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/users@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [UserCreateParameterProperties](#usercreateparameterproperties)
* **type**: 'Microsoft.ApiManagement/service/users' (ReadOnly, DeployTimeConstant)

## ApiManagementServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned' (Required)

## ApiManagementServiceProperties
### Properties
* **additionalLocations**: [AdditionalLocation](#additionallocation)[]
* **certificates**: [CertificateConfiguration](#certificateconfiguration)[]
* **createdAtUtc**: string (ReadOnly)
* **customProperties**: [ApiManagementServiceBasePropertiesCustomProperties](#apimanagementservicebasepropertiescustomproperties)
* **gatewayRegionalUrl**: string (ReadOnly)
* **gatewayUrl**: string (ReadOnly)
* **hostnameConfigurations**: [HostnameConfiguration](#hostnameconfiguration)[]
* **managementApiUrl**: string (ReadOnly)
* **notificationSenderEmail**: string
* **portalUrl**: string (ReadOnly)
* **privateIPAddresses**: string[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **publicIPAddresses**: string[] (ReadOnly)
* **publisherEmail**: string (Required)
* **publisherName**: string (Required)
* **scmUrl**: string (ReadOnly)
* **targetProvisioningState**: string (ReadOnly)
* **virtualNetworkConfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration)
* **virtualNetworkType**: 'External' | 'Internal' | 'None'

## AdditionalLocation
### Properties
* **gatewayRegionalUrl**: string (ReadOnly)
* **location**: string (Required)
* **privateIPAddresses**: string[] (ReadOnly)
* **publicIPAddresses**: string[] (ReadOnly)
* **sku**: [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties) (Required)
* **virtualNetworkConfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration)

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
* **certificate**: [CertificateInformation](#certificateinformation)
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
* **certificate**: [CertificateInformation](#certificateinformation)
* **certificatePassword**: string
* **defaultSslBinding**: bool
* **encodedCertificate**: string
* **hostName**: string (Required)
* **keyVaultId**: string
* **negotiateClientCertificate**: bool
* **type**: 'Management' | 'Portal' | 'Proxy' | 'Scm' (Required)

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
* **apiVersionSet**: [ApiVersionSetContractDetails](#apiversionsetcontractdetails) (WriteOnly)
* **apiVersionSetId**: string (WriteOnly)
* **authenticationSettings**: [AuthenticationSettingsContract](#authenticationsettingscontract) (WriteOnly)
* **contentFormat**: 'swagger-json' | 'swagger-link-json' | 'wadl-link-json' | 'wadl-xml' | 'wsdl' | 'wsdl-link' (WriteOnly)
* **contentValue**: string (WriteOnly)
* **description**: string (WriteOnly)
* **displayName**: string (WriteOnly)
* **isCurrent**: bool (ReadOnly, WriteOnly)
* **isOnline**: bool (ReadOnly, WriteOnly)
* **path**: string (Required, WriteOnly)
* **protocols**: 'http' | 'https'[] (WriteOnly)
* **serviceUrl**: string (WriteOnly)
* **subscriptionKeyParameterNames**: [SubscriptionKeyParameterNamesContract](#subscriptionkeyparameternamescontract) (WriteOnly)
* **type**: 'http' | 'soap' (WriteOnly)
* **wsdlSelector**: [ApiCreateOrUpdatePropertiesWsdlSelector](#apicreateorupdatepropertieswsdlselector) (WriteOnly)

## ApiVersionSetContractDetails
### Properties
* **description**: string (WriteOnly)
* **id**: string (WriteOnly)
* **versionHeaderName**: string (WriteOnly)
* **versioningScheme**: 'Header' | 'Query' | 'Segment' (WriteOnly)
* **versionQueryName**: string (WriteOnly)

## AuthenticationSettingsContract
### Properties
* **oAuth2**: [OAuth2AuthenticationSettingsContract](#oauth2authenticationsettingscontract) (WriteOnly)
* **openid**: [OpenIdAuthenticationSettingsContract](#openidauthenticationsettingscontract) (WriteOnly)
* **subscriptionKeyRequired**: bool (WriteOnly)

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

## DiagnosticContractProperties
### Properties
* **enabled**: bool (Required)

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
* **request**: [RequestContract](#requestcontract)
* **responses**: [ResponseContract](#responsecontract)[]
* **templateParameters**: [ParameterContract](#parametercontract)[]
* **urlTemplate**: string (Required)

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
* **formParameters**: [ParameterContract](#parametercontract)[]
* **sample**: string
* **schemaId**: string
* **typeName**: string

## ResponseContract
### Properties
* **description**: string
* **headers**: [ParameterContract](#parametercontract)[]
* **representations**: [RepresentationContract](#representationcontract)[]
* **statusCode**: int (Required)

## PolicyContractProperties
### Properties
* **contentFormat**: 'rawxml' | 'rawxml-link' | 'xml' | 'xml-link'
* **policyContent**: string (Required)

## TagContractProperties
### Properties
* **displayName**: string (Required)

## ApiReleaseContractProperties
### Properties
* **apiId**: string
* **createdDateTime**: string (ReadOnly)
* **notes**: string
* **updatedDateTime**: string (ReadOnly)

## SchemaContractProperties
### Properties
* **contentType**: string (Required)
* **document**: [SchemaDocumentProperties](#schemadocumentproperties)

## SchemaDocumentProperties
### Properties
* **value**: string

## TagDescriptionBaseProperties
### Properties
* **description**: string
* **displayName**: string (ReadOnly)
* **externalDocsDescription**: string
* **externalDocsUrl**: string

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
* **tokenBodyParameters**: [TokenBodyParameterContract](#tokenbodyparametercontract)[]
* **tokenEndpoint**: string

## TokenBodyParameterContract
### Properties
* **name**: string (Required)
* **value**: string (Required)

## BackendContractProperties
### Properties
* **credentials**: [BackendCredentialsContract](#backendcredentialscontract)
* **description**: string
* **properties**: [BackendProperties](#backendproperties)
* **protocol**: 'http' | 'soap' (Required)
* **proxy**: [BackendProxyContract](#backendproxycontract)
* **resourceId**: string
* **title**: string
* **tls**: [BackendTlsProperties](#backendtlsproperties)
* **url**: string (Required)

## BackendCredentialsContract
### Properties
* **authorization**: [BackendAuthorizationHeaderCredentials](#backendauthorizationheadercredentials)
* **certificate**: string[]
* **header**: [BackendCredentialsContractHeader](#backendcredentialscontractheader)
* **query**: [BackendCredentialsContractQuery](#backendcredentialscontractquery)

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
* **serviceFabricCluster**: [BackendServiceFabricClusterProperties](#backendservicefabricclusterproperties)

## BackendServiceFabricClusterProperties
### Properties
* **clientCertificatethumbprint**: string (Required)
* **managementEndpoints**: string[] (Required)
* **maxPartitionResolutionRetries**: int
* **serverCertificateThumbprints**: string[]
* **serverX509Names**: [X509CertificateName](#x509certificatename)[]

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

## CertificateCreateOrUpdateProperties
### Properties
* **data**: string (Required, WriteOnly)
* **expirationDate**: string (ReadOnly)
* **password**: string (Required, WriteOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)

## GroupCreateParametersProperties
### Properties
* **builtIn**: bool (ReadOnly)
* **description**: string
* **displayName**: string (Required)
* **externalId**: string
* **type**: 'custom' | 'external' | 'system'

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

## LoggerContractProperties
### Properties
* **credentials**: [LoggerContractPropertiesCredentials](#loggercontractpropertiescredentials) (Required)
* **description**: string
* **isBuffered**: bool
* **loggerType**: 'applicationInsights' | 'azureEventHub' (Required)

## LoggerContractPropertiesCredentials
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NotificationContractProperties
### Properties
* **description**: string (ReadOnly)
* **recipients**: [RecipientsContractProperties](#recipientscontractproperties) (ReadOnly)
* **title**: string (ReadOnly)

## RecipientsContractProperties
### Properties
* **emails**: string[] (ReadOnly)
* **users**: string[] (ReadOnly)

## OpenidConnectProviderContractProperties
### Properties
* **clientId**: string (Required)
* **clientSecret**: string
* **description**: string
* **displayName**: string (Required)
* **metadataEndpoint**: string (Required)

## Microsoft.ApiManagement/service/portalsettings
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'delegation' (Required, DeployTimeConstant)
* **properties**: [PortalDelegationSettingsProperties](#portaldelegationsettingsproperties)
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant)

## PortalDelegationSettingsProperties
### Properties
* **subscriptions**: [SubscriptionsDelegationSettingsProperties](#subscriptionsdelegationsettingsproperties)
* **url**: string
* **userRegistration**: [RegistrationDelegationSettingsProperties](#registrationdelegationsettingsproperties)
* **validationKey**: string

## SubscriptionsDelegationSettingsProperties
### Properties
* **enabled**: bool

## RegistrationDelegationSettingsProperties
### Properties
* **enabled**: bool

## Microsoft.ApiManagement/service/portalsettings
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'signin' (Required, DeployTimeConstant)
* **properties**: [PortalSigninSettingProperties](#portalsigninsettingproperties)
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant)

## PortalSigninSettingProperties
### Properties
* **enabled**: bool

## Microsoft.ApiManagement/service/portalsettings
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'signup' (Required, DeployTimeConstant)
* **properties**: [PortalSignupSettingsProperties](#portalsignupsettingsproperties)
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant)

## PortalSignupSettingsProperties
### Properties
* **enabled**: bool
* **termsOfService**: [TermsOfServiceProperties](#termsofserviceproperties)

## TermsOfServiceProperties
### Properties
* **consentRequired**: bool
* **enabled**: bool
* **text**: string

## ProductContractProperties
### Properties
* **approvalRequired**: bool
* **description**: string
* **displayName**: string (Required)
* **state**: 'notPublished' | 'published'
* **subscriptionRequired**: bool
* **subscriptionsLimit**: int
* **terms**: string

## PropertyContractProperties
### Properties
* **displayName**: string (Required)
* **secret**: bool
* **tags**: string[]
* **value**: string (Required)

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

## EmailTemplateUpdateParameterProperties
### Properties
* **body**: string
* **description**: string
* **isDefault**: bool (ReadOnly)
* **parameters**: [EmailTemplateParametersContractProperties](#emailtemplateparameterscontractproperties)[]
* **subject**: string
* **title**: string

## EmailTemplateParametersContractProperties
### Properties
* **description**: string
* **name**: string
* **title**: string

## UserCreateParameterProperties
### Properties
* **confirmation**: 'invite' | 'signup' (WriteOnly)
* **email**: string (Required)
* **firstName**: string (Required)
* **groups**: [GroupContractProperties](#groupcontractproperties)[] (ReadOnly)
* **identities**: [UserIdentityContract](#useridentitycontract)[]
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

