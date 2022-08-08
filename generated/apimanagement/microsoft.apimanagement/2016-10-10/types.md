# Microsoft.ApiManagement @ 2016-10-10

## Resource Microsoft.ApiManagement/service@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiManagementServiceProperties](#apimanagementserviceproperties) (Required): Properties of the API Management service.
* **sku**: [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties) (Required): SKU properties of the API Management service.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.ApiManagement/service' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **authenticationSettings**: [AuthenticationSettingsContract](#authenticationsettingscontract) (WriteOnly): Collection of authentication settings included into this API.
* **content**: any (ReadOnly): Response content bytes.
* **description**: string (WriteOnly): Description of the API. May include HTML formatting tags.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **path**: string (Required, WriteOnly): Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
* **protocols**: 'Http' | 'Https'[] (Required, WriteOnly): Describes on which protocols the operations in this API can be invoked.
* **requestId**: string (ReadOnly)
* **serviceUrl**: string (Required, WriteOnly): Absolute URL of the backend service implementing this API.
* **statusCode**: 'Accepted' | 'Conflict' | 'Continue' | 'Created' | 'NotFound' | 'OK' (ReadOnly)
* **subscriptionKeyParameterNames**: [SubscriptionKeyParameterNamesContract](#subscriptionkeyparameternamescontract) (WriteOnly): Protocols over which API is made available.
* **type**: 'Microsoft.ApiManagement/service/apis' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/apis/operations@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **description**: string: Description of the operation. May include HTML formatting tags.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **method**: string (Required): A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
* **name**: string (Required, DeployTimeConstant): The resource name
* **request**: [RequestContract](#requestcontract): An entity containing request details.
* **responses**: [ResultContract](#resultcontract)[]: Array of Operation responses.
* **templateParameters**: [ParameterContract](#parametercontract)[]: Collection of URL template parameters.
* **type**: 'Microsoft.ApiManagement/service/apis/operations' (ReadOnly, DeployTimeConstant): The resource type
* **urlTemplate**: string (Required): Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}

## Resource Microsoft.ApiManagement/service/authorizationServers@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **authorizationEndpoint**: string (Required): OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
* **authorizationMethods**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE'[]: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
* **bearerTokenSendingMethods**: 'authorizationHeader' | 'query'[]: Specifies the mechanism by which access token is passed to the API.
* **clientAuthenticationMethod**: 'Basic' | 'Body'[]: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
* **clientId**: string (Required): Client or app id registered with this authorization server.
* **clientRegistrationEndpoint**: string (Required): Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
* **clientSecret**: string: Client or app secret registered with this authorization server.
* **defaultScope**: string: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
* **description**: string: Description of the authorization server. Can contain HTML formatting tags.
* **grantTypes**: 'authorizationCode' | 'clientCredentials' | 'implicit' | 'resourceOwnerPassword'[] (Required): Form of an authorization grant, which the client uses to request the access token.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **resourceOwnerPassword**: string: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
* **resourceOwnerUsername**: string: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
* **supportState**: bool: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
* **tokenBodyParameters**: [TokenBodyParameterContract](#tokenbodyparametercontract)[]: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
* **tokenEndpoint**: string: OAuth token endpoint. Contains absolute URI to entity being referenced.
* **type**: 'Microsoft.ApiManagement/service/authorizationServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/backends@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **certificate**: string[]: List of Client Certificate Thumbprint.
* **description**: string: Backend Description.
* **header**: [BackendCredentialsContractHeader](#backendcredentialscontractheader): Header Parameter description.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **parameter**: string (Required): Authentication Parameter value.
* **password**: string: Password to connect to the WebProxy Server
* **properties**: [BackendProperties](#backendproperties): Properties specific to a Backend.
* **protocol**: 'http' | 'soap' | string (Required): Backend communication protocol.
* **query**: [BackendCredentialsContractQuery](#backendcredentialscontractquery): Query Parameter description.
* **resourceId**: string: Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
* **scheme**: string (Required): Authentication Scheme name.
* **title**: string: Backend Title.
* **type**: 'Microsoft.ApiManagement/service/backends' (ReadOnly, DeployTimeConstant): The resource type
* **url**: string (Required): WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
* **username**: string: Username to connect to the WebProxy server

## Resource Microsoft.ApiManagement/service/certificates@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **data**: string (Required, WriteOnly): Base 64 encoded certificate using the application/x-pkcs12 representation.
* **expirationDate**: string (ReadOnly): Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **password**: string (Required, WriteOnly): Password for the Certificate
* **subject**: string (ReadOnly): Subject attribute of the certificate.
* **thumbprint**: string (ReadOnly): Thumbprint of the certificate.
* **type**: 'Microsoft.ApiManagement/service/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/groups@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **builtIn**: bool (ReadOnly): true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
* **description**: string: Group description.
* **externalId**: string: Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/groups/users@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/groups/users' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/identityProviders@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allowedTenants**: string[]: List of Allowed Tenants when configuring Azure Active Directory login.
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **clientId**: string (Required): Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
* **clientSecret**: string (Required): Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'aad' | 'aadB2C' | 'facebook' | 'google' | 'microsoft' | 'twitter' | string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/identityProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/loggers@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **credentials**: [LoggerCreateParametersCredentials](#loggercreateparameterscredentials) (Required): The name and SendRule connection string of the event hub.
* **description**: string: Logger description.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **isBuffered**: bool: Whether records are buffered in the logger before publishing. Default is assumed to be true.
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/loggers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/openidConnectProviders@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **clientId**: string (Required): Client ID of developer console which is the client application.
* **clientSecret**: string: Client Secret of developer console which is the client application.
* **description**: string: User-friendly description of OpenID Connect Provider.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **metadataEndpoint**: string (Required): Metadata endpoint URI.
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/openidConnectProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/products@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **approvalRequired**: bool: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of true.
* **description**: string: Product description. May include HTML formatting tags.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **state**: 'NotPublished' | 'Published': whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is NotPublished.
* **subscriptionRequired**: bool: Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
* **subscriptionsLimit**: int: Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of true.
* **terms**: string: Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.
* **type**: 'Microsoft.ApiManagement/service/products' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/products/apis@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/products/apis' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/products/groups@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/products/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/properties@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **secret**: bool: Determines whether the value is a secret and should be encrypted or not. Default value is false.
* **tags**: string[]: Optional tags that when provided can be used to filter the property list.
* **type**: 'Microsoft.ApiManagement/service/properties' (ReadOnly, DeployTimeConstant): The resource type
* **value**: string (Required): Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.

## Resource Microsoft.ApiManagement/service/subscriptions@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **createdDate**: string (ReadOnly): Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **endDate**: string (ReadOnly): Date when subscription was cancelled or expired. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **expirationDate**: string (ReadOnly): Subscription expiration date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **notificationDate**: string (ReadOnly): Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **primaryKey**: string: Primary subscription key. If not specified during request key will be generated automatically.
* **productId**: string (Required): Product (product id path) for which subscription is being created in form /products/{productId}
* **secondaryKey**: string: Secondary subscription key. If not specified during request key will be generated automatically.
* **startDate**: string (ReadOnly): Subscription activation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **state**: 'Active' | 'Cancelled' | 'Expired' | 'Rejected' | 'Submitted' | 'Suspended': Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
* **stateComment**: string (ReadOnly): Optional subscription comment added by an administrator.
* **type**: 'Microsoft.ApiManagement/service/subscriptions' (ReadOnly, DeployTimeConstant): The resource type
* **userId**: string (Required): User (user id path) for whom subscription is being created in form /users/{uid}

## Resource Microsoft.ApiManagement/service/tenant@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'policy' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.ApiManagement/service/tenant' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/service/users@2016-10-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-10' (ReadOnly, DeployTimeConstant): The resource api version
* **email**: string (Required): Email address. Must not be empty and must be unique within the service instance.
* **firstName**: string (Required): First name.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identities**: [UserIdentityContract](#useridentitycontract)[] (ReadOnly): Collection of user identities.
* **lastName**: string (Required): Last name.
* **name**: string (Required, DeployTimeConstant): The resource name
* **note**: string: Optional note about a user set by the administrator.
* **password**: string (Required, WriteOnly): User Password.
* **registrationDate**: string (ReadOnly): Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **state**: 'Active' | 'Blocked': Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
* **type**: 'Microsoft.ApiManagement/service/users' (ReadOnly, DeployTimeConstant): The resource type

## AdditionalRegion
### Properties
* **location**: string (Required): The location name of the additional region among Azure Data center regions.
* **skuType**: 'Developer' | 'Premium' | 'Standard' (Required): The SKU type in the location.
* **skuUnitCount**: int: The SKU Unit count at the location. The maximum SKU Unit count depends on the SkuType. Maximum allowed for Developer SKU is 1, for Standard SKU is 4, and for Premium SKU is 10, at a location.
* **staticIPs**: string[] (ReadOnly): Static IP addresses of the location's virtual machines.
* **vpnconfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration): Virtual network configuration for the location.

## ApiManagementServiceProperties
### Properties
* **additionalLocations**: [AdditionalRegion](#additionalregion)[]: Additional datacenter locations of the API Management service.
* **addresserEmail**: string: Addresser email.
* **createdAtUtc**: string (ReadOnly): Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **customProperties**: [ApiManagementServicePropertiesCustomProperties](#apimanagementservicepropertiescustomproperties): Custom properties of the API Management service, like disabling TLS 1.0.
* **hostnameConfigurations**: [HostnameConfiguration](#hostnameconfiguration)[]: Custom hostname configuration of the API Management service.
* **managementApiUrl**: string (ReadOnly): Management API endpoint URL of the API Management service.
* **portalUrl**: string (ReadOnly): Publisher portal endpoint Url of the API Management service.
* **provisioningState**: string (ReadOnly): The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
* **publisherEmail**: string (Required): Publisher email.
* **publisherName**: string (Required): Publisher name.
* **runtimeUrl**: string (ReadOnly): Proxy endpoint URL of the API Management service.
* **scmUrl**: string (ReadOnly): SCM endpoint URL of the API Management service.
* **staticIPs**: string[] (ReadOnly): Static IP addresses of the API Management service virtual machines. Available only for Standard and Premium SKU.
* **targetProvisioningState**: string (ReadOnly): The provisioning state of the API Management service, which is targeted by the long running operation started on the service.
* **vpnconfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration): Virtual network configuration of the API Management service.
* **vpnType**: 'External' | 'Internal' | 'None': The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.

## ApiManagementServicePropertiesCustomProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiManagementServiceSkuProperties
### Properties
* **capacity**: int: Capacity of the SKU (number of deployed units of the SKU). The default value is 1.
* **name**: 'Developer' | 'Premium' | 'Standard' (Required): Name of the Sku.

## AuthenticationSettingsContract
### Properties
* **oAuth2**: [OAuth2AuthenticationSettingsContract](#oauth2authenticationsettingscontract): API OAuth2 Authentication settings details.

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
* **skipCertificateChainValidation**: bool: Flag indicating whether SSL certificate chain validation should be skipped when using self-signed certificates for this backend host.
* **skipCertificateNameValidation**: bool: Flag indicating whether SSL certificate name validation should be skipped when using self-signed certificates for this backend host.

## CertificateInformation
### Properties
* **expiry**: string (Required): Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
* **subject**: string (Required): Subject of the certificate.
* **thumbprint**: string (Required): Thumbprint of the certificate.

## HostnameConfiguration
### Properties
* **certificate**: [CertificateInformation](#certificateinformation) (Required): Certificate information.
* **hostname**: string (Required): Hostname.
* **type**: 'Management' | 'Portal' | 'Proxy' | 'Scm' (Required): Hostname type.

## LoggerCreateParametersCredentials
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OAuth2AuthenticationSettingsContract
### Properties
* **authorizationServerId**: string: OAuth authorization server identifier.
* **scope**: string: operations scope.

## ParameterContract
### Properties
* **defaultValue**: string: Default parameter value.
* **description**: string: Parameter description.
* **name**: string (Required): Parameter name.
* **required**: bool: whether parameter is required or not.
* **type**: string (Required): Parameter type.
* **values**: string[]: Parameter values.

## RepresentationContract
### Properties
* **contentType**: string (Required): Specifies a registered or custom content type for this representation, e.g. application/xml.
* **sample**: string: An example of the representation.

## RequestContract
### Properties
* **description**: string: Operation request description.
* **headers**: [ParameterContract](#parametercontract)[]: Collection of operation request headers.
* **queryParameters**: [ParameterContract](#parametercontract)[]: Collection of operation request query parameters.
* **representations**: [RepresentationContract](#representationcontract)[]: Collection of operation request representations.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResultContract
### Properties
* **description**: string: Operation response description.
* **representations**: [RepresentationContract](#representationcontract)[]: Collection of operation response representations.
* **statusCode**: int (Required): Operation response HTTP status code.

## SubscriptionKeyParameterNamesContract
### Properties
* **header**: string: Subscription key header name.
* **query**: string: Subscription key query string parameter name.

## TokenBodyParameterContract
### Properties
* **name**: string (Required): body parameter name.
* **value**: string (Required): body parameter value.

## UserIdentityContract
### Properties
* **id**: string: Identifier value within provider.
* **provider**: string: Identity provider name.

## VirtualNetworkConfiguration
### Properties
* **location**: string: The location of the virtual network.
* **subnetname**: string (ReadOnly): The name of the subnet.
* **subnetResourceId**: string: The full resource ID of a subnet in a virtual network to deploy the API Management service in.
* **vnetid**: string (ReadOnly): The virtual network ID. This is typically a GUID. Expect a null GUID by default.

