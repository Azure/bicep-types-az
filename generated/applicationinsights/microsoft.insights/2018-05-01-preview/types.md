# Microsoft.Insights @ 2018-05-01-preview

## Resource Microsoft.Insights/components@2018-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (Required): The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationInsightsComponentProperties](#applicationinsightscomponentproperties): Properties that define an Application Insights component resource.
* **tags**: [ComponentsResourceTags](#componentsresourcetags): Resource tags
* **type**: 'Microsoft.Insights/components' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/components/ProactiveDetectionConfigs@2018-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationInsightsComponentProactiveDetectionConfigurationProperties](#applicationinsightscomponentproactivedetectionconfigurationproperties): Properties that define a ProactiveDetection configuration.
* **type**: 'Microsoft.Insights/components/ProactiveDetectionConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/webtests@2018-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'multistep' | 'ping': The kind of WebTest that this web test watches. Choices are ping and multistep.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebTestProperties](#webtestproperties): Metadata describing a web test for an Azure resource.
* **tags**: [WebtestsResourceTags](#webtestsresourcetags): Resource tags
* **type**: 'Microsoft.Insights/webtests' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationInsightsComponentProactiveDetectionConfigurationProperties
### Properties
* **CustomEmails**: string[]: Custom email addresses for this rule notifications
* **Enabled**: bool: A flag that indicates whether this rule is enabled by the user
* **LastUpdatedTime**: string (ReadOnly): The last time this rule was updated
* **Name**: string (ReadOnly): The rule name
* **RuleDefinitions**: [ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesRuleDefinitions](#applicationinsightscomponentproactivedetectionconfigurationpropertiesruledefinitions): Static definitions of the ProactiveDetection configuration rule (same values for all components).
* **SendEmailsToSubscriptionOwners**: bool: A flag that indicated whether notifications on this rule should be sent to subscription owners

## ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesRuleDefinitions
### Properties
* **Description**: string: The rule description
* **DisplayName**: string: The rule name as it is displayed in UI
* **HelpUrl**: string: URL which displays additional info about the proactive detection rule
* **IsEnabledByDefault**: bool: A flag indicating whether the rule is enabled by default
* **IsHidden**: bool: A flag indicating whether the rule is hidden (from the UI)
* **IsInPreview**: bool: A flag indicating whether the rule is in preview
* **Name**: string: The rule name
* **SupportsEmailNotifications**: bool: A flag indicating whether email notifications are supported for detections for this rule

## ApplicationInsightsComponentProperties
### Properties
* **AppId**: string (ReadOnly): Application Insights Unique ID for your Application.
* **Application_Type**: 'other' | 'web' | string (Required): Type of application being monitored.
* **ApplicationId**: string (ReadOnly): The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
* **ConnectionString**: string (ReadOnly): Application Insights component connection string.
* **CreationDate**: string (ReadOnly): Creation Date for the Application Insights component, in ISO 8601 format.
* **DisableIpMasking**: bool: Disable IP masking.
* **Flow_Type**: 'Bluefield' | string: Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
* **HockeyAppId**: string: The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
* **HockeyAppToken**: string (ReadOnly): Token used to authenticate communications with between Application Insights and HockeyApp.
* **ImmediatePurgeDataOn30Days**: bool: Purge data immediately after 30 days.
* **IngestionMode**: 'ApplicationInsights' | 'ApplicationInsightsWithDiagnosticSettings' | 'LogAnalytics' | string: Indicates the flow of the ingestion.
* **InstrumentationKey**: string (ReadOnly): Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
* **PrivateLinkScopedResources**: [PrivateLinkScopedResource](#privatelinkscopedresource)[] (ReadOnly): List of linked private link scope resources.
* **provisioningState**: string (ReadOnly): Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled' | string: The network access type for accessing Application Insights ingestion.
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled' | string: The network access type for accessing Application Insights query.
* **Request_Source**: 'rest' | string: Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
* **RetentionInDays**: int: Retention period in days.
* **SamplingPercentage**: int: Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
* **TenantId**: string (ReadOnly): Azure Tenant Id.

## ComponentsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HeaderField
### Properties
* **key**: string: The name of the header.
* **value**: string: The value of the header.

## PrivateLinkScopedResource
### Properties
* **ResourceId**: string: The full resource Id of the private link scope resource.
* **ScopeId**: string: The private link scope unique Identifier.

## WebTestGeolocation
### Properties
* **Id**: string: Location ID for the WebTest to run from.

## WebTestProperties
### Properties
* **Configuration**: [WebTestPropertiesConfiguration](#webtestpropertiesconfiguration): An XML configuration specification for a WebTest.
* **Description**: string: User defined description for this WebTest.
* **Enabled**: bool: Is the test actively being monitored.
* **Frequency**: int: Interval in seconds between test runs for this WebTest. Default value is 300.
* **Kind**: 'basic' | 'multistep' | 'ping' | 'standard' (Required): The kind of web test this is, valid choices are ping, multistep, basic, and standard.
* **Locations**: [WebTestGeolocation](#webtestgeolocation)[] (Required): A list of where to physically run the tests from to give global coverage for accessibility of your application.
* **Name**: string (Required): User defined name if this WebTest.
* **provisioningState**: string (ReadOnly): Current state of this component, whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
* **Request**: [WebTestPropertiesRequest](#webtestpropertiesrequest): The collection of request properties
* **RetryEnabled**: bool: Allow for retries should this WebTest fail.
* **SyntheticMonitorId**: string (Required): Unique ID of this WebTest. This is typically the same value as the Name field.
* **Timeout**: int: Seconds until this WebTest will timeout and fail. Default value is 30.
* **ValidationRules**: [WebTestPropertiesValidationRules](#webtestpropertiesvalidationrules): The collection of validation rule properties

## WebTestPropertiesConfiguration
### Properties
* **WebTest**: string: The XML specification of a WebTest to run against an application.

## WebTestPropertiesRequest
### Properties
* **FollowRedirects**: bool: Follow redirects for this web test.
* **Headers**: [HeaderField](#headerfield)[]: List of headers and their values to add to the WebTest call.
* **HttpVerb**: string: Http verb to use for this web test.
* **ParseDependentRequests**: bool: Parse Dependent request for this WebTest.
* **RequestBody**: string: Base64 encoded string body to send with this web test.
* **RequestUrl**: string: Url location to test.

## WebTestPropertiesValidationRules
### Properties
* **ContentValidation**: [WebTestPropertiesValidationRulesContentValidation](#webtestpropertiesvalidationrulescontentvalidation): The collection of content validation properties
* **ExpectedHttpStatusCode**: int: Validate that the WebTest returns the http status code provided.
* **IgnoreHttpsStatusCode**: bool: When set, validation will ignore the status code.
* **SSLCertRemainingLifetimeCheck**: int: A number of days to check still remain before the the existing SSL cert expires.  Value must be positive and the SSLCheck must be set to true.
* **SSLCheck**: bool: Checks to see if the SSL cert is still valid.

## WebTestPropertiesValidationRulesContentValidation
### Properties
* **ContentMatch**: string: Content to look for in the return of the WebTest.  Must not be null or empty.
* **IgnoreCase**: bool: When set, this value makes the ContentMatch validation case insensitive.
* **PassIfTextFound**: bool: When true, validation will pass if there is a match for the ContentMatch string.  If false, validation will fail if there is a match

## WebtestsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

