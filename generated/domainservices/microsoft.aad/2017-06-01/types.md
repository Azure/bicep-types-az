# Microsoft.AAD @ 2017-06-01

## Resource Microsoft.AAD/domainServices@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DomainServiceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AAD/domainServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Aad/domainServices/ouContainer@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **accountName**: string (WriteOnly)
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **password**: string (WriteOnly)
* **properties**: OuContainerProperties (ReadOnly)
* **spn**: string (WriteOnly)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.Aad/domainServices/ouContainer' (ReadOnly, DeployTimeConstant)

## DomainServiceProperties
### Properties
* **deploymentId**: string (ReadOnly)
* **domainConfigurationType**: string
* **domainControllerIpAddress**: string[] (ReadOnly)
* **domainName**: string
* **domainSecuritySettings**: DomainSecuritySettings
* **filteredSync**: 'Disabled' | 'Enabled'
* **healthAlerts**: HealthAlert[] (ReadOnly)
* **healthLastEvaluated**: string (ReadOnly)
* **healthMonitors**: HealthMonitor[] (ReadOnly)
* **ldapsSettings**: LdapsSettings
* **migrationProperties**: MigrationProperties
* **notificationSettings**: NotificationSettings
* **provisioningState**: string (ReadOnly)
* **resourceForestSettings**: ResourceForestSettings
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
* **migrationProgress**: MigrationProgress
* **oldSubnetId**: string
* **oldVnetSiteId**: string

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
* **settings**: ForestTrust[]

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
* **accounts**: ContainerAccount[] (ReadOnly)
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

