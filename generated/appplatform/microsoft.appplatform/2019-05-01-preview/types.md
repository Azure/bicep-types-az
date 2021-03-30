# Microsoft.AppPlatform @ 2019-05-01-preview

## Resource Microsoft.AppPlatform/Spring@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The GEO location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterResourceProperties](#clusterresourceproperties): Service properties payload
* **sku**: [Sku](#sku): Sku of Azure Spring Cloud
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Tags of the service which is a list of key value pairs that describe the resource.
* **type**: 'Microsoft.AppPlatform/Spring' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apps@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedIdentityProperties](#managedidentityproperties): Managed identity properties retrieved from ARM request headers.
* **location**: string: The GEO location of the application, always the same with its parent resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppResourceProperties](#appresourceproperties): App resource properties payload
* **type**: 'Microsoft.AppPlatform/Spring/apps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apps/bindings@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BindingResourceProperties](#bindingresourceproperties): Binding resource properties payload
* **type**: 'Microsoft.AppPlatform/Spring/apps/bindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apps/deployments@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentResourceProperties](#deploymentresourceproperties): Deployment resource properties payload
* **sku**: [Sku](#sku): Sku of Azure Spring Cloud
* **type**: 'Microsoft.AppPlatform/Spring/apps/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apps/domains@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomDomainProperties](#customdomainproperties): Custom domain of app resource payload.
* **type**: 'Microsoft.AppPlatform/Spring/apps/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/certificates@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties): Certificate resource payload.
* **type**: 'Microsoft.AppPlatform/Spring/certificates' (ReadOnly, DeployTimeConstant): The resource type

## ClusterResourceProperties
### Properties
* **configServerProperties**: [ConfigServerProperties](#configserverproperties): Config server git properties payload
* **networkProfile**: [NetworkProfile](#networkprofile): Service network profile payload
* **provisioningState**: 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Moved' | 'MoveFailed' | 'Moving' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the Service. Possible values include: 'Creating', 'Updating', 'Deleting', 'Deleted', 'Succeeded', 'Failed', 'Moving', 'Moved', 'MoveFailed'
* **serviceId**: string (ReadOnly): ServiceInstanceEntity GUID which uniquely identifies a created resource
* **trace**: [TraceProperties](#traceproperties): Trace properties payload
* **version**: int (ReadOnly): Version of the Service

## ConfigServerProperties
### Properties
* **configServer**: [ConfigServerSettings](#configserversettings): The settings of config server.
* **error**: [Error](#error): The error code compose of code and message.
* **state**: 'Deleted' | 'Failed' | 'NotAvailable' | 'Succeeded' | 'Updating' (ReadOnly): State of the config server. Possible values include: 'NotAvailable', 'Deleted', 'Failed', 'Succeeded', 'Updating'

## ConfigServerSettings
### Properties
* **gitProperty**: [ConfigServerGitProperty](#configservergitproperty): Property of git.

## ConfigServerGitProperty
### Properties
* **hostKey**: string: Public sshKey of git repository.
* **hostKeyAlgorithm**: string: SshKey algorithm of git repository.
* **label**: string: Label of the repository
* **password**: string: Password of git repository basic auth.
* **privateKey**: string: Private sshKey algorithm of git repository.
* **repositories**: [GitPatternRepository](#gitpatternrepository)[]: Repositories of git.
* **searchPaths**: string[]: Searching path of the repository
* **strictHostKeyChecking**: bool: Strict host key checking or not.
* **uri**: string (Required): URI of the repository
* **username**: string: Username of git repository basic auth.

## GitPatternRepository
### Properties
* **hostKey**: string: Public sshKey of git repository.
* **hostKeyAlgorithm**: string: SshKey algorithm of git repository.
* **label**: string: Label of the repository
* **name**: string (Required): Name of the repository
* **password**: string: Password of git repository basic auth.
* **pattern**: string[]: Collection of pattern of the repository
* **privateKey**: string: Private sshKey algorithm of git repository.
* **searchPaths**: string[]: Searching path of the repository
* **strictHostKeyChecking**: bool: Strict host key checking or not.
* **uri**: string (Required): URI of the repository
* **username**: string: Username of git repository basic auth.

## Error
### Properties
* **code**: string: The code of error.
* **message**: string: The message of error.

## NetworkProfile
### Properties
* **appNetworkResourceGroup**: string: Name of the resource group containing network resources of Azure Spring Cloud Apps
* **appSubnetId**: string: Fully qualified resource Id of the subnet to host Azure Spring Cloud Apps
* **outboundIPs**: [schemas:8_outboundIPs](#schemas8outboundips) (ReadOnly): Desired outbound IP resources for Azure Spring Cloud instance.
* **requiredTraffics**: [RequiredTraffic](#requiredtraffic)[] (ReadOnly): Required inbound or outbound traffics for Azure Spring Cloud instance.
* **serviceCidr**: string: Azure Spring Cloud service reserved CIDR
* **serviceRuntimeNetworkResourceGroup**: string: Name of the resource group containing network resources of Azure Spring Cloud Service Runtime
* **serviceRuntimeSubnetId**: string: Fully qualified resource Id of the subnet to host Azure Spring Cloud Service Runtime

## schemas:8_outboundIPs
### Properties
* **publicIPs**: string[] (ReadOnly): A list of public IP addresses.

## RequiredTraffic
### Properties
* **direction**: 'Inbound' | 'Outbound' (ReadOnly): The direction of required traffic. Possible values include: 'Inbound', 'Outbound'
* **fqdns**: string[] (ReadOnly): The FQDN list of required traffic
* **ips**: string[] (ReadOnly): The ip list of required traffic
* **port**: int (ReadOnly): The port of required traffic
* **protocol**: string (ReadOnly): The protocol of required traffic

## TraceProperties
### Properties
* **appInsightInstrumentationKey**: string: Target application insight instrumentation key
* **enabled**: bool: Indicates whether enable the tracing functionality
* **error**: [Error](#error): The error code compose of code and message.
* **state**: 'Failed' | 'NotAvailable' | 'Succeeded' | 'Updating' (ReadOnly): State of the trace proxy. Possible values include: 'NotAvailable', 'Failed', 'Succeeded', 'Updating'

## Sku
### Properties
* **capacity**: int: Current capacity of the target resource
* **name**: string: Name of the Sku
* **tier**: string: Tier of the Sku

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedIdentityProperties
### Properties
* **principalId**: string:
* **tenantId**: string:
* **type**: 'None' | 'SystemAssigned,UserAssigned' | 'SystemAssigned' | 'UserAssigned': Possible values include: 'None', 'SystemAssigned', 'UserAssigned', 'SystemAssigned,UserAssigned'

## AppResourceProperties
### Properties
* **activeDeploymentName**: string: Name of the active deployment of the App
* **createdTime**: string (ReadOnly): Date time when the resource is created
* **fqdn**: string: Fully qualified dns Name.
* **httpsOnly**: bool: Indicate if only https is allowed.
* **persistentDisk**: [PersistentDisk](#persistentdisk): Persistent disk payload
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the App. Possible values include: 'Succeeded', 'Failed', 'Creating', 'Updating', 'Deleting'
* **public**: bool: Indicates whether the App exposes public endpoint
* **temporaryDisk**: [TemporaryDisk](#temporarydisk): Temporary disk payload
* **url**: string (ReadOnly): URL of the App

## PersistentDisk
### Properties
* **mountPath**: string: Mount path of the persistent disk
* **sizeInGB**: int: Size of the persistent disk in GB
* **usedInGB**: int (ReadOnly): Size of the used persistent disk in GB

## TemporaryDisk
### Properties
* **mountPath**: string: Mount path of the temporary disk
* **sizeInGB**: int: Size of the temporary disk in GB

## BindingResourceProperties
### Properties
* **bindingParameters**: [Dictionary<string,Object>](#dictionarystringobject): Binding parameters of the Binding resource
* **createdAt**: string (ReadOnly): Creation time of the Binding resource
* **generatedProperties**: string (ReadOnly): The generated Spring Boot property file for this binding. The secret will be deducted.
* **key**: string: The key of the bound resource
* **resourceId**: string: The Azure resource id of the bound resource
* **resourceName**: string (ReadOnly): The name of the bound resource
* **resourceType**: string (ReadOnly): The standard Azure resource type of the bound resource
* **updatedAt**: string (ReadOnly): Update time of the Binding resource

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DeploymentResourceProperties
### Properties
* **active**: bool (ReadOnly): Indicates whether the Deployment is active
* **appName**: string (ReadOnly): App name of the deployment
* **createdTime**: string (ReadOnly): Date time when the resource is created
* **deploymentSettings**: [DeploymentSettings](#deploymentsettings): Deployment settings payload
* **instances**: [DeploymentInstance](#deploymentinstance)[] (ReadOnly): Collection of instances belong to the Deployment
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the Deployment. Possible values include: 'Creating', 'Updating', 'Succeeded', 'Failed', 'Deleting'
* **source**: [UserSourceInfo](#usersourceinfo): Source information for a deployment
* **status**: 'Allocating' | 'Compiling' | 'Failed' | 'Running' | 'Stopped' | 'Unknown' | 'Upgrading' (ReadOnly): Status of the Deployment. Possible values include: 'Unknown', 'Stopped', 'Running', 'Failed', 'Allocating', 'Upgrading', 'Compiling'

## DeploymentSettings
### Properties
* **cpu**: int: Required CPU, basic tier should be 1, standard tier should be in range (1, 4)
* **environmentVariables**: [Dictionary<string,String>](#dictionarystringstring): Collection of environment variables
* **instanceCount**: int: Instance count, basic tier should be in range (1, 25), standard tier should be in range (1, 500)
* **jvmOptions**: string: JVM parameter
* **memoryInGB**: int: Required Memory size in GB, basic tier should be in range (1, 2), standard tier should be in range (1, 8)
* **netCoreMainEntryPath**: string: The path to the .NET executable relative to zip root
* **runtimeVersion**: 'Java_11' | 'Java_8' | 'NetCore_31': Runtime version. Possible values include: 'Java_8', 'Java_11', 'NetCore_31'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeploymentInstance
### Properties
* **discoveryStatus**: string (ReadOnly): Discovery status of the deployment instance
* **name**: string (ReadOnly): Name of the deployment instance
* **reason**: string (ReadOnly): Failed reason of the deployment instance
* **startTime**: string (ReadOnly): Start time of the deployment instance
* **status**: string (ReadOnly): Status of the deployment instance

## UserSourceInfo
### Properties
* **artifactSelector**: string: Selector for the artifact to be used for the deployment for multi-module projects. This should be
the relative path to the target module/project.
* **relativePath**: string: Relative path of the storage which stores the source
* **type**: 'Jar' | 'NetCoreZip' | 'Source': Type of the source uploaded. Possible values include: 'Jar', 'NetCoreZip', 'Source'
* **version**: string: Version of the source

## CustomDomainProperties
### Properties
* **appName**: string (ReadOnly): The app name of domain.
* **certName**: string: The bound certificate name of domain.
* **thumbprint**: string: The thumbprint of bound certificate.

## CertificateProperties
### Properties
* **activateDate**: string (ReadOnly): The activate date of certificate.
* **certVersion**: string: The certificate version of key vault.
* **dnsNames**: string[] (ReadOnly): The domain list of certificate.
* **expirationDate**: string (ReadOnly): The expiration date of certificate.
* **issuedDate**: string (ReadOnly): The issue date of certificate.
* **issuer**: string (ReadOnly): The issuer of certificate.
* **keyVaultCertName**: string (Required): The certificate name of key vault.
* **subjectName**: string (ReadOnly): The subject name of certificate.
* **thumbprint**: string (ReadOnly): The thumbprint of certificate.
* **vaultUri**: string (Required): The vault uri of user key vault.

