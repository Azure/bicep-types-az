# Microsoft.NotificationHubs @ 2014-09-01

## Resource Microsoft.NotificationHubs/namespaces@2014-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NamespaceProperties (Required)
* **tags**: NamespaceCreateOrUpdateParametersTags
* **type**: 'Microsoft.NotificationHubs/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NotificationHubs/namespaces/AuthorizationRules@2014-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties (Required)
* **type**: 'Microsoft.NotificationHubs/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs@2014-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NotificationHubProperties (Required)
* **tags**: NotificationHubCreateOrUpdateParametersTags
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2014-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties (Required)
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

## NamespaceCreateOrUpdateParametersTags
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

## NotificationHubCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

