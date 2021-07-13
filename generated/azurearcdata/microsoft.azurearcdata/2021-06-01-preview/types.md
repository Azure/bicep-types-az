# Microsoft.AzureArcData @ 2021-06-01-preview

## Resource Microsoft.AzureArcData/dataControllers@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataControllerProperties](#datacontrollerproperties) (Required): The data controller properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/dataControllers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/postgresInstances@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PostgresInstanceProperties](#postgresinstanceproperties) (Required): Postgres Instance properties.
* **sku**: [PostgresInstanceSku](#postgresinstancesku): The resource model definition representing SKU for Azure Database for PostgresSQL - Azure Arc
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/postgresInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlManagedInstances@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlManagedInstanceProperties](#sqlmanagedinstanceproperties) (Required): Properties of sqlManagedInstance.
* **sku**: [SqlManagedInstanceSku](#sqlmanagedinstancesku): The resource model definition representing SKU for Azure Managed Instance - Azure Arc
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/sqlManagedInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureArcData/sqlServerInstances@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlServerInstanceProperties](#sqlserverinstanceproperties): Properties of SqlServerInstance.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureArcData/sqlServerInstances' (ReadOnly, DeployTimeConstant): The resource type

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'CustomLocation': The type of extendedLocation.

## DataControllerProperties
### Properties
* **basicLoginInformation**: [BasicLoginInformation](#basiclogininformation): Username and password for basic login authentication.
* **k8sRaw**: any: Any object
* **lastUploadedDate**: string: Last uploaded date from Kubernetes cluster. Defaults to current date time
* **logAnalyticsWorkspaceConfig**: [LogAnalyticsWorkspaceConfig](#loganalyticsworkspaceconfig): Log analytics workspace id and primary key
* **onPremiseProperty**: [OnPremiseProperty](#onpremiseproperty): Properties from the Kubernetes data controller
* **provisioningState**: string (ReadOnly)
* **uploadServicePrincipal**: [UploadServicePrincipal](#uploadserviceprincipal): Service principal for uploading billing, metrics and logs.
* **uploadWatermark**: [UploadWatermark](#uploadwatermark): Properties on upload watermark.  Mostly timestamp for each upload data type

## BasicLoginInformation
### Properties
* **password**: string: Login password.
* **username**: string: Login username.

## LogAnalyticsWorkspaceConfig
### Properties
* **primaryKey**: string: Primary key of the workspace
* **workspaceId**: string: Azure Log Analytics workspace ID

## OnPremiseProperty
### Properties
* **id**: string (Required): A globally unique ID identifying the associated Kubernetes cluster
* **publicSigningKey**: string (Required): Certificate that contains the Kubernetes cluster public key used to verify signing
* **signingCertificateThumbprint**: string: Unique thumbprint returned to customer to verify the certificate being uploaded

## UploadServicePrincipal
### Properties
* **authority**: string: Authority for the service principal. Example: https://login.microsoftonline.com/
* **clientId**: string: Client ID of the service principal for uploading data.
* **clientSecret**: string: Secret of the service principal
* **tenantId**: string: Tenant ID of the service principal.

## UploadWatermark
### Properties
* **logs**: string: Last uploaded date for logs from kubernetes cluster. Defaults to current date time
* **metrics**: string: Last uploaded date for metrics from kubernetes cluster. Defaults to current date time
* **usages**: string: Last uploaded date for usages from kubernetes cluster. Defaults to current date time

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: An identifier for the identity that created the resource
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that creates/modifies resources
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: An identifier for the identity that last modified the resource
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that creates/modifies resources

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PostgresInstanceProperties
### Properties
* **admin**: string: The instance admin
* **basicLoginInformation**: [BasicLoginInformation](#basiclogininformation): Username and password for basic login authentication.
* **dataControllerId**: string: The data controller id
* **k8sRaw**: any: Any object
* **lastUploadedDate**: string: Last uploaded date from Kubernetes cluster. Defaults to current date time
* **provisioningState**: string (ReadOnly)

## PostgresInstanceSku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **dev**: bool: Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU.  It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Hyperscale': This field is required to be implemented by the Resource Provider if the service has more than one tier.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlManagedInstanceProperties
### Properties
* **admin**: string: The instance admin user
* **basicLoginInformation**: [BasicLoginInformation](#basiclogininformation): Username and password for basic login authentication.
* **dataControllerId**: string: null
* **endTime**: string: The instance end time
* **k8sRaw**: any: Any object
* **lastUploadedDate**: string: Last uploaded date from Kubernetes cluster. Defaults to current date time
* **provisioningState**: string (ReadOnly)
* **startTime**: string: The instance start time

## SqlManagedInstanceSku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **dev**: bool: Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU.  It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'BusinessCritical' | 'GeneralPurpose': This field is required to be implemented by the Resource Provider if the service has more than one tier.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlServerInstanceProperties
### Properties
* **collation**: string: SQL Server collation.
* **containerResourceId**: string (Required): ARM Resource id of the container resource (Azure Arc for Servers).
* **createTime**: string (ReadOnly): The time when the resource was created.
* **currentVersion**: string: SQL Server current version.
* **edition**: string: SQL Server edition.
* **instanceName**: string: SQL Server instance name.
* **licenseType**: string: SQL Server license type.
* **patchLevel**: string: SQL Server update level.
* **productId**: string: SQL Server product ID.
* **provisioningState**: string (ReadOnly)
* **status**: string (Required): The cloud connectivity status.
* **tcpDynamicPorts**: string: Dynamic TCP ports used by SQL Server.
* **tcpStaticPorts**: string: Static TCP ports used by SQL Server.
* **vCore**: string: The number of logical processors used by the SQL Server instance.
* **version**: string: SQL Server version.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

