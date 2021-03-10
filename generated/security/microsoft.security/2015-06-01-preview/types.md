# Microsoft.Security @ 2015-06-01-preview

## Resource Microsoft.Security/locations/applicationWhitelistings@2015-06-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-06-01-preview' (ReadOnly, DeployTimeConstant)
* **enforcementMode**: 'Audit' | 'Enforce' | 'None' (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **pathRecommendations**: [PathRecommendation](#pathrecommendation)[] (WriteOnly)
* **properties**: [AppWhitelistingGroupData](#appwhitelistinggroupdata) (ReadOnly)
* **protectionMode**: [ProtectionMode](#protectionmode) (WriteOnly)
* **type**: 'Microsoft.Security/locations/applicationWhitelistings' (ReadOnly, DeployTimeConstant)
* **vmRecommendations**: [VmRecommendation](#vmrecommendation)[] (WriteOnly)

## Resource Microsoft.Security/locations/jitNetworkAccessPolicies@2015-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JitNetworkAccessPolicyProperties](#jitnetworkaccesspolicyproperties) (Required)
* **type**: 'Microsoft.Security/locations/jitNetworkAccessPolicies' (ReadOnly, DeployTimeConstant)

## PathRecommendation
### Properties
* **action**: 'Add' | 'Recommended' | 'Remove' (WriteOnly)
* **common**: bool (WriteOnly)
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured' (WriteOnly)
* **fileType**: 'Dll' | 'Exe' | 'Executable' | 'Msi' | 'Script' | 'Unknown' (WriteOnly)
* **path**: string (WriteOnly)
* **publisherInfo**: [PublisherInfo](#publisherinfo) (WriteOnly)
* **type**: 'BinarySignature' | 'File' | 'FileHash' | 'ProductSignature' | 'PublisherSignature' | 'VersionAndAboveSignature' (WriteOnly)
* **usernames**: [UserRecommendation](#userrecommendation)[] (WriteOnly)
* **userSids**: string[] (WriteOnly)

## PublisherInfo
### Properties
* **binaryName**: string (WriteOnly)
* **productName**: string (WriteOnly)
* **publisherName**: string (WriteOnly)
* **version**: string (WriteOnly)

## UserRecommendation
### Properties
* **recommendationAction**: 'Add' | 'Recommended' | 'Remove' (WriteOnly)
* **username**: string (WriteOnly)

## AppWhitelistingGroupData
### Properties
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured' (ReadOnly)
* **enforcementMode**: 'Audit' | 'Enforce' | 'None' (ReadOnly)
* **issues**: [AppWhitelistingIssueSummary](#appwhitelistingissuesummary)[] (ReadOnly)
* **pathRecommendations**: [PathRecommendation](#pathrecommendation)[] (ReadOnly)
* **protectionMode**: [ProtectionMode](#protectionmode) (ReadOnly)
* **recommendationStatus**: 'NoStatus' | 'NotAvailable' | 'NotRecommended' | 'Recommended' (ReadOnly)
* **sourceSystem**: 'Azure_AppLocker' | 'Azure_AuditD' | 'NonAzure_AppLocker' | 'NonAzure_AuditD' | 'None' (ReadOnly)
* **vmRecommendations**: [VmRecommendation](#vmrecommendation)[] (ReadOnly)

## AppWhitelistingIssueSummary
### Properties
* **issue**: 'ExecutableViolationsAudited' | 'MsiAndScriptViolationsAudited' | 'MsiAndScriptViolationsBlocked' | 'RulesViolatedManually' | 'ViolationsAudited' | 'ViolationsBlocked' (ReadOnly)
* **numberOfVms**: int (ReadOnly)

## ProtectionMode
### Properties
* **exe**: 'Audit' | 'Enforce' | 'None' (WriteOnly)
* **executable**: 'Audit' | 'Enforce' | 'None' (WriteOnly)
* **msi**: 'Audit' | 'Enforce' | 'None' (WriteOnly)
* **script**: 'Audit' | 'Enforce' | 'None' (WriteOnly)

## VmRecommendation
### Properties
* **configurationStatus**: 'Configured' | 'Failed' | 'InProgress' | 'NoStatus' | 'NotConfigured' (WriteOnly)
* **enforcementSupport**: 'NotSupported' | 'Supported' | 'Unknown' (WriteOnly)
* **recommendationAction**: 'Add' | 'Recommended' | 'Remove' (WriteOnly)
* **resourceId**: string (WriteOnly)

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

