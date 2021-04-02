# Microsoft.Cdn @ 2016-10-02

## Resource Microsoft.Cdn/profiles@2016-10-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProfileProperties](#profileproperties): The JSON object that contains the properties required to create a profile.
* **sku**: [Sku](#sku) (Required): The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints@2016-10-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointProperties](#endpointproperties): The JSON object that contains the properties required to create an endpoint.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints/customDomains@2016-10-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-10-02' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomDomainPropertiesParameters](#customdomainpropertiesparameters): The JSON object that contains the properties of the custom domain to create.
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant): The resource type

## ProfileProperties
### Properties
* **provisioningState**: string (ReadOnly): Provisioning status of the profile.
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' (ReadOnly): Resource status of the profile. Possible values include: 'Creating', 'Active', 'Deleting', 'Disabled'

## Sku
### Properties
* **name**: 'Custom_Verizon' | 'Premium_Verizon' | 'Standard_Akamai' | 'Standard_ChinaCdn' | 'Standard_Verizon': Name of the pricing tier. Possible values include: 'Standard_Verizon', 'Premium_Verizon', 'Custom_Verizon', 'Standard_Akamai', 'Standard_ChinaCdn'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointProperties
### Properties
* **contentTypesToCompress**: string[]: List of content types on which compression applies. The value should be a valid MIME type.
* **geoFilters**: [GeoFilter](#geofilter)[]: List of rules defining user geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/
* **hostName**: string (ReadOnly): The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g. contoso.azureedge.net
* **isCompressionEnabled**: bool: Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
* **isHttpAllowed**: bool: Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
* **isHttpsAllowed**: bool: Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
* **optimizationType**: 'DynamicSiteAcceleration' | 'GeneralMediaStreaming' | 'GeneralWebDelivery' | 'LargeFileDownload' | 'VideoOnDemandMediaStreaming': Customer can specify what scenario they want this CDN endpoint to optimize, e.g. Download, Media services. With this information we can apply scenario driven optimization. Possible values include: 'GeneralWebDelivery', 'GeneralMediaStreaming', 'VideoOnDemandMediaStreaming', 'LargeFileDownload', 'DynamicSiteAcceleration'
* **originHostHeader**: string: The host header CDN sends along with content requests to origin. The default value is the host name of the origin.
* **originPath**: string: The path used when CDN sends request to origin.
* **origins**: [DeepCreatedOrigin](#deepcreatedorigin)[] (Required): The source of the content being delivered via CDN.
* **provisioningState**: string (ReadOnly): Provisioning status of the endpoint.
* **queryStringCachingBehavior**: 'BypassCaching' | 'IgnoreQueryString' | 'NotSet' | 'UseQueryString': Defines the query string caching behavior. Possible values include: 'IgnoreQueryString', 'BypassCaching', 'UseQueryString', 'NotSet'
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): Resource status of the endpoint. Possible values include: 'Creating', 'Deleting', 'Running', 'Starting', 'Stopped', 'Stopping'

## GeoFilter
### Properties
* **action**: 'Allow' | 'Block' (Required): Action of the geo filter, i.e. allow or block access. Possible values include: 'Block', 'Allow'
* **countryCodes**: string[] (Required): Two letter country codes defining user country access in a geo filter, e.g. AU, MX, US.
* **relativePath**: string (Required): Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.)

## DeepCreatedOrigin
### Properties
* **name**: string (Required): Origin name
* **properties**: [DeepCreatedOriginProperties](#deepcreatedoriginproperties): Properties of origin Properties of the origin created on the CDN endpoint.

## DeepCreatedOriginProperties
### Properties
* **hostName**: string (Required): The address of the origin. It can be a domain names, IPv4 address, or IPv6 address.
* **httpPort**: int: The value of the HTTP port. Must be between 1 and 65535
* **httpsPort**: int: The value of the HTTPS port. Must be between 1 and 65535

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomDomainPropertiesParameters
### Properties
* **customHttpsProvisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' (ReadOnly): Provisioning state of Custom Https of the custom domain. Possible values include: 'Enabling', 'Enabled', 'Disabling', 'Disabled', 'Failed'
* **hostName**: string (Required): The host name of the custom domain. Must be a domain name.
* **provisioningState**: string (ReadOnly): Provisioning status of the custom domain.
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly): Resource status of the custom domain. Possible values include: 'Creating', 'Active', 'Deleting'
* **validationData**: string (ReadOnly): Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

