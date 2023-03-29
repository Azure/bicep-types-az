# Microsoft.Security @ 2023-03-01-preview

## Resource Microsoft.Security/securityConnectors@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity tag is used for comparing two or more entities from the same requested resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of the resource
* **location**: string: Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityConnectorProperties](#securityconnectorproperties): Security connector data
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags): A list of key value pairs that describe the resource.
* **type**: 'Microsoft.Security/securityConnectors' (ReadOnly, DeployTimeConstant): The resource type

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

### DefenderCspmAwsOffering
#### Properties
* **databasesDspm**: [DefenderCspmAwsOfferingDatabasesDspm](#defendercspmawsofferingdatabasesdspm): The databases DSPM configuration
* **dataSensitivityDiscovery**: [DefenderCspmAwsOfferingDataSensitivityDiscovery](#defendercspmawsofferingdatasensitivitydiscovery): The Microsoft Defender Data Sensitivity discovery configuration
* **offeringType**: 'DefenderCspmAws' (Required): The type of the security offering.
* **vmScanners**: [DefenderCspmAwsOfferingVmScanners](#defendercspmawsofferingvmscanners): The Microsoft Defender for Server VM scanning configuration

### DefenderCspmGcpOffering
#### Properties
* **offeringType**: 'DefenderCspmGcp' (Required): The type of the security offering.

### DefenderForContainersAwsOffering
#### Properties
* **autoProvisioning**: bool: Is audit logs pipeline auto provisioning enabled
* **cloudWatchToKinesis**: [DefenderForContainersAwsOfferingCloudWatchToKinesis](#defenderforcontainersawsofferingcloudwatchtokinesis): The cloudwatch to kinesis connection configuration
* **containerVulnerabilityAssessment**: [DefenderForContainersAwsOfferingContainerVulnerabilityAssessment](#defenderforcontainersawsofferingcontainervulnerabilityassessment): The container vulnerability assessment configuration
* **containerVulnerabilityAssessmentTask**: [DefenderForContainersAwsOfferingContainerVulnerabilityAssessmentTask](#defenderforcontainersawsofferingcontainervulnerabilityassessmenttask): The container vulnerability assessment task configuration
* **enableContainerVulnerabilityAssessment**: bool: Enable container vulnerability assessment feature
* **kinesisToS3**: [DefenderForContainersAwsOfferingKinesisToS3](#defenderforcontainersawsofferingkinesistos3): The kinesis to s3 connection configuration
* **kubeAuditRetentionTime**: int: The retention time in days of kube audit logs set on the CloudWatch log group
* **kubernetesScubaReader**: [DefenderForContainersAwsOfferingKubernetesScubaReader](#defenderforcontainersawsofferingkubernetesscubareader): The kubernetes to scuba connection configuration
* **kubernetesService**: [DefenderForContainersAwsOfferingKubernetesService](#defenderforcontainersawsofferingkubernetesservice): The kubernetes service connection configuration
* **offeringType**: 'DefenderForContainersAws' (Required): The type of the security offering.
* **scubaExternalId**: string: The externalId used by the data reader to prevent the confused deputy attack

### DefenderForContainersGcpOffering
#### Properties
* **auditLogsAutoProvisioningFlag**: bool: Is audit logs data collection enabled
* **dataPipelineNativeCloudConnection**: [DefenderForContainersGcpOfferingDataPipelineNativeCloudConnection](#defenderforcontainersgcpofferingdatapipelinenativecloudconnection): The native cloud connection configuration
* **defenderAgentAutoProvisioningFlag**: bool: Is Microsoft Defender for Cloud Kubernetes agent auto provisioning enabled
* **nativeCloudConnection**: [DefenderForContainersGcpOfferingNativeCloudConnection](#defenderforcontainersgcpofferingnativecloudconnection): The native cloud connection configuration
* **offeringType**: 'DefenderForContainersGcp' (Required): The type of the security offering.
* **policyAgentAutoProvisioningFlag**: bool: Is Policy Kubernetes agent auto provisioning enabled

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

### DefenderForDevOpsAzureDevOpsOffering
#### Properties
* **offeringType**: 'DefenderForDevOpsAzureDevOps' (Required): The type of the security offering.

### DefenderForDevOpsGithubOffering
#### Properties
* **offeringType**: 'DefenderForDevOpsGithub' (Required): The type of the security offering.

### DefenderForDevOpsGitLabOffering
#### Properties
* **offeringType**: 'DefenderForDevOpsGitLab' (Required): The type of the security offering.

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

### InformationProtectionAwsOffering
#### Properties
* **informationProtection**: [InformationProtectionAwsOfferingInformationProtection](#informationprotectionawsofferinginformationprotection): The native cloud connection configuration
* **offeringType**: 'InformationProtectionAws' (Required): The type of the security offering.


## CspmMonitorAwsOfferingNativeCloudConnection
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## CspmMonitorGcpOfferingNativeCloudConnection
### Properties
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this offering
* **workloadIdentityProviderId**: string: The GCP workload identity provider id for the offering

## DefenderCspmAwsOfferingDatabasesDspm
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **enabled**: bool: Is databases DSPM protection enabled

## DefenderCspmAwsOfferingDataSensitivityDiscovery
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **enabled**: bool: Is Microsoft Defender Data Sensitivity discovery enabled

## DefenderCspmAwsOfferingVmScanners
### Properties
* **configuration**: [DefenderCspmAwsOfferingVmScannersConfiguration](#defendercspmawsofferingvmscannersconfiguration): configuration for Microsoft Defender for Server VM scanning
* **enabled**: bool: Is Microsoft Defender for Server VM scanning enabled

## DefenderCspmAwsOfferingVmScannersConfiguration
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **exclusionTags**: [DefenderCspmAwsOfferingVmScannersConfigurationExclusionTags](#defendercspmawsofferingvmscannersconfigurationexclusiontags): VM tags that indicates that VM should not be scanned
* **scanningMode**: 'Default' | string: The scanning mode for the VM scan.

## DefenderCspmAwsOfferingVmScannersConfigurationExclusionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DefenderFoDatabasesAwsOfferingArcAutoProvisioning
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **configuration**: [DefenderFoDatabasesAwsOfferingArcAutoProvisioningConfiguration](#defenderfodatabasesawsofferingarcautoprovisioningconfiguration): Configuration for servers Arc auto provisioning
* **enabled**: bool: Is arc auto provisioning enabled

## DefenderFoDatabasesAwsOfferingArcAutoProvisioningConfiguration
### Properties
* **privateLinkScope**: string: Optional Arc private link scope resource id to link the Arc agent
* **proxy**: string: Optional http proxy endpoint to use for the Arc agent

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

## DefenderForContainersAwsOfferingContainerVulnerabilityAssessment
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## DefenderForContainersAwsOfferingContainerVulnerabilityAssessmentTask
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## DefenderForContainersAwsOfferingKinesisToS3
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS used by Kinesis to transfer data into S3

## DefenderForContainersAwsOfferingKubernetesScubaReader
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature used for reading data

## DefenderForContainersAwsOfferingKubernetesService
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature used for provisioning resources

## DefenderForContainersGcpOfferingDataPipelineNativeCloudConnection
### Properties
* **serviceAccountEmailAddress**: string: The data collection service account email address in GCP for this offering
* **workloadIdentityProviderId**: string: The data collection GCP workload identity provider id for this offering

## DefenderForContainersGcpOfferingNativeCloudConnection
### Properties
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this offering
* **workloadIdentityProviderId**: string: The GCP workload identity provider id for this offering

## DefenderForDatabasesGcpOfferingArcAutoProvisioning
### Properties
* **configuration**: [DefenderForDatabasesGcpOfferingArcAutoProvisioningConfiguration](#defenderfordatabasesgcpofferingarcautoprovisioningconfiguration): Configuration for servers Arc auto provisioning
* **enabled**: bool: Is arc auto provisioning enabled

## DefenderForDatabasesGcpOfferingArcAutoProvisioningConfiguration
### Properties
* **privateLinkScope**: string: Optional Arc private link scope resource id to link the Arc agent
* **proxy**: string: Optional http proxy endpoint to use for the Arc agent

## DefenderForDatabasesGcpOfferingDefenderForDatabasesArcAutoProvisioning
### Properties
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this offering
* **workloadIdentityProviderId**: string: The GCP workload identity provider id for this offering

## DefenderForServersAwsOfferingArcAutoProvisioning
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **configuration**: [DefenderForServersAwsOfferingArcAutoProvisioningConfiguration](#defenderforserversawsofferingarcautoprovisioningconfiguration): Configuration for servers Arc auto provisioning
* **enabled**: bool: Is arc auto provisioning enabled

## DefenderForServersAwsOfferingArcAutoProvisioningConfiguration
### Properties
* **privateLinkScope**: string: Optional Arc private link scope resource id to link the Arc agent
* **proxy**: string: Optional HTTP proxy endpoint to use for the Arc agent

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
* **configuration**: [DefenderForServersAwsOfferingVmScannersConfiguration](#defenderforserversawsofferingvmscannersconfiguration): configuration for Microsoft Defender for Server VM scanning
* **enabled**: bool: Is Microsoft Defender for Server VM scanning enabled

## DefenderForServersAwsOfferingVmScannersConfiguration
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature
* **exclusionTags**: [DefenderForServersAwsOfferingVmScannersConfigurationExclusionTags](#defenderforserversawsofferingvmscannersconfigurationexclusiontags): VM tags that indicates that VM should not be scanned
* **scanningMode**: 'Default' | string: The scanning mode for the VM scan.

## DefenderForServersAwsOfferingVmScannersConfigurationExclusionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DefenderForServersGcpOfferingArcAutoProvisioning
### Properties
* **configuration**: [DefenderForServersGcpOfferingArcAutoProvisioningConfiguration](#defenderforserversgcpofferingarcautoprovisioningconfiguration): Configuration for servers Arc auto provisioning
* **enabled**: bool: Is arc auto provisioning enabled

## DefenderForServersGcpOfferingArcAutoProvisioningConfiguration
### Properties
* **privateLinkScope**: string: Optional Arc private link scope resource id to link the Arc agent
* **proxy**: string: Optional HTTP proxy endpoint to use for the Arc agent

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
* **configuration**: [DefenderForServersGcpOfferingVmScannersConfiguration](#defenderforserversgcpofferingvmscannersconfiguration): configuration for Microsoft Defender for Server VM scanning
* **enabled**: bool: Is Microsoft Defender for Server VM scanning enabled

## DefenderForServersGcpOfferingVmScannersConfiguration
### Properties
* **exclusionTags**: [DefenderForServersGcpOfferingVmScannersConfigurationExclusionTags](#defenderforserversgcpofferingvmscannersconfigurationexclusiontags): VM tags that indicate that VM should not be scanned
* **scanningMode**: 'Default' | string: The scanning mode for the VM scan.

## DefenderForServersGcpOfferingVmScannersConfigurationExclusionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnvironmentData
* **Discriminator**: environmentType

### Base Properties

### AwsEnvironmentData
#### Properties
* **accountName**: string (ReadOnly): The AWS account name
* **environmentType**: 'AwsAccount' (Required): The type of the environment data.
* **organizationalData**: [AwsOrganizationalData](#awsorganizationaldata): The AWS account's organizational data
* **regions**: string[]: list of regions to scan

### AzureDevOpsScopeEnvironmentData
#### Properties
* **environmentType**: 'AzureDevOpsScope' (Required): The type of the environment data.

### GcpProjectEnvironmentData
#### Properties
* **environmentType**: 'GcpProject' (Required): The type of the environment data.
* **organizationalData**: [GcpOrganizationalData](#gcporganizationaldata): The Gcp project's organizational data
* **projectDetails**: [GcpProjectDetails](#gcpprojectdetails): The Gcp project's details

### GithubScopeEnvironmentData
#### Properties
* **environmentType**: 'GithubScope' (Required): The type of the environment data.

### GitlabScopeEnvironmentData
#### Properties
* **environmentType**: 'GitlabScope' (Required): The type of the environment data.


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

## InformationProtectionAwsOfferingInformationProtection
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## SecurityConnectorProperties
### Properties
* **environmentData**: [EnvironmentData](#environmentdata): The security connector environment data.
* **environmentName**: 'AWS' | 'Azure' | 'AzureDevOps' | 'GCP' | 'GitLab' | 'Github' | string: The multi cloud resource's cloud name.
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

