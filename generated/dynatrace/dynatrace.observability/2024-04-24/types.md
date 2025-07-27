# Dynatrace.Observability @ 2024-04-24

## Resource Dynatrace.Observability/monitors@2024-04-24
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-24' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Dynatrace.Observability/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Dynatrace.Observability/monitors/monitoredSubscriptions@2024-04-24
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-24' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionList](#subscriptionlist): The request to update subscriptions needed to be monitored by the Dynatrace monitor resource.
* **type**: 'Dynatrace.Observability/monitors/monitoredSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Dynatrace.Observability/monitors/singleSignOnConfigurations@2024-04-24
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-24' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DynatraceSingleSignOnProperties](#dynatracesinglesignonproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Dynatrace.Observability/monitors/singleSignOnConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Dynatrace.Observability/monitors/tagRules@2024-04-24
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-24' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Dynatrace.Observability/monitors/tagRules' (ReadOnly, DeployTimeConstant): The resource type

## Function listAppServices (Dynatrace.Observability/monitors@2024-04-24)
* **Resource**: Dynatrace.Observability/monitors
* **ApiVersion**: 2024-04-24
* **Output**: [AppServiceListResponse](#appservicelistresponse)

## Function listHosts (Dynatrace.Observability/monitors@2024-04-24)
* **Resource**: Dynatrace.Observability/monitors
* **ApiVersion**: 2024-04-24
* **Output**: [VMHostsListResponse](#vmhostslistresponse)

## Function listLinkableEnvironments (Dynatrace.Observability/monitors@2024-04-24)
* **Resource**: Dynatrace.Observability/monitors
* **ApiVersion**: 2024-04-24
* **Input**: [LinkableEnvironmentRequest](#linkableenvironmentrequest)
* **Output**: [LinkableEnvironmentListResponse](#linkableenvironmentlistresponse)

## Function listMonitoredResources (Dynatrace.Observability/monitors@2024-04-24)
* **Resource**: Dynatrace.Observability/monitors
* **ApiVersion**: 2024-04-24
* **Input**: [LogStatusRequest](#logstatusrequest)
* **Output**: [MonitoredResourceListResponse](#monitoredresourcelistresponse)

## AccountInfo
### Properties
* **accountId**: string: Account Id of the account this environment is linked to
* **companyName**: string: Name of the customer account / company
* **regionId**: string: Region in which the account is created

## AppServiceInfo
### Properties
* **autoUpdateSetting**: 'DISABLED' | 'ENABLED' | string: Update settings of OneAgent.
* **availabilityState**: 'CRASHED' | 'LOST' | 'MONITORED' | 'PRE_MONITORED' | 'SHUTDOWN' | 'UNEXPECTED_SHUTDOWN' | 'UNKNOWN' | 'UNMONITORED' | string: The availability state of OneAgent.
* **hostGroup**: string: The name of the host group
* **hostName**: string: The name of the host
* **logModule**: 'DISABLED' | 'ENABLED' | string: Tells whether log modules are enabled or not
* **monitoringType**: 'CLOUD_INFRASTRUCTURE' | 'DISCOVERY' | 'FULL_STACK' | string: The monitoring mode of OneAgent
* **resourceId**: string: App service resource ID
* **updateStatus**: 'INCOMPATIBLE' | 'OUTDATED' | 'SCHEDULED' | 'SUPPRESSED' | 'UNKNOWN' | 'UP2DATE' | 'UPDATE_IN_PROGRESS' | 'UPDATE_PENDING' | 'UPDATE_PROBLEM' | string: The current update status of OneAgent.
* **version**: string: Version of the Dynatrace agent installed on the App Service.

## AppServiceListResponse
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [AppServiceInfo](#appserviceinfo)[]: The items on this page

## DynatraceEnvironmentProperties
### Properties
* **accountInfo**: [AccountInfo](#accountinfo): Dynatrace Account Information
* **environmentInfo**: [EnvironmentInfo](#environmentinfo): Dynatrace Environment Information
* **singleSignOnProperties**: [DynatraceSingleSignOnProperties](#dynatracesinglesignonproperties): The details of a Dynatrace single sign-on.
* **userId**: string: User id

## DynatraceSingleSignOnProperties
### Properties
* **aadDomains**: string[]: array of Aad(azure active directory) domains
* **enterpriseAppId**: string: Version of the Dynatrace agent installed on the VM.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **singleSignOnState**: 'Disable' | 'Enable' | 'Existing' | 'Initial' | string: State of Single Sign On
* **singleSignOnUrl**: string: The login URL specific to this Dynatrace Environment

## EnvironmentInfo
### Properties
* **environmentId**: string: Id of the environment created
* **ingestionKey**: string: Ingestion key of the environment
* **landingURL**: string: Landing URL for Dynatrace environment
* **logsIngestionEndpoint**: string: Ingestion endpoint used for sending logs

## FilteringTag
### Properties
* **action**: 'Exclude' | 'Include' | string: Valid actions for a filtering tag. Exclusion takes priority over inclusion.
* **name**: string: The name (also known as the key) of the tag.
* **value**: string: The value of the tag.

## IdentityProperties
### Properties
* **principalId**: string (ReadOnly): The active directory identifier of this principal.
* **tenantId**: string (ReadOnly): The Active Directory tenant id of the principal.
* **type**: 'SystemAndUserAssigned' | 'SystemAssigned' | 'UserAssigned' | string (Required): The type of managed identity assigned to this resource.
* **userAssignedIdentities**: [IdentityPropertiesUserAssignedIdentities](#identitypropertiesuserassignedidentities): The identities assigned to this resource by the user.

## IdentityPropertiesUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## LinkableEnvironmentListResponse
### Properties
* **nextLink**: string: Link to the next set of results, if any.
* **value**: [LinkableEnvironmentResponse](#linkableenvironmentresponse)[]: List of environments for which user is an admin

## LinkableEnvironmentRequest
### Properties
* **region**: string (Required): Azure region in which we want to link the environment
* **tenantId**: string (Required): Tenant Id of the user in which they want to link the environment
* **userPrincipal**: string (Required): user principal id of the user

## LinkableEnvironmentResponse
### Properties
* **environmentId**: string: environment id for which user is an admin
* **environmentName**: string: Name of the environment
* **planData**: [PlanData](#plandata): Billing plan information.

## LogRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured.
If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
* **sendAadLogs**: 'Disabled' | 'Enabled' | string: Flag specifying if AAD logs should be sent for the Monitor resource.
* **sendActivityLogs**: 'Disabled' | 'Enabled' | string: Flag specifying if activity logs from Azure resources should be sent for the Monitor resource.
* **sendSubscriptionLogs**: 'Disabled' | 'Enabled' | string: Flag specifying if subscription logs should be sent for the Monitor resource.

## LogStatusRequest
### Properties
* **monitoredResourceIds**: string[]: List of azure resource Id of monitored resources for which we get the log status

## MetricRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
* **sendingMetrics**: 'Disabled' | 'Enabled' | string: Flag specifying if metrics from Azure resources should be sent for the Monitor resource.

## MonitoredResource
### Properties
* **id**: string: The ARM id of the resource.
* **reasonForLogsStatus**: string: Reason for why the resource is sending logs (or why it is not sending).
* **reasonForMetricsStatus**: string: Reason for why the resource is sending metrics (or why it is not sending).
* **sendingLogs**: 'Disabled' | 'Enabled' | string: Flag indicating if resource is sending logs to Dynatrace.
* **sendingMetrics**: 'Disabled' | 'Enabled' | string: Flag indicating if resource is sending metrics to Dynatrace.

## MonitoredResourceListResponse
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [MonitoredResource](#monitoredresource)[]: The items on this page

## MonitoredSubscription
### Properties
* **error**: string: The reason of not monitoring the subscription.
* **status**: 'Active' | 'Deleting' | 'Failed' | 'InProgress' | string: The state of monitoring.
* **subscriptionId**: string (Required): The subscriptionId to be monitored.
* **tagRules**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): Properties for the Tag rules resource of a Monitor account.

## MonitoringTagRulesProperties
### Properties
* **logRules**: [LogRules](#logrules): Set of rules for sending logs for the Monitor resource.
* **metricRules**: [MetricRules](#metricrules): Set of rules for sending metrics for the Monitor resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## MonitorProperties
### Properties
* **dynatraceEnvironmentProperties**: [DynatraceEnvironmentProperties](#dynatraceenvironmentproperties): Properties of the Dynatrace environment.
* **liftrResourceCategory**: 'MonitorLogs' | 'Unknown' | string (ReadOnly): Liftr Resource category.
* **liftrResourcePreference**: int (ReadOnly): The priority of the resource.
* **marketplaceSaasAutoRenew**: 'Off' | 'On' | string: Marketplace resource autorenew flag
* **marketplaceSubscriptionStatus**: 'Active' | 'Suspended' | 'Unsubscribed' | string: Marketplace subscription status.
* **monitoringStatus**: 'Disabled' | 'Enabled' | string: Status of the monitor.
* **planData**: [PlanData](#plandata): Billing plan information.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **userInfo**: [UserInfo](#userinfo): User info.

## PlanData
### Properties
* **billingCycle**: string: different billing cycles like MONTHLY/WEEKLY. this could be enum
* **effectiveDate**: string: date when plan was applied
* **planDetails**: string: plan id as published by Dynatrace
* **usageType**: string: different usage type like PAYG/COMMITTED. this could be enum

## SubscriptionList
### Properties
* **monitoredSubscriptionList**: [MonitoredSubscription](#monitoredsubscription)[]: List of subscriptions and the state of the monitoring.
* **operation**: 'Active' | 'AddBegin' | 'AddComplete' | 'DeleteBegin' | 'DeleteComplete' | string (WriteOnly): The operation for the patch on the resource.
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

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserInfo
### Properties
* **country**: string: Country of the user
* **emailAddress**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: Email of the user used by Dynatrace for contacting them if needed
* **firstName**: string: First Name of the user
* **lastName**: string: Last Name of the user
* **phoneNumber**: string {maxLength: 40}: Phone number of the user used by Dynatrace for contacting them if needed

## VMHostsListResponse
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [VMInfo](#vminfo)[]: The items on this page

## VMInfo
### Properties
* **autoUpdateSetting**: 'DISABLED' | 'ENABLED' | string: Update settings of OneAgent.
* **availabilityState**: 'CRASHED' | 'LOST' | 'MONITORED' | 'PRE_MONITORED' | 'SHUTDOWN' | 'UNEXPECTED_SHUTDOWN' | 'UNKNOWN' | 'UNMONITORED' | string: The availability state of OneAgent.
* **hostGroup**: string: The name of the host group
* **hostName**: string: The name of the host
* **logModule**: 'DISABLED' | 'ENABLED' | string: Tells whether log modules are enabled or not
* **monitoringType**: 'CLOUD_INFRASTRUCTURE' | 'DISCOVERY' | 'FULL_STACK' | string: The monitoring mode of OneAgent
* **resourceId**: string: Azure VM resource ID
* **updateStatus**: 'INCOMPATIBLE' | 'OUTDATED' | 'SCHEDULED' | 'SUPPRESSED' | 'UNKNOWN' | 'UP2DATE' | 'UPDATE_IN_PROGRESS' | 'UPDATE_PENDING' | 'UPDATE_PROBLEM' | string: The current update status of OneAgent.
* **version**: string: Version of the Dynatrace agent installed on the VM.

