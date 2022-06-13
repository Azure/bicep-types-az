# Microsoft.Datadog @ 2020-02-01-preview

## Resource Microsoft.Datadog/agreements@2020-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [DatadogAgreementProperties](#datadogagreementproperties): Represents the properties of the resource.
* **type**: 'Microsoft.Datadog/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Datadog/monitors@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): Properties specific to the monitor resource.
* **sku**: [ResourceSku](#resourcesku)
* **tags**: [DatadogMonitorResourceTags](#datadogmonitorresourcetags): Dictionary of <string>
* **type**: 'Microsoft.Datadog/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Datadog/monitors/singleSignOnConfigurations@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatadogSingleSignOnProperties](#datadogsinglesignonproperties)
* **type**: 'Microsoft.Datadog/monitors/singleSignOnConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Datadog/monitors/tagRules@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): Definition of the properties for a TagRules resource.
* **type**: 'Microsoft.Datadog/monitors/tagRules' (ReadOnly, DeployTimeConstant): The resource type

## Function listApiKeys (Microsoft.Datadog/monitors@2020-02-01-preview)
* **Resource**: Microsoft.Datadog/monitors
* **ApiVersion**: 2020-02-01-preview
* **Output**: [DatadogApiKeyListResponse](#datadogapikeylistresponse)

## Function listHosts (Microsoft.Datadog/monitors@2020-02-01-preview)
* **Resource**: Microsoft.Datadog/monitors
* **ApiVersion**: 2020-02-01-preview
* **Output**: [DatadogHostListResponse](#datadoghostlistresponse)

## Function listLinkedResources (Microsoft.Datadog/monitors@2020-02-01-preview)
* **Resource**: Microsoft.Datadog/monitors
* **ApiVersion**: 2020-02-01-preview
* **Output**: [LinkedResourceListResponse](#linkedresourcelistresponse)

## Function listMonitoredResources (Microsoft.Datadog/monitors@2020-02-01-preview)
* **Resource**: Microsoft.Datadog/monitors
* **ApiVersion**: 2020-02-01-preview
* **Output**: [MonitoredResourceListResponse](#monitoredresourcelistresponse)

## DatadogAgreementProperties
### Properties
* **accepted**: bool: If any version of the terms have been accepted, otherwise false.
* **licenseTextLink**: string: Link to HTML with Microsoft and Publisher terms.
* **plan**: string: Plan identifier string.
* **privacyPolicyLink**: string: Link to the privacy policy of the publisher.
* **product**: string: Product identifier string.
* **publisher**: string: Publisher identifier string.
* **retrieveDatetime**: string: Date and time in UTC of when the terms were accepted. This is empty if Accepted is false.
* **signature**: string: Terms signature.

## DatadogApiKey
### Properties
* **created**: string (ReadOnly): The time of creation of the API key.
* **createdBy**: string (ReadOnly): The user that created the API key.
* **key**: string (ReadOnly): The value of the API key.
* **name**: string (ReadOnly): The name of the API key.

## DatadogApiKeyListResponse
### Properties
* **nextLink**: string (ReadOnly): Link to the next set of results, if any.
* **value**: [DatadogApiKey](#datadogapikey)[] (ReadOnly): Results of a list operation.

## DatadogHost
### Properties
* **aliases**: string[] (ReadOnly): The aliases for the host.
* **apps**: string[] (ReadOnly): The Datadog integrations reporting metrics for the host.
* **meta**: [DatadogHostMetadata](#datadoghostmetadata) (ReadOnly)
* **name**: string (ReadOnly): The name of the host.

## DatadogHostListResponse
### Properties
* **nextLink**: string (ReadOnly): Link to the next set of results, if any.
* **value**: [DatadogHost](#datadoghost)[] (ReadOnly): Results of a list operation.

## DatadogHostMetadata
### Properties
* **agentVersion**: string (ReadOnly): The agent version.
* **installMethod**: [DatadogInstallMethod](#datadoginstallmethod) (ReadOnly)
* **logsAgent**: [DatadogLogsAgent](#datadoglogsagent) (ReadOnly)

## DatadogInstallMethod
### Properties
* **installerVersion**: string (ReadOnly): The installer version.
* **tool**: string (ReadOnly): The tool.
* **toolVersion**: string (ReadOnly): The tool version.

## DatadogLogsAgent
### Properties
* **transport**: string (ReadOnly): The transport.

## DatadogMonitorResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatadogOrganizationProperties
### Properties
* **apiKey**: string (WriteOnly): Api key associated to the Datadog organization.
* **applicationKey**: string (WriteOnly): Application key associated to the Datadog organization.
* **enterpriseAppId**: string (WriteOnly): The Id of the Enterprise App used for Single sign on.
* **id**: string (ReadOnly): Id of the Datadog organization.
* **linkingAuthCode**: string (WriteOnly): The auth code used to linking to an existing datadog organization.
* **linkingClientId**: string (WriteOnly): The client_id from an existing in exchange for an auth token to link organization.
* **name**: string (ReadOnly): Name of the Datadog organization.
* **redirectUri**: string (WriteOnly): The redirect uri for linking.

## DatadogSingleSignOnProperties
### Properties
* **enterpriseAppId**: string: The Id of the Enterprise App used for Single sign-on.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **singleSignOnState**: 'Disable' | 'Enable' | 'Existing' | 'Initial' | string: Various states of the SSO resource
* **singleSignOnUrl**: string (ReadOnly): The login URL specific to this Datadog Organization.

## FilteringTag
### Properties
* **action**: 'Exclude' | 'Include' | string: Valid actions for a filtering tag. Exclusion takes priority over inclusion.
* **name**: string: The name (also known as the key) of the tag.
* **value**: string: The value of the tag.

## IdentityProperties
### Properties
* **principalId**: string (ReadOnly): The identity ID.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned' | 'UserAssigned' | string: Identity type

## LinkedResource
### Properties
* **id**: string (ReadOnly): The ARM id of the linked resource.

## LinkedResourceListResponse
### Properties
* **nextLink**: string (ReadOnly): Link to the next set of results, if any.
* **value**: [LinkedResource](#linkedresource)[] (ReadOnly): Results of a list operation.

## LogRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing logs. This only takes effect if SendResourceLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
* **sendAadLogs**: bool: Flag specifying if AAD logs should be sent for the Monitor resource.
* **sendResourceLogs**: bool: Flag specifying if Azure resource logs should be sent for the Monitor resource.
* **sendSubscriptionLogs**: bool: Flag specifying if Azure subscription logs should be sent for the Monitor resource.

## MetricRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.

## MonitoredResource
### Properties
* **id**: string (ReadOnly): The ARM id of the resource.
* **reasonForLogsStatus**: string (ReadOnly): Reason for why the resource is sending logs (or why it is not sending).
* **reasonForMetricsStatus**: string (ReadOnly): Reason for why the resource is sending metrics (or why it is not sending).
* **sendingLogs**: bool (ReadOnly): Flag indicating if resource is sending logs to Datadog.
* **sendingMetrics**: bool (ReadOnly): Flag indicating if resource is sending metrics to Datadog.

## MonitoredResourceListResponse
### Properties
* **nextLink**: string (ReadOnly): Link to the next set of results, if any.
* **value**: [MonitoredResource](#monitoredresource)[] (ReadOnly): Results of a list operation.

## MonitoringTagRulesProperties
### Properties
* **logRules**: [LogRules](#logrules): Set of rules for sending logs for the Monitor resource.
* **metricRules**: [MetricRules](#metricrules): Set of rules for sending metrics for the Monitor resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly)

## MonitorProperties
### Properties
* **datadogOrganizationProperties**: [DatadogOrganizationProperties](#datadogorganizationproperties): Datadog organization properties
* **liftrResourceCategory**: 'MonitorLogs' | 'Unknown' | string (ReadOnly)
* **liftrResourcePreference**: int (ReadOnly): The priority of the resource.
* **marketplaceSubscriptionStatus**: 'Active' | 'Provisioning' | 'Suspended' | 'Unsubscribed' | string (ReadOnly): Flag specifying the Marketplace Subscription Status of the resource. If payment is not made in time, the resource will go in Suspended state.
* **monitoringStatus**: 'Disabled' | 'Enabled' | string: Flag specifying if the resource monitoring is enabled or disabled.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **userInfo**: [UserInfo](#userinfo): User info

## ResourceSku
### Properties
* **name**: string (Required): Name of the SKU.

## UserInfo
### Properties
* **emailAddress**: string: Email of the user used by Datadog for contacting them if needed
* **name**: string: Name of the user
* **phoneNumber**: string: Phone number of the user used by Datadog for contacting them if needed

