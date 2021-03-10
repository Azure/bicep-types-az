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
### Fusion
#### Properties
* **kind**: 'Fusion' (Required)
* **properties**: [FusionAlertRuleProperties](#fusionalertruleproperties)

### MicrosoftSecurityIncidentCreation
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required)
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleProperties](#microsoftsecurityincidentcreationalertruleproperties)

### Scheduled
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
### AmazonWebServicesCloudTrail
#### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required)
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties)

### AzureActiveDirectory
#### Properties
* **kind**: 'AzureActiveDirectory' (Required)
* **properties**: [AADDataConnectorProperties](#aaddataconnectorproperties)

### AzureAdvancedThreatProtection
#### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required)
* **properties**: [AATPDataConnectorProperties](#aatpdataconnectorproperties)

### AzureSecurityCenter
#### Properties
* **kind**: 'AzureSecurityCenter' (Required)
* **properties**: [ASCDataConnectorProperties](#ascdataconnectorproperties)

### MicrosoftCloudAppSecurity
#### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required)
* **properties**: [MCASDataConnectorProperties](#mcasdataconnectorproperties)

### MicrosoftDefenderAdvancedThreatProtection
#### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required)
* **properties**: [MDATPDataConnectorProperties](#mdatpdataconnectorproperties)

### Office365
#### Properties
* **kind**: 'Office365' (Required)
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties)

### ThreatIntelligence
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

## Fusion
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

## MicrosoftSecurityIncidentCreation
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

## Scheduled
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

## AmazonWebServicesCloudTrail
### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required)
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties)

## AwsCloudTrailDataConnectorProperties
### Properties
* **awsRoleArn**: string
* **dataTypes**: [AwsCloudTrailDataConnectorDataTypes](#awscloudtraildataconnectordatatypes)

## AwsCloudTrailDataConnectorDataTypes
### Properties
* **logs**: [schemas:25_logs](#schemas25logs)

## schemas:25_logs
### Properties
* **state**: 'Disabled' | 'Enabled'

## AzureActiveDirectory
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

## AzureAdvancedThreatProtection
### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required)
* **properties**: [AATPDataConnectorProperties](#aatpdataconnectorproperties)

## AATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector)
* **tenantId**: string

## AzureSecurityCenter
### Properties
* **kind**: 'AzureSecurityCenter' (Required)
* **properties**: [ASCDataConnectorProperties](#ascdataconnectorproperties)

## ASCDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector)
* **subscriptionId**: string

## MicrosoftCloudAppSecurity
### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required)
* **properties**: [MCASDataConnectorProperties](#mcasdataconnectorproperties)

## MCASDataConnectorProperties
### Properties
* **dataTypes**: [MCASDataConnectorDataTypes](#mcasdataconnectordatatypes)
* **tenantId**: string

## MCASDataConnectorDataTypes
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon)
* **discoveryLogs**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon)

## MicrosoftDefenderAdvancedThreatProtection
### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required)
* **properties**: [MDATPDataConnectorProperties](#mdatpdataconnectorproperties)

## MDATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector)
* **tenantId**: string

## Office365
### Properties
* **kind**: 'Office365' (Required)
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties)

## OfficeDataConnectorProperties
### Properties
* **dataTypes**: [OfficeDataConnectorDataTypes](#officedataconnectordatatypes)
* **tenantId**: string

## OfficeDataConnectorDataTypes
### Properties
* **exchange**: [schemas:66_exchange](#schemas66exchange)
* **sharePoint**: [schemas:66_sharePoint](#schemas66sharepoint)
* **teams**: [schemas:66_teams](#schemas66teams)

## schemas:66_exchange
### Properties
* **state**: 'Disabled' | 'Enabled'

## schemas:66_sharePoint
### Properties
* **state**: 'Disabled' | 'Enabled'

## schemas:66_teams
### Properties
* **state**: 'Disabled' | 'Enabled'

## ThreatIntelligence
### Properties
* **kind**: 'ThreatIntelligence' (Required)
* **properties**: [TIDataConnectorProperties](#tidataconnectorproperties)

## TIDataConnectorProperties
### Properties
* **dataTypes**: [TIDataConnectorDataTypes](#tidataconnectordatatypes)
* **tenantId**: string

## TIDataConnectorDataTypes
### Properties
* **indicators**: [schemas:80_indicators](#schemas80indicators)

## schemas:80_indicators
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

