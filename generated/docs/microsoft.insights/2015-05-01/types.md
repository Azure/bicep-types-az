# Microsoft.Insights @ 2015-05-01

## Microsoft.Insights/components
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationInsightsComponentProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Insights/components' (ReadOnly, DeployTimeConstant)

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
* **PrivateLinkScopedResources**: PrivateLinkScopedResource[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **Request_Source**: 'rest'
* **RetentionInDays**: int
* **SamplingPercentage**: int
* **TenantId**: string (ReadOnly)

## PrivateLinkScopedResource
### Properties
* **ResourceId**: string
* **ScopeId**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## microsoft.insights/components/analyticsItems
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **Content**: string
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **Properties**: ApplicationInsightsComponentAnalyticsItemProperties
* **Scope**: 'shared' | 'user'
* **TimeCreated**: string (ReadOnly)
* **TimeModified**: string (ReadOnly)
* **type**: 'microsoft.insights/components/analyticsItems' (ReadOnly, DeployTimeConstant)
* **Version**: string (ReadOnly)

## ApplicationInsightsComponentAnalyticsItemProperties
### Properties
* **functionAlias**: string

## Microsoft.Insights/components/Annotations
### Properties
* **AnnotationName**: string (WriteOnly)
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **Category**: string (WriteOnly)
* **dependsOn**: resourceref[] (WriteOnly)
* **EventTime**: string (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **Properties**: string (WriteOnly)
* **RelatedAnnotation**: string (WriteOnly)
* **type**: 'Microsoft.Insights/components/Annotations' (ReadOnly, DeployTimeConstant)
* **value**: Annotation[] (ReadOnly)

## Annotation
### Properties
* **AnnotationName**: string (ReadOnly)
* **Category**: string (ReadOnly)
* **EventTime**: string (ReadOnly)
* **Id**: string (ReadOnly)
* **Properties**: string (ReadOnly)
* **RelatedAnnotation**: string (ReadOnly)

## Microsoft.Insights/components/currentbillingfeatures
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **CurrentBillingFeatures**: string[]
* **DataVolumeCap**: ApplicationInsightsComponentDataVolumeCap
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Insights/components/currentbillingfeatures' (ReadOnly, DeployTimeConstant)

## ApplicationInsightsComponentDataVolumeCap
### Properties
* **Cap**: int
* **MaxHistoryCap**: int (ReadOnly)
* **ResetTime**: int (ReadOnly)
* **StopSendNotificationWhenHitCap**: bool
* **StopSendNotificationWhenHitThreshold**: bool
* **WarningThreshold**: int

## Microsoft.Insights/components/exportconfiguration
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **ApplicationName**: string (ReadOnly)
* **ContainerName**: string (ReadOnly)
* **dependsOn**: resourceref[] (WriteOnly)
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

## Microsoft.Insights/components/favorites
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **Category**: string
* **Config**: string
* **dependsOn**: resourceref[] (WriteOnly)
* **FavoriteId**: string (ReadOnly)
* **FavoriteType**: 'shared' | 'user'
* **id**: string (ReadOnly, DeployTimeConstant)
* **IsGeneratedFromTemplate**: bool
* **name**: string (Required, DeployTimeConstant)
* **SourceType**: string
* **Tags**: string[]
* **TimeModified**: string (ReadOnly)
* **type**: 'Microsoft.Insights/components/favorites' (ReadOnly, DeployTimeConstant)
* **UserId**: string (ReadOnly)
* **Version**: string

## microsoft.insights/components/myanalyticsItems
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **Content**: string
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **Properties**: ApplicationInsightsComponentAnalyticsItemProperties
* **Scope**: 'shared' | 'user'
* **TimeCreated**: string (ReadOnly)
* **TimeModified**: string (ReadOnly)
* **type**: 'microsoft.insights/components/myanalyticsItems' (ReadOnly, DeployTimeConstant)
* **Version**: string (ReadOnly)

## Microsoft.Insights/components/ProactiveDetectionConfigs
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **CustomEmails**: string[]
* **dependsOn**: resourceref[] (WriteOnly)
* **Enabled**: bool
* **id**: string (ReadOnly, DeployTimeConstant)
* **LastUpdatedTime**: string
* **name**: string (Required, DeployTimeConstant)
* **RuleDefinitions**: schemas:21_RuleDefinitions
* **SendEmailsToSubscriptionOwners**: bool
* **type**: 'Microsoft.Insights/components/ProactiveDetectionConfigs' (ReadOnly, DeployTimeConstant)

## schemas:21_RuleDefinitions
### Properties
* **Description**: string
* **DisplayName**: string
* **HelpUrl**: string
* **IsEnabledByDefault**: bool
* **IsHidden**: bool
* **IsInPreview**: bool
* **Name**: string
* **SupportsEmailNotifications**: bool

## Microsoft.Insights/myWorkbooks
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'shared' | 'user'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MyWorkbookProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Insights/myWorkbooks' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Insights/webtests
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'multistep' | 'ping'
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebTestProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Insights/webtests' (ReadOnly, DeployTimeConstant)

## WebTestProperties
### Properties
* **Configuration**: schemas:34_Configuration
* **Description**: string
* **Enabled**: bool
* **Frequency**: int
* **Kind**: 'multistep' | 'ping' (Required)
* **Locations**: WebTestGeolocation[] (Required)
* **Name**: string (Required)
* **provisioningState**: string (ReadOnly)
* **RetryEnabled**: bool
* **SyntheticMonitorId**: string (Required)
* **Timeout**: int

## schemas:34_Configuration
### Properties
* **WebTest**: string

## WebTestGeolocation
### Properties
* **Id**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## microsoft.insights/workbooks
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'shared' | 'user'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkbookProperties
* **tags**: Dictionary<string,String>
* **type**: 'microsoft.insights/workbooks' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

