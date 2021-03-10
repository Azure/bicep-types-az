# Microsoft.Datadog @ 2020-02-01-preview

## Resource Microsoft.Datadog/agreements@2020-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [DatadogAgreementProperties](#datadogagreementproperties)
* **type**: 'Microsoft.Datadog/agreements' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Datadog/monitors@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MonitorProperties](#monitorproperties)
* **sku**: [ResourceSku](#resourcesku)
* **tags**: [DatadogMonitorResourceTags](#datadogmonitorresourcetags)
* **type**: 'Microsoft.Datadog/monitors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Datadog/monitors/singleSignOnConfigurations@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatadogSingleSignOnProperties](#datadogsinglesignonproperties)
* **type**: 'Microsoft.Datadog/monitors/singleSignOnConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Datadog/monitors/tagRules@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties)
* **type**: 'Microsoft.Datadog/monitors/tagRules' (ReadOnly, DeployTimeConstant)

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
* **datadogOrganizationProperties**: [DatadogOrganizationProperties](#datadogorganizationproperties)
* **liftrResourceCategory**: 'MonitorLogs' | 'Unknown' (ReadOnly)
* **liftrResourcePreference**: int (ReadOnly)
* **marketplaceSubscriptionStatus**: 'Active' | 'Suspended' (ReadOnly)
* **monitoringStatus**: 'Disabled' | 'Enabled' (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating'
* **userInfo**: [UserInfo](#userinfo)

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

## DatadogMonitorResourceTags
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
* **logRules**: [LogRules](#logrules)
* **metricRules**: [MetricRules](#metricrules)

## LogRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]
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
* **filteringTags**: [FilteringTag](#filteringtag)[]

