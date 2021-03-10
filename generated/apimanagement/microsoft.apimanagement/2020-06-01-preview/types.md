# Microsoft.ApiManagement @ 2020-06-01-preview

## Resource Microsoft.ApiManagement/service@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ApiManagementServiceIdentity](#apimanagementserviceidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiManagementServiceProperties](#apimanagementserviceproperties) (Required)
* **sku**: [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ApiManagement/service' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.ApiManagement/service/apis@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiCreateOrUpdateProperties](#apicreateorupdateproperties)
* **type**: 'Microsoft.ApiManagement/service/apis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/diagnostics@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiagnosticContractProperties](#diagnosticcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/diagnostics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/issues@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IssueContractProperties](#issuecontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/issues' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/issues/attachments@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IssueAttachmentContractProperties](#issueattachmentcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/issues/attachments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/issues/comments@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IssueCommentContractProperties](#issuecommentcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/issues/comments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OperationContractProperties](#operationcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/operations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations/policies@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyContractProperties](#policycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/operations/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/operations/tags@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/apis/operations/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/policies@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyContractProperties](#policycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/releases@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiReleaseContractProperties](#apireleasecontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/releases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/schemas@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SchemaContractProperties](#schemacontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/schemas' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/tagDescriptions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagDescriptionBaseProperties](#tagdescriptionbaseproperties)
* **type**: 'Microsoft.ApiManagement/service/apis/tagDescriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apis/tags@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/apis/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/apiVersionSets@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiVersionSetContractProperties](#apiversionsetcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/apiVersionSets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/authorizationServers@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationServerContractProperties](#authorizationservercontractproperties)
* **type**: 'Microsoft.ApiManagement/service/authorizationServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/backends@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BackendContractProperties](#backendcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/backends' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/caches@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CacheContractProperties](#cachecontractproperties)
* **type**: 'Microsoft.ApiManagement/service/caches' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/certificates@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties)
* **type**: 'Microsoft.ApiManagement/service/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/contentTypes@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ContentTypeContractProperties](#contenttypecontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/contentTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/contentTypes/contentItems@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,Object>](#dictionarystringobject) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/contentTypes/contentItems' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/diagnostics@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiagnosticContractProperties](#diagnosticcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/diagnostics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/gateways@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GatewayContractProperties](#gatewaycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/gateways/apis@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:288_properties](#schemas288properties)
* **type**: 'Microsoft.ApiManagement/service/gateways/apis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/gateways/certificateAuthorities@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GatewayCertificateAuthorityContractProperties](#gatewaycertificateauthoritycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/gateways/certificateAuthorities' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/gateways/hostnameConfigurations@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GatewayHostnameConfigurationContractProperties](#gatewayhostnameconfigurationcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/gateways/hostnameConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/groups@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GroupCreateParametersProperties](#groupcreateparametersproperties)
* **type**: 'Microsoft.ApiManagement/service/groups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/groups/users@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/groups/users' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/identityProviders@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter' (Required, DeployTimeConstant)
* **properties**: [IdentityProviderCreateContractProperties](#identityprovidercreatecontractproperties)
* **type**: 'Microsoft.ApiManagement/service/identityProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/loggers@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LoggerContractProperties](#loggercontractproperties)
* **type**: 'Microsoft.ApiManagement/service/loggers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/namedValues@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NamedValueCreateContractProperties](#namedvaluecreatecontractproperties)
* **type**: 'Microsoft.ApiManagement/service/namedValues' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/notifications@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'AccountClosedPublisher' | 'BCC' | 'NewApplicationNotificationMessage' | 'NewIssuePublisherNotificationMessage' | 'PurchasePublisherNotificationMessage' | 'QuotaLimitApproachingPublisherNotificationMessage' | 'RequestPublisherNotificationMessage' (Required, DeployTimeConstant)
* **properties**: [NotificationContractProperties](#notificationcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/notifications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/notifications/recipientEmails@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/notifications/recipientEmails' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/notifications/recipientUsers@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/notifications/recipientUsers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/openidConnectProviders@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OpenidConnectProviderContractProperties](#openidconnectprovidercontractproperties)
* **type**: 'Microsoft.ApiManagement/service/openidConnectProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/policies@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyContractProperties](#policycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/portalRevisions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PortalRevisionContractProperties](#portalrevisioncontractproperties)
* **type**: 'Microsoft.ApiManagement/service/portalRevisions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProductContractProperties](#productcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/products' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/apis@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/products/apis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/groups@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ApiManagement/service/products/groups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/policies@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyContractProperties](#policycontractproperties)
* **type**: 'Microsoft.ApiManagement/service/products/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/products/tags@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/products/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/subscriptions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SubscriptionCreateParameterProperties](#subscriptioncreateparameterproperties)
* **type**: 'Microsoft.ApiManagement/service/subscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/tags@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TagContractProperties](#tagcontractproperties)
* **type**: 'Microsoft.ApiManagement/service/tags' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/templates@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'accountClosedDeveloper' | 'applicationApprovedNotificationMessage' | 'confirmSignUpIdentityDefault' | 'emailChangeIdentityDefault' | 'inviteUserNotificationMessage' | 'newCommentNotificationMessage' | 'newDeveloperNotificationMessage' | 'newIssueNotificationMessage' | 'passwordResetByAdminNotificationMessage' | 'passwordResetIdentityDefault' | 'purchaseDeveloperNotificationMessage' | 'quotaLimitApproachingDeveloperNotificationMessage' | 'rejectDeveloperNotificationMessage' | 'requestDeveloperNotificationMessage' (Required, DeployTimeConstant)
* **properties**: [EmailTemplateUpdateParameterProperties](#emailtemplateupdateparameterproperties)
* **type**: 'Microsoft.ApiManagement/service/templates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/tenant@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'access' | 'getAccess' (Required, DeployTimeConstant)
* **properties**: [AccessInformationCreateParameterProperties](#accessinformationcreateparameterproperties)
* **type**: 'Microsoft.ApiManagement/service/tenant' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ApiManagement/service/users@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [UserCreateParameterProperties](#usercreateparameterproperties)
* **type**: 'Microsoft.ApiManagement/service/users' (ReadOnly, DeployTimeConstant)

## ApiManagementServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: [Dictionary<string,UserIdentityProperties>](#dictionarystringuseridentityproperties)

## Dictionary<string,UserIdentityProperties>
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
* **customProperties**: [Dictionary<string,String>](#dictionarystringstring)
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
* **restore**: bool
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
* **certificate**: [CertificateInformation](#certificateinformation)
* **certificatePassword**: string
* **encodedCertificate**: string
* **storeName**: 'CertificateAuthority' | 'Root' (Required)

## CertificateInformation
### Properties
* **expiry**: string (Required)
* **subject**: string (Required)
* **thumbprint**: string (Required)

## Dictionary<string,String>
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
* **identityClientId**: string
* **keyVaultId**: string
* **negotiateClientCertificate**: bool
* **type**: 'DeveloperPortal' | 'Management' | 'Portal' | 'Proxy' | 'Scm' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiCreateOrUpdateProperties
### Properties
* **apiRevision**: string
* **apiRevisionDescription**: string
* **apiType**: 'http' | 'soap' (WriteOnly)
* **apiVersion**: string
* **apiVersionDescription**: string
* **apiVersionSet**: [ApiVersionSetContractDetails](#apiversionsetcontractdetails)
* **apiVersionSetId**: string
* **authenticationSettings**: [AuthenticationSettingsContract](#authenticationsettingscontract)
* **description**: string
* **displayName**: string
* **format**: 'openapi-link' | 'openapi' | 'openapi+json-link' | 'openapi+json' | 'swagger-json' | 'swagger-link-json' | 'wadl-link-json' | 'wadl-xml' | 'wsdl-link' | 'wsdl' (WriteOnly)
* **isCurrent**: bool
* **isOnline**: bool (ReadOnly)
* **path**: string (Required)
* **protocols**: 'http' | 'https'[]
* **serviceUrl**: string
* **sourceApiId**: string
* **subscriptionKeyParameterNames**: [SubscriptionKeyParameterNamesContract](#subscriptionkeyparameternamescontract)
* **subscriptionRequired**: bool
* **type**: 'http' | 'soap'
* **value**: string (WriteOnly)
* **wsdlSelector**: [schemas:51_wsdlSelector](#schemas51wsdlselector) (WriteOnly)

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
* **oAuth2**: [OAuth2AuthenticationSettingsContract](#oauth2authenticationsettingscontract)
* **openid**: [OpenIdAuthenticationSettingsContract](#openidauthenticationsettingscontract)

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

## schemas:51_wsdlSelector
### Properties
* **wsdlEndpointName**: string (WriteOnly)
* **wsdlServiceName**: string (WriteOnly)

## DiagnosticContractProperties
### Properties
* **alwaysLog**: 'allErrors'
* **backend**: [PipelineDiagnosticSettings](#pipelinediagnosticsettings)
* **frontend**: [PipelineDiagnosticSettings](#pipelinediagnosticsettings)
* **httpCorrelationProtocol**: 'Legacy' | 'None' | 'W3C'
* **logClientIp**: bool
* **loggerId**: string (Required)
* **operationNameFormat**: 'Name' | 'Url'
* **sampling**: [SamplingSettings](#samplingsettings)
* **verbosity**: 'error' | 'information' | 'verbose'

## PipelineDiagnosticSettings
### Properties
* **request**: [HttpMessageDiagnostic](#httpmessagediagnostic)
* **response**: [HttpMessageDiagnostic](#httpmessagediagnostic)

## HttpMessageDiagnostic
### Properties
* **body**: [BodyDiagnosticSettings](#bodydiagnosticsettings)
* **dataMasking**: [DataMasking](#datamasking)
* **headers**: string[]

## BodyDiagnosticSettings
### Properties
* **bytes**: int

## DataMasking
### Properties
* **headers**: [DataMaskingEntity](#datamaskingentity)[]
* **queryParams**: [DataMaskingEntity](#datamaskingentity)[]

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
* **format**: 'rawxml-link' | 'rawxml' | 'xml-link' | 'xml'
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
* **certificateIds**: string[]
* **header**: [Dictionary<string,IList<String>>](#dictionarystringiliststring)
* **query**: [Dictionary<string,IList<String>>](#dictionarystringiliststring)

## BackendAuthorizationHeaderCredentials
### Properties
* **parameter**: string (Required)
* **scheme**: string (Required)

## Dictionary<string,IList<String>>
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## Dictionary<string,IList<String>>
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## BackendProperties
### Properties
* **serviceFabricCluster**: [BackendServiceFabricClusterProperties](#backendservicefabricclusterproperties)

## BackendServiceFabricClusterProperties
### Properties
* **clientCertificateId**: string
* **clientCertificatethumbprint**: string
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
* **useFromLocation**: string (Required)

## CertificateCreateOrUpdateProperties
### Properties
* **data**: string (WriteOnly)
* **expirationDate**: string (ReadOnly)
* **keyVault**: [KeyVaultContractCreateProperties](#keyvaultcontractcreateproperties)
* **password**: string (WriteOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)

## KeyVaultContractCreateProperties
### Properties
* **identityClientId**: string
* **lastStatus**: [KeyVaultLastAccessStatusContractProperties](#keyvaultlastaccessstatuscontractproperties) (ReadOnly)
* **secretIdentifier**: string

## KeyVaultLastAccessStatusContractProperties
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)
* **timeStampUtc**: string (ReadOnly)

## ContentTypeContractProperties
### Properties
* **description**: string (ReadOnly)
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **schema**: any (ReadOnly)
* **version**: string (ReadOnly)

## Dictionary<string,Object>
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

## schemas:288_properties
### Properties
* **provisioningState**: 'created'

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
* **credentials**: [Dictionary<string,String>](#dictionarystringstring)
* **description**: string
* **isBuffered**: bool
* **loggerType**: 'applicationInsights' | 'azureEventHub' | 'azureMonitor' (Required)
* **resourceId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NamedValueCreateContractProperties
### Properties
* **displayName**: string (Required)
* **keyVault**: [KeyVaultContractCreateProperties](#keyvaultcontractcreateproperties)
* **secret**: bool
* **tags**: string[]
* **value**: string

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

