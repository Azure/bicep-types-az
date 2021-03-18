# Microsoft.Insights @ 2018-05-01-preview

## Resource Microsoft.Insights/components@2018-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationInsightsComponentProperties](#applicationinsightscomponentproperties)
* **tags**: [ComponentsResourceTags](#componentsresourcetags)
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
* **PrivateLinkScopedResources**: [PrivateLinkScopedResource](#privatelinkscopedresource)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled'
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled'
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

