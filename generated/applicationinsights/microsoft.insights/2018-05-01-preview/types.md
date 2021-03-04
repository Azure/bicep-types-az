# Microsoft.Insights @ 2018-05-01-preview

## Resource Microsoft.Insights/components@2018-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationInsightsComponentProperties
* **tags**: ComponentsResourceTags
* **type**: 'Microsoft.Insights/components' (ReadOnly, DeployTimeConstant)

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
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled'
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled'
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

