# Microsoft.Cdn @ 2016-04-02

## Resource Microsoft.Cdn/profiles@2016-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Profile location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProfileProperties](#profileproperties) (ReadOnly)
* **sku**: [Sku](#sku) (Required): The SKU (pricing tier) of the CDN profile.
* **tags**: [ProfileCreateParametersTags](#profilecreateparameterstags): Profile tags
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints@2016-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Endpoint location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointPropertiesCreateParameters](#endpointpropertiescreateparameters)
* **tags**: [EndpointCreateParametersTags](#endpointcreateparameterstags): Endpoint tags
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints/customDomains@2016-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomDomainPropertiesParameters](#customdomainpropertiesparameters)
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints/origins@2016-04-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OriginPropertiesParameters](#originpropertiesparameters)
* **type**: 'Microsoft.Cdn/profiles/endpoints/origins' (ReadOnly, DeployTimeConstant): The resource type

## CustomDomainPropertiesParameters
### Properties
* **hostName**: string (Required): The host name of the custom domain. Must be a domain name.
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning status of the custom domain.
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly): Resource status of the custom domain.

## DeepCreatedOrigin
### Properties
* **name**: string (Required): Origin name
* **properties**: [DeepCreatedOriginProperties](#deepcreatedoriginproperties): Properties of deep created origin on a CDN endpoint.

## DeepCreatedOriginProperties
### Properties
* **hostName**: string (Required): The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
* **httpPort**: int: The value of the HTTP port. Must be between 1 and 65535
* **httpsPort**: int: The value of the HTTPS port. Must be between 1 and 65535

## EndpointCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointPropertiesCreateParameters
### Properties
* **contentTypesToCompress**: string[]: List of content types on which compression will be applied. The value for the elements should be a valid MIME type.
* **hostName**: string (ReadOnly): The host name of the endpoint {endpointName}.{DNSZone}
* **isCompressionEnabled**: bool: Indicates whether content compression is enabled. Default value is false. If compression is enabled, the content transferred from the CDN endpoint to the end user will be compressed. The requested content must be larger than 1 byte and smaller than 1 MB.
* **isHttpAllowed**: bool: Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
* **isHttpsAllowed**: bool: Indicates whether https traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
* **originHostHeader**: string: The host header CDN provider will send along with content requests to origins. The default value is the host name of the origin.
* **originPath**: string: The path used for origin requests.
* **origins**: [DeepCreatedOrigin](#deepcreatedorigin)[] (Required): The set of origins for the CDN endpoint. When multiple origins exist, the first origin will be used as primary and rest will be used as failover options.
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning status of the endpoint.
* **queryStringCachingBehavior**: 'BypassCaching' | 'IgnoreQueryString' | 'NotSet' | 'UseQueryString': Defines the query string caching behavior.
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): Resource status of the endpoint.

## OriginPropertiesParameters
### Properties
* **hostName**: string (Required): The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
* **httpPort**: int: The value of the HTTP port. Must be between 1 and 65535.
* **httpsPort**: int: The value of the HTTPS port. Must be between 1 and 65535.
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning status of the origin.
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly): Resource status of the origin.

## ProfileCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProfileProperties
### Properties
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning status of the profile.
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' (ReadOnly): Resource status of the profile.

## Sku
### Properties
* **name**: 'Custom_Verizon' | 'Premium_Verizon' | 'Standard_Akamai' | 'Standard_Verizon': Name of the pricing tier

