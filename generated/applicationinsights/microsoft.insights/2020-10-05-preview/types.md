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
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Insights/webtests' (ReadOnly, DeployTimeConstant)

## WebTestProperties
### Properties
* **Configuration**: [schemas:4_Configuration](#schemas4configuration)
* **ContentValidation**: [schemas:4_ContentValidation](#schemas4contentvalidation)
* **Description**: string
* **Enabled**: bool
* **ExpectedHttpStatusCode**: int
* **Frequency**: int
* **IgnoreHttpsStatusCode**: bool
* **Kind**: 'basic' | 'multistep' | 'ping' | 'standard' (Required)
* **Locations**: [WebTestGeolocation](#webtestgeolocation)[] (Required)
* **Name**: string (Required)
* **provisioningState**: string (ReadOnly)
* **Request**: [schemas:4_Request](#schemas4request)
* **RetryEnabled**: bool
* **SSLCertRemainingLifetimeCheck**: int
* **SSLCheck**: bool
* **SyntheticMonitorId**: string (Required)
* **Timeout**: int

## schemas:4_Configuration
### Properties
* **WebTest**: string

## schemas:4_ContentValidation
### Properties
* **ContentMatch**: string
* **IgnoreCase**: bool
* **PassIfTextFound**: bool

## WebTestGeolocation
### Properties
* **Id**: string

## schemas:4_Request
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

