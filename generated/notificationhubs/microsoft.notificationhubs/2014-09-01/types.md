# Microsoft.NotificationHubs @ 2014-09-01

## Resource Microsoft.NotificationHubs/namespaces@2014-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Gets or sets Namespace data center location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceProperties](#namespaceproperties) (Required): Gets or sets properties of the Namespace.
* **tags**: [NamespaceCreateOrUpdateParametersTags](#namespacecreateorupdateparameterstags): Gets or sets Namespace tags.
* **type**: 'Microsoft.NotificationHubs/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/AuthorizationRules@2014-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets Namespace data center location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (Required): Gets or sets properties of the Namespace AuthorizationRules.
* **type**: 'Microsoft.NotificationHubs/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs@2014-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Gets or sets NotificationHub data center location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NotificationHubProperties](#notificationhubproperties) (Required): Gets or sets properties of the NotificationHub.
* **tags**: [NotificationHubCreateOrUpdateParametersTags](#notificationhubcreateorupdateparameterstags): Gets or sets NotificationHub tags.
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2014-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets Namespace data center location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (Required): Gets or sets properties of the Namespace AuthorizationRules.
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.NotificationHubs/namespaces/AuthorizationRules@2014-09-01)
* **Resource**: Microsoft.NotificationHubs/namespaces/AuthorizationRules
* **ApiVersion**: 2014-09-01
* **Output**: [ResourceListKeys](#resourcelistkeys)

## Function listKeys (Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2014-09-01)
* **Resource**: Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules
* **ApiVersion**: 2014-09-01
* **Output**: [ResourceListKeys](#resourcelistkeys)

## AdmCredential
### Properties
* **properties**: [AdmCredentialProperties](#admcredentialproperties): Gets or sets properties of NotificationHub AdmCredential.

## AdmCredentialProperties
### Properties
* **authTokenUrl**: string: Gets or sets the URL of the authorization token.
* **clientId**: string: Gets or sets the client identifier.
* **clientSecret**: string: Gets or sets the credential secret access key.

## ApnsCredential
### Properties
* **properties**: [ApnsCredentialProperties](#apnscredentialproperties): Gets or sets properties of NotificationHub ApnsCredential.

## ApnsCredentialProperties
### Properties
* **apnsCertificate**: string: Gets or sets the APNS certificate.
* **certificateKey**: string: Gets or sets the certificate key.
* **endpoint**: string: Gets or sets the endpoint of this credential.
* **thumbprint**: string: Gets or sets the Apns certificate Thumbprint

## BaiduCredential
### Properties
* **properties**: [BaiduCredentialProperties](#baiducredentialproperties): Gets or sets properties of NotificationHub BaiduCredential.

## BaiduCredentialProperties
### Properties
* **baiduApiKey**: string: Get or Set Baidu Api Key.
* **baiduEndPoint**: string: Get or Set Baidu Endpoint.
* **baiduSecretKey**: string: Get or Set Baidu Secret Key

## GcmCredential
### Properties
* **properties**: [GcmCredentialProperties](#gcmcredentialproperties): Gets or sets properties of NotificationHub GcmCredential.

## GcmCredentialProperties
### Properties
* **gcmEndpoint**: string: Gets or sets the GCM endpoint.
* **googleApiKey**: string: Gets or sets the Google API key.

## MpnsCredential
### Properties
* **properties**: [MpnsCredentialProperties](#mpnscredentialproperties): Gets or sets properties of NotificationHub MpnsCredential.

## MpnsCredentialProperties
### Properties
* **certificateKey**: string: Gets or sets the certificate key for this credential.
* **mpnsCertificate**: string: Gets or sets the MPNS certificate.
* **thumbprint**: string: Gets or sets the Mpns certificate Thumbprint

## NamespaceCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NamespaceProperties
### Properties
* **createdAt**: string: The time the namespace was created.
* **critical**: bool: Whether or not the namespace is set as Critical.
* **enabled**: bool: Whether or not the namespace is currently enabled.
* **name**: string: The name of the namespace.
* **namespaceType**: 'Messaging' | 'NotificationHub': Gets or sets the namespace type.
* **provisioningState**: string: Gets or sets provisioning state of the Namespace.
* **region**: string: Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe
* **scaleUnit**: string: ScaleUnit where the namespace gets created
* **serviceBusEndpoint**: string: Endpoint you can use to perform NotificationHub operations.
* **status**: string: Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
* **subscriptionId**: string: The Id of the Azure subscription associated with the namespace.

## NotificationHubCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NotificationHubProperties
### Properties
* **admCredential**: [AdmCredential](#admcredential): The AdmCredential of the created NotificationHub
* **apnsCredential**: [ApnsCredential](#apnscredential): The ApnsCredential of the created NotificationHub
* **authorizationRules**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)[]: The AuthorizationRules of the created NotificationHub
* **baiduCredential**: [BaiduCredential](#baiducredential): The BaiduCredential of the created NotificationHub
* **gcmCredential**: [GcmCredential](#gcmcredential): The GcmCredential of the created NotificationHub
* **mpnsCredential**: [MpnsCredential](#mpnscredential): The MpnsCredential of the created NotificationHub
* **name**: string: The NotificationHub name.
* **registrationTtl**: string: The RegistrationTtl of the created NotificationHub
* **wnsCredential**: [WnsCredential](#wnscredential): The WnsCredential of the created NotificationHub

## ResourceListKeys
### Properties
* **primaryConnectionString**: string: Gets or sets the primaryConnectionString of the created Namespace AuthorizationRule.
* **secondaryConnectionString**: string: Gets or sets the secondaryConnectionString of the created Namespace AuthorizationRule

## ResourceListKeys
### Properties
* **primaryConnectionString**: string: Gets or sets the primaryConnectionString of the created Namespace AuthorizationRule.
* **secondaryConnectionString**: string: Gets or sets the secondaryConnectionString of the created Namespace AuthorizationRule

## SharedAccessAuthorizationRuleProperties
### Properties
* **claimType**: string: The type of the claim.
* **claimValue**: string: The value of the claim.
* **createdTime**: string: The time at which the authorization rule was created.
* **keyName**: string: The name of the key that was used.
* **modifiedTime**: string: The most recent time the rule was updated.
* **primaryKey**: string: The primary key that was used.
* **revision**: int: The revision number for the rule.
* **rights**: 'Listen' | 'Manage' | 'Send'[]: The rights associated with the rule.
* **secondaryKey**: string: The secondary key that was used.

## WnsCredential
### Properties
* **properties**: [WnsCredentialProperties](#wnscredentialproperties): Gets or sets properties of NotificationHub WnsCredential.

## WnsCredentialProperties
### Properties
* **packageSid**: string: Gets or sets the package ID for this credential.
* **secretKey**: string: Gets or sets the secret key.
* **windowsLiveEndpoint**: string: Gets or sets the Windows Live endpoint.

