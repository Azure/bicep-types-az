# Microsoft.AzureArcData @ 2021-11-01

## Resource Microsoft.AzureArcData/dataControllers@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataControllerProperties](#datacontrollerproperties) (Required): The data controller's properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/dataControllers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlManagedInstances@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extendedLocation of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlManagedInstanceProperties](#sqlmanagedinstanceproperties) (Required): null
* **sku**: [SqlManagedInstanceSku](#sqlmanagedinstancesku): Resource sku.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/sqlManagedInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlServerInstances@2021-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlServerInstanceProperties](#sqlserverinstanceproperties): null
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/sqlServerInstances' (ReadOnly, DeployTimeConstant): The resource type

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
* **provisioningState**: string (ReadOnly)
* **uploadServicePrincipal**: [UploadServicePrincipal](#uploadserviceprincipal): Deprecated. Service principal is deprecated in favor of Arc Kubernetes service extension managed identity.
* **uploadWatermark**: [UploadWatermark](#uploadwatermark): Properties on upload watermark.  Mostly timestamp for each upload data type

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'CustomLocation' | string: The type of the extended location.

## K8SResourceRequirements
### Properties
* **limits**: [K8SResourceRequirementsLimits](#k8sresourcerequirementslimits): Limits for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'.
* **requests**: [K8SResourceRequirementsRequests](#k8sresourcerequirementsrequests): Requests for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'.
### Additional Properties
* **Additional Properties Type**: any

## K8SResourceRequirementsLimits
### Properties
### Additional Properties
* **Additional Properties Type**: any

## K8SResourceRequirementsRequests
### Properties
### Additional Properties
* **Additional Properties Type**: any

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

## LogAnalyticsWorkspaceConfig
### Properties
* **primaryKey**: string (WriteOnly): Primary key of the workspace
* **workspaceId**: string: Azure Log Analytics workspace ID

## OnPremiseProperty
### Properties
* **id**: string (Required): A globally unique ID identifying the associated Kubernetes cluster
* **publicSigningKey**: string (Required): Certificate that contains the Kubernetes cluster public key used to verify signing
* **signingCertificateThumbprint**: string: Unique thumbprint returned to customer to verify the certificate being uploaded

## SqlManagedInstanceK8SRaw
### Properties
* **spec**: [SqlManagedInstanceK8SSpec](#sqlmanagedinstancek8sspec): The kubernetes spec information.
### Additional Properties
* **Additional Properties Type**: any

## SqlManagedInstanceK8SSpec
### Properties
* **replicas**: int: This option specifies the number of SQL Managed Instance replicas that will be deployed in your Kubernetes cluster for high availability purposes. If sku.tier is BusinessCritical, allowed values are '2' or '3' with default of '3'. If sku.tier is GeneralPurpose, replicas must be '1'.
* **scheduling**: [K8SScheduling](#k8sscheduling): The kubernetes scheduling information.
### Additional Properties
* **Additional Properties Type**: any

## SqlManagedInstanceProperties
### Properties
* **admin**: string: The instance admin user
* **basicLoginInformation**: [BasicLoginInformation](#basiclogininformation): Username and password for basic authentication.
* **clusterId**: string: If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to.
* **dataControllerId**: string: null
* **endTime**: string: The instance end time
* **extensionId**: string: If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to.
* **k8sRaw**: [SqlManagedInstanceK8SRaw](#sqlmanagedinstancek8sraw): The raw kubernetes information
* **lastUploadedDate**: string: Last uploaded date from Kubernetes cluster. Defaults to current date time
* **licenseType**: 'BasePrice' | 'DisasterRecovery' | 'LicenseIncluded' | string: The license type to apply for this managed instance.
* **provisioningState**: string (ReadOnly)
* **startTime**: string: The instance start time

## SqlManagedInstanceSku
### Properties
* **capacity**: int
* **dev**: bool: Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose.
* **family**: string
* **name**: 'vCore' | string (Required): The name of the SKU.
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'BusinessCritical' | 'GeneralPurpose': The pricing tier for the instance.

## SqlServerInstanceProperties
### Properties
* **azureDefenderStatus**: 'Protected' | 'Unknown' | 'Unprotected' | string: Status of Azure Defender.
* **azureDefenderStatusLastUpdated**: string: Timestamp of last Azure Defender status update.
* **collation**: string: SQL Server collation.
* **containerResourceId**: string (Required): ARM Resource id of the container resource (Azure Arc for Servers).
* **createTime**: string (ReadOnly): The time when the resource was created.
* **currentVersion**: string: SQL Server current version.
* **edition**: 'Developer' | 'Enterprise' | 'Evaluation' | 'Express' | 'Standard' | 'Web' | string: SQL Server edition.
* **instanceName**: string: SQL Server instance name.
* **licenseType**: 'Free' | 'HADR' | 'Paid' | 'Undefined' | string: SQL Server license type.
* **patchLevel**: string: SQL Server update level.
* **productId**: string: SQL Server product ID.
* **provisioningState**: string (ReadOnly)
* **status**: 'Connected' | 'Disconnected' | 'Unknown' | string (Required): The cloud connectivity status.
* **tcpDynamicPorts**: string: Dynamic TCP ports used by SQL Server.
* **tcpStaticPorts**: string: Static TCP ports used by SQL Server.
* **vCore**: string: The number of logical processors used by the SQL Server instance.
* **version**: 'SQL Server 2016' | 'SQL Server 2017' | 'SQL Server 2019' | string: SQL Server version.

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

