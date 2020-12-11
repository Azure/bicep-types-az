# Microsoft.Insights @ 2018-05-01-preview

## Microsoft.Insights/components
### Properties
* **apiVersion**: '2018-05-01-preview' (ReadOnly, DeployTimeConstant)
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Insights/components/ProactiveDetectionConfigs
### Properties
* **apiVersion**: '2018-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationInsightsComponentProactiveDetectionConfigurationProperties
* **type**: 'Microsoft.Insights/components/ProactiveDetectionConfigs' (ReadOnly, DeployTimeConstant)

## ApplicationInsightsComponentProactiveDetectionConfigurationProperties
### Properties
* **CustomEmails**: string[]
* **Enabled**: bool
* **LastUpdatedTime**: string (ReadOnly)
* **Name**: string (ReadOnly)
* **RuleDefinitions**: schemas:13_RuleDefinitions
* **SendEmailsToSubscriptionOwners**: bool

## schemas:13_RuleDefinitions
### Properties
* **Description**: string
* **DisplayName**: string
* **HelpUrl**: string
* **IsEnabledByDefault**: bool
* **IsHidden**: bool
* **IsInPreview**: bool
* **Name**: string
* **SupportsEmailNotifications**: bool

