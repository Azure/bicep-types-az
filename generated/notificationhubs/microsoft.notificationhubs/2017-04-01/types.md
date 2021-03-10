# Microsoft.NotificationHubs @ 2017-04-01

## Resource Microsoft.NotificationHubs/namespaces@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NamespaceProperties](#namespaceproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.NotificationHubs/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NotificationHubs/namespaces/AuthorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (Required)
* **sku**: [Sku](#sku) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.NotificationHubs/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NotificationHubProperties](#notificationhubproperties) (Required)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties) (Required)
* **sku**: [Sku](#sku) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## NamespaceProperties
### Properties
* **createdAt**: string
* **critical**: bool
* **dataCenter**: string
* **enabled**: bool
* **metricId**: string (ReadOnly)
* **name**: string
* **namespaceType**: 'Messaging' | 'NotificationHub'
* **provisioningState**: string
* **region**: string
* **scaleUnit**: string
* **serviceBusEndpoint**: string
* **status**: string
* **subscriptionId**: string
* **updatedAt**: string

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: 'Basic' | 'Free' | 'Standard' (Required)
* **size**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SharedAccessAuthorizationRuleProperties
### Properties
* **claimType**: string (ReadOnly)
* **claimValue**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **keyName**: string (ReadOnly)
* **modifiedTime**: string (ReadOnly)
* **primaryKey**: string (ReadOnly)
* **revision**: int (ReadOnly)
* **rights**: 'Listen' | 'Manage' | 'Send'[]
* **secondaryKey**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **appId**: string
* **appName**: string
* **certificateKey**: string
* **endpoint**: string
* **keyId**: string
* **thumbprint**: string
* **token**: string

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

