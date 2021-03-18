# Microsoft.Security @ 2020-01-01

## Resource Microsoft.Security/assessmentMetadata@2020-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityAssessmentMetadataProperties](#securityassessmentmetadataproperties)
* **type**: 'Microsoft.Security/assessmentMetadata' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/assessments@2020-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityAssessmentProperties](#securityassessmentproperties)
* **type**: 'Microsoft.Security/assessments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/locations/applicationWhitelistings@2020-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AdaptiveApplicationControlGroupData](#adaptiveapplicationcontrolgroupdata) (Required)
* **type**: 'Microsoft.Security/locations/applicationWhitelistings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/locations/jitNetworkAccessPolicies@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JitNetworkAccessPolicyProperties](#jitnetworkaccesspolicyproperties) (Required)
* **type**: 'Microsoft.Security/locations/jitNetworkAccessPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/serverVulnerabilityAssessments@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ServerVulnerabilityAssessmentProperties](#servervulnerabilityassessmentproperties) (ReadOnly)
* **type**: 'Microsoft.Security/serverVulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## SecurityAssessmentMetadataProperties
### Properties
* **assessmentType**: 'BuiltIn' | 'CustomPolicy' | 'CustomerManaged' | 'VerifiedPartner' (Required)
* **category**: 'Compute' | 'Data' | 'IdentityAndAccess' | 'IoT' | 'Networking'[]
* **description**: string
* **displayName**: string (Required)
* **implementationEffort**: 'High' | 'Low' | 'Moderate'
* **partnerData**: [SecurityAssessmentMetadataPartnerData](#securityassessmentmetadatapartnerdata)
* **policyDefinitionId**: string (ReadOnly)
* **preview**: bool
* **remediationDescription**: string
* **severity**: 'High' | 'Low' | 'Medium' (Required)
* **threats**: 'accountBreach' | 'dataExfiltration' | 'dataSpillage' | 'denialOfService' | 'elevationOfPrivilege' | 'maliciousInsider' | 'missingCoverage' | 'threatResistance'[]
* **userImpact**: 'High' | 'Low' | 'Moderate'

## SecurityAssessmentMetadataPartnerData
### Properties
* **partnerName**: string (Required)
* **productName**: string
* **secret**: string (Required)

## SecurityAssessmentProperties
### Properties
* **additionalData**: [SecurityAssessmentPropertiesAdditionalData](#securityassessmentpropertiesadditionaldata)
* **displayName**: string (ReadOnly)
* **links**: [AssessmentLinks](#assessmentlinks) (ReadOnly)
* **metadata**: [SecurityAssessmentMetadataProperties](#securityassessmentmetadataproperties)
* **partnersData**: [SecurityAssessmentPartnerData](#securityassessmentpartnerdata)
* **resourceDetails**: [ResourceDetails](#resourcedetails) (Required)
* **status**: [AssessmentStatus](#assessmentstatus) (Required)

## SecurityAssessmentPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssessmentLinks
### Properties
* **azurePortalUri**: string (ReadOnly)

## SecurityAssessmentPartnerData
### Properties
* **partnerName**: string (Required)
* **secret**: string (Required)

## ResourceDetails
* **Discriminator**: source

### Base Properties
### AzureResourceDetails
#### Properties
* **id**: string (ReadOnly)
* **source**: 'Azure' (Required)

### OnPremiseSqlResourceDetails
#### Properties
* **databaseName**: string (Required)
* **serverName**: string (Required)
* **source**: 'OnPremiseSql' (Required)


## AzureResourceDetails
### Properties
* **id**: string (ReadOnly)
* **source**: 'Azure' (Required)

## OnPremiseSqlResourceDetails
### Properties
* **databaseName**: string (Required)
* **serverName**: string (Required)
* **source**: 'OnPremiseSql' (Required)

## AssessmentStatus
### Properties
* **cause**: string
* **code**: 'Healthy' | 'NotApplicable' | 'Unhealthy' (Required)
* **description**: string

## AdaptiveApplicationControlGroupData
### Properties
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured' (ReadOnly)
* **enforcementMode**: 'Audit' | 'Enforce' | 'None'
* **issues**: [AdaptiveApplicationControlIssueSummary](#adaptiveapplicationcontrolissuesummary)[] (ReadOnly)
* **pathRecommendations**: [PathRecommendation](#pathrecommendation)[]
* **protectionMode**: [ProtectionMode](#protectionmode)
* **recommendationStatus**: 'NoStatus' | 'NotAvailable' | 'NotRecommended' | 'Recommended' (ReadOnly)
* **sourceSystem**: 'Azure_AppLocker' | 'Azure_AuditD' | 'NonAzure_AppLocker' | 'NonAzure_AuditD' | 'None' (ReadOnly)
* **vmRecommendations**: [VmRecommendation](#vmrecommendation)[]

## AdaptiveApplicationControlIssueSummary
### Properties
* **issue**: 'ExecutableViolationsAudited' | 'MsiAndScriptViolationsAudited' | 'MsiAndScriptViolationsBlocked' | 'RulesViolatedManually' | 'ViolationsAudited' | 'ViolationsBlocked'
* **numberOfVms**: int

## PathRecommendation
### Properties
* **action**: 'Add' | 'Recommended' | 'Remove'
* **common**: bool
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured'
* **fileType**: 'Dll' | 'Exe' | 'Executable' | 'Msi' | 'Script' | 'Unknown'
* **path**: string
* **publisherInfo**: [PublisherInfo](#publisherinfo)
* **type**: 'BinarySignature' | 'File' | 'FileHash' | 'ProductSignature' | 'PublisherSignature' | 'VersionAndAboveSignature'
* **usernames**: [UserRecommendation](#userrecommendation)[]
* **userSids**: string[]

## PublisherInfo
### Properties
* **binaryName**: string
* **productName**: string
* **publisherName**: string
* **version**: string

## UserRecommendation
### Properties
* **recommendationAction**: 'Add' | 'Recommended' | 'Remove'
* **username**: string

## ProtectionMode
### Properties
* **exe**: 'Audit' | 'Enforce' | 'None'
* **executable**: 'Audit' | 'Enforce' | 'None'
* **msi**: 'Audit' | 'Enforce' | 'None'
* **script**: 'Audit' | 'Enforce' | 'None'

## VmRecommendation
### Properties
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured'
* **enforcementSupport**: 'NotSupported' | 'Supported' | 'Unknown'
* **recommendationAction**: 'Add' | 'Recommended' | 'Remove'
* **resourceId**: string

## JitNetworkAccessPolicyProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **requests**: [JitNetworkAccessRequest](#jitnetworkaccessrequest)[]
* **virtualMachines**: [JitNetworkAccessPolicyVirtualMachine](#jitnetworkaccesspolicyvirtualmachine)[] (Required)

## JitNetworkAccessRequest
### Properties
* **justification**: string
* **requestor**: string (Required)
* **startTimeUtc**: string (Required)
* **virtualMachines**: [JitNetworkAccessRequestVirtualMachine](#jitnetworkaccessrequestvirtualmachine)[] (Required)

## JitNetworkAccessRequestVirtualMachine
### Properties
* **id**: string (Required)
* **ports**: [JitNetworkAccessRequestPort](#jitnetworkaccessrequestport)[] (Required)

## JitNetworkAccessRequestPort
### Properties
* **allowedSourceAddressPrefix**: string
* **allowedSourceAddressPrefixes**: string[]
* **endTimeUtc**: string (Required)
* **mappedPort**: int
* **number**: int (Required)
* **status**: 'Initiated' | 'Revoked' (Required)
* **statusReason**: 'Expired' | 'NewerRequestInitiated' | 'UserRequested' (Required)

## JitNetworkAccessPolicyVirtualMachine
### Properties
* **id**: string (Required)
* **ports**: [JitNetworkAccessPortRule](#jitnetworkaccessportrule)[] (Required)
* **publicIpAddress**: string

## JitNetworkAccessPortRule
### Properties
* **allowedSourceAddressPrefix**: string
* **allowedSourceAddressPrefixes**: string[]
* **maxRequestAccessDuration**: string (Required)
* **number**: int (Required)
* **protocol**: '*' | 'TCP' | 'UDP' (Required)

## ServerVulnerabilityAssessmentProperties
### Properties
* **provisioningState**: 'Canceled' | 'Deprovisioning' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)

