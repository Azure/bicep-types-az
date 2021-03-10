# Microsoft.NotificationHubs @ 2014-09-01

## Resource Microsoft.NotificationHubs/namespaces@2014-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NamespaceProperties](#namespaceproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.NotificationHubs/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NotificationHubs/namespaces/AuthorizationRules@2014-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (Required)
* **type**: 'Microsoft.NotificationHubs/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs@2014-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NotificationHubProperties](#notificationhubproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2014-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (Required)
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## NamespaceProperties
### Properties
* **createdAt**: string
* **critical**: bool
* **enabled**: bool
* **name**: string
* **namespaceType**: 'Messaging' | 'NotificationHub'
* **provisioningState**: string
* **region**: string
* **scaleUnit**: string
* **serviceBusEndpoint**: string
* **status**: string
* **subscriptionId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SharedAccessAuthorizationRuleProperties
### Properties
* **claimType**: string
* **claimValue**: string
* **createdTime**: string
* **keyName**: string
* **modifiedTime**: string
* **primaryKey**: string
* **revision**: int
* **rights**: 'Listen' | 'Manage' | 'Send'[]
* **secondaryKey**: string

## NotificationHubProperties
### Properties
* **admCredential**: [AdmCredential](#admcredential)
* **apnsCredential**: [ApnsCredential](#apnscredential)
* **authorizationRules**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)[]
* **baiduCredential**: [BaiduCredential](#baiducredential)
* **gcmCredential**: [GcmCredential](#gcmcredential)
* **mpnsCredential**: [MpnsCredential](#mpnscredential)
* **name**: string
* **registrationTtl**: string
* **wnsCredential**: [WnsCredential](#wnscredential)

## AdmCredential
### Properties
* **properties**: [AdmCredentialProperties](#admcredentialproperties)

## AdmCredentialProperties
### Properties
* **authTokenUrl**: string
* **clientId**: string
* **clientSecret**: string

## ApnsCredential
### Properties
* **properties**: [ApnsCredentialProperties](#apnscredentialproperties)

## ApnsCredentialProperties
### Properties
* **apnsCertificate**: string
* **certificateKey**: string
* **endpoint**: string
* **thumbprint**: string

## BaiduCredential
### Properties
* **properties**: [BaiduCredentialProperties](#baiducredentialproperties)

## BaiduCredentialProperties
### Properties
* **baiduApiKey**: string
* **baiduEndPoint**: string
* **baiduSecretKey**: string

## GcmCredential
### Properties
* **properties**: [GcmCredentialProperties](#gcmcredentialproperties)

## GcmCredentialProperties
### Properties
* **gcmEndpoint**: string
* **googleApiKey**: string

## MpnsCredential
### Properties
* **properties**: [MpnsCredentialProperties](#mpnscredentialproperties)

## MpnsCredentialProperties
### Properties
* **certificateKey**: string
* **mpnsCertificate**: string
* **thumbprint**: string

## WnsCredential
### Properties
* **properties**: [WnsCredentialProperties](#wnscredentialproperties)

## WnsCredentialProperties
### Properties
* **packageSid**: string
* **secretKey**: string
* **windowsLiveEndpoint**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

