# Microsoft.Solutions @ 2019-07-01

## Resource Microsoft.Solutions/applicationDefinitions@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationDefinitionProperties (Required)
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Solutions/applicationDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Solutions/applications@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: string (Required)
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: Plan
* **properties**: ApplicationProperties (Required)
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Solutions/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Solutions/jitRequests@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: JitRequestProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Solutions/jitRequests' (ReadOnly, DeployTimeConstant)

## ApplicationDefinitionProperties
### Properties
* **artifacts**: ApplicationDefinitionArtifact[]
* **authorizations**: ApplicationAuthorization[]
* **createUiDefinition**: any
* **deploymentPolicy**: ApplicationDeploymentPolicy
* **description**: string
* **displayName**: string
* **isEnabled**: bool
* **lockingPolicy**: ApplicationPackageLockingPolicyDefinition
* **lockLevel**: 'CanNotDelete' | 'None' | 'ReadOnly' (Required)
* **mainTemplate**: any
* **managementPolicy**: ApplicationManagementPolicy
* **notificationPolicy**: ApplicationNotificationPolicy
* **packageFileUri**: string
* **policies**: ApplicationPolicy[]

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
* **notificationEndpoints**: ApplicationNotificationEndpoint[] (Required)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,UserAssignedResourceIdentity>

## Dictionary<string,UserAssignedResourceIdentity>
### Additional Properties
* **Additional Properties Type**: userAssignedResourceIdentity

## userAssignedResourceIdentity
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
* **artifacts**: ApplicationArtifact[] (ReadOnly)
* **authorizations**: ApplicationAuthorization[] (ReadOnly)
* **billingDetails**: ApplicationBillingDetailsDefinition (ReadOnly)
* **createdBy**: ApplicationClientDetails (ReadOnly)
* **customerSupport**: ApplicationPackageContact (ReadOnly)
* **jitAccessPolicy**: ApplicationJitAccessPolicy
* **managedResourceGroupId**: string
* **managementMode**: 'Managed' | 'NotSpecified' | 'Unmanaged' (ReadOnly)
* **outputs**: any (ReadOnly)
* **parameters**: any
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **publisherTenantId**: string (ReadOnly)
* **supportUrls**: ApplicationPackageSupportUrls (ReadOnly)
* **updatedBy**: ApplicationClientDetails (ReadOnly)

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
* **jitApprovers**: JitApproverDefinition[]
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## JitRequestProperties
### Properties
* **applicationResourceId**: string (Required)
* **createdBy**: ApplicationClientDetails (ReadOnly)
* **jitAuthorizationPolicies**: JitAuthorizationPolicies[] (Required)
* **jitRequestState**: 'Approved' | 'Canceled' | 'Denied' | 'Expired' | 'Failed' | 'NotSpecified' | 'Pending' | 'Timeout' (ReadOnly)
* **jitSchedulingPolicy**: JitSchedulingPolicy (Required)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **publisherTenantId**: string (ReadOnly)
* **updatedBy**: ApplicationClientDetails (ReadOnly)

## JitAuthorizationPolicies
### Properties
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)

## JitSchedulingPolicy
### Properties
* **duration**: string (Required)
* **startTime**: string (Required)
* **type**: 'NotSpecified' | 'Once' | 'Recurring' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

