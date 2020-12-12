# Microsoft.SecurityInsights @ 2020-01-01

## Resource Microsoft.SecurityInsights/alertRules@2020-01-01
* **Valid Scope(s)**: Extension
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.SecurityInsights/alertRules' (ReadOnly, DeployTimeConstant)
### Fusion
#### Properties
* **kind**: 'Fusion' (Required)
* **properties**: FusionAlertRuleProperties

### MicrosoftSecurityIncidentCreation
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required)
* **properties**: MicrosoftSecurityIncidentCreationAlertRuleProperties

### Scheduled
#### Properties
* **kind**: 'Scheduled' (Required)
* **properties**: ScheduledAlertRuleProperties


## Resource Microsoft.SecurityInsights/alertRules/actions@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ActionRequestProperties
* **type**: 'Microsoft.SecurityInsights/alertRules/actions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/bookmarks@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BookmarkProperties
* **type**: 'Microsoft.SecurityInsights/bookmarks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/dataConnectors@2020-01-01
* **Valid Scope(s)**: Extension
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.SecurityInsights/dataConnectors' (ReadOnly, DeployTimeConstant)
### AmazonWebServicesCloudTrail
#### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required)
* **properties**: AwsCloudTrailDataConnectorProperties

### AzureActiveDirectory
#### Properties
* **kind**: 'AzureActiveDirectory' (Required)
* **properties**: AADDataConnectorProperties

### AzureAdvancedThreatProtection
#### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required)
* **properties**: AATPDataConnectorProperties

### AzureSecurityCenter
#### Properties
* **kind**: 'AzureSecurityCenter' (Required)
* **properties**: ASCDataConnectorProperties

### MicrosoftCloudAppSecurity
#### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required)
* **properties**: MCASDataConnectorProperties

### MicrosoftDefenderAdvancedThreatProtection
#### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required)
* **properties**: MDATPDataConnectorProperties

### Office365
#### Properties
* **kind**: 'Office365' (Required)
* **properties**: OfficeDataConnectorProperties

### ThreatIntelligence
#### Properties
* **kind**: 'ThreatIntelligence' (Required)
* **properties**: TIDataConnectorProperties


## Resource Microsoft.SecurityInsights/incidents@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IncidentProperties
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityInsights/incidents/comments@2020-01-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IncidentCommentProperties
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant)

## Fusion
### Properties
* **kind**: 'Fusion' (Required)
* **properties**: FusionAlertRuleProperties

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
* **properties**: MicrosoftSecurityIncidentCreationAlertRuleProperties

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
* **properties**: ScheduledAlertRuleProperties

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
* **createdBy**: UserInfo
* **displayName**: string (Required)
* **incidentInfo**: IncidentInfo
* **labels**: string[]
* **notes**: string
* **query**: string (Required)
* **queryResult**: string
* **updated**: string
* **updatedBy**: UserInfo

## UserInfo
### Properties
* **email**: string (ReadOnly)
* **name**: string (ReadOnly)
* **objectId**: string (Required)

## IncidentInfo
### Properties
* **incidentId**: string (Required)
* **relationName**: string (Required)
* **severity**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium' (Required)
* **title**: string (Required)

## AmazonWebServicesCloudTrail
### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required)
* **properties**: AwsCloudTrailDataConnectorProperties

## AwsCloudTrailDataConnectorProperties
### Properties
* **awsRoleArn**: string
* **dataTypes**: AwsCloudTrailDataConnectorDataTypes

## AwsCloudTrailDataConnectorDataTypes
### Properties
* **logs**: schemas:25_logs

## schemas:25_logs
### Properties
* **state**: 'Disabled' | 'Enabled'

## AzureActiveDirectory
### Properties
* **kind**: 'AzureActiveDirectory' (Required)
* **properties**: AADDataConnectorProperties

## AADDataConnectorProperties
### Properties
* **dataTypes**: AlertsDataTypeOfDataConnector
* **tenantId**: string

## AlertsDataTypeOfDataConnector
### Properties
* **alerts**: DataConnectorDataTypeCommon

## DataConnectorDataTypeCommon
### Properties
* **state**: 'Disabled' | 'Enabled'

## AzureAdvancedThreatProtection
### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required)
* **properties**: AATPDataConnectorProperties

## AATPDataConnectorProperties
### Properties
* **dataTypes**: AlertsDataTypeOfDataConnector
* **tenantId**: string

## AzureSecurityCenter
### Properties
* **kind**: 'AzureSecurityCenter' (Required)
* **properties**: ASCDataConnectorProperties

## ASCDataConnectorProperties
### Properties
* **dataTypes**: AlertsDataTypeOfDataConnector
* **subscriptionId**: string

## MicrosoftCloudAppSecurity
### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required)
* **properties**: MCASDataConnectorProperties

## MCASDataConnectorProperties
### Properties
* **dataTypes**: MCASDataConnectorDataTypes
* **tenantId**: string

## MCASDataConnectorDataTypes
### Properties
* **alerts**: DataConnectorDataTypeCommon
* **discoveryLogs**: DataConnectorDataTypeCommon

## MicrosoftDefenderAdvancedThreatProtection
### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required)
* **properties**: MDATPDataConnectorProperties

## MDATPDataConnectorProperties
### Properties
* **dataTypes**: AlertsDataTypeOfDataConnector
* **tenantId**: string

## Office365
### Properties
* **kind**: 'Office365' (Required)
* **properties**: OfficeDataConnectorProperties

## OfficeDataConnectorProperties
### Properties
* **dataTypes**: OfficeDataConnectorDataTypes
* **tenantId**: string

## OfficeDataConnectorDataTypes
### Properties
* **exchange**: schemas:66_exchange
* **sharePoint**: schemas:66_sharePoint

## schemas:66_exchange
### Properties
* **state**: 'Disabled' | 'Enabled'

## schemas:66_sharePoint
### Properties
* **state**: 'Disabled' | 'Enabled'

## ThreatIntelligence
### Properties
* **kind**: 'ThreatIntelligence' (Required)
* **properties**: TIDataConnectorProperties

## TIDataConnectorProperties
### Properties
* **dataTypes**: TIDataConnectorDataTypes
* **tenantId**: string

## TIDataConnectorDataTypes
### Properties
* **indicators**: schemas:80_indicators

## schemas:80_indicators
### Properties
* **state**: 'Disabled' | 'Enabled'

## IncidentProperties
### Properties
* **additionalData**: IncidentAdditionalData (ReadOnly)
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined'
* **classificationComment**: string
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected'
* **createdTimeUtc**: string (ReadOnly)
* **description**: string
* **firstActivityTimeUtc**: string
* **incidentNumber**: int (ReadOnly)
* **incidentUrl**: string (ReadOnly)
* **labels**: IncidentLabel[]
* **lastActivityTimeUtc**: string
* **lastModifiedTimeUtc**: string (ReadOnly)
* **owner**: IncidentOwnerInfo
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
* **author**: ClientInfo (ReadOnly)
* **createdTimeUtc**: string (ReadOnly)
* **message**: string (Required)

## ClientInfo
### Properties
* **email**: string
* **name**: string
* **objectId**: string
* **userPrincipalName**: string

