# Microsoft.Security @ 2024-08-01-preview

## Resource Microsoft.Security/securityConnectors@2024-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity tag is used for comparing two or more entities from the same requested resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of the resource
* **location**: string: Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityConnectorProperties](#securityconnectorproperties): Security connector data
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags): A list of key value pairs that describe the resource.
* **type**: 'Microsoft.Security/securityConnectors' (ReadOnly, DeployTimeConstant): The resource type

## ArcAutoProvisioningConfiguration
### Properties
* **privateLinkScope**: string: Optional Arc private link scope resource id to link the Arc agent
* **proxy**: string: Optional HTTP proxy endpoint to use for the Arc agent

## Authentication
* **Discriminator**: authenticationType

### Base Properties

### AccessTokenAuthentication
#### Properties
* **accessToken**: string: The access token that will be used while authenticating with the onboarded environment
* **authenticationType**: 'AccessToken' (Required): The authentication type
* **username**: string: The user name that will be used while authenticating with the onboarded environment


## AwsOrganizationalData
* **Discriminator**: organizationMembershipType

### Base Properties

### AwsOrganizationalDataMember
#### Properties
* **organizationMembershipType**: 'Member' (Required): The multi cloud account's membership type in the organization
* **parentHierarchyId**: string: If the multi cloud account is not of membership type organization, this will be the ID of the account's parent

### AwsOrganizationalDataMaster
#### Properties
* **excludedAccountIds**: string[]: If the multi cloud account is of membership type organization, list of accounts excluded from offering
* **organizationMembershipType**: 'Organization' (Required): The multi cloud account's membership type in the organization
* **stacksetName**: string: If the multi cloud account is of membership type organization, this will be the name of the onboarding stackset


## CloudOffering
* **Discriminator**: offeringType

### Base Properties
* **description**: string (ReadOnly): The offering description.

### CspmMonitorAwsOffering
#### Properties
* **nativeCloudConnection**: [CspmMonitorAwsOfferingNativeCloudConnection](#cspmmonitorawsofferingnativecloudconnection): The native cloud connection configuration
* **offeringType**: 'CspmMonitorAws' (Required): The type of the security offering.

### CspmMonitorAzureDevOpsOffering
#### Properties
* **offeringType**: 'CspmMonitorAzureDevOps' (Required): The type of the security offering.

### CspmMonitorDockerHubOffering
#### Properties
* **offeringType**: 'CspmMonitorDockerHub' (Required): The type of the security offering.

### CspmMonitorGcpOffering
#### Properties
* **nativeCloudConnection**: [CspmMonitorGcpOfferingNativeCloudConnection](#cspmmonitorgcpofferingnativecloudconnection): The native cloud connection configuration
* **offeringType**: 'CspmMonitorGcp' (Required): The type of the security offering.

### CspmMonitorGithubOffering
#### Properties
* **offeringType**: 'CspmMonitorGithub' (Required): The type of the security offering.

### CspmMonitorGitLabOffering
#### Properties
* **offeringType**: 'CspmMonitorGitLab' (Required): The type of the security offering.

### CspmMonitorJFrogOffering
#### Properties
* **offeringType**: 'CspmMonitorJFrog' (Required): The type of the security offering.

### DefenderCspmAwsOffering
#### Properties
* **ciem**: [DefenderCspmAwsOfferingCiem](#defendercspmawsofferingciem): Defenders CSPM Permissions Management offering configurations
* **databasesDspm**: [DefenderCspmAwsOfferingDatabasesDspm](#defendercspmawsofferingdatabasesdspm): The databases DSPM configuration
* **dataSensitivityDiscovery**: [DefenderCspmAwsOfferingDataSensitivityDiscovery](#defendercspmawsofferingdatasensitivitydiscovery): The Microsoft Defender Data Sensitivity discovery configuration
* **mdcContainersAgentlessDiscoveryK8s**: [DefenderCspmAwsOfferingMdcContainersAgentlessDiscoveryK8S](#defendercspmawsofferingmdccontainersagentlessdiscoveryk8s): The Microsoft Defender container agentless discovery K8s configuration
* **mdcContainersImageAssessment**: [DefenderCspmAwsOfferingMdcContainersImageAssessment](#defendercspmawsofferingmdccontainersimageassessment): The Microsoft Defender container image assessment configuration
* **offeringType**: 'DefenderCspmAws' (Required): The type of the security offering.
* **vmScanners**: [DefenderCspmAwsOfferingVmScanners](#defendercspmawsofferingvmscanners): The Microsoft Defender for CSPM offering VM scanning configuration

### DefenderCspmDockerHubOffering
#### Properties
* **offeringType**: 'DefenderCspmDockerHub' (Required): The type of the security offering.

### DefenderCspmGcpOffering
#### Properties
* **ciemDiscovery**: [DefenderCspmGcpOfferingCiemDiscovery](#defendercspmgcpofferingciemdiscovery): GCP Defenders CSPM Permissions Management OIDC (Open ID connect) connection configurations
* **dataSensitivityDiscovery**: [DefenderCspmGcpOfferingDataSensitivityDiscovery](#defendercspmgcpofferingdatasensitivitydiscovery): The Microsoft Defender Data Sensitivity discovery configuration
* **mdcContainersAgentlessDiscoveryK8s**: [DefenderCspmGcpOfferingMdcContainersAgentlessDiscoveryK8S](#defendercspmgcpofferingmdccontainersagentlessdiscoveryk8s): The Microsoft Defender Container agentless discovery configuration
* **mdcContainersImageAssessment**: [DefenderCspmGcpOfferingMdcContainersImageAssessment](#defendercspmgcpofferingmdccontainersimageassessment): The Microsoft Defender Container image assessment configuration
* **offeringType**: 'DefenderCspmGcp' (Required): The type of the security offering.
* **vmScanners**: [DefenderCspmGcpOfferingVmScanners](#defendercspmgcpofferingvmscanners): The Microsoft Defender for CSPM VM scanning configuration

### DefenderCspmJFrogOffering
#### Properties
* **mdcContainersImageAssessment**: [DefenderCspmJFrogOfferingMdcContainersImageAssessment](#defendercspmjfrogofferingmdccontainersimageassessment): The Microsoft Defender Container image assessment configuration
* **offeringType**: 'DefenderCspmJFrog' (Required): The type of the security offering.

### DefenderForContainersAwsOffering
#### Properties
* **cloudWatchToKinesis**: [DefenderForContainersAwsOfferingCloudWatchToKinesis](#defenderforcontainersawsofferingcloudwatchtokinesis): The cloudwatch to kinesis connection configuration
* **dataCollectionExternalId**: string: The externalId used by the data reader to prevent the confused deputy attack
* **enableAuditLogsAutoProvisioning**: bool: Is audit logs data collection enabled
* **enableDefenderAgentAutoProvisioning**: bool: Is Microsoft Defender for Cloud Kubernetes agent auto provisioning enabled
* **enablePolicyAgentAutoProvisioning**: bool: Is Policy Kubernetes agent auto provisioning enabled
* **kinesisToS3**: [DefenderForContainersAwsOfferingKinesisToS3](#defenderforcontainersawsofferingkinesistos3): The kinesis to s3 connection configuration
* **kubeAuditRetentionTime**: int: The retention time in days of kube audit logs set on the CloudWatch log group
* **kubernetesDataCollection**: [DefenderForContainersAwsOfferingKubernetesDataCollection](#defenderforcontainersawsofferingkubernetesdatacollection): The kubernetes data collection connection configuration
* **kubernetesService**: [DefenderForContainersAwsOfferingKubernetesService](#defenderforcontainersawsofferingkubernetesservice): The kubernetes service connection configuration
* **mdcContainersAgentlessDiscoveryK8s**: [DefenderForContainersAwsOfferingMdcContainersAgentlessDiscoveryK8S](#defenderforcontainersawsofferingmdccontainersagentlessdiscoveryk8s): The Microsoft Defender container agentless discovery K8s configuration
* **mdcContainersImageAssessment**: [DefenderForContainersAwsOfferingMdcContainersImageAssessment](#defenderforcontainersawsofferingmdccontainersimageassessment): The Microsoft Defender container image assessment configuration
* **offeringType**: 'DefenderForContainersAws' (Required): The type of the security offering.
* **vmScanners**: [DefenderForContainersAwsOfferingVmScanners](#defenderforcontainersawsofferingvmscanners): The Microsoft Defender for Container K8s VM host scanning configuration

### DefenderForContainersDockerHubOffering
#### Properties
* **offeringType**: 'DefenderForContainersDockerHub' (Required): The type of the security offering.

### DefenderForContainersGcpOffering
#### Properties
* **dataPipelineNativeCloudConnection**: [DefenderForContainersGcpOfferingDataPipelineNativeCloudConnection](#defenderforcontainersgcpofferingdatapipelinenativecloudconnection): The native cloud connection configuration
* **enableAuditLogsAutoProvisioning**: bool: Is audit logs data collection enabled
* **enableDefenderAgentAutoProvisioning**: bool: Is Microsoft Defender for Cloud Kubernetes agent auto provisioning enabled
* **enablePolicyAgentAutoProvisioning**: bool: Is Policy Kubernetes agent auto provisioning enabled
* **mdcContainersAgentlessDiscoveryK8s**: [DefenderForContainersGcpOfferingMdcContainersAgentlessDiscoveryK8S](#defenderforcontainersgcpofferingmdccontainersagentlessdiscoveryk8s): The Microsoft Defender Container agentless discovery configuration
* **mdcContainersImageAssessment**: [DefenderForContainersGcpOfferingMdcContainersImageAssessment](#defenderforcontainersgcpofferingmdccontainersimageassessment): The Microsoft Defender Container image assessment configuration
* **nativeCloudConnection**: [DefenderForContainersGcpOfferingNativeCloudConnection](#defenderforcontainersgcpofferingnativecloudconnection): The native cloud connection configuration
* **offeringType**: 'DefenderForContainersGcp' (Required): The type of the security offering.
* **vmScanners**: [DefenderForContainersGcpOfferingVmScanners](#defenderforcontainersgcpofferingvmscanners): The Microsoft Defender for Container K8s VM host scanning configuration

### DefenderForContainersJFrogOffering
#### Properties
* **offeringType**: 'DefenderForContainersJFrog' (Required): The type of the security offering.

### DefenderFoDatabasesAwsOffering
#### Properties
* **arcAutoProvisioning**: [DefenderFoDatabasesAwsOfferingArcAutoProvisioning](#defenderfodatabasesawsofferingarcautoprovisioning): The ARC autoprovisioning configuration
* **databasesDspm**: [DefenderFoDatabasesAwsOfferingDatabasesDspm](#defenderfodatabasesawsofferingdatabasesdspm): The databases data security posture management (DSPM) configuration
* **offeringType**: 'DefenderForDatabasesAws' (Required): The type of the security offering.
* **rds**: [DefenderFoDatabasesAwsOfferingRds](#defenderfodatabasesawsofferingrds): The RDS configuration

### DefenderForDatabasesGcpOffering
#### Properties
* **arcAutoProvisioning**: [DefenderForDatabasesGcpOfferingArcAutoProvisioning](#defenderfordatabasesgcpofferingarcautoprovisioning): The ARC autoprovisioning configuration
* **defenderForDatabasesArcAutoProvisioning**: [DefenderForDatabasesGcpOfferingDefenderForDatabasesArcAutoProvisioning](#defenderfordatabasesgcpofferingdefenderfordatabasesarcautoprovisioning): The native cloud connection configuration
* **offeringType**: 'DefenderForDatabasesGcp' (Required): The type of the security offering.

### DefenderForServersAwsOffering
#### Properties
* **arcAutoProvisioning**: [DefenderForServersAwsOfferingArcAutoProvisioning](#defenderforserversawsofferingarcautoprovisioning): The ARC autoprovisioning configuration
* **defenderForServers**: [DefenderForServersAwsOfferingDefenderForServers](#defenderforserversawsofferingdefenderforservers): The Defender for servers connection configuration
* **mdeAutoProvisioning**: [DefenderForServersAwsOfferingMdeAutoProvisioning](#defenderforserversawsofferingmdeautoprovisioning): The Microsoft Defender for Endpoint autoprovisioning configuration
* **offeringType**: 'DefenderForServersAws' (Required): The type of the security offering.
* **subPlan**: [DefenderForServersAwsOfferingSubPlan](#defenderforserversawsofferingsubplan): configuration for the servers offering subPlan
* **vaAutoProvisioning**: [DefenderForServersAwsOfferingVaAutoProvisioning](#defenderforserversawsofferingvaautoprovisioning): The Vulnerability Assessment autoprovisioning configuration
* **vmScanners**: [DefenderForServersAwsOfferingVmScanners](#defenderforserversawsofferingvmscanners): The Microsoft Defender for Server VM scanning configuration

### DefenderForServersGcpOffering
#### Properties
* **arcAutoProvisioning**: [DefenderForServersGcpOfferingArcAutoProvisioning](#defenderforserversgcpofferingarcautoprovisioning): The ARC autoprovisioning configuration
* **defenderForServers**: [DefenderForServersGcpOfferingDefenderForServers](#defenderforserversgcpofferingdefenderforservers): The Defender for servers connection configuration
* **mdeAutoProvisioning**: [DefenderForServersGcpOfferingMdeAutoProvisioning](#defenderforserversgcpofferingmdeautoprovisioning): The Microsoft Defender for Endpoint autoprovisioning configuration
* **offeringType**: 'DefenderForServersGcp' (Required): The type of the security offering.
* **subPlan**: [DefenderForServersGcpOfferingSubPlan](#defenderforserversgcpofferingsubplan): configuration for the servers offering subPlan
* **vaAutoProvisioning**: [DefenderForServersGcpOfferingVaAutoProvisioning](#defenderforserversgcpofferingvaautoprovisioning): The Vulnerability Assessment autoprovisioning configuration
* **vmScanners**: [DefenderForServersGcpOfferingVmScanners](#defenderforserversgcpofferingvmscanners): The Microsoft Defender for Server VM scanning configuration


## CspmMonitorAwsOfferingNativeCloudConnection
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## CspmMonitorGcpOfferingNativeCloudConnection
### Properties
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this offering
* **workloadIdentityProviderId**: string: The GCP workload identity provider id for the offering

## DefenderCspmAwsOfferingCiem
### Properties
* **ciemDiscovery**: [DefenderCspmAwsOfferingCiemDiscovery](#defendercspmawsofferingciemdiscovery): Defender CSPM Permissions Management discovery configuration
* **ciemOidc**: [DefenderCspmAwsOfferingCiemOidc](#defendercspmawsofferingciemoidc): AWS Defender CSPM Permissions Management OIDC (open id connect) connection configurations

## DefenderCspmAwsOfferingCiemDiscovery
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for Permissions Management discovery

## DefenderCspmAwsOfferingCiemOidc
### Properties
* **azureActiveDirectoryAppName**: string: the azure active directory app name used of authenticating against AWS
* **cloudRoleArn**: string: The cloud role ARN in AWS for Permissions Management used for oidc connection

## DefenderCspmAwsOfferingDatabasesDspm
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **enabled**: bool: Is databases DSPM protection enabled

## DefenderCspmAwsOfferingDataSensitivityDiscovery
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **enabled**: bool: Is Microsoft Defender Data Sensitivity discovery enabled

## DefenderCspmAwsOfferingMdcContainersAgentlessDiscoveryK8S
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **enabled**: bool: Is Microsoft Defender container agentless discovery K8s enabled

## DefenderCspmAwsOfferingMdcContainersImageAssessment
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **enabled**: bool: Is Microsoft Defender container image assessment enabled

## DefenderCspmAwsOfferingVmScanners
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **configuration**: [VmScannersBaseConfiguration](#vmscannersbaseconfiguration): Configuration for VM scanning
* **enabled**: bool: Is VM scanning enabled

## DefenderCspmGcpOfferingCiemDiscovery
### Properties
* **azureActiveDirectoryAppName**: string: the azure active directory app name used of authenticating against GCP workload identity federation
* **serviceAccountEmailAddress**: string: The service account email address in GCP for Permissions Management offering
* **workloadIdentityProviderId**: string: The GCP workload identity provider id for Permissions Management offering

## DefenderCspmGcpOfferingDataSensitivityDiscovery
### Properties
* **enabled**: bool: Is Microsoft Defender Data Sensitivity discovery enabled
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this feature
* **workloadIdentityProviderId**: string: The workload identity provider id in GCP for this feature

## DefenderCspmGcpOfferingMdcContainersAgentlessDiscoveryK8S
### Properties
* **enabled**: bool: Is Microsoft Defender container agentless discovery enabled
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this feature
* **workloadIdentityProviderId**: string: The workload identity provider id in GCP for this feature

## DefenderCspmGcpOfferingMdcContainersImageAssessment
### Properties
* **enabled**: bool: Is Microsoft Defender container image assessment enabled
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this feature
* **workloadIdentityProviderId**: string: The workload identity provider id in GCP for this feature

## DefenderCspmGcpOfferingVmScanners
### Properties
* **configuration**: [VmScannersBaseConfiguration](#vmscannersbaseconfiguration): Configuration for VM scanning
* **enabled**: bool: Is VM scanning enabled

## DefenderCspmJFrogOfferingMdcContainersImageAssessment
### Properties
* **enabled**: bool: Is Microsoft Defender container image assessment enabled

## DefenderFoDatabasesAwsOfferingArcAutoProvisioning
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **configuration**: [ArcAutoProvisioningConfiguration](#arcautoprovisioningconfiguration): Configuration for servers Arc auto provisioning for a given environment
* **enabled**: bool: Is arc auto provisioning enabled

## DefenderFoDatabasesAwsOfferingDatabasesDspm
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **enabled**: bool: Is databases data security posture management (DSPM) protection enabled

## DefenderFoDatabasesAwsOfferingRds
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **enabled**: bool: Is RDS protection enabled

## DefenderForContainersAwsOfferingCloudWatchToKinesis
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS used by CloudWatch to transfer data into Kinesis

## DefenderForContainersAwsOfferingKinesisToS3
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS used by Kinesis to transfer data into S3

## DefenderForContainersAwsOfferingKubernetesDataCollection
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature used for reading data

## DefenderForContainersAwsOfferingKubernetesService
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature used for provisioning resources

## DefenderForContainersAwsOfferingMdcContainersAgentlessDiscoveryK8S
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **enabled**: bool: Is Microsoft Defender container agentless discovery K8s enabled

## DefenderForContainersAwsOfferingMdcContainersImageAssessment
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **enabled**: bool: Is Microsoft Defender container image assessment enabled

## DefenderForContainersAwsOfferingVmScanners
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **configuration**: [VmScannersBaseConfiguration](#vmscannersbaseconfiguration): Configuration for VM scanning
* **enabled**: bool: Is VM scanning enabled

## DefenderForContainersGcpOfferingDataPipelineNativeCloudConnection
### Properties
* **serviceAccountEmailAddress**: string: The data collection service account email address in GCP for this offering
* **workloadIdentityProviderId**: string: The data collection GCP workload identity provider id for this offering

## DefenderForContainersGcpOfferingMdcContainersAgentlessDiscoveryK8S
### Properties
* **enabled**: bool: Is Microsoft Defender container agentless discovery enabled
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this feature
* **workloadIdentityProviderId**: string: The workload identity provider id in GCP for this feature

## DefenderForContainersGcpOfferingMdcContainersImageAssessment
### Properties
* **enabled**: bool: Is Microsoft Defender container image assessment enabled
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this feature
* **workloadIdentityProviderId**: string: The workload identity provider id in GCP for this feature

## DefenderForContainersGcpOfferingNativeCloudConnection
### Properties
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this offering
* **workloadIdentityProviderId**: string: The GCP workload identity provider id for this offering

## DefenderForContainersGcpOfferingVmScanners
### Properties
* **configuration**: [VmScannersBaseConfiguration](#vmscannersbaseconfiguration): Configuration for VM scanning
* **enabled**: bool: Is VM scanning enabled

## DefenderForDatabasesGcpOfferingArcAutoProvisioning
### Properties
* **configuration**: [ArcAutoProvisioningConfiguration](#arcautoprovisioningconfiguration): Configuration for servers Arc auto provisioning for a given environment
* **enabled**: bool: Is arc auto provisioning enabled

## DefenderForDatabasesGcpOfferingDefenderForDatabasesArcAutoProvisioning
### Properties
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this offering
* **workloadIdentityProviderId**: string: The GCP workload identity provider id for this offering

## DefenderForServersAwsOfferingArcAutoProvisioning
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **configuration**: [ArcAutoProvisioningConfiguration](#arcautoprovisioningconfiguration): Configuration for servers Arc auto provisioning for a given environment
* **enabled**: bool: Is arc auto provisioning enabled

## DefenderForServersAwsOfferingDefenderForServers
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## DefenderForServersAwsOfferingMdeAutoProvisioning
### Properties
* **configuration**: any: configuration for Microsoft Defender for Endpoint autoprovisioning
* **enabled**: bool: Is Microsoft Defender for Endpoint auto provisioning enabled

## DefenderForServersAwsOfferingSubPlan
### Properties
* **type**: 'P1' | 'P2' | string: The available sub plans

## DefenderForServersAwsOfferingVaAutoProvisioning
### Properties
* **configuration**: [DefenderForServersAwsOfferingVaAutoProvisioningConfiguration](#defenderforserversawsofferingvaautoprovisioningconfiguration): configuration for Vulnerability Assessment autoprovisioning
* **enabled**: bool: Is Vulnerability Assessment auto provisioning enabled

## DefenderForServersAwsOfferingVaAutoProvisioningConfiguration
### Properties
* **type**: 'Qualys' | 'TVM' | string: The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'

## DefenderForServersAwsOfferingVmScanners
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **configuration**: [VmScannersBaseConfiguration](#vmscannersbaseconfiguration): Configuration for VM scanning
* **enabled**: bool: Is VM scanning enabled

## DefenderForServersGcpOfferingArcAutoProvisioning
### Properties
* **configuration**: [ArcAutoProvisioningConfiguration](#arcautoprovisioningconfiguration): Configuration for servers Arc auto provisioning for a given environment
* **enabled**: bool: Is arc auto provisioning enabled

## DefenderForServersGcpOfferingDefenderForServers
### Properties
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this feature
* **workloadIdentityProviderId**: string: The workload identity provider id in GCP for this feature

## DefenderForServersGcpOfferingMdeAutoProvisioning
### Properties
* **configuration**: any: configuration for Microsoft Defender for Endpoint autoprovisioning
* **enabled**: bool: Is Microsoft Defender for Endpoint auto provisioning enabled

## DefenderForServersGcpOfferingSubPlan
### Properties
* **type**: 'P1' | 'P2' | string: The available sub plans

## DefenderForServersGcpOfferingVaAutoProvisioning
### Properties
* **configuration**: [DefenderForServersGcpOfferingVaAutoProvisioningConfiguration](#defenderforserversgcpofferingvaautoprovisioningconfiguration): configuration for Vulnerability Assessment autoprovisioning
* **enabled**: bool: Is Vulnerability Assessment auto provisioning enabled

## DefenderForServersGcpOfferingVaAutoProvisioningConfiguration
### Properties
* **type**: 'Qualys' | 'TVM' | string: The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'

## DefenderForServersGcpOfferingVmScanners
### Properties
* **configuration**: [VmScannersBaseConfiguration](#vmscannersbaseconfiguration): Configuration for VM scanning
* **enabled**: bool: Is VM scanning enabled

## EnvironmentData
* **Discriminator**: environmentType

### Base Properties

### AwsEnvironmentData
#### Properties
* **accountName**: string (ReadOnly): The AWS account name
* **environmentType**: 'AwsAccount' (Required): The type of the environment data.
* **organizationalData**: [AwsOrganizationalData](#awsorganizationaldata): The AWS account's organizational data
* **regions**: string[]: list of regions to scan
* **scanInterval**: int: Scan interval in hours (value should be between 1-hour to 24-hours)

### AzureDevOpsScopeEnvironmentData
#### Properties
* **environmentType**: 'AzureDevOpsScope' (Required): The type of the environment data.

### DockerHubEnvironmentData
#### Properties
* **authentication**: [Authentication](#authentication): The Docker Hub organization authentication details
* **environmentType**: 'DockerHubOrganization' (Required): The type of the environment data.
* **scanInterval**: int: Scan interval in hours (value should be between 1-hour to 24-hours)

### GcpProjectEnvironmentData
#### Properties
* **environmentType**: 'GcpProject' (Required): The type of the environment data.
* **organizationalData**: [GcpOrganizationalData](#gcporganizationaldata): The Gcp project's organizational data
* **projectDetails**: [GcpProjectDetails](#gcpprojectdetails): The Gcp project's details
* **scanInterval**: int: Scan interval in hours (value should be between 1-hour to 24-hours)

### GithubScopeEnvironmentData
#### Properties
* **environmentType**: 'GithubScope' (Required): The type of the environment data.

### GitlabScopeEnvironmentData
#### Properties
* **environmentType**: 'GitlabScope' (Required): The type of the environment data.

### JFrogEnvironmentData
#### Properties
* **environmentType**: 'JFrogArtifactory' (Required): The type of the environment data.
* **scanInterval**: int {minValue: 1, maxValue: 24}: Scan interval in hours (value should be between 1-hour to 24-hours)


## GcpOrganizationalData
* **Discriminator**: organizationMembershipType

### Base Properties

### GcpOrganizationalDataMember
#### Properties
* **managementProjectNumber**: string: The GCP management project number from organizational onboarding
* **organizationMembershipType**: 'Member' (Required): The multi cloud account's membership type in the organization
* **parentHierarchyId**: string: If the multi cloud account is not of membership type organization, this will be the ID of the project's parent

### GcpOrganizationalDataOrganization
#### Properties
* **excludedProjectNumbers**: string[]: If the multi cloud account is of membership type organization, list of accounts excluded from offering
* **organizationMembershipType**: 'Organization' (Required): The multi cloud account's membership type in the organization
* **organizationName**: string (ReadOnly): GCP organization name
* **serviceAccountEmailAddress**: string: The service account email address which represents the organization level permissions container.
* **workloadIdentityProviderId**: string: The GCP workload identity provider id which represents the permissions required to auto provision security connectors


## GcpProjectDetails
### Properties
* **projectId**: string: The GCP Project id
* **projectName**: string (ReadOnly): GCP project name
* **projectNumber**: string: The unique GCP Project number
* **workloadIdentityPoolId**: string (ReadOnly): The GCP workload identity federation pool id

## SecurityConnectorProperties
### Properties
* **environmentData**: [EnvironmentData](#environmentdata): The security connector environment data.
* **environmentName**: 'AWS' | 'Azure' | 'AzureDevOps' | 'DockerHub' | 'GCP' | 'GitLab' | 'Github' | 'JFrog' | string: The multi cloud resource's cloud name.
* **hierarchyIdentifier**: string: The multi cloud resource identifier (account id in case of AWS connector, project number in case of GCP connector).
* **hierarchyIdentifierTrialEndDate**: string (ReadOnly): The date on which the trial period will end, if applicable. Trial period exists for 30 days after upgrading to payed offerings.
* **offerings**: [CloudOffering](#cloudoffering)[]: A collection of offerings for the security connector.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VmScannersBaseConfiguration
### Properties
* **exclusionTags**: [VmScannersBaseConfigurationExclusionTags](#vmscannersbaseconfigurationexclusiontags): Tags that indicates that a resource should not be scanned
* **scanningMode**: 'Default' | string: The scanning mode for the VM scan.

## VmScannersBaseConfigurationExclusionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

