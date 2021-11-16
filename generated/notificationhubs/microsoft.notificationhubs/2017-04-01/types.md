# Microsoft.NotificationHubs @ 2017-04-01

## Resource Microsoft.NotificationHubs/namespaces@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceProperties](#namespaceproperties): Namespace properties.
* **sku**: [Sku](#sku): The Sku description for a namespace
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.NotificationHubs/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/AuthorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (Required): SharedAccessAuthorizationRule properties.
* **sku**: [Sku](#sku) (ReadOnly): The Sku description for a namespace
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.NotificationHubs/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NotificationHubProperties](#notificationhubproperties) (Required): NotificationHub properties.
* **sku**: [Sku](#sku): The Sku description for a namespace
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (Required): SharedAccessAuthorizationRule properties.
* **sku**: [Sku](#sku) (ReadOnly): The Sku description for a namespace
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.NotificationHubs/namespaces/AuthorizationRules@2017-04-01)
* **Resource**: Microsoft.NotificationHubs/namespaces/AuthorizationRules
* **ApiVersion**: 2017-04-01
* **Output**: [SharedAccessAuthorizationRuleListResult](#sharedaccessauthorizationrulelistresult)

## Function listKeys (Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01)
* **Resource**: Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules
* **ApiVersion**: 2017-04-01
* **Output**: [ResourceListKeys](#resourcelistkeys)

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

## Sku
### Properties
* **capacity**: int: The capacity of the resource
* **family**: string: The Sku Family
* **name**: 'Basic' | 'Free' | 'Standard' (Required): Name of the notification hub sku
* **size**: string: The Sku size
* **tier**: string: The tier of particular sku

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NotificationHubProperties
### Properties
* **admCredential**: [AdmCredential](#admcredential): Description of a NotificationHub AdmCredential.
* **apnsCredential**: [ApnsCredential](#apnscredential): Description of a NotificationHub ApnsCredential.
* **authorizationRules**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)[]: The AuthorizationRules of the created NotificationHub
* **baiduCredential**: [BaiduCredential](#baiducredential): Description of a NotificationHub BaiduCredential.
* **gcmCredential**: [GcmCredential](#gcmcredential): Description of a NotificationHub GcmCredential.
* **mpnsCredential**: [MpnsCredential](#mpnscredential): Description of a NotificationHub MpnsCredential.
* **name**: string: The NotificationHub name.
* **registrationTtl**: string: The RegistrationTtl of the created NotificationHub
* **wnsCredential**: [WnsCredential](#wnscredential): Description of a NotificationHub WnsCredential.

## AdmCredential
### Properties
* **properties**: [AdmCredentialProperties](#admcredentialproperties): Description of a NotificationHub AdmCredential.

## AdmCredentialProperties
### Properties
* **authTokenUrl**: string: The URL of the authorization token.
* **clientId**: string: The client identifier.
* **clientSecret**: string: The credential secret access key.

## ApnsCredential
### Properties
* **properties**: [ApnsCredentialProperties](#apnscredentialproperties): Description of a NotificationHub ApnsCredential. Note that there is no explicit switch between Certificate and Token Authentication Modes. The mode is determined based on the properties passed in.

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
* **properties**: [BaiduCredentialProperties](#baiducredentialproperties): Description of a NotificationHub BaiduCredential.

## BaiduCredentialProperties
### Properties
* **baiduApiKey**: string: Baidu Api Key.
* **baiduEndPoint**: string: Baidu Endpoint.
* **baiduSecretKey**: string: Baidu Secret Key

## GcmCredential
### Properties
* **properties**: [GcmCredentialProperties](#gcmcredentialproperties): Description of a NotificationHub GcmCredential.

## GcmCredentialProperties
### Properties
* **gcmEndpoint**: string: The FCM legacy endpoint. Default value is 'https://fcm.googleapis.com/fcm/send'
* **googleApiKey**: string: The Google API key.

## MpnsCredential
### Properties
* **properties**: [MpnsCredentialProperties](#mpnscredentialproperties): Description of a NotificationHub MpnsCredential.

## MpnsCredentialProperties
### Properties
* **certificateKey**: string: The certificate key for this credential.
* **mpnsCertificate**: string: The MPNS certificate.
* **thumbprint**: string: The MPNS certificate Thumbprint

## WnsCredential
### Properties
* **properties**: [WnsCredentialProperties](#wnscredentialproperties): Description of a NotificationHub WnsCredential.

## WnsCredentialProperties
### Properties
* **packageSid**: string: The package ID for this credential.
* **secretKey**: string: The secret key.
* **windowsLiveEndpoint**: string: The Windows Live endpoint.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SharedAccessAuthorizationRuleListResult
### Properties
* **nextLink**: string (ReadOnly): Link to the next set of results. Not empty if Value contains incomplete list of AuthorizationRules
* **value**: [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)[] (ReadOnly): Result of the List AuthorizationRules operation.

## SharedAccessAuthorizationRuleResource
### Properties
* **id**: string (ReadOnly): Resource Id
* **location**: string (ReadOnly): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (ReadOnly): SharedAccessAuthorizationRule properties.
* **sku**: [Sku](#sku) (ReadOnly): The Sku description for a namespace
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: string (ReadOnly): Resource type

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceListKeys
### Properties
* **keyName**: string (ReadOnly): KeyName of the created AuthorizationRule
* **primaryConnectionString**: string (ReadOnly): PrimaryConnectionString of the AuthorizationRule.
* **primaryKey**: string (ReadOnly): PrimaryKey of the created AuthorizationRule.
* **secondaryConnectionString**: string (ReadOnly): SecondaryConnectionString of the created AuthorizationRule
* **secondaryKey**: string (ReadOnly): SecondaryKey of the created AuthorizationRule

