# Microsoft.SecurityInsights @ 2021-03-01-preview

## Resource Microsoft.SecurityInsights/alertRules@2021-03-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/alertRules' (ReadOnly, DeployTimeConstant): The resource type
### FusionAlertRule
#### Properties
* **kind**: 'Fusion' (Required): The kind of the alert rule
* **properties**: [FusionAlertRuleProperties](#fusionalertruleproperties): Fusion alert rule base property bag.

### MicrosoftSecurityIncidentCreationAlertRule
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required): The kind of the alert rule
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleProperties](#microsoftsecurityincidentcreationalertruleproperties): MicrosoftSecurityIncidentCreation rule property bag.

### MLBehaviorAnalyticsAlertRule
#### Properties
* **kind**: 'MLBehaviorAnalytics' (Required): The kind of the alert rule
* **properties**: [MLBehaviorAnalyticsAlertRuleProperties](#mlbehavioranalyticsalertruleproperties): MLBehaviorAnalytics alert rule base property bag.

### ScheduledAlertRule
#### Properties
* **kind**: 'Scheduled' (Required): The kind of the alert rule
* **properties**: [ScheduledAlertRuleProperties](#scheduledalertruleproperties): Scheduled alert rule base property bag.

### ThreatIntelligenceAlertRule
#### Properties
* **kind**: 'ThreatIntelligence' (Required): The kind of the alert rule
* **properties**: [ThreatIntelligenceAlertRuleProperties](#threatintelligencealertruleproperties): Threat Intelligence alert rule base property bag.


## Resource Microsoft.SecurityInsights/alertRules/actions@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionRequestProperties](#actionrequestproperties): Action property bag.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/alertRules/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/alertRuleTemplates@2021-03-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/alertRuleTemplates' (ReadOnly, DeployTimeConstant): The resource type
### FusionAlertRuleTemplate
#### Properties
* **kind**: 'Fusion' (Required): The kind of the alert rule
* **properties**: [FusionAlertRuleTemplateProperties](#fusionalertruletemplateproperties) (ReadOnly): Fusion alert rule template properties

### MicrosoftSecurityIncidentCreationAlertRuleTemplate
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required): The kind of the alert rule
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties](#microsoftsecurityincidentcreationalertruletemplateproperties) (ReadOnly): MicrosoftSecurityIncidentCreation rule template properties

### MLBehaviorAnalyticsAlertRuleTemplate
#### Properties
* **kind**: 'MLBehaviorAnalytics' (Required): The kind of the alert rule
* **properties**: [MLBehaviorAnalyticsAlertRuleTemplateProperties](#mlbehavioranalyticsalertruletemplateproperties) (ReadOnly): MLBehaviorAnalytics alert rule template properties.

### ScheduledAlertRuleTemplate
#### Properties
* **kind**: 'Scheduled' (Required): The kind of the alert rule
* **properties**: [ScheduledAlertRuleTemplateProperties](#scheduledalertruletemplateproperties) (ReadOnly): Scheduled alert rule template properties

### ThreatIntelligenceAlertRuleTemplate
#### Properties
* **kind**: 'ThreatIntelligence' (Required): The kind of the alert rule
* **properties**: [ThreatIntelligenceAlertRuleTemplateProperties](#threatintelligencealertruletemplateproperties) (ReadOnly): Threat Intelligence alert rule template properties


## Resource Microsoft.SecurityInsights/dataConnectors@2021-03-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
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

### Dynamics365DataConnector
#### Properties
* **kind**: 'Dynamics365' (Required): The data connector kind
* **properties**: [Dynamics365DataConnectorProperties](#dynamics365dataconnectorproperties): Dynamics365 data connector properties.

### CodelessUiDataConnector
#### Properties
* **kind**: 'GenericUI' (Required): The data connector kind
* **properties**: [CodelessParameters](#codelessparameters): Represents Codeless UI data connector

### McasDataConnector
#### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required): The data connector kind
* **properties**: [McasDataConnectorProperties](#mcasdataconnectorproperties): MCAS (Microsoft Cloud App Security) data connector properties.

### MdatpDataConnector
#### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required): The data connector kind
* **properties**: [MdatpDataConnectorProperties](#mdatpdataconnectorproperties): MDATP (Microsoft Defender Advanced Threat Protection) data connector properties.

### MstiDataConnector
#### Properties
* **kind**: 'MicrosoftThreatIntelligence' (Required): The data connector kind
* **properties**: [MstiDataConnectorProperties](#mstidataconnectorproperties): Microsoft Threat Intelligence data connector properties.

### MTPDataConnector
#### Properties
* **kind**: 'MicrosoftThreatProtection' (Required): The data connector kind
* **properties**: [MTPDataConnectorProperties](#mtpdataconnectorproperties): MTP (Microsoft Threat Protection) data connector properties.

### OfficeDataConnector
#### Properties
* **kind**: 'Office365' (Required): The data connector kind
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties): Office data connector properties.

### OfficeATPDataConnector
#### Properties
* **kind**: 'OfficeATP' (Required): The data connector kind
* **properties**: [OfficeATPDataConnectorProperties](#officeatpdataconnectorproperties): OfficeATP (Office 365 Advanced Threat Protection) data connector properties.

### TIDataConnector
#### Properties
* **kind**: 'ThreatIntelligence' (Required): The data connector kind
* **properties**: [TIDataConnectorProperties](#tidataconnectorproperties): TI (Threat Intelligence) data connector properties.

### TiTaxiiDataConnector
#### Properties
* **kind**: 'ThreatIntelligenceTaxii' (Required): The data connector kind
* **properties**: [TiTaxiiDataConnectorProperties](#titaxiidataconnectorproperties): Threat Intelligence TAXII data connector properties.


## Resource Microsoft.SecurityInsights/entityQueries@2021-03-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/entityQueries' (ReadOnly, DeployTimeConstant): The resource type
### ActivityCustomEntityQuery
#### Properties
* **kind**: 'Activity' (Required): the entity query kind
* **properties**: [ActivityEntityQueriesProperties](#activityentityqueriesproperties): Describes activity entity query properties

### ExpansionEntityQuery
#### Properties
* **kind**: 'Expansion' (Required): the entity query kind
* **properties**: [ExpansionEntityQueriesProperties](#expansionentityqueriesproperties) (ReadOnly): Describes expansion entity query properties


## Resource Microsoft.SecurityInsights/entityQueryTemplates@2021-03-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/entityQueryTemplates' (ReadOnly, DeployTimeConstant): The resource type
### ActivityEntityQueryTemplate
#### Properties
* **kind**: 'Activity' (Required): the entity query template kind
* **properties**: [ActivityEntityQueryTemplateProperties](#activityentityquerytemplateproperties) (ReadOnly): Describes activity entity query properties


## Resource Microsoft.SecurityInsights/incidents@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentProperties](#incidentproperties): Describes incident properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/comments@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentCommentProperties](#incidentcommentproperties): Incident comment property bag.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/relations@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation property bag.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/incidents/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/metadata@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MetadataProperties](#metadataproperties): Metadata property bag.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/metadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/onboardingStates@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SentinelOnboardingStateProperties](#sentinelonboardingstateproperties): The Sentinel onboarding state properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/onboardingStates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/settings@2021-03-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/settings' (ReadOnly, DeployTimeConstant): The resource type
### Anomalies
#### Properties
* **kind**: 'Anomalies' (Required): The kind of the setting
* **properties**: [AnomaliesSettingsProperties](#anomaliessettingsproperties): Anomalies property bag.

### EntityAnalytics
#### Properties
* **kind**: 'EntityAnalytics' (Required): The kind of the setting
* **properties**: [EntityAnalyticsProperties](#entityanalyticsproperties): EntityAnalytics property bag.

### EyesOn
#### Properties
* **kind**: 'EyesOn' (Required): The kind of the setting
* **properties**: [EyesOnSettingsProperties](#eyesonsettingsproperties): EyesOn property bag.

### Ueba
#### Properties
* **kind**: 'Ueba' (Required): The kind of the setting
* **properties**: [UebaProperties](#uebaproperties): Ueba property bag.


## Resource Microsoft.SecurityInsights/sourcecontrols@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlProperties](#sourcecontrolproperties): Describes source control properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistProperties](#watchlistproperties): Describes watchlist properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists/watchlistItems@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistItemProperties](#watchlistitemproperties): Describes watchlist item properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/watchlists/watchlistItems' (ReadOnly, DeployTimeConstant): The resource type

## AADDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## AatpDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## ActionRequestProperties
### Properties
* **logicAppResourceId**: string (Required): Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}.
* **triggerUri**: string (Required, WriteOnly): Logic App Callback URL for this specific workflow.
* **workflowId**: string (ReadOnly): The name of the logic app's workflow.

## ActivityEntityQueriesProperties
### Properties
* **content**: string: The entity query content to display in timeline
* **createdTimeUtc**: string (ReadOnly): The time the activity was created
* **description**: string: The entity query description
* **enabled**: bool: Determines whether this activity is enabled or disabled.
* **entitiesFilter**: [ActivityEntityQueriesPropertiesEntitiesFilter](#activityentityqueriespropertiesentitiesfilter): The query applied only to entities matching to all filters
* **inputEntityType**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'HuntingBookmark' | 'IP' | 'IoTDevice' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string: The type of the entity
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the activity was updated
* **queryDefinitions**: [ActivityEntityQueriesPropertiesQueryDefinitions](#activityentityqueriespropertiesquerydefinitions): The Activity query definitions
* **requiredInputFieldsSets**: string[][]: List of the fields of the source entity that are required to run the query
* **templateName**: string: The template id this activity was created from
* **title**: string: The entity query title

## ActivityEntityQueriesPropertiesEntitiesFilter
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## ActivityEntityQueriesPropertiesQueryDefinitions
### Properties
* **query**: string: The Activity query to run on a given entity

## ActivityEntityQueryTemplateProperties
### Properties
* **content**: string (ReadOnly): The entity query content to display in timeline
* **dataTypes**: [DataTypeDefinitions](#datatypedefinitions)[] (ReadOnly): List of required data types for the given entity query template
* **description**: string (ReadOnly): The entity query description
* **entitiesFilter**: [ActivityEntityQueryTemplatePropertiesEntitiesFilter](#activityentityquerytemplatepropertiesentitiesfilter) (ReadOnly): The query applied only to entities matching to all filters
* **inputEntityType**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'HuntingBookmark' | 'IP' | 'IoTDevice' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string (ReadOnly): The type of the entity
* **queryDefinitions**: [ActivityEntityQueryTemplatePropertiesQueryDefinitions](#activityentityquerytemplatepropertiesquerydefinitions) (ReadOnly): The Activity query definitions
* **requiredInputFieldsSets**: string[][] (ReadOnly): List of the fields of the source entity that are required to run the query
* **title**: string (ReadOnly): The entity query title

## ActivityEntityQueryTemplatePropertiesEntitiesFilter
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## ActivityEntityQueryTemplatePropertiesQueryDefinitions
### Properties
* **query**: string (ReadOnly): The Activity query to run on a given entity
* **summarizeBy**: string (ReadOnly): The dimensions we want to summarize the timeline results on, this is comma separated list

## AlertDetailsOverride
### Properties
* **alertDescriptionFormat**: string: the format containing columns name(s) to override the alert description
* **alertDisplayNameFormat**: string: the format containing columns name(s) to override the alert name
* **alertSeverityColumnName**: string: the column name to take the alert severity from
* **alertTacticsColumnName**: string: the column name to take the alert tactics from

## AlertRuleTemplateDataSource
### Properties
* **connectorId**: string (ReadOnly): The connector id that provides the following data types
* **dataTypes**: string[] (ReadOnly): The data types used by the alert rule template

## AlertsDataTypeOfDataConnector
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon) (Required): Common field for data type in data connectors.

## AnomaliesSettingsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## ASCDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **subscriptionId**: string: The subscription id to connect to, and get the data from.

## Availability
### Properties
* **isPreview**: bool: Set connector as preview
* **status**: '1': The connector Availability Status

## AwsCloudTrailDataConnectorDataTypes
### Properties
* **logs**: [AwsCloudTrailDataConnectorDataTypesLogs](#awscloudtraildataconnectordatatypeslogs) (Required): Logs data type.

## AwsCloudTrailDataConnectorDataTypesLogs
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## AwsCloudTrailDataConnectorProperties
### Properties
* **awsRoleArn**: string: The Aws Role Arn (with CloudTrailReadOnly policy) that is used to access the Aws account.
* **dataTypes**: [AwsCloudTrailDataConnectorDataTypes](#awscloudtraildataconnectordatatypes) (Required): The available data types for Amazon Web Services CloudTrail data connector.

## ClientInfo
### Properties
* **email**: string: The email of the client.
* **name**: string: The name of the client.
* **objectId**: string: The object id of the client.
* **userPrincipalName**: string: The user principal name of the client.

## CodelessParameters
### Properties
* **connectorUiConfig**: [CodelessUiConnectorConfigProperties](#codelessuiconnectorconfigproperties): Config to describe the instructions blade

## CodelessUiConnectorConfigProperties
### Properties
* **availability**: [Availability](#availability) (Required): Connector Availability Status
* **connectivityCriteria**: [CodelessUiConnectorConfigPropertiesConnectivityCriteriaItem](#codelessuiconnectorconfigpropertiesconnectivitycriteriaitem)[] (Required): Define the way the connector check connectivity
* **customImage**: string: An optional custom image to be used when displaying the connector within Azure Sentinel's connector's gallery
* **dataTypes**: [CodelessUiConnectorConfigPropertiesDataTypesItem](#codelessuiconnectorconfigpropertiesdatatypesitem)[] (Required): Data types to check for last data received
* **descriptionMarkdown**: string (Required): Connector description
* **graphQueries**: [CodelessUiConnectorConfigPropertiesGraphQueriesItem](#codelessuiconnectorconfigpropertiesgraphqueriesitem)[] (Required): The graph query to show the current data status
* **graphQueriesTableName**: string (Required): Name of the table the connector will insert the data to
* **instructionSteps**: [CodelessUiConnectorConfigPropertiesInstructionStepsItem](#codelessuiconnectorconfigpropertiesinstructionstepsitem)[] (Required): Instruction steps to enable the connector
* **permissions**: [Permissions](#permissions) (Required): Permissions required for the connector
* **publisher**: string (Required): Connector publisher name
* **sampleQueries**: [CodelessUiConnectorConfigPropertiesSampleQueriesItem](#codelessuiconnectorconfigpropertiessamplequeriesitem)[] (Required): The sample queries for the connector
* **title**: string (Required): Connector blade title

## CodelessUiConnectorConfigPropertiesConnectivityCriteriaItem
### Properties
* **type**: 'IsConnectedQuery' | string: type of connectivity
* **value**: string[]: Queries for checking connectivity

## CodelessUiConnectorConfigPropertiesDataTypesItem
### Properties
* **lastDataReceivedQuery**: string: Query for indicate last data received
* **name**: string: Name of the data type to show in the graph. can be use with {{graphQueriesTableName}} placeholder

## CodelessUiConnectorConfigPropertiesGraphQueriesItem
### Properties
* **baseQuery**: string: The base query for the graph
* **legend**: string: The legend for the graph
* **metricName**: string: the metric that the query is checking

## CodelessUiConnectorConfigPropertiesInstructionStepsItem
### Properties
* **description**: string: Instruction step description
* **instructions**: [InstructionStepsInstructionsItem](#instructionstepsinstructionsitem)[]: Instruction step details
* **title**: string: Instruction step title

## CodelessUiConnectorConfigPropertiesSampleQueriesItem
### Properties
* **description**: string: The sample query description
* **query**: string: the sample query

## ContentPathMap
### Properties
* **contentType**: 'AnalyticRule' | 'Workbook' | string: The content type of a source control path.
* **path**: string: The path to the content.

## DataConnectorDataTypeCommon
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## DataTypeDefinitions
### Properties
* **dataType**: string (ReadOnly): The data type name

## Dynamics365DataConnectorDataTypes
### Properties
* **dynamics365CdsActivities**: [Dynamics365DataConnectorDataTypesDynamics365CdsActivities](#dynamics365dataconnectordatatypesdynamics365cdsactivities) (Required): Common Data Service data type connection.

## Dynamics365DataConnectorDataTypesDynamics365CdsActivities
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## Dynamics365DataConnectorProperties
### Properties
* **dataTypes**: [Dynamics365DataConnectorDataTypes](#dynamics365dataconnectordatatypes) (Required): The available data types for Dynamics365 data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## EntityAnalyticsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## EntityMapping
### Properties
* **entityType**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'IP' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string: The V3 type of the mapped entity
* **fieldMappings**: [FieldMapping](#fieldmapping)[]: array of field mappings for the given entity mapping

## EventGroupingSettings
### Properties
* **aggregationKind**: 'AlertPerResult' | 'SingleAlert' | string: The event grouping aggregation kinds

## ExpansionEntityQueriesProperties
### Properties
* **dataSources**: string[] (ReadOnly): List of the data sources that are required to run the query
* **displayName**: string (ReadOnly): The query display name
* **inputEntityType**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'HuntingBookmark' | 'IP' | 'IoTDevice' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string (ReadOnly): The type of the entity
* **inputFields**: string[] (ReadOnly): List of the fields of the source entity that are required to run the query
* **outputEntityTypes**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'HuntingBookmark' | 'IP' | 'IoTDevice' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string[] (ReadOnly): List of the desired output types to be constructed from the result
* **queryTemplate**: string (ReadOnly): The template query string to be parsed and formatted

## EyesOnSettingsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## FieldMapping
### Properties
* **columnName**: string: the column name to be mapped to the identifier
* **identifier**: string: the V3 identifier of the entity

## FusionAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required): The Name of the alert rule template used to create this rule.
* **description**: string (ReadOnly): The description of the alert rule.
* **displayName**: string (ReadOnly): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity of the alert
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | string[] (ReadOnly): The tactics of the alert rule

## FusionAlertRuleTemplateProperties
### Properties
* **alertRulesCreatedByTemplateCount**: int (ReadOnly): the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **description**: string (ReadOnly): The description of the alert rule template.
* **displayName**: string (ReadOnly): The display name for alert rule template.
* **lastUpdatedDateUTC**: string (ReadOnly): The last time that this alert rule template has been updated.
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[] (ReadOnly): The required data sources for this template
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity of the alert
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string (ReadOnly): The alert rule template status.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | string[] (ReadOnly): The tactics of the alert rule template

## GroupingConfiguration
### Properties
* **enabled**: bool (Required): Grouping enabled
* **groupByAlertDetails**: 'DisplayName' | 'Severity' | string[]: A list of alert details to group by (when matchingMethod is Selected)
* **groupByCustomDetails**: string[]: A list of custom details keys to group by (when matchingMethod is Selected). Only keys defined in the current alert rule may be used.
* **groupByEntities**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'IP' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string[]: A list of entity types to group by (when matchingMethod is Selected). Only entities defined in the current alert rule may be used.
* **lookbackDuration**: string (Required): Limit the group to alerts created within the lookback duration (in ISO 8601 duration format)
* **matchingMethod**: 'AllEntities' | 'AnyAlert' | 'Selected' | string (Required): Grouping matching method. When method is Selected at least one of groupByEntities, groupByAlertDetails, groupByCustomDetails must be provided and not empty.
* **reopenClosedIncident**: bool (Required): Re-open closed matching incidents

## IncidentAdditionalData
### Properties
* **alertProductNames**: string[] (ReadOnly): List of product names of alerts in the incident
* **alertsCount**: int (ReadOnly): The number of alerts in the incident
* **bookmarksCount**: int (ReadOnly): The number of bookmarks in the incident
* **commentsCount**: int (ReadOnly): The number of comments in the incident
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | string[] (ReadOnly): The tactics associated with incident

## IncidentCommentProperties
### Properties
* **author**: [ClientInfo](#clientinfo) (ReadOnly): Information on the client (user or application) that made some action
* **createdTimeUtc**: string (ReadOnly): The time the comment was created
* **lastModifiedTimeUtc**: string (ReadOnly): The time the comment was updated
* **message**: string (Required): The comment message

## IncidentConfiguration
### Properties
* **createIncident**: bool (Required): Create incidents from alerts triggered by this analytics rule
* **groupingConfiguration**: [GroupingConfiguration](#groupingconfiguration): Grouping configuration property bag.

## IncidentLabel
### Properties
* **labelName**: string (Required): The name of the label
* **labelType**: 'System' | 'User' | string (ReadOnly): The type of the label

## IncidentOwnerInfo
### Properties
* **assignedTo**: string: The name of the user the incident is assigned to.
* **email**: string: The email of the user the incident is assigned to.
* **objectId**: string: The object id of the user the incident is assigned to.
* **ownerType**: 'Group' | 'Unknown' | 'User' | string (ReadOnly): The type of the owner the incident is assigned to.
* **userPrincipalName**: string: The user principal name of the user the incident is assigned to.

## IncidentProperties
### Properties
* **additionalData**: [IncidentAdditionalData](#incidentadditionaldata) (ReadOnly): Incident additional data property bag.
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
* **owner**: [IncidentOwnerInfo](#incidentownerinfo): Information on the user an incident is assigned to
* **providerIncidentId**: string: The incident ID assigned by the incident provider
* **providerName**: string: The name of the source provider that generated the incident
* **relatedAnalyticRuleIds**: string[] (ReadOnly): List of resource ids of Analytic rules related to the incident
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (Required): The severity of the incident
* **status**: 'Active' | 'Closed' | 'New' | string (Required): The status of the incident
* **teamInformation**: [TeamInformation](#teaminformation): Describes team information
* **title**: string (Required): The title of the incident

## InstructionStepsInstructionsItem
### Properties
* **parameters**: any: Any object
* **type**: 'CopyableLabel' | 'InfoMessage' | 'InstructionStepsGroup' | string (Required): The kind of the setting

## McasDataConnectorDataTypes
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon) (Required): Common field for data type in data connectors.
* **discoveryLogs**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Common field for data type in data connectors.

## McasDataConnectorProperties
### Properties
* **dataTypes**: [McasDataConnectorDataTypes](#mcasdataconnectordatatypes) (Required): The available data types for MCAS (Microsoft Cloud App Security) data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MdatpDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MetadataAuthor
### Properties
* **email**: string: Email of author contact
* **link**: string: Link for author/vendor page
* **name**: string: Name of the author. Company or person.

## MetadataCategories
### Properties
* **domains**: string[]: domain for the solution content item
* **verticals**: string[]: Industry verticals for the solution content item

## MetadataDependencies
### Properties
* **contentId**: string: Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Can be optionally set for user created content to define dependencies.  If an active content item is made from a template, both will have the same contentId.
* **criteria**: [MetadataDependencies](#metadatadependencies)[]: This is the list of dependencies we must fulfill, according to the AND/OR operator
* **kind**: 'AnalyticsRule' | 'AnalyticsRuleTemplate' | 'DataConnector' | 'DataType' | 'HuntingQuery' | 'InvestigationQuery' | 'Parser' | 'Playbook' | 'PlaybookTemplate' | 'Solution' | 'Watchlist' | 'WatchlistTemplate' | 'Workbook' | 'WorkbookTemplate' | string: The kind of content the metadata is for.
* **name**: string: Name of the content item
* **operator**: 'AND' | 'OR' | string: Operator used for list of dependencies in criteria array.
* **version**: string: Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks

## MetadataProperties
### Properties
* **author**: [MetadataAuthor](#metadataauthor): Publisher or creator of the content item.
* **categories**: [MetadataCategories](#metadatacategories): ies for the solution content item
* **contentId**: string: Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Can be optionally set for user created content to define dependencies.  If an active content item is made from a template, both will have the same contentId.
* **dependencies**: [MetadataDependencies](#metadatadependencies): Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex dependencies.
* **firstPublishDate**: string: first publish date of solution content item
* **kind**: 'AnalyticsRule' | 'AnalyticsRuleTemplate' | 'DataConnector' | 'DataType' | 'HuntingQuery' | 'InvestigationQuery' | 'Parser' | 'Playbook' | 'PlaybookTemplate' | 'Solution' | 'Watchlist' | 'WatchlistTemplate' | 'Workbook' | 'WorkbookTemplate' | string (Required): The kind of content the metadata is for.
* **lastPublishDate**: string: last publish date of solution content item
* **parentId**: string (Required): Full parent resource ID of the content item the metadata is for.  This is the full resource ID including the scope (subscription and resource group)
* **providers**: string[]: Providers for the solution content item
* **source**: [MetadataSource](#metadatasource): The original source of the content item, where it comes from.
* **support**: [MetadataSupport](#metadatasupport): Support information for the content item.
* **version**: string: Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks

## MetadataSource
### Properties
* **kind**: 'Community' | 'LocalWorkspace' | 'Solution' | 'SourceRepository' | string (Required): Source type of the content
* **name**: string: Name of the content source.  The repo name, solution name, LA workspace name etc.
* **sourceId**: string: ID of the content source.  The solution ID, workspace ID, etc

## MetadataSupport
### Properties
* **email**: string: Email of support contact
* **link**: string: Link for support help, like to support page to open a ticket etc.
* **name**: string: Name of the support contact. Company or person.
* **tier**: 'Community' | 'Microsoft' | 'Partner' | string (Required): Type of support for content item

## MicrosoftSecurityIncidentCreationAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string: The Name of the alert rule template used to create this rule.
* **description**: string: The description of the alert rule.
* **displayName**: string (Required): The display name for alerts created by this alert rule.
* **displayNamesExcludeFilter**: string[]: the alerts' displayNames on which the cases will not be generated
* **displayNamesFilter**: string[]: the alerts' displayNames on which the cases will be generated
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **productFilter**: 'Azure Active Directory Identity Protection' | 'Azure Advanced Threat Protection' | 'Azure Security Center for IoT' | 'Azure Security Center' | 'Microsoft Cloud App Security' | 'Microsoft Defender Advanced Threat Protection' | 'Office 365 Advanced Threat Protection' | string (Required): The alerts' productName on which the cases will be generated
* **severitiesFilter**: 'High' | 'Informational' | 'Low' | 'Medium' | string[]: the alerts' severities on which the cases will be generated

## MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties
### Properties
* **alertRulesCreatedByTemplateCount**: int (ReadOnly): the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **description**: string (ReadOnly): The description of the alert rule template.
* **displayName**: string (ReadOnly): The display name for alert rule template.
* **displayNamesExcludeFilter**: string[] (ReadOnly): the alerts' displayNames on which the cases will not be generated
* **displayNamesFilter**: string[] (ReadOnly): the alerts' displayNames on which the cases will be generated
* **lastUpdatedDateUTC**: string (ReadOnly): The last time that this alert rule template has been updated.
* **productFilter**: 'Azure Active Directory Identity Protection' | 'Azure Advanced Threat Protection' | 'Azure Security Center for IoT' | 'Azure Security Center' | 'Microsoft Cloud App Security' | 'Microsoft Defender Advanced Threat Protection' | 'Office 365 Advanced Threat Protection' | string (ReadOnly): The alerts' productName on which the cases will be generated
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[] (ReadOnly): The required data sources for this template
* **severitiesFilter**: 'High' | 'Informational' | 'Low' | 'Medium' | string[] (ReadOnly): the alerts' severities on which the cases will be generated
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string (ReadOnly): The alert rule template status.

## MLBehaviorAnalyticsAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required): The Name of the alert rule template used to create this rule.
* **description**: string (ReadOnly): The description of the alert rule.
* **displayName**: string (ReadOnly): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert rule has been modified.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity of the alert
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | string[] (ReadOnly): The tactics of the alert rule

## MLBehaviorAnalyticsAlertRuleTemplateProperties
### Properties
* **alertRulesCreatedByTemplateCount**: int (ReadOnly): the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **description**: string (ReadOnly): The description of the alert rule template.
* **displayName**: string (ReadOnly): The display name for alert rule template.
* **lastUpdatedDateUTC**: string (ReadOnly): The last time that this alert rule template has been updated.
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[] (ReadOnly): The required data sources for this template
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity of the alert
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string (ReadOnly): The alert rule template status.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | string[] (ReadOnly): The tactics of the alert rule template.

## MstiDataConnectorDataTypes
### Properties
* **bingSafetyPhishingURL**: [MstiDataConnectorDataTypesBingSafetyPhishingURL](#mstidataconnectordatatypesbingsafetyphishingurl) (Required): Data type for Microsoft Threat Intelligence Platforms data connector.
* **microsoftEmergingThreatFeed**: [MstiDataConnectorDataTypesMicrosoftEmergingThreatFeed](#mstidataconnectordatatypesmicrosoftemergingthreatfeed) (Required): Data type for Microsoft Threat Intelligence Platforms data connector.

## MstiDataConnectorDataTypesBingSafetyPhishingURL
### Properties
* **lookbackPeriod**: string (Required): lookback period
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## MstiDataConnectorDataTypesMicrosoftEmergingThreatFeed
### Properties
* **lookbackPeriod**: string (Required): lookback period
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## MstiDataConnectorProperties
### Properties
* **dataTypes**: [MstiDataConnectorDataTypes](#mstidataconnectordatatypes) (Required): The available data types for Microsoft Threat Intelligence Platforms data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MTPDataConnectorDataTypes
### Properties
* **incidents**: [MTPDataConnectorDataTypesIncidents](#mtpdataconnectordatatypesincidents) (Required): Data type for Microsoft Threat Protection Platforms data connector.

## MTPDataConnectorDataTypesIncidents
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## MTPDataConnectorProperties
### Properties
* **dataTypes**: [MTPDataConnectorDataTypes](#mtpdataconnectordatatypes) (Required): The available data types for Microsoft Threat Protection Platforms data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## OfficeATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## OfficeDataConnectorDataTypes
### Properties
* **exchange**: [OfficeDataConnectorDataTypesExchange](#officedataconnectordatatypesexchange) (Required): Exchange data type connection.
* **sharePoint**: [OfficeDataConnectorDataTypesSharePoint](#officedataconnectordatatypessharepoint) (Required): SharePoint data type connection.
* **teams**: [OfficeDataConnectorDataTypesTeams](#officedataconnectordatatypesteams) (Required): Teams data type connection.

## OfficeDataConnectorDataTypesExchange
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## OfficeDataConnectorDataTypesSharePoint
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## OfficeDataConnectorDataTypesTeams
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## OfficeDataConnectorProperties
### Properties
* **dataTypes**: [OfficeDataConnectorDataTypes](#officedataconnectordatatypes) (Required): The available data types for office data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## Permissions
### Properties
* **customs**: [PermissionsCustomsItem](#permissionscustomsitem)[]: Customs permissions required for the connector
* **resourceProvider**: [PermissionsResourceProviderItem](#permissionsresourceprovideritem)[]: Resource provider permissions required for the connector

## PermissionsCustomsItem
### Properties
* **description**: string: Customs permissions description
* **name**: string: Customs permissions name

## PermissionsResourceProviderItem
### Properties
* **permissionsDisplayText**: string: Permission description text
* **provider**: 'Microsoft.Authorization/policyAssignments' | 'Microsoft.OperationalInsights/solutions' | 'Microsoft.OperationalInsights/workspaces' | 'Microsoft.OperationalInsights/workspaces/datasources' | 'Microsoft.OperationalInsights/workspaces/sharedKeys' | 'microsoft.aadiam/diagnosticSettings' | string: Provider name
* **providerDisplayName**: string: Permission provider display name
* **requiredPermissions**: [RequiredPermissions](#requiredpermissions): Required permissions for the connector
* **scope**: 'ResourceGroup' | 'Subscription' | 'Workspace' | string: Permission provider scope

## RelationProperties
### Properties
* **relatedResourceId**: string (Required): The resource ID of the related resource
* **relatedResourceKind**: string (ReadOnly): The resource kind of the related resource
* **relatedResourceName**: string (ReadOnly): The name of the related resource
* **relatedResourceType**: string (ReadOnly): The resource type of the related resource

## Repository
### Properties
* **branch**: string: Branch name of repository.
* **deploymentLogsUrl**: string: Url to access repository action logs.
* **displayUrl**: string: Display url of repository.
* **pathMapping**: [ContentPathMap](#contentpathmap)[]: Dictionary of source control content type and path mapping.
* **url**: string: Url of repository.

## RequiredPermissions
### Properties
* **action**: bool: action permission
* **delete**: bool: delete permission
* **read**: bool: read permission
* **write**: bool: write permission

## ScheduledAlertRuleCommonPropertiesCustomDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduledAlertRuleCommonPropertiesCustomDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduledAlertRuleProperties
### Properties
* **alertDetailsOverride**: [AlertDetailsOverride](#alertdetailsoverride): Settings for how to dynamically override alert static details
* **alertRuleTemplateName**: string: The Name of the alert rule template used to create this rule.
* **customDetails**: [ScheduledAlertRuleCommonPropertiesCustomDetails](#scheduledalertrulecommonpropertiescustomdetails): Dictionary of string key-value pairs of columns to be attached to the alert
* **description**: string: The description of the alert rule.
* **displayName**: string (Required): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **entityMappings**: [EntityMapping](#entitymapping)[]: List of entity mappings of the alert rule
* **eventGroupingSettings**: [EventGroupingSettings](#eventgroupingsettings): Event grouping settings property bag.
* **incidentConfiguration**: [IncidentConfiguration](#incidentconfiguration): Incident Configuration property bag.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert rule has been modified.
* **query**: string: The query that creates alerts for this rule.
* **queryFrequency**: string: The frequency (in ISO 8601 duration format) for this alert rule to run.
* **queryPeriod**: string: The period (in ISO 8601 duration format) that this alert rule looks at.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity of the alert
* **suppressionDuration**: string (Required): The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
* **suppressionEnabled**: bool (Required): Determines whether the suppression for this alert rule is enabled or disabled.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | string[]: The tactics of the alert rule
* **triggerOperator**: 'Equal' | 'GreaterThan' | 'LessThan' | 'NotEqual': The operation against the threshold that triggers alert rule.
* **triggerThreshold**: int: The threshold triggers this alert rule.

## ScheduledAlertRuleTemplateProperties
### Properties
* **alertDetailsOverride**: [AlertDetailsOverride](#alertdetailsoverride) (ReadOnly): Settings for how to dynamically override alert static details
* **alertRulesCreatedByTemplateCount**: int (ReadOnly): the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **customDetails**: [ScheduledAlertRuleCommonPropertiesCustomDetails](#scheduledalertrulecommonpropertiescustomdetails) (ReadOnly): Dictionary of string key-value pairs of columns to be attached to the alert
* **description**: string (ReadOnly): The description of the alert rule template.
* **displayName**: string (ReadOnly): The display name for alert rule template.
* **entityMappings**: [EntityMapping](#entitymapping)[] (ReadOnly): List of entity mappings of the alert rule
* **eventGroupingSettings**: [EventGroupingSettings](#eventgroupingsettings) (ReadOnly): Event grouping settings property bag.
* **lastUpdatedDateUTC**: string (ReadOnly): The last time that this alert rule template has been updated.
* **query**: string (ReadOnly): The query that creates alerts for this rule.
* **queryFrequency**: string (ReadOnly): The frequency (in ISO 8601 duration format) for this alert rule to run.
* **queryPeriod**: string (ReadOnly): The period (in ISO 8601 duration format) that this alert rule looks at.
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[] (ReadOnly): The required data sources for this template
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity of the alert
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string (ReadOnly): The alert rule template status.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | string[] (ReadOnly): The tactics of the alert rule template
* **triggerOperator**: 'Equal' | 'GreaterThan' | 'LessThan' | 'NotEqual' (ReadOnly): The operation against the threshold that triggers alert rule.
* **triggerThreshold**: int (ReadOnly): The threshold triggers this alert rule.

## SentinelOnboardingStateProperties
### Properties
* **customerManagedKey**: bool: Flag that indicates the status of the CMK setting

## SourceControlProperties
### Properties
* **contentTypes**: 'AnalyticRule' | 'Workbook' | string[] (Required): Array of source control content types.
* **description**: string: A description of the source control
* **displayName**: string (Required): The display name of the source control
* **id**: string: The id (a Guid) of the source control
* **repository**: [Repository](#repository) (Required): metadata of a repository.
* **repoType**: 'DevOps' | 'Github' | string (Required): The type of repository.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.

## TeamInformation
### Properties
* **description**: string (ReadOnly): The description of the team
* **name**: string (ReadOnly): The name of the team
* **primaryChannelUrl**: string (ReadOnly): The primary channel URL of the team
* **teamCreationTimeUtc**: string (ReadOnly): The time the team was created
* **teamId**: string (ReadOnly): Team ID

## ThreatIntelligenceAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required): The Name of the alert rule template used to create this rule.
* **description**: string (ReadOnly): The description of the alert rule.
* **displayName**: string (ReadOnly): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity of the alert
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | string[] (ReadOnly): The tactics of the alert rule

## ThreatIntelligenceAlertRuleTemplateProperties
### Properties
* **alertRulesCreatedByTemplateCount**: int (ReadOnly): the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **description**: string (ReadOnly): The description of the alert rule template.
* **displayName**: string (ReadOnly): The display name for alert rule template.
* **lastUpdatedDateUTC**: string (ReadOnly): The last time that this alert rule template has been updated.
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[] (ReadOnly): The required data sources for this template
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity of the alert
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string (ReadOnly): The alert rule template status.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | string[] (ReadOnly): The tactics of the alert rule template

## TIDataConnectorDataTypes
### Properties
* **indicators**: [TIDataConnectorDataTypesIndicators](#tidataconnectordatatypesindicators) (Required): Data type for indicators connection.

## TIDataConnectorDataTypesIndicators
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## TIDataConnectorProperties
### Properties
* **dataTypes**: [TIDataConnectorDataTypes](#tidataconnectordatatypes) (Required): The available data types for TI (Threat Intelligence) data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.
* **tipLookbackPeriod**: string: The lookback period for the feed to be imported.

## TiTaxiiDataConnectorDataTypes
### Properties
* **taxiiClient**: [TiTaxiiDataConnectorDataTypesTaxiiClient](#titaxiidataconnectordatatypestaxiiclient) (Required): Data type for TAXII connector.

## TiTaxiiDataConnectorDataTypesTaxiiClient
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## TiTaxiiDataConnectorProperties
### Properties
* **collectionId**: string: The collection id of the TAXII server.
* **dataTypes**: [TiTaxiiDataConnectorDataTypes](#titaxiidataconnectordatatypes) (Required): The available data types for Threat Intelligence TAXII data connector.
* **friendlyName**: string: The friendly name for the TAXII server.
* **password**: string: The password for the TAXII server.
* **pollingFrequency**: 'OnceADay' | 'OnceAMinute' | 'OnceAnHour' | string (Required): The polling frequency for the TAXII server.
* **taxiiLookbackPeriod**: string: The lookback period for the TAXII server.
* **taxiiServer**: string: The API root for the TAXII server.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.
* **userName**: string: The userName for the TAXII server.
* **workspaceId**: string: The workspace id.

## UebaProperties
### Properties
* **dataSources**: 'AuditLogs' | 'AzureActivity' | 'SecurityEvent' | 'SigninLogs' | string[]: The relevant data sources that enriched by ueba

## UserInfo
### Properties
* **email**: string (ReadOnly): The email of the user.
* **name**: string (ReadOnly): The name of the user.
* **objectId**: string: The object id of the user.

## WatchlistItemProperties
### Properties
* **created**: string: The time the watchlist item was created
* **createdBy**: [UserInfo](#userinfo): User information that made some action
* **entityMapping**: any: Any object
* **isDeleted**: bool: A flag that indicates if the watchlist item is deleted or not
* **itemsKeyValue**: any (Required): Any object
* **tenantId**: string: The tenantId to which the watchlist item belongs to
* **updated**: string: The last time the watchlist item was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action
* **watchlistItemId**: string: The id (a Guid) of the watchlist item
* **watchlistItemType**: string: The type of the watchlist item

## WatchlistProperties
### Properties
* **contentType**: string: The content type of the raw content. Example : text/csv or text/tsv
* **created**: string: The time the watchlist was created
* **createdBy**: [UserInfo](#userinfo): User information that made some action
* **defaultDuration**: string: The default duration of a watchlist (in ISO 8601 duration format)
* **description**: string: A description of the watchlist
* **displayName**: string (Required): The display name of the watchlist
* **isDeleted**: bool: A flag that indicates if the watchlist is deleted or not
* **itemsSearchKey**: string (Required): The search key is used to optimize query performance when using watchlists for joins with other data. For example, enable a column with IP addresses to be the designated SearchKey field, then use this field as the key field when joining to other event data by IP address.
* **labels**: string[]: List of labels relevant to this watchlist
* **numberOfLinesToSkip**: int: The number of lines in a csv/tsv content to skip before the header
* **provider**: string (Required): The provider of the watchlist
* **rawContent**: string: The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint
* **source**: 'Local file' | 'Remote storage' | string (Required): The source of the watchlist
* **tenantId**: string: The tenantId where the watchlist belongs to
* **updated**: string: The last time the watchlist was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action
* **uploadStatus**: string: The status of the Watchlist upload : New, InProgress or Complete. Pls note : When a Watchlist upload status is equal to InProgress, the Watchlist cannot be deleted
* **watchlistAlias**: string: The alias of the watchlist
* **watchlistId**: string: The id (a Guid) of the watchlist
* **watchlistItemsCount**: int: The number of Watchlist Items in the Watchlist
* **watchlistType**: string: The type of the watchlist

