# Microsoft.Solutions @ 2019-07-01

## Resource Microsoft.Solutions/applicationDefinitions@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationDefinitionProperties](#applicationdefinitionproperties) (Required)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Solutions/applicationDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Solutions/applications@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **kind**: string (Required)
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: [Plan](#plan)
* **properties**: [ApplicationProperties](#applicationproperties) (Required)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Solutions/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Solutions/jitRequests@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [JitRequestProperties](#jitrequestproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Solutions/jitRequests' (ReadOnly, DeployTimeConstant)

## ApplicationDefinitionProperties
### Properties
* **artifacts**: [ApplicationDefinitionArtifact](#applicationdefinitionartifact)[]
* **authorizations**: [ApplicationAuthorization](#applicationauthorization)[]
* **createUiDefinition**: any
* **deploymentPolicy**: [ApplicationDeploymentPolicy](#applicationdeploymentpolicy)
* **description**: string
* **displayName**: string
* **isEnabled**: bool
* **lockingPolicy**: [ApplicationPackageLockingPolicyDefinition](#applicationpackagelockingpolicydefinition)
* **lockLevel**: 'CanNotDelete' | 'None' | 'ReadOnly' (Required)
* **mainTemplate**: any
* **managementPolicy**: [ApplicationManagementPolicy](#applicationmanagementpolicy)
* **notificationPolicy**: [ApplicationNotificationPolicy](#applicationnotificationpolicy)
* **packageFileUri**: string
* **policies**: [ApplicationPolicy](#applicationpolicy)[]

## ApplicationDefinitionArtifact
### Properties
* **name**: 'ApplicationResourceTemplate' | 'CreateUiDefinition' | 'MainTemplateParameters' | 'NotSpecified' (Required)
* **type**: 'Custom' | 'NotSpecified' | 'Template' (Required)
* **uri**: string (Required)

## ApplicationAuthorization
### Properties
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)

## ApplicationDeploymentPolicy
### Properties
* **deploymentMode**: 'Complete' | 'Incremental' | 'NotSpecified' (Required)

## ApplicationPackageLockingPolicyDefinition
### Properties
* **allowedActions**: string[]

## ApplicationManagementPolicy
### Properties
* **mode**: 'Managed' | 'NotSpecified' | 'Unmanaged'

## ApplicationNotificationPolicy
### Properties
* **notificationEndpoints**: [ApplicationNotificationEndpoint](#applicationnotificationendpoint)[] (Required)

## ApplicationNotificationEndpoint
### Properties
* **uri**: string (Required)

## ApplicationPolicy
### Properties
* **name**: string
* **parameters**: string
* **policyDefinitionId**: string

## Sku
### Properties
* **capacity**: int
* **family**: string
* **model**: string
* **name**: string (Required)
* **size**: string
* **tier**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities)

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedResourceIdentity](#userassignedresourceidentity)

## UserAssignedResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## Plan
### Properties
* **name**: string (Required)
* **product**: string (Required)
* **promotionCode**: string
* **publisher**: string (Required)
* **version**: string (Required)

## ApplicationProperties
### Properties
* **applicationDefinitionId**: string
* **artifacts**: [ApplicationArtifact](#applicationartifact)[] (ReadOnly)
* **authorizations**: [ApplicationAuthorization](#applicationauthorization)[] (ReadOnly)
* **billingDetails**: [ApplicationBillingDetailsDefinition](#applicationbillingdetailsdefinition) (ReadOnly)
* **createdBy**: [ApplicationClientDetails](#applicationclientdetails) (ReadOnly)
* **customerSupport**: [ApplicationPackageContact](#applicationpackagecontact) (ReadOnly)
* **jitAccessPolicy**: [ApplicationJitAccessPolicy](#applicationjitaccesspolicy)
* **managedResourceGroupId**: string
* **managementMode**: 'Managed' | 'NotSpecified' | 'Unmanaged' (ReadOnly)
* **outputs**: any (ReadOnly)
* **parameters**: any
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **publisherTenantId**: string (ReadOnly)
* **supportUrls**: [ApplicationPackageSupportUrls](#applicationpackagesupporturls) (ReadOnly)
* **updatedBy**: [ApplicationClientDetails](#applicationclientdetails) (ReadOnly)

## ApplicationArtifact
### Properties
* **name**: 'Authorizations' | 'CustomRoleDefinition' | 'NotSpecified' | 'ViewDefinition' (Required)
* **type**: 'Custom' | 'NotSpecified' | 'Template' (Required)
* **uri**: string (Required)

## ApplicationBillingDetailsDefinition
### Properties
* **resourceUsageId**: string

## ApplicationClientDetails
### Properties
* **applicationId**: string
* **oid**: string
* **puid**: string

## ApplicationPackageContact
### Properties
* **contactName**: string
* **email**: string (Required)
* **phone**: string (Required)

## ApplicationJitAccessPolicy
### Properties
* **jitAccessEnabled**: bool (Required)
* **jitApprovalMode**: 'AutoApprove' | 'ManualApprove' | 'NotSpecified'
* **jitApprovers**: [JitApproverDefinition](#jitapproverdefinition)[]
* **maximumJitAccessDuration**: string

## JitApproverDefinition
### Properties
* **displayName**: string
* **id**: string (Required)
* **type**: 'group' | 'user'

## ApplicationPackageSupportUrls
### Properties
* **governmentCloud**: string
* **publicAzure**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JitRequestProperties
### Properties
* **applicationResourceId**: string (Required)
* **createdBy**: [ApplicationClientDetails](#applicationclientdetails) (ReadOnly)
* **jitAuthorizationPolicies**: [JitAuthorizationPolicies](#jitauthorizationpolicies)[] (Required)
* **jitRequestState**: 'Approved' | 'Canceled' | 'Denied' | 'Expired' | 'Failed' | 'NotSpecified' | 'Pending' | 'Timeout' (ReadOnly)
* **jitSchedulingPolicy**: [JitSchedulingPolicy](#jitschedulingpolicy) (Required)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **publisherTenantId**: string (ReadOnly)
* **updatedBy**: [ApplicationClientDetails](#applicationclientdetails) (ReadOnly)

## JitAuthorizationPolicies
### Properties
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)

## JitSchedulingPolicy
### Properties
* **duration**: string (Required)
* **startTime**: string (Required)
* **type**: 'NotSpecified' | 'Once' | 'Recurring' (Required, ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

