# Microsoft.ApiManagement @ 2019-12-01-preview

## Resource Microsoft.ApiManagement/service@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ApiManagementServiceIdentity](#apimanagementserviceidentity): Managed service identity of the Api Management service.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiManagementServiceProperties](#apimanagementserviceproperties) (Required): Properties of the API Management service.
* **sku**: [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties) (Required): SKU properties of the API Management service.
* **tags**: [ApimResourceTags](#apimresourcetags): Resource tags.
* **type**: 'Microsoft.ApiManagement/service' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **format**: 'openapi-link' | 'swagger-link-json' | 'wadl-link-json' | 'wsdl-link+xml' | string (ReadOnly): Format in which the Api Details are exported to the Storage Blob with Sas Key valid for 5 minutes.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiCreateOrUpdateProperties](#apicreateorupdateproperties) (WriteOnly): Api entity create of update properties.
* **type**: 'Microsoft.ApiManagement/service/apis' (ReadOnly, DeployTimeConstant): The resource type
* **value**: [ApiExportResultValue](#apiexportresultvalue) (ReadOnly): The object defining the schema of the exported Api Detail

## Resource Microsoft.ApiManagement/service/apis/diagnostics@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticContractProperties](#diagnosticcontractproperties): Diagnostic entity contract properties.
* **type**: 'Microsoft.ApiManagement/service/apis/diagnostics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/issues@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IssueContractProperties](#issuecontractproperties): Properties of the Issue.
* **type**: 'Microsoft.ApiManagement/service/apis/issues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/issues/attachments@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IssueAttachmentContractProperties](#issueattachmentcontractproperties): Properties of the Issue Attachment.
* **type**: 'Microsoft.ApiManagement/service/apis/issues/attachments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/issues/comments@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IssueCommentContractProperties](#issuecommentcontractproperties): Properties of the Issue Comment.
* **type**: 'Microsoft.ApiManagement/service/apis/issues/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/operations@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OperationContractProperties](#operationcontractproperties): Properties of the Operation Contract.
* **type**: 'Microsoft.ApiManagement/service/apis/operations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/operations/policies@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'policy' | string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyContractProperties](#policycontractproperties): Properties of the Policy.
* **type**: 'Microsoft.ApiManagement/service/apis/operations/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/operations/tags@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly): Tag entity contract properties.
* **type**: 'Microsoft.ApiManagement/service/apis/operations/tags' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/policies@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'policy' | string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyContractProperties](#policycontractproperties): Properties of the Policy.
* **type**: 'Microsoft.ApiManagement/service/apis/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/releases@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiReleaseContractProperties](#apireleasecontractproperties): ApiRelease entity contract properties.
* **type**: 'Microsoft.ApiManagement/service/apis/releases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/schemas@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaContractProperties](#schemacontractproperties): Properties of the Schema.
* **type**: 'Microsoft.ApiManagement/service/apis/schemas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/tagDescriptions@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TagDescriptionBasePropertiesOrTagDescriptionContractProperties](#tagdescriptionbasepropertiesortagdescriptioncontractproperties): Properties supplied to Create TagDescription operation.
* **type**: 'Microsoft.ApiManagement/service/apis/tagDescriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/tags@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly): Tag entity contract properties.
* **type**: 'Microsoft.ApiManagement/service/apis/tags' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apiVersionSets@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiVersionSetContractProperties](#apiversionsetcontractproperties): Api VersionSet contract properties.
* **type**: 'Microsoft.ApiManagement/service/apiVersionSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/authorizationServers@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationServerContractProperties](#authorizationservercontractproperties): Properties of the External OAuth authorization server Contract.
* **type**: 'Microsoft.ApiManagement/service/authorizationServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/backends@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackendContractProperties](#backendcontractproperties): Backend entity contract properties.
* **type**: 'Microsoft.ApiManagement/service/backends' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/caches@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CacheContractProperties](#cachecontractproperties): Cache properties details.
* **type**: 'Microsoft.ApiManagement/service/caches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/certificates@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateCreateOrUpdatePropertiesOrCertificateContractProperties](#certificatecreateorupdatepropertiesorcertificatecontractproperties): Certificate create or update properties details.
* **type**: 'Microsoft.ApiManagement/service/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/diagnostics@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticContractProperties](#diagnosticcontractproperties): Diagnostic entity contract properties.
* **type**: 'Microsoft.ApiManagement/service/diagnostics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/gateways@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayContractProperties](#gatewaycontractproperties): Gateway details.
* **type**: 'Microsoft.ApiManagement/service/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/gateways/apis@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssociationContractProperties](#associationcontractproperties): Association entity contract properties.
* **type**: 'Microsoft.ApiManagement/service/gateways/apis' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/gateways/hostnameConfigurations@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayHostnameConfigurationContractProperties](#gatewayhostnameconfigurationcontractproperties): Gateway hostname configuration details.
* **type**: 'Microsoft.ApiManagement/service/gateways/hostnameConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/groups@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GroupCreateParametersPropertiesOrGroupContractProperties](#groupcreateparameterspropertiesorgroupcontractproperties): Properties supplied to Create Group operation.
* **type**: 'Microsoft.ApiManagement/service/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/groups/users@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/groups/users' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/identityProviders@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter' | string (Required, DeployTimeConstant): The resource name
* **properties**: [IdentityProviderCreateContractPropertiesOrIdentityProviderContractProperties](#identityprovidercreatecontractpropertiesoridentityprovidercontractproperties): Identity Provider contract properties.
* **type**: 'Microsoft.ApiManagement/service/identityProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/loggers@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoggerContractProperties](#loggercontractproperties): Logger entity contract properties.
* **type**: 'Microsoft.ApiManagement/service/loggers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/namedValues@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NamedValueCreateContractPropertiesOrNamedValueContractProperties](#namedvaluecreatecontractpropertiesornamedvaluecontractproperties): NamedValue entity contract properties for PUT operation.
* **type**: 'Microsoft.ApiManagement/service/namedValues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/notifications@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'AccountClosedPublisher' | 'BCC' | 'NewApplicationNotificationMessage' | 'NewIssuePublisherNotificationMessage' | 'PurchasePublisherNotificationMessage' | 'QuotaLimitApproachingPublisherNotificationMessage' | 'RequestPublisherNotificationMessage' | string (Required, DeployTimeConstant): The resource name
* **properties**: [NotificationContractProperties](#notificationcontractproperties) (ReadOnly): Notification entity contract properties.
* **type**: 'Microsoft.ApiManagement/service/notifications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/notifications/recipientEmails@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/notifications/recipientEmails' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/notifications/recipientUsers@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/notifications/recipientUsers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/openidConnectProviders@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OpenidConnectProviderContractProperties](#openidconnectprovidercontractproperties): OpenId Connect Provider contract properties.
* **type**: 'Microsoft.ApiManagement/service/openidConnectProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/policies@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'policy' | string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyContractProperties](#policycontractproperties): Properties of the Policy.
* **type**: 'Microsoft.ApiManagement/service/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/portalsettings@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.ApiManagement/service/portalsettings
#### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'delegation' (Required, DeployTimeConstant): The resource name
* **properties**: [PortalDelegationSettingsProperties](#portaldelegationsettingsproperties): Delegation settings contract properties.
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.ApiManagement/service/portalsettings
#### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'signin' (Required, DeployTimeConstant): The resource name
* **properties**: [PortalSigninSettingProperties](#portalsigninsettingproperties): Sign-in settings contract properties.
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.ApiManagement/service/portalsettings
#### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'signup' (Required, DeployTimeConstant): The resource name
* **properties**: [PortalSignupSettingsProperties](#portalsignupsettingsproperties): Sign-up settings contract properties.
* **type**: 'Microsoft.ApiManagement/service/portalsettings' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.ApiManagement/service/products@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductContractProperties](#productcontractproperties): Product entity contract properties.
* **type**: 'Microsoft.ApiManagement/service/products' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/products/apis@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/products/apis' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/products/groups@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/products/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/products/policies@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'policy' | string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyContractProperties](#policycontractproperties): Properties of the Policy.
* **type**: 'Microsoft.ApiManagement/service/products/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/products/tags@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TagContractProperties](#tagcontractproperties) (ReadOnly): Tag entity contract properties.
* **type**: 'Microsoft.ApiManagement/service/products/tags' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/subscriptions@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionCreateParameterPropertiesOrSubscriptionContractProperties](#subscriptioncreateparameterpropertiesorsubscriptioncontractproperties): Subscription contract properties.
* **type**: 'Microsoft.ApiManagement/service/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/tags@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TagContractProperties](#tagcontractproperties): Properties supplied to Create Tag operation.
* **type**: 'Microsoft.ApiManagement/service/tags' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/templates@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'accountClosedDeveloper' | 'applicationApprovedNotificationMessage' | 'confirmSignUpIdentityDefault' | 'emailChangeIdentityDefault' | 'inviteUserNotificationMessage' | 'newCommentNotificationMessage' | 'newDeveloperNotificationMessage' | 'newIssueNotificationMessage' | 'passwordResetByAdminNotificationMessage' | 'passwordResetIdentityDefault' | 'purchaseDeveloperNotificationMessage' | 'quotaLimitApproachingDeveloperNotificationMessage' | 'rejectDeveloperNotificationMessage' | 'requestDeveloperNotificationMessage' | string (Required, DeployTimeConstant): The resource name
* **properties**: [EmailTemplateUpdateParameterPropertiesOrEmailTemplateContractProperties](#emailtemplateupdateparameterpropertiesoremailtemplatecontractproperties): Email Template Update contract properties.
* **type**: 'Microsoft.ApiManagement/service/templates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/users@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserCreateParameterPropertiesOrUserContractProperties](#usercreateparameterpropertiesorusercontractproperties): User entity create contract properties.
* **type**: 'Microsoft.ApiManagement/service/users' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.ApiManagement/service/gateways@2019-12-01-preview)
* **Resource**: Microsoft.ApiManagement/service/gateways
* **ApiVersion**: 2019-12-01-preview
* **Output**: [GatewayKeysContract](#gatewaykeyscontract)

## Function listSecrets (Microsoft.ApiManagement/service/authorizationServers@2019-12-01-preview)
* **Resource**: Microsoft.ApiManagement/service/authorizationServers
* **ApiVersion**: 2019-12-01-preview
* **Output**: [ClientSecretContract](#clientsecretcontract)

## Function listSecrets (Microsoft.ApiManagement/service/identityProviders@2019-12-01-preview)
* **Resource**: Microsoft.ApiManagement/service/identityProviders
* **ApiVersion**: 2019-12-01-preview
* **Output**: [ClientSecretContract](#clientsecretcontract)

## Function listSecrets (Microsoft.ApiManagement/service/openidConnectProviders@2019-12-01-preview)
* **Resource**: Microsoft.ApiManagement/service/openidConnectProviders
* **ApiVersion**: 2019-12-01-preview
* **Output**: [ClientSecretContract](#clientsecretcontract)

## Function listSecrets (Microsoft.ApiManagement/service/portalsettings@2019-12-01-preview)
* **Resource**: Microsoft.ApiManagement/service/portalsettings
* **ApiVersion**: 2019-12-01-preview
* **Output**: [PortalSettingValidationKeyContract](#portalsettingvalidationkeycontract)

## Function listSecrets (Microsoft.ApiManagement/service/subscriptions@2019-12-01-preview)
* **Resource**: Microsoft.ApiManagement/service/subscriptions
* **ApiVersion**: 2019-12-01-preview
* **Output**: [SubscriptionKeysContract](#subscriptionkeyscontract)

## Function listSecrets (Microsoft.ApiManagement/service/tenant@2019-12-01-preview)
* **Resource**: Microsoft.ApiManagement/service/tenant
* **ApiVersion**: 2019-12-01-preview
* **Output**: [AccessInformationContract](#accessinformationcontract)

## Function listValue (Microsoft.ApiManagement/service/namedValues@2019-12-01-preview)
* **Resource**: Microsoft.ApiManagement/service/namedValues
* **ApiVersion**: 2019-12-01-preview
* **Output**: [PropertyValueContract](#propertyvaluecontract)

## AccessInformationContract
### Properties
* **enabled**: bool: Determines whether direct access is enabled.
* **id**: string: Identifier.
* **primaryKey**: string: Primary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
* **secondaryKey**: string: Secondary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.

## AdditionalLocation
### Properties
* **disableGateway**: bool: Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location.
* **gatewayRegionalUrl**: string (ReadOnly): Gateway URL of the API Management service in the Region.
* **location**: string (Required): The location name of the additional region among Azure Data center regions.
* **privateIPAddresses**: string[] (ReadOnly): Private Static Load Balanced IP addresses of the API Management service which is deployed in an Internal Virtual Network in a particular additional location. Available only for Basic, Standard and Premium SKU.
* **publicIPAddresses**: string[] (ReadOnly): Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
* **sku**: [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties) (Required): SKU properties of the API Management service.
* **virtualNetworkConfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration): Virtual network configuration for the location.

## ApiCreateOrUpdateProperties
### Properties
* **apiRevision**: string: Describes the Revision of the Api. If no value is provided, default revision 1 is created
* **apiRevisionDescription**: string: Description of the Api Revision.
* **apiType**: 'http' | 'soap' | string: Type of Api to create. 
 * `http` creates a SOAP to REST API 
 * `soap` creates a SOAP pass-through API .
* **apiVersion**: string: Indicates the Version identifier of the API if the API is versioned
* **apiVersionDescription**: string: Description of the Api Version.
* **apiVersionSet**: [ApiVersionSetContractDetails](#apiversionsetcontractdetails): Version set details
* **apiVersionSetId**: string: A resource identifier for the related ApiVersionSet.
* **authenticationSettings**: [AuthenticationSettingsContract](#authenticationsettingscontract): Collection of authentication settings included into this API.
* **description**: string: Description of the API. May include HTML formatting tags.
* **displayName**: string: API name. Must be 1 to 300 characters long.
* **format**: 'openapi' | 'openapi+json' | 'openapi+json-link' | 'openapi-link' | 'swagger-json' | 'swagger-link-json' | 'wadl-link-json' | 'wadl-xml' | 'wsdl' | 'wsdl-link' | string: Format of the Content in which the API is getting imported.
* **isCurrent**: bool: Indicates if API revision is current api revision.
* **isOnline**: bool (ReadOnly): Indicates if API revision is accessible via the gateway.
* **path**: string (Required): Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
* **protocols**: 'http' | 'https'[]: Describes on which protocols the operations in this API can be invoked.
* **serviceUrl**: string: Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
* **sourceApiId**: string: API identifier of the source API.
* **subscriptionKeyParameterNames**: [SubscriptionKeyParameterNamesContract](#subscriptionkeyparameternamescontract): Protocols over which API is made available.
* **subscriptionRequired**: bool: Specifies whether an API or Product subscription is required for accessing the API.
* **type**: 'http' | 'soap' | string: Type of API.
* **value**: string: Content value when Importing an API.
* **wsdlSelector**: [ApiCreateOrUpdatePropertiesWsdlSelector](#apicreateorupdatepropertieswsdlselector): Criteria to limit import of WSDL to a subset of the document.

## ApiCreateOrUpdatePropertiesWsdlSelector
### Properties
* **wsdlEndpointName**: string: Name of endpoint(port) to import from WSDL
* **wsdlServiceName**: string: Name of service to import from WSDL

## ApiExportResultValue
### Properties
* **link**: string: Link to the Storage Blob containing the result of the export operation. The Blob Uri is only valid for 5 minutes.

## ApiManagementServiceBasePropertiesCustomProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiManagementServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the identity.
* **tenantId**: string (ReadOnly): The client tenant id of the identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
* **userAssignedIdentities**: [ApiManagementServiceIdentityUserAssignedIdentities](#apimanagementserviceidentityuserassignedidentities): The list of user identities associated with the resource. The user identity 
dictionary key references will be ARM resource ids in the form: 
'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
    providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ApiManagementServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## ApiManagementServiceProperties
### Properties
* **additionalLocations**: [AdditionalLocation](#additionallocation)[]: Additional datacenter locations of the API Management service.
* **apiVersionConstraint**: [ApiVersionConstraint](#apiversionconstraint): Control Plane Apis version constraint for the API Management service.
* **certificates**: [CertificateConfiguration](#certificateconfiguration)[]: List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
* **createdAtUtc**: string (ReadOnly): Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **customProperties**: [ApiManagementServiceBasePropertiesCustomProperties](#apimanagementservicebasepropertiescustomproperties): Custom properties of the API Management service.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2).</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls11` can be used to disable just TLS 1.1 for communications with backends.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls10` can be used to disable TLS 1.0 for communications with backends.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Protocols.Server.Http2` can be used to enable HTTP2 protocol on an API Management service.</br>Not specifying any of these properties on PATCH operation will reset omitted properties' values to their defaults. For all the settings except Http2 the default value is `True` if the service was created on or before April 1st 2018 and `False` otherwise. Http2 setting's default value is `False`.</br></br>You can disable any of next ciphers by using settings `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.[cipher_name]`: TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA. For example, `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TLS_RSA_WITH_AES_128_CBC_SHA256`:`false`. The default value is `true` for them.  Note: next ciphers can't be disabled since they are required by Azure CloudService internal components: TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_256_GCM_SHA384
* **developerPortalUrl**: string (ReadOnly): DEveloper Portal endpoint URL of the API Management service.
* **disableGateway**: bool: Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in master region.
* **enableClientCertificate**: bool: Property only meant to be used for Consumption SKU Service. This enforces a client certificate to be presented on each request to the gateway. This also enables the ability to authenticate the certificate in the policy on the gateway.
* **gatewayRegionalUrl**: string (ReadOnly): Gateway URL of the API Management service in the Default Region.
* **gatewayUrl**: string (ReadOnly): Gateway URL of the API Management service.
* **hostnameConfigurations**: [HostnameConfiguration](#hostnameconfiguration)[]: Custom hostname configuration of the API Management service.
* **managementApiUrl**: string (ReadOnly): Management API endpoint URL of the API Management service.
* **notificationSenderEmail**: string: Email address from which the notification will be sent.
* **portalUrl**: string (ReadOnly): Publisher portal endpoint Url of the API Management service.
* **privateIPAddresses**: string[] (ReadOnly): Private Static Load Balanced IP addresses of the API Management service in Primary region which is deployed in an Internal Virtual Network. Available only for Basic, Standard and Premium SKU.
* **provisioningState**: string (ReadOnly): The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
* **publicIPAddresses**: string[] (ReadOnly): Public Static Load Balanced IP addresses of the API Management service in Primary region. Available only for Basic, Standard and Premium SKU.
* **publisherEmail**: string (Required): Publisher email.
* **publisherName**: string (Required): Publisher name.
* **scmUrl**: string (ReadOnly): SCM endpoint URL of the API Management service.
* **targetProvisioningState**: string (ReadOnly): The provisioning state of the API Management service, which is targeted by the long running operation started on the service.
* **virtualNetworkConfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration): Virtual network configuration of the API Management service.
* **virtualNetworkType**: 'External' | 'Internal' | 'None' | string: The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.

## ApiManagementServiceSkuProperties
### Properties
* **capacity**: int (Required): Capacity of the SKU (number of deployed units of the SKU). For Consumption SKU capacity must be specified as 0.
* **name**: 'Basic' | 'Consumption' | 'Developer' | 'Premium' | 'Standard' | string (Required): Name of the Sku.

## ApimResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiReleaseContractProperties
### Properties
* **apiId**: string: Identifier of the API the release belongs to.
* **createdDateTime**: string (ReadOnly): The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
* **notes**: string: Release Notes
* **updatedDateTime**: string (ReadOnly): The time the API release was updated.

## ApiVersionConstraint
### Properties
* **minApiVersion**: string: Limit control plane API calls to API Management service with version equal to or newer than this value.

## ApiVersionSetContractDetails
### Properties
* **description**: string: Description of API Version Set.
* **id**: string: Identifier for existing API Version Set. Omit this value to create a new Version Set.
* **name**: string: The display Name of the API Version Set.
* **versionHeaderName**: string: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
* **versioningScheme**: 'Header' | 'Query' | 'Segment' | string: An value that determines where the API Version identifier will be located in a HTTP request.
* **versionQueryName**: string: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.

## ApiVersionSetContractProperties
### Properties
* **description**: string: Description of API Version Set.
* **displayName**: string (Required): Name of API Version Set
* **versionHeaderName**: string: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
* **versioningScheme**: 'Header' | 'Query' | 'Segment' | string (Required): An value that determines where the API Version identifier will be located in a HTTP request.
* **versionQueryName**: string: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.

## AssociationContractProperties
### Properties
* **provisioningState**: 'created': Provisioning state.

## AuthenticationSettingsContract
### Properties
* **oAuth2**: [OAuth2AuthenticationSettingsContract](#oauth2authenticationsettingscontract): OAuth2 Authentication settings
* **openid**: [OpenIdAuthenticationSettingsContract](#openidauthenticationsettingscontract): OpenID Connect Authentication Settings

## AuthorizationServerContractProperties
### Properties
* **authorizationEndpoint**: string (Required): OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
* **authorizationMethods**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE'[]: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
* **bearerTokenSendingMethods**: 'authorizationHeader' | 'query' | string[]: Specifies the mechanism by which access token is passed to the API.
* **clientAuthenticationMethod**: 'Basic' | 'Body' | string[]: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
* **clientId**: string (Required): Client or app id registered with this authorization server.
* **clientRegistrationEndpoint**: string (Required): Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
* **clientSecret**: string: Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
* **defaultScope**: string: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
* **description**: string: Description of the authorization server. Can contain HTML formatting tags.
* **displayName**: string (Required): User-friendly authorization server name.
* **grantTypes**: 'authorizationCode' | 'clientCredentials' | 'implicit' | 'resourceOwnerPassword' | string[] (Required): Form of an authorization grant, which the client uses to request the access token.
* **resourceOwnerPassword**: string: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
* **resourceOwnerUsername**: string: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
* **supportState**: bool: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
* **tokenBodyParameters**: [TokenBodyParameterContract](#tokenbodyparametercontract)[]: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
* **tokenEndpoint**: string: OAuth token endpoint. Contains absolute URI to entity being referenced.

## BackendAuthorizationHeaderCredentials
### Properties
* **parameter**: string (Required): Authentication Parameter value.
* **scheme**: string (Required): Authentication Scheme name.

## BackendContractProperties
### Properties
* **credentials**: [BackendCredentialsContract](#backendcredentialscontract): Backend Credentials Contract Properties
* **description**: string: Backend Description.
* **properties**: [BackendProperties](#backendproperties): Backend Properties contract
* **protocol**: 'http' | 'soap' | string (Required): Backend communication protocol.
* **proxy**: [BackendProxyContract](#backendproxycontract): Backend Proxy Contract Properties
* **resourceId**: string: Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
* **title**: string: Backend Title.
* **tls**: [BackendTlsProperties](#backendtlsproperties): Backend TLS Properties
* **url**: string (Required): Runtime Url of the Backend.

## BackendCredentialsContract
### Properties
* **authorization**: [BackendAuthorizationHeaderCredentials](#backendauthorizationheadercredentials): Authorization header authentication
* **certificate**: string[]: List of Client Certificate Thumbprint.
* **header**: [BackendCredentialsContractHeader](#backendcredentialscontractheader): Header Parameter description.
* **query**: [BackendCredentialsContractQuery](#backendcredentialscontractquery): Query Parameter description.

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
* **serviceFabricCluster**: [BackendServiceFabricClusterProperties](#backendservicefabricclusterproperties): Backend Service Fabric Cluster Properties

## BackendProxyContract
### Properties
* **password**: string: Password to connect to the WebProxy Server
* **url**: string (Required): WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
* **username**: string: Username to connect to the WebProxy server

## BackendServiceFabricClusterProperties
### Properties
* **clientCertificatethumbprint**: string (Required): The client certificate thumbprint for the management endpoint.
* **managementEndpoints**: string[] (Required): The cluster management endpoint.
* **maxPartitionResolutionRetries**: int: Maximum number of retries while attempting resolve the partition.
* **serverCertificateThumbprints**: string[]: Thumbprints of certificates cluster management service uses for tls communication
* **serverX509Names**: [X509CertificateName](#x509certificatename)[]: Server X509 Certificate Names Collection

## BackendTlsProperties
### Properties
* **validateCertificateChain**: bool: Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
* **validateCertificateName**: bool: Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.

## BodyDiagnosticSettings
### Properties
* **bytes**: int: Number of request body bytes to log.

## CacheContractProperties
### Properties
* **connectionString**: string (Required): Runtime connection string to cache
* **description**: string: Cache description
* **resourceId**: string: Original uri of entity in external system cache points to

## CertificateConfiguration
### Properties
* **certificate**: [CertificateInformation](#certificateinformation): Certificate information.
* **certificatePassword**: string: Certificate Password.
* **encodedCertificate**: string: Base64 Encoded certificate.
* **storeName**: 'CertificateAuthority' | 'Root' | string (Required): The System.Security.Cryptography.x509certificates.StoreName certificate store location. Only Root and CertificateAuthority are valid locations.

## CertificateCreateOrUpdatePropertiesOrCertificateContractProperties
### Properties
* **data**: string (Required, WriteOnly): Base 64 encoded certificate using the application/x-pkcs12 representation.
* **expirationDate**: string (ReadOnly): Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **password**: string (Required, WriteOnly): Password for the Certificate
* **subject**: string (ReadOnly): Subject attribute of the certificate.
* **thumbprint**: string (ReadOnly): Thumbprint of the certificate.

## CertificateInformation
### Properties
* **expiry**: string (Required): Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **subject**: string (Required): Subject of the certificate.
* **thumbprint**: string (Required): Thumbprint of the certificate.

## ClientSecretContract
### Properties
* **clientSecret**: string: Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.

## ClientSecretContract
### Properties
* **clientSecret**: string: Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.

## ClientSecretContract
### Properties
* **clientSecret**: string: Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.

## DiagnosticContractProperties
### Properties
* **alwaysLog**: 'allErrors' | string: Specifies for what type of messages sampling settings should not apply.
* **backend**: [PipelineDiagnosticSettings](#pipelinediagnosticsettings): Diagnostic settings for incoming/outgoing HTTP messages to the Backend
* **frontend**: [PipelineDiagnosticSettings](#pipelinediagnosticsettings): Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
* **httpCorrelationProtocol**: 'Legacy' | 'None' | 'W3C' | string: Sets correlation protocol to use for Application Insights diagnostics.
* **logClientIp**: bool: Log the ClientIP. Default is false.
* **loggerId**: string (Required): Resource Id of a target logger.
* **sampling**: [SamplingSettings](#samplingsettings): Sampling settings for Diagnostic.
* **verbosity**: 'error' | 'information' | 'verbose' | string: The verbosity level applied to traces emitted by trace policies.

## EmailTemplateParametersContractProperties
### Properties
* **description**: string: Template parameter description.
* **name**: string: Template parameter name.
* **title**: string: Template parameter title.

## EmailTemplateUpdateParameterPropertiesOrEmailTemplateContractProperties
### Properties
* **body**: string: Email Template Body. This should be a valid XDocument
* **description**: string: Description of the Email Template.
* **isDefault**: bool (ReadOnly): Whether the template is the default template provided by Api Management or has been edited.
* **parameters**: [EmailTemplateParametersContractProperties](#emailtemplateparameterscontractproperties)[]: Email Template Parameter values.
* **subject**: string: Subject of the Template.
* **title**: string: Title of the Template.

## GatewayContractProperties
### Properties
* **description**: string: Gateway description
* **locationData**: [ResourceLocationDataContract](#resourcelocationdatacontract): Gateway location.

## GatewayHostnameConfigurationContractProperties
### Properties
* **certificateId**: string: Identifier of Certificate entity that will be used for TLS connection establishment
* **hostname**: string: Hostname value. Supports valid domain name, partial or full wildcard
* **negotiateClientCertificate**: bool: Determines whether gateway requests client certificate

## GatewayKeysContract
### Properties
* **primary**: string: Primary gateway key.
* **secondary**: string: Secondary gateway key.

## GroupContractProperties
### Properties
* **builtIn**: bool (ReadOnly): true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
* **description**: string: Group description. Can contain HTML formatting tags.
* **displayName**: string (Required): Group name.
* **externalId**: string: For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
* **type**: 'custom' | 'external' | 'system': Group type.

## GroupCreateParametersPropertiesOrGroupContractProperties
### Properties
* **builtIn**: bool (ReadOnly): true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
* **description**: string: Group description.
* **displayName**: string (Required): Group name.
* **externalId**: string: Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
* **type**: 'custom' | 'external' | 'system': Group type.

## HostnameConfiguration
### Properties
* **certificate**: [CertificateInformation](#certificateinformation): Certificate information.
* **certificatePassword**: string: Certificate Password.
* **defaultSslBinding**: bool: Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to Proxy Hostname Type.
* **encodedCertificate**: string: Base64 Encoded certificate.
* **hostName**: string (Required): Hostname to configure on the Api Management service.
* **keyVaultId**: string: Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with MSI. The secret should be of type *application/x-pkcs12*
* **negotiateClientCertificate**: bool: Specify true to always negotiate client certificate on the hostname. Default Value is false.
* **type**: 'DeveloperPortal' | 'Management' | 'Portal' | 'Proxy' | 'Scm' | string (Required): Hostname type.

## HttpMessageDiagnostic
### Properties
* **body**: [BodyDiagnosticSettings](#bodydiagnosticsettings): Body logging settings.
* **headers**: string[]: Array of HTTP Headers to log.

## IdentityProviderCreateContractPropertiesOrIdentityProviderContractProperties
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
* **type**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter' | string: Identity Provider Type identifier.

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

## IssueContractProperties
### Properties
* **apiId**: string: A resource identifier for the API the issue was created for.
* **createdDate**: string: Date and time when the issue was created.
* **description**: string (Required): Text describing the issue.
* **state**: 'closed' | 'open' | 'proposed' | 'removed' | 'resolved' | string: Status of the issue.
* **title**: string (Required): The issue title.
* **userId**: string (Required): A resource identifier for the user created the issue.

## LoggerContractProperties
### Properties
* **credentials**: [LoggerContractPropertiesCredentials](#loggercontractpropertiescredentials) (Required): The name and SendRule connection string of the event hub for azureEventHub logger.
Instrumentation key for applicationInsights logger.
* **description**: string: Logger description.
* **isBuffered**: bool: Whether records are buffered in the logger before publishing. Default is assumed to be true.
* **loggerType**: 'applicationInsights' | 'azureEventHub' | string (Required): Logger type.
* **resourceId**: string: Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).

## LoggerContractPropertiesCredentials
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NamedValueCreateContractPropertiesOrNamedValueContractProperties
### Properties
* **displayName**: string (Required): Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
* **secret**: bool: Determines whether the value is a secret and should be encrypted or not. Default value is false.
* **tags**: string[]: Optional tags that when provided can be used to filter the NamedValue list.
* **value**: string (Required): Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.

## NotificationContractProperties
### Properties
* **description**: string: Description of the Notification.
* **recipients**: [RecipientsContractProperties](#recipientscontractproperties): Recipient Parameter values.
* **title**: string (Required): Title of the Notification.

## OAuth2AuthenticationSettingsContract
### Properties
* **authorizationServerId**: string: OAuth authorization server identifier.
* **scope**: string: operations scope.

## OpenIdAuthenticationSettingsContract
### Properties
* **bearerTokenSendingMethods**: 'authorizationHeader' | 'query' | string[]: How to send token to the server.
* **openidProviderId**: string: OAuth authorization server identifier.

## OpenidConnectProviderContractProperties
### Properties
* **clientId**: string (Required): Client ID of developer console which is the client application.
* **clientSecret**: string: Client Secret of developer console which is the client application.
* **description**: string: User-friendly description of OpenID Connect Provider.
* **displayName**: string (Required): User-friendly OpenID Connect Provider name.
* **metadataEndpoint**: string (Required): Metadata endpoint URI.

## OperationContractProperties
### Properties
* **description**: string: Description of the operation. May include HTML formatting tags.
* **displayName**: string (Required): Operation Name.
* **method**: string (Required): A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
* **policies**: string: Operation Policies
* **request**: [RequestContract](#requestcontract): An entity containing request details.
* **responses**: [ResponseContract](#responsecontract)[]: Array of Operation responses.
* **templateParameters**: [ParameterContract](#parametercontract)[]: Collection of URL template parameters.
* **urlTemplate**: string (Required): Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}

## ParameterContract
### Properties
* **defaultValue**: string: Default parameter value.
* **description**: string: Parameter description.
* **name**: string (Required): Parameter name.
* **required**: bool: Specifies whether parameter is required or not.
* **type**: string (Required): Parameter type.
* **values**: string[]: Parameter values.

## PipelineDiagnosticSettings
### Properties
* **request**: [HttpMessageDiagnostic](#httpmessagediagnostic): Diagnostic settings for request.
* **response**: [HttpMessageDiagnostic](#httpmessagediagnostic): Diagnostic settings for response.

## PolicyContractProperties
### Properties
* **format**: 'rawxml' | 'rawxml-link' | 'xml' | 'xml-link' | string: Format of the policyContent.
* **value**: string (Required): Contents of the Policy as defined by the format.

## PortalDelegationSettingsProperties
### Properties
* **subscriptions**: [SubscriptionsDelegationSettingsProperties](#subscriptionsdelegationsettingsproperties): Subscriptions delegation settings.
* **url**: string: A delegation Url.
* **userRegistration**: [RegistrationDelegationSettingsProperties](#registrationdelegationsettingsproperties): User registration delegation settings.
* **validationKey**: string: A base64-encoded validation key to validate, that a request is coming from Azure API Management.

## PortalSettingValidationKeyContract
### Properties
* **validationKey**: string: This is secret value of the validation key in portal settings.

## PortalSigninSettingProperties
### Properties
* **enabled**: bool: Redirect Anonymous users to the Sign-In page.

## PortalSignupSettingsProperties
### Properties
* **enabled**: bool: Allow users to sign up on a developer portal.
* **termsOfService**: [TermsOfServiceProperties](#termsofserviceproperties): Terms of service contract properties.

## ProductContractProperties
### Properties
* **approvalRequired**: bool: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of true.
* **description**: string: Product description. May include HTML formatting tags.
* **displayName**: string (Required): Product name.
* **state**: 'notPublished' | 'published': whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
* **subscriptionRequired**: bool: Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
* **subscriptionsLimit**: int: Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of true.
* **terms**: string: Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.

## PropertyValueContract
### Properties
* **value**: string: This is secret value of the NamedValue entity.

## RecipientsContractProperties
### Properties
* **emails**: string[]: List of Emails subscribed for the notification.
* **users**: string[]: List of Users subscribed for the notification.

## RegistrationDelegationSettingsProperties
### Properties
* **enabled**: bool: Enable or disable delegation for user registration.

## RepresentationContract
### Properties
* **contentType**: string (Required): Specifies a registered or custom content type for this representation, e.g. application/xml.
* **formParameters**: [ParameterContract](#parametercontract)[]: Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
* **sample**: string: An example of the representation.
* **schemaId**: string: Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
* **typeName**: string: Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.

## RequestContract
### Properties
* **description**: string: Operation request description.
* **headers**: [ParameterContract](#parametercontract)[]: Collection of operation request headers.
* **queryParameters**: [ParameterContract](#parametercontract)[]: Collection of operation request query parameters.
* **representations**: [RepresentationContract](#representationcontract)[]: Collection of operation request representations.

## ResourceLocationDataContract
### Properties
* **city**: string: The city or locality where the resource is located.
* **countryOrRegion**: string: The country or region where the resource is located.
* **district**: string: The district, state, or province where the resource is located.
* **name**: string (Required): A canonical name for the geographic or physical location.

## ResponseContract
### Properties
* **description**: string: Operation response description.
* **headers**: [ParameterContract](#parametercontract)[]: Collection of operation response headers.
* **representations**: [RepresentationContract](#representationcontract)[]: Collection of operation response representations.
* **statusCode**: int (Required): Operation response HTTP status code.

## SamplingSettings
### Properties
* **percentage**: int: Rate of sampling for fixed-rate sampling.
* **samplingType**: 'fixed' | string: Sampling type.

## SchemaContractProperties
### Properties
* **contentType**: string (Required): Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
* **document**: [SchemaDocumentProperties](#schemadocumentproperties): Create or update Properties of the Schema Document.

## SchemaDocumentProperties
### Properties
* **definitions**: any: Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
* **value**: string: Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.

## SubscriptionCreateParameterPropertiesOrSubscriptionContractProperties
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
* **stateComment**: string (ReadOnly): Optional subscription comment added by an administrator.

## SubscriptionKeyParameterNamesContract
### Properties
* **header**: string: Subscription key header name.
* **query**: string: Subscription key query string parameter name.

## SubscriptionKeysContract
### Properties
* **primaryKey**: string: Subscription primary key.
* **secondaryKey**: string: Subscription secondary key.

## SubscriptionsDelegationSettingsProperties
### Properties
* **enabled**: bool: Enable or disable delegation for subscriptions.

## TagContractProperties
### Properties
* **displayName**: string (Required): Tag name.

## TagDescriptionBasePropertiesOrTagDescriptionContractProperties
### Properties
* **description**: string: Description of the Tag.
* **displayName**: string (ReadOnly): Tag name.
* **externalDocsDescription**: string: Description of the external resources describing the tag.
* **externalDocsUrl**: string: Absolute URL of external resources describing the tag.
* **tagId**: string (ReadOnly): Identifier of the tag in the form of /tags/{tagId}

## TermsOfServiceProperties
### Properties
* **consentRequired**: bool: Ask user for consent to the terms of service.
* **enabled**: bool: Display terms of service during a sign-up process.
* **text**: string: A terms of service text.

## TokenBodyParameterContract
### Properties
* **name**: string (Required): body parameter name.
* **value**: string (Required): body parameter value.

## UserCreateParameterPropertiesOrUserContractProperties
### Properties
* **appType**: 'developerPortal' | string (WriteOnly): Determines the type of application which send the create user request. Default is old publisher portal.
* **confirmation**: 'invite' | 'signup' | string (WriteOnly): Determines the type of confirmation e-mail that will be sent to the newly created user.
* **email**: string (Required): Email address. Must not be empty and must be unique within the service instance.
* **firstName**: string (Required): First name.
* **groups**: [GroupContractProperties](#groupcontractproperties)[] (ReadOnly): Collection of groups user is part of.
* **identities**: [UserIdentityContract](#useridentitycontract)[]: Collection of user identities.
* **lastName**: string (Required): Last name.
* **note**: string: Optional note about a user set by the administrator.
* **password**: string (WriteOnly): User Password. If no value is provided, a default password is generated.
* **registrationDate**: string (ReadOnly): Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **state**: 'active' | 'blocked' | 'deleted' | 'pending' | string: Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.

## UserIdentityContract
### Properties
* **id**: string: Identifier value within provider.
* **provider**: string: Identity provider name.

## UserIdentityProperties
### Properties
* **clientId**: string: The client id of user assigned identity.
* **principalId**: string: The principal id of user assigned identity.

## VirtualNetworkConfiguration
### Properties
* **subnetname**: string (ReadOnly): The name of the subnet.
* **subnetResourceId**: string: The full resource ID of a subnet in a virtual network to deploy the API Management service in.
* **vnetid**: string (ReadOnly): The virtual network ID. This is typically a GUID. Expect a null GUID by default.

## X509CertificateName
### Properties
* **issuerCertificateThumbprint**: string: Thumbprint for the Issuer of the Certificate.
* **name**: string: Common Name of the Certificate.

