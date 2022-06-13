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
* **properties**: [JitNetworkAccessPolicyProperties](#jitnetworkaccesspolicyproperties) (Required)
* **type**: 'Microsoft.Security/locations/jitNetworkAccessPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/serverVulnerabilityAssessments@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ServerVulnerabilityAssessmentProperties](#servervulnerabilityassessmentproperties) (ReadOnly): describes ServerVulnerabilityAssessment properties.
* **type**: 'Microsoft.Security/serverVulnerabilityAssessments' (ReadOnly, DeployTimeConstant): The resource type

## AdaptiveApplicationControlGroupData
### Properties
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured' | string (ReadOnly): The configuration status of the machines group or machine or rule
* **enforcementMode**: 'Audit' | 'Enforce' | 'None' | string: The application control policy enforcement/protection mode of the machine group
* **issues**: [AdaptiveApplicationControlIssueSummary](#adaptiveapplicationcontrolissuesummary)[] (ReadOnly)
* **pathRecommendations**: [PathRecommendation](#pathrecommendation)[]
* **protectionMode**: [ProtectionMode](#protectionmode): The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
* **recommendationStatus**: 'NoStatus' | 'NotAvailable' | 'NotRecommended' | 'Recommended' | string (ReadOnly): The initial recommendation status of the machine group or machine
* **sourceSystem**: 'Azure_AppLocker' | 'Azure_AuditD' | 'NonAzure_AppLocker' | 'NonAzure_AuditD' | 'None' | string (ReadOnly): The source type of the machine group
* **vmRecommendations**: [VmRecommendation](#vmrecommendation)[]

## AdaptiveApplicationControlIssueSummary
### Properties
* **issue**: 'ExecutableViolationsAudited' | 'MsiAndScriptViolationsAudited' | 'MsiAndScriptViolationsBlocked' | 'RulesViolatedManually' | 'ViolationsAudited' | 'ViolationsBlocked' | string: An alert that machines within a group can have
* **numberOfVms**: int: The number of machines in the group that have this alert

## AssessmentLinks
### Properties
* **azurePortalUri**: string (ReadOnly): Link to assessment in Azure Portal

## AssessmentStatus
### Properties
* **cause**: string: Programmatic code for the cause of the assessment status
* **code**: 'Healthy' | 'NotApplicable' | 'Unhealthy' | string (Required): Programmatic code for the status of the assessment
* **description**: string: Human readable description of the assessment status

## JitNetworkAccessPolicyProperties
### Properties
* **provisioningState**: string (ReadOnly): Gets the provisioning state of the Just-in-Time policy.
* **requests**: [JitNetworkAccessRequest](#jitnetworkaccessrequest)[]
* **virtualMachines**: [JitNetworkAccessPolicyVirtualMachine](#jitnetworkaccesspolicyvirtualmachine)[] (Required): Configurations for Microsoft.Compute/virtualMachines resource type.

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
* **number**: int (Required)
* **protocol**: '*' | 'TCP' | 'UDP' | string (Required)

## JitNetworkAccessRequest
### Properties
* **justification**: string: The justification for making the initiate request
* **requestor**: string (Required): The identity of the person who made the request
* **startTimeUtc**: string (Required): The start time of the request in UTC
* **virtualMachines**: [JitNetworkAccessRequestVirtualMachine](#jitnetworkaccessrequestvirtualmachine)[] (Required)

## JitNetworkAccessRequestPort
### Properties
* **allowedSourceAddressPrefix**: string: Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
* **allowedSourceAddressPrefixes**: string[]: Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
* **endTimeUtc**: string (Required): The date & time at which the request ends in UTC
* **mappedPort**: int: The port which is mapped to this port's `number` in the Azure Firewall, if applicable
* **number**: int (Required)
* **status**: 'Initiated' | 'Revoked' | string (Required): The status of the port
* **statusReason**: 'Expired' | 'NewerRequestInitiated' | 'UserRequested' | string (Required): A description of why the `status` has its value

## JitNetworkAccessRequestVirtualMachine
### Properties
* **id**: string (Required): Resource ID of the virtual machine that is linked to this policy
* **ports**: [JitNetworkAccessRequestPort](#jitnetworkaccessrequestport)[] (Required): The ports that were opened for the virtual machine

## PathRecommendation
### Properties
* **action**: 'Add' | 'Recommended' | 'Remove' | string: The recommendation action of the machine or rule
* **common**: bool: Whether the application is commonly run on the machine
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured' | string: The configuration status of the machines group or machine or rule
* **fileType**: 'Dll' | 'Exe' | 'Executable' | 'Msi' | 'Script' | 'Unknown' | string: The type of the file (for Linux files - Executable is used)
* **path**: string: The full path of the file, or an identifier of the application
* **publisherInfo**: [PublisherInfo](#publisherinfo): Represents the publisher information of a process/rule
* **type**: 'BinarySignature' | 'File' | 'FileHash' | 'ProductSignature' | 'PublisherSignature' | 'VersionAndAboveSignature' | string: The type of the rule to be allowed
* **usernames**: [UserRecommendation](#userrecommendation)[]
* **userSids**: string[]

## ProtectionMode
### Properties
* **exe**: 'Audit' | 'Enforce' | 'None' | string: The application control policy enforcement/protection mode of the machine group
* **executable**: 'Audit' | 'Enforce' | 'None' | string: The application control policy enforcement/protection mode of the machine group
* **msi**: 'Audit' | 'Enforce' | 'None' | string: The application control policy enforcement/protection mode of the machine group
* **script**: 'Audit' | 'Enforce' | 'None' | string: The application control policy enforcement/protection mode of the machine group

## PublisherInfo
### Properties
* **binaryName**: string: The "OriginalName" field taken from the file's version resource
* **productName**: string: The product name taken from the file's version resource
* **publisherName**: string: The Subject field of the x.509 certificate used to sign the code, using the following fields -  O = Organization, L = Locality, S = State or Province, and C = Country
* **version**: string: The binary file version taken from the file's version resource

## ResourceDetails
* **Discriminator**: source

### Base Properties
### AzureResourceDetails
#### Properties
* **id**: string (ReadOnly): Azure resource Id of the assessed resource
* **source**: 'Azure' (Required): The platform where the assessed resource resides

### OnPremiseSqlResourceDetails
#### Properties
* **databaseName**: string (Required): The Sql database name installed on the machine
* **serverName**: string (Required): The Sql server name installed on the machine
* **source**: 'OnPremiseSql' (Required): The platform where the assessed resource resides


## SecurityAssessmentMetadataPartnerData
### Properties
* **partnerName**: string (Required): Name of the company of the partner
* **productName**: string: Name of the product of the partner that created the assessment
* **secret**: string (Required): Secret to authenticate the partner and verify it created the assessment - write only

## SecurityAssessmentMetadataProperties
### Properties
* **assessmentType**: 'BuiltIn' | 'CustomPolicy' | 'CustomerManaged' | 'VerifiedPartner' | string (Required): BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
* **categories**: 'Compute' | 'Data' | 'IdentityAndAccess' | 'IoT' | 'Networking' | string[]
* **description**: string: Human readable description of the assessment
* **displayName**: string (Required): User friendly display name of the assessment
* **implementationEffort**: 'High' | 'Low' | 'Moderate' | string: The implementation effort required to remediate this assessment
* **partnerData**: [SecurityAssessmentMetadataPartnerData](#securityassessmentmetadatapartnerdata): Describes the partner that created the assessment
* **policyDefinitionId**: string (ReadOnly): Azure resource ID of the policy definition that turns this assessment calculation on
* **preview**: bool: True if this assessment is in preview release status
* **remediationDescription**: string: Human readable description of what you should do to mitigate this security issue
* **severity**: 'High' | 'Low' | 'Medium' | string (Required): The severity level of the assessment
* **threats**: 'accountBreach' | 'dataExfiltration' | 'dataSpillage' | 'denialOfService' | 'elevationOfPrivilege' | 'maliciousInsider' | 'missingCoverage' | 'threatResistance' | string[]
* **userImpact**: 'High' | 'Low' | 'Moderate' | string: The user impact of the assessment

## SecurityAssessmentPartnerData
### Properties
* **partnerName**: string (Required): Name of the company of the partner
* **secret**: string (Required): secret to authenticate the partner - write only

## SecurityAssessmentProperties
### Properties
* **additionalData**: [SecurityAssessmentPropertiesAdditionalData](#securityassessmentpropertiesadditionaldata): Additional data regarding the assessment
* **displayName**: string (ReadOnly): User friendly display name of the assessment
* **links**: [AssessmentLinks](#assessmentlinks) (ReadOnly): Links relevant to the assessment
* **metadata**: [SecurityAssessmentMetadataProperties](#securityassessmentmetadataproperties): Describes properties of an assessment metadata.
* **partnersData**: [SecurityAssessmentPartnerData](#securityassessmentpartnerdata): Data regarding 3rd party partner integration
* **resourceDetails**: [ResourceDetails](#resourcedetails) (Required): Details of the resource that was assessed
* **status**: [AssessmentStatus](#assessmentstatus) (Required): The result of the assessment

## SecurityAssessmentPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerVulnerabilityAssessmentProperties
### Properties
* **provisioningState**: 'Canceled' | 'Deprovisioning' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioningState of the vulnerability assessment capability on the VM

## UserRecommendation
### Properties
* **recommendationAction**: 'Add' | 'Recommended' | 'Remove' | string: The recommendation action of the machine or rule
* **username**: string: Represents a user that is recommended to be allowed for a certain rule

## VmRecommendation
### Properties
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured' | string: The configuration status of the machines group or machine or rule
* **enforcementSupport**: 'NotSupported' | 'Supported' | 'Unknown' | string: The machine supportability of Enforce feature
* **recommendationAction**: 'Add' | 'Recommended' | 'Remove' | string: The recommendation action of the machine or rule
* **resourceId**: string: The full resource id of the machine

