# Microsoft.Migrate @ 2022-05-01-preview

## Resource Microsoft.Migrate/modernizeProjects@2022-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity)
* **location**: string: Gets or sets the location of the modernizeProject.
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ModernizeProjectModelProperties](#modernizeprojectmodelproperties): ModernizeProject properties.
* **systemData**: [ModernizeProjectModelSystemData](#modernizeprojectmodelsystemdata) (ReadOnly)
* **tags**: [ModernizeProjectModelTags](#modernizeprojectmodeltags): Gets or sets the resource tags.
* **type**: 'Microsoft.Migrate/modernizeProjects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/modernizeProjects/deployedResources@2022-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DeployedResourceModelProperties](#deployedresourcemodelproperties) (ReadOnly): DeployedResource properties.
* **systemData**: [DeployedResourceModelSystemData](#deployedresourcemodelsystemdata) (ReadOnly)
* **tags**: [DeployedResourceModelTags](#deployedresourcemodeltags) (ReadOnly): Gets or sets the resource tags.
* **type**: 'Microsoft.Migrate/modernizeProjects/deployedResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/modernizeProjects/jobs@2022-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowModelProperties](#workflowmodelproperties) (ReadOnly): Workflow model properties.
* **systemData**: [WorkflowModelSystemData](#workflowmodelsystemdata) (ReadOnly)
* **tags**: [WorkflowModelTags](#workflowmodeltags) (ReadOnly): Gets or sets the resource tags.
* **type**: 'Microsoft.Migrate/modernizeProjects/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/modernizeProjects/migrateAgents@2022-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MigrateAgentModelProperties](#migrateagentmodelproperties): MigrateAgent model properties.
* **systemData**: [MigrateAgentModelSystemData](#migrateagentmodelsystemdata) (ReadOnly)
* **tags**: [MigrateAgentModelTags](#migrateagentmodeltags): Gets or sets the resource tags.
* **type**: 'Microsoft.Migrate/modernizeProjects/migrateAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/modernizeProjects/workloadDeployments@2022-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadDeploymentModelProperties](#workloaddeploymentmodelproperties): Workload deployment model properties.
* **systemData**: [WorkloadDeploymentModelSystemData](#workloaddeploymentmodelsystemdata) (ReadOnly)
* **tags**: [WorkloadDeploymentModelTags](#workloaddeploymentmodeltags): Gets or sets the resource tags.
* **type**: 'Microsoft.Migrate/modernizeProjects/workloadDeployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/modernizeProjects/workloadInstances@2022-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadInstanceModelProperties](#workloadinstancemodelproperties): Workload instance model properties.
* **systemData**: [WorkloadInstanceModelSystemData](#workloadinstancemodelsystemdata) (ReadOnly)
* **tags**: [WorkloadInstanceModelTags](#workloadinstancemodeltags): Gets or sets the resource tags.
* **type**: 'Microsoft.Migrate/modernizeProjects/workloadInstances' (ReadOnly, DeployTimeConstant): The resource type

## ACRProperties
### Properties
* **registryName**: string: Gets or sets the azure container registry name.
* **resourceGroup**: string: Gets or sets the resource group of the resource.
* **subscriptionId**: string: Gets or sets the subscription id of the resource.
* **tenantId**: string: Gets or sets the tenant id.

## AKSDeploymentProperties
### Properties
* **aksClusterName**: string: Gets or sets the AKS cluster name.
* **resourceGroup**: string: Gets or sets the resource group of the resource.
* **subscriptionId**: string: Gets or sets the subscription id of the resource.
* **tenantId**: string: Gets or sets the tenant id.

## AKSDeploymentSpecification
### Properties
* **kubernetesObjectsYaml**: string: Gets or sets the Merged Deployment and service Yaml.
* **loadBalancerType**: 'Private' | 'Public' | string: Gets or sets the load balancer type.
* **replicaCount**: string: Gets or sets the replica count to be created in AKS.

## ApacheTomcatAKSWorkloadDeployment
### Properties
* **automationArtifactProperties**: [AutomationArtifact](#automationartifact): Class for automation artifact.
* **bindings**: [Binding](#binding)[]: Gets or sets the bindings for the application.
* **buildContainerImages**: [ContainerImageProperties](#containerimageproperties)[]: Gets or sets the build container images.
* **clusterProperties**: [AKSDeploymentProperties](#aksdeploymentproperties): Class for AKSDeployment Properties.
* **configurations**: [WebApplicationConfiguration](#webapplicationconfiguration)[]: Gets or sets application configuration.
* **containerImageProperties**: [ContainerImageProperties](#containerimageproperties): Class for container image properties.
* **deploymentHistory**: [DeployedResourcesProperties](#deployedresourcesproperties)[] (ReadOnly): Gets or sets the deployment history.
* **deploymentNamePrefix**: string: Gets or sets the deployment name prefix.
* **deploymentSpec**: [AKSDeploymentSpecification](#aksdeploymentspecification): AKS Deployment Specification.
* **directories**: [WebApplicationDirectory](#webapplicationdirectory)[]: Gets or sets application directories.
* **limits**: [ResourceRequirements](#resourcerequirements): Resource Requirements.
* **monitoringProperties**: [AppInsightMonitoringProperties](#appinsightmonitoringproperties): Class for app insight monitoring properties.
* **requests**: [ResourceRequirements](#resourcerequirements): Resource Requirements.
* **targetPlatformIdentity**: string: Gets or sets the target platform managed identity.

## ApacheTomcatWebApplication
### Properties
* **applicationId**: string: Gets or sets the web application id.
* **applicationName**: string: Gets or sets the web application name.
* **applicationScratchPath**: string: Gets or sets application scratch path.
* **bindings**: [Binding](#binding)[]: Gets or sets the bindings for the application.
* **configurations**: [WebApplicationConfiguration](#webapplicationconfiguration)[]: Gets or sets application configuration.
* **directories**: [WebApplicationDirectory](#webapplicationdirectory)[]: Gets or sets application directories.
* **discoveredFrameworks**: [WebApplicationFramework](#webapplicationframework)[]: Gets or sets the discovered frameworks of application.
* **displayName**: string: Gets or sets the display name.
* **limits**: [ResourceRequirements](#resourcerequirements): Resource Requirements.
* **path**: [DirectoryPath](#directorypath): Second level entity for virtual directories.
* **primaryFramework**: [WebApplicationFramework](#webapplicationframework): Framework specific data for a web application.
* **requests**: [ResourceRequirements](#resourcerequirements): Resource Requirements.
* **webServerId**: string: Gets or sets the web server id.
* **webServerName**: string: Gets or sets the web server name.

## AppInsightMonitoringProperties
### Properties
* **appInsightsName**: string: Gets or sets the app insights name.
* **isEnabled**: bool: Gets or sets a value indicating whether monitoring is enabled.
* **region**: string: Gets or sets the region.
* **resourceGroup**: string: Gets or sets the resource group of the resource.
* **secretStoreDetails**: [SecretStoreDetails](#secretstoredetails)
* **subscriptionId**: string: Gets or sets the subscription id of the resource.

## AutomationArtifact
### Properties
* **artifacts**: [AutomationArtifactArtifacts](#automationartifactartifacts): Gets or sets the artifacts.
* **azureFileShareProfile**: [AzureFileShareHydrationProfile](#azurefilesharehydrationprofile): Azure file share profile for hydration of application folders not mounted on
the container file system.
* **status**: 'Generated' | 'NotGenerated' | string: Gets or sets the status of automation artifacts.

## AutomationArtifactArtifacts
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureFileShareHydrationProfile
### Properties
* **azureFileShareDirPath**: string: Gets or sets the cloud directory path of the directory on azure file share.
* **azureFileShareName**: string: Gets or sets the name of the azure file share.
* **azureFileShareResourceGroup**: string: Gets or sets the name of the azure file share resource group.
* **azureFileShareStorageAccount**: string: Gets or sets the name of the azure file share storage account.
* **azureFileShareSubscriptionId**: string: Gets or sets the subscription id of the azure file share.

## Binding
### Properties
* **cert**: [Cert](#cert): WebApplication certificate.
* **hostName**: string: Gets or sets the binding host name.
* **id**: string (ReadOnly): Gets the ID.
* **ipAddress**: string: Gets or sets the IP Address.
* **port**: string: Gets or sets the application port.
* **portMapping**: [PortMapping](#portmapping): WebApplication port mapping.
* **protocol**: string: Gets or sets the protocol.

## BuildContainerImageWorkflowModelCustomPropertiesContainerImageProperties
### Properties
* **dockerfile**: string: Gets or sets the dockerfile for the container image.
* **id**: string (ReadOnly): Gets the ID.
* **imageName**: string: Gets or sets the container image name.
* **imageTag**: string: Gets or sets the container image tag.
* **registryProperties**: [ACRProperties](#acrproperties): Class for ACR Properties.
* **runId**: string: Gets or sets the RunId.
* **runStatus**: string: Gets or sets the RunStatus.

## Cert
### Properties
* **certData**: any: Gets or sets the Certificate data.
* **certNeeded**: bool: Gets or sets a value indicating whether certificate is needed or not.
* **certProvided**: bool: Gets or sets a value indicating whether certificate is provided or not.
* **secretStore**: 'AppServiceAppSettings' | 'KeyVaultSecret' | 'KubeSecret' | 'None' | string: Gets or sets the type of secret store for the certificate.

## ContainerImageProperties
### Properties
* **dockerfile**: string: Gets or sets the dockerfile for the container image.
* **id**: string (ReadOnly): Gets the ID.
* **imageName**: string: Gets or sets the container image name.
* **imageTag**: string: Gets or sets the container image tag.
* **registryProperties**: [ACRProperties](#acrproperties): Class for ACR Properties.
* **runId**: string: Gets or sets the RunId.
* **runStatus**: string: Gets or sets the RunStatus.

## DeployedResourceModelProperties
### Properties
* **appIp**: string (ReadOnly): Gets or sets the app ip address.
* **containerRegistryId**: string (ReadOnly): Gets or sets the container registry ARM Id.
* **customProperties**: [DeployedResourceModelPropertiesCustomProperties](#deployedresourcemodelpropertiescustomproperties): Gets or sets the custom deployed resource properties.
* **deploymentTimestamp**: string (ReadOnly): Gets or sets the deployment timestamp.
* **displayName**: string (ReadOnly): Gets or sets the name of deployed resources.
* **imageName**: string (ReadOnly): Gets or sets the image name.
* **imageTag**: string (ReadOnly): Gets or sets the image tag.
* **resourcesDeployed**: [DeployedResourceModelPropertiesResourcesDeployed](#deployedresourcemodelpropertiesresourcesdeployed): Gets or sets the list of resources deployed.
* **secretStoreId**: string: Gets or sets the secret store ARM Id.
* **targetAzureService**: 'AzureAppServiceContainer' | 'AzureAppServiceNative' | 'AzureKubernetesService' | string (ReadOnly): Gets or sets the deployment target service.
* **workloadDeploymentId**: string (ReadOnly): Gets or sets the workload deployment id.

## DeployedResourceModelPropertiesCustomProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeployedResourceModelPropertiesResourcesDeployed
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeployedResourceModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## DeployedResourceModelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeployedResourcesProperties
### Properties
* **context**: string (ReadOnly): Gets or sets the context of deployed resources.
* **deployedResourceId**: string (ReadOnly): Gets or sets the deployed resource id.
* **deploymentTimestamp**: string (ReadOnly): Gets or sets the deployment timestamp.
* **displayName**: string (ReadOnly): Gets or sets the name of deployed resources.
* **id**: string (ReadOnly): Gets or sets the ID.
* **isCleanUpDone**: bool (ReadOnly): Gets or sets a value indicating whether resources are cleaned up from target.
* **isTestMigration**: bool (ReadOnly): Gets or sets a value indicating whether scenario is test migration.
* **status**: string (ReadOnly): Gets or sets the status of deployed resources.
* **type**: string (ReadOnly): Gets or sets the type of deployed resources.

## DirectoryPath
### Properties
* **id**: string (ReadOnly): Gets the ID.
* **physical**: string: Gets or sets the physical path of the directory on the web server.
* **virtual**: string: Gets or sets the virtual path for the directory.

## EnableReplicationWorkflowModelCustomPropertiesWorkloadInstanceProperties
### Properties
* **allowedOperations**: string[] (ReadOnly): Gets or sets the allowed scenarios on the workload instance.
* **currentJob**: [WorkloadInstanceModelPropertiesCurrentJob](#workloadinstancemodelpropertiescurrentjob) (ReadOnly)
* **customProperties**: [WorkloadInstanceModelCustomProperties](#workloadinstancemodelcustomproperties): Workload instance model custom properties.
* **displayName**: string: Gets or sets the display name.
* **healthErrors**: [HealthErrorModel](#healtherrormodel)[] (ReadOnly): Gets or sets the list of health errors.
* **lastSuccessfulReplicationCycleTime**: string (ReadOnly): Gets or sets the Last successful replication cycle time.
* **masterSiteName**: string: Gets or Sets the master site name.
* **migrateAgentId**: string: Gets or sets the migrate agent id associated with the workload instance.
* **name**: string: Gets or sets the workload instance name.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the workload instance.
* **replicationHealth**: 'Critical' | 'Normal' | 'Warning' | string (ReadOnly): Gets or sets the replication health of the workload instance.
* **replicationStatus**: 'Completed' | 'Failed' | 'InitialSync' | 'None' | 'Scheduled' | string (ReadOnly): Gets or sets the replication state of the workload instance.
* **replicationStatusDescription**: string (ReadOnly): Gets or sets the workload replication state description.
* **sourceName**: string: Gets or sets the source name.
* **sourcePlatform**: string: Gets or sets the source platform.

## ErrorModel
### Properties
* **causes**: string (ReadOnly): Gets or sets the possible causes of error.
* **code**: string (ReadOnly): Gets or sets the error code.
* **creationTime**: string (ReadOnly): Gets or sets the creation time of error.
* **id**: string (ReadOnly): Gets the ID.
* **message**: string (ReadOnly): Gets or sets the error message.
* **recommendation**: string (ReadOnly): Gets or sets the recommended action to resolve error.
* **severity**: string (ReadOnly): Gets or sets the error severity.
* **type**: string (ReadOnly): Gets or sets the error type.

## GmsaAuthenticationProperties
### Properties
* **adDomainControllerDns**: string: Gets or sets the list of dns server that can resolve the Active Directory Domain Name/Address.
* **adDomainFqdn**: string: Gets or sets the FQDN of the Active Directory Domain. For e.g. 'contoso.local', 'fareast.corp.microsoft.com' etc.
* **akvProperties**: [KeyVaultSecretStoreProperties](#keyvaultsecretstoreproperties)
* **configurationState**: 'Completed' | 'Failed' | 'InProgress' | 'NotApplicable' | 'Pending' | string (ReadOnly): Gets or sets the current state of GMSA configuration.
* **domainAdminPassword**: string: Gets or sets the password of the user specified by RestApi.Controllers.V2022_05_01_preview.Models.WorkloadDeployment.Gmsa.GmsaAuthenticationProperties.DomainAdminUsername.
* **domainAdminUsername**: string: Gets or sets the name of the user having admin rights on the Active Directory Domain Controller.
* **domainControllerAddress**: string: Gets or sets the address of the Active Directory Domain Controller running Domain Services.
* **gmsaAccountName**: string: Gets or sets the name to be used for GMSA.
* **gmsaCredSpecName**: string (ReadOnly): Gets Cred Spec Name to be used.
* **gmsaSecretName**: string (ReadOnly): Gets name of the secret where GMSA secret is stored in the KeyVault.
* **gmsaUsername**: string: Gets or sets username of the user having authorization to access GMSA on Active Directory.
* **gmsaUserPassword**: string: Gets or sets the password of the user specified by RestApi.Controllers.V2022_05_01_preview.Models.WorkloadDeployment.Gmsa.GmsaAuthenticationProperties.GmsaUsername.

## HealthErrorModel
### Properties
* **affectedResourceCorrelationIds**: string[]: Gets or sets the list of affected resource correlation Ids. This can be used to
uniquely identify the count of items affected by a specific category and severity
as well as count of item affected by an specific issue.
* **affectedResourceType**: string: Gets or sets the type of affected resource type.
* **category**: string (ReadOnly): Gets or sets the error category.
* **causes**: string (ReadOnly): Gets or sets possible causes of the error.
* **childErrors**: [InnerHealthErrorModel](#innerhealtherrormodel)[]: Gets or sets a list of child health errors associated with this error.
* **code**: string (ReadOnly): Gets or sets the error code.
* **creationTime**: string (ReadOnly): Gets or sets the error creation time.
* **healthCategory**: string (ReadOnly): Gets or sets the health category.
* **id**: string (ReadOnly): Gets the ID.
* **isCustomerResolvable**: bool (ReadOnly): Gets or sets a value indicating whether the error is customer resolvable.
* **message**: string (ReadOnly): Gets or sets the error message.
* **recommendation**: string (ReadOnly): Gets or sets recommended action to resolve the error.
* **severity**: string (ReadOnly): Gets or sets the error severity.
* **source**: string (ReadOnly): Gets or sets the error source.
* **summary**: string (ReadOnly): Gets or sets the error summary.

## IdentityModel
### Properties
* **aadAuthority**: string: Gets or sets the authority of the SPN with which MigrateAgent communicates to service.
* **applicationId**: string: Gets or sets the client/application Id of the SPN with which MigrateAgent communicates to
service.
* **audience**: string: Gets or sets the audience of the SPN with which MigrateAgent communicates to service.
* **objectId**: string: Gets or sets the object Id of the SPN with which MigrateAgent communicates to service.
* **tenantId**: string: Gets or sets the tenant Id of the SPN with which MigrateAgent communicates to service.

## IisaksWorkloadDeployment
### Properties
* **authenticationProperties**: [GmsaAuthenticationProperties](#gmsaauthenticationproperties): Class for GMSA authentication details to configure Active Directory connectivity.
* **automationArtifactProperties**: [AutomationArtifact](#automationartifact): Class for automation artifact.
* **bindings**: [Binding](#binding)[]: Gets or sets the bindings for the application.
* **buildContainerImages**: [ContainerImageProperties](#containerimageproperties)[]: Gets or sets the build container images.
* **clusterProperties**: [AKSDeploymentProperties](#aksdeploymentproperties): Class for AKSDeployment Properties.
* **configurations**: [WebApplicationConfiguration](#webapplicationconfiguration)[]: Gets or sets application configuration.
* **containerImageProperties**: [ContainerImageProperties](#containerimageproperties): Class for container image properties.
* **deploymentHistory**: [DeployedResourcesProperties](#deployedresourcesproperties)[] (ReadOnly): Gets or sets the deployment history.
* **deploymentNamePrefix**: string: Gets or sets the deployment name prefix.
* **deploymentSpec**: [AKSDeploymentSpecification](#aksdeploymentspecification): AKS Deployment Specification.
* **directories**: [WebApplicationDirectory](#webapplicationdirectory)[]: Gets or sets application directories.
* **limits**: [ResourceRequirements](#resourcerequirements): Resource Requirements.
* **monitoringProperties**: [AppInsightMonitoringProperties](#appinsightmonitoringproperties): Class for app insight monitoring properties.
* **requests**: [ResourceRequirements](#resourcerequirements): Resource Requirements.
* **targetPlatformIdentity**: string: Gets or sets the target platform managed identity.

## IISApplicationDetails
### Properties
* **applicationPoolName**: string: Gets or sets the application pool name.
* **directories**: [DirectoryPath](#directorypath)[]: Gets or sets the list of directories.
* **enable32BitApiOnWin64**: bool: Gets or sets a value indicating whether 32 bit applications are allowed to run on 64 bit.
* **id**: string (ReadOnly): Gets the ID.
* **managedPipelineMode**: string: Gets or sets the managed pipeline mode.
* **path**: [DirectoryPath](#directorypath): Second level entity for virtual directories.
* **runtimeVersion**: string: Gets or sets the runtime version.

## IISVirtualApplicationDetails
### Properties
* **directories**: [DirectoryPath](#directorypath)[]: Gets or sets the list of directories.
* **id**: string (ReadOnly): Gets the ID.
* **isVirtualDirectory**: bool (ReadOnly): Gets a value indicating whether the application corresponds to a directory.
* **path**: [DirectoryPath](#directorypath): Second level entity for virtual directories.

## IISWebApplication
### Properties
* **applicationId**: string: Gets or sets the web application id.
* **applicationName**: string: Gets or sets the web application name.
* **applications**: [IISApplicationDetails](#iisapplicationdetails)[]: Gets or sets the list of applications for the IIS web site.
* **applicationScratchPath**: string: Gets or sets application scratch path.
* **bindings**: [Binding](#binding)[]: Gets or sets the bindings for the application.
* **configurations**: [WebApplicationConfiguration](#webapplicationconfiguration)[]: Gets or sets application configuration.
* **directories**: [WebApplicationDirectory](#webapplicationdirectory)[]: Gets or sets application directories.
* **discoveredFrameworks**: [WebApplicationFramework](#webapplicationframework)[]: Gets or sets the discovered frameworks of application.
* **displayName**: string: Gets or sets the display name.
* **iisWebServer**: [IISWebServer](#iiswebserver): IISWeb server.
* **limits**: [ResourceRequirements](#resourcerequirements): Resource Requirements.
* **path**: [DirectoryPath](#directorypath): Second level entity for virtual directories.
* **primaryFramework**: [WebApplicationFramework](#webapplicationframework): Framework specific data for a web application.
* **requests**: [ResourceRequirements](#resourcerequirements): Resource Requirements.
* **virtualApplications**: [IISVirtualApplicationDetails](#iisvirtualapplicationdetails)[]: Gets or sets the list of application units for the web site.
* **webServerId**: string: Gets or sets the web server id.
* **webServerName**: string: Gets or sets the web server name.

## IISWebServer
### Properties
* **displayName**: string: Gets or sets the display name.
* **ipAddresses**: string[]: Gets or sets list of ip addresses.
* **machines**: string[]: Gets or sets the list of machines.
* **operatingSystemDetails**: [OperatingSystemDetails](#operatingsystemdetails)
* **rootConfigurationLocation**: string: Gets or sets the server root configuration location.
* **runAsAccountId**: string: Gets or sets the run as account id.
* **serverFqdn**: string: Gets or sets the server FQDN.
* **serverId**: string: Gets or sets the web server id.
* **serverName**: string: Gets or sets the web server name.
* **version**: string: Gets or sets the server version.
* **webApplications**: string[]: Gets or sets the list of web applications.

## InnerHealthErrorModel
### Properties
* **category**: string (ReadOnly): Gets or sets the error category.
* **causes**: string (ReadOnly): Gets or sets possible causes of the error.
* **code**: string (ReadOnly): Gets or sets the error code.
* **creationTime**: string (ReadOnly): Gets or sets the error creation time.
* **healthCategory**: string (ReadOnly): Gets or sets the health category.
* **id**: string (ReadOnly): Gets the ID.
* **isCustomerResolvable**: bool (ReadOnly): Gets or sets a value indicating whether the error is customer resolvable.
* **message**: string (ReadOnly): Gets or sets the error message.
* **recommendation**: string (ReadOnly): Gets or sets recommended action to resolve the error.
* **severity**: string (ReadOnly): Gets or sets the error severity.
* **source**: string (ReadOnly): Gets or sets the error source.
* **summary**: string (ReadOnly): Gets or sets the error summary.

## KeyVaultSecretStoreProperties
### Properties
* **inputType**: string (ReadOnly)
* **keyvaultName**: string
* **managedIdentityProperties**: [ManagedIdentityProperties](#managedidentityproperties)
* **resourceGroup**: string
* **secretStoreId**: string
* **subscriptionId**: string
* **tenantId**: string

## ManagedIdentityProperties
### Properties
* **clientId**: string
* **managedIdentityName**: string
* **principalId**: string
* **resourceGroup**: string
* **subscriptionId**: string
* **tenantId**: string

## MigrateAgentModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### VMwareMigrateAgentModelCustomProperties
#### Properties
* **fabricFriendlyName**: string: Gets or sets the friendly name of the,of the MigrateAgent fabric.
* **instanceType**: 'VMwareMigrateAgentModelCustomProperties' (Required): Gets or sets the instance type.
* **vmwareSiteId**: string: Gets or sets the master Site Id of the Migrate Agent.


## MigrateAgentModelProperties
### Properties
* **authenticationIdentity**: [IdentityModel](#identitymodel): Identity model.
* **correlationId**: string (ReadOnly): Gets or sets the MigrateAgent correlation Id.
* **customProperties**: [MigrateAgentModelCustomProperties](#migrateagentmodelcustomproperties): MigrateAgent model custom properties.
* **healthErrors**: [HealthErrorModel](#healtherrormodel)[] (ReadOnly): Gets or sets the list of health errors.
* **isResponsive**: bool (ReadOnly): Gets or sets a value indicating whether MigrateAgent is responsive.
* **lastHeartbeat**: string (ReadOnly): Gets or sets the time when last heartbeat was sent by the MigrateAgent.
* **machineId**: string: Gets or sets the machine Id where MigrateAgent is running.
* **machineName**: string: Gets or sets the machine name where MigrateAgent is running.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the MigrateAgent.
* **versionNumber**: string (ReadOnly): Gets or sets the MigrateAgent version.

## MigrateAgentModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## MigrateAgentModelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MigrateWorkflowModelCustomPropertiesDeployedResourcesProperties
### Properties
* **context**: string (ReadOnly): Gets or sets the context of deployed resources.
* **deployedResourceId**: string (ReadOnly): Gets or sets the deployed resource id.
* **deploymentTimestamp**: string (ReadOnly): Gets or sets the deployment timestamp.
* **displayName**: string (ReadOnly): Gets or sets the name of deployed resources.
* **id**: string (ReadOnly): Gets or sets the ID.
* **isCleanUpDone**: bool (ReadOnly): Gets or sets a value indicating whether resources are cleaned up from target.
* **isTestMigration**: bool (ReadOnly): Gets or sets a value indicating whether scenario is test migration.
* **status**: string (ReadOnly): Gets or sets the status of deployed resources.
* **type**: string (ReadOnly): Gets or sets the type of deployed resources.

## MigrationConfiguration
### Properties
* **keyVaultResourceId**: string: Gets or sets the key vault resource Id.
* **migrationSolutionResourceId**: string: Gets or sets the migration solution resource Id.
* **storageAccountResourceId**: string: Gets or sets the storage account resource Id.

## ModernizeProjectModelProperties
### Properties
* **migrationConfiguration**: [MigrationConfiguration](#migrationconfiguration): MigrationConfiguration properties.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the ModernizeProject.
* **serviceEndpoint**: string (ReadOnly): Gets or sets the service endpoint.
* **serviceResourceId**: string (ReadOnly): Gets or sets the service resource Id.

## ModernizeProjectModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## ModernizeProjectModelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OperatingSystemDetails
### Properties
* **os**: 'Linux' | 'Windows' | string
* **osArchitecture**: string
* **osName**: string
* **osVersion**: string

## PortMapping
### Properties
* **externalPort**: int: Gets or sets the External Port.
* **internalPort**: int: Gets or sets the Internal Port.

## ResourceIdentity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' | string
* **userAssignedIdentities**: [ResourceIdentityUserAssignedIdentities](#resourceidentityuserassignedidentities): Dictionary of <UserAssignedIdentity>

## ResourceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## ResourceRequirements
### Properties
* **cpu**: string: Gets or sets the Cpu requirement.
* **memory**: string: Gets or sets the Memory requirement.

## SecretStoreDetails
### Properties
* **secretStore**: 'AppServiceAppSettings' | 'KeyVaultSecret' | 'KubeSecret' | 'None' | string: Gets or sets the type of secret store for the certificate.
* **secretStoreProperties**: [SecretStoreProperties](#secretstoreproperties)

## SecretStoreProperties
### Properties
* **inputType**: string (ReadOnly)
* **secretStoreId**: string

## TargetStorageProfile
### Properties
* **azureFileShareProfile**: [AzureFileShareHydrationProfile](#azurefilesharehydrationprofile): Azure file share profile for hydration of application folders not mounted on
the container file system.
* **hydrationStorageProviderType**: 'AzureFileShare' | string: Gets or sets the storage provider type on the target.
Applicable when StorageProjectionType is not ContainerFileSystem.
* **persistentVolumeId**: string: Gets or sets the target persistent volume id.
Applicable when StorageProjectionType is PersistentVolume and on using an
existing PersistentVolume.
* **storageAccessType**: 'Exclusive' | 'Shared' | string: Gets or sets the target storage access type.
* **storageProjectionType**: 'ContainerFileSystem' | 'PersistentVolume' | string: Gets or sets the target projection type.
* **targetName**: string: Gets or sets the name of the projected volume on the target environment.
* **targetSize**: string: Gets or sets the storage size on the target.
Applicable when StorageProjectionType is PersistentVolume and on creating a new
PersistentVolume.

## TaskModel
### Properties
* **customProperties**: [TaskModelCustomProperties](#taskmodelcustomproperties): Task model custom properties.
* **endTime**: string (ReadOnly): Gets or sets the end time.
* **id**: string (ReadOnly): Gets the ID.
* **startTime**: string (ReadOnly): Gets or sets the start time.
* **state**: 'Cancelled' | 'Failed' | 'Pending' | 'Skipped' | 'Started' | 'Succeeded' | string (ReadOnly): Gets or sets the task state.
* **taskName**: string (ReadOnly): Gets or sets the task name.

## TaskModelCustomProperties
### Properties
* **instanceType**: string: Gets or sets the instance type.

## TestMigrateWorkflowModelCustomPropertiesDeployedResourcesProperties
### Properties
* **context**: string (ReadOnly): Gets or sets the context of deployed resources.
* **deployedResourceId**: string (ReadOnly): Gets or sets the deployed resource id.
* **deploymentTimestamp**: string (ReadOnly): Gets or sets the deployment timestamp.
* **displayName**: string (ReadOnly): Gets or sets the name of deployed resources.
* **id**: string (ReadOnly): Gets or sets the ID.
* **isCleanUpDone**: bool (ReadOnly): Gets or sets a value indicating whether resources are cleaned up from target.
* **isTestMigration**: bool (ReadOnly): Gets or sets a value indicating whether scenario is test migration.
* **status**: string (ReadOnly): Gets or sets the status of deployed resources.
* **type**: string (ReadOnly): Gets or sets the type of deployed resources.

## UserAssignedIdentity
### Properties
* **clientId**: string
* **principalId**: string

## WebApplicationConfiguration
### Properties
* **filePath**: string: Gets or sets the configuration file path.
* **id**: string (ReadOnly): Gets the ID.
* **identifier**: string: Gets or sets the identifier for the configuration.
* **isDeploymentTimeEditable**: bool: Gets or sets a value indicating whether the configuration is edited or not by the user.
* **localFilePath**: string: Gets or sets the configuration local file path.
* **name**: string: Gets or sets the configuration name.
* **secretStoreDetails**: [SecretStoreDetails](#secretstoredetails)
* **section**: string: Gets or sets the configuration section in the file.
* **targetFilePath**: string: Gets or sets the configuration target file path.
* **type**: 'ApacheTomcatContextResource' | 'IISAuthentication' | 'IISConnectionString' | string: Gets or sets the configuration type.
* **value**: string: Gets or sets the configuration value.

## WebApplicationDirectory
### Properties
* **id**: string (ReadOnly): Gets the unique id corresponding to the application directory.
* **isEditable**: bool: Gets or sets a value indicating whether the directory object is editable.
True when the directory is added as an optional directory, false when discovery is done
manually.
* **sourcePaths**: string[]: Gets or sets the paths of the directory on the source machine.
* **sourceSize**: string: Gets or sets the size of the directory on the source machine.
* **storageProfile**: [TargetStorageProfile](#targetstorageprofile): Storage profile for the directory on the target container.

## WebApplicationFramework
### Properties
* **id**: string (ReadOnly): Gets the ID.
* **name**: string: Gets or sets Name of the framework.
* **version**: string: Gets or sets Version of the framework.

## WorkflowModelCustomProperties
* **Discriminator**: instanceType

### Base Properties
* **affectedObjectDetails**: [WorkflowModelCustomPropertiesAffectedObjectDetails](#workflowmodelcustompropertiesaffectedobjectdetails) (ReadOnly): Gets or sets any custom properties of the affected object.

### BuildContainerImageWorkflowModelCustomProperties
#### Properties
* **containerImageProperties**: [BuildContainerImageWorkflowModelCustomPropertiesContainerImageProperties](#buildcontainerimageworkflowmodelcustompropertiescontainerimageproperties) (ReadOnly)
* **instanceType**: 'BuildContainerImageWorkflowModelCustomProperties' (Required): Gets or sets the instance type.

### EnableReplicationWorkflowModelCustomProperties
#### Properties
* **instanceType**: 'EnableReplicationWorkflowModelCustomProperties' (Required): Gets or sets the instance type.
* **workloadInstanceProperties**: [EnableReplicationWorkflowModelCustomPropertiesWorkloadInstanceProperties](#enablereplicationworkflowmodelcustompropertiesworkloadinstanceproperties) (ReadOnly)

### MigrateWorkflowModelCustomProperties
#### Properties
* **deployedResourcesProperties**: [MigrateWorkflowModelCustomPropertiesDeployedResourcesProperties](#migrateworkflowmodelcustompropertiesdeployedresourcesproperties) (ReadOnly)
* **instanceType**: 'MigrateWorkflowModelCustomProperties' (Required): Gets or sets the instance type.

### TestMigrateCleanupWorkflowModelCustomProperties
#### Properties
* **comments**: string (ReadOnly): Gets or sets the test migrate cleanup comments.
* **instanceType**: 'TestMigrateCleanupWorkflowModelCustomProperties' (Required): Gets or sets the instance type.

### TestMigrateWorkflowModelCustomProperties
#### Properties
* **deployedResourcesProperties**: [TestMigrateWorkflowModelCustomPropertiesDeployedResourcesProperties](#testmigrateworkflowmodelcustompropertiesdeployedresourcesproperties) (ReadOnly)
* **instanceType**: 'TestMigrateWorkflowModelCustomProperties' (Required): Gets or sets the instance type.


## WorkflowModelCustomPropertiesAffectedObjectDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowModelProperties
### Properties
* **activityId**: string (ReadOnly): Gets or sets the workflow activity id.
* **allowedActions**: string[] (ReadOnly): Gets or sets the list of allowed actions on the workflow.
* **customProperties**: [WorkflowModelCustomProperties](#workflowmodelcustomproperties): Workflow model custom properties.
* **displayName**: string (ReadOnly): Gets or sets the friendly display name.
* **endTime**: string (ReadOnly): Gets or sets the end time.
* **errors**: [ErrorModel](#errormodel)[] (ReadOnly): Gets or sets the list of errors.
* **objectId**: string (ReadOnly): Gets or sets the affected object Id.
* **objectInternalId**: string (ReadOnly): Gets or sets the affected object internal Id.
* **objectInternalName**: string (ReadOnly): Gets or sets the affected object internal name.
* **objectName**: string (ReadOnly): Gets or sets the affected object name.
* **objectType**: 'MigrateAgent' | 'ModernizeProject' | 'ReplicationPostAction' | 'WorkloadDeployment' | 'WorkloadInstance' | string (ReadOnly): Gets or sets the object type.
* **startTime**: string (ReadOnly): Gets or sets the start time.
* **state**: 'Cancelled' | 'Cancelling' | 'CompletedWithErrors' | 'CompletedWithInformation' | 'CompletedWithWarnings' | 'Failed' | 'Pending' | 'Started' | 'Succeeded' | string (ReadOnly): Gets or sets the workflow state.
* **tasks**: [TaskModel](#taskmodel)[] (ReadOnly): Gets or sets the list of tasks.
* **workloadDeploymentProviderId**: string (ReadOnly): Gets or sets the workload deployment provider.
* **workloadInstanceProviderId**: string (ReadOnly): Gets or sets the workload instance provider.

## WorkflowModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## WorkflowModelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkloadDeploymentModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### ApacheTomcatAKSWorkloadDeploymentModelCustomProperties
#### Properties
* **apacheTomcatAksWorkloadDeploymentProperties**: [ApacheTomcatAKSWorkloadDeployment](#apachetomcataksworkloaddeployment): ApacheTomcat web application.
* **instanceType**: 'ApacheTomcatAKSWorkloadDeploymentModelCustomProperties' (Required): Gets or sets the instance type.

### IisaksWorkloadDeploymentModelCustomProperties
#### Properties
* **iisAksWorkloadDeploymentProperties**: [IisaksWorkloadDeployment](#iisaksworkloaddeployment): IIS AKS workload deployment.
* **instanceType**: 'IISAKSWorkloadDeploymentModelCustomProperties' (Required): Gets or sets the instance type.


## WorkloadDeploymentModelProperties
### Properties
* **allowedOperations**: ('BuildContainerImage' | 'CompleteMigration' | 'DisableReplication' | 'EnableReplication' | 'Migrate' | 'TestMigrate' | 'TestMigrateCleanup' | 'UpdateProperties' | string)[] (ReadOnly): Gets or sets the allowed scenarios on the workload deployment.
* **correlationId**: string (ReadOnly): Gets or sets the workload deployment correlation Id.
* **currentJob**: [WorkloadDeploymentModelPropertiesCurrentJob](#workloaddeploymentmodelpropertiescurrentjob) (ReadOnly)
* **customProperties**: [WorkloadDeploymentModelCustomProperties](#workloaddeploymentmodelcustomproperties): Workload deployment model custom properties.
* **displayName**: string: Gets or sets the display name.
* **healthErrors**: [HealthErrorModel](#healtherrormodel)[] (ReadOnly): Gets or sets the list of health errors.
* **lastSuccessfulMigrateTime**: string (ReadOnly): Gets or sets the Last successful unplanned migrate time.
* **lastSuccessfulTestMigrateTime**: string (ReadOnly): Gets or sets the Last successful test migrate time.
* **migrationStatus**: 'Failed' | 'ImageBuildFailed' | 'ImageBuildInProgress' | 'ImageBuildPending' | 'Migrated' | 'Migrating' | 'None' | 'ReadyToMigrate' | 'ReadyToTestMigrate' | 'TestMigrateCleanupInProgress' | 'TestMigrated' | 'TestMigrating' | string (ReadOnly): Gets or sets the migrate state.
* **migrationStatusDescription**: string (ReadOnly): Gets or sets the migrate state description.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the workload deployment.
* **status**: 'CleanUpInProgress' | 'CleanUpPending' | 'ImageBuildFailed' | 'ImageBuildInProgress' | 'ImageBuildPending' | 'InitialReplication' | 'Migrated' | 'Migrating' | 'MigrationFailed' | 'None' | 'ReadyToMigrate' | 'ReplicationFailed' | 'TestMigrating' | string (ReadOnly): Gets or sets the workload deployment status.
* **statusDescription**: string (ReadOnly): Gets or sets the workload deployment status description.
* **targetPlatform**: 'AzureAppServiceContainer' | 'AzureAppServiceNative' | 'AzureKubernetesService' | string: Gets or sets the deployment target platform.
* **testMigrationStatus**: 'CleanedUp' | 'CleanupInProgress' | 'Failed' | 'ImageBuildFailed' | 'ImageBuildInProgress' | 'ImageBuildPending' | 'None' | 'ReadyToTestMigrate' | 'TestMigrated' | 'TestMigrationInProgress' | string (ReadOnly): Gets or sets the test migrate state.
* **testMigrationStatusDescription**: string (ReadOnly): Gets or sets the Test migrate state description.
* **workloadInstanceProperties**: [WorkloadInstanceModelProperties](#workloadinstancemodelproperties): Workload instance model properties.

## WorkloadDeploymentModelPropertiesCurrentJob
### Properties
* **displayName**: string (ReadOnly): Gets or sets the workflow friendly display name.
* **endTime**: string (ReadOnly): Gets or sets end time of the workflow.
* **id**: string (ReadOnly): Gets or sets workflow Id.
* **name**: string (ReadOnly): Gets or sets workflow name.
* **scenarioName**: string (ReadOnly): Gets or sets workload scenario name.
* **startTime**: string (ReadOnly): Gets or sets start time of the workflow.
* **state**: string (ReadOnly): Gets or sets workflow state.

## WorkloadDeploymentModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## WorkloadDeploymentModelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkloadInstanceModelCustomProperties
* **Discriminator**: instanceType

### Base Properties
* **webAppArmId**: string: Gets or sets the Web application ARM id.
* **webAppSiteName**: string: Gets or sets the Web application site name.

### ApacheTomcatWorkloadInstanceModelCustomProperties
#### Properties
* **apacheTomcatWebApplication**: [ApacheTomcatWebApplication](#apachetomcatwebapplication): ApacheTomcat web application.
* **instanceType**: 'ApacheTomcatWorkloadInstanceModelCustomProperties' (Required): Gets or sets the instance type.

### IISWorkloadInstanceModelCustomProperties
#### Properties
* **containerName**: string: Gets or sets the container Id.
* **fileshareName**: string: Gets or sets the fileshare name.
* **iisWebApplication**: [IISWebApplication](#iiswebapplication): IISWeb application.
* **instanceType**: 'IISWorkloadInstanceModelCustomProperties' (Required): Gets or sets the instance type.


## WorkloadInstanceModelProperties
### Properties
* **allowedOperations**: string[] (ReadOnly): Gets or sets the allowed scenarios on the workload instance.
* **currentJob**: [WorkloadInstanceModelPropertiesCurrentJob](#workloadinstancemodelpropertiescurrentjob) (ReadOnly)
* **customProperties**: [WorkloadInstanceModelCustomProperties](#workloadinstancemodelcustomproperties): Workload instance model custom properties.
* **displayName**: string: Gets or sets the display name.
* **healthErrors**: [HealthErrorModel](#healtherrormodel)[] (ReadOnly): Gets or sets the list of health errors.
* **lastSuccessfulReplicationCycleTime**: string (ReadOnly): Gets or sets the Last successful replication cycle time.
* **masterSiteName**: string: Gets or Sets the master site name.
* **migrateAgentId**: string: Gets or sets the migrate agent id associated with the workload instance.
* **name**: string: Gets or sets the workload instance name.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the workload instance.
* **replicationHealth**: 'Critical' | 'Normal' | 'Warning' | string (ReadOnly): Gets or sets the replication health of the workload instance.
* **replicationStatus**: 'Completed' | 'Failed' | 'InitialSync' | 'None' | 'Scheduled' | string (ReadOnly): Gets or sets the replication state of the workload instance.
* **replicationStatusDescription**: string (ReadOnly): Gets or sets the workload replication state description.
* **sourceName**: string: Gets or sets the source name.
* **sourcePlatform**: string: Gets or sets the source platform.

## WorkloadInstanceModelPropertiesCurrentJob
### Properties
* **displayName**: string (ReadOnly): Gets or sets the workflow friendly display name.
* **endTime**: string (ReadOnly): Gets or sets end time of the workflow.
* **id**: string (ReadOnly): Gets or sets workflow Id.
* **name**: string (ReadOnly): Gets or sets workflow name.
* **scenarioName**: string (ReadOnly): Gets or sets workload scenario name.
* **startTime**: string (ReadOnly): Gets or sets start time of the workflow.
* **state**: string (ReadOnly): Gets or sets workflow state.

## WorkloadInstanceModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## WorkloadInstanceModelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

