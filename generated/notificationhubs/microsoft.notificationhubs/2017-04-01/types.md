# Microsoft.NotificationHubs @ 2017-04-01

## Resource Microsoft.NotificationHubs/namespaces@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NamespaceProperties
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.NotificationHubs/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NotificationHubs/namespaces/AuthorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties (Required)
* **type**: 'Microsoft.NotificationHubs/namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NotificationHubProperties (Required)
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SharedAccessAuthorizationRuleProperties (Required)
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules' (ReadOnly, DeployTimeConstant)

## NamespaceProperties
### Properties
* **createdAt**: string
* **critical**: bool
* **dataCenter**: string
* **enabled**: bool
* **metricId**: string (ReadOnly)
* **name**: string
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

## ResourceTags
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
* **rights**: array
* **secondaryKey**: string (ReadOnly)

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
* **appId**: string
* **appName**: string
* **certificateKey**: string
* **endpoint**: string
* **keyId**: string
* **thumbprint**: string
* **token**: string

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

