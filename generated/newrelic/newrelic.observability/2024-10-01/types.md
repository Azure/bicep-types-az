# NewRelic.Observability @ 2024-10-01

## Resource NewRelic.Observability/monitors@2024-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'NewRelic.Observability/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource NewRelic.Observability/monitors/monitoredSubscriptions@2024-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionList](#subscriptionlist): The request to update subscriptions needed to be monitored by the NewRelic monitor resource.
* **type**: 'NewRelic.Observability/monitors/monitoredSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource NewRelic.Observability/monitors/tagRules@2024-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'NewRelic.Observability/monitors/tagRules' (ReadOnly, DeployTimeConstant): The resource type

## Function listAppServices (NewRelic.Observability/monitors@2024-10-01)
* **Resource**: NewRelic.Observability/monitors
* **ApiVersion**: 2024-10-01
* **Input**: [AppServicesGetRequest](#appservicesgetrequest)
* **Output**: [AppServicesListResponse](#appserviceslistresponse)

## Function listConnectedPartnerResources (NewRelic.Observability/monitors@2024-10-01)
* **Resource**: NewRelic.Observability/monitors
* **ApiVersion**: 2024-10-01
* **Input**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}
* **Output**: [ConnectedPartnerResourcesListResponse](#connectedpartnerresourceslistresponse)

## Function listHosts (NewRelic.Observability/monitors@2024-10-01)
* **Resource**: NewRelic.Observability/monitors
* **ApiVersion**: 2024-10-01
* **Input**: [HostsGetRequest](#hostsgetrequest)
* **Output**: [VMHostsListResponse](#vmhostslistresponse)

## Function listLinkedResources (NewRelic.Observability/monitors@2024-10-01)
* **Resource**: NewRelic.Observability/monitors
* **ApiVersion**: 2024-10-01
* **Output**: [LinkedResourceListResponse](#linkedresourcelistresponse)

## AccountInfo
### Properties
* **accountId**: string: Account id
* **ingestionKey**: string {sensitive}: ingestion key of account
* **region**: string: Region where New Relic account is present

## AppServiceInfo
### Properties
* **agentStatus**: string: Status of the NewRelic agent installed on the App service.
* **agentVersion**: string: Version of the NewRelic agent installed on the App service.
* **azureResourceId**: string: Azure App service resource ID

## AppServicesGetRequest
### Properties
* **azureResourceIds**: string[]: Azure resource IDs
* **userEmail**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"} (Required): User Email

## AppServicesListResponse
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [AppServiceInfo](#appserviceinfo)[] (Required): The AppServiceInfo items on this page

## ConnectedPartnerResourceProperties
### Properties
* **accountId**: string: NewRelic Account Id
* **accountName**: string: NewRelic account name
* **azureResourceId**: string: The azure resource Id of the deployment.
* **location**: string: The location of the deployment.

## ConnectedPartnerResourcesListFormat
### Properties
* **properties**: [ConnectedPartnerResourceProperties](#connectedpartnerresourceproperties): Connected Partner Resource Properties

## ConnectedPartnerResourcesListResponse
### Properties
* **nextLink**: string: Link to the next set of results, if any.
* **value**: [ConnectedPartnerResourcesListFormat](#connectedpartnerresourceslistformat)[]: Results of a list operation.

## FilteringTag
### Properties
* **action**: 'Exclude' | 'Include' | string: Valid actions for a filtering tag. Exclusion takes priority over inclusion.
* **name**: string: The name (also known as the key) of the tag.
* **value**: string: The value of the tag.

## HostsGetRequest
### Properties
* **userEmail**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"} (Required): User Email
* **vmIds**: string[]: VM resource IDs

## LinkedResource
### Properties
* **id**: string: The ARM id of the linked resource.

## LinkedResourceListResponse
### Properties
* **nextLink**: string: Link to the next set of results, if any.
* **value**: [LinkedResource](#linkedresource)[]: Results of a list operation.

## LogRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured.
If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
* **sendAadLogs**: 'Disabled' | 'Enabled' | string: Flag specifying if AAD logs should be sent for the Monitor resource.
* **sendActivityLogs**: 'Disabled' | 'Enabled' | string: Flag specifying if activity logs from Azure resources should be sent for the Monitor resource.
* **sendSubscriptionLogs**: 'Disabled' | 'Enabled' | string: Flag specifying if subscription logs should be sent for the Monitor resource.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MetricRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing metrics.
* **sendMetrics**: 'Disabled' | 'Enabled' | string: Flag specifying if metrics should be sent for the Monitor resource.
* **userEmail**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: User Email

## MonitoredSubscription
### Properties
* **error**: string: The reason of not monitoring the subscription.
* **status**: 'Active' | 'Deleting' | 'Failed' | 'InProgress' | string: The state of monitoring.
* **subscriptionId**: string: The subscriptionId to be monitored.
* **tagRules**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): The resource-specific properties for this resource.

## MonitoringTagRulesProperties
### Properties
* **logRules**: [LogRules](#logrules): Set of rules for sending logs for the Monitor resource.
* **metricRules**: [MetricRules](#metricrules): Set of rules for sending metrics for the Monitor resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of the resource

## MonitorProperties
### Properties
* **accountCreationSource**: 'LIFTR' | 'NEWRELIC' | string: Source of account creation
* **liftrResourceCategory**: 'MonitorLogs' | 'Unknown' | string (ReadOnly): Liftr resource category
* **liftrResourcePreference**: int (ReadOnly): Liftr resource preference. The priority of the resource.
* **marketplaceSubscriptionId**: string (ReadOnly): Marketplace Subscription Id
* **marketplaceSubscriptionStatus**: 'Active' | 'Suspended' | string (ReadOnly): NewRelic Organization properties of the resource
* **monitoringStatus**: 'Disabled' | 'Enabled' | string (ReadOnly): MonitoringStatus of the resource
* **newRelicAccountProperties**: [NewRelicAccountProperties](#newrelicaccountproperties): MarketplaceSubscriptionStatus of the resource
* **orgCreationSource**: 'LIFTR' | 'NEWRELIC' | string: Source of org creation
* **planData**: [PlanData](#plandata): Plan details
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of the resource
* **saaSAzureSubscriptionStatus**: string: Status of Azure Subscription where Marketplace SaaS is located.
* **subscriptionState**: string: State of the Azure Subscription containing the monitor resource
* **userInfo**: [UserInfo](#userinfo): User Info

## NewRelicAccountProperties
### Properties
* **accountInfo**: [AccountInfo](#accountinfo): NewRelic Account Information
* **organizationInfo**: [OrganizationInfo](#organizationinfo): NewRelic Organization Information
* **singleSignOnProperties**: [NewRelicSingleSignOnProperties](#newrelicsinglesignonproperties): date when plan was applied
* **userId**: string: User id

## NewRelicSingleSignOnProperties
### Properties
* **enterpriseAppId**: string: The Id of the Enterprise App used for Single sign-on.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string: Provisioning state
* **singleSignOnState**: 'Disable' | 'Enable' | 'Existing' | 'Initial' | string: Single sign-on state
* **singleSignOnUrl**: string: The login URL specific to this NewRelic Organization

## OrganizationInfo
### Properties
* **organizationId**: string: Organization id

## PlanData
### Properties
* **billingCycle**: string: Different billing cycles like Monthly/Weekly.
* **effectiveDate**: string: date when plan was applied
* **planDetails**: string: plan id as published by NewRelic
* **usageType**: 'COMMITTED' | 'PAYG' | string: Different usage type like PAYG/COMMITTED. this could be enum

## SubscriptionList
### Properties
* **monitoredSubscriptionList**: [MonitoredSubscription](#monitoredsubscription)[]: List of subscriptions and the state of the monitoring.
* **patchOperation**: 'Active' | 'AddBegin' | 'AddComplete' | 'DeleteBegin' | 'DeleteComplete' | string (WriteOnly): The operation for the patch on the resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of the resource

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserInfo
### Properties
* **country**: string: country if user
* **emailAddress**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: User Email
* **firstName**: string {maxLength: 50}: First name
* **lastName**: string {maxLength: 50}: Last name
* **phoneNumber**: string {maxLength: 40}: Contact phone number

## VMHostsListResponse
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [VMInfo](#vminfo)[] (Required): The VMInfo items on this page

## VMInfo
### Properties
* **agentStatus**: string: Status of the NewRelic agent installed on the VM.
* **agentVersion**: string: Version of the NewRelic agent installed on the VM.
* **vmId**: string: Azure VM resource ID

