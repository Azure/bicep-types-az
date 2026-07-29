# Microsoft.AAD @ 2025-05-01

## Resource Microsoft.AAD/domainServices@2025-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string {pattern: "^(?=.{3,255}$)([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)(\.([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?))*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DomainServiceProperties](#domainserviceproperties): Domain service properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.AAD/domainServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Aad/domainServices/ouContainer@2025-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **accountName**: string (WriteOnly): The account name
* **apiVersion**: '2025-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **password**: string (WriteOnly): The account password
* **properties**: [OuContainerProperties](#oucontainerproperties) (ReadOnly): OuContainer properties
* **spn**: string (WriteOnly): The account spn
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Aad/domainServices/ouContainer' (ReadOnly, DeployTimeConstant): The resource type

## Function unsuspend (Microsoft.AAD/domainServices@2025-05-01)
* **Resource**: Microsoft.AAD/domainServices
* **ApiVersion**: 2025-05-01
* **Output**: [UnsuspendDomainServiceResponse](#unsuspenddomainserviceresponse)

## ConfigDiagnostics
### Properties
* **lastExecuted**: string: Last domain configuration diagnostics DateTime
* **validatorResults**: [ConfigDiagnosticsValidatorResult](#configdiagnosticsvalidatorresult)[]: List of Configuration Diagnostics validator results.

## ConfigDiagnosticsValidatorResult
### Properties
* **issues**: [ConfigDiagnosticsValidatorResultIssue](#configdiagnosticsvalidatorresultissue)[]: List of resource config validation issues.
* **replicaSetSubnetDisplayName**: string: Replica set location and subnet name
* **status**: 'Failure' | 'None' | 'OK' | 'Running' | 'Skipped' | 'Warning' | string: Status for individual validator after running diagnostics.
* **validatorId**: string: Validator identifier

## ConfigDiagnosticsValidatorResultIssue
### Properties
* **descriptionParams**: string[]: List of domain resource property name or values used to compose a rich description.
* **id**: string: Validation issue identifier.

## ContainerAccount
### Properties
* **accountName**: string: The account name
* **password**: string: The account password
* **spn**: string: The account spn

## DomainSecuritySettings
### Properties
* **channelBinding**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not ChannelBinding is enabled or disabled.
* **kerberosArmoring**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not KerberosArmoring is enabled or disabled.
* **kerberosRc4Encryption**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not KerberosRc4Encryption is enabled or disabled.
* **ldapSigning**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not LdapSigning is enabled or disabled.
* **ntlmV1**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not NtlmV1 is enabled or disabled.
* **syncKerberosPasswords**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not SyncKerberosPasswords is enabled or disabled.
* **syncNtlmPasswords**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not SyncNtlmPasswords is enabled or disabled.
* **syncOnPremPasswords**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not SyncOnPremPasswords is enabled or disabled.
* **tlsV1**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not TlsV1 is enabled or disabled.

## DomainServiceProperties
### Properties
* **configDiagnostics**: [ConfigDiagnostics](#configdiagnostics): Configuration diagnostics data containing latest execution from client.
* **deploymentId**: string (ReadOnly): Deployment Id
* **domainConfigurationType**: string: Domain Configuration Type
* **domainName**: string: The name of the Azure domain that the user would like to deploy Domain Services to.
* **domainSecuritySettings**: [DomainSecuritySettings](#domainsecuritysettings): DomainSecurity Settings
* **filteredSync**: 'Disabled' | 'Enabled' | string: Enabled or Disabled flag to turn on Group-based filtered sync
* **ldapsSettings**: [LdapsSettings](#ldapssettings): Secure LDAP Settings
* **migrationProperties**: [MigrationProperties](#migrationproperties) (ReadOnly): Migration Properties
* **notificationSettings**: [NotificationSettings](#notificationsettings): Notification Settings
* **provisioningState**: string (ReadOnly): the current deployment or provisioning state, which only appears in the response.
* **replicaSets**: [ReplicaSet](#replicaset)[]: List of ReplicaSets
* **resourceForestSettings**: [ResourceForestSettings](#resourceforestsettings): Resource Forest Settings
* **sku**: string: Sku Type
* **syncApplicationId**: string (ReadOnly): The unique sync application id of the Azure AD Domain Services deployment.
* **syncOwner**: string (ReadOnly): SyncOwner ReplicaSet Id
* **syncScope**: 'All' | 'CloudOnly' | string: All or CloudOnly, All users in AAD are synced to AAD DS domain or only users actively syncing in the cloud
* **tenantId**: string (ReadOnly): Azure Active Directory Tenant Id
* **version**: int (ReadOnly): Data Model Version

## ForestTrust
### Properties
* **friendlyName**: string: Friendly Name
* **remoteDnsIps**: string: Remote Dns ips
* **trustDirection**: string: Trust Direction
* **trustedDomainFqdn**: string: Trusted Domain FQDN
* **trustPassword**: string {sensitive}: Trust Password

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
* **ldaps**: 'Disabled' | 'Enabled' | string: A flag to determine whether or not Secure LDAP is enabled or disabled.
* **pfxCertificate**: string: The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file.
* **pfxCertificatePassword**: string: The password to decrypt the provided Secure LDAP certificate pfx file.
* **publicCertificate**: string (ReadOnly): Public certificate used to configure secure ldap.

## MigrationProgress
### Properties
* **completionPercentage**: int: Completion Percentage
* **progressMessage**: string: Progress Message

## MigrationProperties
### Properties
* **migrationProgress**: [MigrationProgress](#migrationprogress) (ReadOnly): Migration Progress
* **oldSubnetId**: string (ReadOnly): Old Subnet Id
* **oldVnetSiteId**: string (ReadOnly): Old Vnet Site Id

## NotificationSettings
### Properties
* **additionalRecipients**: string[]: The list of additional recipients
* **notifyDcAdmins**: 'Disabled' | 'Enabled' | string: Should domain controller admins be notified
* **notifyGlobalAdmins**: 'Disabled' | 'Enabled' | string: Should global admins be notified

## OuContainerProperties
### Properties
* **accounts**: [ContainerAccount](#containeraccount)[]: The list of container accounts
* **containerId**: string (ReadOnly): The OuContainer name
* **deploymentId**: string (ReadOnly): The Deployment id
* **distinguishedName**: string (ReadOnly): Distinguished Name of OuContainer instance
* **domainName**: string (ReadOnly): The domain name of Domain Services.
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.
* **serviceStatus**: string (ReadOnly): Status of OuContainer instance
* **tenantId**: string (ReadOnly): Azure Active Directory tenant id

## ReplicaSet
### Properties
* **domainControllerIpAddress**: string[] (ReadOnly): List of Domain Controller IP Address
* **externalAccessIpAddress**: string (ReadOnly): External access ip address.
* **healthAlerts**: [HealthAlert](#healthalert)[] (ReadOnly): List of Domain Health Alerts
* **healthLastEvaluated**: string (ReadOnly): Last domain evaluation run DateTime
* **healthMonitors**: [HealthMonitor](#healthmonitor)[] (ReadOnly): List of Domain Health Monitors
* **location**: string: Virtual network location
* **replicaSetId**: string (ReadOnly): ReplicaSet Id
* **serviceStatus**: string (ReadOnly): Status of Domain Service instance
* **subnetId**: string: The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName.
* **vnetSiteId**: string (ReadOnly): Virtual network site id

## ResourceForestSettings
### Properties
* **resourceForest**: string: Resource Forest
* **settings**: [ForestTrust](#foresttrust)[]: List of settings for Resource Forest

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UnsuspendDomainServiceResponse
### Properties
* **message**: string

