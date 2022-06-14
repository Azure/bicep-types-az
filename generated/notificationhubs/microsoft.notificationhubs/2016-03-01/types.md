# Microsoft.NotificationHubs @ 2016-03-01

## Resource Microsoft.NotificationHubs/namespaces@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceProperties](#namespaceproperties): Properties of the Namespace.
* **sku**: [Sku](#sku): The sku of the created namespace
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.NotificationHubs/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/AuthorizationRules@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (Required): Properties of the Namespace AuthorizationRules.
* **sku**: [Sku](#sku): The sku of the created namespace
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.NotificationHubs/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NotificationHubProperties](#notificationhubproperties) (Required): Properties of the NotificationHub.
* **sku**: [Sku](#sku): The sku of the created namespace
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (Required): Properties of the Namespace AuthorizationRules.
* **sku**: [Sku](#sku): The sku of the created namespace
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.NotificationHubs/namespaces/AuthorizationRules@2016-03-01)
* **Resource**: Microsoft.NotificationHubs/namespaces/AuthorizationRules
* **ApiVersion**: 2016-03-01
* **Output**: [ResourceListKeys](#resourcelistkeys)

## Function listKeys (Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2016-03-01)
* **Resource**: Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules
* **ApiVersion**: 2016-03-01
* **Output**: [ResourceListKeys](#resourcelistkeys)

## AdmCredential
### Properties
* **properties**: [AdmCredentialProperties](#admcredentialproperties): Properties of NotificationHub AdmCredential.

## AdmCredentialProperties
### Properties
* **authTokenUrl**: string: The URL of the authorization token.
* **clientId**: string: The client identifier.
* **clientSecret**: string: The credential secret access key.

## ApnsCredential
### Properties
* **properties**: [ApnsCredentialProperties](#apnscredentialproperties): Properties of NotificationHub ApnsCredential.

## ApnsCredentialProperties
### Properties
* **apnsCertificate**: string: The APNS certificate.
* **certificateKey**: string: The certificate key.
* **endpoint**: string: The endpoint of this credential.
* **thumbprint**: string: The APNS certificate Thumbprint

## BaiduCredential
### Properties
* **properties**: [BaiduCredentialProperties](#baiducredentialproperties): Properties of NotificationHub BaiduCredential.

## BaiduCredentialProperties
### Properties
* **baiduApiKey**: string: Baidu Api Key.
* **baiduEndPoint**: string: Baidu Endpoint.
* **baiduSecretKey**: string: Baidu Secret Key

## GcmCredential
### Properties
* **properties**: [GcmCredentialProperties](#gcmcredentialproperties): Properties of NotificationHub GcmCredential.

## GcmCredentialProperties
### Properties
* **gcmEndpoint**: string: The GCM endpoint.
* **googleApiKey**: string: The Google API key.

## MpnsCredential
### Properties
* **properties**: [MpnsCredentialProperties](#mpnscredentialproperties): Properties of NotificationHub MpnsCredential.

## MpnsCredentialProperties
### Properties
* **certificateKey**: string: The certificate key for this credential.
* **mpnsCertificate**: string: The MPNS certificate.
* **thumbprint**: string: The MPNS certificate Thumbprint

## NamespaceProperties
### Properties
* **createdAt**: string: The time the namespace was created.
* **critical**: bool: Whether or not the namespace is set as Critical.
* **enabled**: bool: Whether or not the namespace is currently enabled.
* **name**: string: The name of the namespace.
* **namespaceType**: 'Messaging' | 'NotificationHub': The namespace type.
* **provisioningState**: string: Provisioning state of the Namespace.
* **region**: string: Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe
* **scaleUnit**: string: ScaleUnit where the namespace gets created
* **serviceBusEndpoint**: string: Endpoint you can use to perform NotificationHub operations.
* **status**: string: Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
* **subscriptionId**: string: The Id of the Azure subscription associated with the namespace.

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
* **keyName**: string: KeyName of the created AuthorizationRule
* **primaryConnectionString**: string: PrimaryConnectionString of the AuthorizationRule.
* **primaryKey**: string: PrimaryKey of the created AuthorizationRule.
* **secondaryConnectionString**: string: SecondaryConnectionString of the created AuthorizationRule
* **secondaryKey**: string: SecondaryKey of the created AuthorizationRule

## ResourceListKeys
### Properties
* **keyName**: string: KeyName of the created AuthorizationRule
* **primaryConnectionString**: string: PrimaryConnectionString of the AuthorizationRule.
* **primaryKey**: string: PrimaryKey of the created AuthorizationRule.
* **secondaryConnectionString**: string: SecondaryConnectionString of the created AuthorizationRule
* **secondaryKey**: string: SecondaryKey of the created AuthorizationRule

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

## SharedAccessAuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[]: The rights associated with the rule.

## Sku
### Properties
* **capacity**: int: The capacity of the resource
* **family**: string: The Sku Family
* **name**: 'Basic' | 'Free' | 'Standard' | string (Required): Name of the notification hub sku
* **size**: string: The Sku size
* **tier**: string: The tier of particular sku

## WnsCredential
### Properties
* **properties**: [WnsCredentialProperties](#wnscredentialproperties): Properties of NotificationHub WnsCredential.

## WnsCredentialProperties
### Properties
* **packageSid**: string: The package ID for this credential.
* **secretKey**: string: The secret key.
* **windowsLiveEndpoint**: string: The Windows Live endpoint.

