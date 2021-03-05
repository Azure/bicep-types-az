# Microsoft.Insights @ 2020-10-05-preview

## Resource Microsoft.Insights/webtests@2020-10-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-05-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'multistep' | 'ping'
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebTestProperties
* **tags**: WebtestsResourceTags
* **type**: 'Microsoft.Insights/webtests' (ReadOnly, DeployTimeConstant)

## WebTestProperties
### Properties
* **configuration**: WebTestPropertiesConfiguration
* **contentValidation**: WebTestPropertiesContentValidation
* **description**: string
* **enabled**: bool
* **expectedHttpStatusCode**: int
* **frequency**: int
* **ignoreHttpsStatusCode**: bool
* **locations**: WebTestGeolocation[] (Required)
* **provisioningState**: string (ReadOnly)
* **request**: WebTestPropertiesRequest
* **retryEnabled**: bool
* **SSLCertRemainingLifetimeCheck**: int
* **SSLCheck**: bool
* **syntheticMonitorId**: string (Required)
* **timeout**: int
* **webTestKind**: 'basic' | 'multistep' | 'ping' | 'standard' (Required)
* **webTestName**: string (Required)

## WebTestPropertiesConfiguration
### Properties
* **webTest**: string

## WebTestPropertiesContentValidation
### Properties
* **contentMatch**: string
* **ignoreCase**: bool
* **passIfTextFound**: bool

## WebTestGeolocation
### Properties
* **location**: string

## WebTestPropertiesRequest
### Properties
* **followRedirects**: bool
* **headers**: HeaderField[]
* **httpVerb**: string
* **parseDependentRequests**: bool
* **requestBody**: string
* **requestUrl**: string

## HeaderField
### Properties
* **headerFieldName**: string
* **headerFieldValue**: string

## WebtestsResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

