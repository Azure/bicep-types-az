# Microsoft.Datadog @ 2021-03-01

## Resource Microsoft.Datadog/agreements@2021-03-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [DatadogAgreementProperties](#datadogagreementproperties): Terms properties.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Datadog/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Datadog/monitors@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties):
* **location**: string (Required):
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): Properties specific to the monitor resource.
* **sku**: [ResourceSku](#resourcesku):
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring):
* **type**: 'Microsoft.Datadog/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Datadog/monitors/singleSignOnConfigurations@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatadogSingleSignOnProperties](#datadogsinglesignonproperties):
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Datadog/monitors/singleSignOnConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Datadog/monitors/tagRules@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): Definition of the properties for a TagRules resource.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Datadog/monitors/tagRules' (ReadOnly, DeployTimeConstant): The resource type

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

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## IdentityProperties
### Properties
* **principalId**: string (ReadOnly): The identity ID.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned' | 'UserAssigned':

## MonitorProperties
### Properties
* **datadogOrganizationProperties**: [DatadogOrganizationProperties](#datadogorganizationproperties): Datadog organization properties
* **liftrResourceCategory**: 'MonitorLogs' | 'Unknown':
* **liftrResourcePreference**: int (ReadOnly): The priority of the resource.
* **marketplaceSubscriptionStatus**: 'Active' | 'Provisioning' | 'Suspended' | 'Unsubscribed':
* **monitoringStatus**: 'Disabled' | 'Enabled':
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating':
* **userInfo**: [UserInfo](#userinfo): User info

## DatadogOrganizationProperties
### Properties
* **apiKey**: string: Api key associated to the Datadog organization.
* **applicationKey**: string: Application key associated to the Datadog organization.
* **enterpriseAppId**: string: The Id of the Enterprise App used for Single sign on.
* **id**: string (ReadOnly): Id of the Datadog organization.
* **linkingAuthCode**: string: The auth code used to linking to an existing datadog organization.
* **linkingClientId**: string: The client_id from an existing in exchange for an auth token to link organization.
* **name**: string (ReadOnly): Name of the Datadog organization.
* **redirectUri**: string: The redirect uri for linking.

## UserInfo
### Properties
* **emailAddress**: string: Email of the user used by Datadog for contacting them if needed
* **name**: string: Name of the user
* **phoneNumber**: string: Phone number of the user used by Datadog for contacting them if needed

## ResourceSku
### Properties
* **name**: string (Required): Name of the SKU.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatadogSingleSignOnProperties
### Properties
* **enterpriseAppId**: string: The Id of the Enterprise App used for Single sign-on.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating':
* **singleSignOnState**: 'Disable' | 'Enable' | 'Existing' | 'Initial':
* **singleSignOnUrl**: string (ReadOnly): The login URL specific to this Datadog Organization.

## MonitoringTagRulesProperties
### Properties
* **logRules**: [LogRules](#logrules): Set of rules for sending logs for the Monitor resource.
* **metricRules**: [MetricRules](#metricrules): Set of rules for sending metrics for the Monitor resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating':

## LogRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing logs. This only takes effect if SendResourceLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
* **sendAadLogs**: bool: Flag specifying if AAD logs should be sent for the Monitor resource.
* **sendResourceLogs**: bool: Flag specifying if Azure resource logs should be sent for the Monitor resource.
* **sendSubscriptionLogs**: bool: Flag specifying if Azure subscription logs should be sent for the Monitor resource.

## FilteringTag
### Properties
* **action**: 'Exclude' | 'Include':
* **name**: string: The name (also known as the key) of the tag.
* **value**: string: The value of the tag.

## MetricRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.

