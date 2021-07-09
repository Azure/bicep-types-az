# Microsoft.Logz @ 2020-10-01-preview

## Resource Microsoft.Logz/monitors@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): Properties specific to the monitor resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [LogzMonitorResourceTags](#logzmonitorresourcetags): Dictionary of <string>
* **type**: 'Microsoft.Logz/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/accounts@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): Properties specific to the monitor resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [LogzMonitorResourceTags](#logzmonitorresourcetags): Dictionary of <string>
* **type**: 'Microsoft.Logz/monitors/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/accounts/tagRules@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): Definition of the properties for a TagRules resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Logz/monitors/accounts/tagRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/singleSignOnConfigurations@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogzSingleSignOnProperties](#logzsinglesignonproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Logz/monitors/singleSignOnConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/tagRules@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): Definition of the properties for a TagRules resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Logz/monitors/tagRules' (ReadOnly, DeployTimeConstant): The resource type

## IdentityProperties
### Properties
* **principalId**: string (ReadOnly): The identity ID.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned' | 'UserAssigned'

## MonitorProperties
### Properties
* **liftrResourceCategory**: 'MonitorLogs' | 'Unknown' (ReadOnly)
* **liftrResourcePreference**: int (ReadOnly): The priority of the resource.
* **logzOrganizationProperties**: [LogzOrganizationProperties](#logzorganizationproperties)
* **marketplaceSubscriptionStatus**: 'Active' | 'Suspended': Flag specifying the Marketplace Subscription Status of the resource. If payment is not made in time, the resource will go in Suspended state.
* **monitoringStatus**: 'Disabled' | 'Enabled': Flag specifying if the resource monitoring is enabled or disabled.
* **planData**: [PlanData](#plandata)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' (ReadOnly): Flag specifying if the resource provisioning state as tracked by ARM.
* **userInfo**: [UserInfo](#userinfo)

## LogzOrganizationProperties
### Properties
* **companyName**: string: Name of the Logz organization.
* **enterpriseAppId**: string: The Id of the Enterprise App used for Single sign on.
* **id**: string (ReadOnly): Id of the Logz organization.
* **singleSignOnUrl**: string: The login URL specific to this Logz Organization.

## PlanData
### Properties
* **billingCycle**: string: different billing cycles like MONTHLY/WEEKLY. this could be enum
* **effectiveDate**: string: date when plan was applied
* **planDetails**: string: plan id as published by Logz
* **usageType**: string: different usage type like PAYG/COMMITTED. this could be enum

## UserInfo
### Properties
* **emailAddress**: string: Email of the user used by Logz for contacting them if needed
* **firstName**: string: First Name of the user
* **lastName**: string: Last Name of the user
* **phoneNumber**: string: Phone number of the user used by Logz for contacting them if needed

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

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
* **logRules**: [LogRules](#logrules): Set of rules for sending logs for the Monitor resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' (ReadOnly): Flag specifying if the resource provisioning state as tracked by ARM.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.

## LogRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
* **sendAadLogs**: bool: Flag specifying if AAD logs should be sent for the Monitor resource.
* **sendActivityLogs**: bool: Flag specifying if activity logs from Azure resources should be sent for the Monitor resource.
* **sendSubscriptionLogs**: bool: Flag specifying if subscription logs should be sent for the Monitor resource.

## FilteringTag
### Properties
* **action**: 'Exclude' | 'Include': Valid actions for a filtering tag. Exclusion takes priority over inclusion.
* **name**: string: The name (also known as the key) of the tag.
* **value**: string: The value of the tag.

## LogzSingleSignOnProperties
### Properties
* **enterpriseAppId**: string: The Id of the Enterprise App used for Single sign-on.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' (ReadOnly): Flag specifying if the resource provisioning state as tracked by ARM.
* **singleSignOnState**: 'Disable' | 'Enable' | 'Existing' | 'Initial': Various states of the SSO resource
* **singleSignOnUrl**: string: The login URL specific to this Logz Organization.

