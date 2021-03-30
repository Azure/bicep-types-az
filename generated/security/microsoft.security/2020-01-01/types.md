# Microsoft.Security @ 2020-01-01

## Resource Microsoft.Security/assessmentMetadata@2020-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAssessmentMetadataProperties](#securityassessmentmetadataproperties): Describes properties of an assessment metadata.
* **type**: 'Microsoft.Security/assessmentMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/assessments@2020-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAssessmentProperties](#securityassessmentproperties): Describes properties of an assessment.
* **type**: 'Microsoft.Security/assessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/applicationWhitelistings@2020-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdaptiveApplicationControlGroupData](#adaptiveapplicationcontrolgroupdata) (Required): Represents a machines group and set of rules to be allowed running on a machine
* **type**: 'Microsoft.Security/locations/applicationWhitelistings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/jitNetworkAccessPolicies@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of the resource
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JitNetworkAccessPolicyProperties](#jitnetworkaccesspolicyproperties) (Required):
* **type**: 'Microsoft.Security/locations/jitNetworkAccessPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/serverVulnerabilityAssessments@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerVulnerabilityAssessmentProperties](#servervulnerabilityassessmentproperties) (ReadOnly): describes ServerVulnerabilityAssessment properties.
* **type**: 'Microsoft.Security/serverVulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## SecurityAssessmentMetadataProperties
### Properties
* **assessmentType**: 'BuiltIn' | 'CustomerManaged' | 'CustomPolicy' | 'VerifiedPartner' (Required): BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition. Possible values include: 'BuiltIn', 'CustomPolicy', 'CustomerManaged', 'VerifiedPartner'
* **category**: 'Compute' | 'Data' | 'IdentityAndAccess' | 'IoT' | 'Networking'[]:
* **description**: string: Human readable description of the assessment
* **displayName**: string (Required): User friendly display name of the assessment
* **implementationEffort**: 'High' | 'Low' | 'Moderate': The implementation effort required to remediate this assessment. Possible values include: 'Low', 'Moderate', 'High'
* **partnerData**: [SecurityAssessmentMetadataPartnerData](#securityassessmentmetadatapartnerdata): Describes the partner that created the assessment
* **policyDefinitionId**: string (ReadOnly): Azure resource ID of the policy definition that turns this assessment calculation on
* **preview**: bool: True if this assessment is in preview release status
* **remediationDescription**: string: Human readable description of what you should do to mitigate this security issue
* **severity**: 'High' | 'Low' | 'Medium' (Required): The severity level of the assessment. Possible values include: 'Low', 'Medium', 'High'
* **threats**: 'accountBreach' | 'dataExfiltration' | 'dataSpillage' | 'denialOfService' | 'elevationOfPrivilege' | 'maliciousInsider' | 'missingCoverage' | 'threatResistance'[]:
* **userImpact**: 'High' | 'Low' | 'Moderate': The user impact of the assessment. Possible values include: 'Low', 'Moderate', 'High'

## SecurityAssessmentMetadataPartnerData
### Properties
* **partnerName**: string (Required): Name of the company of the partner
* **productName**: string: Name of the product of the partner that created the assessment
* **secret**: string (Required): Secret to authenticate the partner and verify it created the assessment - write only

## SecurityAssessmentProperties
### Properties
* **additionalData**: [Dictionary<string,String>](#dictionarystringstring): Additional data regarding the assessment
* **displayName**: string (ReadOnly): User friendly display name of the assessment
* **links**: [AssessmentLinks](#assessmentlinks): Links relevant to the assessment
* **metadata**: [SecurityAssessmentMetadataProperties](#securityassessmentmetadataproperties): Describes properties of an assessment metadata.
* **partnersData**: [SecurityAssessmentPartnerData](#securityassessmentpartnerdata): Data regarding 3rd party partner integration
* **resourceDetails**: [ResourceDetails](#resourcedetails) (Required): Details of the resource that was assessed
* **status**: [AssessmentStatus](#assessmentstatus) (Required): The result of the assessment

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssessmentLinks
### Properties
* **azurePortalUri**: string (ReadOnly): Link to assessment in Azure Portal

## SecurityAssessmentPartnerData
### Properties
* **partnerName**: string (Required): Name of the company of the partner
* **secret**: string (Required): secret to authenticate the partner - write only

## ResourceDetails
* **Discriminator**: source
### Base Properties
### Azure
#### Properties
* **id**: string (ReadOnly): Azure resource Id of the assessed resource
* **source**: 'Azure' (Required): Details of the Azure resource that was assessed

### OnPremise
#### Properties
* **machineName**: string (Required): The name of the machine
* **source**: 'OnPremise' (Required): Details of the On Premise resource that was assessed
* **sourceComputerId**: string (Required): The oms agent Id installed on the machine
* **vmuuid**: string (Required): The unique Id of the machine
* **workspaceId**: string (Required): Azure resource Id of the workspace the machine is attached to


## Azure
### Properties
* **id**: string (ReadOnly): Azure resource Id of the assessed resource
* **source**: 'Azure' (Required): Details of the Azure resource that was assessed

## OnPremise
### Properties
* **machineName**: string (Required): The name of the machine
* **source**: 'OnPremise' (Required): Details of the On Premise resource that was assessed
* **sourceComputerId**: string (Required): The oms agent Id installed on the machine
* **vmuuid**: string (Required): The unique Id of the machine
* **workspaceId**: string (Required): Azure resource Id of the workspace the machine is attached to

## AssessmentStatus
### Properties
* **cause**: string: Programmatic code for the cause of the assessment status
* **code**: 'Healthy' | 'NotApplicable' | 'Unhealthy' (Required): Programmatic code for the status of the assessment. Possible values include: 'Healthy', 'Unhealthy', 'NotApplicable'
* **description**: string: Human readable description of the assessment status

## AdaptiveApplicationControlGroupData
### Properties
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured' (ReadOnly): Possible values include: 'Configured', 'NotConfigured', 'InProgress', 'Failed', 'NoStatus'
* **enforcementMode**: 'Audit' | 'Enforce' | 'None': Possible values include: 'Audit', 'Enforce', 'None'
* **issues**: [AdaptiveApplicationControlIssueSummary](#adaptiveapplicationcontrolissuesummary)[] (ReadOnly):
* **pathRecommendations**: [PathRecommendation](#pathrecommendation)[]:
* **protectionMode**: [ProtectionMode](#protectionmode): The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
* **recommendationStatus**: 'NoStatus' | 'NotAvailable' | 'NotRecommended' | 'Recommended' (ReadOnly): Possible values include: 'Recommended', 'NotRecommended', 'NotAvailable', 'NoStatus'
* **sourceSystem**: 'Azure_AppLocker' | 'Azure_AuditD' | 'NonAzure_AppLocker' | 'NonAzure_AuditD' | 'None' (ReadOnly): Possible values include: 'Azure_AppLocker', 'Azure_AuditD', 'NonAzure_AppLocker', 'NonAzure_AuditD', 'None'
* **vmRecommendations**: [VmRecommendation](#vmrecommendation)[]:

## AdaptiveApplicationControlIssueSummary
### Properties
* **issue**: 'ExecutableViolationsAudited' | 'MsiAndScriptViolationsAudited' | 'MsiAndScriptViolationsBlocked' | 'RulesViolatedManually' | 'ViolationsAudited' | 'ViolationsBlocked': Possible values include: 'ViolationsAudited', 'ViolationsBlocked', 'MsiAndScriptViolationsAudited', 'MsiAndScriptViolationsBlocked', 'ExecutableViolationsAudited', 'RulesViolatedManually'
* **numberOfVms**: int: The number of machines in the group that have this alert

## PathRecommendation
### Properties
* **action**: 'Add' | 'Recommended' | 'Remove': Possible values include: 'Recommended', 'Add', 'Remove'
* **common**: bool: Whether the application is commonly run on the machine
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured': Possible values include: 'Configured', 'NotConfigured', 'InProgress', 'Failed', 'NoStatus'
* **fileType**: 'Dll' | 'Exe' | 'Executable' | 'Msi' | 'Script' | 'Unknown': Possible values include: 'Exe', 'Dll', 'Msi', 'Script', 'Executable', 'Unknown'
* **path**: string: The full path of the file, or an identifier of the application
* **publisherInfo**: [PublisherInfo](#publisherinfo): Represents the publisher information of a process/rule
* **type**: 'BinarySignature' | 'File' | 'FileHash' | 'ProductSignature' | 'PublisherSignature' | 'VersionAndAboveSignature': Possible values include: 'File', 'FileHash', 'PublisherSignature', 'ProductSignature', 'BinarySignature', 'VersionAndAboveSignature'
* **usernames**: [UserRecommendation](#userrecommendation)[]:
* **userSids**: string[]:

## PublisherInfo
### Properties
* **binaryName**: string: The "OriginalName" field taken from the file's version resource
* **productName**: string: The product name taken from the file's version resource
* **publisherName**: string: The Subject field of the x.509 certificate used to sign the code, using the following fields -  O = Organization, L = Locality, S = State or Province, and C = Country
* **version**: string: The binary file version taken from the file's version resource

## UserRecommendation
### Properties
* **recommendationAction**: 'Add' | 'Recommended' | 'Remove': Possible values include: 'Recommended', 'Add', 'Remove'
* **username**: string: Represents a user that is recommended to be allowed for a certain rule

## ProtectionMode
### Properties
* **exe**: 'Audit' | 'Enforce' | 'None': Possible values include: 'Audit', 'Enforce', 'None'
* **executable**: 'Audit' | 'Enforce' | 'None': Possible values include: 'Audit', 'Enforce', 'None'
* **msi**: 'Audit' | 'Enforce' | 'None': Possible values include: 'Audit', 'Enforce', 'None'
* **script**: 'Audit' | 'Enforce' | 'None': Possible values include: 'Audit', 'Enforce', 'None'

## VmRecommendation
### Properties
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured': Possible values include: 'Configured', 'NotConfigured', 'InProgress', 'Failed', 'NoStatus'
* **enforcementSupport**: 'NotSupported' | 'Supported' | 'Unknown': Possible values include: 'Supported', 'NotSupported', 'Unknown'
* **recommendationAction**: 'Add' | 'Recommended' | 'Remove': Possible values include: 'Recommended', 'Add', 'Remove'
* **resourceId**: string: The full resource id of the machine

## JitNetworkAccessPolicyProperties
### Properties
* **provisioningState**: string (ReadOnly): Gets the provisioning state of the Just-in-Time policy.
* **requests**: [JitNetworkAccessRequest](#jitnetworkaccessrequest)[]:
* **virtualMachines**: [JitNetworkAccessPolicyVirtualMachine](#jitnetworkaccesspolicyvirtualmachine)[] (Required): Configurations for Microsoft.Compute/virtualMachines resource type.

## JitNetworkAccessRequest
### Properties
* **justification**: string: The justification for making the initiate request
* **requestor**: string (Required): The identity of the person who made the request
* **startTimeUtc**: string (Required): The start time of the request in UTC
* **virtualMachines**: [JitNetworkAccessRequestVirtualMachine](#jitnetworkaccessrequestvirtualmachine)[] (Required):

## JitNetworkAccessRequestVirtualMachine
### Properties
* **id**: string (Required): Resource ID of the virtual machine that is linked to this policy
* **ports**: [JitNetworkAccessRequestPort](#jitnetworkaccessrequestport)[] (Required): The ports that were opened for the virtual machine

## JitNetworkAccessRequestPort
### Properties
* **allowedSourceAddressPrefix**: string: Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
* **allowedSourceAddressPrefixes**: string[]: Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
* **endTimeUtc**: string (Required): The date & time at which the request ends in UTC
* **mappedPort**: int: The port which is mapped to this port's `number` in the Azure Firewall, if applicable
* **number**: int (Required):
* **status**: 'Initiated' | 'Revoked' (Required): The status of the port. Possible values include: 'Revoked', 'Initiated'
* **statusReason**: 'Expired' | 'NewerRequestInitiated' | 'UserRequested' (Required): A description of why the `status` has its value. Possible values include: 'Expired', 'UserRequested', 'NewerRequestInitiated'

## JitNetworkAccessPolicyVirtualMachine
### Properties
* **id**: string (Required): Resource ID of the virtual machine that is linked to this policy
* **ports**: [JitNetworkAccessPortRule](#jitnetworkaccessportrule)[] (Required): Port configurations for the virtual machine
* **publicIpAddress**: string: Public IP address of the Azure Firewall that is linked to this policy, if applicable

## JitNetworkAccessPortRule
### Properties
* **allowedSourceAddressPrefix**: string: Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
* **allowedSourceAddressPrefixes**: string[]: Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
* **maxRequestAccessDuration**: string (Required): Maximum duration requests can be made for. In ISO 8601 duration format. Minimum 5 minutes, maximum 1 day
* **number**: int (Required):
* **protocol**: '*' | 'TCP' | 'UDP' (Required): Possible values include: 'TCP', 'UDP', 'All'

## ServerVulnerabilityAssessmentProperties
### Properties
* **provisioningState**: 'Canceled' | 'Deprovisioning' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly): The provisioningState of the vulnerability assessment capability on the VM. Possible values include: 'Succeeded', 'Failed', 'Canceled', 'Provisioning', 'Deprovisioning'

