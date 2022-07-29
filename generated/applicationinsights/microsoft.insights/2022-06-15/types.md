# Microsoft.Insights @ 2022-06-15

## Resource Microsoft.Insights/webtests@2022-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-06-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'multistep' | 'ping' | 'standard': The kind of WebTest that this web test watches. Choices are ping, multistep and standard.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebTestProperties](#webtestproperties): Metadata describing a web test for an Azure resource.
* **tags**: [WebtestsResourceTags](#webtestsresourcetags): Resource tags
* **type**: 'Microsoft.Insights/webtests' (ReadOnly, DeployTimeConstant): The resource type

## HeaderField
### Properties
* **key**: string: The name of the header.
* **value**: string: The value of the header.

## WebTestGeolocation
### Properties
* **Id**: string: Location ID for the WebTest to run from.

## WebTestProperties
### Properties
* **Configuration**: [WebTestPropertiesConfiguration](#webtestpropertiesconfiguration): An XML configuration specification for a WebTest.
* **Description**: string: User defined description for this WebTest.
* **Enabled**: bool: Is the test actively being monitored.
* **Frequency**: int: Interval in seconds between test runs for this WebTest. Default value is 300.
* **Kind**: 'multistep' | 'ping' | 'standard' (Required): The kind of web test this is, valid choices are ping, multistep and standard.
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

