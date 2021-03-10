# Microsoft.Cdn @ 2015-06-01

## Resource Microsoft.Cdn/profiles@2015-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProfilePropertiesCreateParameters](#profilepropertiescreateparameters)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints@2015-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EndpointPropertiesCreateParameters](#endpointpropertiescreateparameters)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/customDomains@2015-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CustomDomainPropertiesParameters](#customdomainpropertiesparameters)
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/origins@2015-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OriginPropertiesParameters](#originpropertiesparameters)
* **type**: 'Microsoft.Cdn/profiles/endpoints/origins' (ReadOnly, DeployTimeConstant)

## ProfilePropertiesCreateParameters
### Properties
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' (ReadOnly)
* **sku**: [Sku](#sku) (Required)

## Sku
### Properties
* **name**: 'Premium' | 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointPropertiesCreateParameters
### Properties
* **contentTypesToCompress**: string[]
* **hostName**: string (ReadOnly)
* **isCompressionEnabled**: bool
* **isHttpAllowed**: bool
* **isHttpsAllowed**: bool
* **originHostHeader**: string
* **originPath**: string
* **origins**: [DeepCreatedOrigin](#deepcreatedorigin)[] (Required)
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' (ReadOnly)
* **queryStringCachingBehavior**: 'BypassCaching' | 'IgnoreQueryString' | 'NotSet' | 'UseQueryString'
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)

## DeepCreatedOrigin
### Properties
* **name**: string (Required)
* **properties**: [DeepCreatedOriginProperties](#deepcreatedoriginproperties)

## DeepCreatedOriginProperties
### Properties
* **hostName**: string (Required)
* **httpPort**: int
* **httpsPort**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomDomainPropertiesParameters
### Properties
* **hostName**: string (Required)
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly)

## OriginPropertiesParameters
### Properties
* **hostName**: string (Required)
* **httpPort**: int
* **httpsPort**: int
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly)

