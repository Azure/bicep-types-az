# Microsoft.SecurityInsights @ 2020-01-01

## Resource Microsoft.SecurityInsights/alertRules@2020-01-01
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.SecurityInsights/alertRules' (ReadOnly, DeployTimeConstant)
### FusionAlertRule
#### Properties
* **kind**: 'Fusion' (Required)
* **properties**: [FusionAlertRuleProperties](#fusionalertruleproperties)

### MicrosoftSecurityIncidentCreationAlertRule
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required)
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleProperties](#microsoftsecurityincidentcreationalertruleproperties)

### ScheduledAlertRule
#### Properties
* **kind**: 'Scheduled' (Required)
* **properties**: [ScheduledAlertRuleProperties](#scheduledalertruleproperties)


## Resource Microsoft.SecurityInsights/alertRules/actions@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ActionRequestProperties](#actionrequestproperties)
* **type**: 'Microsoft.SecurityInsights/alertRules/actions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/bookmarks@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BookmarkProperties](#bookmarkproperties)
* **type**: 'Microsoft.SecurityInsights/bookmarks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/dataConnectors@2020-01-01
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.SecurityInsights/dataConnectors' (ReadOnly, DeployTimeConstant)
### AwsCloudTrailDataConnector
#### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required)
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties)

### AADDataConnector
#### Properties
* **kind**: 'AzureActiveDirectory' (Required)
* **properties**: [AADDataConnectorProperties](#aaddataconnectorproperties)

### AatpDataConnector
#### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required)
* **properties**: [AatpDataConnectorProperties](#aatpdataconnectorproperties)

### ASCDataConnector
#### Properties
* **kind**: 'AzureSecurityCenter' (Required)
* **properties**: [ASCDataConnectorProperties](#ascdataconnectorproperties)

### McasDataConnector
#### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required)
* **properties**: [McasDataConnectorProperties](#mcasdataconnectorproperties)

### MdatpDataConnector
#### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required)
* **properties**: [MdatpDataConnectorProperties](#mdatpdataconnectorproperties)

### OfficeDataConnector
#### Properties
* **kind**: 'Office365' (Required)
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties)

### TIDataConnector
#### Properties
* **kind**: 'ThreatIntelligence' (Required)
* **properties**: [TIDataConnectorProperties](#tidataconnectorproperties)


## Resource Microsoft.SecurityInsights/incidents@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IncidentProperties](#incidentproperties)
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/incidents/comments@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IncidentCommentProperties](#incidentcommentproperties)
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant)

## FusionAlertRule
### Properties
* **kind**: 'Fusion' (Required)
* **properties**: [FusionAlertRuleProperties](#fusionalertruleproperties)

## FusionAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required)
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **enabled**: bool (Required)
* **lastModifiedUtc**: string (ReadOnly)
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' (ReadOnly)
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PrivilegeEscalation'[] (ReadOnly)

## MicrosoftSecurityIncidentCreationAlertRule
### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required)
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleProperties](#microsoftsecurityincidentcreationalertruleproperties)

## MicrosoftSecurityIncidentCreationAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string
* **description**: string
* **displayName**: string (Required)
* **displayNamesExcludeFilter**: string[]
* **displayNamesFilter**: string[]
* **enabled**: bool (Required)
* **lastModifiedUtc**: string (ReadOnly)
* **productFilter**: 'Azure Active Directory Identity Protection' | 'Azure Advanced Threat Protection' | 'Azure Security Center for IoT' | 'Azure Security Center' | 'Microsoft Cloud App Security' (Required)
* **severitiesFilter**: 'High' | 'Informational' | 'Low' | 'Medium'[]

## ScheduledAlertRule
### Properties
* **kind**: 'Scheduled' (Required)
* **properties**: [ScheduledAlertRuleProperties](#scheduledalertruleproperties)

## ScheduledAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string
* **description**: string
* **displayName**: string (Required)
* **enabled**: bool (Required)
* **lastModifiedUtc**: string (ReadOnly)
* **query**: string
* **queryFrequency**: string
* **queryPeriod**: string
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium'
* **suppressionDuration**: string (Required)
* **suppressionEnabled**: bool (Required)
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PrivilegeEscalation'[]
* **triggerOperator**: 'Equal' | 'GreaterThan' | 'LessThan' | 'NotEqual'
* **triggerThreshold**: int

## ActionRequestProperties
### Properties
* **logicAppResourceId**: string (Required)
* **triggerUri**: string (WriteOnly)
* **workflowId**: string (ReadOnly)

## BookmarkProperties
### Properties
* **created**: string
* **createdBy**: [UserInfo](#userinfo)
* **displayName**: string (Required)
* **eventTime**: string
* **incidentInfo**: [IncidentInfo](#incidentinfo)
* **labels**: string[]
* **notes**: string
* **query**: string (Required)
* **queryEndTime**: string
* **queryResult**: string
* **queryStartTime**: string
* **updated**: string
* **updatedBy**: [UserInfo](#userinfo)

## UserInfo
### Properties
* **email**: string (ReadOnly)
* **name**: string (ReadOnly)
* **objectId**: string (Required)

## IncidentInfo
### Properties
* **incidentId**: string
* **relationName**: string
* **severity**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium'
* **title**: string

## AwsCloudTrailDataConnector
### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required)
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties)

## AwsCloudTrailDataConnectorProperties
### Properties
* **awsRoleArn**: string
* **dataTypes**: [AwsCloudTrailDataConnectorDataTypes](#awscloudtraildataconnectordatatypes)

## AwsCloudTrailDataConnectorDataTypes
### Properties
* **logs**: [AwsCloudTrailDataConnectorDataTypesLogs](#awscloudtraildataconnectordatatypeslogs)

## AwsCloudTrailDataConnectorDataTypesLogs
### Properties
* **state**: 'Disabled' | 'Enabled'

## AADDataConnector
### Properties
* **kind**: 'AzureActiveDirectory' (Required)
* **properties**: [AADDataConnectorProperties](#aaddataconnectorproperties)

## AADDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector)
* **tenantId**: string

## AlertsDataTypeOfDataConnector
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon)

## DataConnectorDataTypeCommon
### Properties
* **state**: 'Disabled' | 'Enabled'

## AatpDataConnector
### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required)
* **properties**: [AatpDataConnectorProperties](#aatpdataconnectorproperties)

## AatpDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector)
* **tenantId**: string

## ASCDataConnector
### Properties
* **kind**: 'AzureSecurityCenter' (Required)
* **properties**: [ASCDataConnectorProperties](#ascdataconnectorproperties)

## ASCDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector)
* **subscriptionId**: string

## McasDataConnector
### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required)
* **properties**: [McasDataConnectorProperties](#mcasdataconnectorproperties)

## McasDataConnectorProperties
### Properties
* **dataTypes**: [McasDataConnectorDataTypes](#mcasdataconnectordatatypes)
* **tenantId**: string

## McasDataConnectorDataTypes
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon)
* **discoveryLogs**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon)

## MdatpDataConnector
### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required)
* **properties**: [MdatpDataConnectorProperties](#mdatpdataconnectorproperties)

## MdatpDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector)
* **tenantId**: string

## OfficeDataConnector
### Properties
* **kind**: 'Office365' (Required)
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties)

## OfficeDataConnectorProperties
### Properties
* **dataTypes**: [OfficeDataConnectorDataTypes](#officedataconnectordatatypes)
* **tenantId**: string

## OfficeDataConnectorDataTypes
### Properties
* **exchange**: [OfficeDataConnectorDataTypesExchange](#officedataconnectordatatypesexchange)
* **sharePoint**: [OfficeDataConnectorDataTypesSharePoint](#officedataconnectordatatypessharepoint)
* **teams**: [OfficeDataConnectorDataTypesTeams](#officedataconnectordatatypesteams)

## OfficeDataConnectorDataTypesExchange
### Properties
* **state**: 'Disabled' | 'Enabled'

## OfficeDataConnectorDataTypesSharePoint
### Properties
* **state**: 'Disabled' | 'Enabled'

## OfficeDataConnectorDataTypesTeams
### Properties
* **state**: 'Disabled' | 'Enabled'

## TIDataConnector
### Properties
* **kind**: 'ThreatIntelligence' (Required)
* **properties**: [TIDataConnectorProperties](#tidataconnectorproperties)

## TIDataConnectorProperties
### Properties
* **dataTypes**: [TIDataConnectorDataTypes](#tidataconnectordatatypes)
* **tenantId**: string

## TIDataConnectorDataTypes
### Properties
* **indicators**: [TIDataConnectorDataTypesIndicators](#tidataconnectordatatypesindicators)

## TIDataConnectorDataTypesIndicators
### Properties
* **state**: 'Disabled' | 'Enabled'

## IncidentProperties
### Properties
* **additionalData**: [IncidentAdditionalData](#incidentadditionaldata) (ReadOnly)
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined'
* **classificationComment**: string
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected'
* **createdTimeUtc**: string (ReadOnly)
* **description**: string
* **firstActivityTimeUtc**: string
* **incidentNumber**: int (ReadOnly)
* **incidentUrl**: string (ReadOnly)
* **labels**: [IncidentLabel](#incidentlabel)[]
* **lastActivityTimeUtc**: string
* **lastModifiedTimeUtc**: string (ReadOnly)
* **owner**: [IncidentOwnerInfo](#incidentownerinfo)
* **relatedAnalyticRuleIds**: string[] (ReadOnly)
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' (Required)
* **status**: 'Active' | 'Closed' | 'New' (Required)
* **title**: string (Required)

## IncidentAdditionalData
### Properties
* **alertProductNames**: string[] (ReadOnly)
* **alertsCount**: int (ReadOnly)
* **bookmarksCount**: int (ReadOnly)
* **commentsCount**: int (ReadOnly)
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PrivilegeEscalation'[] (ReadOnly)

## IncidentLabel
### Properties
* **labelName**: string (Required)
* **labelType**: 'System' | 'User' (ReadOnly)

## IncidentOwnerInfo
### Properties
* **assignedTo**: string
* **email**: string
* **objectId**: string
* **userPrincipalName**: string

## IncidentCommentProperties
### Properties
* **author**: [ClientInfo](#clientinfo) (ReadOnly)
* **createdTimeUtc**: string (ReadOnly)
* **message**: string (Required)

## ClientInfo
### Properties
* **email**: string
* **name**: string
* **objectId**: string
* **userPrincipalName**: string

