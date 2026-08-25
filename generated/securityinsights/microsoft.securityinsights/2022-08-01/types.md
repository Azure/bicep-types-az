# Microsoft.SecurityInsights @ 2022-08-01

## Resource Microsoft.SecurityInsights/alertRules@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/alertRules' (ReadOnly, DeployTimeConstant): The resource type

### FusionAlertRule
#### Properties
* **kind**: 'Fusion' (Required): The alert rule kind
* **properties**: [FusionAlertRuleProperties](#fusionalertruleproperties): Fusion alert rule properties

### MicrosoftSecurityIncidentCreationAlertRule
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required): The alert rule kind
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleProperties](#microsoftsecurityincidentcreationalertruleproperties): MicrosoftSecurityIncidentCreation rule properties

### ScheduledAlertRule
#### Properties
* **kind**: 'Scheduled' (Required): The alert rule kind
* **properties**: [ScheduledAlertRuleProperties](#scheduledalertruleproperties): Scheduled alert rule properties


## Resource Microsoft.SecurityInsights/alertRules/actions@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionRequestPropertiesOrActionResponseProperties](#actionrequestpropertiesoractionresponseproperties): Action properties for put request
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/alertRules/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/alertRuleTemplates@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/alertRuleTemplates' (ReadOnly, DeployTimeConstant): The resource type

### FusionAlertRuleTemplate
#### Properties
* **kind**: 'Fusion' (Required): The alert rule kind
* **properties**: [FusionAlertRuleTemplateProperties](#fusionalertruletemplateproperties) (ReadOnly): Fusion alert rule template properties

### MicrosoftSecurityIncidentCreationAlertRuleTemplate
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required): The alert rule kind
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties](#microsoftsecurityincidentcreationalertruletemplateproperties) (ReadOnly): MicrosoftSecurityIncidentCreation rule template properties

### ScheduledAlertRuleTemplate
#### Properties
* **kind**: 'Scheduled' (Required): The alert rule kind
* **properties**: [ScheduledAlertRuleTemplateProperties](#scheduledalertruletemplateproperties) (ReadOnly): Scheduled alert rule template properties


## Resource Microsoft.SecurityInsights/automationRules@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationRuleProperties](#automationruleproperties) (Required): Automation rule properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/automationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/bookmarks@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BookmarkProperties](#bookmarkproperties): Bookmark properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/bookmarks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/dataConnectors@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/dataConnectors' (ReadOnly, DeployTimeConstant): The resource type

### AwsCloudTrailDataConnector
#### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required): The data connector kind
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties): Amazon Web Services CloudTrail data connector properties.

### AADDataConnector
#### Properties
* **kind**: 'AzureActiveDirectory' (Required): The data connector kind
* **properties**: [AADDataConnectorProperties](#aaddataconnectorproperties): AAD (Azure Active Directory) data connector properties.

### AatpDataConnector
#### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required): The data connector kind
* **properties**: [AatpDataConnectorProperties](#aatpdataconnectorproperties): AATP (Azure Advanced Threat Protection) data connector properties.

### ASCDataConnector
#### Properties
* **kind**: 'AzureSecurityCenter' (Required): The data connector kind
* **properties**: [ASCDataConnectorProperties](#ascdataconnectorproperties): ASC (Azure Security Center) data connector properties.

### McasDataConnector
#### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required): The data connector kind
* **properties**: [McasDataConnectorProperties](#mcasdataconnectorproperties): MCAS (Microsoft Cloud App Security) data connector properties.

### MdatpDataConnector
#### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required): The data connector kind
* **properties**: [MdatpDataConnectorProperties](#mdatpdataconnectorproperties): MDATP (Microsoft Defender Advanced Threat Protection) data connector properties.

### OfficeDataConnector
#### Properties
* **kind**: 'Office365' (Required): The data connector kind
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties): Office data connector properties.

### TIDataConnector
#### Properties
* **kind**: 'ThreatIntelligence' (Required): The data connector kind
* **properties**: [TIDataConnectorProperties](#tidataconnectorproperties): TI (Threat Intelligence) data connector properties.


## Resource Microsoft.SecurityInsights/incidents@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentProperties](#incidentproperties): Incident properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/comments@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentCommentProperties](#incidentcommentproperties): Incident comment properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/relations@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/onboardingStates@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SentinelOnboardingStateProperties](#sentinelonboardingstateproperties): The Sentinel onboarding state object
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/onboardingStates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/threatIntelligence/indicators@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ThreatIntelligenceIndicatorProperties](#threatintelligenceindicatorproperties) (WriteOnly): Threat Intelligence Entity properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/threatIntelligence/indicators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistProperties](#watchlistproperties): Watchlist properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists/watchlistItems@2022-08-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistItemProperties](#watchlistitemproperties): Watchlist Item properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/watchlists/watchlistItems' (ReadOnly, DeployTimeConstant): The resource type

## Function alerts (Microsoft.SecurityInsights/incidents@2022-08-01)
* **Resource**: Microsoft.SecurityInsights/incidents
* **ApiVersion**: 2022-08-01
* **Output**: [IncidentAlertList](#incidentalertlist)

## Function appendTags (Microsoft.SecurityInsights/threatIntelligence/indicators@2022-08-01)
* **Resource**: Microsoft.SecurityInsights/threatIntelligence/indicators
* **ApiVersion**: 2022-08-01
* **Input**: [ThreatIntelligenceAppendTags](#threatintelligenceappendtags)
* **Output**: any

## Function bookmarks (Microsoft.SecurityInsights/incidents@2022-08-01)
* **Resource**: Microsoft.SecurityInsights/incidents
* **ApiVersion**: 2022-08-01
* **Output**: [IncidentBookmarkList](#incidentbookmarklist)

## Function createIndicator (Microsoft.SecurityInsights/threatIntelligence@2022-08-01)
* **Resource**: Microsoft.SecurityInsights/threatIntelligence
* **ApiVersion**: 2022-08-01
* **Input**: [ThreatIntelligenceIndicatorModel](#threatintelligenceindicatormodel)
* **Output**: [ThreatIntelligenceInformation](#threatintelligenceinformation)

## Function entities (Microsoft.SecurityInsights/incidents@2022-08-01)
* **Resource**: Microsoft.SecurityInsights/incidents
* **ApiVersion**: 2022-08-01
* **Output**: [IncidentEntitiesResponse](#incidententitiesresponse)

## Function queryIndicators (Microsoft.SecurityInsights/threatIntelligence@2022-08-01)
* **Resource**: Microsoft.SecurityInsights/threatIntelligence
* **ApiVersion**: 2022-08-01
* **Input**: [ThreatIntelligenceFilteringCriteria](#threatintelligencefilteringcriteria)
* **Output**: [ThreatIntelligenceInformationList](#threatintelligenceinformationlist)

## Function replaceTags (Microsoft.SecurityInsights/threatIntelligence/indicators@2022-08-01)
* **Resource**: Microsoft.SecurityInsights/threatIntelligence/indicators
* **ApiVersion**: 2022-08-01
* **Input**: [ThreatIntelligenceIndicatorModel](#threatintelligenceindicatormodel)
* **Output**: [ThreatIntelligenceInformation](#threatintelligenceinformation)

## AADDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## AatpDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## AccountEntityProperties
### Properties
* **aadTenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **aadUserId**: string (ReadOnly): The Azure Active Directory user id.
* **accountName**: string (ReadOnly): The name of the account. This field should hold only the name without any domain added to it, i.e. administrator.
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **displayName**: string (ReadOnly): The display name of the account.
* **dnsDomain**: string (ReadOnly): The fully qualified domain DNS name.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **hostEntityId**: string (ReadOnly): The Host entity id that contains the account in case it is a local account (not domain joined)
* **isDomainJoined**: bool (ReadOnly): Determines whether this is a domain account.
* **ntDomain**: string (ReadOnly): The NetBIOS domain name as it appears in the alert format - domain\username. Examples: NT AUTHORITY.
* **objectGuid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The objectGUID attribute is a single-value attribute that is the unique identifier for the object, assigned by active directory.
* **puid**: string (ReadOnly): The Azure Active Directory Passport User ID.
* **sid**: string (ReadOnly): The account security identifier, e.g. S-1-5-18.
* **upnSuffix**: string (ReadOnly): The user principal name suffix for the account, in some cases it is also the domain name. Examples: contoso.com.

## ActionRequestPropertiesOrActionResponseProperties
### Properties
* **logicAppResourceId**: string (Required): Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}.
* **triggerUri**: string (Required, WriteOnly): Logic App Callback URL for this specific workflow.
* **workflowId**: string (ReadOnly): The name of the logic app's workflow.

## AlertDetailsOverride
### Properties
* **alertDescriptionFormat**: string: the format containing columns name(s) to override the alert description
* **alertDisplayNameFormat**: string: the format containing columns name(s) to override the alert name
* **alertSeverityColumnName**: string: the column name to take the alert severity from
* **alertTacticsColumnName**: string: the column name to take the alert tactics from

## AlertRuleTemplateDataSource
### Properties
* **connectorId**: string: The connector id that provides the following data types
* **dataTypes**: string[]: The data types used by the alert rule template

## AlertsDataTypeOfDataConnector
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Alerts data type connection.

## ASCDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **subscriptionId**: string: The subscription id to connect to, and get the data from.

## AutomationRuleAction
* **Discriminator**: actionType

### Base Properties
* **order**: int (Required)

### AutomationRuleModifyPropertiesAction
#### Properties
* **actionConfiguration**: [IncidentPropertiesAction](#incidentpropertiesaction)
* **actionType**: 'ModifyProperties' (Required): The type of the automation rule action

### AutomationRuleRunPlaybookAction
#### Properties
* **actionConfiguration**: [PlaybookActionProperties](#playbookactionproperties)
* **actionType**: 'RunPlaybook' (Required): The type of the automation rule action


## AutomationRuleCondition
* **Discriminator**: conditionType

### Base Properties

### PropertyConditionProperties
#### Properties
* **conditionProperties**: [AutomationRulePropertyValuesCondition](#automationrulepropertyvaluescondition)
* **conditionType**: 'Property' (Required)


## AutomationRuleProperties
### Properties
* **actions**: [AutomationRuleAction](#automationruleaction)[] {maxLength: 20} (Required): The actions to execute when the automation rule is triggered
* **createdBy**: [ClientInfo](#clientinfo) (ReadOnly): Information on the client (user or application) that made some action
* **createdTimeUtc**: string (ReadOnly): The time the automation rule was created
* **displayName**: string {maxLength: 500} (Required): The display name of the automation rule
* **lastModifiedBy**: [ClientInfo](#clientinfo) (ReadOnly): Information on the client (user or application) that made some action
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the automation rule was updated
* **order**: int {minValue: 1, maxValue: 1000} (Required): The order of execution of the automation rule
* **triggeringLogic**: [AutomationRuleTriggeringLogic](#automationruletriggeringlogic) (Required): Describes automation rule triggering logic

## AutomationRulePropertyValuesCondition
### Properties
* **operator**: 'Contains' | 'EndsWith' | 'Equals' | 'NotContains' | 'NotEndsWith' | 'NotEquals' | 'NotStartsWith' | 'StartsWith' | string
* **propertyName**: 'AccountAadTenantId' | 'AccountAadUserId' | 'AccountNTDomain' | 'AccountName' | 'AccountObjectGuid' | 'AccountPUID' | 'AccountSid' | 'AccountUPNSuffix' | 'AlertProductNames' | 'AzureResourceResourceId' | 'AzureResourceSubscriptionId' | 'CloudApplicationAppId' | 'CloudApplicationAppName' | 'DNSDomainName' | 'FileDirectory' | 'FileHashValue' | 'FileName' | 'HostAzureID' | 'HostNTDomain' | 'HostName' | 'HostNetBiosName' | 'HostOSVersion' | 'IPAddress' | 'IncidentDescription' | 'IncidentLabel' | 'IncidentProviderName' | 'IncidentRelatedAnalyticRuleIds' | 'IncidentSeverity' | 'IncidentStatus' | 'IncidentTactics' | 'IncidentTitle' | 'IoTDeviceId' | 'IoTDeviceModel' | 'IoTDeviceName' | 'IoTDeviceOperatingSystem' | 'IoTDeviceType' | 'IoTDeviceVendor' | 'MailMessageDeliveryAction' | 'MailMessageDeliveryLocation' | 'MailMessageP1Sender' | 'MailMessageP2Sender' | 'MailMessageRecipient' | 'MailMessageSenderIP' | 'MailMessageSubject' | 'MailboxDisplayName' | 'MailboxPrimaryAddress' | 'MailboxUPN' | 'MalwareCategory' | 'MalwareName' | 'ProcessCommandLine' | 'ProcessId' | 'RegistryKey' | 'RegistryValueData' | 'Url' | string: The property to evaluate in an automation rule property condition
* **propertyValues**: string[]

## AutomationRuleTriggeringLogic
### Properties
* **conditions**: [AutomationRuleCondition](#automationrulecondition)[] {maxLength: 50}: The conditions to evaluate to determine if the automation rule should be triggered on a given object
* **expirationTimeUtc**: string: Determines when the automation rule should automatically expire and be disabled.
* **isEnabled**: bool (Required): Determines whether the automation rule is enabled or disabled
* **triggersOn**: 'Incidents' | string (Required)
* **triggersWhen**: 'Created' | string (Required)

## AwsCloudTrailDataConnectorDataTypes
### Properties
* **logs**: [AwsCloudTrailDataConnectorDataTypesLogs](#awscloudtraildataconnectordatatypeslogs): Logs data type.

## AwsCloudTrailDataConnectorDataTypesLogs
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## AwsCloudTrailDataConnectorProperties
### Properties
* **awsRoleArn**: string: The Aws Role Arn (with CloudTrailReadOnly policy) that is used to access the Aws account.
* **dataTypes**: [AwsCloudTrailDataConnectorDataTypes](#awscloudtraildataconnectordatatypes): The available data types for the connector.

## AzureResourceEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **resourceId**: string (ReadOnly): The azure resource id of the resource
* **subscriptionId**: string (ReadOnly): The subscription id of the resource

## BookmarkProperties
### Properties
* **created**: string: The time the bookmark was created
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the bookmark
* **displayName**: string (Required): The display name of the bookmark
* **eventTime**: string: The bookmark event time
* **incidentInfo**: [IncidentInfo](#incidentinfo): Describes an incident that relates to bookmark
* **labels**: string[]: List of labels relevant to this bookmark
* **notes**: string: The notes of the bookmark
* **query**: string (Required): The query of the bookmark.
* **queryEndTime**: string: The end time for the query
* **queryResult**: string: The query result of the bookmark.
* **queryStartTime**: string: The start time for the query
* **updated**: string: The last time the bookmark was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the bookmark

## ClientInfo
### Properties
* **email**: string: The email of the client.
* **name**: string: The name of the client.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The object id of the client.
* **userPrincipalName**: string: The user principal name of the client.

## CloudApplicationEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **appId**: int (ReadOnly): The technical identifier of the application.
* **appName**: string (ReadOnly): The name of the related cloud application.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **instanceName**: string (ReadOnly): The user defined instance name of the cloud application. It is often used to distinguish between several applications of the same type that a customer has.

## DataConnectorDataTypeCommon
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## DnsEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **dnsServerIpEntityId**: string (ReadOnly): An ip entity id for the dns server resolving the request
* **domainName**: string (ReadOnly): The name of the dns record associated with the alert
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **hostIpAddressEntityId**: string (ReadOnly): An ip entity id for the dns request client
* **ipAddressEntityIds**: string[] (ReadOnly): Ip entity identifiers for the resolved ip address.

## Entity
* **Discriminator**: kind

### Base Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

### AccountEntity
#### Properties
* **kind**: 'Account' (Required): The kind of the entity.
* **properties**: [AccountEntityProperties](#accountentityproperties): Account entity properties

### AzureResourceEntity
#### Properties
* **kind**: 'AzureResource' (Required): The kind of the entity.
* **properties**: [AzureResourceEntityProperties](#azureresourceentityproperties): AzureResource entity properties

### HuntingBookmark
#### Properties
* **kind**: 'Bookmark' (Required): The kind of the entity.
* **properties**: [HuntingBookmarkProperties](#huntingbookmarkproperties): HuntingBookmark entity properties

### CloudApplicationEntity
#### Properties
* **kind**: 'CloudApplication' (Required): The kind of the entity.
* **properties**: [CloudApplicationEntityProperties](#cloudapplicationentityproperties): CloudApplication entity properties

### DnsEntity
#### Properties
* **kind**: 'DnsResolution' (Required): The kind of the entity.
* **properties**: [DnsEntityProperties](#dnsentityproperties): Dns entity properties

### FileEntity
#### Properties
* **kind**: 'File' (Required): The kind of the entity.
* **properties**: [FileEntityProperties](#fileentityproperties): File entity properties

### FileHashEntity
#### Properties
* **kind**: 'FileHash' (Required): The kind of the entity.
* **properties**: [FileHashEntityProperties](#filehashentityproperties): FileHash entity properties

### HostEntity
#### Properties
* **kind**: 'Host' (Required): The kind of the entity.
* **properties**: [HostEntityProperties](#hostentityproperties): Host entity properties

### IoTDeviceEntity
#### Properties
* **kind**: 'IoTDevice' (Required): The kind of the entity.
* **properties**: [IoTDeviceEntityProperties](#iotdeviceentityproperties): IoTDevice entity properties

### IpEntity
#### Properties
* **kind**: 'Ip' (Required): The kind of the entity.
* **properties**: [IpEntityProperties](#ipentityproperties): Ip entity properties

### MailboxEntity
#### Properties
* **kind**: 'Mailbox' (Required): The kind of the entity.
* **properties**: [MailboxEntityProperties](#mailboxentityproperties): Mailbox entity properties

### MailClusterEntity
#### Properties
* **kind**: 'MailCluster' (Required): The kind of the entity.
* **properties**: [MailClusterEntityProperties](#mailclusterentityproperties): Mail cluster entity properties

### MailMessageEntity
#### Properties
* **kind**: 'MailMessage' (Required): The kind of the entity.
* **properties**: [MailMessageEntityProperties](#mailmessageentityproperties): Mail message entity properties

### MalwareEntity
#### Properties
* **kind**: 'Malware' (Required): The kind of the entity.
* **properties**: [MalwareEntityProperties](#malwareentityproperties): File entity properties

### ProcessEntity
#### Properties
* **kind**: 'Process' (Required): The kind of the entity.
* **properties**: [ProcessEntityProperties](#processentityproperties): Process entity properties

### RegistryKeyEntity
#### Properties
* **kind**: 'RegistryKey' (Required): The kind of the entity.
* **properties**: [RegistryKeyEntityProperties](#registrykeyentityproperties): RegistryKey entity properties

### RegistryValueEntity
#### Properties
* **kind**: 'RegistryValue' (Required): The kind of the entity.
* **properties**: [RegistryValueEntityProperties](#registryvalueentityproperties): RegistryKey entity properties

### SecurityAlert
#### Properties
* **kind**: 'SecurityAlert' (Required): The kind of the entity.
* **properties**: [SecurityAlertProperties](#securityalertproperties): SecurityAlert entity properties

### SecurityGroupEntity
#### Properties
* **kind**: 'SecurityGroup' (Required): The kind of the entity.
* **properties**: [SecurityGroupEntityProperties](#securitygroupentityproperties): SecurityGroup entity properties

### SubmissionMailEntity
#### Properties
* **kind**: 'SubmissionMail' (Required): The kind of the entity.
* **properties**: [SubmissionMailEntityProperties](#submissionmailentityproperties): Submission mail entity properties

### UrlEntity
#### Properties
* **kind**: 'Url' (Required): The kind of the entity.
* **properties**: [UrlEntityProperties](#urlentityproperties): Url entity properties


## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityMapping
### Properties
* **entityType**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'IP' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string: The V3 type of the mapped entity
* **fieldMappings**: [FieldMapping](#fieldmapping)[]: array of field mappings for the given entity mapping

## EventGroupingSettings
### Properties
* **aggregationKind**: 'AlertPerResult' | 'SingleAlert' | string: The event grouping aggregation kinds

## FieldMapping
### Properties
* **columnName**: string: the column name to be mapped to the identifier
* **identifier**: string: the V3 identifier of the entity

## FileEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **directory**: string (ReadOnly): The full path to the file.
* **fileHashEntityIds**: string[] (ReadOnly): The file hash entity identifiers associated with this file
* **fileName**: string (ReadOnly): The file name without path (some alerts might not include path).
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **hostEntityId**: string (ReadOnly): The Host entity id which the file belongs to

## FileHashEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **algorithm**: 'MD5' | 'SHA1' | 'SHA256' | 'SHA256AC' | 'Unknown' | string (ReadOnly): The hash algorithm type.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **hashValue**: string (ReadOnly): The file hash value.

## FusionAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required): The Name of the alert rule template used to create this rule.
* **description**: string (ReadOnly): The description of the alert rule.
* **displayName**: string (ReadOnly): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity for alerts created by this alert rule.
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string)[] (ReadOnly): The tactics of the alert rule
* **techniques**: string[] (ReadOnly): The techniques of the alert rule

## FusionAlertRuleTemplateProperties
### Properties
* **alertRulesCreatedByTemplateCount**: int: the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **description**: string: The description of the alert rule template.
* **displayName**: string: The display name for alert rule template.
* **lastUpdatedDateUTC**: string (ReadOnly): The time that this alert rule template was last updated.
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[]: The required data connectors for this template
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity for alerts created by this alert rule.
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string: The alert rule template status.
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string)[]: The tactics of the alert rule template
* **techniques**: string[]: The techniques of the alert rule template

## GeoLocation
### Properties
* **asn**: int (ReadOnly): Autonomous System Number
* **city**: string (ReadOnly): City name
* **countryCode**: string (ReadOnly): The country code according to ISO 3166 format
* **countryName**: string (ReadOnly): Country name according to ISO 3166 Alpha 2: the lowercase of the English Short Name
* **latitude**: int (ReadOnly): The longitude of the identified location, expressed as a floating point number with range of -180 to 180, with positive numbers representing East and negative numbers representing West. Latitude and longitude are derived from the city or postal code.
* **longitude**: int (ReadOnly): The latitude of the identified location, expressed as a floating point number with range of - 90 to 90, with positive numbers representing North and negative numbers representing South. Latitude and longitude are derived from the city or postal code.
* **state**: string (ReadOnly): State name

## GroupingConfiguration
### Properties
* **enabled**: bool (Required): Grouping enabled
* **groupByAlertDetails**: ('DisplayName' | 'Severity' | string)[]: A list of alert details to group by (when matchingMethod is Selected)
* **groupByCustomDetails**: string[]: A list of custom details keys to group by (when matchingMethod is Selected). Only keys defined in the current alert rule may be used.
* **groupByEntities**: ('Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'IP' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string)[]: A list of entity types to group by (when matchingMethod is Selected). Only entities defined in the current alert rule may be used.
* **lookbackDuration**: string (Required): Limit the group to alerts created within the lookback duration (in ISO 8601 duration format)
* **matchingMethod**: 'AllEntities' | 'AnyAlert' | 'Selected' | string (Required): Grouping matching method. When method is Selected at least one of groupByEntities, groupByAlertDetails, groupByCustomDetails must be provided and not empty.
* **reopenClosedIncident**: bool (Required): Re-open closed matching incidents

## HostEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **azureID**: string (ReadOnly): The azure resource id of the VM.
* **dnsDomain**: string (ReadOnly): The DNS domain that this host belongs to. Should contain the compete DNS suffix for the domain
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **hostName**: string (ReadOnly): The hostname without the domain suffix.
* **isDomainJoined**: bool (ReadOnly): Determines whether this host belongs to a domain.
* **netBiosName**: string (ReadOnly): The host name (pre-windows2000).
* **ntDomain**: string (ReadOnly): The NT domain that this host belongs to.
* **omsAgentID**: string (ReadOnly): The OMS agent id, if the host has OMS agent installed.
* **osFamily**: 'Android' | 'IOS' | 'Linux' | 'Unknown' | 'Windows': The operating system type.
* **osVersion**: string (ReadOnly): A free text representation of the operating system. This field is meant to hold specific versions the are more fine grained than OSFamily or future values not supported by OSFamily enumeration

## HuntingBookmark
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **kind**: 'Account' | 'AzureResource' | 'Bookmark' | 'CloudApplication' | 'DnsResolution' | 'File' | 'FileHash' | 'Host' | 'IoTDevice' | 'Ip' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'Url' | string (Required): The kind of the entity.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [HuntingBookmarkProperties](#huntingbookmarkproperties): HuntingBookmark entity properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## HuntingBookmarkProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **created**: string: The time the bookmark was created
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the bookmark
* **displayName**: string (Required): The display name of the bookmark
* **eventTime**: string: The time of the event
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **incidentInfo**: [IncidentInfo](#incidentinfo): Describes an incident that relates to bookmark
* **labels**: string[]: List of labels relevant to this bookmark
* **notes**: string: The notes of the bookmark
* **query**: string (Required): The query of the bookmark.
* **queryResult**: string: The query result of the bookmark.
* **updated**: string: The last time the bookmark was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the bookmark

## IncidentAdditionalData
### Properties
* **alertProductNames**: string[] (ReadOnly): List of product names of alerts in the incident
* **alertsCount**: int (ReadOnly): The number of alerts in the incident
* **bookmarksCount**: int (ReadOnly): The number of bookmarks in the incident
* **commentsCount**: int (ReadOnly): The number of comments in the incident
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string)[] (ReadOnly): The tactics associated with incident

## IncidentAlertList
### Properties
* **value**: [SecurityAlert](#securityalert)[] (Required): Array of incident alerts.

## IncidentBookmarkList
### Properties
* **value**: [HuntingBookmark](#huntingbookmark)[] (Required): Array of incident bookmarks.

## IncidentCommentProperties
### Properties
* **author**: [ClientInfo](#clientinfo) (ReadOnly): Describes the client that created the comment
* **createdTimeUtc**: string (ReadOnly): The time the comment was created
* **lastModifiedTimeUtc**: string (ReadOnly): The time the comment was updated
* **message**: string (Required): The comment message

## IncidentConfiguration
### Properties
* **createIncident**: bool (Required): Create incidents from alerts triggered by this analytics rule
* **groupingConfiguration**: [GroupingConfiguration](#groupingconfiguration): Set how the alerts that are triggered by this analytics rule, are grouped into incidents

## IncidentEntitiesResponse
### Properties
* **entities**: [Entity](#entity)[]: Array of the incident related entities.
* **metaData**: [IncidentEntitiesResultsMetadata](#incidententitiesresultsmetadata)[]: The metadata from the incident related entities results.

## IncidentEntitiesResultsMetadata
### Properties
* **count**: int (Required): Total number of aggregations of the given kind in the incident related entities result.
* **entityKind**: 'Account' | 'AzureResource' | 'Bookmark' | 'CloudApplication' | 'DnsResolution' | 'File' | 'FileHash' | 'Host' | 'IoTDevice' | 'Ip' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'Url' | string (Required): The kind of the aggregated entity.

## IncidentInfo
### Properties
* **incidentId**: string: Incident Id
* **relationName**: string: Relation Name
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity of the incident
* **title**: string: The title of the incident

## IncidentLabel
### Properties
* **labelName**: string (Required): The name of the label
* **labelType**: 'AutoAssigned' | 'User' | string (ReadOnly): The type of the label

## IncidentOwnerInfo
### Properties
* **assignedTo**: string: The name of the user the incident is assigned to.
* **email**: string: The email of the user the incident is assigned to.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The object id of the user the incident is assigned to.
* **ownerType**: 'Group' | 'Unknown' | 'User' | string: The type of the owner the incident is assigned to.
* **userPrincipalName**: string: The user principal name of the user the incident is assigned to.

## IncidentProperties
### Properties
* **additionalData**: [IncidentAdditionalData](#incidentadditionaldata) (ReadOnly): Additional data on the incident
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined' | string: The reason the incident was closed
* **classificationComment**: string: Describes the reason the incident was closed
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected' | string: The classification reason the incident was closed with
* **createdTimeUtc**: string (ReadOnly): The time the incident was created
* **description**: string: The description of the incident
* **firstActivityTimeUtc**: string: The time of the first activity in the incident
* **incidentNumber**: int (ReadOnly): A sequential number
* **incidentUrl**: string (ReadOnly): The deep-link url to the incident in Azure portal
* **labels**: [IncidentLabel](#incidentlabel)[]: List of labels relevant to this incident
* **lastActivityTimeUtc**: string: The time of the last activity in the incident
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the incident was updated
* **owner**: [IncidentOwnerInfo](#incidentownerinfo): Describes a user that the incident is assigned to
* **relatedAnalyticRuleIds**: string[] (ReadOnly): List of resource ids of Analytic rules related to the incident
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (Required): The severity of the incident
* **status**: 'Active' | 'Closed' | 'New' | string (Required): The status of the incident
* **title**: string (Required): The title of the incident

## IncidentPropertiesAction
### Properties
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined' | string: The reason the incident was closed
* **classificationComment**: string: Describes the reason the incident was closed
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected' | string: The classification reason the incident was closed with
* **labels**: [IncidentLabel](#incidentlabel)[]: List of labels to add to the incident
* **owner**: [IncidentOwnerInfo](#incidentownerinfo): Information on the user an incident is assigned to
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity of the incident
* **status**: 'Active' | 'Closed' | 'New' | string: The status of the incident

## IoTDeviceEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **deviceId**: string (ReadOnly): The ID of the IoT Device in the IoT Hub
* **deviceName**: string (ReadOnly): The friendly name of the device
* **deviceType**: string (ReadOnly): The type of the device
* **edgeId**: string (ReadOnly): The ID of the edge device
* **firmwareVersion**: string (ReadOnly): The firmware version of the device
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **hostEntityId**: string (ReadOnly): The Host entity id of this device
* **iotHubEntityId**: string (ReadOnly): The AzureResource entity id of the IoT Hub
* **iotSecurityAgentId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The ID of the security agent running on the device
* **ipAddressEntityId**: string (ReadOnly): The IP entity if of this device
* **macAddress**: string (ReadOnly): The MAC address of the device
* **model**: string (ReadOnly): The model of the device
* **operatingSystem**: string (ReadOnly): The operating system of the device
* **protocols**: string[] (ReadOnly): A list of protocols of the IoTDevice entity.
* **serialNumber**: string (ReadOnly): The serial number of the device
* **source**: string (ReadOnly): The source of the device
* **threatIntelligence**: [ThreatIntelligence](#threatintelligence)[] (ReadOnly): A list of TI contexts attached to the IoTDevice entity.
* **vendor**: string (ReadOnly): The vendor of the device

## IpEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **address**: string (ReadOnly): The IP address as string, e.g. 127.0.0.1 (either in Ipv4 or Ipv6)
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **location**: [GeoLocation](#geolocation) (ReadOnly): The geo-location context attached to the ip entity
* **threatIntelligence**: [ThreatIntelligence](#threatintelligence)[] (ReadOnly): A list of TI contexts attached to the ip entity.

## MailboxEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **displayName**: string (ReadOnly): The mailbox's display name
* **externalDirectoryObjectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The AzureAD identifier of mailbox. Similar to AadUserId in account entity but this property is specific to mailbox object on office side
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **mailboxPrimaryAddress**: string (ReadOnly): The mailbox's primary address
* **upn**: string (ReadOnly): The mailbox's UPN

## MailClusterEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **clusterGroup**: string (ReadOnly): The cluster group
* **clusterQueryEndTime**: string (ReadOnly): The cluster query end time
* **clusterQueryStartTime**: string (ReadOnly): The cluster query start time
* **clusterSourceIdentifier**: string (ReadOnly): The id of the cluster source
* **clusterSourceType**: string (ReadOnly): The type of the cluster source
* **countByDeliveryStatus**: any (ReadOnly): Count of mail messages by DeliveryStatus string representation
* **countByProtectionStatus**: any (ReadOnly): Count of mail messages by ProtectionStatus string representation
* **countByThreatType**: any (ReadOnly): Count of mail messages by ThreatType string representation
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **isVolumeAnomaly**: bool (ReadOnly): Is this a volume anomaly mail cluster
* **mailCount**: int (ReadOnly): The number of mail messages that are part of the mail cluster
* **networkMessageIds**: string[] (ReadOnly): The mail message IDs that are part of the mail cluster
* **query**: string (ReadOnly): The query that was used to identify the messages of the mail cluster
* **queryTime**: string (ReadOnly): The query time
* **source**: string (ReadOnly): The source of the mail cluster (default is 'O365 ATP')
* **threats**: string[] (ReadOnly): The threats of mail messages that are part of the mail cluster

## MailMessageEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **antispamDirection**: 'Inbound' | 'Intraorg' | 'Outbound' | 'Unknown' | string: The directionality of this mail message
* **bodyFingerprintBin1**: int: The bodyFingerprintBin1
* **bodyFingerprintBin2**: int: The bodyFingerprintBin2
* **bodyFingerprintBin3**: int: The bodyFingerprintBin3
* **bodyFingerprintBin4**: int: The bodyFingerprintBin4
* **bodyFingerprintBin5**: int: The bodyFingerprintBin5
* **deliveryAction**: 'Blocked' | 'Delivered' | 'DeliveredAsSpam' | 'Replaced' | 'Unknown': The delivery action of this mail message like Delivered, Blocked, Replaced etc
* **deliveryLocation**: 'DeletedFolder' | 'Dropped' | 'External' | 'Failed' | 'Forwarded' | 'Inbox' | 'JunkFolder' | 'Quarantine' | 'Unknown': The delivery location of this mail message like Inbox, JunkFolder etc
* **fileEntityIds**: string[] (ReadOnly): The File entity ids of this mail message's attachments
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **internetMessageId**: string (ReadOnly): The internet message id of this mail message
* **language**: string (ReadOnly): The language of this mail message
* **networkMessageId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The network message id of this mail message
* **p1Sender**: string (ReadOnly): The p1 sender's email address
* **p1SenderDisplayName**: string (ReadOnly): The p1 sender's display name
* **p1SenderDomain**: string (ReadOnly): The p1 sender's domain
* **p2Sender**: string (ReadOnly): The p2 sender's email address
* **p2SenderDisplayName**: string (ReadOnly): The p2 sender's display name
* **p2SenderDomain**: string (ReadOnly): The p2 sender's domain
* **receiveDate**: string (ReadOnly): The receive date of this message
* **recipient**: string (ReadOnly): The recipient of this mail message. Note that in case of multiple recipients the mail message is forked and each copy has one recipient
* **senderIP**: string (ReadOnly): The sender's IP address
* **subject**: string (ReadOnly): The subject of this mail message
* **threatDetectionMethods**: string[] (ReadOnly): The threat detection methods
* **threats**: string[] (ReadOnly): The threats of this mail message
* **urls**: string[] (ReadOnly): The Urls contained in this mail message

## MalwareEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **category**: string (ReadOnly): The malware category by the vendor, e.g. Trojan
* **fileEntityIds**: string[] (ReadOnly): List of linked file entity identifiers on which the malware was found
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **malwareName**: string (ReadOnly): The malware name by the vendor, e.g. Win32/Toga!rfn
* **processEntityIds**: string[] (ReadOnly): List of linked process entity identifiers on which the malware was found.

## McasDataConnectorDataTypes
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Alerts data type connection.
* **discoveryLogs**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Discovery log data type connection.

## McasDataConnectorProperties
### Properties
* **dataTypes**: [McasDataConnectorDataTypes](#mcasdataconnectordatatypes): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## MdatpDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## MicrosoftSecurityIncidentCreationAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string: The Name of the alert rule template used to create this rule.
* **description**: string: The description of the alert rule.
* **displayName**: string (Required): The display name for alerts created by this alert rule.
* **displayNamesExcludeFilter**: string[]: the alerts' displayNames on which the cases will not be generated
* **displayNamesFilter**: string[]: the alerts' displayNames on which the cases will be generated
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **productFilter**: 'Azure Active Directory Identity Protection' | 'Azure Advanced Threat Protection' | 'Azure Security Center for IoT' | 'Azure Security Center' | 'Microsoft Cloud App Security' | string (Required): The alerts' productName on which the cases will be generated
* **severitiesFilter**: ('High' | 'Informational' | 'Low' | 'Medium' | string)[]: the alerts' severities on which the cases will be generated

## MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties
### Properties
* **alertRulesCreatedByTemplateCount**: int: the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **description**: string: The description of the alert rule template.
* **displayName**: string: The display name for alert rule template.
* **displayNamesExcludeFilter**: string[]: the alerts' displayNames on which the cases will not be generated
* **displayNamesFilter**: string[]: the alerts' displayNames on which the cases will be generated
* **lastUpdatedDateUTC**: string (ReadOnly): The time that this alert rule template was last updated.
* **productFilter**: 'Azure Active Directory Identity Protection' | 'Azure Advanced Threat Protection' | 'Azure Security Center for IoT' | 'Azure Security Center' | 'Microsoft Cloud App Security' | string (Required): The alerts' productName on which the cases will be generated
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[]: The required data connectors for this template
* **severitiesFilter**: ('High' | 'Informational' | 'Low' | 'Medium' | string)[]: the alerts' severities on which the cases will be generated
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string: The alert rule template status.

## OfficeDataConnectorDataTypes
### Properties
* **exchange**: [OfficeDataConnectorDataTypesExchange](#officedataconnectordatatypesexchange): Exchange data type connection.
* **sharePoint**: [OfficeDataConnectorDataTypesSharePoint](#officedataconnectordatatypessharepoint): SharePoint data type connection.
* **teams**: [OfficeDataConnectorDataTypesTeams](#officedataconnectordatatypesteams): Teams data type connection.

## OfficeDataConnectorDataTypesExchange
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## OfficeDataConnectorDataTypesSharePoint
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## OfficeDataConnectorDataTypesTeams
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## OfficeDataConnectorProperties
### Properties
* **dataTypes**: [OfficeDataConnectorDataTypes](#officedataconnectordatatypes): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## PlaybookActionProperties
### Properties
* **logicAppResourceId**: string (Required): The resource id of the playbook resource
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The tenant id of the playbook resource

## ProcessEntityProperties
### Properties
* **accountEntityId**: string (ReadOnly): The account entity id running the processes.
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **commandLine**: string (ReadOnly): The command line used to create the process
* **creationTimeUtc**: string (ReadOnly): The time when the process started to run
* **elevationToken**: 'Default' | 'Full' | 'Limited': The elevation token associated with the process.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **hostEntityId**: string (ReadOnly): The host entity id on which the process was running
* **hostLogonSessionEntityId**: string (ReadOnly): The session entity id in which the process was running
* **imageFileEntityId**: string (ReadOnly): Image file entity id
* **parentProcessEntityId**: string (ReadOnly): The parent process entity id.
* **processId**: string (ReadOnly): The process ID

## RegistryKeyEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **hive**: 'HKEY_A' | 'HKEY_CLASSES_ROOT' | 'HKEY_CURRENT_CONFIG' | 'HKEY_CURRENT_USER' | 'HKEY_CURRENT_USER_LOCAL_SETTINGS' | 'HKEY_LOCAL_MACHINE' | 'HKEY_PERFORMANCE_DATA' | 'HKEY_PERFORMANCE_NLSTEXT' | 'HKEY_PERFORMANCE_TEXT' | 'HKEY_USERS' | string (ReadOnly): the hive that holds the registry key.
* **key**: string (ReadOnly): The registry key path.

## RegistryValueEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **keyEntityId**: string (ReadOnly): The registry key entity id.
* **valueData**: string (ReadOnly): String formatted representation of the value data.
* **valueName**: string (ReadOnly): The registry value name.
* **valueType**: 'Binary' | 'DWord' | 'ExpandString' | 'MultiString' | 'None' | 'QWord' | 'String' | 'Unknown' | string (ReadOnly): Specifies the data types to use when storing values in the registry, or identifies the data type of a value in the registry.

## RelationProperties
### Properties
* **relatedResourceId**: string (Required): The resource ID of the related resource
* **relatedResourceKind**: string (ReadOnly): The resource kind of the related resource
* **relatedResourceName**: string (ReadOnly): The name of the related resource
* **relatedResourceType**: string (ReadOnly): The resource type of the related resource

## ScheduledAlertRuleCommonPropertiesCustomDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduledAlertRuleProperties
### Properties
* **alertDetailsOverride**: [AlertDetailsOverride](#alertdetailsoverride): The alert details override settings
* **alertRuleTemplateName**: string: The Name of the alert rule template used to create this rule.
* **customDetails**: [ScheduledAlertRuleCommonPropertiesCustomDetails](#scheduledalertrulecommonpropertiescustomdetails): Dictionary of string key-value pairs of columns to be attached to the alert
* **description**: string: The description of the alert rule.
* **displayName**: string (Required): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **entityMappings**: [EntityMapping](#entitymapping)[]: Array of the entity mappings of the alert rule
* **eventGroupingSettings**: [EventGroupingSettings](#eventgroupingsettings): The event grouping settings.
* **incidentConfiguration**: [IncidentConfiguration](#incidentconfiguration): The settings of the incidents that created from alerts triggered by this analytics rule
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert rule has been modified.
* **query**: string: The query that creates alerts for this rule.
* **queryFrequency**: string: The frequency (in ISO 8601 duration format) for this alert rule to run.
* **queryPeriod**: string: The period (in ISO 8601 duration format) that this alert rule looks at.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity for alerts created by this alert rule.
* **suppressionDuration**: string (Required): The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
* **suppressionEnabled**: bool (Required): Determines whether the suppression for this alert rule is enabled or disabled.
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string)[]: The tactics of the alert rule
* **techniques**: string[]: The techniques of the alert rule
* **templateVersion**: string: The version of the alert rule template used to create this rule - in format <a.b.c>, where all are numbers, for example 0 <1.0.2>
* **triggerOperator**: 'Equal' | 'GreaterThan' | 'LessThan' | 'NotEqual': The operation against the threshold that triggers alert rule.
* **triggerThreshold**: int: The threshold triggers this alert rule.

## ScheduledAlertRuleTemplateProperties
### Properties
* **alertDetailsOverride**: [AlertDetailsOverride](#alertdetailsoverride): The alert details override settings
* **alertRulesCreatedByTemplateCount**: int: the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **customDetails**: [ScheduledAlertRuleTemplatePropertiesCustomDetails](#scheduledalertruletemplatepropertiescustomdetails): Dictionary of string key-value pairs of columns to be attached to the alert
* **description**: string: The description of the alert rule template.
* **displayName**: string: The display name for alert rule template.
* **entityMappings**: [EntityMapping](#entitymapping)[]: Array of the entity mappings of the alert rule
* **eventGroupingSettings**: [EventGroupingSettings](#eventgroupingsettings): The event grouping settings.
* **lastUpdatedDateUTC**: string (ReadOnly): The time that this alert rule template was last updated.
* **query**: string: The query that creates alerts for this rule.
* **queryFrequency**: string: The frequency (in ISO 8601 duration format) for this alert rule to run.
* **queryPeriod**: string: The period (in ISO 8601 duration format) that this alert rule looks at.
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[]: The required data connectors for this template
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity for alerts created by this alert rule.
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string: The alert rule template status.
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string)[]: The tactics of the alert rule template
* **techniques**: string[]: The techniques of the alert rule template
* **triggerOperator**: 'Equal' | 'GreaterThan' | 'LessThan' | 'NotEqual': The operation against the threshold that triggers alert rule.
* **triggerThreshold**: int: The threshold triggers this alert rule.
* **version**: string: The version of this template - in format <a.b.c>, where all are numbers. For example <1.0.2>.

## ScheduledAlertRuleTemplatePropertiesCustomDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecurityAlert
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **kind**: 'Account' | 'AzureResource' | 'Bookmark' | 'CloudApplication' | 'DnsResolution' | 'File' | 'FileHash' | 'Host' | 'IoTDevice' | 'Ip' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'Url' | string (Required): The kind of the entity.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [SecurityAlertProperties](#securityalertproperties): SecurityAlert entity properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## SecurityAlertProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **alertDisplayName**: string (ReadOnly): The display name of the alert.
* **alertLink**: string (ReadOnly): The uri link of the alert.
* **alertType**: string (ReadOnly): The type name of the alert.
* **compromisedEntity**: string (ReadOnly): Display name of the main entity being reported on.
* **confidenceLevel**: 'High' | 'Low' | 'Unknown' | string (ReadOnly): The confidence level of this alert.
* **confidenceReasons**: [SecurityAlertPropertiesConfidenceReasonsItem](#securityalertpropertiesconfidencereasonsitem)[] (ReadOnly): The confidence reasons
* **confidenceScore**: int (ReadOnly): The confidence score of the alert.
* **confidenceScoreStatus**: 'Final' | 'InProcess' | 'NotApplicable' | 'NotFinal' | string (ReadOnly): The confidence score calculation status, i.e. indicating if score calculation is pending for this alert, not applicable or final.
* **description**: string (ReadOnly): Alert description.
* **endTimeUtc**: string (ReadOnly): The impact end time of the alert (the time of the last event contributing to the alert).
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **intent**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Exploitation' | 'Impact' | 'LateralMovement' | 'Persistence' | 'PrivilegeEscalation' | 'Probing' | 'Unknown' | string (ReadOnly): Holds the alert intent stage(s) mapping for this alert.
* **processingEndTime**: string (ReadOnly): The time the alert was made available for consumption.
* **productComponentName**: string (ReadOnly): The name of a component inside the product which generated the alert.
* **productName**: string (ReadOnly): The name of the product which published this alert.
* **productVersion**: string (ReadOnly): The version of the product generating the alert.
* **providerAlertId**: string (ReadOnly): The identifier of the alert inside the product which generated the alert.
* **remediationSteps**: string[] (ReadOnly): Manual action items to take to remediate the alert.
* **resourceIdentifiers**: any[] (ReadOnly): The list of resource identifiers of the alert.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity of the alert
* **startTimeUtc**: string (ReadOnly): The impact start time of the alert (the time of the first event contributing to the alert).
* **status**: 'Dismissed' | 'InProgress' | 'New' | 'Resolved' | 'Unknown' | string (ReadOnly): The lifecycle status of the alert.
* **systemAlertId**: string (ReadOnly): Holds the product identifier of the alert for the product.
* **tactics**: ('Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string)[] (ReadOnly): The tactics of the alert
* **timeGenerated**: string (ReadOnly): The time the alert was generated.
* **vendorName**: string (ReadOnly): The name of the vendor that raise the alert.

## SecurityAlertPropertiesConfidenceReasonsItem
### Properties
* **reason**: string (ReadOnly): The reason's description
* **reasonType**: string (ReadOnly): The type (category) of the reason

## SecurityGroupEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **distinguishedName**: string (ReadOnly): The group distinguished name
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **objectGuid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): A single-value attribute that is the unique identifier for the object, assigned by active directory.
* **sid**: string (ReadOnly): The SID attribute is a single-value attribute that specifies the security identifier (SID) of the group

## SentinelOnboardingStateProperties
### Properties
* **customerManagedKey**: bool: Flag that indicates the status of the CMK setting

## SubmissionMailEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **networkMessageId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The network message id of email to which submission belongs
* **recipient**: string (ReadOnly): The recipient of the mail
* **reportType**: string (ReadOnly): The submission type for the given instance. This maps to Junk, Phish, Malware or NotJunk.
* **sender**: string (ReadOnly): The sender of the mail
* **senderIp**: string (ReadOnly): The sender's IP
* **subject**: string (ReadOnly): The subject of submission mail
* **submissionDate**: string (ReadOnly): The submission date
* **submissionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The submission id
* **submitter**: string (ReadOnly): The submitter
* **timestamp**: string (ReadOnly): The Time stamp when the message is received (Mail)

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## ThreatIntelligence
### Properties
* **confidence**: int (ReadOnly): Confidence (must be between 0 and 1)
* **providerName**: string (ReadOnly): Name of the provider from whom this Threat Intelligence information was received
* **reportLink**: string (ReadOnly): Report link
* **threatDescription**: string (ReadOnly): Threat description (free text)
* **threatName**: string (ReadOnly): Threat name (e.g. "Jedobot malware")
* **threatType**: string (ReadOnly): Threat type (e.g. "Botnet")

## ThreatIntelligenceAppendTags
### Properties
* **threatIntelligenceTags**: string[]: List of tags to be appended.

## ThreatIntelligenceExternalReference
### Properties
* **description**: string: External reference description
* **externalId**: string: External reference ID
* **hashes**: [ThreatIntelligenceExternalReferenceHashes](#threatintelligenceexternalreferencehashes): External reference hashes
* **sourceName**: string: External reference source name
* **url**: string: External reference URL

## ThreatIntelligenceExternalReferenceHashes
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ThreatIntelligenceFilteringCriteria
### Properties
* **ids**: string[]: Ids of threat intelligence indicators
* **includeDisabled**: bool: Parameter to include/exclude disabled indicators.
* **keywords**: string[]: Keywords for searching threat intelligence indicators
* **maxConfidence**: int: Maximum confidence.
* **maxValidUntil**: string: End time for ValidUntil filter.
* **minConfidence**: int: Minimum confidence.
* **minValidUntil**: string: Start time for ValidUntil filter.
* **pageSize**: int: Page size
* **patternTypes**: string[]: Pattern types
* **skipToken**: string: Skip token.
* **sortBy**: [ThreatIntelligenceSortingCriteria](#threatintelligencesortingcriteria)[]: Columns to sort by and sorting order
* **sources**: string[]: Sources of threat intelligence indicators
* **threatTypes**: string[]: Threat types of threat intelligence indicators

## ThreatIntelligenceGranularMarkingModel
### Properties
* **language**: string: Language granular marking model
* **markingRef**: int: marking reference granular marking model
* **selectors**: string[]: granular marking model selectors

## ThreatIntelligenceIndicatorModel
### Properties
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **kind**: 'indicator' | string (Required): The kind of the entity.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ThreatIntelligenceIndicatorProperties](#threatintelligenceindicatorproperties): Threat Intelligence Entity properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ThreatIntelligenceIndicatorProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **confidence**: int: Confidence of threat intelligence entity
* **created**: string: Created by
* **createdByRef**: string: Created by reference of threat intelligence entity
* **defanged**: bool: Is threat intelligence entity defanged
* **description**: string: Description of a threat intelligence entity
* **displayName**: string: Display name of a threat intelligence entity
* **extensions**: [ThreatIntelligenceIndicatorPropertiesExtensions](#threatintelligenceindicatorpropertiesextensions): Extensions map
* **externalId**: string: External ID of threat intelligence entity
* **externalLastUpdatedTimeUtc**: string: External last updated time in UTC
* **externalReferences**: [ThreatIntelligenceExternalReference](#threatintelligenceexternalreference)[]: External References
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **granularMarkings**: [ThreatIntelligenceGranularMarkingModel](#threatintelligencegranularmarkingmodel)[]: Granular Markings
* **indicatorTypes**: string[]: Indicator types of threat intelligence entities
* **killChainPhases**: [ThreatIntelligenceKillChainPhase](#threatintelligencekillchainphase)[]: Kill chain phases
* **labels**: string[]: Labels  of threat intelligence entity
* **language**: string: Language of threat intelligence entity
* **lastUpdatedTimeUtc**: string: Last updated time in UTC
* **modified**: string: Modified by
* **objectMarkingRefs**: string[]: Threat intelligence entity object marking references
* **parsedPattern**: [ThreatIntelligenceParsedPattern](#threatintelligenceparsedpattern)[]: Parsed patterns
* **pattern**: string: Pattern of a threat intelligence entity
* **patternType**: string: Pattern type of a threat intelligence entity
* **patternVersion**: string: Pattern version of a threat intelligence entity
* **revoked**: bool: Is threat intelligence entity revoked
* **source**: string: Source of a threat intelligence entity
* **threatIntelligenceTags**: string[]: List of tags
* **threatTypes**: string[]: Threat types
* **validFrom**: string: Valid from
* **validUntil**: string: Valid until

## ThreatIntelligenceIndicatorPropertiesExtensions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ThreatIntelligenceInformation
* **Discriminator**: kind

### Base Properties
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

### ThreatIntelligenceIndicatorModel
#### Properties
* **kind**: 'indicator' (Required): The kind of the entity.
* **properties**: [ThreatIntelligenceIndicatorProperties](#threatintelligenceindicatorproperties): Threat Intelligence Entity properties


## ThreatIntelligenceInformationList
### Properties
* **nextLink**: string (ReadOnly): URL to fetch the next set of information objects.
* **value**: [ThreatIntelligenceInformation](#threatintelligenceinformation)[] (Required): Array of threat intelligence information objects.

## ThreatIntelligenceKillChainPhase
### Properties
* **killChainName**: string: Kill chainName name
* **phaseName**: string: Phase name

## ThreatIntelligenceParsedPattern
### Properties
* **patternTypeKey**: string: Pattern type key
* **patternTypeValues**: [ThreatIntelligenceParsedPatternTypeValue](#threatintelligenceparsedpatterntypevalue)[]: Pattern type keys

## ThreatIntelligenceParsedPatternTypeValue
### Properties
* **value**: string: Value of parsed pattern
* **valueType**: string: Type of the value

## ThreatIntelligenceSortingCriteria
### Properties
* **itemKey**: string: Column name
* **sortOrder**: 'ascending' | 'descending' | 'unsorted' | string: Sorting order (ascending/descending/unsorted).

## TIDataConnectorDataTypes
### Properties
* **indicators**: [TIDataConnectorDataTypesIndicators](#tidataconnectordatatypesindicators): Data type for indicators connection.

## TIDataConnectorDataTypesIndicators
### Properties
* **state**: 'Disabled' | 'Enabled' | string: Describe whether this data type connection is enabled or not.

## TIDataConnectorProperties
### Properties
* **dataTypes**: [TIDataConnectorDataTypes](#tidataconnectordatatypes): The available data types for the connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.
* **tipLookbackPeriod**: string: The lookback period for the feed to be imported.

## UrlEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **url**: string (ReadOnly): A full URL the entity points to

## UserInfo
### Properties
* **email**: string (ReadOnly): The email of the user.
* **name**: string (ReadOnly): The name of the user.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The object id of the user.

## WatchlistItemProperties
### Properties
* **created**: string: The time the watchlist item was created
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the watchlist item
* **entityMapping**: any: key-value pairs for a watchlist item entity mapping
* **isDeleted**: bool: A flag that indicates if the watchlist item is deleted or not
* **itemsKeyValue**: any (Required): key-value pairs for a watchlist item
* **tenantId**: string: The tenantId to which the watchlist item belongs to
* **updated**: string: The last time the watchlist item was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the watchlist item
* **watchlistItemId**: string: The id (a Guid) of the watchlist item
* **watchlistItemType**: string: The type of the watchlist item

## WatchlistProperties
### Properties
* **contentType**: string: The content type of the raw content. For now, only text/csv is valid
* **created**: string: The time the watchlist was created
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the watchlist
* **defaultDuration**: string: The default duration of a watchlist (in ISO 8601 duration format)
* **description**: string: A description of the watchlist
* **displayName**: string (Required): The display name of the watchlist
* **isDeleted**: bool: A flag that indicates if the watchlist is deleted or not
* **itemsSearchKey**: string (Required): The search key is used to optimize query performance when using watchlists for joins with other data. For example, enable a column with IP addresses to be the designated SearchKey field, then use this field as the key field when joining to other event data by IP address.
* **labels**: string[]: List of labels relevant to this watchlist
* **numberOfLinesToSkip**: int: The number of lines in a csv content to skip before the header
* **provider**: string (Required): The provider of the watchlist
* **rawContent**: string: The raw content that represents to watchlist items to create. Example : This line will be skipped
header1,header2
value1,value2
* **source**: 'Local file' | 'Remote storage' | string (Required): The source of the watchlist
* **tenantId**: string: The tenantId where the watchlist belongs to
* **updated**: string: The last time the watchlist was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the watchlist
* **uploadStatus**: string: The status of the Watchlist upload : New, InProgress or Complete. **Note** : When a Watchlist upload status is InProgress, the Watchlist cannot be deleted
* **watchlistAlias**: string: The alias of the watchlist
* **watchlistId**: string: The id (a Guid) of the watchlist
* **watchlistType**: string: The type of the watchlist

