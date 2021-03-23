# Microsoft.Datadog @ 2021-03-01

## Resource Microsoft.Datadog/agreements@2021-03-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [DatadogAgreementProperties](#datadogagreementproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Datadog/agreements' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Datadog/monitors@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MonitorProperties](#monitorproperties)
* **sku**: [ResourceSku](#resourcesku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [DatadogMonitorResourceTags](#datadogmonitorresourcetags)
* **type**: 'Microsoft.Datadog/monitors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Datadog/monitors/singleSignOnConfigurations@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatadogSingleSignOnProperties](#datadogsinglesignonproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Datadog/monitors/singleSignOnConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Datadog/monitors/tagRules@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
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

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

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
* **marketplaceSubscriptionStatus**: 'Active' | 'Provisioning' | 'Suspended' | 'Unsubscribed' (ReadOnly)
* **monitoringStatus**: 'Disabled' | 'Enabled'
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating'
* **userInfo**: [UserInfo](#userinfo)

## DatadogOrganizationProperties
### Properties
* **apiKey**: string
* **applicationKey**: string
* **enterpriseAppId**: string
* **id**: string (ReadOnly)
* **linkingAuthCode**: string
* **linkingClientId**: string
* **name**: string (ReadOnly)
* **redirectUri**: string

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
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating'
* **singleSignOnState**: 'Disable' | 'Enable' | 'Existing' | 'Initial'
* **singleSignOnUrl**: string (ReadOnly)

## MonitoringTagRulesProperties
### Properties
* **logRules**: [LogRules](#logrules)
* **metricRules**: [MetricRules](#metricrules)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating'

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

