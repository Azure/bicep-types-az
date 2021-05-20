# Microsoft.ApiManagement @ 2021-01-01-preview

## Resource Microsoft.ApiManagement/service@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ApiManagementServiceIdentity](#apimanagementserviceidentity): Identity properties of the Api Management service resource.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiManagementServiceProperties](#apimanagementserviceproperties) (Required): Properties of an API Management service resource description.
* **sku**: [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties) (Required): API Management service resource SKU properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.ApiManagement/service' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting where the resource needs to come from.

## Resource Microsoft.ApiManagement/service/apis@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiCreateOrUpdateProperties](#apicreateorupdateproperties): API Create or Update Properties.
* **type**: 'Microsoft.ApiManagement/service/apis' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/diagnostics@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticContractProperties](#diagnosticcontractproperties): Diagnostic Entity Properties
* **type**: 'Microsoft.ApiManagement/service/apis/diagnostics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/issues@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IssueContractProperties](#issuecontractproperties): Issue contract Properties.
* **type**: 'Microsoft.ApiManagement/service/apis/issues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/issues/attachments@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IssueAttachmentContractProperties](#issueattachmentcontractproperties): Issue Attachment contract Properties.
* **type**: 'Microsoft.ApiManagement/service/apis/issues/attachments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/issues/comments@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IssueCommentContractProperties](#issuecommentcontractproperties): Issue Comment contract Properties.
* **type**: 'Microsoft.ApiManagement/service/apis/issues/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/operations@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OperationContractProperties](#operationcontractproperties): Operation Contract Properties
* **type**: 'Microsoft.ApiManagement/service/apis/operations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/operations/policies@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyContractProperties](#policycontractproperties): Policy contract Properties.
* **type**: 'Microsoft.ApiManagement/service/apis/operations/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/operations/tags@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly): Tag contract Properties.
* **type**: 'Microsoft.ApiManagement/service/apis/operations/tags' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/policies@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyContractProperties](#policycontractproperties): Policy contract Properties.
* **type**: 'Microsoft.ApiManagement/service/apis/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/releases@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiReleaseContractProperties](#apireleasecontractproperties): API Release details
* **type**: 'Microsoft.ApiManagement/service/apis/releases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/schemas@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaContractProperties](#schemacontractproperties): API Schema create or update contract Properties.
* **type**: 'Microsoft.ApiManagement/service/apis/schemas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/tagDescriptions@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TagDescriptionBaseProperties](#tagdescriptionbaseproperties): Parameters supplied to the Create TagDescription operation.
* **type**: 'Microsoft.ApiManagement/service/apis/tagDescriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/tags@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly): Tag contract Properties.
* **type**: 'Microsoft.ApiManagement/service/apis/tags' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apiVersionSets@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiVersionSetContractProperties](#apiversionsetcontractproperties): Properties of an API Version Set.
* **type**: 'Microsoft.ApiManagement/service/apiVersionSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/authorizationServers@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationServerContractProperties](#authorizationservercontractproperties): External OAuth authorization server settings Properties.
* **type**: 'Microsoft.ApiManagement/service/authorizationServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/backends@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackendContractProperties](#backendcontractproperties): Parameters supplied to the Create Backend operation.
* **type**: 'Microsoft.ApiManagement/service/backends' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/caches@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CacheContractProperties](#cachecontractproperties): Properties of the Cache contract.
* **type**: 'Microsoft.ApiManagement/service/caches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/certificates@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties): Parameters supplied to the CreateOrUpdate certificate operation.
* **type**: 'Microsoft.ApiManagement/service/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/contentTypes@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContentTypeContractProperties](#contenttypecontractproperties) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/contentTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/contentTypes/contentItems@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,Object>](#dictionarystringobject) (ReadOnly)
* **type**: 'Microsoft.ApiManagement/service/contentTypes/contentItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/diagnostics@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticContractProperties](#diagnosticcontractproperties): Diagnostic Entity Properties
* **type**: 'Microsoft.ApiManagement/service/diagnostics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/gateways@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayContractProperties](#gatewaycontractproperties): Properties of the Gateway contract.
* **type**: 'Microsoft.ApiManagement/service/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/gateways/apis@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:302_properties](#schemas302properties): Association entity contract properties.
* **type**: 'Microsoft.ApiManagement/service/gateways/apis' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/gateways/certificateAuthorities@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayCertificateAuthorityContractProperties](#gatewaycertificateauthoritycontractproperties): Gateway certificate authority details.
* **type**: 'Microsoft.ApiManagement/service/gateways/certificateAuthorities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/gateways/hostnameConfigurations@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayHostnameConfigurationContractProperties](#gatewayhostnameconfigurationcontractproperties): Gateway hostname configuration details.
* **type**: 'Microsoft.ApiManagement/service/gateways/hostnameConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/groups@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GroupCreateParametersProperties](#groupcreateparametersproperties): Parameters supplied to the Create Group operation.
* **type**: 'Microsoft.ApiManagement/service/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/groups/users@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/groups/users' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/identityProviders@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter' (Required, DeployTimeConstant): The resource name
* **properties**: [IdentityProviderCreateContractProperties](#identityprovidercreatecontractproperties): The external Identity Providers like Facebook, Google, Microsoft, Twitter or Azure Active Directory which can be used to enable access to the API Management service developer portal for all users.
* **type**: 'Microsoft.ApiManagement/service/identityProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/loggers@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoggerContractProperties](#loggercontractproperties): The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.
* **type**: 'Microsoft.ApiManagement/service/loggers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/namedValues@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NamedValueCreateContractProperties](#namedvaluecreatecontractproperties): NamedValue Contract properties.
* **type**: 'Microsoft.ApiManagement/service/namedValues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/notifications@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'AccountClosedPublisher' | 'BCC' | 'NewApplicationNotificationMessage' | 'NewIssuePublisherNotificationMessage' | 'PurchasePublisherNotificationMessage' | 'QuotaLimitApproachingPublisherNotificationMessage' | 'RequestPublisherNotificationMessage' (Required, DeployTimeConstant): The resource name
* **properties**: [NotificationContractProperties](#notificationcontractproperties) (ReadOnly): Notification Contract properties.
* **type**: 'Microsoft.ApiManagement/service/notifications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/notifications/recipientEmails@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/notifications/recipientEmails' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/notifications/recipientUsers@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/notifications/recipientUsers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/openidConnectProviders@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OpenidConnectProviderContractProperties](#openidconnectprovidercontractproperties): OpenID Connect Providers Contract.
* **type**: 'Microsoft.ApiManagement/service/openidConnectProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/policies@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyContractProperties](#policycontractproperties): Policy contract Properties.
* **type**: 'Microsoft.ApiManagement/service/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/portalRevisions@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PortalRevisionContractProperties](#portalrevisioncontractproperties)
* **type**: 'Microsoft.ApiManagement/service/portalRevisions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/portalsettings@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.ApiManagement/service/portalsettings
#### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'delegation' (Required, DeployTimeConstant): The resource name
* **properties**: [PortalDelegationSettingsProperties](#portaldelegationsettingsproperties): Delegation settings contract properties.
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.ApiManagement/service/portalsettings
#### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'signin' (Required, DeployTimeConstant): The resource name
* **properties**: [PortalSigninSettingProperties](#portalsigninsettingproperties): Sign-in settings contract properties.
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.ApiManagement/service/portalsettings
#### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'signup' (Required, DeployTimeConstant): The resource name
* **properties**: [PortalSignupSettingsProperties](#portalsignupsettingsproperties): Sign-up settings contract properties.
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.ApiManagement/service/products@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductContractProperties](#productcontractproperties): Product profile.
* **type**: 'Microsoft.ApiManagement/service/products' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/products/apis@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/products/apis' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/products/groups@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/products/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/products/policies@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyContractProperties](#policycontractproperties): Policy contract Properties.
* **type**: 'Microsoft.ApiManagement/service/products/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/products/tags@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly): Tag contract Properties.
* **type**: 'Microsoft.ApiManagement/service/products/tags' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/subscriptions@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionCreateParameterProperties](#subscriptioncreateparameterproperties): Parameters supplied to the Create subscription operation.
* **type**: 'Microsoft.ApiManagement/service/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/tags@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TagContractProperties](#tagcontractproperties): Tag contract Properties.
* **type**: 'Microsoft.ApiManagement/service/tags' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/templates@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'accountClosedDeveloper' | 'applicationApprovedNotificationMessage' | 'confirmSignUpIdentityDefault' | 'emailChangeIdentityDefault' | 'inviteUserNotificationMessage' | 'newCommentNotificationMessage' | 'newDeveloperNotificationMessage' | 'newIssueNotificationMessage' | 'passwordResetByAdminNotificationMessage' | 'passwordResetIdentityDefault' | 'purchaseDeveloperNotificationMessage' | 'quotaLimitApproachingDeveloperNotificationMessage' | 'rejectDeveloperNotificationMessage' | 'requestDeveloperNotificationMessage' (Required, DeployTimeConstant): The resource name
* **properties**: [EmailTemplateUpdateParameterProperties](#emailtemplateupdateparameterproperties): Email Template Update Contract properties.
* **type**: 'Microsoft.ApiManagement/service/templates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/tenant@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'access' | 'gitAccess' (Required, DeployTimeConstant): The resource name
* **properties**: [AccessInformationCreateParameterProperties](#accessinformationcreateparameterproperties): Tenant access information update parameters of the API Management service
* **type**: 'Microsoft.ApiManagement/service/tenant' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/users@2021-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserCreateParameterProperties](#usercreateparameterproperties): Parameters supplied to the Create User operation.
* **type**: 'Microsoft.ApiManagement/service/users' (ReadOnly, DeployTimeConstant): The resource type

## ApiManagementServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the identity.
* **tenantId**: string (ReadOnly): The client tenant id of the identity.
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned' (Required): The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
* **userAssignedIdentities**: [Dictionary<string,UserIdentityProperties>](#dictionarystringuseridentityproperties): The list of user identities associated with the resource. The user identity
dictionary key references will be ARM resource ids in the form:
'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
    providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## Dictionary<string,UserIdentityProperties>
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## UserIdentityProperties
### Properties
* **clientId**: string: The client id of user assigned identity.
* **principalId**: string: The principal id of user assigned identity.

## ApiManagementServiceProperties
### Properties
* **additionalLocations**: [AdditionalLocation](#additionallocation)[]: Additional datacenter locations of the API Management service.
* **apiVersionConstraint**: [ApiVersionConstraint](#apiversionconstraint): Control Plane Apis version constraint for the API Management service.
* **certificates**: [CertificateConfiguration](#certificateconfiguration)[]: List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
* **createdAtUtc**: string (ReadOnly): Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **customProperties**: [Dictionary<string,String>](#dictionarystringstring): Custom properties of the API Management service.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2).</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls11` can be used to disable just TLS 1.1 for communications with backends.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls10` can be used to disable TLS 1.0 for communications with backends.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Protocols.Server.Http2` can be used to enable HTTP2 protocol on an API Management service.</br>Not specifying any of these properties on PATCH operation will reset omitted properties' values to their defaults. For all the settings except Http2 the default value is `True` if the service was created on or before April 1st 2018 and `False` otherwise. Http2 setting's default value is `False`.</br></br>You can disable any of next ciphers by using settings `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.[cipher_name]`: TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA. For example, `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TLS_RSA_WITH_AES_128_CBC_SHA256`:`false`. The default value is `true` for them.  Note: next ciphers can't be disabled since they are required by Azure CloudService internal components: TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_256_GCM_SHA384
* **developerPortalUrl**: string (ReadOnly): DEveloper Portal endpoint URL of the API Management service.
* **disableGateway**: bool: Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in master region.
* **enableClientCertificate**: bool: Property only meant to be used for Consumption SKU Service. This enforces a client certificate to be presented on each request to the gateway. This also enables the ability to authenticate the certificate in the policy on the gateway.
* **gatewayRegionalUrl**: string (ReadOnly): Gateway URL of the API Management service in the Default Region.
* **gatewayUrl**: string (ReadOnly): Gateway URL of the API Management service.
* **hostnameConfigurations**: [HostnameConfiguration](#hostnameconfiguration)[]: Custom hostname configuration of the API Management service.
* **managementApiUrl**: string (ReadOnly): Management API endpoint URL of the API Management service.
* **notificationSenderEmail**: string: Email address from which the notification will be sent.
* **portalUrl**: string (ReadOnly): Publisher portal endpoint Url of the API Management service.
* **privateIPAddresses**: string[] (ReadOnly): Private Static Load Balanced IP addresses of the API Management service in Primary region which is deployed in an Internal Virtual Network. Available only for Basic, Standard, Premium and Isolated SKU.
* **provisioningState**: string (ReadOnly): The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
* **publicIPAddresses**: string[] (ReadOnly): Public Static Load Balanced IP addresses of the API Management service in Primary region. Available only for Basic, Standard, Premium and Isolated SKU.
* **publicIpAddressId**: string: Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the region. Supported only for Developer and Premium SKU being deployed in Virtual Network.
* **publisherEmail**: string (Required): Publisher email.
* **publisherName**: string (Required): Publisher name.
* **restore**: bool: Undelete Api Management Service if it was previously soft-deleted. If this flag is specified and set to True all other properties will be ignored.
* **scmUrl**: string (ReadOnly): SCM endpoint URL of the API Management service.
* **targetProvisioningState**: string (ReadOnly): The provisioning state of the API Management service, which is targeted by the long running operation started on the service.
* **virtualNetworkConfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration): Configuration of a virtual network to which API Management service is deployed.
* **virtualNetworkType**: 'External' | 'Internal' | 'None': The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.

## AdditionalLocation
### Properties
* **disableGateway**: bool: Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location.
* **gatewayRegionalUrl**: string (ReadOnly): Gateway URL of the API Management service in the Region.
* **location**: string (Required): The location name of the additional region among Azure Data center regions.
* **privateIPAddresses**: string[] (ReadOnly): Private Static Load Balanced IP addresses of the API Management service which is deployed in an Internal Virtual Network in a particular additional location. Available only for Basic, Standard, Premium and Isolated SKU.
* **publicIPAddresses**: string[] (ReadOnly): Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard, Premium and Isolated SKU.
* **publicIpAddressId**: string: Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the location. Supported only for Premium SKU being deployed in Virtual Network.
* **sku**: [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties) (Required): API Management service resource SKU properties.
* **virtualNetworkConfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration): Configuration of a virtual network to which API Management service is deployed.
* **zones**: string[]: A list of availability zones denoting where the resource needs to come from.

## ApiManagementServiceSkuProperties
### Properties
* **capacity**: int (Required): Capacity of the SKU (number of deployed units of the SKU). For Consumption SKU capacity must be specified as 0.
* **name**: 'Basic' | 'Consumption' | 'Developer' | 'Isolated' | 'Premium' | 'Standard' (Required): Name of the Sku.

## VirtualNetworkConfiguration
### Properties
* **subnetname**: string (ReadOnly): The name of the subnet.
* **subnetResourceId**: string: The full resource ID of a subnet in a virtual network to deploy the API Management service in.
* **vnetid**: string (ReadOnly): The virtual network ID. This is typically a GUID. Expect a null GUID by default.

## ApiVersionConstraint
### Properties
* **minApiVersion**: string: Limit control plane API calls to API Management service with version equal to or newer than this value.

## CertificateConfiguration
### Properties
* **certificate**: [CertificateInformation](#certificateinformation): SSL certificate information.
* **certificatePassword**: string: Certificate Password.
* **encodedCertificate**: string: Base64 Encoded certificate.
* **storeName**: 'CertificateAuthority' | 'Root' (Required): The System.Security.Cryptography.x509certificates.StoreName certificate store location. Only Root and CertificateAuthority are valid locations.

## CertificateInformation
### Properties
* **expiry**: string (Required): Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **subject**: string (Required): Subject of the certificate.
* **thumbprint**: string (Required): Thumbprint of the certificate.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HostnameConfiguration
### Properties
* **certificate**: [CertificateInformation](#certificateinformation): SSL certificate information.
* **certificatePassword**: string: Certificate Password.
* **certificateSource**: 'BuiltIn' | 'Custom' | 'KeyVault' | 'Managed': Certificate Source.
* **certificateStatus**: 'Completed' | 'Failed' | 'InProgress': Certificate Status.
* **defaultSslBinding**: bool: Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to Proxy Hostname Type.
* **encodedCertificate**: string: Base64 Encoded certificate.
* **hostName**: string (Required): Hostname to configure on the Api Management service.
* **identityClientId**: string: System or User Assigned Managed identity clientId as generated by Azure AD, which has GET access to the keyVault containing the SSL certificate.
* **keyVaultId**: string: Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with aka.ms/apimmsi. The secret should be of type *application/x-pkcs12*
* **negotiateClientCertificate**: bool: Specify true to always negotiate client certificate on the hostname. Default Value is false.
* **type**: 'DeveloperPortal' | 'Management' | 'Portal' | 'Proxy' | 'Scm' (Required): Hostname type.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiCreateOrUpdateProperties
### Properties
* **apiRevision**: string: Describes the revision of the API. If no value is provided, default revision 1 is created
* **apiRevisionDescription**: string: Description of the API Revision.
* **apiType**: 'http' | 'soap' | 'websocket' (WriteOnly): Type of API to create.
 * `http` creates a REST API
 * `soap` creates a SOAP pass-through API
 * `websocket` creates websocket API.
* **apiVersion**: string: Indicates the version identifier of the API if the API is versioned
* **apiVersionDescription**: string: Description of the API Version.
* **apiVersionSet**: [ApiVersionSetContractDetails](#apiversionsetcontractdetails): An API Version Set contains the common configuration for a set of API Versions relating
* **apiVersionSetId**: string: A resource identifier for the related ApiVersionSet.
* **authenticationSettings**: [AuthenticationSettingsContract](#authenticationsettingscontract): API Authentication Settings.
* **contact**: [ApiContactInformation](#apicontactinformation): API contact information
* **description**: string: Description of the API. May include HTML formatting tags.
* **displayName**: string: API name. Must be 1 to 300 characters long.
* **format**: 'openapi-link' | 'openapi' | 'openapi+json-link' | 'openapi+json' | 'swagger-json' | 'swagger-link-json' | 'wadl-link-json' | 'wadl-xml' | 'wsdl-link' | 'wsdl' (WriteOnly): Format of the Content in which the API is getting imported.
* **isCurrent**: bool: Indicates if API revision is current api revision.
* **isOnline**: bool (ReadOnly): Indicates if API revision is accessible via the gateway.
* **license**: [ApiLicenseInformation](#apilicenseinformation): API license information
* **path**: string (Required): Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
* **protocols**: 'http' | 'https' | 'ws' | 'wss'[]: Describes on which protocols the operations in this API can be invoked.
* **serviceUrl**: string: Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
* **sourceApiId**: string: API identifier of the source API.
* **subscriptionKeyParameterNames**: [SubscriptionKeyParameterNamesContract](#subscriptionkeyparameternamescontract): Subscription key parameter names details.
* **subscriptionRequired**: bool: Specifies whether an API or Product subscription is required for accessing the API.
* **termsOfServiceUrl**: string:  A URL to the Terms of Service for the API. MUST be in the format of a URL.
* **type**: 'http' | 'soap' | 'websocket': Type of API.
* **value**: string (WriteOnly): Content value when Importing an API.
* **wsdlSelector**: [schemas:61_wsdlSelector](#schemas61wsdlselector) (WriteOnly): Criteria to limit import of WSDL to a subset of the document.

## ApiVersionSetContractDetails
### Properties
* **description**: string: Description of API Version Set.
* **id**: string: Identifier for existing API Version Set. Omit this value to create a new Version Set.
* **name**: string: The display Name of the API Version Set.
* **versionHeaderName**: string: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
* **versioningScheme**: 'Header' | 'Query' | 'Segment': An value that determines where the API Version identifier will be located in a HTTP request.
* **versionQueryName**: string: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.

## AuthenticationSettingsContract
### Properties
* **oAuth2**: [OAuth2AuthenticationSettingsContract](#oauth2authenticationsettingscontract): API OAuth2 Authentication settings details.
* **openid**: [OpenIdAuthenticationSettingsContract](#openidauthenticationsettingscontract): API OAuth2 Authentication settings details.

## OAuth2AuthenticationSettingsContract
### Properties
* **authorizationServerId**: string: OAuth authorization server identifier.
* **scope**: string: operations scope.

## OpenIdAuthenticationSettingsContract
### Properties
* **bearerTokenSendingMethods**: 'authorizationHeader' | 'query'[]: How to send token to the server.
* **openidProviderId**: string: OAuth authorization server identifier.

## ApiContactInformation
### Properties
* **email**: string: The email address of the contact person/organization. MUST be in the format of an email address
* **name**: string: The identifying name of the contact person/organization
* **url**: string: The URL pointing to the contact information. MUST be in the format of a URL

## ApiLicenseInformation
### Properties
* **name**: string: The license name used for the API
* **url**: string: A URL to the license used for the API. MUST be in the format of a URL

## SubscriptionKeyParameterNamesContract
### Properties
* **header**: string: Subscription key header name.
* **query**: string: Subscription key query string parameter name.

## schemas:61_wsdlSelector
### Properties
* **wsdlEndpointName**: string (WriteOnly): Name of endpoint(port) to import from WSDL
* **wsdlServiceName**: string (WriteOnly): Name of service to import from WSDL

## DiagnosticContractProperties
### Properties
* **alwaysLog**: 'allErrors': Specifies for what type of messages sampling settings should not apply.
* **backend**: [PipelineDiagnosticSettings](#pipelinediagnosticsettings): Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
* **frontend**: [PipelineDiagnosticSettings](#pipelinediagnosticsettings): Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
* **httpCorrelationProtocol**: 'Legacy' | 'None' | 'W3C': Sets correlation protocol to use for Application Insights diagnostics.
* **logClientIp**: bool: Log the ClientIP. Default is false.
* **loggerId**: string (Required): Resource Id of a target logger.
* **operationNameFormat**: 'Name' | 'Url': The format of the Operation Name for Application Insights telemetries. Default is Name.
* **sampling**: [SamplingSettings](#samplingsettings): Sampling settings for Diagnostic.
* **verbosity**: 'error' | 'information' | 'verbose': The verbosity level applied to traces emitted by trace policies.

## PipelineDiagnosticSettings
### Properties
* **request**: [HttpMessageDiagnostic](#httpmessagediagnostic): Http message diagnostic settings.
* **response**: [HttpMessageDiagnostic](#httpmessagediagnostic): Http message diagnostic settings.

## HttpMessageDiagnostic
### Properties
* **body**: [BodyDiagnosticSettings](#bodydiagnosticsettings): Body logging settings.
* **dataMasking**: [DataMasking](#datamasking)
* **headers**: string[]: Array of HTTP Headers to log.

## BodyDiagnosticSettings
### Properties
* **bytes**: int: Number of request body bytes to log.

## DataMasking
### Properties
* **headers**: [DataMaskingEntity](#datamaskingentity)[]: Masking settings for headers
* **queryParams**: [DataMaskingEntity](#datamaskingentity)[]: Masking settings for Url query parameters

## DataMaskingEntity
### Properties
* **mode**: 'Hide' | 'Mask': Data masking mode.
* **value**: string: The name of an entity to mask (e.g. a name of a header or a query parameter).

## SamplingSettings
### Properties
* **percentage**: int: Rate of sampling for fixed-rate sampling.
* **samplingType**: 'fixed': Sampling type.

## IssueContractProperties
### Properties
* **apiId**: string: A resource identifier for the API the issue was created for.
* **createdDate**: string: Date and time when the issue was created.
* **description**: string (Required): Text describing the issue.
* **state**: 'closed' | 'open' | 'proposed' | 'removed' | 'resolved': Status of the issue.
* **title**: string (Required): The issue title.
* **userId**: string (Required): A resource identifier for the user created the issue.

## IssueAttachmentContractProperties
### Properties
* **content**: string (Required): An HTTP link or Base64-encoded binary data.
* **contentFormat**: string (Required): Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
* **title**: string (Required): Filename by which the binary data will be saved.

## IssueCommentContractProperties
### Properties
* **createdDate**: string: Date and time when the comment was created.
* **text**: string (Required): Comment text.
* **userId**: string (Required): A resource identifier for the user who left the comment.

## OperationContractProperties
### Properties
* **description**: string: Description of the operation. May include HTML formatting tags.
* **displayName**: string (Required): Operation Name.
* **method**: string (Required): A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
* **policies**: string: Operation Policies
* **request**: [RequestContract](#requestcontract): Operation request details.
* **responses**: [ResponseContract](#responsecontract)[]: Array of Operation responses.
* **templateParameters**: [ParameterContract](#parametercontract)[]: Collection of URL template parameters.
* **urlTemplate**: string (Required): Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}

## RequestContract
### Properties
* **description**: string: Operation request description.
* **headers**: [ParameterContract](#parametercontract)[]: Collection of operation request headers.
* **queryParameters**: [ParameterContract](#parametercontract)[]: Collection of operation request query parameters.
* **representations**: [RepresentationContract](#representationcontract)[]: Collection of operation request representations.

## ParameterContract
### Properties
* **defaultValue**: string: Default parameter value.
* **description**: string: Parameter description.
* **name**: string (Required): Parameter name.
* **required**: bool: Specifies whether parameter is required or not.
* **schemaId**: string: Schema identifier.
* **type**: string (Required): Parameter type.
* **typeName**: string: Type name defined by the schema.
* **values**: string[]: Parameter values.

## RepresentationContract
### Properties
* **contentType**: string (Required): Specifies a registered or custom content type for this representation, e.g. application/xml.
* **formParameters**: [ParameterContract](#parametercontract)[]: Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
* **sample**: string: An example of the representation.
* **schemaId**: string: Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
* **typeName**: string: Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.

## ResponseContract
### Properties
* **description**: string: Operation response description.
* **headers**: [ParameterContract](#parametercontract)[]: Collection of operation response headers.
* **representations**: [RepresentationContract](#representationcontract)[]: Collection of operation response representations.
* **statusCode**: int (Required): Operation response HTTP status code.

## PolicyContractProperties
### Properties
* **format**: 'rawxml-link' | 'rawxml' | 'xml-link' | 'xml': Format of the policyContent.
* **value**: string (Required): Contents of the Policy as defined by the format.

## TagContractProperties
### Properties
* **displayName**: string (ReadOnly): Tag name.

## ApiReleaseContractProperties
### Properties
* **apiId**: string: Identifier of the API the release belongs to.
* **createdDateTime**: string (ReadOnly): The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
* **notes**: string: Release Notes
* **updatedDateTime**: string (ReadOnly): The time the API release was updated.

## SchemaContractProperties
### Properties
* **contentType**: string (Required): Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
* **document**: [SchemaDocumentProperties](#schemadocumentproperties): Schema Document Properties.

## SchemaDocumentProperties
### Properties
* **definitions**: any: Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
* **value**: string: Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.

## TagDescriptionBaseProperties
### Properties
* **description**: string: Description of the Tag.
* **displayName**: string (ReadOnly): Tag name.
* **externalDocsDescription**: string: Description of the external resources describing the tag.
* **externalDocsUrl**: string: Absolute URL of external resources describing the tag.
* **tagId**: string (ReadOnly): Identifier of the tag in the form of /tags/{tagId}

## ApiVersionSetContractProperties
### Properties
* **description**: string: Description of API Version Set.
* **displayName**: string (Required): Name of API Version Set
* **versionHeaderName**: string: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
* **versioningScheme**: 'Header' | 'Query' | 'Segment' (Required): An value that determines where the API Version identifier will be located in a HTTP request.
* **versionQueryName**: string: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.

## AuthorizationServerContractProperties
### Properties
* **authorizationEndpoint**: string (Required): OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
* **authorizationMethods**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE'[]: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
* **bearerTokenSendingMethods**: 'authorizationHeader' | 'query'[]: Specifies the mechanism by which access token is passed to the API.
* **clientAuthenticationMethod**: 'Basic' | 'Body'[]: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
* **clientId**: string (Required): Client or app id registered with this authorization server.
* **clientRegistrationEndpoint**: string (Required): Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
* **clientSecret**: string: Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
* **defaultScope**: string: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
* **description**: string: Description of the authorization server. Can contain HTML formatting tags.
* **displayName**: string (Required): User-friendly authorization server name.
* **grantTypes**: 'authorizationCode' | 'clientCredentials' | 'implicit' | 'resourceOwnerPassword'[] (Required): Form of an authorization grant, which the client uses to request the access token.
* **resourceOwnerPassword**: string: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
* **resourceOwnerUsername**: string: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
* **supportState**: bool: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
* **tokenBodyParameters**: [TokenBodyParameterContract](#tokenbodyparametercontract)[]: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
* **tokenEndpoint**: string: OAuth token endpoint. Contains absolute URI to entity being referenced.

## TokenBodyParameterContract
### Properties
* **name**: string (Required): body parameter name.
* **value**: string (Required): body parameter value.

## BackendContractProperties
### Properties
* **credentials**: [BackendCredentialsContract](#backendcredentialscontract): Details of the Credentials used to connect to Backend.
* **description**: string: Backend Description.
* **properties**: [BackendProperties](#backendproperties): Properties specific to the Backend Type.
* **protocol**: 'http' | 'soap' (Required): Backend communication protocol.
* **proxy**: [BackendProxyContract](#backendproxycontract): Details of the Backend WebProxy Server to use in the Request to Backend.
* **resourceId**: string: Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or API Apps.
* **title**: string: Backend Title.
* **tls**: [BackendTlsProperties](#backendtlsproperties): Properties controlling TLS Certificate Validation.
* **url**: string (Required): Runtime Url of the Backend.

## BackendCredentialsContract
### Properties
* **authorization**: [BackendAuthorizationHeaderCredentials](#backendauthorizationheadercredentials): Authorization header information.
* **certificate**: string[]: List of Client Certificate Thumbprints. Will be ignored if certificatesIds are provided.
* **certificateIds**: string[]: List of Client Certificate Ids.
* **header**: [Dictionary<string,IList<String>>](#dictionarystringiliststring): Header Parameter description.
* **query**: [Dictionary<string,IList<String>>](#dictionarystringiliststring): Query Parameter description.

## BackendAuthorizationHeaderCredentials
### Properties
* **parameter**: string (Required): Authentication Parameter value.
* **scheme**: string (Required): Authentication Scheme name.

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
* **serviceFabricCluster**: [BackendServiceFabricClusterProperties](#backendservicefabricclusterproperties): Properties of the Service Fabric Type Backend.

## BackendServiceFabricClusterProperties
### Properties
* **clientCertificateId**: string: The client certificate id for the management endpoint.
* **clientCertificatethumbprint**: string: The client certificate thumbprint for the management endpoint. Will be ignored if certificatesIds are provided
* **managementEndpoints**: string[] (Required): The cluster management endpoint.
* **maxPartitionResolutionRetries**: int: Maximum number of retries while attempting resolve the partition.
* **serverCertificateThumbprints**: string[]: Thumbprints of certificates cluster management service uses for tls communication
* **serverX509Names**: [X509CertificateName](#x509certificatename)[]: Server X509 Certificate Names Collection

## X509CertificateName
### Properties
* **issuerCertificateThumbprint**: string: Thumbprint for the Issuer of the Certificate.
* **name**: string: Common Name of the Certificate.

## BackendProxyContract
### Properties
* **password**: string: Password to connect to the WebProxy Server
* **url**: string (Required): WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
* **username**: string: Username to connect to the WebProxy server

## BackendTlsProperties
### Properties
* **validateCertificateChain**: bool: Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
* **validateCertificateName**: bool: Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.

## CacheContractProperties
### Properties
* **connectionString**: string (Required): Runtime connection string to cache
* **description**: string: Cache description
* **resourceId**: string: Original uri of entity in external system cache points to
* **useFromLocation**: string (Required): Location identifier to use cache from (should be either 'default' or valid Azure region identifier)

## CertificateCreateOrUpdateProperties
### Properties
* **data**: string (WriteOnly): Base 64 encoded certificate using the application/x-pkcs12 representation.
* **expirationDate**: string (ReadOnly): Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **keyVault**: [KeyVaultContractCreateProperties](#keyvaultcontractcreateproperties): Create keyVault contract details.
* **password**: string (WriteOnly): Password for the Certificate
* **subject**: string (ReadOnly): Subject attribute of the certificate.
* **thumbprint**: string (ReadOnly): Thumbprint of the certificate.

## KeyVaultContractCreateProperties
### Properties
* **identityClientId**: string: SystemAssignedIdentity or UserAssignedIdentity Client Id which will be used to access key vault secret.
* **lastStatus**: [KeyVaultLastAccessStatusContractProperties](#keyvaultlastaccessstatuscontractproperties) (ReadOnly): Issue contract Update Properties.
* **secretIdentifier**: string: Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi

## KeyVaultLastAccessStatusContractProperties
### Properties
* **code**: string (ReadOnly): Last status code for sync and refresh of secret from key vault.
* **message**: string (ReadOnly): Details of the error else empty.
* **timeStampUtc**: string (ReadOnly): Last time secret was accessed. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.

## ContentTypeContractProperties
### Properties
* **description**: string (ReadOnly): Content type description.
* **id**: string (ReadOnly): Content type identifier
* **name**: string (ReadOnly): Content type name. Must be 1 to 250 characters long.
* **schema**: any (ReadOnly): Content type schema.
* **version**: string (ReadOnly): Content type version.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## GatewayContractProperties
### Properties
* **description**: string: Gateway description
* **locationData**: [ResourceLocationDataContract](#resourcelocationdatacontract): Resource location data properties.

## ResourceLocationDataContract
### Properties
* **city**: string: The city or locality where the resource is located.
* **countryOrRegion**: string: The country or region where the resource is located.
* **district**: string: The district, state, or province where the resource is located.
* **name**: string (Required): A canonical name for the geographic or physical location.

## schemas:302_properties
### Properties
* **provisioningState**: 'created': Provisioning state.

## GatewayCertificateAuthorityContractProperties
### Properties
* **isTrusted**: bool: Determines whether certificate authority is trusted.

## GatewayHostnameConfigurationContractProperties
### Properties
* **certificateId**: string: Identifier of Certificate entity that will be used for TLS connection establishment
* **hostname**: string: Hostname value. Supports valid domain name, partial or full wildcard
* **http2Enabled**: bool: Specifies if HTTP/2.0 is supported
* **negotiateClientCertificate**: bool: Determines whether gateway requests client certificate
* **tls10Enabled**: bool: Specifies if TLS 1.0 is supported
* **tls11Enabled**: bool: Specifies if TLS 1.1 is supported

## GroupCreateParametersProperties
### Properties
* **builtIn**: bool (ReadOnly): true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
* **description**: string: Group description.
* **displayName**: string (Required): Group name.
* **externalId**: string: Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
* **type**: 'custom' | 'external' | 'system': Group type.

## IdentityProviderCreateContractProperties
### Properties
* **allowedTenants**: string[]: List of Allowed Tenants when configuring Azure Active Directory login.
* **authority**: string: OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
* **clientId**: string (Required): Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
* **clientSecret**: string (Required): Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
* **passwordResetPolicyName**: string: Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
* **profileEditingPolicyName**: string: Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
* **signinPolicyName**: string: Signin Policy Name. Only applies to AAD B2C Identity Provider.
* **signinTenant**: string: The TenantId to use instead of Common when logging into Active Directory
* **signupPolicyName**: string: Signup Policy Name. Only applies to AAD B2C Identity Provider.
* **type**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter': Identity Provider Type identifier.

## LoggerContractProperties
### Properties
* **credentials**: [Dictionary<string,String>](#dictionarystringstring): The name and SendRule connection string of the event hub for azureEventHub logger.
Instrumentation key for applicationInsights logger.
* **description**: string: Logger description.
* **isBuffered**: bool: Whether records are buffered in the logger before publishing. Default is assumed to be true.
* **loggerType**: 'applicationInsights' | 'azureEventHub' | 'azureMonitor' (Required): Logger type.
* **resourceId**: string: Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NamedValueCreateContractProperties
### Properties
* **displayName**: string (Required): Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
* **keyVault**: [KeyVaultContractCreateProperties](#keyvaultcontractcreateproperties): Create keyVault contract details.
* **secret**: bool: Determines whether the value is a secret and should be encrypted or not. Default value is false.
* **tags**: string[]: Optional tags that when provided can be used to filter the NamedValue list.
* **value**: string: Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.

## NotificationContractProperties
### Properties
* **description**: string (ReadOnly): Description of the Notification.
* **recipients**: [RecipientsContractProperties](#recipientscontractproperties) (ReadOnly): Notification Parameter contract.
* **title**: string (ReadOnly): Title of the Notification.

## RecipientsContractProperties
### Properties
* **emails**: string[] (ReadOnly): List of Emails subscribed for the notification.
* **users**: string[] (ReadOnly): List of Users subscribed for the notification.

## OpenidConnectProviderContractProperties
### Properties
* **clientId**: string (Required): Client ID of developer console which is the client application.
* **clientSecret**: string: Client Secret of developer console which is the client application.
* **description**: string: User-friendly description of OpenID Connect Provider.
* **displayName**: string (Required): User-friendly OpenID Connect Provider name.
* **metadataEndpoint**: string (Required): Metadata endpoint URI.

## PortalRevisionContractProperties
### Properties
* **createdDateTime**: string (ReadOnly): Portal's revision creation date and time.
* **description**: string: Portal revision description.
* **isCurrent**: bool: Indicates if the portal's revision is public.
* **status**: 'completed' | 'failed' | 'pending' | 'publishing' (ReadOnly): Status of the portal's revision.
* **statusDetails**: string (ReadOnly): Portal revision publishing status details.
* **updatedDateTime**: string (ReadOnly): Last updated date and time.

## Microsoft.ApiManagement/service/portalsettings
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'delegation' (Required, DeployTimeConstant): The resource name
* **properties**: [PortalDelegationSettingsProperties](#portaldelegationsettingsproperties): Delegation settings contract properties.
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant): The resource type

## PortalDelegationSettingsProperties
### Properties
* **subscriptions**: [SubscriptionsDelegationSettingsProperties](#subscriptionsdelegationsettingsproperties): Subscriptions delegation settings properties.
* **url**: string: A delegation Url.
* **userRegistration**: [RegistrationDelegationSettingsProperties](#registrationdelegationsettingsproperties): User registration delegation settings properties.
* **validationKey**: string: A base64-encoded validation key to validate, that a request is coming from Azure API Management.

## SubscriptionsDelegationSettingsProperties
### Properties
* **enabled**: bool: Enable or disable delegation for subscriptions.

## RegistrationDelegationSettingsProperties
### Properties
* **enabled**: bool: Enable or disable delegation for user registration.

## Microsoft.ApiManagement/service/portalsettings
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'signin' (Required, DeployTimeConstant): The resource name
* **properties**: [PortalSigninSettingProperties](#portalsigninsettingproperties): Sign-in settings contract properties.
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant): The resource type

## PortalSigninSettingProperties
### Properties
* **enabled**: bool: Redirect Anonymous users to the Sign-In page.

## Microsoft.ApiManagement/service/portalsettings
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'signup' (Required, DeployTimeConstant): The resource name
* **properties**: [PortalSignupSettingsProperties](#portalsignupsettingsproperties): Sign-up settings contract properties.
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant): The resource type

## PortalSignupSettingsProperties
### Properties
* **enabled**: bool: Allow users to sign up on a developer portal.
* **termsOfService**: [TermsOfServiceProperties](#termsofserviceproperties): Terms of service contract properties.

## TermsOfServiceProperties
### Properties
* **consentRequired**: bool: Ask user for consent to the terms of service.
* **enabled**: bool: Display terms of service during a sign-up process.
* **text**: string: A terms of service text.

## ProductContractProperties
### Properties
* **approvalRequired**: bool: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false.
* **description**: string: Product description. May include HTML formatting tags.
* **displayName**: string (Required): Product name.
* **state**: 'notPublished' | 'published': whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
* **subscriptionRequired**: bool: Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
* **subscriptionsLimit**: int: Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false.
* **terms**: string: Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.

## SubscriptionCreateParameterProperties
### Properties
* **allowTracing**: bool: Determines whether tracing can be enabled
* **createdDate**: string (ReadOnly): Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **displayName**: string (Required): Subscription name.
* **endDate**: string (ReadOnly): Date when subscription was cancelled or expired. The setting is for audit purposes only and the subscription is not automatically cancelled. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **expirationDate**: string (ReadOnly): Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **notificationDate**: string (ReadOnly): Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **ownerId**: string: User (user id path) for whom subscription is being created in form /users/{userId}
* **primaryKey**: string: Primary subscription key. If not specified during request key will be generated automatically.
* **scope**: string (Required): Scope like /products/{productId} or /apis or /apis/{apiId}.
* **secondaryKey**: string: Secondary subscription key. If not specified during request key will be generated automatically.
* **startDate**: string (ReadOnly): Subscription activation date. The setting is for audit purposes only and the subscription is not automatically activated. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **state**: 'active' | 'cancelled' | 'expired' | 'rejected' | 'submitted' | 'suspended': Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
* **stateComment**: string (ReadOnly): Optional subscription comment added by an administrator when the state is changed to the 'rejected'.

## EmailTemplateUpdateParameterProperties
### Properties
* **body**: string: Email Template Body. This should be a valid XDocument
* **description**: string: Description of the Email Template.
* **isDefault**: bool (ReadOnly): Whether the template is the default template provided by API Management or has been edited.
* **parameters**: [EmailTemplateParametersContractProperties](#emailtemplateparameterscontractproperties)[]: Email Template Parameter values.
* **subject**: string: Subject of the Template.
* **title**: string: Title of the Template.

## EmailTemplateParametersContractProperties
### Properties
* **description**: string: Template parameter description.
* **name**: string: Template parameter name.
* **title**: string: Template parameter title.

## AccessInformationCreateParameterProperties
### Properties
* **enabled**: bool: Determines whether direct access is enabled.
* **id**: string (ReadOnly): Access Information type ('access' or 'gitAccess')
* **primaryKey**: string (WriteOnly): Primary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
* **principalId**: string: Principal (User) Identifier.
* **secondaryKey**: string (WriteOnly): Secondary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.

## UserCreateParameterProperties
### Properties
* **appType**: 'developerPortal' | 'portal' (WriteOnly): Determines the type of application which send the create user request. Default is legacy portal.
* **confirmation**: 'invite' | 'signup' (WriteOnly): Determines the type of confirmation e-mail that will be sent to the newly created user.
* **email**: string (Required): Email address. Must not be empty and must be unique within the service instance.
* **firstName**: string (Required): First name.
* **groups**: [GroupContractProperties](#groupcontractproperties)[] (ReadOnly): Collection of groups user is part of.
* **identities**: [UserIdentityContract](#useridentitycontract)[]: Collection of user identities.
* **lastName**: string (Required): Last name.
* **note**: string: Optional note about a user set by the administrator.
* **password**: string (WriteOnly): User Password. If no value is provided, a default password is generated.
* **registrationDate**: string (ReadOnly): Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **state**: 'active' | 'blocked' | 'deleted' | 'pending': Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.

## GroupContractProperties
### Properties
* **builtIn**: bool (ReadOnly): true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
* **description**: string (ReadOnly): Group description. Can contain HTML formatting tags.
* **displayName**: string (ReadOnly): Group name.
* **externalId**: string (ReadOnly): For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
* **type**: 'custom' | 'external' | 'system' (ReadOnly): Group type.

## UserIdentityContract
### Properties
* **id**: string: Identifier value within provider.
* **provider**: string: Identity provider name.

