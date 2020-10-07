# Microsoft.Insights @ 2020-02-02-preview

## Microsoft.Insights/components
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
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
* **ApplicationId**: string (ReadOnly)
* **Application_Type**: 'other' | 'web' (Required)
* **ConnectionString**: string (ReadOnly)
* **CreationDate**: string (ReadOnly)
* **DisableIpMasking**: bool
* **Flow_Type**: 'Bluefield'
* **HockeyAppId**: string
* **HockeyAppToken**: string (ReadOnly)
* **ImmediatePurgeDataOn30Days**: bool
* **IngestionMode**: 'ApplicationInsights' | 'ApplicationInsightsWithDiagnosticSettings' | 'LogAnalytics'
* **InstrumentationKey**: string (ReadOnly)
* **LaMigrationDate**: string (ReadOnly)
* **PrivateLinkScopedResources**: PrivateLinkScopedResource[] (ReadOnly)
* **Request_Source**: 'rest'
* **RetentionInDays**: int (ReadOnly)
* **SamplingPercentage**: int
* **TenantId**: string (ReadOnly)
* **WorkspaceResourceId**: string (Required)
* **provisioningState**: string (ReadOnly)
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled'
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled'

## PrivateLinkScopedResource
### Properties
* **ResourceId**: string
* **ScopeId**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

