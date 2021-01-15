# Microsoft.Datadog @ 2020-02-01-preview

## Resource Microsoft.Datadog/agreements@2020-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: DatadogAgreementProperties
* **type**: 'Microsoft.Datadog/agreements' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Datadog/monitors@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MonitorProperties
* **sku**: ResourceSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Datadog/monitors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Datadog/monitors/singleSignOnConfigurations@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatadogSingleSignOnProperties
* **type**: 'Microsoft.Datadog/monitors/singleSignOnConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Datadog/monitors/tagRules@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MonitoringTagRulesProperties
* **type**: 'Microsoft.Datadog/monitors/tagRules' (ReadOnly, DeployTimeConstant)

## Function listApiKeys (Microsoft.Datadog/monitors@2020-02-01-preview)
* **Resource**: Microsoft.Datadog/monitors
* **ApiVersion**: 2020-02-01-preview
* **Output**: DatadogApiKeyListResponse

## Function listHosts (Microsoft.Datadog/monitors@2020-02-01-preview)
* **Resource**: Microsoft.Datadog/monitors
* **ApiVersion**: 2020-02-01-preview
* **Output**: DatadogHostListResponse

## Function listLinkedResources (Microsoft.Datadog/monitors@2020-02-01-preview)
* **Resource**: Microsoft.Datadog/monitors
* **ApiVersion**: 2020-02-01-preview
* **Output**: LinkedResourceListResponse

## Function listMonitoredResources (Microsoft.Datadog/monitors@2020-02-01-preview)
* **Resource**: Microsoft.Datadog/monitors
* **ApiVersion**: 2020-02-01-preview
* **Output**: MonitoredResourceListResponse

## DatadogAgreementProperties
### Properties
* **accepted**: bool
* **licenseTextLink**: string
* **plan**: string
* **privacyPolicyLink**: string
* **product**: string
* **publisher**: string
* **retrieveDatetime**: string
* **signature**: string

## IdentityProperties
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned' | 'UserAssigned'

## MonitorProperties
### Properties
* **datadogOrganizationProperties**: DatadogOrganizationProperties
* **liftrResourceCategory**: 'MonitorLogs' | 'Unknown'
* **liftrResourcePreference**: int (ReadOnly)
* **marketplaceSubscriptionStatus**: 'Active' | 'Suspended'
* **monitoringStatus**: 'Disabled' | 'Enabled'
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating'
* **userInfo**: UserInfo

## DatadogOrganizationProperties
### Properties
* **enterpriseAppId**: string
* **id**: string (ReadOnly)
* **linkingAuthCode**: string
* **linkingClientId**: string
* **name**: string (ReadOnly)

## UserInfo
### Properties
* **emailAddress**: string
* **name**: string
* **phoneNumber**: string

## ResourceSku
### Properties
* **name**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatadogSingleSignOnProperties
### Properties
* **enterpriseAppId**: string
* **singleSignOnState**: 'Disable' | 'Enable' | 'Existing' | 'Initial'
* **singleSignOnUrl**: string (ReadOnly)

## MonitoringTagRulesProperties
### Properties
* **logRules**: LogRules
* **metricRules**: MetricRules

## LogRules
### Properties
* **filteringTags**: FilteringTag[]
* **sendAadLogs**: bool
* **sendResourceLogs**: bool
* **sendSubscriptionLogs**: bool

## FilteringTag
### Properties
* **action**: 'Exclude' | 'Include'
* **name**: string
* **value**: string

## MetricRules
### Properties
* **filteringTags**: FilteringTag[]

## DatadogApiKeyListResponse
### Properties
* **nextLink**: string (ReadOnly)
* **value**: DatadogApiKey[] (ReadOnly)

## DatadogApiKey
### Properties
* **created**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **key**: string (ReadOnly)
* **name**: string (ReadOnly)

## DatadogHostListResponse
### Properties
* **nextLink**: string (ReadOnly)
* **value**: DatadogHost[] (ReadOnly)

## DatadogHost
### Properties
* **aliases**: string[] (ReadOnly)
* **apps**: string[] (ReadOnly)
* **meta**: DatadogHostMetadata (ReadOnly)
* **name**: string (ReadOnly)

## DatadogHostMetadata
### Properties
* **agentVersion**: string (ReadOnly)
* **installMethod**: DatadogInstallMethod (ReadOnly)
* **logsAgent**: DatadogLogsAgent (ReadOnly)

## DatadogInstallMethod
### Properties
* **installerVersion**: string (ReadOnly)
* **tool**: string (ReadOnly)
* **toolVersion**: string (ReadOnly)

## DatadogLogsAgent
### Properties
* **transport**: string (ReadOnly)

## LinkedResourceListResponse
### Properties
* **nextLink**: string (ReadOnly)
* **value**: LinkedResource[] (ReadOnly)

## LinkedResource
### Properties
* **id**: string (ReadOnly)

## MonitoredResourceListResponse
### Properties
* **nextLink**: string (ReadOnly)
* **value**: MonitoredResource[] (ReadOnly)

## MonitoredResource
### Properties
* **id**: string (ReadOnly)
* **reasonForLogsStatus**: string (ReadOnly)
* **reasonForMetricsStatus**: string (ReadOnly)
* **sendingLogs**: bool (ReadOnly)
* **sendingMetrics**: bool (ReadOnly)

