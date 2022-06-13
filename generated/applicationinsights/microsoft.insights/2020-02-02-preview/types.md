# Microsoft.Insights @ 2020-02-02-preview

## Resource Microsoft.Insights/components@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (Required): The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationInsightsComponentProperties](#applicationinsightscomponentproperties): Properties that define an Application Insights component resource.
* **tags**: [ComponentsResourceTags](#componentsresourcetags): Resource tags
* **type**: 'Microsoft.Insights/components' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationInsightsComponentProperties
### Properties
* **AppId**: string (ReadOnly): Application Insights Unique ID for your Application.
* **Application_Type**: 'other' | 'web' | string (Required): Type of application being monitored.
* **ApplicationId**: string (ReadOnly): The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
* **ConnectionString**: string (ReadOnly): Application Insights component connection string.
* **CreationDate**: string (ReadOnly): Creation Date for the Application Insights component, in ISO 8601 format.
* **DisableIpMasking**: bool: Disable IP masking.
* **DisableLocalAuth**: bool: Disable Non-AAD based Auth.
* **Flow_Type**: 'Bluefield' | string: Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
* **ForceCustomerStorageForProfiler**: bool: Force users to create their own storage account for profiler and debugger.
* **HockeyAppId**: string: The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
* **HockeyAppToken**: string (ReadOnly): Token used to authenticate communications with between Application Insights and HockeyApp.
* **ImmediatePurgeDataOn30Days**: bool: Purge data immediately after 30 days.
* **IngestionMode**: 'ApplicationInsights' | 'ApplicationInsightsWithDiagnosticSettings' | 'LogAnalytics' | string: Indicates the flow of the ingestion.
* **InstrumentationKey**: string (ReadOnly): Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
* **LaMigrationDate**: string (ReadOnly): The date which the component got migrated to LA, in ISO 8601 format.
* **Name**: string (ReadOnly): Application name.
* **PrivateLinkScopedResources**: [PrivateLinkScopedResource](#privatelinkscopedresource)[] (ReadOnly): List of linked private link scope resources.
* **provisioningState**: string (ReadOnly): Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled' | string: The network access type for accessing Application Insights ingestion.
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled' | string: The network access type for accessing Application Insights query.
* **Request_Source**: 'rest' | string: Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
* **RetentionInDays**: int (ReadOnly): Retention period in days.
* **SamplingPercentage**: int: Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
* **TenantId**: string (ReadOnly): Azure Tenant Id.
* **WorkspaceResourceId**: string: Resource Id of the log analytics workspace which the data will be ingested to. This property is required to create an application with this API version. Applications from older versions will not have this property.

## ComponentsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkScopedResource
### Properties
* **ResourceId**: string: The full resource Id of the private link scope resource.
* **ScopeId**: string: The private link scope unique Identifier.

