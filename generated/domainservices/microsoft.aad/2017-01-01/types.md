# Microsoft.AAD @ 2017-01-01

## Resource Microsoft.AAD/domainServices@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainServiceProperties](#domainserviceproperties): Domain service properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.AAD/domainServices' (ReadOnly, DeployTimeConstant): The resource type

## DomainSecuritySettings
### Properties
* **ntlmV1**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not NtlmV1 is enabled or disabled.
* **syncNtlmPasswords**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not SyncNtlmPasswords is enabled or disabled.
* **tlsV1**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not TlsV1 is enabled or disabled.

## DomainServiceProperties
### Properties
* **deploymentId**: string (ReadOnly): Deployment Id
* **domainControllerIpAddress**: string[] (ReadOnly): List of Domain Controller IP Address
* **domainName**: string: The name of the Azure domain that the user would like to deploy Domain Services to.
* **domainSecuritySettings**: [DomainSecuritySettings](#domainsecuritysettings): DomainSecurity Settings
* **filteredSync**: 'Disabled' | 'Enabled' | string: Enabled or Disabled flag to turn on Group-based filtered sync
* **healthAlerts**: [HealthAlert](#healthalert)[] (ReadOnly): List of Domain Health Alerts
* **healthLastEvaluated**: string (ReadOnly): Last domain evaluation run DateTime
* **healthMonitors**: [HealthMonitor](#healthmonitor)[] (ReadOnly): List of Domain Health Monitors
* **ldapsSettings**: [LdapsSettings](#ldapssettings): Secure LDAP Settings
* **notificationSettings**: [NotificationSettings](#notificationsettings): Notification Settings
* **provisioningState**: string (ReadOnly): the current deployment or provisioning state, which only appears in the response.
* **serviceStatus**: string (ReadOnly): Status of Domain Service instance
* **subnetId**: string: The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName.
* **tenantId**: string (ReadOnly): Azure Active Directory tenant id
* **vnetSiteId**: string (ReadOnly): Virtual network site id

## HealthAlert
### Properties
* **id**: string (ReadOnly): Health Alert Id
* **issue**: string (ReadOnly): Health Alert Issue
* **lastDetected**: string (ReadOnly): Health Alert Last Detected DateTime
* **name**: string (ReadOnly): Health Alert Name
* **raised**: string (ReadOnly): Health Alert Raised DateTime
* **resolutionUri**: string (ReadOnly): Health Alert TSG Link
* **severity**: string (ReadOnly): Health Alert Severity

## HealthMonitor
### Properties
* **details**: string (ReadOnly): Health Monitor Details
* **id**: string (ReadOnly): Health Monitor Id
* **name**: string (ReadOnly): Health Monitor Name

## LdapsSettings
### Properties
* **certificateNotAfter**: string (ReadOnly): NotAfter DateTime of configure ldaps certificate.
* **certificateThumbprint**: string (ReadOnly): Thumbprint of configure ldaps certificate.
* **externalAccess**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled.
* **externalAccessIpAddress**: string (ReadOnly): External access ip address.
* **ldaps**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not Secure LDAP is enabled or disabled.
* **pfxCertificate**: string: The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file.
* **pfxCertificatePassword**: string: The password to decrypt the provided Secure LDAP certificate pfx file.
* **publicCertificate**: string (ReadOnly): Public certificate used to configure secure ldap.

## NotificationSettings
### Properties
* **additionalRecipients**: string[]: The list of additional recipients
* **notifyDcAdmins**: 'Disabled' | 'Enabled' | string: Should domain controller admins be notified
* **notifyGlobalAdmins**: 'Disabled' | 'Enabled' | string: Should global admins be notified

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

