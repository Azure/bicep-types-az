# Microsoft.Logz @ 2020-10-01-preview

## Resource Microsoft.Logz/monitors@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties):
* **location**: string (Required):
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): Properties specific to the monitor resource.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring):
* **type**: 'Microsoft.Logz/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/accounts@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties):
* **location**: string (Required):
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): Properties specific to the monitor resource.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring):
* **type**: 'Microsoft.Logz/monitors/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/accounts/tagRules@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): Definition of the properties for a TagRules resource.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Logz/monitors/accounts/tagRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/singleSignOnConfigurations@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogzSingleSignOnProperties](#logzsinglesignonproperties):
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Logz/monitors/singleSignOnConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logz/monitors/tagRules@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): Definition of the properties for a TagRules resource.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Logz/monitors/tagRules' (ReadOnly, DeployTimeConstant): The resource type

## IdentityProperties
### Properties
* **principalId**: string (ReadOnly): The identity ID.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned' | 'UserAssigned':

## MonitorProperties
### Properties
* **liftrResourceCategory**: 'MonitorLogs' | 'Unknown':
* **liftrResourcePreference**: int (ReadOnly): The priority of the resource.
* **logzOrganizationProperties**: [LogzOrganizationProperties](#logzorganizationproperties):
* **marketplaceSubscriptionStatus**: 'Active' | 'Suspended':
* **monitoringStatus**: 'Disabled' | 'Enabled':
* **planData**: [PlanData](#plandata):
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating':
* **userInfo**: [UserInfo](#userinfo):

## LogzOrganizationProperties
### Properties
* **companyName**: string: Name of the Logz organization.
* **enterpriseAppId**: string: The Id of the Enterprise App used for Single sign on.
* **id**: string (ReadOnly): Id of the Logz organization.

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

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MonitoringTagRulesProperties
### Properties
* **logRules**: [LogRules](#logrules): Set of rules for sending logs for the Monitor resource.
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.

## LogRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
* **sendAadLogs**: bool: Flag specifying if AAD logs should be sent for the Monitor resource.
* **sendActivityLogs**: bool: Flag specifying if activity logs from Azure resources should be sent for the Monitor resource.
* **sendSubscriptionLogs**: bool: Flag specifying if subscription logs should be sent for the Monitor resource.

## FilteringTag
### Properties
* **action**: 'Exclude' | 'Include':
* **name**: string: The name (also known as the key) of the tag.
* **value**: string: The value of the tag.

## LogzSingleSignOnProperties
### Properties
* **enterpriseAppId**: string: The Id of the Enterprise App used for Single sign-on.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating':
* **singleSignOnState**: 'Disable' | 'Enable' | 'Existing' | 'Initial':
* **singleSignOnUrl**: string: The login URL specific to this Logz Organization.

