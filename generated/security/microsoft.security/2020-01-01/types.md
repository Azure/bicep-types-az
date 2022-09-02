# Microsoft.Security @ 2020-01-01

## Resource Microsoft.Security/adaptiveNetworkHardenings@2020-01-01 (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdaptiveNetworkHardeningProperties](#adaptivenetworkhardeningproperties) (ReadOnly): Properties of the Adaptive Network Hardening resource
* **type**: 'Microsoft.Security/adaptiveNetworkHardenings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/assessmentMetadata@2020-01-01
* **Valid Scope(s)**: Tenant (ReadOnly), Subscription
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

## Resource Microsoft.Security/locations/alerts@2020-01-01 (ReadOnly)
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): describes security alert properties.
* **type**: 'Microsoft.Security/locations/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/allowedConnections@2020-01-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: 'External' | 'Internal' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AllowedConnectionsResourceProperties](#allowedconnectionsresourceproperties) (ReadOnly): Describes the allowed traffic between Azure resources
* **type**: 'Microsoft.Security/locations/allowedConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/applicationWhitelistings@2020-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdaptiveApplicationControlGroupData](#adaptiveapplicationcontrolgroupdata) (Required): Represents a machines group and set of rules to be allowed running on a machine
* **type**: 'Microsoft.Security/locations/applicationWhitelistings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/discoveredSecuritySolutions@2020-01-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiscoveredSecuritySolutionProperties](#discoveredsecuritysolutionproperties) (ReadOnly)
* **type**: 'Microsoft.Security/locations/discoveredSecuritySolutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/ExternalSecuritySolutions@2020-01-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'AAD' | 'ATA' | 'CEF' | string (ReadOnly): The kind of the external solution
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Security/locations/ExternalSecuritySolutions' (ReadOnly, DeployTimeConstant): The resource type

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

## Resource Microsoft.Security/locations/securitySolutions@2020-01-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecuritySolutionProperties](#securitysolutionproperties) (ReadOnly)
* **type**: 'Microsoft.Security/locations/securitySolutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/topologies@2020-01-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopologyResourceProperties](#topologyresourceproperties) (ReadOnly)
* **type**: 'Microsoft.Security/locations/topologies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/secureScores@2020-01-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecureScoreItemProperties](#securescoreitemproperties) (ReadOnly): Secure score item
* **type**: 'Microsoft.Security/secureScores' (ReadOnly, DeployTimeConstant): The resource type

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

## AdaptiveNetworkHardeningProperties
### Properties
* **effectiveNetworkSecurityGroups**: [EffectiveNetworkSecurityGroups](#effectivenetworksecuritygroups)[]: The Network Security Groups effective on the network interfaces of the protected resource
* **rules**: [Rule](#rule)[]: The security rules which are recommended to be effective on the VM
* **rulesCalculationTime**: string: The UTC time on which the rules were calculated

## AlertEntity
### Properties
* **type**: string (ReadOnly): Type of entity
### Additional Properties
* **Additional Properties Type**: any

## AlertExtendedLinks
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AlertExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AlertProperties
### Properties
* **alertDisplayName**: string (ReadOnly): The display name of the alert.
* **alertType**: string (ReadOnly): Unique identifier for the detection logic (all alert instances from the same detection logic will have the same alertType).
* **alertUri**: string (ReadOnly): A direct link to the alert page in Azure Portal.
* **compromisedEntity**: string (ReadOnly): The display name of the resource most related to this alert.
* **correlationKey**: string (ReadOnly): Key for corelating related alerts. Alerts with the same correlation key considered to be related.
* **description**: string (ReadOnly): Description of the suspicious activity that was detected.
* **endTimeUtc**: string (ReadOnly): The UTC time of the last event or activity included in the alert in ISO8601 format.
* **entities**: [AlertEntity](#alertentity)[] (ReadOnly): A list of entities related to the alert.
* **extendedLinks**: [AlertExtendedLinks](#alertextendedlinks)[] (ReadOnly): Links related to the alert
* **extendedProperties**: [AlertExtendedProperties](#alertextendedproperties): Custom properties for the alert.
* **intent**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Exploitation' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Probing' | 'Unknown' | string (ReadOnly): The kill chain related intent behind the alert. For list of supported values, and explanations of Azure Security Center's supported kill chain intents.
* **isIncident**: bool (ReadOnly): This field determines whether the alert is an incident (a compound grouping of several alerts) or a single alert.
* **processingEndTimeUtc**: string (ReadOnly): The UTC processing end time of the alert in ISO8601 format.
* **productComponentName**: string (ReadOnly): The name of Azure Security Center pricing tier which powering this alert. Learn more: https://docs.microsoft.com/en-us/azure/security-center/security-center-pricing
* **productName**: string (ReadOnly): The name of the product which published this alert (Azure Security Center, Azure ATP, Microsoft Defender ATP, O365 ATP, MCAS, and so on).
* **remediationSteps**: string[] (ReadOnly): Manual action items to take to remediate the alert.
* **resourceIdentifiers**: [ResourceIdentifier](#resourceidentifier)[] (ReadOnly): The resource identifiers that can be used to direct the alert to the right product exposure group (tenant, workspace, subscription etc.). There can be multiple identifiers of different type per alert.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The risk level of the threat that was detected. Learn more: https://docs.microsoft.com/en-us/azure/security-center/security-center-alerts-overview#how-are-alerts-classified.
* **startTimeUtc**: string (ReadOnly): The UTC time of the first event or activity included in the alert in ISO8601 format.
* **status**: 'Active' | 'Dismissed' | 'Resolved' | string (ReadOnly): The life cycle status of the alert.
* **systemAlertId**: string (ReadOnly): Unique identifier for the alert.
* **timeGeneratedUtc**: string (ReadOnly): The UTC time the alert was generated in ISO8601 format.
* **vendorName**: string (ReadOnly): The name of the vendor that raises the alert.

## AllowedConnectionsResourceProperties
### Properties
* **calculatedDateTime**: string (ReadOnly): The UTC time on which the allowed connections resource was calculated
* **connectableResources**: [ConnectableResource](#connectableresource)[] (ReadOnly): List of connectable resources

## AssessmentLinks
### Properties
* **azurePortalUri**: string (ReadOnly): Link to assessment in Azure Portal

## AssessmentStatus
### Properties
* **cause**: string: Programmatic code for the cause of the assessment status
* **code**: 'Healthy' | 'NotApplicable' | 'Unhealthy' | string (Required): Programmatic code for the status of the assessment
* **description**: string: Human readable description of the assessment status

## ConnectableResource
### Properties
* **id**: string (ReadOnly): The Azure resource id
* **inboundConnectedResources**: [ConnectedResource](#connectedresource)[] (ReadOnly): The list of Azure resources that the resource has inbound allowed connection from
* **outboundConnectedResources**: [ConnectedResource](#connectedresource)[] (ReadOnly): The list of Azure resources that the resource has outbound allowed connection to

## ConnectedResource
### Properties
* **connectedResourceId**: string (ReadOnly): The Azure resource id of the connected resource
* **tcpPorts**: string (ReadOnly): The allowed tcp ports
* **udpPorts**: string (ReadOnly): The allowed udp ports

## DiscoveredSecuritySolutionProperties
### Properties
* **offer**: string (Required): The security solutions' image offer
* **publisher**: string (Required): The security solutions' image publisher
* **securityFamily**: 'Ngfw' | 'SaasWaf' | 'Va' | 'Waf' | string (Required): The security family of the discovered solution
* **sku**: string (Required): The security solutions' image sku

## EffectiveNetworkSecurityGroups
### Properties
* **networkInterface**: string: The Azure resource ID of the network interface
* **networkSecurityGroups**: string[]: The Network Security Groups effective on the network interface

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
* **machineName**: string (Required): The name of the machine
* **serverName**: string (Required): The Sql server name installed on the machine
* **source**: 'OnPremiseSql' (Required): The platform where the assessed resource resides
* **sourceComputerId**: string (Required): The oms agent Id installed on the machine
* **vmuuid**: string (Required): The unique Id of the machine
* **workspaceId**: string (Required): Azure resource Id of the workspace the machine is attached to


## ResourceIdentifier
* **Discriminator**: type

### Base Properties

### AzureResourceIdentifier
#### Properties
* **azureResourceId**: string (ReadOnly): ARM resource identifier for the cloud resource being alerted on
* **type**: 'AzureResource' (Required): There can be multiple identifiers of different type per alert, this field specify the identifier type.

### LogAnalyticsIdentifier
#### Properties
* **agentId**: string (ReadOnly): (optional) The LogAnalytics agent id reporting the event that this alert is based on.
* **type**: 'LogAnalytics' (Required): There can be multiple identifiers of different type per alert, this field specify the identifier type.
* **workspaceId**: string (ReadOnly): The LogAnalytics workspace id that stores this alert.
* **workspaceResourceGroup**: string (ReadOnly): The azure resource group for the LogAnalytics workspace storing this alert
* **workspaceSubscriptionId**: string (ReadOnly): The azure subscription id for the LogAnalytics workspace storing this alert.


## Rule
### Properties
* **destinationPort**: int: The rule's destination port
* **direction**: 'Inbound' | 'Outbound' | string: The rule's direction
* **ipAddresses**: string[]: The remote IP addresses that should be able to communicate with the Azure resource on the rule's destination port and protocol
* **name**: string: The name of the rule
* **protocols**: 'TCP' | 'UDP' | string[]: The rule's transport protocols

## ScoreDetails
### Properties
* **current**: int (ReadOnly): Current score
* **max**: int (ReadOnly): Maximum score available
* **percentage**: int (ReadOnly): Ratio of the current score divided by the maximum. Rounded to 4 digits after the decimal point

## SecureScoreItemProperties
### Properties
* **displayName**: string (ReadOnly): The initiative’s name
* **score**: [ScoreDetails](#scoredetails) (ReadOnly): score object
* **weight**: int (ReadOnly): The relative weight for each subscription. Used when calculating an aggregated secure score for multiple subscriptions.

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

## SecuritySolutionProperties
### Properties
* **protectionStatus**: string (Required): The security solutions' status
* **provisioningState**: 'Failed' | 'Succeeded' | 'Updating' | string (Required): The security family provisioning State
* **securityFamily**: 'Ngfw' | 'SaasWaf' | 'Va' | 'Waf' | string (Required): The security family of the security solution
* **template**: string (Required): The security solutions' template

## ServerVulnerabilityAssessmentProperties
### Properties
* **provisioningState**: 'Canceled' | 'Deprovisioning' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioningState of the vulnerability assessment capability on the VM

## TopologyResourceProperties
### Properties
* **calculatedDateTime**: string (ReadOnly): The UTC time on which the topology was calculated
* **topologyResources**: [TopologySingleResource](#topologysingleresource)[] (ReadOnly): Azure resources which are part of this topology resource

## TopologySingleResource
### Properties
* **children**: [TopologySingleResourceChild](#topologysingleresourcechild)[] (ReadOnly): Azure resources connected to this resource which are in lower level in the topology view
* **location**: string (ReadOnly): The location of this resource
* **networkZones**: string (ReadOnly): Indicates the resource connectivity level to the Internet (InternetFacing, Internal ,etc.)
* **parents**: [TopologySingleResourceParent](#topologysingleresourceparent)[] (ReadOnly): Azure resources connected to this resource which are in higher level in the topology view
* **recommendationsExist**: bool (ReadOnly): Indicates if the resource has security recommendations
* **resourceId**: string (ReadOnly): Azure resource id
* **severity**: string (ReadOnly): The security severity of the resource
* **topologyScore**: int (ReadOnly): Score of the resource based on its security severity

## TopologySingleResourceChild
### Properties
* **resourceId**: string (ReadOnly): Azure resource id which serves as child resource in topology view

## TopologySingleResourceParent
### Properties
* **resourceId**: string (ReadOnly): Azure resource id which serves as parent resource in topology view

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

