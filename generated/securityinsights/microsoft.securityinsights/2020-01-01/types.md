# Microsoft.SecurityInsights @ 2020-01-01

## Resource Microsoft.SecurityInsights/alertRules@2020-01-01
* **Valid Scope(s)**: Extension
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/alertRules' (ReadOnly, DeployTimeConstant): The resource type
### Fusion
#### Properties
* **kind**: 'Fusion' (Required): Represents Fusion alert rule.
* **properties**: [FusionAlertRuleProperties](#fusionalertruleproperties): Fusion alert rule base property bag.

### MicrosoftSecurityIncidentCreation
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required): Represents MicrosoftSecurityIncidentCreation rule.
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleProperties](#microsoftsecurityincidentcreationalertruleproperties): MicrosoftSecurityIncidentCreation rule property bag.

### Scheduled
#### Properties
* **kind**: 'Scheduled' (Required): Represents scheduled alert rule.
* **properties**: [ScheduledAlertRuleProperties](#scheduledalertruleproperties): Scheduled alert rule base property bag.


## Resource Microsoft.SecurityInsights/alertRules/actions@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionRequestProperties](#actionrequestproperties): Action property bag.
* **type**: 'Microsoft.SecurityInsights/alertRules/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/bookmarks@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BookmarkProperties](#bookmarkproperties): Describes bookmark properties
* **type**: 'Microsoft.SecurityInsights/bookmarks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/dataConnectors@2020-01-01
* **Valid Scope(s)**: Extension
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/dataConnectors' (ReadOnly, DeployTimeConstant): The resource type
### AmazonWebServicesCloudTrail
#### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required): Represents Amazon Web Services CloudTrail data connector.
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties): Amazon Web Services CloudTrail data connector properties.

### AzureActiveDirectory
#### Properties
* **kind**: 'AzureActiveDirectory' (Required): Represents AAD (Azure Active Directory) data connector.
* **properties**: [AADDataConnectorProperties](#aaddataconnectorproperties): AAD (Azure Active Directory) data connector properties.

### AzureAdvancedThreatProtection
#### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required): Represents AATP (Azure Advanced Threat Protection) data connector.
* **properties**: [AATPDataConnectorProperties](#aatpdataconnectorproperties): AATP (Azure Advanced Threat Protection) data connector properties.

### AzureSecurityCenter
#### Properties
* **kind**: 'AzureSecurityCenter' (Required): Represents ASC (Azure Security Center) data connector.
* **properties**: [ASCDataConnectorProperties](#ascdataconnectorproperties): ASC (Azure Security Center) data connector properties.

### MicrosoftCloudAppSecurity
#### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required): Represents MCAS (Microsoft Cloud App Security) data connector.
* **properties**: [MCASDataConnectorProperties](#mcasdataconnectorproperties): MCAS (Microsoft Cloud App Security) data connector properties.

### MicrosoftDefenderAdvancedThreatProtection
#### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required): Represents MDATP (Microsoft Defender Advanced Threat Protection) data connector.
* **properties**: [MDATPDataConnectorProperties](#mdatpdataconnectorproperties): MDATP (Microsoft Defender Advanced Threat Protection) data connector properties.

### Office365
#### Properties
* **kind**: 'Office365' (Required): Represents office data connector.
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties): Office data connector properties.

### ThreatIntelligence
#### Properties
* **kind**: 'ThreatIntelligence' (Required): Represents threat intelligence data connector.
* **properties**: [TIDataConnectorProperties](#tidataconnectorproperties): TI (Threat Intelligence) data connector properties.


## Resource Microsoft.SecurityInsights/incidents@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentProperties](#incidentproperties): Describes incident properties
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/comments@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentCommentProperties](#incidentcommentproperties): Incident comment property bag.
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant): The resource type

## Fusion
### Properties
* **kind**: 'Fusion' (Required): Represents Fusion alert rule.
* **properties**: [FusionAlertRuleProperties](#fusionalertruleproperties): Fusion alert rule base property bag.

## FusionAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required): The Name of the alert rule template used to create this rule.
* **description**: string (ReadOnly): The description of the alert rule.
* **displayName**: string (ReadOnly): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' (ReadOnly): The severity for alerts created by this alert rule.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PrivilegeEscalation'[] (ReadOnly): The tactics of the alert rule

## MicrosoftSecurityIncidentCreation
### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required): Represents MicrosoftSecurityIncidentCreation rule.
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleProperties](#microsoftsecurityincidentcreationalertruleproperties): MicrosoftSecurityIncidentCreation rule property bag.

## MicrosoftSecurityIncidentCreationAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string: The Name of the alert rule template used to create this rule.
* **description**: string: The description of the alert rule.
* **displayName**: string (Required): The display name for alerts created by this alert rule.
* **displayNamesExcludeFilter**: string[]: the alerts' displayNames on which the cases will not be generated
* **displayNamesFilter**: string[]: the alerts' displayNames on which the cases will be generated
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **productFilter**: 'Azure Active Directory Identity Protection' | 'Azure Advanced Threat Protection' | 'Azure Security Center for IoT' | 'Azure Security Center' | 'Microsoft Cloud App Security' (Required): The alerts' productName on which the cases will be generated.
* **severitiesFilter**: 'High' | 'Informational' | 'Low' | 'Medium'[]: the alerts' severities on which the cases will be generated

## Scheduled
### Properties
* **kind**: 'Scheduled' (Required): Represents scheduled alert rule.
* **properties**: [ScheduledAlertRuleProperties](#scheduledalertruleproperties): Scheduled alert rule base property bag.

## ScheduledAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string: The Name of the alert rule template used to create this rule.
* **description**: string: The description of the alert rule.
* **displayName**: string (Required): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert rule has been modified.
* **query**: string: The query that creates alerts for this rule.
* **queryFrequency**: string: The frequency (in ISO 8601 duration format) for this alert rule to run.
* **queryPeriod**: string: The period (in ISO 8601 duration format) that this alert rule looks at.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium': The severity for alerts created by this alert rule.
* **suppressionDuration**: string (Required): The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
* **suppressionEnabled**: bool (Required): Determines whether the suppression for this alert rule is enabled or disabled.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PrivilegeEscalation'[]: The tactics of the alert rule
* **triggerOperator**: 'Equal' | 'GreaterThan' | 'LessThan' | 'NotEqual': The operation against the threshold that triggers alert rule.
* **triggerThreshold**: int: The threshold triggers this alert rule.

## ActionRequestProperties
### Properties
* **logicAppResourceId**: string (Required): Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}.
* **triggerUri**: string (Required, WriteOnly): Logic App Callback URL for this specific workflow.
* **workflowId**: string (ReadOnly): The name of the logic app's workflow.

## BookmarkProperties
### Properties
* **created**: string: The time the bookmark was created
* **createdBy**: [UserInfo](#userinfo): User information that made some action
* **displayName**: string (Required): The display name of the bookmark
* **eventTime**: string: The bookmark event time
* **incidentInfo**: [IncidentInfo](#incidentinfo): Describes related incident information for the bookmark
* **labels**: string[]: List of labels relevant to this bookmark
* **notes**: string: The notes of the bookmark
* **query**: string (Required): The query of the bookmark.
* **queryEndTime**: string: The end time for the query
* **queryResult**: string: The query result of the bookmark.
* **queryStartTime**: string: The start time for the query
* **updated**: string: The last time the bookmark was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action

## UserInfo
### Properties
* **email**: string (ReadOnly): The email of the user.
* **name**: string (ReadOnly): The name of the user.
* **objectId**: string (Required): The object id of the user.

## IncidentInfo
### Properties
* **incidentId**: string: Incident Id
* **relationName**: string: Relation Name
* **severity**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium': The severity of the incident.
* **title**: string: The title of the incident

## AmazonWebServicesCloudTrail
### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required): Represents Amazon Web Services CloudTrail data connector.
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties): Amazon Web Services CloudTrail data connector properties.

## AwsCloudTrailDataConnectorProperties
### Properties
* **awsRoleArn**: string: The Aws Role Arn (with CloudTrailReadOnly policy) that is used to access the Aws account.
* **dataTypes**: [AwsCloudTrailDataConnectorDataTypes](#awscloudtraildataconnectordatatypes): The available data types for Amazon Web Services CloudTrail data connector.

## AwsCloudTrailDataConnectorDataTypes
### Properties
* **logs**: [schemas:25_logs](#schemas25logs): Logs data type.

## schemas:25_logs
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## AzureActiveDirectory
### Properties
* **kind**: 'AzureActiveDirectory' (Required): Represents AAD (Azure Active Directory) data connector.
* **properties**: [AADDataConnectorProperties](#aaddataconnectorproperties): AAD (Azure Active Directory) data connector properties.

## AADDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## AlertsDataTypeOfDataConnector
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Common field for data type in data connectors.

## DataConnectorDataTypeCommon
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## AzureAdvancedThreatProtection
### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required): Represents AATP (Azure Advanced Threat Protection) data connector.
* **properties**: [AATPDataConnectorProperties](#aatpdataconnectorproperties): AATP (Azure Advanced Threat Protection) data connector properties.

## AATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## AzureSecurityCenter
### Properties
* **kind**: 'AzureSecurityCenter' (Required): Represents ASC (Azure Security Center) data connector.
* **properties**: [ASCDataConnectorProperties](#ascdataconnectorproperties): ASC (Azure Security Center) data connector properties.

## ASCDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **subscriptionId**: string: The subscription id to connect to, and get the data from.

## MicrosoftCloudAppSecurity
### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required): Represents MCAS (Microsoft Cloud App Security) data connector.
* **properties**: [MCASDataConnectorProperties](#mcasdataconnectorproperties): MCAS (Microsoft Cloud App Security) data connector properties.

## MCASDataConnectorProperties
### Properties
* **dataTypes**: [MCASDataConnectorDataTypes](#mcasdataconnectordatatypes): The available data types for MCAS (Microsoft Cloud App Security) data connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## MCASDataConnectorDataTypes
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Common field for data type in data connectors.
* **discoveryLogs**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Common field for data type in data connectors.

## MicrosoftDefenderAdvancedThreatProtection
### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required): Represents MDATP (Microsoft Defender Advanced Threat Protection) data connector.
* **properties**: [MDATPDataConnectorProperties](#mdatpdataconnectorproperties): MDATP (Microsoft Defender Advanced Threat Protection) data connector properties.

## MDATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## Office365
### Properties
* **kind**: 'Office365' (Required): Represents office data connector.
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties): Office data connector properties.

## OfficeDataConnectorProperties
### Properties
* **dataTypes**: [OfficeDataConnectorDataTypes](#officedataconnectordatatypes): The available data types for office data connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.

## OfficeDataConnectorDataTypes
### Properties
* **exchange**: [schemas:66_exchange](#schemas66exchange): Exchange data type connection.
* **sharePoint**: [schemas:66_sharePoint](#schemas66sharepoint): SharePoint data type connection.
* **teams**: [schemas:66_teams](#schemas66teams): Teams data type connection.

## schemas:66_exchange
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## schemas:66_sharePoint
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## schemas:66_teams
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## ThreatIntelligence
### Properties
* **kind**: 'ThreatIntelligence' (Required): Represents threat intelligence data connector.
* **properties**: [TIDataConnectorProperties](#tidataconnectorproperties): TI (Threat Intelligence) data connector properties.

## TIDataConnectorProperties
### Properties
* **dataTypes**: [TIDataConnectorDataTypes](#tidataconnectordatatypes): The available data types for TI (Threat Intelligence) data connector.
* **tenantId**: string: The tenant id to connect to, and get the data from.
* **tipLookbackPeriod**: string: The lookback period for the feed to be imported.

## TIDataConnectorDataTypes
### Properties
* **indicators**: [schemas:80_indicators](#schemas80indicators): Data type for indicators connection.

## schemas:80_indicators
### Properties
* **state**: 'Disabled' | 'Enabled': Describe whether this data type connection is enabled or not.

## IncidentProperties
### Properties
* **additionalData**: [IncidentAdditionalData](#incidentadditionaldata) (ReadOnly): Incident additional data property bag.
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined': The reason the incident was closed.
* **classificationComment**: string: Describes the reason the incident was closed
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected': The classification reason the incident was closed with.
* **createdTimeUtc**: string (ReadOnly): The time the incident was created
* **description**: string: The description of the incident
* **firstActivityTimeUtc**: string: The time of the first activity in the incident
* **incidentNumber**: int (ReadOnly): A sequential number
* **incidentUrl**: string (ReadOnly): The deep-link url to the incident in Azure portal
* **labels**: [IncidentLabel](#incidentlabel)[]: List of labels relevant to this incident
* **lastActivityTimeUtc**: string: The time of the last activity in the incident
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the incident was updated
* **owner**: [IncidentOwnerInfo](#incidentownerinfo): Information on the user an incident is assigned to
* **relatedAnalyticRuleIds**: string[] (ReadOnly): List of resource ids of Analytic rules related to the incident
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' (Required): The severity of the incident.
* **status**: 'Active' | 'Closed' | 'New' (Required): The status of the incident.
* **title**: string (Required): The title of the incident

## IncidentAdditionalData
### Properties
* **alertProductNames**: string[] (ReadOnly): List of product names of alerts in the incident
* **alertsCount**: int (ReadOnly): The number of alerts in the incident
* **bookmarksCount**: int (ReadOnly): The number of bookmarks in the incident
* **commentsCount**: int (ReadOnly): The number of comments in the incident
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PrivilegeEscalation'[] (ReadOnly): The tactics associated with incident

## IncidentLabel
### Properties
* **labelName**: string (Required): The name of the label
* **labelType**: 'System' | 'User' (ReadOnly): The type of the label.

## IncidentOwnerInfo
### Properties
* **assignedTo**: string: The name of the user the incident is assigned to.
* **email**: string: The email of the user the incident is assigned to.
* **objectId**: string: The object id of the user the incident is assigned to.
* **userPrincipalName**: string: The user principal name of the user the incident is assigned to.

## IncidentCommentProperties
### Properties
* **author**: [ClientInfo](#clientinfo) (ReadOnly): Information on the client (user or application) that made some action
* **createdTimeUtc**: string (ReadOnly): The time the comment was created
* **message**: string (Required): The comment message

## ClientInfo
### Properties
* **email**: string: The email of the client.
* **name**: string: The name of the client.
* **objectId**: string: The object id of the client.
* **userPrincipalName**: string: The user principal name of the client.

