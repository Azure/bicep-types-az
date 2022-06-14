# Microsoft.NotificationHubs @ 2017-04-01

## Resource Microsoft.NotificationHubs/namespaces@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceProperties](#namespaceproperties): Properties of the Namespace.
* **sku**: [Sku](#sku): The sku of the created namespace
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.NotificationHubs/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/AuthorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (Required): Properties of the Namespace AuthorizationRules.
* **sku**: [Sku](#sku) (ReadOnly): The sku of the created namespace
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.NotificationHubs/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NotificationHubProperties](#notificationhubproperties) (Required): Properties of the NotificationHub.
* **sku**: [Sku](#sku): The sku of the created namespace
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (Required): Properties of the Namespace AuthorizationRules.
* **sku**: [Sku](#sku) (ReadOnly): The sku of the created namespace
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.NotificationHubs/namespaces/AuthorizationRules@2017-04-01)
* **Resource**: Microsoft.NotificationHubs/namespaces/AuthorizationRules
* **ApiVersion**: 2017-04-01
* **Output**: [ResourceListKeys](#resourcelistkeys)

## Function listKeys (Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01)
* **Resource**: Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules
* **ApiVersion**: 2017-04-01
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
* **apnsCertificate**: string: The APNS certificate. Specify if using Certificate Authentication Mode.
* **appId**: string: The issuer (iss) registered claim key. The value is a 10-character TeamId, obtained from your developer account. Specify if using Token Authentication Mode.
* **appName**: string: The name of the application or BundleId. Specify if using Token Authentication Mode.
* **certificateKey**: string: The APNS certificate password if it exists.
* **endpoint**: string: The APNS endpoint of this credential. If using Certificate Authentication Mode and Sandbox specify 'gateway.sandbox.push.apple.com'. If using Certificate Authentication Mode and Production specify 'gateway.push.apple.com'. If using Token Authentication Mode and Sandbox specify 'https://api.development.push.apple.com:443/3/device'. If using Token Authentication Mode and Production specify 'https://api.push.apple.com:443/3/device'.
* **keyId**: string: A 10-character key identifier (kid) key, obtained from your developer account. Specify if using Token Authentication Mode.
* **thumbprint**: string: The APNS certificate thumbprint. Specify if using Certificate Authentication Mode.
* **token**: string: Provider Authentication Token, obtained through your developer account. Specify if using Token Authentication Mode.

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
* **gcmEndpoint**: string: The FCM legacy endpoint. Default value is 'https://fcm.googleapis.com/fcm/send'
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
* **dataCenter**: string: Data center for the namespace
* **enabled**: bool: Whether or not the namespace is currently enabled.
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics
* **name**: string: The name of the namespace.
* **namespaceType**: 'Messaging' | 'NotificationHub': The namespace type.
* **provisioningState**: string: Provisioning state of the Namespace.
* **region**: string: Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe
* **scaleUnit**: string: ScaleUnit where the namespace gets created
* **serviceBusEndpoint**: string: Endpoint you can use to perform NotificationHub operations.
* **status**: string: Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
* **subscriptionId**: string: The Id of the Azure subscription associated with the namespace.
* **updatedAt**: string: The time the namespace was updated.

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
* **claimType**: string (ReadOnly): A string that describes the claim type
* **claimValue**: string (ReadOnly): A string that describes the claim value
* **createdTime**: string (ReadOnly): The created time for this rule
* **keyName**: string (ReadOnly): A string that describes the authorization rule.
* **modifiedTime**: string (ReadOnly): The last modified time for this rule
* **primaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.
* **revision**: int (ReadOnly): The revision number for the rule
* **rights**: 'Listen' | 'Manage' | 'Send'[]: The rights associated with the rule.
* **secondaryKey**: string (ReadOnly): A base64-encoded 256-bit primary key for signing and validating the SAS token.

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

