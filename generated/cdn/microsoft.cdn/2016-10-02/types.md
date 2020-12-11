# Microsoft.Cdn @ 2016-10-02

## Microsoft.Cdn/profiles
### Properties
* **apiVersion**: '2016-10-02' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProfileProperties
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant)

## ProfileProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' (ReadOnly)

## Sku
### Properties
* **name**: 'Custom_Verizon' | 'Premium_Verizon' | 'Standard_Akamai' | 'Standard_ChinaCdn' | 'Standard_Verizon'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Cdn/profiles/endpoints
### Properties
* **apiVersion**: '2016-10-02' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EndpointProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant)

## EndpointProperties
### Properties
* **contentTypesToCompress**: string[]
* **geoFilters**: GeoFilter[]
* **hostName**: string (ReadOnly)
* **isCompressionEnabled**: bool
* **isHttpAllowed**: bool
* **isHttpsAllowed**: bool
* **optimizationType**: 'DynamicSiteAcceleration' | 'GeneralMediaStreaming' | 'GeneralWebDelivery' | 'LargeFileDownload' | 'VideoOnDemandMediaStreaming'
* **originHostHeader**: string
* **originPath**: string
* **origins**: DeepCreatedOrigin[] (Required)
* **provisioningState**: string (ReadOnly)
* **queryStringCachingBehavior**: 'BypassCaching' | 'IgnoreQueryString' | 'NotSet' | 'UseQueryString'
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)

## GeoFilter
### Properties
* **action**: 'Allow' | 'Block' (Required)
* **countryCodes**: string[] (Required)
* **relativePath**: string (Required)

## DeepCreatedOrigin
### Properties
* **name**: string (Required)
* **properties**: DeepCreatedOriginProperties

## DeepCreatedOriginProperties
### Properties
* **hostName**: string (Required)
* **httpPort**: int
* **httpsPort**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Cdn/profiles/endpoints/customDomains
### Properties
* **apiVersion**: '2016-10-02' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomDomainPropertiesParameters
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant)

## CustomDomainPropertiesParameters
### Properties
* **customHttpsProvisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' (ReadOnly)
* **hostName**: string (Required)
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly)
* **validationData**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

