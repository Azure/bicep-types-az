# Microsoft.Logz @ 2022-01-01-preview

## Resource Microsoft.Logz/monitors@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): Properties specific to the monitor resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **tags**: [LogzMonitorResourceTags](#logzmonitorresourcetags): Dictionary of <string>
* **type**: 'Microsoft.Logz/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/accounts@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): Properties specific to the monitor resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **tags**: [LogzMonitorResourceTags](#logzmonitorresourcetags): Dictionary of <string>
* **type**: 'Microsoft.Logz/monitors/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/accounts/tagRules@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): Definition of the properties for a TagRules resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.Logz/monitors/accounts/tagRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/metricsSource@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): Properties specific to the monitor resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **tags**: [LogzMonitorResourceTags](#logzmonitorresourcetags): Dictionary of <string>
* **type**: 'Microsoft.Logz/monitors/metricsSource' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/metricsSource/tagRules@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MetricsTagRulesProperties](#metricstagrulesproperties): Definition of the properties for a TagRules resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.Logz/monitors/metricsSource/tagRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/singleSignOnConfigurations@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogzSingleSignOnProperties](#logzsinglesignonproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Logz/monitors/singleSignOnConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/tagRules@2022-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): Definition of the properties for a TagRules resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.Logz/monitors/tagRules' (ReadOnly, DeployTimeConstant): The resource type

## Function listMonitoredResources (Microsoft.Logz/monitors@2022-01-01-preview)
* **Resource**: Microsoft.Logz/monitors
* **ApiVersion**: 2022-01-01-preview
* **Output**: [MonitoredResourceListResponse](#monitoredresourcelistresponse)

## Function listMonitoredResources (Microsoft.Logz/monitors/accounts@2022-01-01-preview)
* **Resource**: Microsoft.Logz/monitors/accounts
* **ApiVersion**: 2022-01-01-preview
* **Output**: [MonitoredResourceListResponse](#monitoredresourcelistresponse)

## Function listUserRoles (Microsoft.Logz/monitors@2022-01-01-preview)
* **Resource**: Microsoft.Logz/monitors
* **ApiVersion**: 2022-01-01-preview
* **Input**: [UserRoleRequest](#userrolerequest)
* **Output**: [UserRoleListResponse](#userrolelistresponse)

## Function listVMHosts (Microsoft.Logz/monitors@2022-01-01-preview)
* **Resource**: Microsoft.Logz/monitors
* **ApiVersion**: 2022-01-01-preview
* **Output**: [VMResourcesListResponse](#vmresourceslistresponse)

## Function listVMHosts (Microsoft.Logz/monitors/accounts@2022-01-01-preview)
* **Resource**: Microsoft.Logz/monitors/accounts
* **ApiVersion**: 2022-01-01-preview
* **Output**: [VMResourcesListResponse](#vmresourceslistresponse)

## FilteringTag
### Properties
* **action**: 'Exclude' | 'Include' | string: Valid actions for a filtering tag. Exclusion takes priority over inclusion.
* **name**: string: The name (also known as the key) of the tag.
* **value**: string: The value of the tag.

## IdentityProperties
### Properties
* **principalId**: string (ReadOnly): The identity ID.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned' | 'UserAssigned' | string

## LogRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
* **sendAadLogs**: bool: Flag specifying if AAD logs should be sent for the Monitor resource.
* **sendActivityLogs**: bool: Flag specifying if activity logs from Azure resources should be sent for the Monitor resource.
* **sendSubscriptionLogs**: bool: Flag specifying if subscription logs should be sent for the Monitor resource.

## LogzMonitorResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LogzMonitorResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LogzMonitorResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LogzOrganizationProperties
### Properties
* **companyName**: string: Name of the Logz organization.
* **enterpriseAppId**: string: The Id of the Enterprise App used for Single sign on.
* **id**: string (ReadOnly): Id of the Logz organization.
* **singleSignOnUrl**: string: The login URL specific to this Logz Organization.

## LogzSingleSignOnProperties
### Properties
* **enterpriseAppId**: string: The Id of the Enterprise App used for Single sign-on.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Flag specifying if the resource provisioning state as tracked by ARM.
* **singleSignOnState**: 'Disable' | 'Enable' | 'Existing' | 'Initial' | string: Various states of the SSO resource
* **singleSignOnUrl**: string: The login URL specific to this Logz Organization.

## MetricRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
* **subscriptionId**: string: Subscription Id for which filtering tags are applicable

## MetricsTagRulesProperties
### Properties
* **metricRules**: [MetricRules](#metricrules)[]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Flag specifying if the resource provisioning state as tracked by ARM.
* **sendMetrics**: bool: Flag specifying if metrics from Azure resources should be sent for the Monitor resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.

## MonitoredResource
### Properties
* **id**: string (ReadOnly): The ARM id of the resource.
* **reasonForLogsStatus**: string (ReadOnly): Reason for why the resource is sending logs (or why it is not sending).
* **reasonForMetricsStatus**: string (ReadOnly): Reason for why the resource is sending metrics (or why it is not sending).
* **sendingLogs**: bool (ReadOnly): Flag indicating if resource is sending logs to Logz.
* **sendingMetrics**: bool (ReadOnly): Flag indicating if resource is sending metrics to Logz.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.

## MonitoredResourceListResponse
### Properties
* **nextLink**: string (ReadOnly): Link to the next set of results, if any.
* **value**: [MonitoredResource](#monitoredresource)[] (ReadOnly): Results of a list operation.

## MonitoredResourceListResponse
### Properties
* **nextLink**: string (ReadOnly): Link to the next set of results, if any.
* **value**: [MonitoredResource](#monitoredresource)[] (ReadOnly): Results of a list operation.

## MonitoringTagRulesProperties
### Properties
* **logRules**: [LogRules](#logrules): Set of rules for sending logs for the Monitor resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Flag specifying if the resource provisioning state as tracked by ARM.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.

## MonitorProperties
### Properties
* **liftrResourceCategory**: 'MonitorLogs' | 'Unknown' | string (ReadOnly)
* **liftrResourcePreference**: int (ReadOnly): The priority of the resource.
* **logzOrganizationProperties**: [LogzOrganizationProperties](#logzorganizationproperties)
* **marketplaceSubscriptionStatus**: 'Active' | 'Suspended' | string: Flag specifying the Marketplace Subscription Status of the resource. If payment is not made in time, the resource will go in Suspended state.
* **monitoringStatus**: 'Disabled' | 'Enabled' | string: Flag specifying if the resource monitoring is enabled or disabled.
* **planData**: [PlanData](#plandata)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Flag specifying if the resource provisioning state as tracked by ARM.
* **userInfo**: [UserInfo](#userinfo)

## PlanData
### Properties
* **billingCycle**: string: different billing cycles like MONTHLY/WEEKLY. this could be enum
* **effectiveDate**: string: date when plan was applied
* **planDetails**: string: plan id as published by Logz
* **usageType**: string: different usage type like PAYG/COMMITTED. this could be enum

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UserInfo
### Properties
* **emailAddress**: string: Email of the user used by Logz for contacting them if needed
* **firstName**: string: First Name of the user
* **lastName**: string: Last Name of the user
* **phoneNumber**: string: Phone number of the user used by Logz for contacting them if needed

## UserRoleListResponse
### Properties
* **nextLink**: string (ReadOnly): Link to the next set of results, if any.
* **value**: [UserRoleResponse](#userroleresponse)[] (ReadOnly): List of user roles for Logz.io account.

## UserRoleRequest
### Properties
* **emailAddress**: string (WriteOnly): Email of the user used by Logz for contacting them if needed

## UserRoleResponse
### Properties
* **role**: 'Admin' | 'None' | 'User' | string (ReadOnly): User roles on configured in Logz.io account.

## VMResources
### Properties
* **agentVersion**: string (ReadOnly): Version of the Logz agent installed on the VM.
* **id**: string (ReadOnly): Request of a list vm host update operation.

## VMResourcesListResponse
### Properties
* **nextLink**: string (ReadOnly): Link to the next set of results, if any.
* **value**: [VMResources](#vmresources)[] (ReadOnly): Response of a list vm host update operation.

## VMResourcesListResponse
### Properties
* **nextLink**: string (ReadOnly): Link to the next set of results, if any.
* **value**: [VMResources](#vmresources)[] (ReadOnly): Response of a list vm host update operation.

