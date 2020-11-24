# Microsoft.Security @ 2020-01-01

## Microsoft.Security/assessmentMetadata
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityAssessmentMetadataProperties
* **type**: 'Microsoft.Security/assessmentMetadata' (ReadOnly, DeployTimeConstant)

## SecurityAssessmentMetadataProperties
### Properties
* **assessmentType**: 'BuiltIn' | 'CustomerManaged' | 'CustomPolicy' | 'VerifiedPartner' (Required)
* **category**: 'Compute' | 'Data' | 'IdentityAndAccess' | 'IoT' | 'Networking'[]
* **description**: string
* **displayName**: string (Required)
* **implementationEffort**: 'High' | 'Low' | 'Moderate'
* **partnerData**: SecurityAssessmentMetadataPartnerData
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

## Microsoft.Security/assessments
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityAssessmentProperties
* **type**: 'Microsoft.Security/assessments' (ReadOnly, DeployTimeConstant)

## SecurityAssessmentProperties
### Properties
* **additionalData**: Dictionary<string,String>
* **displayName**: string (ReadOnly)
* **links**: AssessmentLinks
* **metadata**: SecurityAssessmentMetadataProperties
* **partnersData**: SecurityAssessmentPartnerData
* **resourceDetails**: ResourceDetails (Required)
* **status**: AssessmentStatus (Required)

## Dictionary<string,String>
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
### Azure
#### Properties
* **id**: string (ReadOnly)
* **source**: 'Azure' (Required)

### OnPremise
#### Properties
* **machineName**: string (Required)
* **source**: 'OnPremise' (Required)
* **sourceComputerId**: string (Required)
* **vmuuid**: string (Required)
* **workspaceId**: string (Required)


## Azure
### Properties
* **id**: string (ReadOnly)
* **source**: 'Azure' (Required)

## OnPremise
### Properties
* **machineName**: string (Required)
* **source**: 'OnPremise' (Required)
* **sourceComputerId**: string (Required)
* **vmuuid**: string (Required)
* **workspaceId**: string (Required)

## AssessmentStatus
### Properties
* **cause**: string
* **code**: 'Healthy' | 'NotApplicable' | 'Unhealthy' (Required)
* **description**: string

## Microsoft.Security/locations/applicationWhitelistings
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AdaptiveApplicationControlGroupData (Required)
* **type**: 'Microsoft.Security/locations/applicationWhitelistings' (ReadOnly, DeployTimeConstant)

## AdaptiveApplicationControlGroupData
### Properties
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured' (ReadOnly)
* **enforcementMode**: 'Audit' | 'Enforce' | 'None'
* **issues**: AdaptiveApplicationControlIssueSummary[] (ReadOnly)
* **pathRecommendations**: PathRecommendation[]
* **protectionMode**: ProtectionMode
* **recommendationStatus**: 'NoStatus' | 'NotAvailable' | 'NotRecommended' | 'Recommended' (ReadOnly)
* **sourceSystem**: 'Azure_AppLocker' | 'Azure_AuditD' | 'NonAzure_AppLocker' | 'NonAzure_AuditD' | 'None' (ReadOnly)
* **vmRecommendations**: VmRecommendation[]

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
* **publisherInfo**: PublisherInfo
* **type**: 'BinarySignature' | 'File' | 'FileHash' | 'ProductSignature' | 'PublisherSignature' | 'VersionAndAboveSignature'
* **usernames**: UserRecommendation[]
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

## Microsoft.Security/locations/jitNetworkAccessPolicies
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JitNetworkAccessPolicyProperties (Required)
* **type**: 'Microsoft.Security/locations/jitNetworkAccessPolicies' (ReadOnly, DeployTimeConstant)

## JitNetworkAccessPolicyProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **requests**: JitNetworkAccessRequest[]
* **virtualMachines**: JitNetworkAccessPolicyVirtualMachine[] (Required)

## JitNetworkAccessRequest
### Properties
* **justification**: string
* **requestor**: string (Required)
* **startTimeUtc**: string (Required)
* **virtualMachines**: JitNetworkAccessRequestVirtualMachine[] (Required)

## JitNetworkAccessRequestVirtualMachine
### Properties
* **id**: string (Required)
* **ports**: JitNetworkAccessRequestPort[] (Required)

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
* **ports**: JitNetworkAccessPortRule[] (Required)
* **publicIpAddress**: string

## JitNetworkAccessPortRule
### Properties
* **allowedSourceAddressPrefix**: string
* **allowedSourceAddressPrefixes**: string[]
* **maxRequestAccessDuration**: string (Required)
* **number**: int (Required)
* **protocol**: '*' | 'TCP' | 'UDP' (Required)

