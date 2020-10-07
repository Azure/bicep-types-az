# Microsoft.NotificationHubs @ 2014-09-01

## Microsoft.NotificationHubs/namespaces/AuthorizationRules
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties (Required)
* **type**: 'Microsoft.NotificationHubs/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant)

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

## Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties (Required)
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## Microsoft.NotificationHubs/namespaces/notificationHubs
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NotificationHubProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs' (ReadOnly, DeployTimeConstant)

## NotificationHubProperties
### Properties
* **admCredential**: AdmCredential
* **apnsCredential**: ApnsCredential
* **authorizationRules**: SharedAccessAuthorizationRuleProperties[]
* **baiduCredential**: BaiduCredential
* **gcmCredential**: GcmCredential
* **mpnsCredential**: MpnsCredential
* **name**: string
* **registrationTtl**: string
* **wnsCredential**: WnsCredential

## AdmCredential
### Properties
* **properties**: AdmCredentialProperties

## AdmCredentialProperties
### Properties
* **authTokenUrl**: string
* **clientId**: string
* **clientSecret**: string

## ApnsCredential
### Properties
* **properties**: ApnsCredentialProperties

## ApnsCredentialProperties
### Properties
* **apnsCertificate**: string
* **certificateKey**: string
* **endpoint**: string
* **thumbprint**: string

## BaiduCredential
### Properties
* **properties**: BaiduCredentialProperties

## BaiduCredentialProperties
### Properties
* **baiduApiKey**: string
* **baiduEndPoint**: string
* **baiduSecretKey**: string

## GcmCredential
### Properties
* **properties**: GcmCredentialProperties

## GcmCredentialProperties
### Properties
* **gcmEndpoint**: string
* **googleApiKey**: string

## MpnsCredential
### Properties
* **properties**: MpnsCredentialProperties

## MpnsCredentialProperties
### Properties
* **certificateKey**: string
* **mpnsCertificate**: string
* **thumbprint**: string

## WnsCredential
### Properties
* **properties**: WnsCredentialProperties

## WnsCredentialProperties
### Properties
* **packageSid**: string
* **secretKey**: string
* **windowsLiveEndpoint**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.NotificationHubs/namespaces
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NamespaceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NotificationHubs/namespaces' (ReadOnly, DeployTimeConstant)

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
### Additional Properties
* **Additional Properties Type**: string

