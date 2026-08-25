# Microsoft.Cdn @ 2016-04-02

## Resource Microsoft.Cdn/profiles@2016-04-02
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
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
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Endpoint location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointPropertiesCreateParametersOrEndpointProperties](#endpointpropertiescreateparametersorendpointproperties)
* **tags**: [EndpointCreateParametersTags](#endpointcreateparameterstags): Endpoint tags
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints/customDomains@2016-04-02
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomDomainPropertiesParametersOrCustomDomainProperties](#customdomainpropertiesparametersorcustomdomainproperties)
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints/origins@2016-04-02
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OriginPropertiesParametersOrOriginProperties](#originpropertiesparametersororiginproperties)
* **type**: 'Microsoft.Cdn/profiles/endpoints/origins' (ReadOnly, DeployTimeConstant): The resource type

## Function generateSsoUri (Microsoft.Cdn/profiles@2016-04-02)
* **Resource**: Microsoft.Cdn/profiles
* **ApiVersion**: 2016-04-02
* **Output**: [SsoUri](#ssouri)

## Function load (Microsoft.Cdn/profiles/endpoints@2016-04-02)
* **Resource**: Microsoft.Cdn/profiles/endpoints
* **ApiVersion**: 2016-04-02
* **Input**: [LoadParameters](#loadparameters)
* **Output**: any

## Function purge (Microsoft.Cdn/profiles/endpoints@2016-04-02)
* **Resource**: Microsoft.Cdn/profiles/endpoints
* **ApiVersion**: 2016-04-02
* **Input**: [PurgeParameters](#purgeparameters)
* **Output**: any

## Function start (Microsoft.Cdn/profiles/endpoints@2016-04-02)
* **Resource**: Microsoft.Cdn/profiles/endpoints
* **ApiVersion**: 2016-04-02
* **Output**: [Endpoint](#endpoint)

## Function stop (Microsoft.Cdn/profiles/endpoints@2016-04-02)
* **Resource**: Microsoft.Cdn/profiles/endpoints
* **ApiVersion**: 2016-04-02
* **Output**: [Endpoint](#endpoint)

## Function validateCustomDomain (Microsoft.Cdn/profiles/endpoints@2016-04-02)
* **Resource**: Microsoft.Cdn/profiles/endpoints
* **ApiVersion**: 2016-04-02
* **Input**: [ValidateCustomDomainInput](#validatecustomdomaininput)
* **Output**: [ValidateCustomDomainOutput](#validatecustomdomainoutput)

## CustomDomainPropertiesParametersOrCustomDomainProperties
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

## Endpoint
### Properties
* **id**: string (ReadOnly): Resource ID
* **location**: string (Required): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [EndpointProperties](#endpointproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags) (Required): Resource tags
* **type**: string (ReadOnly): Resource type

## EndpointCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointProperties
### Properties
* **contentTypesToCompress**: string[]: List of content types on which compression will be applied. The value for the elements should be a valid MIME type.
* **hostName**: string (ReadOnly): The host name of the endpoint {endpointName}.{DNSZone}
* **isCompressionEnabled**: bool: Indicates whether the compression is enabled. Default value is false. If compression is enabled, the content transferred from cdn endpoint to end user will be compressed. The requested content must be larger than 1 byte and smaller than 1 MB.
* **isHttpAllowed**: bool: Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
* **isHttpsAllowed**: bool: Indicates whether https traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
* **originHostHeader**: string: The host header the CDN provider will send along with content requests to origins. The default value is the host name of the origin.
* **originPath**: string: The path used for origin requests.
* **origins**: [DeepCreatedOrigin](#deepcreatedorigin)[]: The set of origins for the CDN endpoint. When multiple origins exist, the first origin will be used as primary and rest will be used as failover options.
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning status of the endpoint.
* **queryStringCachingBehavior**: 'BypassCaching' | 'IgnoreQueryString' | 'NotSet' | 'UseQueryString': Defines the query string caching behavior.
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): Resource status of the endpoint.

## EndpointPropertiesCreateParametersOrEndpointProperties
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

## LoadParameters
### Properties
* **contentPaths**: string[] (Required): The path to the content to be loaded. Should describe a file path.

## OriginPropertiesParametersOrOriginProperties
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

## PurgeParameters
### Properties
* **contentPaths**: string[] (Required): The path to the content to be purged. Can describe a file path or a wild card directory.

## Sku
### Properties
* **name**: 'Custom_Verizon' | 'Premium_Verizon' | 'Standard_Akamai' | 'Standard_Verizon': Name of the pricing tier

## SsoUri
### Properties
* **ssoUriValue**: string: The URI used to login to third party web portal.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ValidateCustomDomainInput
### Properties
* **hostName**: string (Required): The host name of the custom domain. Must be a domain name.

## ValidateCustomDomainOutput
### Properties
* **customDomainValidated**: bool: Indicates whether the custom domain is validated or not.
* **message**: string: The message describing why the custom domain is not valid.
* **reason**: string: The reason why the custom domain is not valid.

