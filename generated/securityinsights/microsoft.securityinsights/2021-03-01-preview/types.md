# Microsoft.SecurityInsights @ 2021-03-01-preview

## Resource Microsoft.SecurityInsights/dataConnectors@2021-03-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
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

### Dynamics365
#### Properties
* **kind**: 'Dynamics365' (Required): Represents Dynamics365 data connector.
* **properties**: [Dynamics365DataConnectorProperties](#dynamics365dataconnectorproperties): Dynamics365 data connector properties.

### GenericUI
#### Properties
* **kind**: 'GenericUI' (Required): Represents Codeless UI data connector.
* **properties**: [CodelessParameters](#codelessparameters): Represents Codeless UI data connector

### MicrosoftCloudAppSecurity
#### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required): Represents MCAS (Microsoft Cloud App Security) data connector.
* **properties**: [MCASDataConnectorProperties](#mcasdataconnectorproperties): MCAS (Microsoft Cloud App Security) data connector properties.

### MicrosoftDefenderAdvancedThreatProtection
#### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required): Represents MDATP (Microsoft Defender Advanced Threat Protection) data connector.
* **properties**: [MDATPDataConnectorProperties](#mdatpdataconnectorproperties): MDATP (Microsoft Defender Advanced Threat Protection) data connector properties.

### MicrosoftThreatIntelligence
#### Properties
* **kind**: 'MicrosoftThreatIntelligence' (Required): Represents Microsoft Threat Intelligence data connector.
* **properties**: [MSTIDataConnectorProperties](#mstidataconnectorproperties): Microsoft Threat Intelligence data connector properties.

### MicrosoftThreatProtection
#### Properties
* **kind**: 'MicrosoftThreatProtection' (Required): Represents MTP (Microsoft Threat Protection) data connector.
* **properties**: [MTPDataConnectorProperties](#mtpdataconnectorproperties): MTP (Microsoft Threat Protection) data connector properties.

### Office365
#### Properties
* **kind**: 'Office365' (Required): Represents office data connector.
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties): Office data connector properties.

### OfficeATP
#### Properties
* **kind**: 'OfficeATP' (Required): Represents OfficeATP (Office 365 Advanced Threat Protection) data connector.
* **properties**: [OfficeATPDataConnectorProperties](#officeatpdataconnectorproperties): OfficeATP (Office 365 Advanced Threat Protection) data connector properties.

### ThreatIntelligence
#### Properties
* **kind**: 'ThreatIntelligence' (Required): Represents threat intelligence data connector.
* **properties**: [TIDataConnectorProperties](#tidataconnectorproperties): TI (Threat Intelligence) data connector properties.

### ThreatIntelligenceTaxii
#### Properties
* **kind**: 'ThreatIntelligenceTaxii' (Required): Data connector to pull Threat intelligence data from TAXII 2.0/2.1 server
* **properties**: [TiTaxiiDataConnectorProperties](#titaxiidataconnectorproperties): Threat Intelligence TAXII data connector properties.


## Resource Microsoft.SecurityInsights/metadata@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [metadataProperties](#metadataproperties): Metadata property bag.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/metadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/onboardingStates@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SentinelOnboardingStateProperties](#sentinelonboardingstateproperties): The Sentinel onboarding state properties
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/onboardingStates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/settings@2021-03-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/settings' (ReadOnly, DeployTimeConstant): The resource type
### EntityAnalytics
#### Properties
* **kind**: 'EntityAnalytics' (Required): Settings with single toggle.
* **properties**: [EntityAnalyticsProperties](#entityanalyticsproperties): EntityAnalytics property bag.

### EyesOn
#### Properties
* **kind**: 'EyesOn' (Required): Settings with single toggle.
* **properties**: [EyesOnSettingsProperties](#eyesonsettingsproperties): EyesOn property bag.

### Ueba
#### Properties
* **kind**: 'Ueba' (Required): Settings with single toggle.
* **properties**: [UebaProperties](#uebaproperties): Ueba property bag.


## Resource Microsoft.SecurityInsights/watchlists@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistProperties](#watchlistproperties): Describes watchlist properties
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists/watchlistItems@2021-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistItemProperties](#watchlistitemproperties): Describes watchlist item properties
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/watchlists/watchlistItems' (ReadOnly, DeployTimeConstant): The resource type

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## AmazonWebServicesCloudTrail
### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required): Represents Amazon Web Services CloudTrail data connector.
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties): Amazon Web Services CloudTrail data connector properties.

## AwsCloudTrailDataConnectorProperties
### Properties
* **awsRoleArn**: string: The Aws Role Arn (with CloudTrailReadOnly policy) that is used to access the Aws account.
* **dataTypes**: [AwsCloudTrailDataConnectorDataTypes](#awscloudtraildataconnectordatatypes) (Required): The available data types for Amazon Web Services CloudTrail data connector.

## AwsCloudTrailDataConnectorDataTypes
### Properties
* **logs**: [schemas:31_logs](#schemas31logs) (Required): Logs data type.

## schemas:31_logs
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## AzureActiveDirectory
### Properties
* **kind**: 'AzureActiveDirectory' (Required): Represents AAD (Azure Active Directory) data connector.
* **properties**: [AADDataConnectorProperties](#aaddataconnectorproperties): AAD (Azure Active Directory) data connector properties.

## AADDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## AlertsDataTypeOfDataConnector
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon) (Required): Common field for data type in data connectors.

## DataConnectorDataTypeCommon
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## AzureAdvancedThreatProtection
### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required): Represents AATP (Azure Advanced Threat Protection) data connector.
* **properties**: [AATPDataConnectorProperties](#aatpdataconnectorproperties): AATP (Azure Advanced Threat Protection) data connector properties.

## AATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## AzureSecurityCenter
### Properties
* **kind**: 'AzureSecurityCenter' (Required): Represents ASC (Azure Security Center) data connector.
* **properties**: [ASCDataConnectorProperties](#ascdataconnectorproperties): ASC (Azure Security Center) data connector properties.

## ASCDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **subscriptionId**: string: The subscription id to connect to, and get the data from.

## Dynamics365
### Properties
* **kind**: 'Dynamics365' (Required): Represents Dynamics365 data connector.
* **properties**: [Dynamics365DataConnectorProperties](#dynamics365dataconnectorproperties): Dynamics365 data connector properties.

## Dynamics365DataConnectorProperties
### Properties
* **dataTypes**: [Dynamics365DataConnectorDataTypes](#dynamics365dataconnectordatatypes) (Required): The available data types for Dynamics365 data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## Dynamics365DataConnectorDataTypes
### Properties
* **dynamics365CdsActivities**: [schemas:43_dynamics365CdsActivities](#schemas43dynamics365cdsactivities) (Required): Common Data Service data type connection.

## schemas:43_dynamics365CdsActivities
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## GenericUI
### Properties
* **kind**: 'GenericUI' (Required): Represents Codeless UI data connector.
* **properties**: [CodelessParameters](#codelessparameters): Represents Codeless UI data connector

## CodelessParameters
### Properties
* **connectorUiConfig**: [CodelessUiConnectorConfigProperties](#codelessuiconnectorconfigproperties): Config to describe the instructions blade

## CodelessUiConnectorConfigProperties
### Properties
* **availability**: [Availability](#availability) (Required): Connector Availability Status
* **connectivityCriteria**: [schemas:60_graphQueriesItem](#schemas60graphqueriesitem)[] (Required): Define the way the connector check connectivity
* **customImage**: string: An optional custom image to be used when displaying the connector within Azure Sentinel's connector's gallery
* **dataTypes**: [schemas:60_graphQueriesItem](#schemas60graphqueriesitem)[] (Required): Data types to check for last data received
* **descriptionMarkdown**: string (Required): Connector description
* **graphQueries**: [schemas:60_graphQueriesItem](#schemas60graphqueriesitem)[] (Required): The graph query to show the current data status
* **graphQueriesTableName**: string (Required): Name of the table the connector will insert the data to
* **instructionSteps**: [schemas:60_graphQueriesItem](#schemas60graphqueriesitem)[] (Required): Instruction steps to enable the connector
* **permissions**: [Permissions](#permissions) (Required): Permissions required for the connector
* **publisher**: string (Required): Connector publisher name
* **sampleQueries**: [schemas:60_graphQueriesItem](#schemas60graphqueriesitem)[] (Required): The sample queries for the connector
* **title**: string (Required): Connector blade title

## Availability
### Properties
* **isPreview**: bool: Set connector as preview
* **status**: int: The connector Availability Status

## schemas:60_graphQueriesItem
### Properties
* **baseQuery**: string: The base query for the graph
* **legend**: string: The legend for the graph
* **metricName**: string: the metric that the query is checking

## Permissions
### Properties
* **customs**: [schemas:60_graphQueriesItem](#schemas60graphqueriesitem)[]: Customs permissions required for the connector
* **resourceProvider**: [schemas:60_graphQueriesItem](#schemas60graphqueriesitem)[]: Resource provider permissions required for the connector

## MicrosoftCloudAppSecurity
### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required): Represents MCAS (Microsoft Cloud App Security) data connector.
* **properties**: [MCASDataConnectorProperties](#mcasdataconnectorproperties): MCAS (Microsoft Cloud App Security) data connector properties.

## MCASDataConnectorProperties
### Properties
* **dataTypes**: [MCASDataConnectorDataTypes](#mcasdataconnectordatatypes) (Required): The available data types for MCAS (Microsoft Cloud App Security) data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MCASDataConnectorDataTypes
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon) (Required): Common field for data type in data connectors.
* **discoveryLogs**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Common field for data type in data connectors.

## MicrosoftDefenderAdvancedThreatProtection
### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required): Represents MDATP (Microsoft Defender Advanced Threat Protection) data connector.
* **properties**: [MDATPDataConnectorProperties](#mdatpdataconnectorproperties): MDATP (Microsoft Defender Advanced Threat Protection) data connector properties.

## MDATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MicrosoftThreatIntelligence
### Properties
* **kind**: 'MicrosoftThreatIntelligence' (Required): Represents Microsoft Threat Intelligence data connector.
* **properties**: [MSTIDataConnectorProperties](#mstidataconnectorproperties): Microsoft Threat Intelligence data connector properties.

## MSTIDataConnectorProperties
### Properties
* **dataTypes**: [MSTIDataConnectorDataTypes](#mstidataconnectordatatypes) (Required): The available data types for Microsoft Threat Intelligence Platforms data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MSTIDataConnectorDataTypes
### Properties
* **bingSafetyPhishingURL**: [schemas:21_bingSafetyPhishingURL](#schemas21bingsafetyphishingurl) (Required): Data type for Microsoft Threat Intelligence Platforms data connector.
* **microsoftEmergingThreatFeed**: [schemas:21_bingSafetyPhishingURL](#schemas21bingsafetyphishingurl) (Required): Data type for Microsoft Threat Intelligence Platforms data connector.

## schemas:21_bingSafetyPhishingURL
### Properties
* **lookbackPeriod**: string (Required): lookback period
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## MicrosoftThreatProtection
### Properties
* **kind**: 'MicrosoftThreatProtection' (Required): Represents MTP (Microsoft Threat Protection) data connector.
* **properties**: [MTPDataConnectorProperties](#mtpdataconnectorproperties): MTP (Microsoft Threat Protection) data connector properties.

## MTPDataConnectorProperties
### Properties
* **dataTypes**: [MTPDataConnectorDataTypes](#mtpdataconnectordatatypes) (Required): The available data types for Microsoft Threat Protection Platforms data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MTPDataConnectorDataTypes
### Properties
* **incidents**: [schemas:24_incidents](#schemas24incidents) (Required): Data type for Microsoft Threat Protection Platforms data connector.

## schemas:24_incidents
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## Office365
### Properties
* **kind**: 'Office365' (Required): Represents office data connector.
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties): Office data connector properties.

## OfficeDataConnectorProperties
### Properties
* **dataTypes**: [OfficeDataConnectorDataTypes](#officedataconnectordatatypes) (Required): The available data types for office data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## OfficeDataConnectorDataTypes
### Properties
* **exchange**: [schemas:50_exchange](#schemas50exchange) (Required): Exchange data type connection.
* **sharePoint**: [schemas:50_sharePoint](#schemas50sharepoint) (Required): SharePoint data type connection.
* **teams**: [schemas:50_teams](#schemas50teams) (Required): Teams data type connection.

## schemas:50_exchange
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## schemas:50_sharePoint
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## schemas:50_teams
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## OfficeATP
### Properties
* **kind**: 'OfficeATP' (Required): Represents OfficeATP (Office 365 Advanced Threat Protection) data connector.
* **properties**: [OfficeATPDataConnectorProperties](#officeatpdataconnectorproperties): OfficeATP (Office 365 Advanced Threat Protection) data connector properties.

## OfficeATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## ThreatIntelligence
### Properties
* **kind**: 'ThreatIntelligence' (Required): Represents threat intelligence data connector.
* **properties**: [TIDataConnectorProperties](#tidataconnectorproperties): TI (Threat Intelligence) data connector properties.

## TIDataConnectorProperties
### Properties
* **dataTypes**: [TIDataConnectorDataTypes](#tidataconnectordatatypes) (Required): The available data types for TI (Threat Intelligence) data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.
* **tipLookbackPeriod**: string: The lookback period for the feed to be imported.

## TIDataConnectorDataTypes
### Properties
* **indicators**: [schemas:53_indicators](#schemas53indicators) (Required): Data type for indicators connection.

## schemas:53_indicators
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## ThreatIntelligenceTaxii
### Properties
* **kind**: 'ThreatIntelligenceTaxii' (Required): Data connector to pull Threat intelligence data from TAXII 2.0/2.1 server
* **properties**: [TiTaxiiDataConnectorProperties](#titaxiidataconnectorproperties): Threat Intelligence TAXII data connector properties.

## TiTaxiiDataConnectorProperties
### Properties
* **collectionId**: string: The collection id of the TAXII server.
* **dataTypes**: [TiTaxiiDataConnectorDataTypes](#titaxiidataconnectordatatypes) (Required): The available data types for Threat Intelligence TAXII data connector.
* **friendlyName**: string: The friendly name for the TAXII server.
* **password**: string: The password for the TAXII server.
* **pollingFrequency**: 'OnceADay' | 'OnceAMinute' | 'OnceAnHour' (Required): The polling frequency for the TAXII server.
* **taxiiLookbackPeriod**: string: The lookback period for the TAXII server.
* **taxiiServer**: string: The API root for the TAXII server.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.
* **userName**: string: The userName for the TAXII server.
* **workspaceId**: string: The workspace id.

## TiTaxiiDataConnectorDataTypes
### Properties
* **taxiiClient**: [schemas:56_taxiiClient](#schemas56taxiiclient) (Required): Data type for TAXII connector.

## schemas:56_taxiiClient
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## metadataProperties
### Properties
* **author**: [metadataAuthor](#metadataauthor): Publisher or creator of the content item.
* **contentId**: string (Required): Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
* **dependencies**: [metadataDependencies](#metadatadependencies): Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex dependencies.
* **kind**: 'analyticRule' | 'analyticRuleTemplate' | 'dataConnector' | 'dataType' | 'huntingQuery' | 'investigationQuery' | 'parser' | 'playbook' | 'playbookTemplate' | 'solution' | 'watchlist' | 'watchlistTemplate' | 'workbook' | 'workbookTemplate' (Required): The kind of content the metadata is for.
* **parentId**: string (Required): Full parent resource ID of the content item the metadata is for.  This is the full resource ID including the scope (subscription and resource group)
* **source**: [metadataSource](#metadatasource): The original source of the content item, where it comes from.
* **support**: [metadataSupport](#metadatasupport): Support information for the content item.
* **version**: string: Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks

## metadataAuthor
### Properties
* **email**: string: Email of author contact
* **link**: string: Link for author/vendor page
* **name**: string: Name of the author. Company or person.

## metadataDependencies
### Properties
* **contentId**: string: Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
* **criteria**: [metadataDependencies](#metadatadependencies)[]: This is the list of dependencies we must fulfill, according to the AND/OR operator
* **kind**: 'analyticRule' | 'analyticRuleTemplate' | 'dataConnector' | 'dataType' | 'huntingQuery' | 'investigationQuery' | 'parser' | 'playbook' | 'playbookTemplate' | 'solution' | 'watchlist' | 'watchlistTemplate' | 'workbook' | 'workbookTemplate': Type of the content item we depend on.
* **name**: string: Name of the content item
* **operator**: 'AND' | 'OR': Operator used for list of dependencies in criteria array.
* **version**: string: Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks

## metadataSource
### Properties
* **kind**: 'community' | 'localWorkspace' | 'solution' | 'sourceRepository' (Required): Source type of the content.
* **name**: string: Name of the content source.  The repo name, solution name, LA workspace name etc.
* **sourceId**: string: ID of the content source.  The solution ID, workspace ID, etc

## metadataSupport
### Properties
* **email**: string: Email of support contact
* **link**: string: Link for support help, like to support page to open a ticket etc.
* **name**: string: Name of the support contact. Company or person.
* **tier**: 'community' | 'developer' | 'microsoft' (Required): Type of support for content item.

## SentinelOnboardingStateProperties
### Properties
* **customerManagedKey**: bool: Flag that indicates the status of the CMK setting

## EntityAnalytics
### Properties
* **kind**: 'EntityAnalytics' (Required): Settings with single toggle.
* **properties**: [EntityAnalyticsProperties](#entityanalyticsproperties): EntityAnalytics property bag.

## EntityAnalyticsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## EyesOn
### Properties
* **kind**: 'EyesOn' (Required): Settings with single toggle.
* **properties**: [EyesOnSettingsProperties](#eyesonsettingsproperties): EyesOn property bag.

## EyesOnSettingsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## Ueba
### Properties
* **kind**: 'Ueba' (Required): Settings with single toggle.
* **properties**: [UebaProperties](#uebaproperties): Ueba property bag.

## UebaProperties
### Properties
* **dataSources**: 'AuditLogs' | 'AzureActivity' | 'SecurityEvent' | 'SigninLogs'[]: The relevant data sources that enriched by ueba

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
* **source**: 'Local file' | 'Remote storage' (Required): The source of the watchlist.
* **tenantId**: string: The tenantId where the watchlist belongs to
* **updated**: string: The last time the watchlist was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action
* **uploadStatus**: string: The status of the Watchlist upload : New, InProgress or Complete. Pls note : When a Watchlist upload status is equal to InProgress, the Watchlist cannot be deleted
* **watchlistAlias**: string: The alias of the watchlist
* **watchlistId**: string: The id (a Guid) of the watchlist
* **watchlistItemsCount**: int: The number of Watchlist Items in the Watchlist
* **watchlistType**: string: The type of the watchlist

## UserInfo
### Properties
* **email**: string (ReadOnly): The email of the user.
* **name**: string (ReadOnly): The name of the user.
* **objectId**: string: The object id of the user.

## WatchlistItemProperties
### Properties
* **created**: string: The time the watchlist item was created
* **createdBy**: [UserInfo](#userinfo): User information that made some action
* **entityMapping**: any: key-value pairs for a watchlist item entity mapping
* **isDeleted**: bool: A flag that indicates if the watchlist item is deleted or not
* **itemsKeyValue**: any (Required): key-value pairs for a watchlist item
* **tenantId**: string: The tenantId to which the watchlist item belongs to
* **updated**: string: The last time the watchlist item was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action
* **watchlistItemId**: string: The id (a Guid) of the watchlist item
* **watchlistItemType**: string: The type of the watchlist item

