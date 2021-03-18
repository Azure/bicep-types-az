# Microsoft.ApiManagement @ 2019-12-01

## Resource Microsoft.ApiManagement/service@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ApiManagementServiceIdentity](#apimanagementserviceidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiManagementServiceProperties](#apimanagementserviceproperties) (Required)
* **sku**: [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties) (Required)
* **tags**: [ApimResourceTags](#apimresourcetags)
* **type**: 'Microsoft.ApiManagement/service' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **format**: 'openapi-link' | 'swagger-link-json' | 'wadl-link-json' | 'wsdl-link+xml' (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiCreateOrUpdateProperties](#apicreateorupdateproperties) (WriteOnly)
* **type**: 'Microsoft.ApiManagement/service/apis' (ReadOnly, DeployTimeConstant)
* **value**: [ApiExportResultValue](#apiexportresultvalue) (ReadOnly)

## Resource Microsoft.ApiManagement/service/apis/diagnostics@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiagnosticContractProperties](#diagnosticcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/diagnostics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/issues@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IssueContractProperties](#issuecontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/issues' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/issues/attachments@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IssueAttachmentContractProperties](#issueattachmentcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/issues/attachments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/issues/comments@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IssueCommentContractProperties](#issuecommentcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/issues/comments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OperationContractProperties](#operationcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/operations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations/policies@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'policy' (Required, DeployTimeConstant)
* **properties**: [PolicyContractProperties](#policycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/operations/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations/tags@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/apis/operations/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/policies@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'policy' (Required, DeployTimeConstant)
* **properties**: [PolicyContractProperties](#policycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/releases@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiReleaseContractProperties](#apireleasecontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/releases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/schemas@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SchemaContractProperties](#schemacontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/schemas' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/tagDescriptions@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagDescriptionBaseProperties](#tagdescriptionbaseproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/tagDescriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/tags@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/apis/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apiVersionSets@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiVersionSetContractProperties](#apiversionsetcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apiVersionSets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/authorizationServers@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationServerContractProperties](#authorizationservercontractproperties)
* **type**: 'Microsoft.ApiManagement/service/authorizationServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/backends@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackendContractProperties](#backendcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/backends' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/caches@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CacheContractProperties](#cachecontractproperties)
* **type**: 'Microsoft.ApiManagement/service/caches' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/certificates@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties)
* **type**: 'Microsoft.ApiManagement/service/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/contentTypes@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ContentTypeContractProperties](#contenttypecontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/contentTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/contentTypes/contentItems@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ContentItemContractProperties](#contentitemcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/contentTypes/contentItems' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/diagnostics@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiagnosticContractProperties](#diagnosticcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/diagnostics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/gateways@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GatewayContractProperties](#gatewaycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/gateways/apis@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AssociationContractProperties](#associationcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/gateways/apis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/gateways/hostnameConfigurations@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GatewayHostnameConfigurationContractProperties](#gatewayhostnameconfigurationcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/gateways/hostnameConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/groups@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GroupCreateParametersProperties](#groupcreateparametersproperties)
* **type**: 'Microsoft.ApiManagement/service/groups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/groups/users@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/groups/users' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/identityProviders@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter' (Required, DeployTimeConstant)
* **properties**: [IdentityProviderCreateContractProperties](#identityprovidercreatecontractproperties)
* **type**: 'Microsoft.ApiManagement/service/identityProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/loggers@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LoggerContractProperties](#loggercontractproperties)
* **type**: 'Microsoft.ApiManagement/service/loggers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/namedValues@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NamedValueCreateContractProperties](#namedvaluecreatecontractproperties)
* **type**: 'Microsoft.ApiManagement/service/namedValues' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/notifications@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'AccountClosedPublisher' | 'BCC' | 'NewApplicationNotificationMessage' | 'NewIssuePublisherNotificationMessage' | 'PurchasePublisherNotificationMessage' | 'QuotaLimitApproachingPublisherNotificationMessage' | 'RequestPublisherNotificationMessage' (Required, DeployTimeConstant)
* **properties**: [NotificationContractProperties](#notificationcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/notifications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/notifications/recipientEmails@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/notifications/recipientEmails' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/notifications/recipientUsers@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/notifications/recipientUsers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/openidConnectProviders@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OpenidConnectProviderContractProperties](#openidconnectprovidercontractproperties)
* **type**: 'Microsoft.ApiManagement/service/openidConnectProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/policies@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'policy' (Required, DeployTimeConstant)
* **properties**: [PolicyContractProperties](#policycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProductContractProperties](#productcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/products' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/apis@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/products/apis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/groups@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/products/groups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/policies@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'policy' (Required, DeployTimeConstant)
* **properties**: [PolicyContractProperties](#policycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/products/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/tags@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/products/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/subscriptions@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SubscriptionCreateParameterProperties](#subscriptioncreateparameterproperties)
* **type**: 'Microsoft.ApiManagement/service/subscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/tags@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagContractProperties](#tagcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/templates@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'accountClosedDeveloper' | 'applicationApprovedNotificationMessage' | 'confirmSignUpIdentityDefault' | 'emailChangeIdentityDefault' | 'inviteUserNotificationMessage' | 'newCommentNotificationMessage' | 'newDeveloperNotificationMessage' | 'newIssueNotificationMessage' | 'passwordResetByAdminNotificationMessage' | 'passwordResetIdentityDefault' | 'purchaseDeveloperNotificationMessage' | 'quotaLimitApproachingDeveloperNotificationMessage' | 'rejectDeveloperNotificationMessage' | 'requestDeveloperNotificationMessage' (Required, DeployTimeConstant)
* **properties**: [EmailTemplateUpdateParameterProperties](#emailtemplateupdateparameterproperties)
* **type**: 'Microsoft.ApiManagement/service/templates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/users@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [UserCreateParameterProperties](#usercreateparameterproperties)
* **type**: 'Microsoft.ApiManagement/service/users' (ReadOnly, DeployTimeConstant)

## ApiManagementServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: [ApiManagementServiceIdentityUserAssignedIdentities](#apimanagementserviceidentityuserassignedidentities)

## ApiManagementServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## UserIdentityProperties
### Properties
* **clientId**: string
* **principalId**: string

## ApiManagementServiceProperties
### Properties
* **additionalLocations**: [AdditionalLocation](#additionallocation)[]
* **apiVersionConstraint**: [ApiVersionConstraint](#apiversionconstraint)
* **certificates**: [CertificateConfiguration](#certificateconfiguration)[]
* **createdAtUtc**: string (ReadOnly)
* **customProperties**: [ApiManagementServiceBasePropertiesCustomProperties](#apimanagementservicebasepropertiescustomproperties)
* **developerPortalUrl**: string (ReadOnly)
* **disableGateway**: bool
* **enableClientCertificate**: bool
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
* **disableGateway**: bool
* **gatewayRegionalUrl**: string (ReadOnly)
* **location**: string (Required)
* **privateIPAddresses**: string[] (ReadOnly)
* **publicIPAddresses**: string[] (ReadOnly)
* **sku**: [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties) (Required)
* **virtualNetworkConfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration)

## ApiManagementServiceSkuProperties
### Properties
* **capacity**: int (Required)
* **name**: 'Basic' | 'Consumption' | 'Developer' | 'Premium' | 'Standard' (Required)

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
* **type**: 'DeveloperPortal' | 'Management' | 'Portal' | 'Proxy' | 'Scm' (Required)

## ApimResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **description**: string (WriteOnly)
* **displayName**: string (WriteOnly)
* **format**: 'openapi' | 'openapi+json' | 'openapi+json-link' | 'openapi-link' | 'swagger-json' | 'swagger-link-json' | 'wadl-link-json' | 'wadl-xml' | 'wsdl' | 'wsdl-link' (WriteOnly)
* **isCurrent**: bool (WriteOnly)
* **isOnline**: bool (ReadOnly, WriteOnly)
* **path**: string (Required, WriteOnly)
* **protocols**: 'http' | 'https'[] (WriteOnly)
* **serviceUrl**: string (WriteOnly)
* **sourceApiId**: string (WriteOnly)
* **subscriptionKeyParameterNames**: [SubscriptionKeyParameterNamesContract](#subscriptionkeyparameternamescontract) (WriteOnly)
* **subscriptionRequired**: bool (WriteOnly)
* **type**: 'http' | 'soap' (WriteOnly)
* **value**: string (WriteOnly)
* **wsdlSelector**: [ApiCreateOrUpdatePropertiesWsdlSelector](#apicreateorupdatepropertieswsdlselector) (WriteOnly)

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
* **oAuth2**: [OAuth2AuthenticationSettingsContract](#oauth2authenticationsettingscontract) (WriteOnly)
* **openid**: [OpenIdAuthenticationSettingsContract](#openidauthenticationsettingscontract) (WriteOnly)

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
* **backend**: [PipelineDiagnosticSettings](#pipelinediagnosticsettings)
* **frontend**: [PipelineDiagnosticSettings](#pipelinediagnosticsettings)
* **httpCorrelationProtocol**: 'Legacy' | 'None' | 'W3C'
* **logClientIp**: bool
* **loggerId**: string (Required)
* **sampling**: [SamplingSettings](#samplingsettings)
* **verbosity**: 'error' | 'information' | 'verbose'

## PipelineDiagnosticSettings
### Properties
* **request**: [HttpMessageDiagnostic](#httpmessagediagnostic)
* **response**: [HttpMessageDiagnostic](#httpmessagediagnostic)

## HttpMessageDiagnostic
### Properties
* **body**: [BodyDiagnosticSettings](#bodydiagnosticsettings)
* **headers**: string[]

## BodyDiagnosticSettings
### Properties
* **bytes**: int

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
* **format**: 'rawxml' | 'rawxml-link' | 'xml' | 'xml-link'
* **value**: string (Required)

## TagContractProperties
### Properties
* **displayName**: string (ReadOnly)

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
* **definitions**: any
* **value**: string

## TagDescriptionBaseProperties
### Properties
* **description**: string
* **displayName**: string (ReadOnly)
* **externalDocsDescription**: string
* **externalDocsUrl**: string
* **tagId**: string (ReadOnly)

## ApiVersionSetContractProperties
### Properties
* **description**: string
* **displayName**: string (Required)
* **versionHeaderName**: string
* **versioningScheme**: 'Header' | 'Query' | 'Segment' (Required)
* **versionQueryName**: string

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

## CacheContractProperties
### Properties
* **connectionString**: string (Required)
* **description**: string
* **resourceId**: string

## CertificateCreateOrUpdateProperties
### Properties
* **data**: string (Required, WriteOnly)
* **expirationDate**: string (ReadOnly)
* **password**: string (Required, WriteOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)

## ContentTypeContractProperties
### Properties
* **description**: string (ReadOnly)
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **schema**: any (ReadOnly)
* **version**: string (ReadOnly)

## ContentItemContractProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## GatewayContractProperties
### Properties
* **description**: string
* **locationData**: [ResourceLocationDataContract](#resourcelocationdatacontract)

## ResourceLocationDataContract
### Properties
* **city**: string
* **countryOrRegion**: string
* **district**: string
* **name**: string (Required)

## AssociationContractProperties
### Properties
* **provisioningState**: 'created'

## GatewayHostnameConfigurationContractProperties
### Properties
* **certificateId**: string
* **hostname**: string
* **negotiateClientCertificate**: bool

## GroupCreateParametersProperties
### Properties
* **builtIn**: bool (ReadOnly)
* **description**: string
* **displayName**: string (Required)
* **externalId**: string
* **type**: 'custom' | 'external' | 'system'

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
* **credentials**: [LoggerContractPropertiesCredentials](#loggercontractpropertiescredentials) (Required)
* **description**: string
* **isBuffered**: bool
* **loggerType**: 'applicationInsights' | 'azureEventHub' (Required)
* **resourceId**: string

## LoggerContractPropertiesCredentials
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NamedValueCreateContractProperties
### Properties
* **displayName**: string (Required)
* **secret**: bool
* **tags**: string[]
* **value**: string (Required)

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

## ProductContractProperties
### Properties
* **approvalRequired**: bool
* **description**: string
* **displayName**: string (Required)
* **state**: 'notPublished' | 'published'
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
* **state**: 'active' | 'cancelled' | 'expired' | 'rejected' | 'submitted' | 'suspended'
* **stateComment**: string (ReadOnly)

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
* **appType**: 'developerPortal' | 'portal' (WriteOnly)
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

