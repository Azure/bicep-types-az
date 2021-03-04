# Microsoft.Cdn @ 2016-04-02

## Resource Microsoft.Cdn/profiles@2016-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-02' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **sku**: Sku (Required)
* **tags**: ProfileCreateParametersTags
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints@2016-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-02' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EndpointPropertiesCreateParameters
* **tags**: EndpointCreateParametersTags
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/customDomains@2016-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-02' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomDomainPropertiesParameters
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/origins@2016-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-02' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OriginPropertiesParameters
* **type**: 'Microsoft.Cdn/profiles/endpoints/origins' (ReadOnly, DeployTimeConstant)

## Sku
### Properties

## ProfileCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointPropertiesCreateParameters
### Properties
* **contentTypesToCompress**: string[]
* **isCompressionEnabled**: bool
* **isHttpAllowed**: bool
* **isHttpsAllowed**: bool
* **originHostHeader**: string
* **originPath**: string
* **origins**: DeepCreatedOrigin[] (Required)

## DeepCreatedOrigin
### Properties
* **name**: string (Required)
* **properties**: DeepCreatedOriginProperties

## DeepCreatedOriginProperties
### Properties
* **hostName**: string (Required)
* **httpPort**: int
* **httpsPort**: int

## EndpointCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomDomainPropertiesParameters
### Properties
* **hostName**: string (Required)

## OriginPropertiesParameters
### Properties
* **hostName**: string (Required)
* **httpPort**: int
* **httpsPort**: int

