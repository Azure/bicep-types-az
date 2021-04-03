# Microsoft.Security @ 2015-06-01-preview

## Resource Microsoft.Security/locations/applicationWhitelistings@2015-06-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **enforcementMode**: 'Audit' | 'Enforce' | 'None' (WriteOnly): The enforcement mode of the group. Can also be defined per collection type by using ProtectionMode.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **pathRecommendations**: [PathRecommendation](#pathrecommendation)[] (WriteOnly):
* **properties**: [AppWhitelistingGroupData](#appwhitelistinggroupdata) (ReadOnly): Represents a VM/server group and set of rules that are Recommended by Azure Security Center to be allowed
* **protectionMode**: [ProtectionMode](#protectionmode) (WriteOnly): The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
* **type**: 'Microsoft.Security/locations/applicationWhitelistings' (ReadOnly, DeployTimeConstant): The resource type
* **vmRecommendations**: [VmRecommendation](#vmrecommendation)[] (WriteOnly):

## Resource Microsoft.Security/locations/jitNetworkAccessPolicies@2015-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of the resource
* **location**: string (ReadOnly): Location where the resource is stored
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JitNetworkAccessPolicyProperties](#jitnetworkaccesspolicyproperties) (Required):
* **type**: 'Microsoft.Security/locations/jitNetworkAccessPolicies' (ReadOnly, DeployTimeConstant): The resource type

## PathRecommendation
### Properties
* **action**: 'Add' | 'Recommended' | 'Remove' (WriteOnly):
* **common**: bool (WriteOnly): Whether the path is commonly run on the machine
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured' (WriteOnly):
* **fileType**: 'Dll' | 'Exe' | 'Executable' | 'Msi' | 'Script' | 'Unknown' (WriteOnly):
* **path**: string (WriteOnly): The full path to whitelist
* **publisherInfo**: [PublisherInfo](#publisherinfo) (WriteOnly): Represents the publisher information of a process/rule
* **type**: 'BinarySignature' | 'File' | 'FileHash' | 'ProductSignature' | 'PublisherSignature' | 'VersionAndAboveSignature' (WriteOnly):
* **usernames**: [UserRecommendation](#userrecommendation)[] (WriteOnly):
* **userSids**: string[] (WriteOnly):

## PublisherInfo
### Properties
* **binaryName**: string (WriteOnly): The "OriginalName" field taken from the file's version resource
* **productName**: string (WriteOnly): The product name taken from the file's version resource
* **publisherName**: string (WriteOnly): The Subject field of the x.509 certificate used to sign the code, using the following fields -  O = Organization, L = Locality, S = State or Province, and C = Country
* **version**: string (WriteOnly): The binary file version taken from the file's version resource

## UserRecommendation
### Properties
* **recommendationAction**: 'Add' | 'Recommended' | 'Remove' (WriteOnly):
* **username**: string (WriteOnly): Represents a user that is recommended to be allowed for a certain rule

## AppWhitelistingGroupData
### Properties
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured' (ReadOnly):
* **enforcementMode**: 'Audit' | 'Enforce' | 'None' (ReadOnly):
* **issues**: [AppWhitelistingIssueSummary](#appwhitelistingissuesummary)[] (ReadOnly):
* **pathRecommendations**: [PathRecommendation](#pathrecommendation)[] (ReadOnly):
* **protectionMode**: [ProtectionMode](#protectionmode) (ReadOnly): The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
* **recommendationStatus**: 'NoStatus' | 'NotAvailable' | 'NotRecommended' | 'Recommended' (ReadOnly):
* **sourceSystem**: 'Azure_AppLocker' | 'Azure_AuditD' | 'NonAzure_AppLocker' | 'NonAzure_AuditD' | 'None' (ReadOnly):
* **vmRecommendations**: [VmRecommendation](#vmrecommendation)[] (ReadOnly):

## AppWhitelistingIssueSummary
### Properties
* **issue**: 'ExecutableViolationsAudited' | 'MsiAndScriptViolationsAudited' | 'MsiAndScriptViolationsBlocked' | 'RulesViolatedManually' | 'ViolationsAudited' | 'ViolationsBlocked' (ReadOnly):
* **numberOfVms**: int (ReadOnly): The number of machines in the VM/server group that have this alert

## ProtectionMode
### Properties
* **exe**: 'Audit' | 'Enforce' | 'None' (WriteOnly):
* **executable**: 'Audit' | 'Enforce' | 'None' (WriteOnly):
* **msi**: 'Audit' | 'Enforce' | 'None' (WriteOnly):
* **script**: 'Audit' | 'Enforce' | 'None' (WriteOnly):

## VmRecommendation
### Properties
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured' (WriteOnly):
* **enforcementSupport**: 'NotSupported' | 'Supported' | 'Unknown' (WriteOnly):
* **recommendationAction**: 'Add' | 'Recommended' | 'Remove' (WriteOnly):
* **resourceId**: string (WriteOnly): The full azure resource id of the machine

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
* **status**: 'Initiated' | 'Revoked' (Required): The status of the port.
* **statusReason**: 'Expired' | 'NewerRequestInitiated' | 'UserRequested' (Required): A description of why the `status` has its value.

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
* **protocol**: '*' | 'TCP' | 'UDP' (Required):

