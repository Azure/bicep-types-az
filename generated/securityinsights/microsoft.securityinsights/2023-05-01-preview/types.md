# Microsoft.SecurityInsights @ 2023-05-01-preview

## Resource Microsoft.SecurityInsights/alertRules@2023-05-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/alertRules' (ReadOnly, DeployTimeConstant): The resource type

### FusionAlertRule
#### Properties
* **kind**: 'Fusion' (Required): The kind of the alert rule
* **properties**: [FusionAlertRuleProperties](#fusionalertruleproperties): Fusion alert rule properties

### MicrosoftSecurityIncidentCreationAlertRule
#### Properties
* **kind**: 'MicrosoftSecurityIncidentCreation' (Required): The kind of the alert rule
* **properties**: [MicrosoftSecurityIncidentCreationAlertRuleProperties](#microsoftsecurityincidentcreationalertruleproperties): MicrosoftSecurityIncidentCreation rule properties

### MLBehaviorAnalyticsAlertRule
#### Properties
* **kind**: 'MLBehaviorAnalytics' (Required): The kind of the alert rule
* **properties**: [MLBehaviorAnalyticsAlertRuleProperties](#mlbehavioranalyticsalertruleproperties): MLBehaviorAnalytics alert rule properties

### NrtAlertRule
#### Properties
* **kind**: 'NRT' (Required): The kind of the alert rule
* **properties**: [NrtAlertRuleProperties](#nrtalertruleproperties): NRT alert rule properties

### ScheduledAlertRule
#### Properties
* **kind**: 'Scheduled' (Required): The kind of the alert rule
* **properties**: [ScheduledAlertRuleProperties](#scheduledalertruleproperties): Scheduled alert rule properties

### ThreatIntelligenceAlertRule
#### Properties
* **kind**: 'ThreatIntelligence' (Required): The kind of the alert rule
* **properties**: [ThreatIntelligenceAlertRuleProperties](#threatintelligencealertruleproperties): Threat Intelligence alert rule properties


## Resource Microsoft.SecurityInsights/alertRules/actions@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionRequestPropertiesOrActionResponseProperties](#actionrequestpropertiesoractionresponseproperties): Action properties for put request
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/alertRules/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/alertRuleTemplates@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
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

### NrtAlertRuleTemplate
#### Properties
* **kind**: 'NRT' (Required): The kind of the alert rule
* **properties**: [NrtAlertRuleTemplateProperties](#nrtalertruletemplateproperties) (ReadOnly): NRT alert rule template properties

### ScheduledAlertRuleTemplate
#### Properties
* **kind**: 'Scheduled' (Required): The kind of the alert rule
* **properties**: [ScheduledAlertRuleTemplateProperties](#scheduledalertruletemplateproperties) (ReadOnly): Scheduled alert rule template properties

### ThreatIntelligenceAlertRuleTemplate
#### Properties
* **kind**: 'ThreatIntelligence' (Required): The kind of the alert rule
* **properties**: [ThreatIntelligenceAlertRuleTemplateProperties](#threatintelligencealertruletemplateproperties) (ReadOnly): Threat Intelligence alert rule template properties


## Resource Microsoft.SecurityInsights/automationRules@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationRuleProperties](#automationruleproperties) (Required): Automation rule properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/automationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/billingStatistics@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/billingStatistics' (ReadOnly, DeployTimeConstant): The resource type

### SapSolutionUsageStatistic
#### Properties
* **kind**: 'SapSolutionUsage' (Required): The kind of the billing statistic
* **properties**: [SapSolutionUsageStatisticProperties](#sapsolutionusagestatisticproperties) (ReadOnly): The SAP solution usage object


## Resource Microsoft.SecurityInsights/bookmarks@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BookmarkProperties](#bookmarkproperties): Bookmark properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/bookmarks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/bookmarks/relations@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/bookmarks/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/contentPackages@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PackageProperties](#packageproperties): package properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/contentPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/contentProductPackages@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PackagePropertiesAutoGenerated](#packagepropertiesautogenerated) (ReadOnly): package properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/contentProductPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/contentproducttemplates@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TemplateProperties](#templateproperties) (ReadOnly): template properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/contentproducttemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/contentTemplates@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TemplatePropertiesAutoGenerated](#templatepropertiesautogenerated): template properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/contentTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/dataConnectors@2023-05-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/dataConnectors' (ReadOnly, DeployTimeConstant): The resource type

### AwsCloudTrailDataConnector
#### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required): The data connector kind
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties): Amazon Web Services CloudTrail data connector properties.

### AwsS3DataConnector
#### Properties
* **kind**: 'AmazonWebServicesS3' (Required): The data connector kind
* **properties**: [AwsS3DataConnectorProperties](#awss3dataconnectorproperties): Amazon Web Services S3 data connector properties.

### CodelessApiPollingDataConnector
#### Properties
* **kind**: 'APIPolling' (Required): The data connector kind
* **properties**: [ApiPollingParameters](#apipollingparameters): Codeless poling data connector properties

### AADDataConnector
#### Properties
* **kind**: 'AzureActiveDirectory' (Required): The data connector kind
* **properties**: [AADDataConnectorProperties](#aaddataconnectorproperties): AADIP (Azure Active Directory Identity Protection) data connector properties.

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

### GCPDataConnector
#### Properties
* **kind**: 'GCP' (Required): The data connector kind
* **properties**: [GCPDataConnectorProperties](#gcpdataconnectorproperties): Google Cloud Platform data connector properties.

### CodelessUiDataConnector
#### Properties
* **kind**: 'GenericUI' (Required): The data connector kind
* **properties**: [CodelessParameters](#codelessparameters): Codeless UI data connector properties

### IoTDataConnector
#### Properties
* **kind**: 'IOT' (Required): The data connector kind
* **properties**: [IoTDataConnectorProperties](#iotdataconnectorproperties): IoT data connector properties.

### McasDataConnector
#### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required): The data connector kind
* **properties**: [McasDataConnectorProperties](#mcasdataconnectorproperties): MCAS (Microsoft Cloud App Security) data connector properties.

### MdatpDataConnector
#### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required): The data connector kind
* **properties**: [MdatpDataConnectorProperties](#mdatpdataconnectorproperties): MDATP (Microsoft Defender Advanced Threat Protection) data connector properties.

### MicrosoftPurviewInformationProtectionDataConnector
#### Properties
* **kind**: 'MicrosoftPurviewInformationProtection' (Required): The data connector kind
* **properties**: [MicrosoftPurviewInformationProtectionDataConnectorProperties](#microsoftpurviewinformationprotectiondataconnectorproperties): Microsoft Purview Information Protection data connector properties.

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

### Office365ProjectDataConnector
#### Properties
* **kind**: 'Office365Project' (Required): The data connector kind
* **properties**: [Office365ProjectDataConnectorProperties](#office365projectdataconnectorproperties): Office Microsoft Project data connector properties.

### OfficeATPDataConnector
#### Properties
* **kind**: 'OfficeATP' (Required): The data connector kind
* **properties**: [OfficeATPDataConnectorProperties](#officeatpdataconnectorproperties): OfficeATP (Office 365 Advanced Threat Protection) data connector properties.

### OfficeIRMDataConnector
#### Properties
* **kind**: 'OfficeIRM' (Required): The data connector kind
* **properties**: [OfficeIRMDataConnectorProperties](#officeirmdataconnectorproperties): OfficeIRM (Microsoft Insider Risk Management) data connector properties.

### OfficePowerBIDataConnector
#### Properties
* **kind**: 'OfficePowerBI' (Required): The data connector kind
* **properties**: [OfficePowerBIDataConnectorProperties](#officepowerbidataconnectorproperties): Office Microsoft PowerBI data connector properties.

### TIDataConnector
#### Properties
* **kind**: 'ThreatIntelligence' (Required): The data connector kind
* **properties**: [TIDataConnectorProperties](#tidataconnectorproperties): TI (Threat Intelligence) data connector properties.

### TiTaxiiDataConnector
#### Properties
* **kind**: 'ThreatIntelligenceTaxii' (Required): The data connector kind
* **properties**: [TiTaxiiDataConnectorProperties](#titaxiidataconnectorproperties): Threat intelligence TAXII data connector properties.


## Resource Microsoft.SecurityInsights/entities@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/entities' (ReadOnly, DeployTimeConstant): The resource type

### AccountEntity
#### Properties
* **kind**: 'Account' (Required): The kind of the entity.
* **properties**: [AccountEntityProperties](#accountentityproperties) (ReadOnly): Account entity properties

### AzureResourceEntity
#### Properties
* **kind**: 'AzureResource' (Required): The kind of the entity.
* **properties**: [AzureResourceEntityProperties](#azureresourceentityproperties) (ReadOnly): AzureResource entity properties

### HuntingBookmark
#### Properties
* **kind**: 'Bookmark' (Required): The kind of the entity.
* **properties**: [HuntingBookmarkProperties](#huntingbookmarkproperties) (ReadOnly): HuntingBookmark entity properties

### CloudApplicationEntity
#### Properties
* **kind**: 'CloudApplication' (Required): The kind of the entity.
* **properties**: [CloudApplicationEntityProperties](#cloudapplicationentityproperties) (ReadOnly): CloudApplication entity properties

### DnsEntity
#### Properties
* **kind**: 'DnsResolution' (Required): The kind of the entity.
* **properties**: [DnsEntityProperties](#dnsentityproperties) (ReadOnly): Dns entity properties

### FileEntity
#### Properties
* **kind**: 'File' (Required): The kind of the entity.
* **properties**: [FileEntityProperties](#fileentityproperties) (ReadOnly): File entity properties

### FileHashEntity
#### Properties
* **kind**: 'FileHash' (Required): The kind of the entity.
* **properties**: [FileHashEntityProperties](#filehashentityproperties) (ReadOnly): FileHash entity properties

### HostEntity
#### Properties
* **kind**: 'Host' (Required): The kind of the entity.
* **properties**: [HostEntityProperties](#hostentityproperties) (ReadOnly): Host entity properties

### IoTDeviceEntity
#### Properties
* **kind**: 'IoTDevice' (Required): The kind of the entity.
* **properties**: [IoTDeviceEntityProperties](#iotdeviceentityproperties) (ReadOnly): IoTDevice entity properties

### IpEntity
#### Properties
* **kind**: 'Ip' (Required): The kind of the entity.
* **properties**: [IpEntityProperties](#ipentityproperties) (ReadOnly): Ip entity properties

### MailboxEntity
#### Properties
* **kind**: 'Mailbox' (Required): The kind of the entity.
* **properties**: [MailboxEntityProperties](#mailboxentityproperties) (ReadOnly): Mailbox entity properties

### MailClusterEntity
#### Properties
* **kind**: 'MailCluster' (Required): The kind of the entity.
* **properties**: [MailClusterEntityProperties](#mailclusterentityproperties) (ReadOnly): Mail cluster entity properties

### MailMessageEntity
#### Properties
* **kind**: 'MailMessage' (Required): The kind of the entity.
* **properties**: [MailMessageEntityProperties](#mailmessageentityproperties) (ReadOnly): Mail message entity properties

### MalwareEntity
#### Properties
* **kind**: 'Malware' (Required): The kind of the entity.
* **properties**: [MalwareEntityProperties](#malwareentityproperties) (ReadOnly): File entity properties

### NicEntity
#### Properties
* **kind**: 'Nic' (Required): The kind of the entity.
* **properties**: [NicEntityProperties](#nicentityproperties) (ReadOnly): Network interface entity properties

### ProcessEntity
#### Properties
* **kind**: 'Process' (Required): The kind of the entity.
* **properties**: [ProcessEntityProperties](#processentityproperties) (ReadOnly): Process entity properties

### RegistryKeyEntity
#### Properties
* **kind**: 'RegistryKey' (Required): The kind of the entity.
* **properties**: [RegistryKeyEntityProperties](#registrykeyentityproperties) (ReadOnly): RegistryKey entity properties

### RegistryValueEntity
#### Properties
* **kind**: 'RegistryValue' (Required): The kind of the entity.
* **properties**: [RegistryValueEntityProperties](#registryvalueentityproperties) (ReadOnly): RegistryKey entity properties

### SecurityAlert
#### Properties
* **kind**: 'SecurityAlert' (Required): The kind of the entity.
* **properties**: [SecurityAlertProperties](#securityalertproperties) (ReadOnly): SecurityAlert entity properties

### SecurityGroupEntity
#### Properties
* **kind**: 'SecurityGroup' (Required): The kind of the entity.
* **properties**: [SecurityGroupEntityProperties](#securitygroupentityproperties) (ReadOnly): SecurityGroup entity properties

### SubmissionMailEntity
#### Properties
* **kind**: 'SubmissionMail' (Required): The kind of the entity.
* **properties**: [SubmissionMailEntityProperties](#submissionmailentityproperties) (ReadOnly): Submission mail entity properties

### UrlEntity
#### Properties
* **kind**: 'Url' (Required): The kind of the entity.
* **properties**: [UrlEntityProperties](#urlentityproperties) (ReadOnly): Url entity properties


## Resource Microsoft.SecurityInsights/entities/relations@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties) (ReadOnly): Relation properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/entities/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/entityQueries@2023-05-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/entityQueries' (ReadOnly, DeployTimeConstant): The resource type

### ActivityCustomEntityQueryOrActivityEntityQuery
#### Properties
* **kind**: 'Activity' (Required): the entity query kind
* **properties**: [ActivityEntityQueriesProperties](#activityentityqueriesproperties): Activity entity query properties

### ExpansionEntityQuery
#### Properties
* **kind**: 'Expansion' (Required): the entity query kind
* **properties**: [ExpansionEntityQueriesProperties](#expansionentityqueriesproperties) (ReadOnly): Expansion entity query properties


## Resource Microsoft.SecurityInsights/entityQueryTemplates@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/entityQueryTemplates' (ReadOnly, DeployTimeConstant): The resource type

### ActivityEntityQueryTemplate
#### Properties
* **kind**: 'Activity' (Required): the entity query template kind
* **properties**: [ActivityEntityQueryTemplateProperties](#activityentityquerytemplateproperties) (ReadOnly): Activity entity query properties


## Resource Microsoft.SecurityInsights/fileImports@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FileImportProperties](#fileimportproperties): File import properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/fileImports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/hunts@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HuntProperties](#huntproperties): Hunt properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/hunts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/hunts/comments@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HuntCommentProperties](#huntcommentproperties): Hunt Comment properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/hunts/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/hunts/relations@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HuntRelationProperties](#huntrelationproperties): Hunt Relation properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/hunts/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentProperties](#incidentproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/comments@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentCommentProperties](#incidentcommentproperties): Incident comment properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/relations@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/tasks@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentTaskProperties](#incidenttaskproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/incidents/tasks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/metadata@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MetadataProperties](#metadataproperties): Metadata properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/metadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/officeConsents@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OfficeConsentProperties](#officeconsentproperties) (ReadOnly): Office consent properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/officeConsents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/onboardingStates@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SentinelOnboardingStateProperties](#sentinelonboardingstateproperties): The Sentinel onboarding state object
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/onboardingStates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/securityMLAnalyticsSettings@2023-05-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/securityMLAnalyticsSettings' (ReadOnly, DeployTimeConstant): The resource type

### AnomalySecurityMLAnalyticsSettings
#### Properties
* **kind**: 'Anomaly' (Required): The kind of security ML Analytics Settings
* **properties**: [AnomalySecurityMLAnalyticsSettingsProperties](#anomalysecuritymlanalyticssettingsproperties): Anomaly Security ML Analytics Settings properties


## Resource Microsoft.SecurityInsights/settings@2023-05-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/settings' (ReadOnly, DeployTimeConstant): The resource type

### Anomalies
#### Properties
* **kind**: 'Anomalies' (Required): The kind of the setting
* **properties**: [AnomaliesSettingsProperties](#anomaliessettingsproperties): Anomalies properties

### EntityAnalytics
#### Properties
* **kind**: 'EntityAnalytics' (Required): The kind of the setting
* **properties**: [EntityAnalyticsProperties](#entityanalyticsproperties): EntityAnalytics properties

### EyesOn
#### Properties
* **kind**: 'EyesOn' (Required): The kind of the setting
* **properties**: [EyesOnSettingsProperties](#eyesonsettingsproperties): EyesOn properties

### Ueba
#### Properties
* **kind**: 'Ueba' (Required): The kind of the setting
* **properties**: [UebaProperties](#uebaproperties): Ueba properties


## Resource Microsoft.SecurityInsights/sourcecontrols@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlProperties](#sourcecontrolproperties): source control properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/threatIntelligence/indicators@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ThreatIntelligenceIndicatorProperties](#threatintelligenceindicatorproperties) (WriteOnly): Threat Intelligence Entity properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/threatIntelligence/indicators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/triggeredAnalyticsRuleRuns@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredAnalyticsRuleRunProperties](#triggeredanalyticsrulerunproperties) (ReadOnly): The triggered analytics rule run Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/triggeredAnalyticsRuleRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistProperties](#watchlistproperties): Watchlist properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists/watchlistItems@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistItemProperties](#watchlistitemproperties): Watchlist Item properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/watchlists/watchlistItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/workspaceManagerAssignments@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceManagerAssignmentProperties](#workspacemanagerassignmentproperties): The workspace manager assignment object
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/workspaceManagerAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/workspaceManagerAssignments/jobs@2023-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (ReadOnly): The job object
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/workspaceManagerAssignments/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/workspaceManagerConfigurations@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceManagerConfigurationProperties](#workspacemanagerconfigurationproperties): The workspace manager configuration object
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/workspaceManagerConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/workspaceManagerGroups@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceManagerGroupProperties](#workspacemanagergroupproperties): The workspace manager group object
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/workspaceManagerGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/workspaceManagerMembers@2023-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceManagerMemberProperties](#workspacemanagermemberproperties): The workspace manager member object
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityInsights/workspaceManagerMembers' (ReadOnly, DeployTimeConstant): The resource type

## AADDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## AatpDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

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
* **ntDomain**: string (ReadOnly): The NetBIOS domain name as it appears in the alert format domain/username. Examples: NT AUTHORITY.
* **objectGuid**: string (ReadOnly): The objectGUID attribute is a single-value attribute that is the unique identifier for the object, assigned by active directory.
* **puid**: string (ReadOnly): The Azure Active Directory Passport User ID.
* **sid**: string (ReadOnly): The account security identifier, e.g. S-1-5-18.
* **upnSuffix**: string (ReadOnly): The user principal name suffix for the account, in some cases it is also the domain name. Examples: contoso.com.

## ActionRequestPropertiesOrActionResponseProperties
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
* **inputEntityType**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'HuntingBookmark' | 'IP' | 'IoTDevice' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Nic' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string: The type of the query's source entity
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
* **content**: string: The entity query content to display in timeline
* **dataTypes**: [DataTypeDefinitions](#datatypedefinitions)[]: List of required data types for the given entity query template
* **description**: string: The entity query description
* **entitiesFilter**: [ActivityEntityQueryTemplatePropertiesEntitiesFilter](#activityentityquerytemplatepropertiesentitiesfilter): The query applied only to entities matching to all filters
* **inputEntityType**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'HuntingBookmark' | 'IP' | 'IoTDevice' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Nic' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string: The type of the query's source entity
* **queryDefinitions**: [ActivityEntityQueryTemplatePropertiesQueryDefinitions](#activityentityquerytemplatepropertiesquerydefinitions): The Activity query definitions
* **requiredInputFieldsSets**: string[][]: List of the fields of the source entity that are required to run the query
* **title**: string: The entity query title

## ActivityEntityQueryTemplatePropertiesEntitiesFilter
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## ActivityEntityQueryTemplatePropertiesQueryDefinitions
### Properties
* **query**: string: The Activity query to run on a given entity
* **summarizeBy**: string: The dimensions we want to summarize the timeline results on, this is comma separated list

## AddIncidentTaskActionProperties
### Properties
* **description**: string: The description of the task.
* **title**: string (Required): The title of the task.

## AlertDetailsOverride
### Properties
* **alertDescriptionFormat**: string: the format containing columns name(s) to override the alert description
* **alertDisplayNameFormat**: string: the format containing columns name(s) to override the alert name
* **alertDynamicProperties**: [AlertPropertyMapping](#alertpropertymapping)[]: List of additional dynamic properties to override
* **alertSeverityColumnName**: string: the column name to take the alert severity from
* **alertTacticsColumnName**: string: the column name to take the alert tactics from

## AlertPropertyMapping
### Properties
* **alertProperty**: 'AlertLink' | 'ConfidenceLevel' | 'ConfidenceScore' | 'ExtendedLinks' | 'ProductComponentName' | 'ProductName' | 'ProviderName' | 'RemediationSteps' | 'Techniques' | string: The V3 alert property
* **value**: string: the column name to use to override this property

## AlertRuleTemplateDataSource
### Properties
* **connectorId**: string: The connector id that provides the following data types
* **dataTypes**: string[]: The data types used by the alert rule template

## AlertsDataTypeOfDataConnector
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon) (Required): Alerts data type connection.

## AnomaliesSettingsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## AnomalySecurityMLAnalyticsSettingsProperties
### Properties
* **anomalySettingsVersion**: int: The anomaly settings version of the Anomaly security ml analytics settings that dictates whether job version gets updated or not.
* **anomalyVersion**: string (Required): The anomaly version of the AnomalySecurityMLAnalyticsSettings.
* **customizableObservations**: any: The customizable observations of the AnomalySecurityMLAnalyticsSettings.
* **description**: string: The description of the SecurityMLAnalyticsSettings.
* **displayName**: string (Required): The display name for settings created by this SecurityMLAnalyticsSettings.
* **enabled**: bool (Required): Determines whether this settings is enabled or disabled.
* **frequency**: string (Required): The frequency that this SecurityMLAnalyticsSettings will be run.
* **isDefaultSettings**: bool (Required): Determines whether this anomaly security ml analytics settings is a default settings
* **lastModifiedUtc**: string (ReadOnly): The last time that this SecurityMLAnalyticsSettings has been modified.
* **requiredDataConnectors**: [SecurityMLAnalyticsSettingsDataSource](#securitymlanalyticssettingsdatasource)[]: The required data sources for this SecurityMLAnalyticsSettings
* **settingsDefinitionId**: string: The anomaly settings definition Id
* **settingsStatus**: 'Flighting' | 'Production' | string (Required): The anomaly SecurityMLAnalyticsSettings status
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[]: The tactics of the SecurityMLAnalyticsSettings
* **techniques**: string[]: The techniques of the SecurityMLAnalyticsSettings

## ApiPollingParameters
### Properties
* **connectorUiConfig**: [CodelessUiConnectorConfigProperties](#codelessuiconnectorconfigproperties): Config to describe the instructions blade
* **pollingConfig**: [CodelessConnectorPollingConfigProperties](#codelessconnectorpollingconfigproperties): Config to describe the polling instructions

## ASCDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **subscriptionId**: string: The subscription id to connect to, and get the data from.

## AssignmentItem
### Properties
* **resourceId**: string: The resource id of the content item

## AutomationRuleAction
* **Discriminator**: actionType

### Base Properties
* **order**: int (Required)

### AutomationRuleAddIncidentTaskAction
#### Properties
* **actionConfiguration**: [AddIncidentTaskActionProperties](#addincidenttaskactionproperties)
* **actionType**: 'AddIncidentTask' (Required): The type of the automation rule action.

### AutomationRuleModifyPropertiesAction
#### Properties
* **actionConfiguration**: [IncidentPropertiesAction](#incidentpropertiesaction)
* **actionType**: 'ModifyProperties' (Required): The type of the automation rule action.

### AutomationRuleRunPlaybookAction
#### Properties
* **actionConfiguration**: [PlaybookActionProperties](#playbookactionproperties)
* **actionType**: 'RunPlaybook' (Required): The type of the automation rule action.


## AutomationRuleBooleanCondition
### Properties
* **innerConditions**: [AutomationRuleCondition](#automationrulecondition)[]
* **operator**: 'And' | 'Or' | string

## AutomationRuleCondition
* **Discriminator**: conditionType

### Base Properties

### BooleanConditionProperties
#### Properties
* **conditionProperties**: [AutomationRuleBooleanCondition](#automationrulebooleancondition)
* **conditionType**: 'Boolean' (Required)

### PropertyConditionProperties
#### Properties
* **conditionProperties**: [AutomationRulePropertyValuesCondition](#automationrulepropertyvaluescondition)
* **conditionType**: 'Property' (Required)

### PropertyArrayConditionProperties
#### Properties
* **conditionProperties**: [AutomationRulePropertyArrayValuesCondition](#automationrulepropertyarrayvaluescondition)
* **conditionType**: 'PropertyArray' (Required)

### PropertyArrayChangedConditionProperties
#### Properties
* **conditionProperties**: [AutomationRulePropertyArrayChangedValuesCondition](#automationrulepropertyarraychangedvaluescondition)
* **conditionType**: 'PropertyArrayChanged' (Required)

### PropertyChangedConditionProperties
#### Properties
* **conditionProperties**: [AutomationRulePropertyValuesChangedCondition](#automationrulepropertyvalueschangedcondition)
* **conditionType**: 'PropertyChanged' (Required)


## AutomationRuleProperties
### Properties
* **actions**: [AutomationRuleAction](#automationruleaction)[] (Required): The actions to execute when the automation rule is triggered.
* **createdBy**: [ClientInfo](#clientinfo) (ReadOnly): Information on the client (user or application) that made some action
* **createdTimeUtc**: string (ReadOnly): The time the automation rule was created.
* **displayName**: string (Required): The display name of the automation rule.
* **lastModifiedBy**: [ClientInfo](#clientinfo) (ReadOnly): Information on the client (user or application) that made some action
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the automation rule was updated.
* **order**: int (Required): The order of execution of the automation rule.
* **triggeringLogic**: [AutomationRuleTriggeringLogic](#automationruletriggeringlogic) (Required): Describes automation rule triggering logic.

## AutomationRulePropertyArrayChangedValuesCondition
### Properties
* **arrayType**: 'Alerts' | 'Comments' | 'Labels' | 'Tactics' | string
* **changeType**: 'Added' | string

## AutomationRulePropertyArrayValuesCondition
### Properties
* **arrayConditionType**: 'AnyItem' | string
* **arrayType**: 'CustomDetailValues' | 'CustomDetails' | string
* **itemConditions**: [AutomationRuleCondition](#automationrulecondition)[]

## AutomationRulePropertyValuesChangedCondition
### Properties
* **changeType**: 'ChangedFrom' | 'ChangedTo' | string
* **operator**: 'Contains' | 'EndsWith' | 'Equals' | 'NotContains' | 'NotEndsWith' | 'NotEquals' | 'NotStartsWith' | 'StartsWith' | string
* **propertyName**: 'IncidentOwner' | 'IncidentSeverity' | 'IncidentStatus' | string
* **propertyValues**: string[]

## AutomationRulePropertyValuesCondition
### Properties
* **operator**: 'Contains' | 'EndsWith' | 'Equals' | 'NotContains' | 'NotEndsWith' | 'NotEquals' | 'NotStartsWith' | 'StartsWith' | string
* **propertyName**: 'AccountAadTenantId' | 'AccountAadUserId' | 'AccountNTDomain' | 'AccountName' | 'AccountObjectGuid' | 'AccountPUID' | 'AccountSid' | 'AccountUPNSuffix' | 'AlertAnalyticRuleIds' | 'AlertProductNames' | 'AzureResourceResourceId' | 'AzureResourceSubscriptionId' | 'CloudApplicationAppId' | 'CloudApplicationAppName' | 'DNSDomainName' | 'FileDirectory' | 'FileHashValue' | 'FileName' | 'HostAzureID' | 'HostNTDomain' | 'HostName' | 'HostNetBiosName' | 'HostOSVersion' | 'IPAddress' | 'IncidentCustomDetailsKey' | 'IncidentCustomDetailsValue' | 'IncidentDescription' | 'IncidentLabel' | 'IncidentProviderName' | 'IncidentRelatedAnalyticRuleIds' | 'IncidentSeverity' | 'IncidentStatus' | 'IncidentTactics' | 'IncidentTitle' | 'IncidentUpdatedBySource' | 'IoTDeviceId' | 'IoTDeviceModel' | 'IoTDeviceName' | 'IoTDeviceOperatingSystem' | 'IoTDeviceType' | 'IoTDeviceVendor' | 'MailMessageDeliveryAction' | 'MailMessageDeliveryLocation' | 'MailMessageP1Sender' | 'MailMessageP2Sender' | 'MailMessageRecipient' | 'MailMessageSenderIP' | 'MailMessageSubject' | 'MailboxDisplayName' | 'MailboxPrimaryAddress' | 'MailboxUPN' | 'MalwareCategory' | 'MalwareName' | 'ProcessCommandLine' | 'ProcessId' | 'RegistryKey' | 'RegistryValueData' | 'Url' | string: The property to evaluate in an automation rule property condition.
* **propertyValues**: string[]

## AutomationRuleTriggeringLogic
### Properties
* **conditions**: [AutomationRuleCondition](#automationrulecondition)[]: The conditions to evaluate to determine if the automation rule should be triggered on a given object.
* **expirationTimeUtc**: string: Determines when the automation rule should automatically expire and be disabled.
* **isEnabled**: bool (Required): Determines whether the automation rule is enabled or disabled.
* **triggersOn**: 'Alerts' | 'Incidents' | string (Required)
* **triggersWhen**: 'Created' | 'Updated' | string (Required)

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
* **dataTypes**: [AwsCloudTrailDataConnectorDataTypes](#awscloudtraildataconnectordatatypes) (Required): The available data types for the connector.

## AwsS3DataConnectorDataTypes
### Properties
* **logs**: [AwsS3DataConnectorDataTypesLogs](#awss3dataconnectordatatypeslogs) (Required): Logs data type.

## AwsS3DataConnectorDataTypesLogs
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## AwsS3DataConnectorProperties
### Properties
* **dataTypes**: [AwsS3DataConnectorDataTypes](#awss3dataconnectordatatypes) (Required): The available data types for the connector.
* **destinationTable**: string (Required): The logs destination table name in LogAnalytics.
* **roleArn**: string (Required): The Aws Role Arn that is used to access the Aws account.
* **sqsUrls**: string[] (Required): The AWS sqs urls for the connector.

## AzureDevOpsResourceInfo
### Properties
* **pipelineId**: string: Id of the pipeline created for the source-control.
* **serviceConnectionId**: string: Id of the service-connection created for the source-control.

## AzureResourceEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **resourceId**: string (ReadOnly): The azure resource id of the resource
* **subscriptionId**: string (ReadOnly): The subscription id of the resource

## BookmarkEntityMappings
### Properties
* **entityType**: string: The entity type
* **fieldMappings**: [EntityFieldMapping](#entityfieldmapping)[]: Array of fields mapping for that entity type

## BookmarkProperties
### Properties
* **created**: string: The time the bookmark was created
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the bookmark
* **displayName**: string (Required): The display name of the bookmark
* **entityMappings**: [BookmarkEntityMappings](#bookmarkentitymappings)[]: Describes the entity mappings of the bookmark
* **eventTime**: string: The bookmark event time
* **incidentInfo**: [IncidentInfo](#incidentinfo): Describes an incident that relates to bookmark
* **labels**: string[]: List of labels relevant to this bookmark
* **notes**: string: The notes of the bookmark
* **query**: string (Required): The query of the bookmark.
* **queryEndTime**: string: The end time for the query
* **queryResult**: string: The query result of the bookmark.
* **queryStartTime**: string: The start time for the query
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[]: A list of relevant mitre attacks
* **techniques**: string[]: A list of relevant mitre techniques
* **updated**: string: The last time the bookmark was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the bookmark

## ClientInfo
### Properties
* **email**: string: The email of the client.
* **name**: string: The name of the client.
* **objectId**: string: The object id of the client.
* **userPrincipalName**: string: The user principal name of the client.

## CloudApplicationEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **appId**: int (ReadOnly): The technical identifier of the application.
* **appName**: string (ReadOnly): The name of the related cloud application.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **instanceName**: string (ReadOnly): The user defined instance name of the cloud application. It is often used to distinguish between several applications of the same type that a customer has.

## CodelessConnectorPollingAuthProperties
### Properties
* **apiKeyIdentifier**: string: A prefix send in the header before the actual token
* **apiKeyName**: string: The header name which the token is sent with
* **authorizationEndpoint**: string: The endpoint used to authorize the user, used in Oauth 2.0 flow
* **authorizationEndpointQueryParameters**: any: The query parameters used in authorization request, used in Oauth 2.0 flow
* **authType**: string (Required): The authentication type
* **flowName**: string: Describes the flow name, for example 'AuthCode' for Oauth 2.0
* **isApiKeyInPostPayload**: string: Marks if the key should sent in header
* **isClientSecretInHeader**: bool: Marks if we should send the client secret in header or payload, used in Oauth 2.0 flow
* **redirectionEndpoint**: string: The redirect endpoint where we will get the authorization code, used in Oauth 2.0 flow
* **scope**: string: The OAuth token scope
* **tokenEndpoint**: string: The endpoint used to issue a token, used in Oauth 2.0 flow
* **tokenEndpointHeaders**: any: The query headers used in token request, used in Oauth 2.0 flow
* **tokenEndpointQueryParameters**: any: The query parameters used in token request, used in Oauth 2.0 flow

## CodelessConnectorPollingConfigProperties
### Properties
* **auth**: [CodelessConnectorPollingAuthProperties](#codelessconnectorpollingauthproperties) (Required): Describe the authentication type of the poller
* **isActive**: bool: The poller active status
* **paging**: [CodelessConnectorPollingPagingProperties](#codelessconnectorpollingpagingproperties): Describe the poll request paging config of the poller
* **request**: [CodelessConnectorPollingRequestProperties](#codelessconnectorpollingrequestproperties) (Required): Describe the poll request config parameters of the poller
* **response**: [CodelessConnectorPollingResponseProperties](#codelessconnectorpollingresponseproperties): Describe the response config parameters of the poller

## CodelessConnectorPollingPagingProperties
### Properties
* **nextPageParaName**: string: Defines the name of a next page attribute
* **nextPageTokenJsonPath**: string: Defines the path to a next page token JSON
* **pageCountAttributePath**: string: Defines the path to a page count attribute
* **pageSize**: int: Defines the paging size
* **pageSizeParaName**: string: Defines the name of the page size parameter
* **pageTimeStampAttributePath**: string: Defines the path to a paging time stamp attribute
* **pageTotalCountAttributePath**: string: Defines the path to a page total count attribute
* **pagingType**: string (Required): Describes the type. could be 'None', 'PageToken', 'PageCount', 'TimeStamp'
* **searchTheLatestTimeStampFromEventsList**: string: Determines whether to search for the latest time stamp in the events list

## CodelessConnectorPollingRequestProperties
### Properties
* **apiEndpoint**: string (Required): Describe the endpoint we should pull the data from
* **endTimeAttributeName**: string: This will be used the query events from the end of the time window
* **headers**: any: Describe the headers sent in the poll request
* **httpMethod**: string (Required): The http method type we will use in the poll request, GET or POST
* **queryParameters**: any: Describe the query parameters sent in the poll request
* **queryParametersTemplate**: string: For advanced scenarios for example user name/password embedded in nested JSON payload
* **queryTimeFormat**: string (Required): The time format will be used the query events in a specific window
* **queryWindowInMin**: int (Required): The window interval we will use the pull the data
* **rateLimitQps**: int: Defines the rate limit QPS
* **retryCount**: int: Describe the amount of time we should try and poll the data in case of failure
* **startTimeAttributeName**: string: This will be used the query events from a start of the time window
* **timeoutInSeconds**: int: The number of seconds we will consider as a request timeout

## CodelessConnectorPollingResponseProperties
### Properties
* **eventsJsonPaths**: string[] (Required): Describes the path we should extract the data in the response
* **isGzipCompressed**: bool: Describes if the data in the response is Gzip
* **successStatusJsonPath**: string: Describes the path we should extract the status code in the response
* **successStatusValue**: string: Describes the path we should extract the status value in the response

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
* **contentType**: 'AnalyticRule' | 'Workbook' | string: Content type.
* **path**: string: The path to the content.

## DataConnectorDataTypeCommon
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## DataTypeDefinitions
### Properties
* **dataType**: string: The data type name

## DCRConfiguration
### Properties
* **dataCollectionEndpoint**: string (Required): Represents the data collection ingestion endpoint in log analytics.
* **dataCollectionRuleImmutableId**: string (Required): The data collection rule immutable id, the rule defines the transformation and data destination.
* **streamName**: string (Required): The stream we are sending the data to.

## Deployment
### Properties
* **deploymentId**: string: Deployment identifier.
* **deploymentLogsUrl**: string: Url to access repository action logs.
* **deploymentResult**: 'Canceled' | 'Failed' | 'Success' | string: The outcome of the deployment.
* **deploymentState**: 'Canceling' | 'Completed' | 'In_Progress' | 'Queued' | string: Current status of the deployment.
* **deploymentTime**: string: The time when the deployment finished.

## DeploymentInfo
### Properties
* **deployment**: [Deployment](#deployment): Deployment information.
* **deploymentFetchStatus**: 'NotFound' | 'Success' | 'Unauthorized' | string: Status while fetching the last deployment.
* **message**: string: Additional details about the deployment that can be shown to the user.

## DnsEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **dnsServerIpEntityId**: string (ReadOnly): An ip entity id for the dns server resolving the request
* **domainName**: string (ReadOnly): The name of the dns record associated with the alert
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **hostIpAddressEntityId**: string (ReadOnly): An ip entity id for the dns request client
* **ipAddressEntityIds**: string[] (ReadOnly): Ip entity identifiers for the resolved ip address.

## Dynamics365DataConnectorDataTypes
### Properties
* **dynamics365CdsActivities**: [Dynamics365DataConnectorDataTypesDynamics365CdsActivities](#dynamics365dataconnectordatatypesdynamics365cdsactivities) (Required): Common Data Service data type connection.

## Dynamics365DataConnectorDataTypesDynamics365CdsActivities
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## Dynamics365DataConnectorProperties
### Properties
* **dataTypes**: [Dynamics365DataConnectorDataTypes](#dynamics365dataconnectordatatypes) (Required): The available data types for the connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## EntityAnalyticsProperties
### Properties
* **entityProviders**: 'ActiveDirectory' | 'AzureActiveDirectory' | string[]: The relevant entity providers that are synced

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

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EntityFieldMapping
### Properties
* **identifier**: string: Alert V3 identifier
* **value**: string: The value of the identifier

## EntityMapping
### Properties
* **entityType**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'IP' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string: The V3 type of the mapped entity
* **fieldMappings**: [FieldMapping](#fieldmapping)[]: array of field mappings for the given entity mapping

## Error
### Properties
* **errorMessage**: string (Required): The error message
* **memberResourceName**: string (Required): The member resource name for which the publication error occured

## EventGroupingSettings
### Properties
* **aggregationKind**: 'AlertPerResult' | 'SingleAlert' | string: The event grouping aggregation kinds

## ExpansionEntityQueriesProperties
### Properties
* **dataSources**: string[]: List of the data sources that are required to run the query
* **displayName**: string: The query display name
* **inputEntityType**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'HuntingBookmark' | 'IP' | 'IoTDevice' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Nic' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string: The type of the query's source entity
* **inputFields**: string[]: List of the fields of the source entity that are required to run the query
* **outputEntityTypes**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'HuntingBookmark' | 'IP' | 'IoTDevice' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Nic' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityAlert' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string[]: List of the desired output types to be constructed from the result
* **queryTemplate**: string: The template query string to be parsed and formatted

## EyesOnSettingsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

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

## FileImportProperties
### Properties
* **contentType**: 'BasicIndicator' | 'StixIndicator' | 'Unspecified' | string (Required): The content type of this file.
* **createdTimeUTC**: string (ReadOnly): The time the file was imported.
* **errorFile**: [FileMetadata](#filemetadata) (ReadOnly): Represents the error file (if the import was ingested with errors or failed the validation).
* **errorsPreview**: [ValidationError](#validationerror)[] (ReadOnly): An ordered list of some of the errors that were encountered during validation.
* **filesValidUntilTimeUTC**: string (ReadOnly): The time the files associated with this import are deleted from the storage account.
* **importFile**: [FileMetadata](#filemetadata) (Required): Represents the imported file.
* **importValidUntilTimeUTC**: string (ReadOnly): The time the file import record is soft deleted from the database and history.
* **ingestedRecordCount**: int (ReadOnly): The number of records that have been successfully ingested.
* **ingestionMode**: 'IngestAnyValidRecords' | 'IngestOnlyIfAllAreValid' | 'Unspecified' | string (Required): Describes how to ingest the records in the file.
* **source**: string (Required): The source for the data in the file.
* **state**: 'FatalError' | 'InProgress' | 'Ingested' | 'IngestedWithErrors' | 'Invalid' | 'Unspecified' | 'WaitingForUpload' | string (ReadOnly): The state of the file import.
* **totalRecordCount**: int (ReadOnly): The number of records in the file.
* **validRecordCount**: int (ReadOnly): The number of records that have passed validation.

## FileMetadata
### Properties
* **deleteStatus**: 'Deleted' | 'NotDeleted' | 'Unspecified' | string (ReadOnly): Indicates whether the file was deleted from the storage account.
* **fileContentUri**: string (ReadOnly): A URI with a valid SAS token to allow uploading / downloading the file.
* **fileFormat**: 'CSV' | 'JSON' | 'Unspecified' | string: The format of the file
* **fileName**: string: The name of the file.
* **fileSize**: int: The size of the file.

## FusionAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required): The Name of the alert rule template used to create this rule.
* **description**: string (ReadOnly): The description of the alert rule.
* **displayName**: string (ReadOnly): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **scenarioExclusionPatterns**: [FusionScenarioExclusionPattern](#fusionscenarioexclusionpattern)[]: Configuration to exclude scenarios in fusion detection.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity for alerts created by this alert rule.
* **sourceSettings**: [FusionSourceSettings](#fusionsourcesettings)[]: Configuration for all supported source signals in fusion detection.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[] (ReadOnly): The tactics of the alert rule
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
* **sourceSettings**: [FusionTemplateSourceSetting](#fusiontemplatesourcesetting)[]: All supported source signal configurations consumed in fusion detection.
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string: The alert rule template status.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[]: The tactics of the alert rule template
* **techniques**: string[]: The techniques of the alert rule

## FusionScenarioExclusionPattern
### Properties
* **dateAddedInUTC**: string (Required): DateTime when scenario exclusion pattern is added in UTC.
* **exclusionPattern**: string (Required): Scenario exclusion pattern.

## FusionSourceSettings
### Properties
* **enabled**: bool (Required): Determines whether this source signal is enabled or disabled in Fusion detection.
* **sourceName**: string (Required): Name of the Fusion source signal. Refer to Fusion alert rule template for supported values.
* **sourceSubTypes**: [FusionSourceSubTypeSetting](#fusionsourcesubtypesetting)[]: Configuration for all source subtypes under this source signal consumed in fusion detection.

## FusionSourceSubTypeSetting
### Properties
* **enabled**: bool (Required): Determines whether this source subtype under source signal is enabled or disabled in Fusion detection.
* **severityFilters**: [FusionSubTypeSeverityFilter](#fusionsubtypeseverityfilter) (Required): Severity configuration for a source subtype consumed in fusion detection.
* **sourceSubTypeDisplayName**: string (ReadOnly): The display name of source subtype under a source signal consumed in Fusion detection.
* **sourceSubTypeName**: string (Required): The Name of the source subtype under a given source signal in Fusion detection. Refer to Fusion alert rule template for supported values.

## FusionSubTypeSeverityFilter
### Properties
* **filters**: [FusionSubTypeSeverityFiltersItem](#fusionsubtypeseverityfiltersitem)[]: Individual Severity configuration settings for a given source subtype consumed in Fusion detection.
* **isSupported**: bool (ReadOnly): Determines whether this source subtype supports severity configuration or not.

## FusionSubTypeSeverityFiltersItem
### Properties
* **enabled**: bool (Required): Determines whether this severity is enabled or disabled for this source subtype consumed in Fusion detection.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (Required): The Severity for a given source subtype consumed in Fusion detection.

## FusionTemplateSourceSetting
### Properties
* **sourceName**: string (Required): The name of a source signal consumed in Fusion detection.
* **sourceSubTypes**: [FusionTemplateSourceSubType](#fusiontemplatesourcesubtype)[]: All supported source subtypes under this source signal consumed in fusion detection.

## FusionTemplateSourceSubType
### Properties
* **severityFilter**: [FusionTemplateSubTypeSeverityFilter](#fusiontemplatesubtypeseverityfilter) (Required): Severity configuration available for a source subtype consumed in fusion detection.
* **sourceSubTypeDisplayName**: string (ReadOnly): The display name of source subtype under a source signal consumed in Fusion detection.
* **sourceSubTypeName**: string (Required): The name of source subtype under a source signal consumed in Fusion detection.

## FusionTemplateSubTypeSeverityFilter
### Properties
* **isSupported**: bool (Required): Determines whether severity configuration is supported for this source subtype consumed in Fusion detection.
* **severityFilters**: 'High' | 'Informational' | 'Low' | 'Medium' | string[]: List of all supported severities for this source subtype consumed in Fusion detection.

## GCPAuthProperties
### Properties
* **projectNumber**: string (Required): The GCP project number.
* **serviceAccountEmail**: string (Required): The service account that is used to access the GCP project.
* **workloadIdentityProviderId**: string (Required): The workload identity provider id that is used to gain access to the GCP project.

## GCPDataConnectorProperties
### Properties
* **auth**: [GCPAuthProperties](#gcpauthproperties) (Required): The auth section of the connector.
* **connectorDefinitionName**: string (Required): The name of the connector definition that represents the UI config.
* **dcrConfig**: [DCRConfiguration](#dcrconfiguration): The configuration of the destination of the data.
* **request**: [GCPRequestProperties](#gcprequestproperties) (Required): The request section of the connector.

## GCPRequestProperties
### Properties
* **projectId**: string (Required): The GCP project id.
* **subscriptionNames**: string[] (Required): The GCP pub/sub subscription names.

## GeoLocation
### Properties
* **asn**: int (ReadOnly): Autonomous System Number
* **city**: string (ReadOnly): City name
* **countryCode**: string (ReadOnly): The country code according to ISO 3166 format
* **countryName**: string (ReadOnly): Country name according to ISO 3166 Alpha 2: the lowercase of the English Short Name
* **latitude**: int (ReadOnly): The latitude of the identified location, expressed as a floating point number with range of - 90 to 90. Latitude and longitude are derived from the city or postal code.
* **longitude**: int (ReadOnly): The longitude of the identified location, expressed as a floating point number with range of -180 to 180. Latitude and longitude are derived from the city or postal code.
* **state**: string (ReadOnly): State name

## GitHubResourceInfo
### Properties
* **appInstallationId**: string: GitHub application installation id.

## GroupingConfiguration
### Properties
* **enabled**: bool (Required): Grouping enabled
* **groupByAlertDetails**: 'DisplayName' | 'Severity' | string[]: A list of alert details to group by (when matchingMethod is Selected)
* **groupByCustomDetails**: string[]: A list of custom details keys to group by (when matchingMethod is Selected). Only keys defined in the current alert rule may be used.
* **groupByEntities**: 'Account' | 'AzureResource' | 'CloudApplication' | 'DNS' | 'File' | 'FileHash' | 'Host' | 'IP' | 'MailCluster' | 'MailMessage' | 'Mailbox' | 'Malware' | 'Process' | 'RegistryKey' | 'RegistryValue' | 'SecurityGroup' | 'SubmissionMail' | 'URL' | string[]: A list of entity types to group by (when matchingMethod is Selected). Only entities defined in the current alert rule may be used.
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

## HuntCommentProperties
### Properties
* **message**: string (Required): The message for the comment

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

## HuntOwner
### Properties
* **assignedTo**: string: The name of the user the hunt is assigned to.
* **email**: string: The email of the user the hunt is assigned to.
* **objectId**: string: The object id of the user the hunt is assigned to.
* **ownerType**: 'Group' | 'Unknown' | 'User' | string: The type of the owner the hunt is assigned to.
* **userPrincipalName**: string: The user principal name of the user the hunt is assigned to.

## HuntProperties
### Properties
* **attackTactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[]: A list of mitre attack tactics the hunt is associated with
* **attackTechniques**: string[]: A list of a mitre attack techniques the hunt is associated with
* **description**: string (Required): The description of the hunt
* **displayName**: string (Required): The display name of the hunt
* **hypothesisStatus**: 'Invalidated' | 'Unknown' | 'Validated' | string: The hypothesis status of the hunt.
* **labels**: string[]: List of labels relevant to this hunt
* **owner**: [HuntOwner](#huntowner): Describes a user that the hunt is assigned to
* **status**: 'Active' | 'Closed' | 'Failed' | 'InProgress' | 'New' | 'Succeeded' | string: The status of the hunt.

## HuntRelationProperties
### Properties
* **labels**: string[]: List of labels relevant to this hunt
* **relatedResourceId**: string (Required): The id of the related resource
* **relatedResourceKind**: string (ReadOnly): The resource that the relation is related to
* **relatedResourceName**: string (ReadOnly): The name of the related resource
* **relationType**: string (ReadOnly): The type of the hunt relation

## IncidentAdditionalData
### Properties
* **alertProductNames**: string[] (ReadOnly): List of product names of alerts in the incident
* **alertsCount**: int (ReadOnly): The number of alerts in the incident
* **bookmarksCount**: int (ReadOnly): The number of bookmarks in the incident
* **commentsCount**: int (ReadOnly): The number of comments in the incident
* **providerIncidentUrl**: string (ReadOnly): The provider incident url to the incident in Microsoft 365 Defender portal
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[] (ReadOnly): The tactics associated with incident
* **techniques**: string[] (ReadOnly): The techniques associated with incident's tactics

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
* **objectId**: string: The object id of the user the incident is assigned to.
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
* **providerIncidentId**: string (ReadOnly): The incident ID assigned by the incident provider
* **providerName**: string (ReadOnly): The name of the source provider that generated the incident
* **relatedAnalyticRuleIds**: string[] (ReadOnly): List of resource ids of Analytic rules related to the incident
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (Required): The severity of the incident
* **status**: 'Active' | 'Closed' | 'New' | string (Required): The status of the incident
* **teamInformation**: [TeamInformation](#teaminformation): Describes a team for the incident
* **title**: string (Required): The title of the incident

## IncidentPropertiesAction
### Properties
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined' | string: The reason the incident was closed
* **classificationComment**: string: Describes the reason the incident was closed.
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected' | string: The classification reason the incident was closed with
* **labels**: [IncidentLabel](#incidentlabel)[]: List of labels to add to the incident.
* **owner**: [IncidentOwnerInfo](#incidentownerinfo): Information on the user an incident is assigned to
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity of the incident
* **status**: 'Active' | 'Closed' | 'New' | string: The status of the incident

## IncidentTaskProperties
### Properties
* **createdBy**: [ClientInfo](#clientinfo): Information on the client (user or application) that made some action
* **createdTimeUtc**: string (ReadOnly): The time the task was created
* **description**: string: The description of the task
* **lastModifiedBy**: [ClientInfo](#clientinfo): Information on the client (user or application) that made some action
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the task was updated
* **status**: 'Completed' | 'New' | string (Required)
* **title**: string (Required): The title of the task

## InstructionStepsInstructionsItem
### Properties
* **parameters**: any: The parameters for the setting
* **type**: 'CopyableLabel' | 'InfoMessage' | 'InstructionStepsGroup' | string (Required): The kind of the setting

## IoTDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **subscriptionId**: string: The subscription id to connect to, and get the data from.

## IoTDeviceEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **deviceId**: string (ReadOnly): The ID of the IoT Device in the IoT Hub
* **deviceName**: string (ReadOnly): The friendly name of the device
* **deviceSubType**: string (ReadOnly): The subType of the device ('PLC', 'HMI', 'EWS', etc.)
* **deviceType**: string (ReadOnly): The type of the device
* **edgeId**: string (ReadOnly): The ID of the edge device
* **firmwareVersion**: string (ReadOnly): The firmware version of the device
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **hostEntityId**: string (ReadOnly): The Host entity id of this device
* **importance**: 'High' | 'Low' | 'Normal' | 'Unknown' | string: Device importance, determines if the device classified as 'crown jewel'
* **iotHubEntityId**: string (ReadOnly): The AzureResource entity id of the IoT Hub
* **iotSecurityAgentId**: string (ReadOnly): The ID of the security agent running on the device
* **ipAddressEntityId**: string (ReadOnly): The IP entity if of this device
* **isAuthorized**: bool (ReadOnly): Determines whether the device classified as authorized device
* **isProgramming**: bool (ReadOnly): Determines whether the device classified as programming device
* **isScanner**: bool (ReadOnly): Is the device classified as a scanner device
* **macAddress**: string (ReadOnly): The MAC address of the device
* **model**: string (ReadOnly): The model of the device
* **nicEntityIds**: string[] (ReadOnly): A list of Nic entity ids of the IoTDevice entity.
* **operatingSystem**: string (ReadOnly): The operating system of the device
* **owners**: string[] (ReadOnly): A list of owners of the IoTDevice entity.
* **protocols**: string[] (ReadOnly): A list of protocols of the IoTDevice entity.
* **purdueLayer**: string (ReadOnly): The Purdue Layer of the device
* **sensor**: string (ReadOnly): The sensor the device is monitored by
* **serialNumber**: string (ReadOnly): The serial number of the device
* **site**: string (ReadOnly): The site of the device
* **source**: string (ReadOnly): The source of the device
* **threatIntelligence**: [ThreatIntelligence](#threatintelligence)[] (ReadOnly): A list of TI contexts attached to the IoTDevice entity.
* **vendor**: string (ReadOnly): The vendor of the device
* **zone**: string (ReadOnly): The zone location of the device within a site

## IpEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **address**: string (ReadOnly): The IP address as string, e.g. 127.0.0.1 (either in Ipv4 or Ipv6)
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **location**: [GeoLocation](#geolocation) (ReadOnly): The geo-location context attached to the ip entity
* **threatIntelligence**: [ThreatIntelligence](#threatintelligence)[] (ReadOnly): A list of TI contexts attached to the ip entity.

## JobItem
### Properties
* **errors**: [Error](#error)[]: The list of error descriptions if the item publication fails.
* **executionTime**: string (ReadOnly): The time the item publishing was completed
* **resourceId**: string: The resource id of the content item
* **status**: 'Active' | 'Closed' | 'Failed' | 'InProgress' | 'New' | 'Succeeded' | string (ReadOnly): Status of the item publication

## JobProperties
### Properties
* **endTime**: string (ReadOnly): The time the job completed
* **errorMessage**: string (ReadOnly): Message to describe error, if an error exists
* **items**: [JobItem](#jobitem)[]: List of items published by the job
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): State of the job
* **startTime**: string (ReadOnly): The time the job started

## MailboxEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **displayName**: string (ReadOnly): The mailbox's display name
* **externalDirectoryObjectId**: string (ReadOnly): The AzureAD identifier of mailbox. Similar to AadUserId in account entity but this property is specific to mailbox object on office side
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
* **networkMessageId**: string (ReadOnly): The network message id of this mail message
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
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon) (Required): Alerts data type connection.
* **discoveryLogs**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Discovery log data type connection.

## McasDataConnectorProperties
### Properties
* **dataTypes**: [McasDataConnectorDataTypes](#mcasdataconnectordatatypes) (Required): The available data types for the connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MdatpDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
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
* **contentId**: string: Id of the content item we depend on
* **criteria**: [MetadataDependencies](#metadatadependencies)[]: This is the list of dependencies we must fulfill, according to the AND/OR operator
* **kind**: 'AnalyticsRule' | 'AnalyticsRuleTemplate' | 'AutomationRule' | 'AzureFunction' | 'DataConnector' | 'DataType' | 'HuntingQuery' | 'InvestigationQuery' | 'LogicAppsCustomConnector' | 'Parser' | 'Playbook' | 'PlaybookTemplate' | 'Solution' | 'Watchlist' | 'WatchlistTemplate' | 'Workbook' | 'WorkbookTemplate' | string: Type of the content item we depend on
* **name**: string: Name of the content item
* **operator**: 'AND' | 'OR' | string: Operator used for list of dependencies in criteria array.
* **version**: string: Version of the the content item we depend on.  Can be blank, * or missing to indicate any version fulfills the dependency.  If version does not match our defined numeric format then an exact match is required.

## MetadataDependenciesAutoGenerated
### Properties
* **contentId**: string: Id of the content item we depend on
* **criteria**: [MetadataDependenciesAutoGenerated](#metadatadependenciesautogenerated)[]: This is the list of dependencies we must fulfill, according to the AND/OR operator
* **kind**: string: Type of the content item we depend on
* **name**: string: Name of the content item
* **operator**: 'AND' | 'OR' | string: Operator used for list of dependencies in criteria array.
* **version**: string: Version of the the content item we depend on.  Can be blank, * or missing to indicate any version fulfills the dependency.  If version does not match our defined numeric format then an exact match is required.

## MetadataProperties
### Properties
* **author**: [MetadataAuthor](#metadataauthor): The creator of the content item.
* **categories**: [MetadataCategories](#metadatacategories): Categories for the solution content item
* **contentId**: string: Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
* **contentSchemaVersion**: string: Schema version of the content. Can be used to distinguish between different flow based on the schema version
* **customVersion**: string: The custom version of the content. A optional free text
* **dependencies**: [MetadataDependenciesAutoGenerated](#metadatadependenciesautogenerated): Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats.
* **firstPublishDate**: string: first publish date solution content item
* **icon**: string: the icon identifier. this id can later be fetched from the solution template
* **kind**: string (Required): The kind of content the metadata is for.
* **lastPublishDate**: string: last publish date for the solution content item
* **parentId**: string (Required): Full parent resource ID of the content item the metadata is for.  This is the full resource ID including the scope (subscription and resource group)
* **previewImages**: string[]: preview image file names. These will be taken from the solution artifacts
* **previewImagesDark**: string[]: preview image file names. These will be taken from the solution artifacts. used for dark theme support
* **providers**: string[]: Providers for the solution content item
* **source**: [MetadataSource](#metadatasource): Source of the content.  This is where/how it was created.
* **support**: [MetadataSupport](#metadatasupport): Support information for the metadata - type, name, contact information
* **threatAnalysisTactics**: string[]: the tactics the resource covers
* **threatAnalysisTechniques**: string[]: the techniques the resource covers, these have to be aligned with the tactics being used
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

## MicrosoftPurviewInformationProtectionConnectorDataTypes
### Properties
* **logs**: [MicrosoftPurviewInformationProtectionConnectorDataTypesLogs](#microsoftpurviewinformationprotectionconnectordatatypeslogs) (Required): Logs data type.

## MicrosoftPurviewInformationProtectionConnectorDataTypesLogs
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## MicrosoftPurviewInformationProtectionDataConnectorProperties
### Properties
* **dataTypes**: [MicrosoftPurviewInformationProtectionConnectorDataTypes](#microsoftpurviewinformationprotectionconnectordatatypes) (Required): The available data types for the connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

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
* **alertRulesCreatedByTemplateCount**: int: the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **description**: string: The description of the alert rule template.
* **displayName**: string: The display name for alert rule template.
* **displayNamesExcludeFilter**: string[]: the alerts' displayNames on which the cases will not be generated
* **displayNamesFilter**: string[]: the alerts' displayNames on which the cases will be generated
* **lastUpdatedDateUTC**: string (ReadOnly): The last time that this alert rule template has been updated.
* **productFilter**: 'Azure Active Directory Identity Protection' | 'Azure Advanced Threat Protection' | 'Azure Security Center for IoT' | 'Azure Security Center' | 'Microsoft Cloud App Security' | 'Microsoft Defender Advanced Threat Protection' | 'Office 365 Advanced Threat Protection' | string: The alerts' productName on which the cases will be generated
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[]: The required data sources for this template
* **severitiesFilter**: 'High' | 'Informational' | 'Low' | 'Medium' | string[]: the alerts' severities on which the cases will be generated
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string: The alert rule template status.

## MLBehaviorAnalyticsAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required): The Name of the alert rule template used to create this rule.
* **description**: string (ReadOnly): The description of the alert rule.
* **displayName**: string (ReadOnly): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert rule has been modified.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity for alerts created by this alert rule.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[] (ReadOnly): The tactics of the alert rule
* **techniques**: string[] (ReadOnly): The techniques of the alert rule

## MLBehaviorAnalyticsAlertRuleTemplateProperties
### Properties
* **alertRulesCreatedByTemplateCount**: int: the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **description**: string: The description of the alert rule template.
* **displayName**: string: The display name for alert rule template.
* **lastUpdatedDateUTC**: string (ReadOnly): The last time that this alert rule template has been updated.
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[]: The required data sources for this template
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (Required): The severity for alerts created by this alert rule.
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string: The alert rule template status.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[]: The tactics of the alert rule
* **techniques**: string[]: The techniques of the alert rule

## MstiDataConnectorDataTypes
### Properties
* **microsoftEmergingThreatFeed**: [MstiDataConnectorDataTypesMicrosoftEmergingThreatFeed](#mstidataconnectordatatypesmicrosoftemergingthreatfeed) (Required): Data type for Microsoft Threat Intelligence Platforms data connector.

## MstiDataConnectorDataTypesMicrosoftEmergingThreatFeed
### Properties
* **lookbackPeriod**: string (Required): The lookback period for the feed to be imported.
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## MstiDataConnectorProperties
### Properties
* **dataTypes**: [MstiDataConnectorDataTypes](#mstidataconnectordatatypes) (Required): The available data types for the connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MTPDataConnectorDataTypes
### Properties
* **alerts**: [MTPDataConnectorDataTypesAlerts](#mtpdataconnectordatatypesalerts): Alerts data type for Microsoft Threat Protection Platforms data connector.
* **incidents**: [MTPDataConnectorDataTypesIncidents](#mtpdataconnectordatatypesincidents) (Required): Incidents data type for Microsoft Threat Protection Platforms data connector.

## MTPDataConnectorDataTypesAlerts
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## MTPDataConnectorDataTypesIncidents
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## MTPDataConnectorProperties
### Properties
* **dataTypes**: [MTPDataConnectorDataTypes](#mtpdataconnectordatatypes) (Required): The available data types for the connector.
* **filteredProviders**: [MtpFilteredProviders](#mtpfilteredproviders): The available filtered providers for the connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MtpFilteredProviders
### Properties
* **alerts**: 'microsoftDefenderForCloudApps' | 'microsoftDefenderForIdentity' | string[] (Required): Alerts filtered providers. When filters are not applied, all alerts will stream through the MTP pipeline, still in private preview for all products EXCEPT MDA and MDI, which are in GA state.

## NicEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **ipAddressEntityId**: string (ReadOnly): The IP entity id of this network interface
* **macAddress**: string (ReadOnly): The MAC address of this network interface
* **vlans**: string[] (ReadOnly): A list of VLANs of the network interface entity.

## NrtAlertRuleProperties
### Properties
* **alertDetailsOverride**: [AlertDetailsOverride](#alertdetailsoverride): The alert details override settings
* **alertRuleTemplateName**: string: The Name of the alert rule template used to create this rule.
* **customDetails**: [NrtAlertRulePropertiesCustomDetails](#nrtalertrulepropertiescustomdetails): Dictionary of string key-value pairs of columns to be attached to the alert
* **description**: string: The description of the alert rule.
* **displayName**: string (Required): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **entityMappings**: [EntityMapping](#entitymapping)[]: Array of the entity mappings of the alert rule
* **eventGroupingSettings**: [EventGroupingSettings](#eventgroupingsettings): The event grouping settings.
* **incidentConfiguration**: [IncidentConfiguration](#incidentconfiguration): The settings of the incidents that created from alerts triggered by this analytics rule
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert rule has been modified.
* **query**: string (Required): The query that creates alerts for this rule.
* **sentinelEntitiesMappings**: [SentinelEntityMapping](#sentinelentitymapping)[]: Array of the sentinel entity mappings of the alert rule
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (Required): The severity for alerts created by this alert rule.
* **suppressionDuration**: string (Required): The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
* **suppressionEnabled**: bool (Required): Determines whether the suppression for this alert rule is enabled or disabled.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[]: The tactics of the alert rule
* **techniques**: string[]: The techniques of the alert rule
* **templateVersion**: string: The version of the alert rule template used to create this rule - in format <a.b.c>, where all are numbers, for example 0 <1.0.2>

## NrtAlertRulePropertiesCustomDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NrtAlertRuleTemplateProperties
### Properties
* **alertDetailsOverride**: [AlertDetailsOverride](#alertdetailsoverride): The alert details override settings
* **alertRulesCreatedByTemplateCount**: int: the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **customDetails**: [QueryBasedAlertRuleTemplatePropertiesCustomDetails](#querybasedalertruletemplatepropertiescustomdetails): Dictionary of string key-value pairs of columns to be attached to the alert
* **description**: string: The description of the alert rule template.
* **displayName**: string: The display name for alert rule template.
* **entityMappings**: [EntityMapping](#entitymapping)[]: Array of the entity mappings of the alert rule
* **eventGroupingSettings**: [EventGroupingSettings](#eventgroupingsettings): The event grouping settings.
* **lastUpdatedDateUTC**: string (ReadOnly): The last time that this alert rule template has been updated.
* **query**: string: The query that creates alerts for this rule.
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[]: The required data sources for this template
* **sentinelEntitiesMappings**: [SentinelEntityMapping](#sentinelentitymapping)[]: Array of the sentinel entity mappings of the alert rule
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity for alerts created by this alert rule.
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string: The alert rule template status.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[]: The tactics of the alert rule
* **techniques**: string[]: The techniques of the alert rule
* **version**: string: The version of this template - in format <a.b.c>, where all are numbers. For example <1.0.2>.

## Office365ProjectConnectorDataTypes
### Properties
* **logs**: [Office365ProjectConnectorDataTypesLogs](#office365projectconnectordatatypeslogs) (Required): Logs data type.

## Office365ProjectConnectorDataTypesLogs
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## Office365ProjectDataConnectorProperties
### Properties
* **dataTypes**: [Office365ProjectConnectorDataTypes](#office365projectconnectordatatypes) (Required): The available data types for the connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## OfficeATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## OfficeConsentProperties
### Properties
* **consentId**: string: Help to easily cascade among the data layers.
* **tenantId**: string: The tenantId of the Office365 with the consent.

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
* **dataTypes**: [OfficeDataConnectorDataTypes](#officedataconnectordatatypes) (Required): The available data types for the connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## OfficeIRMDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): The available data types for the connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## OfficePowerBIConnectorDataTypes
### Properties
* **logs**: [OfficePowerBIConnectorDataTypesLogs](#officepowerbiconnectordatatypeslogs) (Required): Logs data type.

## OfficePowerBIConnectorDataTypesLogs
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## OfficePowerBIDataConnectorProperties
### Properties
* **dataTypes**: [OfficePowerBIConnectorDataTypes](#officepowerbiconnectordatatypes) (Required): The available data types for the connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## PackageProperties
### Properties
* **author**: [MetadataAuthor](#metadataauthor): The author of the package
* **categories**: [MetadataCategories](#metadatacategories): The categories of the package
* **contentId**: string (Required): The package id
* **contentKind**: 'Solution' | 'Standalone' | string (Required): The package kind
* **contentSchemaVersion**: string: The version of the content schema.
* **dependencies**: [MetadataDependencies](#metadatadependencies): The support tier of the package
* **description**: string: The description of the package
* **displayName**: string (Required): The display name of the package
* **firstPublishDate**: string: first publish date package item
* **icon**: string: the icon identifier. this id can later be fetched from the content metadata
* **isFeatured**: 'false' | 'true' | string: Flag indicates if this package is among the featured list.
* **isNew**: 'false' | 'true' | string: Flag indicates if this is a newly published package.
* **isPreview**: 'false' | 'true' | string: Flag indicates if this package is in preview.
* **lastPublishDate**: string: last publish date for the package item
* **providers**: string[]: Providers for the package item
* **publisherDisplayName**: string: The publisher display name of the package
* **source**: [MetadataSource](#metadatasource): The source of the package
* **support**: [MetadataSupport](#metadatasupport): The support tier of the package
* **threatAnalysisTactics**: string[]: the tactics the resource covers
* **threatAnalysisTechniques**: string[]: the techniques the resource covers, these have to be aligned with the tactics being used
* **version**: string (Required): the latest version number of the package

## PackagePropertiesAutoGenerated
### Properties
* **author**: [MetadataAuthor](#metadataauthor): The author of the package
* **categories**: [MetadataCategories](#metadatacategories): The categories of the package
* **contentId**: string (Required): The content id of the package
* **contentKind**: 'Solution' | 'Standalone' | string (Required): The package kind
* **contentSchemaVersion**: string: The version of the content schema.
* **dependencies**: [MetadataDependencies](#metadatadependencies): The support tier of the package
* **description**: string: The description of the package
* **displayName**: string (Required): The display name of the package
* **firstPublishDate**: string: first publish date package item
* **icon**: string: the icon identifier. this id can later be fetched from the content metadata
* **installedVersion**: string: The version of the installed package, null or absent means not installed.
* **isFeatured**: 'false' | 'true' | string: Flag indicates if this package is among the featured list.
* **isNew**: 'false' | 'true' | string: Flag indicates if this is a newly published package.
* **isPreview**: 'false' | 'true' | string: Flag indicates if this package is in preview.
* **lastPublishDate**: string: last publish date for the package item
* **packagedContent**: any: the json to deploy
* **providers**: string[]: Providers for the package item
* **publisherDisplayName**: string: The publisher display name of the package
* **resourceId**: string: The metadata resource id.
* **source**: [MetadataSource](#metadatasource): The source of the package
* **support**: [MetadataSupport](#metadatasupport): The support tier of the package
* **threatAnalysisTactics**: string[]: the tactics the resource covers
* **threatAnalysisTechniques**: string[]: the techniques the resource covers, these have to be aligned with the tactics being used
* **version**: string (Required): the latest version number of the package

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

## PlaybookActionProperties
### Properties
* **logicAppResourceId**: string (Required): The resource id of the playbook resource.
* **tenantId**: string: The tenant id of the playbook resource.

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

## QueryBasedAlertRuleTemplatePropertiesCustomDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## Repository
### Properties
* **branch**: string: Branch name of repository.
* **deploymentLogsUrl**: string: Url to access repository action logs.
* **displayUrl**: string: Display url of repository.
* **pathMapping**: [ContentPathMap](#contentpathmap)[]: Dictionary of source control content type and path mapping.
* **url**: string: Url of repository.

## RepositoryResourceInfo
### Properties
* **azureDevOpsResourceInfo**: [AzureDevOpsResourceInfo](#azuredevopsresourceinfo): Resources created in Azure DevOps for this source-control.
* **gitHubResourceInfo**: [GitHubResourceInfo](#githubresourceinfo): Resources created in GitHub for this source-control.
* **webhook**: [Webhook](#webhook): The webhook object created for the source-control.

## RequiredPermissions
### Properties
* **action**: bool: action permission
* **delete**: bool: delete permission
* **read**: bool: read permission
* **write**: bool: write permission

## SapSolutionUsageStatisticProperties
### Properties
* **activeSystemIdCount**: int (ReadOnly): The latest count of active SAP system IDs under the Microsoft Sentinel solution for SAP Usage

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
* **sentinelEntitiesMappings**: [SentinelEntityMapping](#sentinelentitymapping)[]: Array of the sentinel entity mappings of the alert rule
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity for alerts created by this alert rule.
* **suppressionDuration**: string (Required): The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
* **suppressionEnabled**: bool (Required): Determines whether the suppression for this alert rule is enabled or disabled.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[]: The tactics of the alert rule
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
* **sentinelEntitiesMappings**: [SentinelEntityMapping](#sentinelentitymapping)[]: Array of the sentinel entity mappings of the alert rule
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string: The severity for alerts created by this alert rule.
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string: The alert rule template status.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[]: The tactics of the alert rule template
* **techniques**: string[]: The techniques of the alert rule
* **triggerOperator**: 'Equal' | 'GreaterThan' | 'LessThan' | 'NotEqual': The operation against the threshold that triggers alert rule.
* **triggerThreshold**: int: The threshold triggers this alert rule.
* **version**: string: The version of this template - in format <a.b.c>, where all are numbers. For example <1.0.2>.

## ScheduledAlertRuleTemplatePropertiesCustomDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[] (ReadOnly): The tactics of the alert
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
* **objectGuid**: string (ReadOnly): A single-value attribute that is the unique identifier for the object, assigned by active directory.
* **sid**: string (ReadOnly): The SID attribute is a single-value attribute that specifies the security identifier (SID) of the group

## SecurityMLAnalyticsSettingsDataSource
### Properties
* **connectorId**: string: The connector id that provides the following data types
* **dataTypes**: string[]: The data types used by the security ml analytics settings

## SentinelEntityMapping
### Properties
* **columnName**: string: the column name to be mapped to the SentinelEntities

## SentinelOnboardingStateProperties
### Properties
* **customerManagedKey**: bool: Flag that indicates the status of the CMK setting

## SourceControlProperties
### Properties
* **contentTypes**: 'AnalyticRule' | 'Workbook' | string[] (Required): Array of source control content types.
* **description**: string: A description of the source control
* **displayName**: string (Required): The display name of the source control
* **id**: string: The id (a Guid) of the source control
* **lastDeploymentInfo**: [DeploymentInfo](#deploymentinfo): Information regarding the latest deployment for the source control.
* **repository**: [Repository](#repository) (Required): Repository metadata.
* **repositoryResourceInfo**: [RepositoryResourceInfo](#repositoryresourceinfo): Information regarding the resources created in user's repository.
* **repoType**: 'DevOps' | 'Github' | string (Required): The repository type of the source control
* **version**: 'V1' | 'V2' | string: The version number associated with the source control

## SubmissionMailEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **networkMessageId**: string (ReadOnly): The network message id of email to which submission belongs
* **recipient**: string (ReadOnly): The recipient of the mail
* **reportType**: string (ReadOnly): The submission type for the given instance. This maps to Junk, Phish, Malware or NotJunk.
* **sender**: string (ReadOnly): The sender of the mail
* **senderIp**: string (ReadOnly): The sender's IP
* **subject**: string (ReadOnly): The subject of submission mail
* **submissionDate**: string (ReadOnly): The submission date
* **submissionId**: string (ReadOnly): The submission id
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

## TeamInformation
### Properties
* **description**: string (ReadOnly): The description of the team
* **name**: string (ReadOnly): The name of the team
* **primaryChannelUrl**: string (ReadOnly): The primary channel URL of the team
* **teamCreationTimeUtc**: string (ReadOnly): The time the team was created
* **teamId**: string (ReadOnly): Team ID

## TemplateProperties
### Properties
* **author**: [MetadataAuthor](#metadataauthor): The creator of the content item.
* **categories**: [MetadataCategories](#metadatacategories): Categories for the item
* **contentId**: string (Required): Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
* **contentKind**: 'AnalyticsRule' | 'AnalyticsRuleTemplate' | 'AutomationRule' | 'AzureFunction' | 'DataConnector' | 'DataType' | 'HuntingQuery' | 'InvestigationQuery' | 'LogicAppsCustomConnector' | 'Parser' | 'Playbook' | 'PlaybookTemplate' | 'Solution' | 'Watchlist' | 'WatchlistTemplate' | 'Workbook' | 'WorkbookTemplate' | string (Required): The kind of content the template is for.
* **contentSchemaVersion**: string: Schema version of the content. Can be used to distinguish between different flow based on the schema version
* **customVersion**: string: The custom version of the content. A optional free text
* **dependencies**: [MetadataDependencies](#metadatadependencies): Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats.
* **displayName**: string (Required): The display name of the template
* **firstPublishDate**: string: first publish date content item
* **icon**: string: the icon identifier. this id can later be fetched from the content metadata
* **lastPublishDate**: string: last publish date for the content item
* **packagedContent**: any: the json to deploy
* **packageId**: string: the package Id contains this template
* **packageKind**: 'Solution' | 'Standalone' | string: the packageKind of the package contains this template
* **packageName**: string: the name of the package contains this template
* **parentId**: string: Full parent resource ID of the content item the template is for.  This is the full resource ID including the scope (subscription and resource group)
* **previewImages**: string[]: preview image file names. These will be taken from the solution artifacts
* **previewImagesDark**: string[]: preview image file names. These will be taken from the solution artifacts. used for dark theme support
* **providers**: string[]: Providers for the content item
* **source**: [MetadataSource](#metadatasource) (Required): Source of the content.  This is where/how it was created.
* **support**: [MetadataSupport](#metadatasupport): Support information for the template - type, name, contact information
* **threatAnalysisTactics**: string[]: the tactics the resource covers
* **threatAnalysisTechniques**: string[]: the techniques the resource covers, these have to be aligned with the tactics being used
* **version**: string (Required): Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM metadata best practices.  Can also be any string, but then we cannot guarantee any version checks

## TemplatePropertiesAutoGenerated
### Properties
* **author**: [MetadataAuthor](#metadataauthor): The creator of the content item.
* **categories**: [MetadataCategories](#metadatacategories): Categories for the item
* **contentId**: string (Required): Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
* **contentKind**: 'AnalyticsRule' | 'AnalyticsRuleTemplate' | 'AutomationRule' | 'AzureFunction' | 'DataConnector' | 'DataType' | 'HuntingQuery' | 'InvestigationQuery' | 'LogicAppsCustomConnector' | 'Parser' | 'Playbook' | 'PlaybookTemplate' | 'Solution' | 'Watchlist' | 'WatchlistTemplate' | 'Workbook' | 'WorkbookTemplate' | string (Required): The kind of content the template is for.
* **contentSchemaVersion**: string: Schema version of the content. Can be used to distinguish between different flow based on the schema version
* **customVersion**: string: The custom version of the content. A optional free text
* **dependencies**: [MetadataDependencies](#metadatadependencies): Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats.
* **displayName**: string (Required): The display name of the template
* **firstPublishDate**: string: first publish date content item
* **icon**: string: the icon identifier. this id can later be fetched from the content metadata
* **lastPublishDate**: string: last publish date for the content item
* **mainTemplate**: any: The JSON of the ARM template to deploy active content
* **packageId**: string (Required): the package Id contains this template
* **packageKind**: 'Solution' | 'Standalone' | string: the packageKind of the package contains this template
* **packageName**: string: the name of the package contains this template
* **previewImages**: string[]: preview image file names. These will be taken from the solution artifacts
* **previewImagesDark**: string[]: preview image file names. These will be taken from the solution artifacts. used for dark theme support
* **providers**: string[]: Providers for the content item
* **source**: [MetadataSource](#metadatasource) (Required): Source of the content.  This is where/how it was created.
* **support**: [MetadataSupport](#metadatasupport): Support information for the template - type, name, contact information
* **threatAnalysisTactics**: string[]: the tactics the resource covers
* **threatAnalysisTechniques**: string[]: the techniques the resource covers, these have to be aligned with the tactics being used
* **version**: string (Required): Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM metadata best practices.  Can also be any string, but then we cannot guarantee any version checks

## ThreatIntelligence
### Properties
* **confidence**: int (ReadOnly): Confidence (must be between 0 and 1)
* **providerName**: string (ReadOnly): Name of the provider from whom this Threat Intelligence information was received
* **reportLink**: string (ReadOnly): Report link
* **threatDescription**: string (ReadOnly): Threat description (free text)
* **threatName**: string (ReadOnly): Threat name (e.g. "Jedobot malware")
* **threatType**: string (ReadOnly): Threat type (e.g. "Botnet")

## ThreatIntelligenceAlertRuleProperties
### Properties
* **alertRuleTemplateName**: string (Required): The Name of the alert rule template used to create this rule.
* **description**: string (ReadOnly): The description of the alert rule.
* **displayName**: string (ReadOnly): The display name for alerts created by this alert rule.
* **enabled**: bool (Required): Determines whether this alert rule is enabled or disabled.
* **lastModifiedUtc**: string (ReadOnly): The last time that this alert has been modified.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The severity for alerts created by this alert rule.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[] (ReadOnly): The tactics of the alert rule
* **techniques**: string[] (ReadOnly): The techniques of the alert rule

## ThreatIntelligenceAlertRuleTemplateProperties
### Properties
* **alertRulesCreatedByTemplateCount**: int: the number of alert rules that were created by this template
* **createdDateUTC**: string (ReadOnly): The time that this alert rule template has been added.
* **description**: string: The description of the alert rule template.
* **displayName**: string: The display name for alert rule template.
* **lastUpdatedDateUTC**: string (ReadOnly): The last time that this alert rule template has been updated.
* **requiredDataConnectors**: [AlertRuleTemplateDataSource](#alertruletemplatedatasource)[]: The required data sources for this template
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (Required): The severity for alerts created by this alert rule.
* **status**: 'Available' | 'Installed' | 'NotAvailable' | string: The alert rule template status.
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'ImpairProcessControl' | 'InhibitResponseFunction' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Reconnaissance' | 'ResourceDevelopment' | string[]: The tactics of the alert rule
* **techniques**: string[]: The techniques of the alert rule

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

## ThreatIntelligenceGranularMarkingModel
### Properties
* **language**: string: Language granular marking model
* **markingRef**: int: marking reference granular marking model
* **selectors**: string[]: granular marking model selectors

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

## TIDataConnectorDataTypes
### Properties
* **indicators**: [TIDataConnectorDataTypesIndicators](#tidataconnectordatatypesindicators) (Required): Data type for indicators connection.

## TIDataConnectorDataTypesIndicators
### Properties
* **state**: 'Disabled' | 'Enabled' | string (Required): Describe whether this data type connection is enabled or not.

## TIDataConnectorProperties
### Properties
* **dataTypes**: [TIDataConnectorDataTypes](#tidataconnectordatatypes) (Required): The available data types for the connector.
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

## TriggeredAnalyticsRuleRunProperties
### Properties
* **executionTimeUtc**: string (Required)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (Required): The triggered analytics rule run provisioning state
* **ruleId**: string (Required)
* **ruleRunAdditionalData**: [TriggeredAnalyticsRuleRunPropertiesRuleRunAdditionalData](#triggeredanalyticsrulerunpropertiesrulerunadditionaldata): Dictionary of <any>
* **triggeredAnalyticsRuleRunId**: string (Required)

## TriggeredAnalyticsRuleRunPropertiesRuleRunAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## UebaProperties
### Properties
* **dataSources**: 'AuditLogs' | 'AzureActivity' | 'SecurityEvent' | 'SigninLogs' | string[]: The relevant data sources that enriched by ueba

## UrlEntityProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **friendlyName**: string (ReadOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **url**: string (ReadOnly): A full URL the entity points to

## UserInfo
### Properties
* **email**: string (ReadOnly): The email of the user.
* **name**: string (ReadOnly): The name of the user.
* **objectId**: string: The object id of the user.

## ValidationError
### Properties
* **errorMessages**: string[] (ReadOnly): A list of descriptions of the error.
* **recordIndex**: int: The number of the record that has the error.

## WatchlistItemProperties
### Properties
* **created**: string: The time the watchlist item was created
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the watchlist item
* **entityMapping**: [WatchlistItemPropertiesEntityMapping](#watchlistitempropertiesentitymapping): key-value pairs for a watchlist item entity mapping
* **isDeleted**: bool: A flag that indicates if the watchlist item is deleted or not
* **itemsKeyValue**: [WatchlistItemPropertiesItemsKeyValue](#watchlistitempropertiesitemskeyvalue) (Required): key-value pairs for a watchlist item
* **tenantId**: string: The tenantId to which the watchlist item belongs to
* **updated**: string: The last time the watchlist item was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the watchlist item
* **watchlistItemId**: string: The id (a Guid) of the watchlist item
* **watchlistItemType**: string: The type of the watchlist item

## WatchlistItemPropertiesEntityMapping
### Properties
### Additional Properties
* **Additional Properties Type**: any

## WatchlistItemPropertiesItemsKeyValue
### Properties
### Additional Properties
* **Additional Properties Type**: any

## WatchlistProperties
### Properties
* **contentType**: string: The content type of the raw content. Example : text/csv or text/tsv
* **created**: string: The time the watchlist was created
* **createdBy**: [UserInfo](#userinfo): Describes a user that created the watchlist
* **defaultDuration**: string: The default duration of a watchlist (in ISO 8601 duration format)
* **description**: string: A description of the watchlist
* **displayName**: string (Required): The display name of the watchlist
* **isDeleted**: bool: A flag that indicates if the watchlist is deleted or not
* **itemsSearchKey**: string (Required): The search key is used to optimize query performance when using watchlists for joins with other data. For example, enable a column with IP addresses to be the designated SearchKey field, then use this field as the key field when joining to other event data by IP address.
* **labels**: string[]: List of labels relevant to this watchlist
* **numberOfLinesToSkip**: int: The number of lines in a csv/tsv content to skip before the header
* **provider**: string (Required): The provider of the watchlist
* **rawContent**: string: The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint
* **source**: string: The filename of the watchlist, called 'source'
* **sourceType**: 'Local file' | 'Remote storage' | string: The sourceType of the watchlist
* **tenantId**: string: The tenantId where the watchlist belongs to
* **updated**: string: The last time the watchlist was updated
* **updatedBy**: [UserInfo](#userinfo): Describes a user that updated the watchlist
* **uploadStatus**: string: The status of the Watchlist upload : New, InProgress or Complete. Pls note : When a Watchlist upload status is equal to InProgress, the Watchlist cannot be deleted
* **watchlistAlias**: string: The alias of the watchlist
* **watchlistId**: string: The id (a Guid) of the watchlist
* **watchlistType**: string: The type of the watchlist

## Webhook
### Properties
* **rotateWebhookSecret**: bool: A flag to instruct the backend service to rotate webhook secret.
* **webhookId**: string: Unique identifier for the webhook.
* **webhookSecretUpdateTime**: string: Time when the webhook secret was updated.
* **webhookUrl**: string: URL that gets invoked by the webhook.

## WorkspaceManagerAssignmentProperties
### Properties
* **items**: [AssignmentItem](#assignmentitem)[] (Required): List of resources included in this workspace manager assignment
* **lastJobEndTime**: string (ReadOnly): The time the last job associated to this assignment ended at
* **lastJobProvisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): State of the last job associated to this assignment
* **targetResourceName**: string (Required): The resource name of the workspace manager group targeted by the workspace manager assignment

## WorkspaceManagerConfigurationProperties
### Properties
* **mode**: 'Disabled' | 'Enabled' | string (Required): The current mode of the workspace manager configuration

## WorkspaceManagerGroupProperties
### Properties
* **description**: string: The description of the workspace manager group
* **displayName**: string (Required): The display name of the workspace manager group
* **memberResourceNames**: string[] (Required): The names of the workspace manager members participating in this group.

## WorkspaceManagerMemberProperties
### Properties
* **targetWorkspaceId**: string (Required): Fully qualified resource ID of the target Sentinel workspace joining the given Sentinel workspace manager
* **targetWorkspaceTenantId**: string (Required): Tenant id of the target Sentinel workspace joining the given Sentinel workspace manager

