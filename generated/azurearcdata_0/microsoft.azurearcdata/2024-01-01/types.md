# Microsoft.AzureArcData @ 2024-01-01

## Resource Microsoft.AzureArcData/dataControllers@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataControllerProperties](#datacontrollerproperties) (Required): The data controller's properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/dataControllers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActiveDirectoryConnectorProperties](#activedirectoryconnectorproperties) (Required): null
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/postgresInstances@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PostgresInstanceProperties](#postgresinstanceproperties) (Required): null
* **sku**: [PostgresInstanceSku](#postgresinstancesku): Resource sku.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/postgresInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlManagedInstances@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlManagedInstanceProperties](#sqlmanagedinstanceproperties) (Required): null
* **sku**: [SqlManagedInstanceSku](#sqlmanagedinstancesku): Resource sku.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/sqlManagedInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlManagedInstances/failoverGroups@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FailoverGroupProperties](#failovergroupproperties) (Required): null
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureArcData/sqlManagedInstances/failoverGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlServerInstances@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlServerInstanceProperties](#sqlserverinstanceproperties): null
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/sqlServerInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlServerInstances/availabilityGroups@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlServerAvailabilityGroupResourceProperties](#sqlserveravailabilitygroupresourceproperties) (Required): Properties of Arc Sql Server availability group
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/sqlServerInstances/availabilityGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlServerInstances/databases@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlServerDatabaseResourceProperties](#sqlserverdatabaseresourceproperties) (Required): Properties of Arc Sql Server database
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/sqlServerInstances/databases' (ReadOnly, DeployTimeConstant): The resource type

## Function failover (Microsoft.AzureArcData/sqlServerInstances/availabilityGroups@2024-01-01)
* **Resource**: Microsoft.AzureArcData/sqlServerInstances/availabilityGroups
* **ApiVersion**: 2024-01-01
* **Output**: [SqlServerAvailabilityGroupResource](#sqlserveravailabilitygroupresource)

## Function forceFailoverAllowDataLoss (Microsoft.AzureArcData/sqlServerInstances/availabilityGroups@2024-01-01)
* **Resource**: Microsoft.AzureArcData/sqlServerInstances/availabilityGroups
* **ApiVersion**: 2024-01-01
* **Output**: [SqlServerAvailabilityGroupResource](#sqlserveravailabilitygroupresource)

## Function getDetailView (Microsoft.AzureArcData/sqlServerInstances/availabilityGroups@2024-01-01)
* **Resource**: Microsoft.AzureArcData/sqlServerInstances/availabilityGroups
* **ApiVersion**: 2024-01-01
* **Output**: [SqlServerAvailabilityGroupResource](#sqlserveravailabilitygroupresource)

## Function getTelemetry (Microsoft.AzureArcData/sqlServerInstances@2024-01-01)
* **Resource**: Microsoft.AzureArcData/sqlServerInstances
* **ApiVersion**: 2024-01-01
* **Input**: [SqlServerInstanceTelemetryRequest](#sqlserverinstancetelemetryrequest)
* **Output**: [SqlServerInstanceTelemetryResponse](#sqlserverinstancetelemetryresponse)

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

## AvailabilityGroupConfigure
### Properties
* **availabilityModeDescription**: string (ReadOnly): The Availability Synchronization mode of the availability group replica.
* **backupPriority**: int: Represents the user-specified priority for performing backups on this replica relative to the other replicas in the same availability group.
* **endpointUrl**: string: Mirroring endpoint URL of availability group replica
* **failoverModeDescription**: string (ReadOnly): The failover mode of the availability group replica.
* **primaryRoleAllowConnectionsDescription**: string (ReadOnly): Whether the availability allows all connections or only read-write connections.
* **readOnlyRoutingUrl**: string: Connectivity endpoint (URL) of the read only availability replica.
* **readWriteRoutingUrl**: string: Connectivity endpoint (URL) of the read write availability replica.
* **replicaCreateDate**: string (ReadOnly): Date that the replica was created.
* **replicaModifyDate**: string (ReadOnly): Date that the replica was modified.
* **secondaryRoleAllowConnectionsDescription**: string (ReadOnly): Whether an availability replica that is performing the secondary role (that is, a secondary replica) can accept connections from clients.
* **seedingModeDescription**: string (ReadOnly): Describes seeding mode.
* **sessionTimeout**: int: The time-out period of availability group session replica, in seconds.

## AvailabilityGroupInfo
### Properties
* **automatedBackupPreferenceDescription**: string (ReadOnly): Preferred location for performing backups on the availability databases in this availability group.
* **basicFeatures**: bool: Specifies whether this is a basic availability group.
* **clusterTypeDescription**: string (ReadOnly): SQL Server availability group cluster type description
* **dbFailover**: bool: Specifies whether the availability group supports failover for database health conditions.
* **dtcSupport**: bool: Specifies whether DTC support has been enabled for this availability group.
* **failureConditionLevel**: int: User-defined failure condition level under which an automatic failover must be triggered.
* **healthCheckTimeout**: int: Wait time (in milliseconds) for the sp_server_diagnostics system stored procedure to return server-health information, before the server instance is assumed to be slow or not responding.
* **isContained**: bool: SQL Server availability group contained system databases.
* **isDistributed**: bool: Specifies whether this is a distributed availability group.
* **primaryRecoveryHealthDescription**: string (ReadOnly): Indicates the recovery health of the primary replica.
* **primaryReplica**: string (ReadOnly): Name of the server instance that is hosting the current primary replica.
* **replicationPartnerType**: 'AzureSQLManagedInstance' | 'AzureSQLVM' | 'SQLServer' | 'Unknown' (ReadOnly)
* **requiredSynchronizedSecondariesToCommit**: int: The number of secondary replicas that must be in a synchronized state for a commit to complete.
* **secondaryRecoveryHealthDescription**: string (ReadOnly): Indicates the recovery health of a secondary replica.
* **synchronizationHealthDescription**: string (ReadOnly): Reflects a roll-up of the synchronization health of all availability replicas in the availability group.
* **version**: int (ReadOnly): SQL Server availability group current version.

## AvailabilityGroupState
### Properties
* **availabilityGroupReplicaRole**: string (ReadOnly): Current Always On availability groups role of the availability group replica.
* **connectedStateDescription**: string (ReadOnly): Whether a secondary replica is currently connected to the primary replica.
* **lastConnectErrorDescription**: string (ReadOnly): Text description of the last connection error of the availability group replica.
* **lastConnectErrorTimestamp**: string (ReadOnly): Date and time timestamp indicating when the last connect error occurred.
* **operationalStateDescription**: string (ReadOnly): Current operational state of the availability group replica
* **recoveryHealthDescription**: string (ReadOnly): Recovery health of the availability group replica.
* **synchronizationHealthDescription**: string (ReadOnly): Reflects a rollup of the database synchronization state (synchronization_state) of all joined availability databases (also known as replicas) and the availability mode of the replica (synchronous-commit or asynchronous-commit mode). The rollup will reflect the least healthy accumulated state the databases on the replica.

## BackupPolicy
### Properties
* **differentialBackupHours**: int: The differential backup interval in hours.
* **fullBackupDays**: int {minValue: 0, maxValue: 7}: The value indicating days between full backups.
* **retentionPeriodDays**: int {minValue: 0, maxValue: 35}: The retention period for all the databases in this managed instance.
* **transactionLogBackupMinutes**: int {minValue: 0, maxValue: 60}: The value indicating minutes between transaction log backups.

## BasicLoginInformation
### Properties
* **password**: string {sensitive} (WriteOnly): Login password.
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

## FailoverCluster
### Properties
* **hostNames**: string[] (ReadOnly): The host names which are part of the SQL FCI resource group.
* **id**: string (ReadOnly): The GUID of the SQL Server's underlying Failover Cluster.
* **networkName**: string (ReadOnly): The network name to connect to the SQL FCI.
* **sqlInstanceIds**: string[] (ReadOnly): The ARM IDs of the Arc SQL Server resources, belonging to the current server's Failover cluster.

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
* **keytab**: string {sensitive} (WriteOnly): A base64-encoded keytab.

## LogAnalyticsWorkspaceConfig
### Properties
* **primaryKey**: string {sensitive} (WriteOnly): Primary key of the workspace
* **workspaceId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Azure Log Analytics workspace ID

## Monitoring
### Properties
* **enabled**: bool: Indicates if monitoring is enabled for this SQL Server instance.

## OnPremiseProperty
### Properties
* **id**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): A globally unique ID identifying the associated Kubernetes cluster
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

## SqlAvailabilityGroupDatabaseReplicaResourceProperties
### Properties
* **databaseName**: string: the database name.
* **databaseStateDescription**: string (ReadOnly): Description of the database state of the availability replica.
* **isCommitParticipant**: bool (ReadOnly): Whether this replica is transaction committer.
* **isLocal**: bool (ReadOnly): Whether the availability database is local.
* **isPrimaryReplica**: bool (ReadOnly): Returns 1 if the replica is primary, or 0 if it is a secondary replica.
* **isSuspended**: bool (ReadOnly): Whether this data movement is suspended.
* **replicaName**: string (ReadOnly): the database replica name.
* **suspendReasonDescription**: string (ReadOnly): Description of the database suspended state reason.
* **synchronizationHealthDescription**: string (ReadOnly): Description of the health of database.
* **synchronizationStateDescription**: string (ReadOnly): Description of the data-movement state.

## SqlAvailabilityGroupReplicaResourceProperties
### Properties
* **configure**: [AvailabilityGroupConfigure](#availabilitygroupconfigure): null
* **replicaId**: string {pattern: "^[A-Za-z0-9]{8}-([A-Za-z0-9]{4}-){3}[A-Za-z0-9]{12}$"} (ReadOnly): ID GUID of the availability group.
* **replicaName**: string: the replica name.
* **state**: [AvailabilityGroupState](#availabilitygroupstate): null

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

## SqlServerAvailabilityGroupResource
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [SqlServerAvailabilityGroupResourceProperties](#sqlserveravailabilitygroupresourceproperties) (Required): Properties of Arc Sql Server availability group
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## SqlServerAvailabilityGroupResourceProperties
### Properties
* **availabilityGroupId**: string {pattern: "^[A-Za-z0-9]{8}-([A-Za-z0-9]{4}-){3}[A-Za-z0-9]{12}$"} (ReadOnly): ID GUID of the availability group.
* **collectionTimestamp**: string (ReadOnly): Timestamp for when the data was collected from the client machine.
* **databases**: [SqlServerAvailabilityGroupResourcePropertiesDatabases](#sqlserveravailabilitygroupresourcepropertiesdatabases): A list of Availability Group Database Replicas.
* **info**: [AvailabilityGroupInfo](#availabilitygroupinfo): Availability Group Info
* **instanceName**: string (ReadOnly): the SQL Server Instance name.
* **provisioningState**: string (ReadOnly): The provisioning state of the Arc-enabled SQL Server availability group resource.
* **replicas**: [SqlServerAvailabilityGroupResourcePropertiesReplicas](#sqlserveravailabilitygroupresourcepropertiesreplicas): A list of Availability Group Replicas.
* **serverName**: string (ReadOnly): the SQL server name.

## SqlServerAvailabilityGroupResourcePropertiesDatabases
### Properties
* **nextLink**: string (ReadOnly): Link to retrieve next page of results.
* **value**: [SqlAvailabilityGroupDatabaseReplicaResourceProperties](#sqlavailabilitygroupdatabasereplicaresourceproperties)[]: Array of Availability Group Database Replicas.

## SqlServerAvailabilityGroupResourcePropertiesReplicas
### Properties
* **nextLink**: string (ReadOnly): Link to retrieve next page of results.
* **value**: [SqlAvailabilityGroupReplicaResourceProperties](#sqlavailabilitygroupreplicaresourceproperties)[]: Array of Availability Group Replicas.

## SqlServerDatabaseResourceProperties
### Properties
* **backupInformation**: [SqlServerDatabaseResourcePropertiesBackupInformation](#sqlserverdatabaseresourcepropertiesbackupinformation)
* **backupPolicy**: [BackupPolicy](#backuppolicy): The backup profile for the SQL server.
* **collationName**: string: Collation of the database.
* **compatibilityLevel**: int {minValue: 80, maxValue: 200}: Compatibility level of the database
* **createMode**: 'Default' | 'PointInTimeRestore' | string: Database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. sourceDatabaseId and restorePointInTime must be specified.
* **databaseCreationDate**: string: Creation date of the database.
* **databaseOptions**: [SqlServerDatabaseResourcePropertiesDatabaseOptions](#sqlserverdatabaseresourcepropertiesdatabaseoptions): List of features that are enabled for the database
* **earliestRestoreDate**: string (ReadOnly): This records the earliest start date and time that restore is available for this database (ISO8601 format).
* **isReadOnly**: bool: Whether the database is read only or not.
* **lastDatabaseUploadTime**: string (ReadOnly): The time when last successful database upload was performed.
* **provisioningState**: string (ReadOnly): The provisioning state of the Arc-enabled SQL Server database resource.
* **recoveryMode**: 'Bulk-logged' | 'Full' | 'Simple' | string: Status of the database.
* **restorePointInTime**: string: Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
* **sizeMB**: int: Size of the database.
* **sourceDatabaseId**: string: The resource identifier of the source database associated with create operation of this database.
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
* **alwaysOnRole**: 'AvailabilityGroupReplica' | 'FailoverClusterInstance' | 'FailoverClusterNode' | 'None' | string (ReadOnly): The role of the SQL Server, based on availability.
* **azureDefenderStatus**: 'Protected' | 'Unknown' | 'Unprotected' | string (ReadOnly): Status of Azure Defender.
* **azureDefenderStatusLastUpdated**: string (ReadOnly): Timestamp of last Azure Defender status update.
* **backupPolicy**: [BackupPolicy](#backuppolicy): The backup profile for the SQL server.
* **collation**: string (ReadOnly): SQL Server collation.
* **containerResourceId**: string (ReadOnly): ARM Resource id of the container resource (Azure Arc for Servers).
* **cores**: string: The number of total cores of the Operating System Environment (OSE) hosting the SQL Server instance.
* **createTime**: string (ReadOnly): The time when the resource was created.
* **currentVersion**: string (ReadOnly): SQL Server current version.
* **edition**: 'Business Intelligence' | 'Developer' | 'Enterprise' | 'Evaluation' | 'Express' | 'Standard' | 'Web' | string: SQL Server edition.
* **failoverCluster**: [FailoverCluster](#failovercluster): Failover Cluster Instance properties.
* **hostType**: 'AWS Kubernetes Service' | 'AWS VMWare Virtual Machine' | 'AWS Virtual Machine' | 'Azure Kubernetes Service' | 'Azure VMWare Virtual Machine' | 'Azure Virtual Machine' | 'Container' | 'GCP Kubernetes Service' | 'GCP VMWare Virtual Machine' | 'GCP Virtual Machine' | 'Other' | 'Physical Server' | 'Virtual Machine' | string: Type of host for Azure Arc SQL Server
* **instanceName**: string: SQL Server instance name.
* **lastInventoryUploadTime**: string (ReadOnly): The time when last successful inventory upload was performed.
* **lastUsageUploadTime**: string (ReadOnly): The time when last successful usage upload was performed.
* **licenseType**: 'Free' | 'HADR' | 'LicenseOnly' | 'PAYG' | 'Paid' | 'ServerCAL' | 'Undefined' | string (ReadOnly): SQL Server license type.
* **monitoring**: [Monitoring](#monitoring): The monitoring configuration.
* **patchLevel**: string (ReadOnly): SQL Server update level.
* **productId**: string (ReadOnly): SQL Server product ID.
* **provisioningState**: string (ReadOnly): The provisioning state of the Arc-enabled SQL Server resource.
* **status**: 'Connected' | 'Disconnected' | 'Registered' | 'Unknown' | string (ReadOnly): The cloud connectivity status.
* **tcpDynamicPorts**: string (ReadOnly): Dynamic TCP ports used by SQL Server.
* **tcpStaticPorts**: string (ReadOnly): Static TCP ports used by SQL Server.
* **upgradeLockedUntil**: string: Upgrade Action for this resource is locked until it expires. The Expiration time indicated by this value. It is not locked when it is empty.
* **vCore**: string (ReadOnly): The number of logical processors used by the SQL Server instance.
* **version**: 'SQL Server 2012' | 'SQL Server 2014' | 'SQL Server 2016' | 'SQL Server 2017' | 'SQL Server 2019' | 'SQL Server 2022' | 'Unknown' | string: SQL Server version.

## SqlServerInstanceTelemetryColumn
### Properties
* **name**: string: The name of the telemetry column.
* **type**: 'bool' | 'datetime' | 'double' | 'guid' | 'int' | 'long' | 'string' | 'timespan' | string: The type of the telemetry column.

## SqlServerInstanceTelemetryRequest
### Properties
* **aggregationType**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Sum' | string: The aggregation type to use for the numerical columns in the dataset.
* **databaseNames**: string[]: The list of database names to return telemetry for. If not specified, telemetry for all databases will be aggregated and returned.
* **datasetName**: string (Required): The name of the telemetry dataset to retrieve.
* **endTime**: string: The end time for the time range to fetch telemetry for. If not specified, the current time is used.
* **interval**: string: The time granularity to fetch telemetry for. This is an ISO8601 duration. Examples: PT15M, PT1H, P1D
* **startTime**: string: The start time for the time range to fetch telemetry for. If not specified, the current time minus 1 hour is used.

## SqlServerInstanceTelemetryResponse
### Properties
* **columns**: [SqlServerInstanceTelemetryColumn](#sqlserverinstancetelemetrycolumn)[] (Required): The columns of the result telemetry table for the SQL Server instance.
* **nextLink**: string (ReadOnly): The link to the next section of rows of the telemetry response for the SQL Server instance. Null if no more sections are available.
* **rows**: string[][] (Required): A list of rows from the result telemetry table for the SQL Server instance.

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
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Client ID of the service principal for uploading data.
* **clientSecret**: string {sensitive} (WriteOnly): Secret of the service principal
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Tenant ID of the service principal.

## UploadWatermark
### Properties
* **logs**: string: Last uploaded date for logs from kubernetes cluster. Defaults to current date time
* **metrics**: string: Last uploaded date for metrics from kubernetes cluster. Defaults to current date time
* **usages**: string: Last uploaded date for usages from kubernetes cluster. Defaults to current date time

