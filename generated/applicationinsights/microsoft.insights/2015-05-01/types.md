# microsoft.insights @ 2015-05-01

## Resource Microsoft.Insights/components@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (Required): The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationInsightsComponentProperties](#applicationinsightscomponentproperties): Properties that define an Application Insights component resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.Insights/components' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.insights/components/analyticsItems@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **Content**: string: The content of this item
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'item' (Required, DeployTimeConstant): The resource name
* **Properties**: [ApplicationInsightsComponentAnalyticsItemProperties](#applicationinsightscomponentanalyticsitemproperties): A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
* **Scope**: 'shared' | 'user': Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component. Possible values include: 'shared', 'user'
* **TimeCreated**: string (ReadOnly): Date and time in UTC when this item was created.
* **TimeModified**: string (ReadOnly): Date and time in UTC of the last modification that was made to this item.
* **type**: 'microsoft.insights/components/analyticsItems' (ReadOnly, DeployTimeConstant): The resource type
* **Version**: string (ReadOnly): This instance's version of the data model. This can change as new features are added.

## Resource Microsoft.Insights/components/exportconfiguration@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **ApplicationName**: string (ReadOnly): The name of the Application Insights component.
* **ContainerName**: string (ReadOnly): The name of the destination storage container.
* **DestinationAccountId**: string: The name of destination storage account.
* **DestinationAddress**: string (WriteOnly): The SAS URL for the destination storage container. It must grant write permission.
* **DestinationStorageLocationId**: string: The location ID of the destination storage container.
* **DestinationStorageSubscriptionId**: string: The subscription ID of the destination storage container.
* **DestinationType**: string: The Continuous Export destination type. This has to be 'Blob'.
* **ExportId**: string (ReadOnly): The unique ID of the export configuration inside an Application Insights component. It is auto generated when the Continuous Export configuration is created.
* **ExportStatus**: string (ReadOnly): This indicates current Continuous Export configuration status. The possible values are 'Preparing', 'Success', 'Failure'.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **InstrumentationKey**: string (ReadOnly): The instrumentation key of the Application Insights component.
* **IsEnabled**: string (WriteOnly): Set to 'true' to create a Continuous Export configuration as enabled, otherwise set it to 'false'.
* **IsUserEnabled**: string (ReadOnly): This will be 'true' if the Continuous Export configuration is enabled, otherwise it will be 'false'.
* **LastGapTime**: string (ReadOnly): The last time the Continuous Export configuration started failing.
* **LastSuccessTime**: string (ReadOnly): The last time data was successfully delivered to the destination storage container for this Continuous Export configuration.
* **LastUserUpdate**: string (ReadOnly): Last time the Continuous Export configuration was updated.
* **name**: string (Required, DeployTimeConstant): The resource name
* **NotificationQueueEnabled**: string: Deprecated
* **NotificationQueueUri**: string (WriteOnly): Deprecated
* **PermanentErrorReason**: string (ReadOnly): This is the reason the Continuous Export configuration started failing. It can be 'AzureStorageNotFound' or 'AzureStorageAccessDenied'.
* **RecordTypes**: string: The document types to be exported, as comma separated values. Allowed values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
* **ResourceGroup**: string (ReadOnly): The resource group of the Application Insights component.
* **StorageName**: string (ReadOnly): The name of the destination storage account.
* **SubscriptionId**: string (ReadOnly): The subscription of the Application Insights component.
* **type**: 'Microsoft.Insights/components/exportconfiguration' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/components/favorites@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **Category**: string: Favorite category, as defined by the user at creation time.
* **Config**: string: Configuration of this particular favorite, which are driven by the Azure portal UX. Configuration data is a string containing valid JSON
* **FavoriteId**: string (ReadOnly): Internally assigned unique id of the favorite definition.
* **FavoriteType**: 'shared' | 'user': Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component. Possible values include: 'shared', 'user'
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **IsGeneratedFromTemplate**: bool: Flag denoting wether or not this favorite was generated from a template.
* **name**: string (Required, DeployTimeConstant): The resource name
* **SourceType**: string: The source of the favorite definition.
* **Tags**: string[]: A list of 0 or more tags that are associated with this favorite definition
* **TimeModified**: string (ReadOnly): Date and time in UTC of the last modification that was made to this favorite definition.
* **type**: 'Microsoft.Insights/components/favorites' (ReadOnly, DeployTimeConstant): The resource type
* **UserId**: string (ReadOnly): Unique user id of the specific user that owns this favorite.
* **Version**: string: This instance's version of the data model. This can change as new features are added that can be marked favorite. Current examples include MetricsExplorer (ME) and Search.

## Resource microsoft.insights/components/myanalyticsItems@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **Content**: string: The content of this item
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'item' (Required, DeployTimeConstant): The resource name
* **Properties**: [ApplicationInsightsComponentAnalyticsItemProperties](#applicationinsightscomponentanalyticsitemproperties): A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
* **Scope**: 'shared' | 'user': Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component. Possible values include: 'shared', 'user'
* **TimeCreated**: string (ReadOnly): Date and time in UTC when this item was created.
* **TimeModified**: string (ReadOnly): Date and time in UTC of the last modification that was made to this item.
* **type**: 'microsoft.insights/components/myanalyticsItems' (ReadOnly, DeployTimeConstant): The resource type
* **Version**: string (ReadOnly): This instance's version of the data model. This can change as new features are added.

## Resource Microsoft.Insights/components/ProactiveDetectionConfigs@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **CustomEmails**: string[]: Custom email addresses for this rule notifications
* **Enabled**: bool: A flag that indicates whether this rule is enabled by the user
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **LastUpdatedTime**: string: The last time this rule was updated
* **name**: string (Required, DeployTimeConstant): The resource name
* **RuleDefinitions**: [schemas:20_RuleDefinitions](#schemas20ruledefinitions): Static definitions of the ProactiveDetection configuration rule (same values for all components).
* **SendEmailsToSubscriptionOwners**: bool: A flag that indicated whether notifications on this rule should be sent to subscription owners
* **type**: 'Microsoft.Insights/components/ProactiveDetectionConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/myWorkbooks@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'shared' | 'user': The kind of workbook. Choices are user and shared. Possible values include: 'user', 'shared'
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MyWorkbookProperties](#myworkbookproperties): Properties that contain a private workbook.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.Insights/myWorkbooks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/webtests@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'multistep' | 'ping': The kind of web test that this web test watches. Choices are ping and multistep. Possible values include: 'ping', 'multistep'
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebTestProperties](#webtestproperties): Metadata describing a web test for an Azure resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.Insights/webtests' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.insights/workbooks@2015-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'shared' | 'user': The kind of workbook. Choices are user and shared. Possible values include: 'user', 'shared'
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkbookProperties](#workbookproperties): Properties that contain a workbook.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'microsoft.insights/workbooks' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationInsightsComponentProperties
### Properties
* **AppId**: string (ReadOnly): Application Insights Unique ID for your Application.
* **Application_Type**: 'other' | 'web' (Required): Type of application being monitored. Possible values include: 'web', 'other'
* **ApplicationId**: string (ReadOnly): The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
* **ConnectionString**: string (ReadOnly): Application Insights component connection string.
* **CreationDate**: string (ReadOnly): Creation Date for the Application Insights component, in ISO 8601 format.
* **DisableIpMasking**: bool: Disable IP masking.
* **Flow_Type**: 'Bluefield': Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API. Possible values include: 'Bluefield'
* **HockeyAppId**: string: The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
* **HockeyAppToken**: string (ReadOnly): Token used to authenticate communications with between Application Insights and HockeyApp.
* **ImmediatePurgeDataOn30Days**: bool: Purge data immediately after 30 days.
* **IngestionMode**: 'ApplicationInsights' | 'ApplicationInsightsWithDiagnosticSettings' | 'LogAnalytics': Indicates the flow of the ingestion. Possible values include: 'ApplicationInsights', 'ApplicationInsightsWithDiagnosticSettings', 'LogAnalytics'
* **InstrumentationKey**: string (ReadOnly): Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
* **PrivateLinkScopedResources**: [PrivateLinkScopedResource](#privatelinkscopedresource)[] (ReadOnly): List of linked private link scope resources.
* **provisioningState**: string (ReadOnly): Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
* **Request_Source**: 'rest': Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'. Possible values include: 'rest'
* **RetentionInDays**: int: Retention period in days.
* **SamplingPercentage**: int: Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
* **TenantId**: string (ReadOnly): Azure Tenant Id.

## PrivateLinkScopedResource
### Properties
* **ResourceId**: string: The full resource Id of the private link scope resource.
* **ScopeId**: string: The private link scope unique Identifier.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationInsightsComponentAnalyticsItemProperties
### Properties
* **functionAlias**: string: A function alias, used when the type of the item is Function

## schemas:20_RuleDefinitions
### Properties
* **Description**: string: The rule description
* **DisplayName**: string: The rule name as it is displayed in UI
* **HelpUrl**: string: URL which displays additional info about the proactive detection rule
* **IsEnabledByDefault**: bool: A flag indicating whether the rule is enabled by default
* **IsHidden**: bool: A flag indicating whether the rule is hidden (from the UI)
* **IsInPreview**: bool: A flag indicating whether the rule is in preview
* **Name**: string: The rule name
* **SupportsEmailNotifications**: bool: A flag indicating whether email notifications are supported for detections for this rule

## MyWorkbookProperties
### Properties
* **category**: string (Required): Workbook category, as defined by the user at creation time.
* **displayName**: string (Required): The user-defined name of the private workbook.
* **serializedData**: string (Required): Configuration of this particular private workbook. Configuration data is a string containing valid JSON
* **sourceId**: string: Optional resourceId for a source resource.
* **tags**: string[]: A list of 0 or more tags that are associated with this private workbook definition
* **timeModified**: string (ReadOnly): Date and time in UTC of the last modification that was made to this private workbook definition.
* **userId**: string (ReadOnly): Unique user id of the specific user that owns this private workbook.
* **version**: string: This instance's version of the data model. This can change as new features are added that can be marked private workbook.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebTestProperties
### Properties
* **Configuration**: [schemas:43_Configuration](#schemas43configuration): An XML configuration specification for a WebTest.
* **Description**: string: Purpose/user defined descriptive test for this WebTest.
* **Enabled**: bool: Is the test actively being monitored.
* **Frequency**: int: Interval in seconds between test runs for this WebTest. Default value is 300.
* **Kind**: 'multistep' | 'ping' (Required): The kind of web test this is, valid choices are ping and multistep. Possible values include: 'ping', 'multistep'
* **Locations**: [WebTestGeolocation](#webtestgeolocation)[] (Required): A list of where to physically run the tests from to give global coverage for accessibility of your application.
* **Name**: string (Required): User defined name if this WebTest.
* **provisioningState**: string (ReadOnly): Current state of this component, whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
* **RetryEnabled**: bool: Allow for retries should this WebTest fail.
* **SyntheticMonitorId**: string (Required): Unique ID of this WebTest. This is typically the same value as the Name field.
* **Timeout**: int: Seconds until this WebTest will timeout and fail. Default value is 30.

## schemas:43_Configuration
### Properties
* **WebTest**: string: The XML specification of a WebTest to run against an application.

## WebTestGeolocation
### Properties
* **Id**: string: Location ID for the webtest to run from.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkbookProperties
### Properties
* **category**: string (Required): Workbook category, as defined by the user at creation time.
* **kind**: 'shared' | 'user' (Required): Enum indicating if this workbook definition is owned by a specific user or is shared between all users with access to the Application Insights component. Possible values include: 'user', 'shared'
* **name**: string (Required): The user-defined name of the workbook.
* **serializedData**: string (Required): Configuration of this particular workbook. Configuration data is a string containing valid JSON
* **sourceResourceId**: string: Optional resourceId for a source resource.
* **tags**: string[]: A list of 0 or more tags that are associated with this workbook definition
* **timeModified**: string (ReadOnly): Date and time in UTC of the last modification that was made to this workbook definition.
* **userId**: string (Required): Unique user id of the specific user that owns this workbook.
* **version**: string: This instance's version of the data model. This can change as new features are added that can be marked workbook.
* **workbookId**: string (Required): Internally assigned unique id of the workbook definition.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

