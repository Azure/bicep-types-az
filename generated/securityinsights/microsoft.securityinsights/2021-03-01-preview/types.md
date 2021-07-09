# Microsoft.SecurityInsights @ 2021-03-01-preview

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

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## AwsCloudTrailDataConnector
### Properties
* **kind**: 'AmazonWebServicesCloudTrail' (Required): The data connector kind
* **properties**: [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties): Amazon Web Services CloudTrail data connector properties.

## AwsCloudTrailDataConnectorProperties
### Properties
* **awsRoleArn**: string: The Aws Role Arn (with CloudTrailReadOnly policy) that is used to access the Aws account.
* **dataTypes**: [AwsCloudTrailDataConnectorDataTypes](#awscloudtraildataconnectordatatypes) (Required): The available data types for Amazon Web Services CloudTrail data connector.

## AwsCloudTrailDataConnectorDataTypes
### Properties
* **logs**: [AwsCloudTrailDataConnectorDataTypesLogs](#awscloudtraildataconnectordatatypeslogs) (Required): Logs data type.

## AwsCloudTrailDataConnectorDataTypesLogs
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## AADDataConnector
### Properties
* **kind**: 'AzureActiveDirectory' (Required): The data connector kind
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

## AatpDataConnector
### Properties
* **kind**: 'AzureAdvancedThreatProtection' (Required): The data connector kind
* **properties**: [AatpDataConnectorProperties](#aatpdataconnectorproperties): AATP (Azure Advanced Threat Protection) data connector properties.

## AatpDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## ASCDataConnector
### Properties
* **kind**: 'AzureSecurityCenter' (Required): The data connector kind
* **properties**: [ASCDataConnectorProperties](#ascdataconnectorproperties): ASC (Azure Security Center) data connector properties.

## ASCDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **subscriptionId**: string: The subscription id to connect to, and get the data from.

## Dynamics365DataConnector
### Properties
* **kind**: 'Dynamics365' (Required): The data connector kind
* **properties**: [Dynamics365DataConnectorProperties](#dynamics365dataconnectorproperties): Dynamics365 data connector properties.

## Dynamics365DataConnectorProperties
### Properties
* **dataTypes**: [Dynamics365DataConnectorDataTypes](#dynamics365dataconnectordatatypes) (Required): The available data types for Dynamics365 data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## Dynamics365DataConnectorDataTypes
### Properties
* **dynamics365CdsActivities**: [Dynamics365DataConnectorDataTypesDynamics365CdsActivities](#dynamics365dataconnectordatatypesdynamics365cdsactivities) (Required): Common Data Service data type connection.

## Dynamics365DataConnectorDataTypesDynamics365CdsActivities
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## CodelessUiDataConnector
### Properties
* **kind**: 'GenericUI' (Required): The data connector kind
* **properties**: [CodelessParameters](#codelessparameters): Represents Codeless UI data connector

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

## Availability
### Properties
* **isPreview**: bool: Set connector as preview
* **status**: '1': The connector Availability Status

## CodelessUiConnectorConfigPropertiesConnectivityCriteriaItem
### Properties
* **type**: 'IsConnectedQuery': type of connectivity
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

## InstructionStepsInstructionsItem
### Properties
* **parameters**: any: Any object
* **type**: 'CopyableLabel' | 'InfoMessage' | 'InstructionStepsGroup' (Required): The kind of the setting

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
* **provider**: 'Microsoft.Authorization/policyAssignments' | 'Microsoft.OperationalInsights/solutions' | 'Microsoft.OperationalInsights/workspaces' | 'Microsoft.OperationalInsights/workspaces/datasources' | 'Microsoft.OperationalInsights/workspaces/sharedKeys' | 'microsoft.aadiam/diagnosticSettings': Provider name
* **providerDisplayName**: string: Permission provider display name
* **requiredPermissions**: [RequiredPermissions](#requiredpermissions): Required permissions for the connector
* **scope**: 'ResourceGroup' | 'Subscription' | 'Workspace': Permission provider scope

## RequiredPermissions
### Properties
* **action**: bool: action permission
* **delete**: bool: delete permission
* **read**: bool: read permission
* **write**: bool: write permission

## CodelessUiConnectorConfigPropertiesSampleQueriesItem
### Properties
* **description**: string: The sample query description
* **query**: string: the sample query

## McasDataConnector
### Properties
* **kind**: 'MicrosoftCloudAppSecurity' (Required): The data connector kind
* **properties**: [McasDataConnectorProperties](#mcasdataconnectorproperties): MCAS (Microsoft Cloud App Security) data connector properties.

## McasDataConnectorProperties
### Properties
* **dataTypes**: [McasDataConnectorDataTypes](#mcasdataconnectordatatypes) (Required): The available data types for MCAS (Microsoft Cloud App Security) data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## McasDataConnectorDataTypes
### Properties
* **alerts**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon) (Required): Common field for data type in data connectors.
* **discoveryLogs**: [DataConnectorDataTypeCommon](#dataconnectordatatypecommon): Common field for data type in data connectors.

## MdatpDataConnector
### Properties
* **kind**: 'MicrosoftDefenderAdvancedThreatProtection' (Required): The data connector kind
* **properties**: [MdatpDataConnectorProperties](#mdatpdataconnectorproperties): MDATP (Microsoft Defender Advanced Threat Protection) data connector properties.

## MdatpDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MstiDataConnector
### Properties
* **kind**: 'MicrosoftThreatIntelligence' (Required): The data connector kind
* **properties**: [MstiDataConnectorProperties](#mstidataconnectorproperties): Microsoft Threat Intelligence data connector properties.

## MstiDataConnectorProperties
### Properties
* **dataTypes**: [MstiDataConnectorDataTypes](#mstidataconnectordatatypes) (Required): The available data types for Microsoft Threat Intelligence Platforms data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MstiDataConnectorDataTypes
### Properties
* **bingSafetyPhishingURL**: [MstiDataConnectorDataTypesBingSafetyPhishingURL](#mstidataconnectordatatypesbingsafetyphishingurl) (Required): Data type for Microsoft Threat Intelligence Platforms data connector.
* **microsoftEmergingThreatFeed**: [MstiDataConnectorDataTypesMicrosoftEmergingThreatFeed](#mstidataconnectordatatypesmicrosoftemergingthreatfeed) (Required): Data type for Microsoft Threat Intelligence Platforms data connector.

## MstiDataConnectorDataTypesBingSafetyPhishingURL
### Properties
* **lookbackPeriod**: string (Required): lookback period
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## MstiDataConnectorDataTypesMicrosoftEmergingThreatFeed
### Properties
* **lookbackPeriod**: string (Required): lookback period
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## MTPDataConnector
### Properties
* **kind**: 'MicrosoftThreatProtection' (Required): The data connector kind
* **properties**: [MTPDataConnectorProperties](#mtpdataconnectorproperties): MTP (Microsoft Threat Protection) data connector properties.

## MTPDataConnectorProperties
### Properties
* **dataTypes**: [MTPDataConnectorDataTypes](#mtpdataconnectordatatypes) (Required): The available data types for Microsoft Threat Protection Platforms data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## MTPDataConnectorDataTypes
### Properties
* **incidents**: [MTPDataConnectorDataTypesIncidents](#mtpdataconnectordatatypesincidents) (Required): Data type for Microsoft Threat Protection Platforms data connector.

## MTPDataConnectorDataTypesIncidents
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## OfficeDataConnector
### Properties
* **kind**: 'Office365' (Required): The data connector kind
* **properties**: [OfficeDataConnectorProperties](#officedataconnectorproperties): Office data connector properties.

## OfficeDataConnectorProperties
### Properties
* **dataTypes**: [OfficeDataConnectorDataTypes](#officedataconnectordatatypes) (Required): The available data types for office data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## OfficeDataConnectorDataTypes
### Properties
* **exchange**: [OfficeDataConnectorDataTypesExchange](#officedataconnectordatatypesexchange) (Required): Exchange data type connection.
* **sharePoint**: [OfficeDataConnectorDataTypesSharePoint](#officedataconnectordatatypessharepoint) (Required): SharePoint data type connection.
* **teams**: [OfficeDataConnectorDataTypesTeams](#officedataconnectordatatypesteams) (Required): Teams data type connection.

## OfficeDataConnectorDataTypesExchange
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## OfficeDataConnectorDataTypesSharePoint
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## OfficeDataConnectorDataTypesTeams
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## OfficeATPDataConnector
### Properties
* **kind**: 'OfficeATP' (Required): The data connector kind
* **properties**: [OfficeATPDataConnectorProperties](#officeatpdataconnectorproperties): OfficeATP (Office 365 Advanced Threat Protection) data connector properties.

## OfficeATPDataConnectorProperties
### Properties
* **dataTypes**: [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector): Alerts data type for data connectors.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.

## TIDataConnector
### Properties
* **kind**: 'ThreatIntelligence' (Required): The data connector kind
* **properties**: [TIDataConnectorProperties](#tidataconnectorproperties): TI (Threat Intelligence) data connector properties.

## TIDataConnectorProperties
### Properties
* **dataTypes**: [TIDataConnectorDataTypes](#tidataconnectordatatypes) (Required): The available data types for TI (Threat Intelligence) data connector.
* **tenantId**: string (Required): The tenant id to connect to, and get the data from.
* **tipLookbackPeriod**: string: The lookback period for the feed to be imported.

## TIDataConnectorDataTypes
### Properties
* **indicators**: [TIDataConnectorDataTypesIndicators](#tidataconnectordatatypesindicators) (Required): Data type for indicators connection.

## TIDataConnectorDataTypesIndicators
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## TiTaxiiDataConnector
### Properties
* **kind**: 'ThreatIntelligenceTaxii' (Required): The data connector kind
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
* **taxiiClient**: [TiTaxiiDataConnectorDataTypesTaxiiClient](#titaxiidataconnectordatatypestaxiiclient) (Required): Data type for TAXII connector.

## TiTaxiiDataConnectorDataTypesTaxiiClient
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): Describe whether this data type connection is enabled or not.

## MetadataProperties
### Properties
* **author**: [MetadataAuthor](#metadataauthor): Publisher or creator of the content item.
* **contentId**: string (Required): Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
* **dependencies**: [MetadataDependencies](#metadatadependencies): Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex dependencies.
* **kind**: 'analyticRule' | 'analyticRuleTemplate' | 'dataConnector' | 'dataType' | 'huntingQuery' | 'investigationQuery' | 'parser' | 'playbook' | 'playbookTemplate' | 'solution' | 'watchlist' | 'watchlistTemplate' | 'workbook' | 'workbookTemplate' (Required): The kind of content the metadata is for.
* **parentId**: string (Required): Full parent resource ID of the content item the metadata is for.  This is the full resource ID including the scope (subscription and resource group)
* **source**: [MetadataSource](#metadatasource): The original source of the content item, where it comes from.
* **support**: [MetadataSupport](#metadatasupport): Support information for the content item.
* **version**: string: Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks

## MetadataAuthor
### Properties
* **email**: string: Email of author contact
* **link**: string: Link for author/vendor page
* **name**: string: Name of the author. Company or person.

## MetadataDependencies
### Properties
* **contentId**: string: Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
* **criteria**: [MetadataDependencies](#metadatadependencies)[]: This is the list of dependencies we must fulfill, according to the AND/OR operator
* **kind**: 'analyticRule' | 'analyticRuleTemplate' | 'dataConnector' | 'dataType' | 'huntingQuery' | 'investigationQuery' | 'parser' | 'playbook' | 'playbookTemplate' | 'solution' | 'watchlist' | 'watchlistTemplate' | 'workbook' | 'workbookTemplate': The kind of content the metadata is for.
* **name**: string: Name of the content item
* **operator**: 'AND' | 'OR': Operator used for list of dependencies in criteria array.
* **version**: string: Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks

## MetadataSource
### Properties
* **kind**: 'community' | 'localWorkspace' | 'solution' | 'sourceRepository' (Required): Source type of the content
* **name**: string: Name of the content source.  The repo name, solution name, LA workspace name etc.
* **sourceId**: string: ID of the content source.  The solution ID, workspace ID, etc

## MetadataSupport
### Properties
* **email**: string: Email of support contact
* **link**: string: Link for support help, like to support page to open a ticket etc.
* **name**: string: Name of the support contact. Company or person.
* **tier**: 'community' | 'developer' | 'microsoft' (Required): Type of support for content item

## SentinelOnboardingStateProperties
### Properties
* **customerManagedKey**: bool: Flag that indicates the status of the CMK setting

## EntityAnalytics
### Properties
* **kind**: 'EntityAnalytics' (Required): The kind of the setting
* **properties**: [EntityAnalyticsProperties](#entityanalyticsproperties): EntityAnalytics property bag.

## EntityAnalyticsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## EyesOn
### Properties
* **kind**: 'EyesOn' (Required): The kind of the setting
* **properties**: [EyesOnSettingsProperties](#eyesonsettingsproperties): EyesOn property bag.

## EyesOnSettingsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## Ueba
### Properties
* **kind**: 'Ueba' (Required): The kind of the setting
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
* **source**: 'Local file' | 'Remote storage' (Required): The source of the watchlist
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
* **entityMapping**: any: Any object
* **isDeleted**: bool: A flag that indicates if the watchlist item is deleted or not
* **itemsKeyValue**: any (Required): Any object
* **tenantId**: string: The tenantId to which the watchlist item belongs to
* **updated**: string: The last time the watchlist item was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action
* **watchlistItemId**: string: The id (a Guid) of the watchlist item
* **watchlistItemType**: string: The type of the watchlist item

