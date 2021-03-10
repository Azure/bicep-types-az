# Microsoft.AAD @ 2017-06-01

## Resource Microsoft.AAD/domainServices@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DomainServiceProperties](#domainserviceproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.AAD/domainServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Aad/domainServices/ouContainer@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **accountName**: string (WriteOnly)
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **password**: string (WriteOnly)
* **properties**: [OuContainerProperties](#oucontainerproperties) (ReadOnly)
* **spn**: string (WriteOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.Aad/domainServices/ouContainer' (ReadOnly, DeployTimeConstant)

## DomainServiceProperties
### Properties
* **deploymentId**: string (ReadOnly)
* **domainConfigurationType**: string
* **domainControllerIpAddress**: string[] (ReadOnly)
* **domainName**: string
* **domainSecuritySettings**: [DomainSecuritySettings](#domainsecuritysettings)
* **filteredSync**: 'Disabled' | 'Enabled'
* **healthAlerts**: [HealthAlert](#healthalert)[] (ReadOnly)
* **healthLastEvaluated**: string (ReadOnly)
* **healthMonitors**: [HealthMonitor](#healthmonitor)[] (ReadOnly)
* **ldapsSettings**: [LdapsSettings](#ldapssettings)
* **migrationProperties**: [MigrationProperties](#migrationproperties) (ReadOnly)
* **notificationSettings**: [NotificationSettings](#notificationsettings)
* **provisioningState**: string (ReadOnly)
* **resourceForestSettings**: [ResourceForestSettings](#resourceforestsettings)
* **serviceStatus**: string (ReadOnly)
* **sku**: string
* **subnetId**: string
* **tenantId**: string (ReadOnly)
* **version**: int (ReadOnly)
* **vnetSiteId**: string (ReadOnly)

## DomainSecuritySettings
### Properties
* **ntlmV1**: 'Disabled' | 'Enabled'
* **syncKerberosPasswords**: 'Disabled' | 'Enabled'
* **syncNtlmPasswords**: 'Disabled' | 'Enabled'
* **syncOnPremPasswords**: 'Disabled' | 'Enabled'
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

## MigrationProperties
### Properties
* **migrationProgress**: [MigrationProgress](#migrationprogress) (ReadOnly)
* **oldSubnetId**: string (ReadOnly)
* **oldVnetSiteId**: string (ReadOnly)

## MigrationProgress
### Properties
* **completionPercentage**: int
* **progressMessage**: string

## NotificationSettings
### Properties
* **additionalRecipients**: string[]
* **notifyDcAdmins**: 'Disabled' | 'Enabled'
* **notifyGlobalAdmins**: 'Disabled' | 'Enabled'

## ResourceForestSettings
### Properties
* **resourceForest**: string
* **settings**: [ForestTrust](#foresttrust)[]

## ForestTrust
### Properties
* **friendlyName**: string
* **remoteDnsIps**: string
* **trustDirection**: string
* **trustedDomainFqdn**: string
* **trustPassword**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OuContainerProperties
### Properties
* **accounts**: [ContainerAccount](#containeraccount)[] (ReadOnly)
* **containerId**: string (ReadOnly)
* **deploymentId**: string (ReadOnly)
* **distinguishedName**: string (ReadOnly)
* **domainName**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceStatus**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## ContainerAccount
### Properties
* **accountName**: string (ReadOnly)
* **password**: string (ReadOnly)
* **spn**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

