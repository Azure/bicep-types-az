# Microsoft.Security @ 2021-06-01

## Resource Microsoft.Security/assessmentMetadata@2021-06-01
* **Valid Scope(s)**: Tenant (ReadOnly), Subscription
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAssessmentMetadataPropertiesResponse](#securityassessmentmetadatapropertiesresponse): Describes properties of an assessment metadata response.
* **type**: 'Microsoft.Security/assessmentMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/assessments@2021-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityAssessmentPropertiesOrSecurityAssessmentPropertiesResponse](#securityassessmentpropertiesorsecurityassessmentpropertiesresponse): Describes properties of an assessment.
* **type**: 'Microsoft.Security/assessments' (ReadOnly, DeployTimeConstant): The resource type

## AssessmentLinks
### Properties
* **azurePortalUri**: string (ReadOnly): Link to assessment in Azure Portal

## AssessmentStatusOrAssessmentStatusResponse
### Properties
* **cause**: string: Programmatic code for the cause of the assessment status
* **code**: 'Healthy' | 'NotApplicable' | 'Unhealthy' | string (Required): Programmatic code for the status of the assessment
* **description**: string: Human readable description of the assessment status
* **firstEvaluationDate**: string (ReadOnly): The time that the assessment was created and first evaluated. Returned as UTC time in ISO 8601 format
* **statusChangeDate**: string (ReadOnly): The time that the status of the assessment last changed. Returned as UTC time in ISO 8601 format

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

## SecurityAssessmentMetadataPropertiesResponse
### Properties
* **assessmentType**: 'BuiltIn' | 'CustomPolicy' | 'CustomerManaged' | 'VerifiedPartner' | string (Required): BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
* **categories**: 'Compute' | 'Data' | 'IdentityAndAccess' | 'IoT' | 'Networking' | string[]
* **description**: string: Human readable description of the assessment
* **displayName**: string (Required): User friendly display name of the assessment
* **implementationEffort**: 'High' | 'Low' | 'Moderate' | string: The implementation effort required to remediate this assessment
* **partnerData**: [SecurityAssessmentMetadataPartnerData](#securityassessmentmetadatapartnerdata): Describes the partner that created the assessment
* **plannedDeprecationDate**: string
* **policyDefinitionId**: string (ReadOnly): Azure resource ID of the policy definition that turns this assessment calculation on
* **preview**: bool: True if this assessment is in preview release status
* **publishDates**: [SecurityAssessmentMetadataPropertiesResponsePublishDates](#securityassessmentmetadatapropertiesresponsepublishdates)
* **remediationDescription**: string: Human readable description of what you should do to mitigate this security issue
* **severity**: 'High' | 'Low' | 'Medium' | string (Required): The severity level of the assessment
* **tactics**: 'Collection' | 'Command and Control' | 'Credential Access' | 'Defense Evasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'Initial Access' | 'Lateral Movement' | 'Persistence' | 'Privilege Escalation' | 'Reconnaissance' | 'Resource Development' | string[]
* **techniques**: 'Abuse Elevation Control Mechanism' | 'Access Token Manipulation' | 'Account Discovery' | 'Account Manipulation' | 'Active Scanning' | 'Application Layer Protocol' | 'Audio Capture' | 'Boot or Logon Autostart Execution' | 'Boot or Logon Initialization Scripts' | 'Brute Force' | 'Cloud Infrastructure Discovery' | 'Cloud Service Dashboard' | 'Cloud Service Discovery' | 'Command and Scripting Interpreter' | 'Compromise Client Software Binary' | 'Compromise Infrastructure' | 'Container and Resource Discovery' | 'Create Account' | 'Create or Modify System Process' | 'Credentials from Password Stores' | 'Data Destruction' | 'Data Encrypted for Impact' | 'Data Manipulation' | 'Data Staged' | 'Data from Cloud Storage Object' | 'Data from Configuration Repository' | 'Data from Information Repositories' | 'Data from Local System' | 'Defacement' | 'Deobfuscate/Decode Files or Information' | 'Disk Wipe' | 'Domain Trust Discovery' | 'Drive-by Compromise' | 'Dynamic Resolution' | 'Endpoint Denial of Service' | 'Event Triggered Execution' | 'Exfiltration Over Alternative Protocol' | 'Exploit Public-Facing Application' | 'Exploitation for Client Execution' | 'Exploitation for Credential Access' | 'Exploitation for Defense Evasion' | 'Exploitation for Privilege Escalation' | 'Exploitation of Remote Services' | 'External Remote Services' | 'Fallback Channels' | 'File and Directory Discovery' | 'File and Directory Permissions Modification' | 'Gather Victim Network Information' | 'Hide Artifacts' | 'Hijack Execution Flow' | 'Impair Defenses' | 'Implant Container Image' | 'Indicator Removal on Host' | 'Indirect Command Execution' | 'Ingress Tool Transfer' | 'Input Capture' | 'Inter-Process Communication' | 'Lateral Tool Transfer' | 'Man-in-the-Middle' | 'Masquerading' | 'Modify Authentication Process' | 'Modify Registry' | 'Network Denial of Service' | 'Network Service Scanning' | 'Network Sniffing' | 'Non-Application Layer Protocol' | 'Non-Standard Port' | 'OS Credential Dumping' | 'Obfuscated Files or Information' | 'Obtain Capabilities' | 'Office Application Startup' | 'Permission Groups Discovery' | 'Phishing' | 'Pre-OS Boot' | 'Process Discovery' | 'Process Injection' | 'Protocol Tunneling' | 'Proxy' | 'Query Registry' | 'Remote Access Software' | 'Remote Service Session Hijacking' | 'Remote Services' | 'Remote System Discovery' | 'Resource Hijacking' | 'SQL Stored Procedures' | 'Scheduled Task/Job' | 'Screen Capture' | 'Search Victim-Owned Websites' | 'Server Software Component' | 'Service Stop' | 'Signed Binary Proxy Execution' | 'Software Deployment Tools' | 'Steal or Forge Kerberos Tickets' | 'Subvert Trust Controls' | 'Supply Chain Compromise' | 'System Information Discovery' | 'Taint Shared Content' | 'Traffic Signaling' | 'Transfer Data to Cloud Account' | 'Trusted Relationship' | 'Unsecured Credentials' | 'User Execution' | 'Valid Accounts' | 'Windows Management Instrumentation' | string[]
* **threats**: 'accountBreach' | 'dataExfiltration' | 'dataSpillage' | 'denialOfService' | 'elevationOfPrivilege' | 'maliciousInsider' | 'missingCoverage' | 'threatResistance' | string[]
* **userImpact**: 'High' | 'Low' | 'Moderate' | string: The user impact of the assessment

## SecurityAssessmentMetadataPropertiesResponsePublishDates
### Properties
* **GA**: string
* **public**: string (Required)

## SecurityAssessmentPartnerData
### Properties
* **partnerName**: string (Required): Name of the company of the partner
* **secret**: string (Required): secret to authenticate the partner - write only

## SecurityAssessmentPropertiesBaseAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecurityAssessmentPropertiesOrSecurityAssessmentPropertiesResponse
### Properties
* **additionalData**: [SecurityAssessmentPropertiesBaseAdditionalData](#securityassessmentpropertiesbaseadditionaldata): Additional data regarding the assessment
* **displayName**: string (ReadOnly): User friendly display name of the assessment
* **links**: [AssessmentLinks](#assessmentlinks) (ReadOnly): Links relevant to the assessment
* **metadata**: [SecurityAssessmentMetadataProperties](#securityassessmentmetadataproperties): Describes properties of an assessment metadata.
* **partnersData**: [SecurityAssessmentPartnerData](#securityassessmentpartnerdata): Data regarding 3rd party partner integration
* **resourceDetails**: [ResourceDetails](#resourcedetails) (Required): Details of the resource that was assessed
* **status**: [AssessmentStatusOrAssessmentStatusResponse](#assessmentstatusorassessmentstatusresponse) (Required): The result of the assessment

