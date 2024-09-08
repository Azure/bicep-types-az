# Microsoft.Security @ 2015-06-01-preview

## Resource Microsoft.Security/locations@2015-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (ReadOnly): An empty set of properties
* **type**: 'Microsoft.Security/locations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/alerts@2015-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2015-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): describes security alert properties.
* **type**: 'Microsoft.Security/locations/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/allowedConnections@2015-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: 'External' | 'Internal' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AllowedConnectionsResourceProperties](#allowedconnectionsresourceproperties) (ReadOnly): Describes the allowed traffic between Azure resources
* **type**: 'Microsoft.Security/locations/allowedConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/discoveredSecuritySolutions@2015-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiscoveredSecuritySolutionProperties](#discoveredsecuritysolutionproperties) (ReadOnly)
* **type**: 'Microsoft.Security/locations/discoveredSecuritySolutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/ExternalSecuritySolutions@2015-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'AAD' | 'ATA' | 'CEF' | string (ReadOnly): The kind of the external solution
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Security/locations/ExternalSecuritySolutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/jitNetworkAccessPolicies@2015-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of the resource
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JitNetworkAccessPolicyProperties](#jitnetworkaccesspolicyproperties) (Required)
* **type**: 'Microsoft.Security/locations/jitNetworkAccessPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/tasks@2015-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2015-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityTaskProperties](#securitytaskproperties) (ReadOnly): Describes properties of a task.
* **type**: 'Microsoft.Security/locations/tasks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/topologies@2015-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopologyResourceProperties](#topologyresourceproperties) (ReadOnly)
* **type**: 'Microsoft.Security/locations/topologies' (ReadOnly, DeployTimeConstant): The resource type

## AlertConfidenceReason
### Properties
* **reason**: string (ReadOnly): description of the confidence reason
* **type**: string (ReadOnly): Type of confidence factor

## AlertEntity
### Properties
* **type**: string (ReadOnly): Type of entity
### Additional Properties
* **Additional Properties Type**: any

## AlertExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AlertProperties
### Properties
* **actionTaken**: string (ReadOnly): The action that was taken as a response to the alert (Active, Blocked etc.)
* **alertDisplayName**: string (ReadOnly): Display name of the alert type
* **alertName**: string (ReadOnly): Name of the alert type
* **associatedResource**: string (ReadOnly): Azure resource ID of the associated resource
* **canBeInvestigated**: bool (ReadOnly): Whether this alert can be investigated with Azure Security Center
* **compromisedEntity**: string (ReadOnly): The entity that the incident happened on
* **confidenceReasons**: [AlertConfidenceReason](#alertconfidencereason)[]: reasons the alert got the confidenceScore value
* **confidenceScore**: int {minValue: 0, maxValue: 1} (ReadOnly): level of confidence we have on the alert
* **correlationKey**: string (ReadOnly): Alerts with the same CorrelationKey will be grouped together in Ibiza.
* **description**: string (ReadOnly): Description of the incident and what it means
* **detectedTimeUtc**: string (ReadOnly): The time the incident was detected by the vendor
* **entities**: [AlertEntity](#alertentity)[]: objects that are related to this alerts
* **extendedProperties**: [AlertExtendedProperties](#alertextendedproperties): Changing set of properties depending on the alert type.
* **instanceId**: string (ReadOnly): Instance ID of the alert.
* **isIncident**: bool (ReadOnly): Whether this alert is for incident type or not (otherwise - single alert)
* **remediationSteps**: string (ReadOnly): Recommended steps to reradiate the incident
* **reportedSeverity**: 'High' | 'Information' | 'Low' | 'Silent' | string (ReadOnly): Estimated severity of this alert
* **reportedTimeUtc**: string (ReadOnly): The time the incident was reported to Microsoft.Security in UTC
* **state**: string (ReadOnly): State of the alert (Active, Dismissed etc.)
* **subscriptionId**: string (ReadOnly): Azure subscription ID of the resource that had the security alert or the subscription ID of the workspace that this resource reports to
* **systemSource**: string (ReadOnly): The type of the alerted resource (Azure, Non-Azure)
* **vendorName**: string (ReadOnly): Name of the vendor that discovered the incident
* **workspaceArmId**: string (ReadOnly): Azure resource ID of the workspace that the alert was reported to.

## AllowedConnectionsResourceProperties
### Properties
* **calculatedDateTime**: string (ReadOnly): The UTC time on which the allowed connections resource was calculated
* **connectableResources**: [ConnectableResource](#connectableresource)[] (ReadOnly): List of connectable resources

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
* **number**: int {minValue: 0, maxValue: 65535} (Required)
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
* **number**: int {minValue: 0, maxValue: 65535} (Required)
* **status**: 'Initiated' | 'Revoked' | string (Required): The status of the port
* **statusReason**: 'Expired' | 'NewerRequestInitiated' | 'UserRequested' | string (Required): A description of why the `status` has its value

## JitNetworkAccessRequestVirtualMachine
### Properties
* **id**: string (Required): Resource ID of the virtual machine that is linked to this policy
* **ports**: [JitNetworkAccessRequestPort](#jitnetworkaccessrequestport)[] (Required): The ports that were opened for the virtual machine

## SecurityTaskParameters
### Properties
* **name**: string (ReadOnly): Name of the task type
### Additional Properties
* **Additional Properties Type**: any

## SecurityTaskProperties
### Properties
* **creationTimeUtc**: string (ReadOnly): The time this task was discovered in UTC
* **lastStateChangeTimeUtc**: string (ReadOnly): The time this task's details were last changed in UTC
* **securityTaskParameters**: [SecurityTaskParameters](#securitytaskparameters): Changing set of properties, depending on the task type that is derived from the name field
* **state**: string (ReadOnly): State of the task (Active, Resolved etc.)
* **subState**: string (ReadOnly): Additional data on the state of the task

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

