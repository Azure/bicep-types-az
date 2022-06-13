# Microsoft.Security @ 2021-12-01-preview

## Resource Microsoft.Security/securityConnectors@2021-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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

### CspmMonitorGcpOffering
#### Properties
* **nativeCloudConnection**: [CspmMonitorGcpOfferingNativeCloudConnection](#cspmmonitorgcpofferingnativecloudconnection): The native cloud connection configuration
* **offeringType**: 'CspmMonitorGcp' (Required): The type of the security offering.

### CspmMonitorGithubOffering
#### Properties
* **offeringType**: 'CspmMonitorGithub' (Required): The type of the security offering.

### DefenderForContainersAwsOffering
#### Properties
* **cloudWatchToKinesis**: [DefenderForContainersAwsOfferingCloudWatchToKinesis](#defenderforcontainersawsofferingcloudwatchtokinesis): The cloudwatch to kinesis connection configuration
* **kinesisToS3**: [DefenderForContainersAwsOfferingKinesisToS3](#defenderforcontainersawsofferingkinesistos3): The kinesis to s3 connection configuration
* **kubernetesScubaReader**: [DefenderForContainersAwsOfferingKubernetesScubaReader](#defenderforcontainersawsofferingkubernetesscubareader): The kubernetes to scuba connection configuration
* **kubernetesService**: [DefenderForContainersAwsOfferingKubernetesService](#defenderforcontainersawsofferingkubernetesservice): The kubernetes service connection configuration
* **offeringType**: 'DefenderForContainersAws' (Required): The type of the security offering.

### DefenderForContainersGcpOffering
#### Properties
* **auditLogsAutoProvisioningFlag**: bool: Is audit logs data collection enabled
* **dataPipelineNativeCloudConnection**: [DefenderForContainersGcpOfferingDataPipelineNativeCloudConnection](#defenderforcontainersgcpofferingdatapipelinenativecloudconnection): The native cloud connection configuration
* **defenderAgentAutoProvisioningFlag**: bool: Is Microsoft Defender for Cloud Kubernetes agent auto provisioning enabled
* **nativeCloudConnection**: [DefenderForContainersGcpOfferingNativeCloudConnection](#defenderforcontainersgcpofferingnativecloudconnection): The native cloud connection configuration
* **offeringType**: 'DefenderForContainersGcp' (Required): The type of the security offering.
* **policyAgentAutoProvisioningFlag**: bool: Is Policy Kubernetes agent auto provisioning enabled

### DefenderForServersAwsOffering
#### Properties
* **arcAutoProvisioning**: [DefenderForServersAwsOfferingArcAutoProvisioning](#defenderforserversawsofferingarcautoprovisioning): The ARC autoprovisioning configuration
* **defenderForServers**: [DefenderForServersAwsOfferingDefenderForServers](#defenderforserversawsofferingdefenderforservers): The Defender for servers connection configuration
* **mdeAutoProvisioning**: [DefenderForServersAwsOfferingMdeAutoProvisioning](#defenderforserversawsofferingmdeautoprovisioning): The Microsoft Defender for Endpoint autoprovisioning configuration
* **offeringType**: 'DefenderForServersAws' (Required): The type of the security offering.
* **subPlan**: [DefenderForServersAwsOfferingSubPlan](#defenderforserversawsofferingsubplan): configuration for the servers offering subPlan
* **vaAutoProvisioning**: [DefenderForServersAwsOfferingVaAutoProvisioning](#defenderforserversawsofferingvaautoprovisioning): The Vulnerability Assessment autoprovisioning configuration

### DefenderForServersGcpOffering
#### Properties
* **arcAutoProvisioning**: [DefenderForServersGcpOfferingArcAutoProvisioning](#defenderforserversgcpofferingarcautoprovisioning): The ARC autoprovisioning configuration
* **defenderForServers**: [DefenderForServersGcpOfferingDefenderForServers](#defenderforserversgcpofferingdefenderforservers): The Defender for servers connection configuration
* **mdeAutoProvisioning**: [DefenderForServersGcpOfferingMdeAutoProvisioning](#defenderforserversgcpofferingmdeautoprovisioning): The Microsoft Defender for Endpoint autoprovisioning configuration
* **offeringType**: 'DefenderForServersGcp' (Required): The type of the security offering.
* **subPlan**: [DefenderForServersGcpOfferingSubPlan](#defenderforserversgcpofferingsubplan): configuration for the servers offering subPlan
* **vaAutoProvisioning**: [DefenderForServersGcpOfferingVaAutoProvisioning](#defenderforserversgcpofferingvaautoprovisioning): The Vulnerability Assessment autoprovisioning configuration

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

## DefenderForContainersAwsOfferingCloudWatchToKinesis
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## DefenderForContainersAwsOfferingKinesisToS3
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## DefenderForContainersAwsOfferingKubernetesScubaReader
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## DefenderForContainersAwsOfferingKubernetesService
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## DefenderForContainersGcpOfferingDataPipelineNativeCloudConnection
### Properties
* **serviceAccountEmailAddress**: string: The data collection service account email address in GCP for this offering
* **workloadIdentityProviderId**: string: The data collection GCP workload identity provider id for this offering

## DefenderForContainersGcpOfferingNativeCloudConnection
### Properties
* **serviceAccountEmailAddress**: string: The service account email address in GCP for this offering
* **workloadIdentityProviderId**: string: The GCP workload identity provider id for this offering

## DefenderForServersAwsOfferingArcAutoProvisioning
### Properties
* **enabled**: bool: Is arc auto provisioning enabled
* **servicePrincipalSecretMetadata**: [DefenderForServersAwsOfferingArcAutoProvisioningServicePrincipalSecretMetadata](#defenderforserversawsofferingarcautoprovisioningserviceprincipalsecretmetadata): Metadata of Service Principal secret for autoprovisioning

## DefenderForServersAwsOfferingArcAutoProvisioningServicePrincipalSecretMetadata
### Properties
* **expiryDate**: string: expiration date of service principal secret
* **parameterNameInStore**: string: name of secret resource in parameter store
* **parameterStoreRegion**: string: region of parameter store where secret is kept

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

## DefenderForServersGcpOfferingArcAutoProvisioning
### Properties
* **configuration**: [DefenderForServersGcpOfferingArcAutoProvisioningConfiguration](#defenderforserversgcpofferingarcautoprovisioningconfiguration): Configuration for ARC autoprovisioning
* **enabled**: bool: Is arc auto provisioning enabled

## DefenderForServersGcpOfferingArcAutoProvisioningConfiguration
### Properties
* **agentOnboardingServiceAccountNumericId**: string: The agent onboarding service account numeric id
* **clientId**: string: The Azure service principal client id for agent onboarding

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

## EnvironmentData
* **Discriminator**: environmentType

### Base Properties
### AWSEnvironmentData
#### Properties
* **environmentType**: 'AwsAccount' (Required): The type of the environment data.
* **organizationalData**: [AwsOrganizationalData](#awsorganizationaldata): The AWS account's organizational data

### GcpProjectEnvironmentData
#### Properties
* **environmentType**: 'GcpProject' (Required): The type of the environment data.
* **organizationalData**: [GcpOrganizationalData](#gcporganizationaldata): The Gcp project's organizational data
* **projectDetails**: [GcpProjectDetails](#gcpprojectdetails): The Gcp project's details

### GithubScopeEnvironmentData
#### Properties
* **environmentType**: 'GithubScope' (Required): The type of the environment data.


## GcpOrganizationalData
* **Discriminator**: organizationMembershipType

### Base Properties
### GcpOrganizationalDataMember
#### Properties
* **organizationMembershipType**: 'Member' (Required): The multi cloud account's membership type in the organization
* **parentHierarchyId**: string: If the multi cloud account is not of membership type organization, this will be the ID of the project's parent

### GcpOrganizationalDataOrganization
#### Properties
* **excludedProjectNumbers**: string[]: If the multi cloud account is of membership type organization, list of accounts excluded from offering
* **organizationMembershipType**: 'Organization' (Required): The multi cloud account's membership type in the organization
* **serviceAccountEmailAddress**: string: The service account email address which represents the organization level permissions container.
* **workloadIdentityProviderId**: string: The GCP workload identity provider id which represents the permissions required to auto provision security connectors


## GcpProjectDetails
### Properties
* **projectId**: string: The GCP Project id
* **projectNumber**: string: The unique GCP Project number
* **workloadIdentityPoolId**: string (ReadOnly): The GCP workload identity federation pool id

## InformationProtectionAwsOfferingInformationProtection
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## SecurityConnectorProperties
### Properties
* **environmentData**: [EnvironmentData](#environmentdata): The security connector environment data.
* **environmentName**: 'AWS' | 'Azure' | 'GCP' | 'Github' | string: The multi cloud resource's cloud name.
* **hierarchyIdentifier**: string: The multi cloud resource identifier (account id in case of AWS connector, project number in case of GCP connector).
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

