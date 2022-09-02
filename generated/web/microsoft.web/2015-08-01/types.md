# Microsoft.Web @ 2015-08-01

## Resource Microsoft.Web/certificates@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/classicMobileServices@2015-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClassicMobileServiceProperties](#classicmobileserviceproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Web/classicMobileServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/csrs@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CsrProperties](#csrproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/csrs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostingEnvironmentProperties](#hostingenvironmentproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/hostingEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/multiRolePools@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [WorkerPoolProperties](#workerpoolproperties)
* **sku**: [SkuDescription](#skudescription): Describes a sku for a scalable resource
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/hostingEnvironments/multiRolePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/workerPools@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkerPoolProperties](#workerpoolproperties)
* **sku**: [SkuDescription](#skudescription): Describes a sku for a scalable resource
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/hostingEnvironments/workerPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/managedHostingEnvironments@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostingEnvironmentPropertiesOrManagedHostingEnvironmentProperties](#hostingenvironmentpropertiesormanagedhostingenvironmentproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/managedHostingEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/publishingUsers@2015-08-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/publishingUsers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerFarmWithRichSkuProperties](#serverfarmwithrichskuproperties)
* **sku**: [SkuDescription](#skudescription): Describes a sku for a scalable resource
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/serverfarms' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/operationresults@2015-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerFarmWithRichSkuProperties](#serverfarmwithrichskuproperties) (ReadOnly)
* **sku**: [SkuDescription](#skudescription) (ReadOnly): Describes a sku for a scalable resource
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Web/serverfarms/operationresults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections@2015-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfoProperties](#vnetinfoproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (WriteOnly): Kind of resource
* **location**: string (Required, WriteOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetRouteProperties](#vnetrouteproperties) (WriteOnly)
* **tags**: [ResourceTags](#resourcetags) (WriteOnly): Resource tags
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/backups@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'discover' | string (Required, DeployTimeConstant): The resource name
* **properties**: [RestoreRequestPropertiesOrBackupItemProperties](#restorerequestpropertiesorbackupitemproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/config@2015-08-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **aadClientId**: string
* **additionalLoginParams**: string[]: Gets or sets a list of login parameters to send to the OpenID Connect authorization endpoint when
            a user logs in. Each parameter must be in the form "key=value".
* **allowedAudiences**: string[]: Gets or sets a list of allowed audience values to consider when validating JWTs issued by 
            Azure Active Directory. Note that the {Microsoft.Web.Hosting.Administration.SiteAuthSettings.ClientId} value is always considered an
            allowed audience, regardless of this setting.
* **allowedExternalRedirectUrls**: string[]: Gets or sets a collection of external URLs that can be redirected to as part of logging in
            or logging out of the web app. Note that the query string part of the URL is ignored.
            This is an advanced setting typically only needed by Windows Store application backends.
            Note that URLs within the current domain are always implicitly allowed.
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **clientId**: string: Gets or sets the Client ID of this relying party application, known as the client_id.
            This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
            other 3rd party OpenID Connect providers.
            More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
* **clientSecret**: string: Gets or sets the Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).
            This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.
            Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.
            More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
* **defaultProvider**: 'AzureActiveDirectory' | 'Facebook' | 'Google' | 'MicrosoftAccount' | 'Twitter': Gets or sets the default authentication provider to use when multiple providers are configured.
            This setting is only needed if multiple providers are configured and the unauthenticated client
            action is set to "RedirectToLoginPage".
* **enabled**: bool: Gets or sets a value indicating whether the Authentication / Authorization feature is enabled for the current app.
* **facebookAppId**: string: Gets or sets the App ID of the Facebook app used for login.
            This setting is required for enabling Facebook Login.
            Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **facebookAppSecret**: string: Gets or sets the App Secret of the Facebook app used for Facebook Login.
            This setting is required for enabling Facebook Login.
            Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **facebookOAuthScopes**: string[]: Gets or sets the OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.
            This setting is optional.
            Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **googleClientId**: string: Gets or sets the OpenID Connect Client ID for the Google web application.
            This setting is required for enabling Google Sign-In.
            Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **googleClientSecret**: string: Gets or sets the client secret associated with the Google web application.
            This setting is required for enabling Google Sign-In.
            Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **googleOAuthScopes**: string[]: Gets or sets the OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.
            This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.
            Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **httpApiPrefixPath**: string: Gets or sets the relative path prefix used by platform HTTP APIs.
            Changing this value is not recommended except for compatibility reasons.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **issuer**: string: Gets or sets the OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
            When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://sts.windows.net/{tenant-guid}/.
            This URI is a case-sensitive identifier for the token issuer.
            More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
* **microsoftAccountClientId**: string: Gets or sets the OAuth 2.0 client ID that was created for the app used for authentication.
            This setting is required for enabling Microsoft Account authentication.
            Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
* **microsoftAccountClientSecret**: string: Gets or sets the OAuth 2.0 client secret that was created for the app used for authentication.
            This setting is required for enabling Microsoft Account authentication.
            Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
* **microsoftAccountOAuthScopes**: string[]: Gets or sets the OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.
            This setting is optional. If not specified, "wl.basic" is used as the default scope.
            Microsoft Account Scopes and permissions documentation: https://msdn.microsoft.com/en-us/library/dn631845.aspx
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **openIdIssuer**: string
* **tokenRefreshExtensionHours**: int: Gets or sets the number of hours after session token expiration that a session token can be used to
            call the token refresh API. The default is 72 hours.
* **tokenStoreEnabled**: bool: Gets or sets a value indicating whether to durably store platform-specific security tokens
            obtained during login flows. This capability is disabled by default.
* **twitterConsumerKey**: string: Gets or sets the OAuth 1.0a consumer key of the Twitter application used for sign-in.
            This setting is required for enabling Twitter Sign-In.
            Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
* **twitterConsumerSecret**: string: Gets or sets the OAuth 1.0a consumer secret of the Twitter application used for sign-in.
            This setting is required for enabling Twitter Sign-In.
            Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type
* **unauthenticatedClientAction**: 'AllowAnonymous' | 'RedirectToLoginPage': Gets or sets the action to take when an unauthenticated client attempts to access the app.

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupRequestProperties](#backuprequestproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionStringDictionaryProperties](#connectionstringdictionaryproperties): Connection strings
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteLogsConfigProperties](#sitelogsconfigproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'slotConfigNames' (Required, DeployTimeConstant): The resource name
* **properties**: [SlotConfigNamesResourceProperties](#slotconfignamesresourceproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfigProperties](#siteconfigproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/deployments@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hostNameBindings@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hybridconnection@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/deployments@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/instances/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/networkFeatures@2015-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFeaturesProperties](#networkfeaturesproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Web/sites/networkFeatures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/premieraddons@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Geo region resource belongs to e.g. SouthCentralUS, SouthEastAsia
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [ArmPlan](#armplan) (WriteOnly): Azure resource manager plan
* **properties**: any (WriteOnly): Resource specific properties
* **sku**: [SkuDescription](#skudescription) (WriteOnly): Sku description of the resource
* **tags**: [PremierAddOnRequestTags](#premieraddonrequesttags) (WriteOnly): Tags associated with resource
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/backups@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'discover' | string (Required, DeployTimeConstant): The resource name
* **properties**: [RestoreRequestPropertiesOrBackupItemProperties](#restorerequestpropertiesorbackupitemproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/config@2015-08-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **aadClientId**: string
* **additionalLoginParams**: string[]: Gets or sets a list of login parameters to send to the OpenID Connect authorization endpoint when
            a user logs in. Each parameter must be in the form "key=value".
* **allowedAudiences**: string[]: Gets or sets a list of allowed audience values to consider when validating JWTs issued by 
            Azure Active Directory. Note that the {Microsoft.Web.Hosting.Administration.SiteAuthSettings.ClientId} value is always considered an
            allowed audience, regardless of this setting.
* **allowedExternalRedirectUrls**: string[]: Gets or sets a collection of external URLs that can be redirected to as part of logging in
            or logging out of the web app. Note that the query string part of the URL is ignored.
            This is an advanced setting typically only needed by Windows Store application backends.
            Note that URLs within the current domain are always implicitly allowed.
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **clientId**: string: Gets or sets the Client ID of this relying party application, known as the client_id.
            This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
            other 3rd party OpenID Connect providers.
            More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
* **clientSecret**: string: Gets or sets the Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).
            This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.
            Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.
            More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
* **defaultProvider**: 'AzureActiveDirectory' | 'Facebook' | 'Google' | 'MicrosoftAccount' | 'Twitter': Gets or sets the default authentication provider to use when multiple providers are configured.
            This setting is only needed if multiple providers are configured and the unauthenticated client
            action is set to "RedirectToLoginPage".
* **enabled**: bool: Gets or sets a value indicating whether the Authentication / Authorization feature is enabled for the current app.
* **facebookAppId**: string: Gets or sets the App ID of the Facebook app used for login.
            This setting is required for enabling Facebook Login.
            Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **facebookAppSecret**: string: Gets or sets the App Secret of the Facebook app used for Facebook Login.
            This setting is required for enabling Facebook Login.
            Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **facebookOAuthScopes**: string[]: Gets or sets the OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.
            This setting is optional.
            Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **googleClientId**: string: Gets or sets the OpenID Connect Client ID for the Google web application.
            This setting is required for enabling Google Sign-In.
            Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **googleClientSecret**: string: Gets or sets the client secret associated with the Google web application.
            This setting is required for enabling Google Sign-In.
            Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **googleOAuthScopes**: string[]: Gets or sets the OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.
            This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.
            Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **httpApiPrefixPath**: string: Gets or sets the relative path prefix used by platform HTTP APIs.
            Changing this value is not recommended except for compatibility reasons.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **issuer**: string: Gets or sets the OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
            When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://sts.windows.net/{tenant-guid}/.
            This URI is a case-sensitive identifier for the token issuer.
            More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
* **microsoftAccountClientId**: string: Gets or sets the OAuth 2.0 client ID that was created for the app used for authentication.
            This setting is required for enabling Microsoft Account authentication.
            Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
* **microsoftAccountClientSecret**: string: Gets or sets the OAuth 2.0 client secret that was created for the app used for authentication.
            This setting is required for enabling Microsoft Account authentication.
            Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
* **microsoftAccountOAuthScopes**: string[]: Gets or sets the OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.
            This setting is optional. If not specified, "wl.basic" is used as the default scope.
            Microsoft Account Scopes and permissions documentation: https://msdn.microsoft.com/en-us/library/dn631845.aspx
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **openIdIssuer**: string
* **tokenRefreshExtensionHours**: int: Gets or sets the number of hours after session token expiration that a session token can be used to
            call the token refresh API. The default is 72 hours.
* **tokenStoreEnabled**: bool: Gets or sets a value indicating whether to durably store platform-specific security tokens
            obtained during login flows. This capability is disabled by default.
* **twitterConsumerKey**: string: Gets or sets the OAuth 1.0a consumer key of the Twitter application used for sign-in.
            This setting is required for enabling Twitter Sign-In.
            Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
* **twitterConsumerSecret**: string: Gets or sets the OAuth 1.0a consumer secret of the Twitter application used for sign-in.
            This setting is required for enabling Twitter Sign-In.
            Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type
* **unauthenticatedClientAction**: 'AllowAnonymous' | 'RedirectToLoginPage': Gets or sets the action to take when an unauthenticated client attempts to access the app.

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupRequestProperties](#backuprequestproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionStringDictionaryProperties](#connectionstringdictionaryproperties): Connection strings
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteLogsConfigProperties](#sitelogsconfigproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfigProperties](#siteconfigproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/slots/deployments@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hostNameBindings@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hybridconnection@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/deployments@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/instances/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/networkFeatures@2015-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFeaturesProperties](#networkfeaturesproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Web/sites/slots/networkFeatures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/premieraddons@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Geo region resource belongs to e.g. SouthCentralUS, SouthEastAsia
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [ArmPlan](#armplan) (WriteOnly): Azure resource manager plan
* **properties**: any (WriteOnly): Resource specific properties
* **sku**: [SkuDescription](#skudescription) (WriteOnly): Sku description of the resource
* **tags**: [PremierAddOnRequestTags](#premieraddonrequesttags) (WriteOnly): Tags associated with resource
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/sourcecontrols@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfoProperties](#vnetinfoproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (WriteOnly): Kind of resource
* **location**: string (Required, WriteOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties) (WriteOnly)
* **tags**: [ResourceTags](#resourcetags) (WriteOnly): Resource tags
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/sourcecontrols@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/virtualNetworkConnections@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfoProperties](#vnetinfoproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/virtualNetworkConnections/gateways@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (WriteOnly): Kind of resource
* **location**: string (Required, WriteOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties) (WriteOnly)
* **tags**: [ResourceTags](#resourcetags) (WriteOnly): Resource tags
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sourcecontrols@2015-08-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlProperties](#sourcecontrolproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Web/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Function list (Microsoft.Web/sites/slots/config@2015-08-01)
* **Resource**: Microsoft.Web/sites/slots/config
* **ApiVersion**: 2015-08-01
* **Output**: [StringDictionary](#stringdictionary)

## Function list (Microsoft.Web/sites/config@2015-08-01)
* **Resource**: Microsoft.Web/sites/config
* **ApiVersion**: 2015-08-01
* **Output**: [StringDictionary](#stringdictionary)

## Function list (Microsoft.Web/sites/slots/backups@2015-08-01)
* **Resource**: Microsoft.Web/sites/slots/backups
* **ApiVersion**: 2015-08-01
* **Input**: [BackupRequest](#backuprequest)
* **Output**: [BackupItem](#backupitem)

## Function list (Microsoft.Web/sites/backups@2015-08-01)
* **Resource**: Microsoft.Web/sites/backups
* **ApiVersion**: 2015-08-01
* **Input**: [BackupRequest](#backuprequest)
* **Output**: [BackupItem](#backupitem)

## ApiDefinitionInfo
### Properties
* **url**: string: The URL of the API definition.

## ApplicationLogsConfig
### Properties
* **azureBlobStorage**: [AzureBlobStorageApplicationLogsConfig](#azureblobstorageapplicationlogsconfig): Application logs to blob storage configuration
* **azureTableStorage**: [AzureTableStorageApplicationLogsConfig](#azuretablestorageapplicationlogsconfig): Application logs to azure table storage configuration
* **fileSystem**: [FileSystemApplicationLogsConfig](#filesystemapplicationlogsconfig): Application logs to file system configuration

## ArmPlan
### Properties
* **name**: string: The name
* **product**: string: The product
* **promotionCode**: string: The promotion code
* **publisher**: string: The publisher
* **version**: string: Version of product

## AutoHealActions
### Properties
* **actionType**: 'CustomAction' | 'LogEvent' | 'Recycle' (Required): ActionType - predefined action to be taken
* **customAction**: [AutoHealCustomAction](#autohealcustomaction): CustomAction - custom action to be taken
* **minProcessExecutionTime**: string: MinProcessExecutionTime - minimum time the process must execute
            before taking the action

## AutoHealCustomAction
### Properties
* **exe**: string: Executable to be run
* **parameters**: string: Parameters for the executable

## AutoHealRules
### Properties
* **actions**: [AutoHealActions](#autohealactions): Actions - Actions to be executed when a rule is triggered
* **triggers**: [AutoHealTriggers](#autohealtriggers): Triggers - Conditions that describe when to execute the auto-heal actions

## AutoHealTriggers
### Properties
* **privateBytesInKB**: int: PrivateBytesInKB - Defines a rule based on private bytes
* **requests**: [RequestsBasedTrigger](#requestsbasedtrigger): Requests - Defines a rule based on total requests
* **slowRequests**: [SlowRequestsBasedTrigger](#slowrequestsbasedtrigger): SlowRequests - Defines a rule based on request execution time
* **statusCodes**: [StatusCodesBasedTrigger](#statuscodesbasedtrigger)[]: StatusCodes - Defines a rule based on status codes

## AzureBlobStorageApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level
* **retentionInDays**: int: Retention in days.
            Remove blobs older than X days.
            0 or lower means no retention.
* **sasUrl**: string: SAS url to a azure blob container with read/write/list/delete permissions

## AzureBlobStorageHttpLogsConfig
### Properties
* **enabled**: bool: Enabled
* **retentionInDays**: int: Retention in days.
            Remove blobs older than X days.
            0 or lower means no retention.
* **sasUrl**: string: SAS url to a azure blob container with read/write/list/delete permissions

## AzureTableStorageApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level
* **sasUrl**: string: SAS url to an azure table with add/query/delete permissions

## BackupItem
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [BackupItemProperties](#backupitemproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## BackupItem
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [BackupItemProperties](#backupitemproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## BackupItemProperties
### Properties
* **blobName**: string: Name of the blob which contains data for this backup
* **correlationId**: string: Unique correlation identifier. Please use this along with the timestamp while communicating with Azure support.
* **created**: string: Timestamp of the backup creation
* **databases**: [DatabaseBackupSetting](#databasebackupsetting)[]: List of databases included in the backup
* **finishedTimeStamp**: string: Timestamp when this backup finished.
* **id**: int: Id of the backup.
* **lastRestoreTimeStamp**: string: Timestamp of a last restore operation which used this backup.
* **log**: string: Details regarding this backup. Might contain an error message.
* **name**: string: Name of this backup
* **scheduled**: bool: True if this backup has been created due to a schedule being triggered.
* **sizeInBytes**: int: Size of the backup in bytes
* **status**: 'Created' | 'DeleteFailed' | 'DeleteInProgress' | 'Deleted' | 'Failed' | 'InProgress' | 'PartiallySucceeded' | 'Skipped' | 'Succeeded' | 'TimedOut' (Required): Backup status
* **storageAccountUrl**: string: SAS URL for the storage account container which contains this backup
* **websiteSizeInBytes**: int: Size of the original web app which has been backed up

## BackupRequest
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [BackupRequestProperties](#backuprequestproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## BackupRequest
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [BackupRequestProperties](#backuprequestproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## BackupRequestProperties
### Properties
* **backupSchedule**: [BackupSchedule](#backupschedule): Schedule for the backup if it is executed periodically
* **databases**: [DatabaseBackupSetting](#databasebackupsetting)[]: Databases included in the backup
* **enabled**: bool: True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled
* **name**: string: Name of the backup
* **storageAccountUrl**: string: SAS URL to the container
* **type**: 'Clone' | 'Default' | 'Relocation' (Required): Type of the backup

## BackupSchedule
### Properties
* **frequencyInterval**: int: How often should be the backup executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
* **frequencyUnit**: 'Day' | 'Hour' (Required): How often should be the backup executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
* **keepAtLeastOneBackup**: bool: True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
* **lastExecutionTime**: string: The last time when this schedule was triggered
* **retentionPeriodInDays**: int: After how many days backups should be deleted
* **startTime**: string: When the schedule should start working

## CertificateProperties
### Properties
* **cerBlob**: string: Raw bytes of .cer file
* **expirationDate**: string: Certificate expiration date
* **friendlyName**: string: Friendly name of the certificate
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile): Specification for the hosting environment (App Service Environment) to use for the certificate
* **hostNames**: string[]: Host names the certificate applies to
* **issueDate**: string: Certificate issue Date
* **issuer**: string: Certificate issuer
* **password**: string: Certificate password
* **pfxBlob**: string: Pfx blob
* **publicKeyHash**: string: Public key hash
* **selfLink**: string: Self link
* **siteName**: string: App name
* **subjectName**: string: Subject name of the certificate
* **thumbprint**: string: Certificate thumbprint
* **valid**: bool: Is the certificate valid?

## ClassicMobileServiceProperties
### Properties
* **name**: string: Name of the mobile service

## CloningInfo
### Properties
* **appSettingsOverrides**: [CloningInfoAppSettingsOverrides](#cloninginfoappsettingsoverrides): Application settings overrides for cloned web app. If specified these settings will override the settings cloned 
            from source web app. If not specified, application settings from source web app are retained.
* **cloneCustomHostNames**: bool: If true, clone custom hostnames from source web app
* **cloneSourceControl**: bool: Clone source control from source web app
* **configureLoadBalancing**: bool: If specified configure load balancing for source and clone site
* **correlationId**: string: Correlation Id of cloning operation. This id ties multiple cloning operations
            together to use the same snapshot
* **hostingEnvironment**: string: Hosting environment
* **overwrite**: bool: Overwrite destination web app
* **sourceWebAppId**: string: ARM resource id of the source web app. Web app resource id is of the form 
            /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and 
            /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots
* **trafficManagerProfileId**: string: ARM resource id of the traffic manager profile to use if it exists. Traffic manager resource id is of the form 
            /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}
* **trafficManagerProfileName**: string: Name of traffic manager profile to create. This is only needed if traffic manager profile does not already exist

## CloningInfoAppSettingsOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionStringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnStringValueTypePair](#connstringvaluetypepair)

## ConnectionStringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnStringValueTypePair](#connstringvaluetypepair)

## ConnStringInfo
### Properties
* **connectionString**: string: Connection string value
* **name**: string: Name of connection string
* **type**: 'Custom' | 'MySql' | 'SQLAzure' | 'SQLServer' (Required): Type of database

## ConnStringValueTypePair
### Properties
* **type**: 'Custom' | 'MySql' | 'SQLAzure' | 'SQLServer' (Required): Type of database
* **value**: string: Value of pair

## CorsSettings
### Properties
* **allowedOrigins**: string[]: Gets or sets the list of origins that should be allowed to make cross-origin
            calls (for example: http://example.com:12345). Use "*" to allow all.

## CsrProperties
### Properties
* **csrString**: string: Actual CSR string created
* **distinguishedName**: string: Distinguished name of certificate to be created
* **hostingEnvironment**: string: Hosting environment
* **name**: string: Name used to locate CSR object
* **password**: string: PFX password
* **pfxBlob**: string: PFX certificate of created certificate
* **publicKeyHash**: string: Hash of the certificates public key

## DatabaseBackupSetting
### Properties
* **connectionString**: string: Contains a connection string to a database which is being backed up/restored. If the restore should happen to a new database, the database name inside is the new one.
* **connectionStringName**: string: Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
            This is used during restore with overwrite connection strings options.
* **databaseType**: string: SqlAzure / MySql
* **name**: string

## DeploymentProperties
### Properties
* **active**: bool: Active
* **author**: string: Author
* **author_email**: string: AuthorEmail
* **deployer**: string: Deployer
* **details**: string: Detail
* **end_time**: string: EndTime
* **id**: string: Id
* **message**: string: Message
* **start_time**: string: StartTime
* **status**: int: Status

## EnabledConfig
### Properties
* **enabled**: bool: Enabled

## Experiments
### Properties
* **rampUpRules**: [RampUpRule](#rampuprule)[]: List of {Microsoft.Web.Hosting.Administration.RampUpRule} objects.

## FileSystemApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level

## FileSystemHttpLogsConfig
### Properties
* **enabled**: bool: Enabled
* **retentionInDays**: int: Retention in days.
            Remove files older than X days.
            0 or lower means no retention.
* **retentionInMb**: int: Maximum size in megabytes that http log files can use.
            When reached old log files will be removed to make space for new ones.
            Value can range between 25 and 100.

## HandlerMapping
### Properties
* **arguments**: string: Command-line arguments to be passed to the script processor.
* **extension**: string: Requests with this extension will be handled using the specified FastCGI application.
* **scriptProcessor**: string: The absolute path to the FastCGI application.

## HostingEnvironmentProfile
### Properties
* **id**: string: Resource id of the hostingEnvironment (App Service Environment)
* **name**: string: Name of the hostingEnvironment (App Service Environment) (read only)
* **type**: string: Resource type of the hostingEnvironment (App Service Environment) (read only)

## HostingEnvironmentProperties
### Properties
* **allowedMultiSizes**: string: List of comma separated strings describing which VM sizes are allowed for front-ends
* **allowedWorkerSizes**: string: List of comma separated strings describing which VM sizes are allowed for workers
* **apiManagementAccountId**: string: Api Management Account associated with this Hosting Environment
* **clusterSettings**: [NameValuePair](#namevaluepair)[]: Custom settings for changing the behavior of the hosting environment
* **databaseEdition**: string: Edition of the metadata database for the hostingEnvironment (App Service Environment) e.g. "Standard"
* **databaseServiceObjective**: string: Service objective of the metadata database for the hostingEnvironment (App Service Environment) e.g. "S0"
* **dnsSuffix**: string: DNS suffix of the hostingEnvironment (App Service Environment)
* **environmentCapacities**: [StampCapacity](#stampcapacity)[]: Current total, used, and available worker capacities
* **environmentIsHealthy**: bool: True/false indicating whether the hostingEnvironment (App Service Environment) is healthy
* **environmentStatus**: string: Detailed message about with results of the last check of the hostingEnvironment (App Service Environment)
* **internalLoadBalancingMode**: 'None' | 'Publishing' | 'Web': Specifies which endpoints to serve internally in the hostingEnvironment's (App Service Environment) VNET
* **ipsslAddressCount**: int: Number of IP SSL addresses reserved for this hostingEnvironment (App Service Environment)
* **lastAction**: string: Last deployment action on this hostingEnvironment (App Service Environment)
* **lastActionResult**: string: Result of the last deployment action on this hostingEnvironment (App Service Environment)
* **location**: string: Location of the hostingEnvironment (App Service Environment), e.g. "West US"
* **maximumNumberOfMachines**: int: Maximum number of VMs in this hostingEnvironment (App Service Environment)
* **multiRoleCount**: int: Number of front-end instances
* **multiSize**: string: Front-end VM size, e.g. "Medium", "Large"
* **name**: string: Name of the hostingEnvironment (App Service Environment)
* **networkAccessControlList**: [NetworkAccessControlEntry](#networkaccesscontrolentry)[]: Access control list for controlling traffic to the hostingEnvironment (App Service Environment)
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded': Provisioning state of the hostingEnvironment (App Service Environment)
* **resourceGroup**: string: Resource group of the hostingEnvironment (App Service Environment)
* **status**: 'Deleting' | 'Preparing' | 'Ready' | 'Scaling' (Required): Current status of the hostingEnvironment (App Service Environment)
* **subscriptionId**: string: Subscription of the hostingEnvironment (App Service Environment)
* **suspended**: bool: True/false indicating whether the hostingEnvironment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
            (most likely because NSG blocked the incoming traffic)
* **upgradeDomains**: int: Number of upgrade domains of this hostingEnvironment (App Service Environment)
* **vipMappings**: [VirtualIPMapping](#virtualipmapping)[]: Description of IP SSL mapping for this hostingEnvironment (App Service Environment)
* **virtualNetwork**: [VirtualNetworkProfile](#virtualnetworkprofile): Description of the hostingEnvironment's (App Service Environment) virtual network
* **vnetName**: string: Name of the hostingEnvironment's (App Service Environment) virtual network
* **vnetResourceGroupName**: string: Resource group of the hostingEnvironment's (App Service Environment) virtual network
* **vnetSubnetName**: string: Subnet of the hostingEnvironment's (App Service Environment) virtual network
* **workerPools**: [WorkerPool](#workerpool)[]: Description of worker pools with worker size ids, VM sizes, and number of workers in each pool

## HostingEnvironmentPropertiesOrManagedHostingEnvironmentProperties
### Properties
* **allowedMultiSizes**: string (WriteOnly): List of comma separated strings describing which VM sizes are allowed for front-ends
* **allowedWorkerSizes**: string (WriteOnly): List of comma separated strings describing which VM sizes are allowed for workers
* **apiManagementAccount**: string (ReadOnly): Resource id of the api management account associated with this managed hosting environment (read only)
* **apiManagementAccountId**: string (WriteOnly): Api Management Account associated with this Hosting Environment
* **clusterSettings**: [NameValuePair](#namevaluepair)[] (WriteOnly): Custom settings for changing the behavior of the hosting environment
* **databaseEdition**: string (WriteOnly): Edition of the metadata database for the hostingEnvironment (App Service Environment) e.g. "Standard"
* **databaseServiceObjective**: string (WriteOnly): Service objective of the metadata database for the hostingEnvironment (App Service Environment) e.g. "S0"
* **dnsSuffix**: string: DNS suffix of the hostingEnvironment (App Service Environment)
* **environmentCapacities**: [StampCapacity](#stampcapacity)[] (WriteOnly): Current total, used, and available worker capacities
* **environmentIsHealthy**: bool: True/false indicating whether the hostingEnvironment (App Service Environment) is healthy
* **environmentStatus**: string: Detailed message about with results of the last check of the hostingEnvironment (App Service Environment)
* **internalLoadBalancingMode**: 'None' | 'Publishing' | 'Web' (WriteOnly): Specifies which endpoints to serve internally in the hostingEnvironment's (App Service Environment) VNET
* **ipsslAddressCount**: int: Number of IP SSL addresses reserved for this hostingEnvironment (App Service Environment)
* **lastAction**: string (WriteOnly): Last deployment action on this hostingEnvironment (App Service Environment)
* **lastActionResult**: string (WriteOnly): Result of the last deployment action on this hostingEnvironment (App Service Environment)
* **location**: string: Location of the hostingEnvironment (App Service Environment), e.g. "West US"
* **maximumNumberOfMachines**: int (WriteOnly): Maximum number of VMs in this hostingEnvironment (App Service Environment)
* **multiRoleCount**: int (WriteOnly): Number of front-end instances
* **multiSize**: string (WriteOnly): Front-end VM size, e.g. "Medium", "Large"
* **name**: string: Name of the hostingEnvironment (App Service Environment)
* **networkAccessControlList**: [NetworkAccessControlEntry](#networkaccesscontrolentry)[] (WriteOnly): Access control list for controlling traffic to the hostingEnvironment (App Service Environment)
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (WriteOnly): Provisioning state of the hostingEnvironment (App Service Environment)
* **resourceGroup**: string: Resource group of the hostingEnvironment (App Service Environment)
* **status**: 'Deleting' | 'Preparing' | 'Ready' | 'Scaling' (Required): Current status of the hostingEnvironment (App Service Environment)
* **subscriptionId**: string: Subscription of the hostingEnvironment (App Service Environment)
* **suspended**: bool: True/false indicating whether the hostingEnvironment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
            (most likely because NSG blocked the incoming traffic)
* **upgradeDomains**: int (WriteOnly): Number of upgrade domains of this hostingEnvironment (App Service Environment)
* **vipMappings**: [VirtualIPMapping](#virtualipmapping)[] (WriteOnly): Description of IP SSL mapping for this hostingEnvironment (App Service Environment)
* **virtualNetwork**: [VirtualNetworkProfile](#virtualnetworkprofile): Description of the hostingEnvironment's (App Service Environment) virtual network
* **vnetName**: string (WriteOnly): Name of the hostingEnvironment's (App Service Environment) virtual network
* **vnetResourceGroupName**: string (WriteOnly): Resource group of the hostingEnvironment's (App Service Environment) virtual network
* **vnetSubnetName**: string (WriteOnly): Subnet of the hostingEnvironment's (App Service Environment) virtual network
* **workerPools**: [WorkerPool](#workerpool)[] (WriteOnly): Description of worker pools with worker size ids, VM sizes, and number of workers in each pool

## HostNameBindingProperties
### Properties
* **azureResourceName**: string: Azure resource name
* **azureResourceType**: 'TrafficManager' | 'Website': Azure resource type
* **customHostNameDnsRecordType**: 'A' | 'CName': Custom DNS record type
* **domainId**: string: Fully qualified ARM domain resource URI
* **hostNameType**: 'Managed' | 'Verified': Host name type
* **name**: string: Hostname
* **siteName**: string: Web app name

## HostNameSslState
### Properties
* **name**: string: Host name
* **sslState**: 'Disabled' | 'IpBasedEnabled' | 'SniEnabled' (Required): SSL type
* **thumbprint**: string: SSL cert thumbprint
* **toUpdate**: bool: Set this flag to update existing host name
* **virtualIP**: string: Virtual IP address assigned to the host name if IP based SSL is enabled

## HttpLogsConfig
### Properties
* **azureBlobStorage**: [AzureBlobStorageHttpLogsConfig](#azureblobstoragehttplogsconfig): Http logs to azure blob storage configuration
* **fileSystem**: [FileSystemHttpLogsConfig](#filesystemhttplogsconfig): Http logs to file system configuration

## IpSecurityRestriction
### Properties
* **ipAddress**: string: IP address the security restriction is valid for
* **subnetMask**: string: Subnet mask for the range of IP addresses the restriction is valid for

## NameValuePair
### Properties
* **name**: string: Pair name
* **value**: string: Pair value

## NetworkAccessControlEntry
### Properties
* **action**: 'Deny' | 'Permit'
* **description**: string
* **order**: int
* **remoteSubnet**: string

## NetworkFeaturesProperties
### Properties
* **hybridConnections**: [RelayServiceConnectionEntity](#relayserviceconnectionentity)[]: The Hybrid Connections Summary view
* **virtualNetworkConnection**: [VnetInfo](#vnetinfo): The Vnet Summary view
* **virtualNetworkName**: string: The Vnet Name

## PremierAddOnRequestTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PremierAddOnRequestTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RampUpRule
### Properties
* **actionHostName**: string: Hostname of a slot to which the traffic will be redirected if decided to. E.g. mysite-stage.azurewebsites.net
* **changeDecisionCallbackUrl**: string: Custom decision algorithm can be provided in TiPCallback site extension which Url can be specified. See TiPCallback site extension for the scaffold and contracts.
            https://www.siteextensions.net/packages/TiPCallback/
* **changeIntervalInMinutes**: int: [Optional] Specifies interval in minutes to reevaluate ReroutePercentage
* **changeStep**: int: [Optional] In auto ramp up scenario this is the step to add/remove from {Microsoft.Web.Hosting.Administration.RampUpRule.ReroutePercentage} until it reaches 
            {Microsoft.Web.Hosting.Administration.RampUpRule.MinReroutePercentage} or {Microsoft.Web.Hosting.Administration.RampUpRule.MaxReroutePercentage}. Site metrics are checked every N minutes specified in {Microsoft.Web.Hosting.Administration.RampUpRule.ChangeIntervalInMinutes}.
            Custom decision algorithm can be provided in TiPCallback site extension which Url can be specified in {Microsoft.Web.Hosting.Administration.RampUpRule.ChangeDecisionCallbackUrl}
* **maxReroutePercentage**: int: [Optional] Specifies upper boundary below which ReroutePercentage will stay.
* **minReroutePercentage**: int: [Optional] Specifies lower boundary above which ReroutePercentage will stay.
* **name**: string: Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.
* **reroutePercentage**: int: Percentage of the traffic which will be redirected to {Microsoft.Web.Hosting.Administration.RampUpRule.ActionHostName}

## RelayServiceConnectionEntity
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## RelayServiceConnectionEntityProperties
### Properties
* **biztalkUri**: string
* **entityConnectionString**: string
* **entityName**: string
* **hostname**: string
* **port**: int
* **resourceConnectionString**: string
* **resourceType**: string

## RequestsBasedTrigger
### Properties
* **count**: int: Count
* **timeInterval**: string: TimeInterval

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RestoreRequestPropertiesOrBackupItemProperties
### Properties
* **adjustConnectionStrings**: bool (WriteOnly): Gets or sets a flag showing if SiteConfig.ConnectionStrings should be set in new site
* **blobName**: string: Name of a blob which contains the backup
* **correlationId**: string (ReadOnly): Unique correlation identifier. Please use this along with the timestamp while communicating with Azure support.
* **created**: string (ReadOnly): Timestamp of the backup creation
* **databases**: [DatabaseBackupSetting](#databasebackupsetting)[]: Collection of databases which should be restored. This list has to match the list of databases included in the backup.
* **finishedTimeStamp**: string (ReadOnly): Timestamp when this backup finished.
* **hostingEnvironment**: string (WriteOnly): App Service Environment name, if needed (only when restoring a site to an App Service Environment)
* **id**: int (ReadOnly): Id of the backup.
* **ignoreConflictingHostNames**: bool (WriteOnly): Changes a logic when restoring a site with custom domains. If "true", custom domains are removed automatically. If "false", custom domains are added to 
            the site object when it is being restored, but that might fail due to conflicts during the operation.
* **lastRestoreTimeStamp**: string (ReadOnly): Timestamp of a last restore operation which used this backup.
* **log**: string (ReadOnly): Details regarding this backup. Might contain an error message.
* **name**: string (ReadOnly): Name of this backup
* **operationType**: 'Clone' | 'Default' | 'Relocation' (Required, WriteOnly): Operation type
* **overwrite**: bool (WriteOnly): True if the restore operation can overwrite target site. "True" needed if trying to restore over an existing site.
* **scheduled**: bool (ReadOnly): True if this backup has been created due to a schedule being triggered.
* **siteName**: string (WriteOnly): Name of a site (Web App)
* **sizeInBytes**: int (ReadOnly): Size of the backup in bytes
* **status**: 'Created' | 'DeleteFailed' | 'DeleteInProgress' | 'Deleted' | 'Failed' | 'InProgress' | 'PartiallySucceeded' | 'Skipped' | 'Succeeded' | 'TimedOut' (ReadOnly): Backup status
* **storageAccountUrl**: string: SAS URL to the container
* **websiteSizeInBytes**: int (ReadOnly): Size of the original web app which has been backed up

## ServerFarmWithRichSkuProperties
### Properties
* **adminSiteName**: string: App Service Plan administration site
* **geoRegion**: string (ReadOnly): Geographical location for the App Service Plan
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile): Specification for the hosting environment (App Service Environment) to use for the App Service Plan
* **maximumNumberOfWorkers**: int: Maximum number of instances that can be assigned to this App Service Plan
* **name**: string: Name for the App Service Plan
* **numberOfSites**: int (ReadOnly): Number of web apps assigned to this App Service Plan
* **perSiteScaling**: bool: If True apps assigned to this App Service Plan can be scaled independently
            If False apps assigned to this App Service Plan will scale to all instances of the plan
* **reserved**: bool: Enables creation of a Linux App Service Plan
* **resourceGroup**: string (ReadOnly): Resource group of the server farm
* **status**: 'Pending' | 'Ready' (Required, ReadOnly): App Service Plan Status
* **subscription**: string (ReadOnly): App Service Plan Subscription
* **workerTierName**: string: Target worker tier assigned to the App Service Plan

## SiteConfig
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [SiteConfigProperties](#siteconfigproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## SiteConfigProperties
### Properties
* **alwaysOn**: bool: Always On
* **apiDefinition**: [ApiDefinitionInfo](#apidefinitioninfo): Information about the formal API definition for the web app.
* **appCommandLine**: string: App Command Line to launch
* **appSettings**: [NameValuePair](#namevaluepair)[]: Application Settings
* **autoHealEnabled**: bool: Auto heal enabled
* **autoHealRules**: [AutoHealRules](#autohealrules): Auto heal rules
* **autoSwapSlotName**: string: Auto swap slot name
* **connectionStrings**: [ConnStringInfo](#connstringinfo)[]: Connection strings
* **cors**: [CorsSettings](#corssettings): Cross-Origin Resource Sharing (CORS) settings.
* **defaultDocuments**: string[]: Default documents
* **detailedErrorLoggingEnabled**: bool: Detailed error logging enabled
* **documentRoot**: string: Document root
* **experiments**: [Experiments](#experiments): This is work around for polymorphic types
* **handlerMappings**: [HandlerMapping](#handlermapping)[]: Handler mappings
* **httpLoggingEnabled**: bool: HTTP logging Enabled
* **ipSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]: Ip Security restrictions
* **javaContainer**: string: Java container
* **javaContainerVersion**: string: Java container version
* **javaVersion**: string: Java version
* **limits**: [SiteLimits](#sitelimits): Site limits
* **loadBalancing**: 'LeastRequests' | 'LeastResponseTime' | 'RequestHash' | 'WeightedRoundRobin' | 'WeightedTotalTraffic': Site load balancing
* **localMySqlEnabled**: bool: Local mysql enabled
* **logsDirectorySizeLimit**: int: HTTP Logs Directory size limit
* **managedPipelineMode**: 'Classic' | 'Integrated': Managed pipeline mode
* **metadata**: [NameValuePair](#namevaluepair)[]: Site Metadata
* **netFrameworkVersion**: string: Net Framework Version
* **nodeVersion**: string: Version of Node
* **numberOfWorkers**: int: Number of workers
* **phpVersion**: string: Version of PHP
* **publishingPassword**: string: Publishing password
* **publishingUsername**: string: Publishing user name
* **pythonVersion**: string: Version of Python
* **remoteDebuggingEnabled**: bool: Remote Debugging Enabled
* **remoteDebuggingVersion**: string: Remote Debugging Version
* **requestTracingEnabled**: bool: Enable request tracing
* **requestTracingExpirationTime**: string: Request tracing expiration time
* **scmType**: string: SCM type
* **tracingOptions**: string: Tracing options
* **use32BitWorkerProcess**: bool: Use 32 bit worker process
* **virtualApplications**: [VirtualApplication](#virtualapplication)[]: Virtual applications
* **vnetName**: string: Vnet name
* **webSocketsEnabled**: bool: Web socket enabled.

## SiteLimits
### Properties
* **maxDiskSizeInMb**: int: Maximum allowed disk size usage in MB
* **maxMemoryInMb**: int: Maximum allowed memory usage in MB
* **maxPercentageCpu**: int: Maximum allowed CPU usage percentage

## SiteLogsConfigProperties
### Properties
* **applicationLogs**: [ApplicationLogsConfig](#applicationlogsconfig): Application logs configuration
* **detailedErrorMessages**: [EnabledConfig](#enabledconfig): Detailed error messages configuration
* **failedRequestsTracing**: [EnabledConfig](#enabledconfig): Failed requests tracing configuration
* **httpLogs**: [HttpLogsConfig](#httplogsconfig): Http logs configuration

## SiteProperties
### Properties
* **availabilityState**: 'DisasterRecoveryMode' | 'Limited' | 'Normal' (Required, ReadOnly): Management information availability state for the web app. Possible values are Normal or Limited. 
            Normal means that the site is running correctly and that management information for the site is available. 
            Limited means that only partial management information for the site is available and that detailed site information is unavailable.
* **clientAffinityEnabled**: bool: Specifies if the client affinity is enabled when load balancing http request for multiple instances of the web app
* **clientCertEnabled**: bool: Specifies if the client certificate is enabled for the web app
* **cloningInfo**: [CloningInfo](#cloninginfo): This is only valid for web app creation. If specified, web app is cloned from 
            a source web app
* **containerSize**: int: Size of a function container
* **defaultHostName**: string (ReadOnly): Default hostname of the web app
* **enabled**: bool: True if the site is enabled; otherwise, false. Setting this  value to false disables the site (takes the site off line).
* **enabledHostNames**: string[] (ReadOnly): Hostnames for the web app that are enabled. Hostnames need to be assigned and enabled. If some hostnames are assigned but not enabled
            the app is not served on those hostnames
* **gatewaySiteName**: string: Name of gateway app associated with web app
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile): Specification for the hosting environment (App Service Environment) to use for the web app
* **hostNames**: string[] (ReadOnly): Hostnames associated with web app
* **hostNamesDisabled**: bool: Specifies if the public hostnames are disabled the web app.
            If set to true the app is only accessible via API Management process
* **hostNameSslStates**: [HostNameSslState](#hostnamesslstate)[]: Hostname SSL states are  used to manage the SSL bindings for site's hostnames.
* **isDefaultContainer**: bool (ReadOnly): Site is a default container
* **lastModifiedTimeUtc**: string (ReadOnly): Last time web app was modified in UTC
* **maxNumberOfWorkers**: int: Maximum number of workers
            This only applies to function container
* **microService**: string
* **name**: string: Name of web app
* **outboundIpAddresses**: string (ReadOnly): List of comma separated IP addresses that this web app uses for outbound connections. Those can be used when configuring firewall rules for databases accessed by this web app.
* **premiumAppDeployed**: bool (ReadOnly): If set indicates whether web app is deployed as a premium app
* **repositorySiteName**: string (ReadOnly): Name of repository site
* **resourceGroup**: string (ReadOnly): Resource group web app belongs to
* **scmSiteAlsoStopped**: bool: If set indicates whether to stop SCM (KUDU) site when the web app is stopped. Default is false.
* **serverFarmId**: string
* **siteConfig**: [SiteConfig](#siteconfig): Configuration of web app
* **state**: string (ReadOnly): State of the web app
* **targetSwapSlot**: string (ReadOnly): Read-only property that specifies which slot this app will swap into
* **trafficManagerHostNames**: string[] (ReadOnly): Read-only list of Azure Traffic manager hostnames associated with web app
* **usageState**: 'Exceeded' | 'Normal' (Required, ReadOnly): State indicating whether web app has exceeded its quota usage

## SiteSourceControlProperties
### Properties
* **branch**: string: Name of branch to use for deployment
* **deploymentRollbackEnabled**: bool: Whether to manual or continuous integration
* **isManualIntegration**: bool: Whether to manual or continuous integration
* **isMercurial**: bool: Mercurial or Git repository type
* **repoUrl**: string: Repository or source control url

## SkuDescription
### Properties
* **capacity**: int: Current number of instances assigned to the resource
* **family**: string: Family code of the resource sku
* **name**: string: Name of the resource sku
* **size**: string: Size specifier of the resource sku
* **tier**: string: Service Tier of the resource sku

## SlotConfigNamesResourceProperties
### Properties
* **appSettingNames**: string[]: List of application settings names
* **connectionStringNames**: string[]: List of connection string names

## SlowRequestsBasedTrigger
### Properties
* **count**: int: Count
* **timeInterval**: string: TimeInterval
* **timeTaken**: string: TimeTaken

## SourceControlProperties
### Properties
* **expirationTime**: string: OAuth Token Expiration
* **name**: string: Name or Source Control Type
* **refreshToken**: string: OAuth Refresh Token
* **token**: string: OAuth Access Token
* **tokenSecret**: string: OAuth Access Token Secret

## StampCapacity
### Properties
* **availableCapacity**: int: Available capacity (# of machines, bytes of storage etc...)
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared': Shared/Dedicated workers
* **excludeFromCapacityAllocation**: bool: If true it includes basic sites
            Basic sites are not used for capacity allocation.
* **isApplicableForAllComputeModes**: bool: Is capacity applicable for all sites?
* **name**: string: Name of the stamp
* **siteMode**: string: Shared or Dedicated
* **totalCapacity**: int: Total capacity (# of machines, bytes of storage etc...)
* **unit**: string: Name of the unit
* **workerSize**: 'Default' | 'Large' | 'Medium' | 'Small': Size of the machines
* **workerSizeId**: int: Size Id of machines: 
            0 - Small
            1 - Medium
            2 - Large

## StatusCodesBasedTrigger
### Properties
* **count**: int: Count
* **status**: int: HTTP status code
* **subStatus**: int: SubStatus
* **timeInterval**: string: TimeInterval
* **win32Status**: int: Win32 error code

## StringDictionary
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## StringDictionary
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserProperties
### Properties
* **name**: string: Username (internal)
* **publishingPassword**: string: Password used for publishing
* **publishingUserName**: string: Username used for publishing
* **scmUri**: string: Service Control Manager URI, including username and password

## VirtualApplication
### Properties
* **physicalPath**: string
* **preloadEnabled**: bool
* **virtualDirectories**: [VirtualDirectory](#virtualdirectory)[]
* **virtualPath**: string

## VirtualDirectory
### Properties
* **physicalPath**: string
* **virtualPath**: string

## VirtualIPMapping
### Properties
* **internalHttpPort**: int: Internal HTTP port
* **internalHttpsPort**: int: Internal HTTPS port
* **inUse**: bool: Is VIP mapping in use
* **virtualIP**: string: Virtual IP address

## VirtualNetworkProfile
### Properties
* **id**: string: Resource id of the virtual network
* **name**: string: Name of the virtual network (read-only)
* **subnet**: string: Subnet within the virtual network
* **type**: string: Resource type of the virtual network (read-only)

## VnetGatewayProperties
### Properties
* **vnetName**: string: The VNET name.
* **vpnPackageUri**: string: The URI where the Vpn package can be downloaded

## VnetInfo
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [VnetInfoProperties](#vnetinfoproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## VnetInfoProperties
### Properties
* **certBlob**: string: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
            Point-To-Site VPN connection.
* **certThumbprint**: string: The client certificate thumbprint
* **dnsServers**: string: Dns servers to be used by this VNET. This should be a comma-separated list of IP addresses.
* **resyncRequired**: bool: Flag to determine if a resync is required
* **routes**: [VnetRoute](#vnetroute)[]: The routes that this virtual network connection uses.
* **vnetResourceId**: string: The vnet resource id

## VnetRoute
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [VnetRouteProperties](#vnetrouteproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## VnetRouteProperties
### Properties
* **endAddress**: string: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
* **name**: string: The name of this route. This is only returned by the server and does not need to be set by the client.
* **routeType**: string: The type of route this is:
            DEFAULT - By default, every web app has routes to the local address ranges specified by RFC1918
            INHERITED - Routes inherited from the real Virtual Network routes
            STATIC - Static route set on the web app only
            
            These values will be used for syncing a Web App's routes with those from a Virtual Network. This operation will clear all DEFAULT and INHERITED routes and replace them
            with new INHERITED routes.
* **startAddress**: string: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.

## WorkerPool
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [WorkerPoolProperties](#workerpoolproperties)
* **sku**: [SkuDescription](#skudescription): Describes a sku for a scalable resource
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## WorkerPoolProperties
### Properties
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared': Shared or dedicated web app hosting
* **instanceNames**: string[]: Names of all instances in the worker pool (read only)
* **workerCount**: int: Number of instances in the worker pool
* **workerSize**: string: VM size of the worker pool instances
* **workerSizeId**: int: Worker size id for referencing this worker pool

