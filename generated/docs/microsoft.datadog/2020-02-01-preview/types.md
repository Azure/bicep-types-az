# Microsoft.Datadog @ 2020-02-01-preview

## Microsoft.Datadog/monitors/singleSignOnConfigurations
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatadogSingleSignOnProperties
* **type**: 'Microsoft.Datadog/monitors/singleSignOnConfigurations' (ReadOnly, DeployTimeConstant)

## DatadogSingleSignOnProperties
### Properties
* **enterpriseAppId**: string
* **singleSignOnState**: 'Disable' | 'Enable' | 'Existing' | 'Initial'
* **singleSignOnUrl**: string

## Microsoft.Datadog/monitors/tagRules
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MonitoringTagRulesProperties
* **type**: 'Microsoft.Datadog/monitors/tagRules' (ReadOnly, DeployTimeConstant)

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

## Microsoft.Datadog/monitors
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
### Additional Properties
* **Additional Properties Type**: string

