# microsoft.insights @ 2015-05-01

## Resource Microsoft.Insights/components@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationInsightsComponentProperties](#applicationinsightscomponentproperties)
* **tags**: [ComponentsResourceTags](#componentsresourcetags)
* **type**: 'Microsoft.Insights/components' (ReadOnly, DeployTimeConstant)

## Resource microsoft.insights/components/analyticsItems@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **Content**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **Id**: string
* **name**: 'item' (Required, DeployTimeConstant)
* **Name**: string
* **Properties**: [ApplicationInsightsComponentAnalyticsItemProperties](#applicationinsightscomponentanalyticsitemproperties)
* **Scope**: 'shared' | 'user'
* **TimeCreated**: string (ReadOnly)
* **TimeModified**: string (ReadOnly)
* **type**: 'microsoft.insights/components/analyticsItems' (ReadOnly, DeployTimeConstant)
* **Type**: 'folder' | 'function' | 'query' | 'recent'
* **Version**: string (ReadOnly)

## Resource Microsoft.Insights/components/exportconfiguration@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **ApplicationName**: string (ReadOnly)
* **ContainerName**: string (ReadOnly)
* **DestinationAccountId**: string
* **DestinationAddress**: string (WriteOnly)
* **DestinationStorageLocationId**: string
* **DestinationStorageSubscriptionId**: string
* **DestinationType**: string
* **ExportId**: string (ReadOnly)
* **ExportStatus**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **InstrumentationKey**: string (ReadOnly)
* **IsEnabled**: string (WriteOnly)
* **IsUserEnabled**: string (ReadOnly)
* **LastGapTime**: string (ReadOnly)
* **LastSuccessTime**: string (ReadOnly)
* **LastUserUpdate**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **NotificationQueueEnabled**: string
* **NotificationQueueUri**: string (WriteOnly)
* **PermanentErrorReason**: string (ReadOnly)
* **RecordTypes**: string
* **ResourceGroup**: string (ReadOnly)
* **StorageName**: string (ReadOnly)
* **SubscriptionId**: string (ReadOnly)
* **type**: 'Microsoft.Insights/components/exportconfiguration' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/components/favorites@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **Category**: string
* **Config**: string
* **FavoriteId**: string (ReadOnly)
* **FavoriteType**: 'shared' | 'user'
* **id**: string (ReadOnly, DeployTimeConstant)
* **IsGeneratedFromTemplate**: bool
* **name**: string (Required, DeployTimeConstant)
* **Name**: string
* **SourceType**: string
* **Tags**: string[]
* **TimeModified**: string (ReadOnly)
* **type**: 'Microsoft.Insights/components/favorites' (ReadOnly, DeployTimeConstant)
* **UserId**: string (ReadOnly)
* **Version**: string

## Resource microsoft.insights/components/myanalyticsItems@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **Content**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **Id**: string
* **name**: 'item' (Required, DeployTimeConstant)
* **Name**: string
* **Properties**: [ApplicationInsightsComponentAnalyticsItemProperties](#applicationinsightscomponentanalyticsitemproperties)
* **Scope**: 'shared' | 'user'
* **TimeCreated**: string (ReadOnly)
* **TimeModified**: string (ReadOnly)
* **type**: 'microsoft.insights/components/myanalyticsItems' (ReadOnly, DeployTimeConstant)
* **Type**: 'folder' | 'function' | 'query' | 'recent'
* **Version**: string (ReadOnly)

## Resource Microsoft.Insights/myWorkbooks@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'shared' | 'user'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MyWorkbookProperties](#myworkbookproperties)
* **tags**: [MyWorkbookResourceTags](#myworkbookresourcetags)
* **type**: 'Microsoft.Insights/myWorkbooks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/webtests@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'multistep' | 'ping'
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebTestProperties](#webtestproperties)
* **tags**: [WebtestsResourceTags](#webtestsresourcetags)
* **type**: 'Microsoft.Insights/webtests' (ReadOnly, DeployTimeConstant)

## Resource microsoft.insights/workbooks@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'shared' | 'user'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkbookProperties](#workbookproperties)
* **tags**: [WorkbookResourceTags](#workbookresourcetags)
* **type**: 'microsoft.insights/workbooks' (ReadOnly, DeployTimeConstant)

## ApplicationInsightsComponentProperties
### Properties
* **AppId**: string (ReadOnly)
* **Application_Type**: 'other' | 'web' (Required)
* **ApplicationId**: string (ReadOnly)
* **ConnectionString**: string (ReadOnly)
* **CreationDate**: string (ReadOnly)
* **DisableIpMasking**: bool
* **Flow_Type**: 'Bluefield'
* **HockeyAppId**: string
* **HockeyAppToken**: string (ReadOnly)
* **ImmediatePurgeDataOn30Days**: bool
* **IngestionMode**: 'ApplicationInsights' | 'ApplicationInsightsWithDiagnosticSettings' | 'LogAnalytics'
* **InstrumentationKey**: string (ReadOnly)
* **PrivateLinkScopedResources**: [PrivateLinkScopedResource](#privatelinkscopedresource)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **Request_Source**: 'rest'
* **RetentionInDays**: int
* **SamplingPercentage**: int
* **TenantId**: string (ReadOnly)

## PrivateLinkScopedResource
### Properties
* **ResourceId**: string
* **ScopeId**: string

## ComponentsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationInsightsComponentAnalyticsItemProperties
### Properties
* **functionAlias**: string

## MyWorkbookProperties
### Properties
* **category**: string (Required)
* **displayName**: string (Required)
* **serializedData**: string (Required)
* **sourceId**: string
* **tags**: string[]
* **timeModified**: string (ReadOnly)
* **userId**: string (ReadOnly)
* **version**: string

## MyWorkbookResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebTestProperties
### Properties
* **Configuration**: [WebTestPropertiesConfiguration](#webtestpropertiesconfiguration)
* **Description**: string
* **Enabled**: bool
* **Frequency**: int
* **Kind**: 'multistep' | 'ping' (Required)
* **Locations**: [WebTestGeolocation](#webtestgeolocation)[] (Required)
* **Name**: string (Required)
* **provisioningState**: string (ReadOnly)
* **RetryEnabled**: bool
* **SyntheticMonitorId**: string (Required)
* **Timeout**: int

## WebTestPropertiesConfiguration
### Properties
* **WebTest**: string

## WebTestGeolocation
### Properties
* **Id**: string

## WebtestsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkbookProperties
### Properties
* **category**: string (Required)
* **kind**: 'shared' | 'user' (Required)
* **name**: string (Required)
* **serializedData**: string (Required)
* **sourceResourceId**: string
* **tags**: string[]
* **timeModified**: string (ReadOnly)
* **userId**: string (Required)
* **version**: string
* **workbookId**: string (Required)

## WorkbookResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

