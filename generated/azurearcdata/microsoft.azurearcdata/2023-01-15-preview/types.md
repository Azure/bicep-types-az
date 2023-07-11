# Microsoft.AzureArcData @ 2023-01-15-preview

## Resource Microsoft.AzureArcData/dataControllers@2023-01-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataControllerProperties](#datacontrollerproperties) (Required): The data controller's properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/dataControllers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors@2023-01-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActiveDirectoryConnectorProperties](#activedirectoryconnectorproperties) (Required): null
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/postgresInstances@2023-01-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PostgresInstanceProperties](#postgresinstanceproperties) (Required): null
* **sku**: [PostgresInstanceSku](#postgresinstancesku): Resource sku.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/postgresInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlManagedInstances@2023-01-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlManagedInstanceProperties](#sqlmanagedinstanceproperties) (Required): null
* **sku**: [SqlManagedInstanceSku](#sqlmanagedinstancesku): Resource sku.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/sqlManagedInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlManagedInstances/failoverGroups@2023-01-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FailoverGroupProperties](#failovergroupproperties) (Required): null
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureArcData/sqlManagedInstances/failoverGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlServerInstances@2023-01-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlServerInstanceProperties](#sqlserverinstanceproperties): null
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/sqlServerInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlServerInstances/databases@2023-01-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlServerDatabaseResourceProperties](#sqlserverdatabaseresourceproperties) (Required): Properties of Arc Sql Server database
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/sqlServerInstances/databases' (ReadOnly, DeployTimeConstant): The resource type

## ActiveDirectoryConnectorDNSDetails
### Properties
* **domainName**: string: DNS domain name for which DNS lookups should be forwarded to the Active Directory DNS servers.
* **nameserverIPAddresses**: string[] (Required): List of Active Directory DNS server IP addresses.
* **preferK8sDnsForPtrLookups**: bool: Flag indicating whether to prefer Kubernetes DNS server response over AD DNS server response for IP address lookups.
* **replicas**: int: Replica count for DNS proxy service. Default value is 1.

## ActiveDirectoryConnectorDomainDetails
### Properties
* **domainControllers**: [ActiveDirectoryDomainControllers](#activedirectorydomaincontrollers): null
* **netbiosDomainName**: string: NETBIOS name of the Active Directory domain.
* **ouDistinguishedName**: string: The distinguished name of the Active Directory Organizational Unit.
* **realm**: string (Required): Name (uppercase) of the Active Directory domain that this AD connector will be associated with.
* **serviceAccountProvisioning**: 'automatic' | 'manual' | string: The service account provisioning mode for this Active Directory connector.

## ActiveDirectoryConnectorProperties
### Properties
* **domainServiceAccountLoginInformation**: [BasicLoginInformation](#basiclogininformation): Username and password for domain service account authentication.
* **provisioningState**: string (ReadOnly): The provisioning state of the Active Directory connector resource.
* **spec**: [ActiveDirectoryConnectorSpec](#activedirectoryconnectorspec) (Required): null
* **status**: [ActiveDirectoryConnectorStatus](#activedirectoryconnectorstatus): null

## ActiveDirectoryConnectorSpec
### Properties
* **activeDirectory**: [ActiveDirectoryConnectorDomainDetails](#activedirectoryconnectordomaindetails) (Required): null
* **dns**: [ActiveDirectoryConnectorDNSDetails](#activedirectoryconnectordnsdetails) (Required): null

## ActiveDirectoryConnectorStatus
### Properties
* **lastUpdateTime**: string: The time that the custom resource was last updated.
* **observedGeneration**: int: The version of the replicaSet associated with the AD connector custom resource.
* **state**: string: The state of the AD connector custom resource.
### Additional Properties
* **Additional Properties Type**: any

## ActiveDirectoryDomainController
### Properties
* **hostname**: string (Required): Fully-qualified domain name of a domain controller in the AD domain.

## ActiveDirectoryDomainControllers
### Properties
* **primaryDomainController**: [ActiveDirectoryDomainController](#activedirectorydomaincontroller): Information about the Primary Domain Controller (PDC) in the AD domain.
* **secondaryDomainControllers**: [ActiveDirectoryDomainController](#activedirectorydomaincontroller)[]: null

## ActiveDirectoryInformation
### Properties
* **keytabInformation**: [KeytabInformation](#keytabinformation): Keytab information that is used for the Sql Managed Instance when Active Directory authentication is used.

## BasicLoginInformation
### Properties
* **password**: string (WriteOnly): Login password.
* **username**: string: Login username.

## DataControllerProperties
### Properties
* **basicLoginInformation**: [BasicLoginInformation](#basiclogininformation): Deprecated. Azure Arc Data Services data controller no longer expose any endpoint. All traffic are exposed through Kubernetes native API.
* **clusterId**: string: If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to.
* **extensionId**: string: If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to.
* **infrastructure**: 'alibaba' | 'aws' | 'azure' | 'gcp' | 'onpremises' | 'other': The infrastructure the data controller is running on.
* **k8sRaw**: any: The raw kubernetes information
* **lastUploadedDate**: string: Last uploaded date from Kubernetes cluster. Defaults to current date time
* **logAnalyticsWorkspaceConfig**: [LogAnalyticsWorkspaceConfig](#loganalyticsworkspaceconfig): Log analytics workspace id and primary key
* **logsDashboardCredential**: [BasicLoginInformation](#basiclogininformation): Login credential for logs dashboard on the Kubernetes cluster.
* **metricsDashboardCredential**: [BasicLoginInformation](#basiclogininformation): Login credential for metrics dashboard on the Kubernetes cluster.
* **onPremiseProperty**: [OnPremiseProperty](#onpremiseproperty): Properties from the Kubernetes data controller
* **provisioningState**: string (ReadOnly): The provisioning state of the Arc Data Controller resource.
* **uploadServicePrincipal**: [UploadServicePrincipal](#uploadserviceprincipal): Deprecated. Service principal is deprecated in favor of Arc Kubernetes service extension managed identity.
* **uploadWatermark**: [UploadWatermark](#uploadwatermark): Properties on upload watermark.  Mostly timestamp for each upload data type

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'CustomLocation' | string: The type of the extended location.

## FailoverGroupProperties
### Properties
* **partnerManagedInstanceId**: string (Required): The resource ID of the partner SQL managed instance.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the failover group resource.
* **spec**: [FailoverGroupSpec](#failovergroupspec) (Required): The specifications of the failover group resource.
* **status**: any: The status of the failover group custom resource.
### Additional Properties
* **Additional Properties Type**: any

## FailoverGroupSpec
### Properties
* **partnerMI**: string: The name of the partner SQL managed instance.
* **partnerMirroringCert**: string: The mirroring endpoint public certificate for the partner SQL managed instance. Only PEM format is supported.
* **partnerMirroringURL**: string: The mirroring endpoint URL of the partner SQL managed instance.
* **partnerSyncMode**: 'async' | 'sync' | string: The partner sync mode of the SQL managed instance.
* **role**: 'force-primary-allow-data-loss' | 'force-secondary' | 'primary' | 'secondary' | string (Required): The role of the SQL managed instance in this failover group.
* **sharedName**: string: The shared name of the failover group for this SQL managed instance. Both SQL managed instance and its partner have to use the same shared name.
* **sourceMI**: string: The name of the SQL managed instance with this failover group role.
### Additional Properties
* **Additional Properties Type**: any

## K8SActiveDirectory
### Properties
* **accountName**: string: Account name for AAD
* **connector**: [K8SActiveDirectoryConnector](#k8sactivedirectoryconnector)
* **encryptionTypes**: string[]: An array of encryption types
* **keytabSecret**: string: Keytab secret used to authenticate with Active Directory.

## K8SActiveDirectoryConnector
### Properties
* **name**: string: Name of the connector
* **namespace**: string: Name space of the connector

## K8SNetworkSettings
### Properties
* **forceencryption**: int: If 1, then SQL Server forces all connections to be encrypted. By default, this option is 0
* **tlsciphers**: string: Specifies which ciphers are allowed by SQL Server for TLS
* **tlsprotocols**: string: A comma-separated list of which TLS protocols are allowed by SQL Server

## K8SResourceRequirements
### Properties
* **limits**: [K8SResourceRequirementsLimits](#k8sresourcerequirementslimits): Limits for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'.
* **requests**: [K8SResourceRequirementsRequests](#k8sresourcerequirementsrequests): Requests for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'.
### Additional Properties
* **Additional Properties Type**: any

## K8SResourceRequirementsLimits
### Properties
### Additional Properties
* **Additional Properties Type**: string

## K8SResourceRequirementsRequests
### Properties
### Additional Properties
* **Additional Properties Type**: string

## K8SScheduling
### Properties
* **default**: [K8SSchedulingOptions](#k8sschedulingoptions): The kubernetes scheduling options. It describes restrictions used to help Kubernetes select appropriate nodes to host the database service
### Additional Properties
* **Additional Properties Type**: any

## K8SSchedulingOptions
### Properties
* **resources**: [K8SResourceRequirements](#k8sresourcerequirements): The kubernetes resource limits and requests used to restrict or reserve resource usage.
### Additional Properties
* **Additional Properties Type**: any

## K8SSecurity
### Properties
* **activeDirectory**: [K8SActiveDirectory](#k8sactivedirectory): The kubernetes active directory information.
* **adminLoginSecret**: string: Admin login secret key
* **serviceCertificateSecret**: string: Service certificate secret used
* **transparentDataEncryption**: [K8StransparentDataEncryption](#k8stransparentdataencryption): Transparent data encryption information.
### Additional Properties
* **Additional Properties Type**: any

## K8SSettings
### Properties
* **network**: [K8SNetworkSettings](#k8snetworksettings): The kubernetes network settings information.
### Additional Properties
* **Additional Properties Type**: any

## K8StransparentDataEncryption
### Properties
* **mode**: string: Transparent data encryption mode. Can be Service Managed, Customer managed or disabled
* **protectorSecret**: string: Protector secret for customer managed Transparent data encryption mode

## KeytabInformation
### Properties
* **keytab**: string (WriteOnly): A base64-encoded keytab.

## LogAnalyticsWorkspaceConfig
### Properties
* **primaryKey**: string (WriteOnly): Primary key of the workspace
* **workspaceId**: string: Azure Log Analytics workspace ID

## OnPremiseProperty
### Properties
* **id**: string (Required): A globally unique ID identifying the associated Kubernetes cluster
* **publicSigningKey**: string (Required): Certificate that contains the Kubernetes cluster public key used to verify signing
* **signingCertificateThumbprint**: string: Unique thumbprint returned to customer to verify the certificate being uploaded

## PostgresInstanceProperties
### Properties
* **admin**: string: The instance admin
* **basicLoginInformation**: [BasicLoginInformation](#basiclogininformation): Username and password for basic authentication.
* **dataControllerId**: string: The data controller id
* **k8sRaw**: any: The raw kubernetes information
* **lastUploadedDate**: string: Last uploaded date from Kubernetes cluster. Defaults to current date time
* **provisioningState**: string (ReadOnly): The provisioning state of the Azure Arc-enabled PostgreSQL instance.

## PostgresInstanceSku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **dev**: bool: Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU.  It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Hyperscale': This field is required to be implemented by the Resource Provider if the service has more than one tier.

## SqlManagedInstanceK8SRaw
### Properties
* **spec**: [SqlManagedInstanceK8SSpec](#sqlmanagedinstancek8sspec): The kubernetes spec information.
### Additional Properties
* **Additional Properties Type**: any

## SqlManagedInstanceK8SSpec
### Properties
* **replicas**: int: This option specifies the number of SQL Managed Instance replicas that will be deployed in your Kubernetes cluster for high availability purposes. If sku.tier is BusinessCritical, allowed values are '2' or '3' with default of '3'. If sku.tier is GeneralPurpose, replicas must be '1'.
* **scheduling**: [K8SScheduling](#k8sscheduling): The kubernetes scheduling information.
* **security**: [K8SSecurity](#k8ssecurity): The kubernetes security information.
* **settings**: [K8SSettings](#k8ssettings): The kubernetes settings information.
### Additional Properties
* **Additional Properties Type**: any

## SqlManagedInstanceProperties
### Properties
* **activeDirectoryInformation**: [ActiveDirectoryInformation](#activedirectoryinformation): Active Directory information related to this SQL Managed Instance.
* **admin**: string: The instance admin user
* **basicLoginInformation**: [BasicLoginInformation](#basiclogininformation): Username and password for basic authentication.
* **clusterId**: string: If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to.
* **dataControllerId**: string: null
* **endTime**: string: The instance end time
* **extensionId**: string: If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to.
* **k8sRaw**: [SqlManagedInstanceK8SRaw](#sqlmanagedinstancek8sraw): The raw kubernetes information
* **lastUploadedDate**: string: Last uploaded date from Kubernetes cluster. Defaults to current date time
* **licenseType**: 'BasePrice' | 'DisasterRecovery' | 'LicenseIncluded' | string: The license type to apply for this managed instance.
* **provisioningState**: string (ReadOnly): The provisioning state of the Arc-enabled SQL Managed Instance resource.
* **startTime**: string: The instance start time

## SqlManagedInstanceSku
### Properties
* **capacity**: int: The SKU capacity
* **dev**: bool: Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose.
* **family**: string: The SKU family
* **name**: 'vCore' (Required): The name of the SKU.
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'BusinessCritical' | 'GeneralPurpose': The pricing tier for the instance.

## SqlServerDatabaseResourceProperties
### Properties
* **backupInformation**: [SqlServerDatabaseResourcePropertiesBackupInformation](#sqlserverdatabaseresourcepropertiesbackupinformation)
* **collationName**: string: Collation of the database.
* **compatibilityLevel**: int: Compatibility level of the database
* **databaseCreationDate**: string: Creation date of the database.
* **databaseOptions**: [SqlServerDatabaseResourcePropertiesDatabaseOptions](#sqlserverdatabaseresourcepropertiesdatabaseoptions): List of features that are enabled for the database
* **isReadOnly**: bool: Whether the database is read only or not.
* **provisioningState**: string (ReadOnly): The provisioning state of the Arc-enabled SQL Server database resource.
* **recoveryMode**: 'Bulk-logged' | 'Full' | 'Simple' | string: Status of the database.
* **sizeMB**: int: Size of the database.
* **spaceAvailableMB**: int: Space left of the database.
* **state**: 'Copying' | 'Emergency' | 'Offline' | 'OfflineSecondary' | 'Online' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Suspect' | string: State of the database.

## SqlServerDatabaseResourcePropertiesBackupInformation
### Properties
* **lastFullBackup**: string: Date time of last full backup.
* **lastLogBackup**: string: Date time of last log backup.

## SqlServerDatabaseResourcePropertiesDatabaseOptions
### Properties
* **isAutoCloseOn**: bool
* **isAutoCreateStatsOn**: bool
* **isAutoShrinkOn**: bool
* **isAutoUpdateStatsOn**: bool
* **isEncrypted**: bool
* **isMemoryOptimizationEnabled**: bool
* **isRemoteDataArchiveEnabled**: bool
* **isTrustworthyOn**: bool

## SqlServerInstanceProperties
### Properties
* **azureDefenderStatus**: 'Protected' | 'Unknown' | 'Unprotected' | string: Status of Azure Defender.
* **azureDefenderStatusLastUpdated**: string: Timestamp of last Azure Defender status update.
* **collation**: string: SQL Server collation.
* **containerResourceId**: string (Required): ARM Resource id of the container resource (Azure Arc for Servers).
* **cores**: string: The number of total cores of the Operating System Environment (OSE) hosting the SQL Server instance.
* **createTime**: string (ReadOnly): The time when the resource was created.
* **currentVersion**: string: SQL Server current version.
* **edition**: 'Business Intelligence' | 'Developer' | 'Enterprise' | 'Evaluation' | 'Express' | 'Standard' | 'Web' | string: SQL Server edition.
* **hostType**: 'AWS Kubernetes Service' | 'AWS VMWare Virtual Machine' | 'AWS Virtual Machine' | 'Azure Kubernetes Service' | 'Azure VMWare Virtual Machine' | 'Azure Virtual Machine' | 'Container' | 'GCP Kubernetes Service' | 'GCP VMWare Virtual Machine' | 'GCP Virtual Machine' | 'Other' | 'Physical Server' | 'Virtual Machine' | string: Type of host for Azure Arc SQL Server
* **instanceName**: string: SQL Server instance name.
* **licenseType**: 'Free' | 'HADR' | 'LicenseOnly' | 'PAYG' | 'Paid' | 'ServerCAL' | 'Undefined' | string: SQL Server license type.
* **patchLevel**: string: SQL Server update level.
* **productId**: string: SQL Server product ID.
* **provisioningState**: string (ReadOnly): The provisioning state of the Arc-enabled SQL Server resource.
* **status**: 'Connected' | 'Disconnected' | 'Registered' | 'Unknown' | string (Required): The cloud connectivity status.
* **tcpDynamicPorts**: string: Dynamic TCP ports used by SQL Server.
* **tcpStaticPorts**: string: Static TCP ports used by SQL Server.
* **vCore**: string: The number of logical processors used by the SQL Server instance.
* **version**: 'SQL Server 2012' | 'SQL Server 2014' | 'SQL Server 2016' | 'SQL Server 2017' | 'SQL Server 2019' | 'SQL Server 2022' | 'Unknown' | string: SQL Server version.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UploadServicePrincipal
### Properties
* **authority**: string: Authority for the service principal. Example: https://login.microsoftonline.com/
* **clientId**: string: Client ID of the service principal for uploading data.
* **clientSecret**: string (WriteOnly): Secret of the service principal
* **tenantId**: string: Tenant ID of the service principal.

## UploadWatermark
### Properties
* **logs**: string: Last uploaded date for logs from kubernetes cluster. Defaults to current date time
* **metrics**: string: Last uploaded date for metrics from kubernetes cluster. Defaults to current date time
* **usages**: string: Last uploaded date for usages from kubernetes cluster. Defaults to current date time

