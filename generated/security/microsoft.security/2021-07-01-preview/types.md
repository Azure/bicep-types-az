# Microsoft.Security @ 2021-07-01-preview

## Resource Microsoft.Security/customAssessmentAutomations@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomAssessmentAutomationRequestPropertiesOrCustomAssessmentAutomationProperties](#customassessmentautomationrequestpropertiesorcustomassessmentautomationproperties): describes Custom Assessment Automation request properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Security/customAssessmentAutomations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/customEntityStoreAssignments@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomEntityStoreAssignmentRequestPropertiesOrCustomEntityStoreAssignmentProperties](#customentitystoreassignmentrequestpropertiesorcustomentitystoreassignmentproperties): describes properties of custom entity store assignment request
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Security/customEntityStoreAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/securityConnectors@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Entity tag is used for comparing two or more entities from the same requested resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of the resource
* **location**: string: Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityConnectorProperties](#securityconnectorproperties): Security connector data
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags): A list of key value pairs that describe the resource.
* **type**: 'Microsoft.Security/securityConnectors' (ReadOnly, DeployTimeConstant): The resource type

## CloudOffering
* **Discriminator**: offeringType

### Base Properties
* **description**: string (ReadOnly): The offering description.
### CspmMonitorAwsOffering
#### Properties
* **nativeCloudConnection**: [CspmMonitorAwsOfferingNativeCloudConnection](#cspmmonitorawsofferingnativecloudconnection): The native cloud connection configuration
* **offeringType**: 'CspmMonitorAws' (Required): The type of the security offering.

### DefenderForContainersAwsOffering
#### Properties
* **cloudWatchToKinesis**: [DefenderForContainersAwsOfferingCloudWatchToKinesis](#defenderforcontainersawsofferingcloudwatchtokinesis): The cloudwatch to kinesis connection configuration
* **kinesisToS3**: [DefenderForContainersAwsOfferingKinesisToS3](#defenderforcontainersawsofferingkinesistos3): The kinesis to s3 connection configuration
* **kubernetesScubaReader**: [DefenderForContainersAwsOfferingKubernetesScubaReader](#defenderforcontainersawsofferingkubernetesscubareader): The kubernetes to scuba connection configuration
* **kubernetesService**: [DefenderForContainersAwsOfferingKubernetesService](#defenderforcontainersawsofferingkubernetesservice): The kubernetes service connection configuration
* **offeringType**: 'DefenderForContainersAws' (Required): The type of the security offering.

### DefenderForServersAwsOffering
#### Properties
* **arcAutoProvisioning**: [DefenderForServersAwsOfferingArcAutoProvisioning](#defenderforserversawsofferingarcautoprovisioning): The ARC autoprovisioning configuration
* **defenderForServers**: [DefenderForServersAwsOfferingDefenderForServers](#defenderforserversawsofferingdefenderforservers): The Defender for servers connection configuration
* **offeringType**: 'DefenderForServersAws' (Required): The type of the security offering.

### InformationProtectionAwsOffering
#### Properties
* **informationProtection**: [InformationProtectionAwsOfferingInformationProtection](#informationprotectionawsofferinginformationprotection): The native cloud connection configuration
* **offeringType**: 'InformationProtectionAws' (Required): The type of the security offering.


## CspmMonitorAwsOfferingNativeCloudConnection
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## CustomAssessmentAutomationRequestPropertiesOrCustomAssessmentAutomationProperties
### Properties
* **assessmentKey**: string (ReadOnly): The assessment metadata key used when an assessment is generated for this assessment automation.
* **compressedQuery**: string: Base 64 encoded KQL query representing the assessment automation results required.
* **description**: string: The description to relate to the assessments generated by this assessment automation.
* **displayName**: string: The display name of the assessments generated by this assessment automation.
* **remediationDescription**: string: The remediation description to relate to the assessments generated by this assessment automation.
* **severity**: 'High' | 'Low' | 'Medium' | string: The severity to relate to the assessments generated by this assessment automation.
* **supportedCloud**: 'AWS' | 'GCP' | string: Relevant cloud for the custom assessment automation.

## CustomEntityStoreAssignmentRequestPropertiesOrCustomEntityStoreAssignmentProperties
### Properties
* **entityStoreDatabaseLink**: string (ReadOnly): The link to entity store database.
* **principal**: string: The principal assigned with entity store. If not provided, will use caller principal. Format of principal is: [AAD type]=[PrincipalObjectId];[TenantId]

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

## InformationProtectionAwsOfferingInformationProtection
### Properties
* **cloudRoleArn**: string: The cloud role ARN in AWS for this feature

## SecurityConnectorProperties
### Properties
* **cloudName**: 'AWS' | 'Azure' | 'GCP' | string: The multi cloud resource's cloud name.
* **hierarchyIdentifier**: string: The multi cloud resource identifier (account id in case of AWS connector).
* **offerings**: [CloudOffering](#cloudoffering)[]: A collection of offerings for the security connector.
* **organizationalData**: [SecurityConnectorPropertiesOrganizationalData](#securityconnectorpropertiesorganizationaldata): The multi cloud account's organizational data

## SecurityConnectorPropertiesOrganizationalData
### Properties
* **excludedAccountIds**: string[]: If the multi cloud account is of membership type organization, list of accounts excluded from offering
* **organizationMembershipType**: 'Member' | 'Organization' | string: The multi cloud account's membership type in the organization
* **parentHierarchyId**: string: If the multi cloud account is not of membership type organization, this will be the ID of the account's parent
* **stacksetName**: string: If the multi cloud account is of membership type organization, this will be the name of the onboarding stackset

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

