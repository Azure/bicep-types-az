# Microsoft.Insights @ 2020-10-05-preview

## Resource Microsoft.Insights/webtests@2020-10-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-05-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'multistep' | 'ping'
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebTestProperties](#webtestproperties)
* **tags**: [WebtestsResourceTags](#webtestsresourcetags)
* **type**: 'Microsoft.Insights/webtests' (ReadOnly, DeployTimeConstant)

## WebTestProperties
### Properties
* **Configuration**: [WebTestPropertiesConfiguration](#webtestpropertiesconfiguration)
* **ContentValidation**: [WebTestPropertiesContentValidation](#webtestpropertiescontentvalidation)
* **Description**: string
* **Enabled**: bool
* **ExpectedHttpStatusCode**: int
* **Frequency**: int
* **IgnoreHttpsStatusCode**: bool
* **Kind**: 'basic' | 'multistep' | 'ping' | 'standard' (Required)
* **Locations**: [WebTestGeolocation](#webtestgeolocation)[] (Required)
* **Name**: string (Required)
* **provisioningState**: string (ReadOnly)
* **Request**: [WebTestPropertiesRequest](#webtestpropertiesrequest)
* **RetryEnabled**: bool
* **SSLCertRemainingLifetimeCheck**: int
* **SSLCheck**: bool
* **SyntheticMonitorId**: string (Required)
* **Timeout**: int

## WebTestPropertiesConfiguration
### Properties
* **WebTest**: string

## WebTestPropertiesContentValidation
### Properties
* **ContentMatch**: string
* **IgnoreCase**: bool
* **PassIfTextFound**: bool

## WebTestGeolocation
### Properties
* **Id**: string

## WebTestPropertiesRequest
### Properties
* **FollowRedirects**: bool
* **Headers**: [HeaderField](#headerfield)[]
* **HttpVerb**: string
* **ParseDependentRequests**: bool
* **RequestBody**: string
* **RequestUrl**: string

## HeaderField
### Properties
* **key**: string
* **value**: string

## WebtestsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

