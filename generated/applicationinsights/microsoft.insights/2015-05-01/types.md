# microsoft.insights @ 2015-05-01

## Resource Microsoft.Insights/components@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationInsightsComponentProperties
* **tags**: ComponentsResourceTags
* **type**: 'Microsoft.Insights/components' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/components/exportconfiguration@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **applicationName**: string (ReadOnly)
* **containerName**: string (ReadOnly)
* **destinationAccountId**: string
* **destinationAddress**: string (WriteOnly)
* **destinationStorageLocationId**: string
* **destinationStorageSubscriptionId**: string
* **destinationType**: string
* **exportId**: string (ReadOnly)
* **exportStatus**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **instrumentationKey**: string (ReadOnly)
* **IsEnabled**: string (WriteOnly)
* **IsUserEnabled**: string (ReadOnly)
* **lastGapTime**: string (ReadOnly)
* **lastSuccessTime**: string (ReadOnly)
* **lastUserUpdate**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **notificationQueueEnabled**: string
* **notificationQueueUri**: string (WriteOnly)
* **permanentErrorReason**: string (ReadOnly)
* **recordTypes**: string
* **resourceGroup**: string (ReadOnly)
* **storageName**: string (ReadOnly)
* **subscriptionId**: string (ReadOnly)
* **type**: 'Microsoft.Insights/components/exportconfiguration' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/components/favorites@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **category**: string
* **config**: string
* **favoriteId**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **IsGeneratedFromTemplate**: bool
* **name**: string (Required, DeployTimeConstant)
* **sourceType**: string
* **tags**: string[]
* **timeModified**: string (ReadOnly)
* **type**: 'Microsoft.Insights/components/favorites' (ReadOnly, DeployTimeConstant)
* **userId**: string (ReadOnly)
* **version**: string

## Resource Microsoft.Insights/myWorkbooks@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'shared' | 'user'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MyWorkbookProperties
* **tags**: MyWorkbookResourceTags
* **type**: 'Microsoft.Insights/myWorkbooks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/webtests@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebTestProperties
* **tags**: WebtestsResourceTags
* **type**: 'Microsoft.Insights/webtests' (ReadOnly, DeployTimeConstant)

## Resource microsoft.insights/components/analyticsItems@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **content**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationInsightsComponentAnalyticsItemProperties
* **scope**: 'shared' | 'user'
* **timeCreated**: string (ReadOnly)
* **timeModified**: string (ReadOnly)
* **type**: 'microsoft.insights/components/analyticsItems' (ReadOnly, DeployTimeConstant)
* **version**: string (ReadOnly)

## Resource microsoft.insights/components/myanalyticsItems@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **content**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationInsightsComponentAnalyticsItemProperties
* **scope**: 'shared' | 'user'
* **timeCreated**: string (ReadOnly)
* **timeModified**: string (ReadOnly)
* **type**: 'microsoft.insights/components/myanalyticsItems' (ReadOnly, DeployTimeConstant)
* **version**: string (ReadOnly)

## Resource microsoft.insights/workbooks@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'shared' | 'user'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkbookProperties
* **tags**: WorkbookResourceTags
* **type**: 'microsoft.insights/workbooks' (ReadOnly, DeployTimeConstant)

## ApplicationInsightsComponentProperties
### Properties
* **appId**: string (ReadOnly)
* **applicationId**: string (ReadOnly)
* **applicationType**: 'other' | 'web' (Required)
* **connectionString**: string (ReadOnly)
* **creationDate**: string (ReadOnly)
* **disableIpMasking**: bool
* **flowType**: 'Bluefield'
* **hockeyAppId**: string
* **hockeyAppToken**: string (ReadOnly)
* **immediatePurgeDataOn30Days**: bool
* **ingestionMode**: 'ApplicationInsights' | 'ApplicationInsightsWithDiagnosticSettings' | 'LogAnalytics'
* **instrumentationKey**: string (ReadOnly)
* **privateLinkScopedResources**: PrivateLinkScopedResource[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **requestSource**: 'rest'
* **retentionInDays**: int
* **samplingPercentage**: int
* **tenantId**: string (ReadOnly)

## PrivateLinkScopedResource
### Properties
* **resourceId**: string
* **scopeId**: string

## ComponentsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **configuration**: WebTestPropertiesConfiguration
* **description**: string
* **enabled**: bool
* **frequency**: int
* **locations**: WebTestGeolocation[] (Required)
* **provisioningState**: string (ReadOnly)
* **retryEnabled**: bool
* **syntheticMonitorId**: string (Required)
* **timeout**: int
* **webTestName**: string (Required)

## WebTestPropertiesConfiguration
### Properties
* **webTest**: string

## WebTestGeolocation
### Properties
* **location**: string

## WebtestsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationInsightsComponentAnalyticsItemProperties
### Properties
* **functionAlias**: string

## WorkbookProperties
### Properties
* **category**: string (Required)
* **name**: string (Required)
* **serializedData**: string (Required)
* **sharedTypeKind**: 'shared' | 'user' (Required)
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

