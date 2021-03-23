# Microsoft.Logz @ 2020-10-01-preview

## Resource Microsoft.Logz/monitors@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MonitorProperties](#monitorproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [LogzMonitorResourceTags](#logzmonitorresourcetags)
* **type**: 'Microsoft.Logz/monitors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logz/monitors/accounts@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MonitorProperties](#monitorproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [LogzMonitorResourceTags](#logzmonitorresourcetags)
* **type**: 'Microsoft.Logz/monitors/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logz/monitors/accounts/tagRules@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Logz/monitors/accounts/tagRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logz/monitors/singleSignOnConfigurations@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LogzSingleSignOnProperties](#logzsinglesignonproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Logz/monitors/singleSignOnConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logz/monitors/tagRules@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Logz/monitors/tagRules' (ReadOnly, DeployTimeConstant)

## IdentityProperties
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned' | 'UserAssigned'

## MonitorProperties
### Properties
* **liftrResourceCategory**: 'MonitorLogs' | 'Unknown' (ReadOnly)
* **liftrResourcePreference**: int (ReadOnly)
* **logzOrganizationProperties**: [LogzOrganizationProperties](#logzorganizationproperties)
* **marketplaceSubscriptionStatus**: 'Active' | 'Suspended'
* **monitoringStatus**: 'Disabled' | 'Enabled'
* **planData**: [PlanData](#plandata)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' (ReadOnly)
* **userInfo**: [UserInfo](#userinfo)

## LogzOrganizationProperties
### Properties
* **companyName**: string
* **enterpriseAppId**: string
* **id**: string (ReadOnly)

## PlanData
### Properties
* **billingCycle**: string
* **effectiveDate**: string
* **planDetails**: string
* **usageType**: string

## UserInfo
### Properties
* **emailAddress**: string
* **firstName**: string
* **lastName**: string
* **phoneNumber**: string

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## LogzMonitorResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LogzMonitorResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MonitoringTagRulesProperties
### Properties
* **logRules**: [LogRules](#logrules)
* **systemData**: [SystemData](#systemdata) (ReadOnly)

## LogRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]
* **sendAadLogs**: bool
* **sendActivityLogs**: bool
* **sendSubscriptionLogs**: bool

## FilteringTag
### Properties
* **action**: 'Exclude' | 'Include'
* **name**: string
* **value**: string

## LogzSingleSignOnProperties
### Properties
* **enterpriseAppId**: string
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' (ReadOnly)
* **singleSignOnState**: 'Disable' | 'Enable' | 'Existing' | 'Initial'
* **singleSignOnUrl**: string

