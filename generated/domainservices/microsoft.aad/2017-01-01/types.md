# microsoft.aad @ 2017-01-01

## Resource Microsoft.AAD/domainServices@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DomainServiceProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.AAD/domainServices' (ReadOnly, DeployTimeConstant)

## DomainServiceProperties
### Properties
* **deploymentId**: string (ReadOnly)
* **domainControllerIpAddress**: string[] (ReadOnly)
* **domainName**: string
* **domainSecuritySettings**: DomainSecuritySettings
* **filteredSync**: 'Disabled' | 'Enabled'
* **healthAlerts**: HealthAlert[] (ReadOnly)
* **healthLastEvaluated**: string (ReadOnly)
* **healthMonitors**: HealthMonitor[] (ReadOnly)
* **ldapsSettings**: LdapsSettings
* **notificationSettings**: NotificationSettings
* **provisioningState**: string (ReadOnly)
* **serviceStatus**: string (ReadOnly)
* **subnetId**: string
* **tenantId**: string (ReadOnly)
* **vnetSiteId**: string (ReadOnly)

## DomainSecuritySettings
### Properties
* **ntlmV1**: 'Disabled' | 'Enabled'
* **syncNtlmPasswords**: 'Disabled' | 'Enabled'
* **tlsV1**: 'Disabled' | 'Enabled'

## HealthAlert
### Properties
* **id**: string (ReadOnly)
* **issue**: string (ReadOnly)
* **lastDetected**: string (ReadOnly)
* **name**: string (ReadOnly)
* **raised**: string (ReadOnly)
* **resolutionUri**: string (ReadOnly)
* **severity**: string (ReadOnly)

## HealthMonitor
### Properties
* **details**: string (ReadOnly)
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)

## LdapsSettings
### Properties
* **certificateNotAfter**: string (ReadOnly)
* **certificateThumbprint**: string (ReadOnly)
* **externalAccess**: 'Disabled' | 'Enabled'
* **externalAccessIpAddress**: string (ReadOnly)
* **ldaps**: 'Disabled' | 'Enabled'
* **pfxCertificate**: string
* **pfxCertificatePassword**: string
* **publicCertificate**: string (ReadOnly)

## NotificationSettings
### Properties
* **additionalRecipients**: string[]
* **notifyDcAdmins**: 'Disabled' | 'Enabled'
* **notifyGlobalAdmins**: 'Disabled' | 'Enabled'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

