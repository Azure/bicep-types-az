# Microsoft.Cdn @ 2020-04-15

## Resource Microsoft.Cdn/CdnWebApplicationFirewallPolicies@2020-04-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CdnWebApplicationFirewallPolicyProperties](#cdnwebapplicationfirewallpolicyproperties): Defines CDN web application firewall policy properties.
* **sku**: [Sku](#sku) (Required): The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Cdn/CdnWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles@2020-04-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProfileProperties](#profileproperties): The JSON object that contains the properties required to create a profile.
* **sku**: [Sku](#sku) (Required): The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints@2020-04-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointProperties](#endpointproperties): The JSON object that contains the properties required to create an endpoint.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints/customDomains@2020-04-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomDomainPropertiesParameters](#customdomainpropertiesparameters): The JSON object that contains the properties of the custom domain to create.
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints/originGroups@2020-04-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OriginGroupProperties](#origingroupproperties): The JSON object that contains the properties of the origin group.
* **type**: 'Microsoft.Cdn/profiles/endpoints/originGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints/origins@2020-04-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OriginProperties](#originproperties): The JSON object that contains the properties of the origin.
* **type**: 'Microsoft.Cdn/profiles/endpoints/origins' (ReadOnly, DeployTimeConstant): The resource type

## CdnWebApplicationFirewallPolicyProperties
### Properties
* **customRules**: [CustomRuleList](#customrulelist): Defines contents of custom rules
* **endpointLinks**: [CdnEndpoint](#cdnendpoint)[] (ReadOnly): Describes Azure CDN endpoints associated with this Web Application Firewall policy.
* **managedRules**: [ManagedRuleSetList](#managedrulesetlist): Defines the list of managed rule sets for the policy.
* **policySettings**: [policySettings](#policysettings): Defines contents of a web application firewall global configuration
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' (ReadOnly): Provisioning state of the WebApplicationFirewallPolicy. Possible values include: 'Creating', 'Succeeded', 'Failed'
* **rateLimitRules**: [RateLimitRuleList](#ratelimitrulelist): Defines contents of rate limit rules
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly): Possible values include: 'Creating', 'Enabling', 'Enabled', 'Disabling', 'Disabled', 'Deleting'

## CustomRuleList
### Properties
* **rules**: [CustomRule](#customrule)[]: List of rules

## CustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' (Required): Describes what action to be applied when rule matches. Possible values include: 'Allow', 'Block', 'Log', 'Redirect'
* **enabledState**: 'Disabled' | 'Enabled': Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified. Possible values include: 'Disabled', 'Enabled'
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required): List of match conditions.
* **name**: string (Required): Defines the name of the custom rule
* **priority**: int (Required): Defines in what order this rule be evaluated in the overall list of custom rules

## MatchCondition
### Properties
* **matchValue**: string[] (Required): List of possible match values.
* **matchVariable**: 'Cookies' | 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestHeader' | 'RequestMethod' | 'RequestUri' | 'SocketAddr' (Required): Match variable to compare against. Possible values include: 'RemoteAddr', 'SocketAddr', 'RequestMethod', 'RequestHeader', 'RequestUri', 'QueryString', 'RequestBody', 'Cookies', 'PostArgs'
* **negateCondition**: bool: Describes if the result of this condition should be negated.
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required): Describes operator to be matched. Possible values include: 'Any', 'IPMatch', 'GeoMatch', 'Equal', 'Contains', 'LessThan', 'GreaterThan', 'LessThanOrEqual', 'GreaterThanOrEqual', 'BeginsWith', 'EndsWith', 'RegEx'
* **selector**: string: Selector can used to match a specific key for QueryString, Cookies, RequestHeader or PostArgs.
* **transforms**: 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode'[]: List of transforms.

## CdnEndpoint
### Properties
* **id**: string: ARM Resource ID string.

## ManagedRuleSetList
### Properties
* **managedRuleSets**: [ManagedRuleSet](#managedruleset)[]: List of rule sets.

## ManagedRuleSet
### Properties
* **anomalyScore**: int: Verizon only : If the rule set supports anomaly detection mode, this describes the threshold for blocking requests.
* **ruleGroupOverrides**: [ManagedRuleGroupOverride](#managedrulegroupoverride)[]: Defines the rule overrides to apply to the rule set.
* **ruleSetType**: string (Required): Defines the rule set type to use.
* **ruleSetVersion**: string (Required): Defines the version of the rule set to use.

## ManagedRuleGroupOverride
### Properties
* **ruleGroupName**: string (Required): Describes the managed rule group within the rule set to override
* **rules**: [ManagedRuleOverride](#managedruleoverride)[]: List of rules that will be disabled. If none specified, all rules in the group will be disabled.

## ManagedRuleOverride
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect': Describes the override action to be applied when rule matches. Possible values include: 'Allow', 'Block', 'Log', 'Redirect'
* **enabledState**: 'Disabled' | 'Enabled': Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified. Possible values include: 'Disabled', 'Enabled'
* **ruleId**: string (Required): Identifier for the managed rule.

## policySettings
### Properties
* **defaultCustomBlockResponseBody**: string: If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
* **defaultCustomBlockResponseStatusCode**: int: If the action type is block, this field defines the default customer overridable http response status code.
* **defaultRedirectUrl**: string: If action type is redirect, this field represents the default redirect URL for the client.
* **enabledState**: 'Disabled' | 'Enabled': describes if the policy is in enabled state or disabled state. Possible values include: 'Disabled', 'Enabled'
* **mode**: 'Detection' | 'Prevention': Describes if it is in detection mode or prevention mode at policy level. Possible values include: 'Prevention', 'Detection'

## RateLimitRuleList
### Properties
* **rules**: [RateLimitRule](#ratelimitrule)[]: List of rules

## RateLimitRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' (Required): Describes what action to be applied when rule matches. Possible values include: 'Allow', 'Block', 'Log', 'Redirect'
* **enabledState**: 'Disabled' | 'Enabled': Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified. Possible values include: 'Disabled', 'Enabled'
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required): List of match conditions.
* **name**: string (Required): Defines the name of the custom rule
* **priority**: int (Required): Defines in what order this rule be evaluated in the overall list of custom rules
* **rateLimitDurationInMinutes**: int (Required): Defines rate limit duration. Default is 1 minute.
* **rateLimitThreshold**: int (Required): Defines rate limit threshold.

## Sku
### Properties
* **name**: 'Custom_Verizon' | 'Premium_ChinaCdn' | 'Premium_Verizon' | 'Standard_Akamai' | 'Standard_ChinaCdn' | 'Standard_Microsoft' | 'Standard_Verizon': Name of the pricing tier. Possible values include: 'Standard_Verizon', 'Premium_Verizon', 'Custom_Verizon', 'Standard_Akamai', 'Standard_ChinaCdn', 'Standard_Microsoft', 'Premium_ChinaCdn'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProfileProperties
### Properties
* **provisioningState**: string (ReadOnly): Provisioning status of the profile.
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' (ReadOnly): Resource status of the profile. Possible values include: 'Creating', 'Active', 'Deleting', 'Disabled'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointProperties
### Properties
* **contentTypesToCompress**: string[]: List of content types on which compression applies. The value should be a valid MIME type.
* **defaultOriginGroup**: [ResourceReference](#resourcereference): Reference to another resource.
* **deliveryPolicy**: [schemas:10_deliveryPolicy](#schemas10deliverypolicy): A policy that specifies the delivery rules to be used for an endpoint.
* **geoFilters**: [GeoFilter](#geofilter)[]: List of rules defining the user's geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/
* **hostName**: string (ReadOnly): The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g. contoso.azureedge.net
* **isCompressionEnabled**: bool: Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
* **isHttpAllowed**: bool: Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
* **isHttpsAllowed**: bool: Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
* **optimizationType**: 'DynamicSiteAcceleration' | 'GeneralMediaStreaming' | 'GeneralWebDelivery' | 'LargeFileDownload' | 'VideoOnDemandMediaStreaming': Specifies what scenario the customer wants this CDN endpoint to optimize for, e.g. Download, Media services. With this information, CDN can apply scenario driven optimization. Possible values include: 'GeneralWebDelivery', 'GeneralMediaStreaming', 'VideoOnDemandMediaStreaming', 'LargeFileDownload', 'DynamicSiteAcceleration'
* **originGroups**: [DeepCreatedOriginGroup](#deepcreatedorigingroup)[]: The origin groups comprising of origins that are used for load balancing the traffic based on availability.
* **originHostHeader**: string: The host header value sent to the origin with each request. This property at Endpoint is only allowed when endpoint uses single origin and can be overridden by the same property specified at origin.If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
* **originPath**: string: A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
* **origins**: [DeepCreatedOrigin](#deepcreatedorigin)[] (Required): The source of the content being delivered via CDN.
* **probePath**: string: Path to a file hosted on the origin which helps accelerate delivery of the dynamic content and calculate the most optimal routes for the CDN. This is relative to the origin path. This property is only relevant when using a single origin.
* **provisioningState**: string (ReadOnly): Provisioning status of the endpoint.
* **queryStringCachingBehavior**: 'BypassCaching' | 'IgnoreQueryString' | 'NotSet' | 'UseQueryString': Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL. Possible values include: 'IgnoreQueryString', 'BypassCaching', 'UseQueryString', 'NotSet'
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): Resource status of the endpoint. Possible values include: 'Creating', 'Deleting', 'Running', 'Starting', 'Stopped', 'Stopping'
* **urlSigningKeys**: [UrlSigningKey](#urlsigningkey)[]: List of keys used to validate the signed URL hashes.
* **webApplicationFirewallPolicyLink**: [schemas:10_webApplicationFirewallPolicyLink](#schemas10webapplicationfirewallpolicylink): Defines the Web Application Firewall policy for the endpoint (if applicable)

## ResourceReference
### Properties
* **id**: string: Resource ID.

## schemas:10_deliveryPolicy
### Properties
* **description**: string: User-friendly description of the policy.
* **rules**: [DeliveryRule](#deliveryrule)[] (Required): A list of the delivery rules.

## DeliveryRule
### Properties
* **actions**: [DeliveryRuleAction](#deliveryruleaction)[] (Required): A list of actions that are executed when all the conditions of a rule are satisfied.
* **conditions**: [DeliveryRuleCondition](#deliveryrulecondition)[]: A list of conditions that must be matched for the actions to be executed
* **name**: string: Name of the rule
* **order**: int (Required): The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.

## DeliveryRuleAction
* **Discriminator**: name
### Base Properties
### CacheExpiration
#### Properties
* **name**: 'CacheExpiration' (Required): Defines the cache expiration action for the delivery rule.
* **parameters**: [CacheExpirationActionParameters](#cacheexpirationactionparameters) (Required): Defines the parameters for the cache expiration action.

### CacheKeyQueryString
#### Properties
* **name**: 'CacheKeyQueryString' (Required): Defines the cache-key query string action for the delivery rule.
* **parameters**: [CacheKeyQueryStringActionParameters](#cachekeyquerystringactionparameters) (Required): Defines the parameters for the cache-key query string action.

### ModifyRequestHeader
#### Properties
* **name**: 'ModifyRequestHeader' (Required): Defines the request header action for the delivery rule.
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required): Defines the parameters for the request header action.

### ModifyResponseHeader
#### Properties
* **name**: 'ModifyResponseHeader' (Required): Defines the response header action for the delivery rule.
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required): Defines the parameters for the request header action.

### UrlRedirect
#### Properties
* **name**: 'UrlRedirect' (Required): Defines the url redirect action for the delivery rule.
* **parameters**: [UrlRedirectActionParameters](#urlredirectactionparameters) (Required): Defines the parameters for the url redirect action.

### UrlRewrite
#### Properties
* **name**: 'UrlRewrite' (Required): Defines the url rewrite action for the delivery rule.
* **parameters**: [UrlRewriteActionParameters](#urlrewriteactionparameters) (Required): Defines the parameters for the url rewrite action.

### UrlSigning
#### Properties
* **name**: 'UrlSigning' (Required): Defines the url signing action for the delivery rule.
* **parameters**: [UrlSigningActionParameters](#urlsigningactionparameters) (Required): Defines the parameters for the Url Signing action.


## CacheExpiration
### Properties
* **name**: 'CacheExpiration' (Required): Defines the cache expiration action for the delivery rule.
* **parameters**: [CacheExpirationActionParameters](#cacheexpirationactionparameters) (Required): Defines the parameters for the cache expiration action.

## CacheExpirationActionParameters
### Properties
* **@odata.type**: string (Required):
* **cacheBehavior**: 'BypassCache' | 'Override' | 'SetIfMissing' (Required): Caching behavior for the requests. Possible values include: 'BypassCache', 'Override', 'SetIfMissing'
* **cacheDuration**: string: The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
* **cacheType**: string (Required): The level at which the content needs to be cached.

## CacheKeyQueryString
### Properties
* **name**: 'CacheKeyQueryString' (Required): Defines the cache-key query string action for the delivery rule.
* **parameters**: [CacheKeyQueryStringActionParameters](#cachekeyquerystringactionparameters) (Required): Defines the parameters for the cache-key query string action.

## CacheKeyQueryStringActionParameters
### Properties
* **@odata.type**: string (Required):
* **queryParameters**: string: query parameters to include or exclude (comma separated).
* **queryStringBehavior**: 'Exclude' | 'ExcludeAll' | 'Include' | 'IncludeAll' (Required): Caching behavior for the requests. Possible values include: 'Include', 'IncludeAll', 'Exclude', 'ExcludeAll'

## ModifyRequestHeader
### Properties
* **name**: 'ModifyRequestHeader' (Required): Defines the request header action for the delivery rule.
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required): Defines the parameters for the request header action.

## HeaderActionParameters
### Properties
* **@odata.type**: string (Required):
* **headerAction**: 'Append' | 'Delete' | 'Overwrite' (Required): Action to perform. Possible values include: 'Append', 'Overwrite', 'Delete'
* **headerName**: string (Required): Name of the header to modify
* **value**: string: Value for the specified action

## ModifyResponseHeader
### Properties
* **name**: 'ModifyResponseHeader' (Required): Defines the response header action for the delivery rule.
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required): Defines the parameters for the request header action.

## UrlRedirect
### Properties
* **name**: 'UrlRedirect' (Required): Defines the url redirect action for the delivery rule.
* **parameters**: [UrlRedirectActionParameters](#urlredirectactionparameters) (Required): Defines the parameters for the url redirect action.

## UrlRedirectActionParameters
### Properties
* **@odata.type**: string (Required):
* **customFragment**: string: Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
* **customHostname**: string: Host to redirect. Leave empty to use the incoming host as the destination host.
* **customPath**: string: The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
* **customQueryString**: string: The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in <key>=<value> format. ? and & will be added automatically so do not include them.
* **destinationProtocol**: 'Http' | 'Https' | 'MatchRequest': Protocol to use for the redirect. The default value is MatchRequest. Possible values include: 'MatchRequest', 'Http', 'Https'
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect' (Required): The redirect type the rule will use when redirecting traffic. Possible values include: 'Moved', 'Found', 'TemporaryRedirect', 'PermanentRedirect'

## UrlRewrite
### Properties
* **name**: 'UrlRewrite' (Required): Defines the url rewrite action for the delivery rule.
* **parameters**: [UrlRewriteActionParameters](#urlrewriteactionparameters) (Required): Defines the parameters for the url rewrite action.

## UrlRewriteActionParameters
### Properties
* **@odata.type**: string (Required):
* **destination**: string (Required): Define the relative URL to which the above requests will be rewritten by.
* **preserveUnmatchedPath**: bool: Whether to preserve unmatched path. Default value is true.
* **sourcePattern**: string (Required): define a request URI pattern that identifies the type of requests that may be rewritten. If value is blank, all strings are matched.

## UrlSigning
### Properties
* **name**: 'UrlSigning' (Required): Defines the url signing action for the delivery rule.
* **parameters**: [UrlSigningActionParameters](#urlsigningactionparameters) (Required): Defines the parameters for the Url Signing action.

## UrlSigningActionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlSigningActionParameters': Possible values include: '#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlSigningActionParameters'
* **algorithm**: 'SHA256': Algorithm to use for URL signing. Possible values include: 'SHA256'
* **ipSubnets**: string[]: Match values to match against. Supports CIDR ranges (both IPv4 and IPv6).
* **keyId**: string (Required): Id reference of the key to be used to verify the hash and should be defined in UrlSigningKeys
* **parameterNameOverride**: [UrlSigningParamIdentifier](#urlsigningparamidentifier)[]: Defines which query string parameters in the url to be considered for expires, key id etc.

## UrlSigningParamIdentifier
### Properties
* **paramIndicator**: 'Expires' | 'KeyId' | 'Signature' (Required): Indicates the purpose of the parameter. Possible values include: 'Expires', 'KeyId', 'Signature'
* **paramName**: string (Required): Parameter name

## DeliveryRuleCondition
* **Discriminator**: name
### Base Properties
### Cookies
#### Properties
* **name**: 'Cookies' (Required): Defines the Cookies condition for the delivery rule.
* **parameters**: [CookiesMatchConditionParameters](#cookiesmatchconditionparameters) (Required): Defines the parameters for Cookies match conditions

### HttpVersion
#### Properties
* **name**: 'HttpVersion' (Required): Defines the HttpVersion condition for the delivery rule.
* **parameters**: [HttpVersionMatchConditionParameters](#httpversionmatchconditionparameters) (Required): Defines the parameters for HttpVersion match conditions

### IsDevice
#### Properties
* **name**: 'IsDevice' (Required): Defines the IsDevice condition for the delivery rule.
* **parameters**: [IsDeviceMatchConditionParameters](#isdevicematchconditionparameters) (Required): Defines the parameters for IsDevice match conditions

### PostArgs
#### Properties
* **name**: 'PostArgs' (Required): Defines the PostArgs condition for the delivery rule.
* **parameters**: [PostArgsMatchConditionParameters](#postargsmatchconditionparameters) (Required): Defines the parameters for PostArgs match conditions

### QueryString
#### Properties
* **name**: 'QueryString' (Required): Defines the QueryString condition for the delivery rule.
* **parameters**: [QueryStringMatchConditionParameters](#querystringmatchconditionparameters) (Required): Defines the parameters for QueryString match conditions

### RemoteAddress
#### Properties
* **name**: 'RemoteAddress' (Required): Defines the RemoteAddress condition for the delivery rule.
* **parameters**: [RemoteAddressMatchConditionParameters](#remoteaddressmatchconditionparameters) (Required): Defines the parameters for RemoteAddress match conditions

### RequestBody
#### Properties
* **name**: 'RequestBody' (Required): Defines the RequestBody condition for the delivery rule.
* **parameters**: [RequestBodyMatchConditionParameters](#requestbodymatchconditionparameters) (Required): Defines the parameters for RequestBody match conditions

### RequestHeader
#### Properties
* **name**: 'RequestHeader' (Required): Defines the RequestHeader condition for the delivery rule.
* **parameters**: [RequestHeaderMatchConditionParameters](#requestheadermatchconditionparameters) (Required): Defines the parameters for RequestHeader match conditions

### RequestMethod
#### Properties
* **name**: 'RequestMethod' (Required): Defines the RequestMethod condition for the delivery rule.
* **parameters**: [RequestMethodMatchConditionParameters](#requestmethodmatchconditionparameters) (Required): Defines the parameters for RequestMethod match conditions

### RequestScheme
#### Properties
* **name**: 'RequestScheme' (Required): Defines the RequestScheme condition for the delivery rule.
* **parameters**: [RequestSchemeMatchConditionParameters](#requestschemematchconditionparameters) (Required): Defines the parameters for RequestScheme match conditions

### RequestUri
#### Properties
* **name**: 'RequestUri' (Required): Defines the RequestUri condition for the delivery rule.
* **parameters**: [RequestUriMatchConditionParameters](#requesturimatchconditionparameters) (Required): Defines the parameters for RequestUri match conditions

### UrlFileExtension
#### Properties
* **name**: 'UrlFileExtension' (Required): Defines the UrlFileExtension condition for the delivery rule.
* **parameters**: [UrlFileExtensionMatchConditionParameters](#urlfileextensionmatchconditionparameters) (Required): Defines the parameters for UrlFileExtension match conditions

### UrlFileName
#### Properties
* **name**: 'UrlFileName' (Required): Defines the UrlFileName condition for the delivery rule.
* **parameters**: [UrlFileNameMatchConditionParameters](#urlfilenamematchconditionparameters) (Required): Defines the parameters for UrlFilename match conditions

### UrlPath
#### Properties
* **name**: 'UrlPath' (Required): Defines the UrlPath condition for the delivery rule.
* **parameters**: [UrlPathMatchConditionParameters](#urlpathmatchconditionparameters) (Required): Defines the parameters for UrlPath match conditions


## Cookies
### Properties
* **name**: 'Cookies' (Required): Defines the Cookies condition for the delivery rule.
* **parameters**: [CookiesMatchConditionParameters](#cookiesmatchconditionparameters) (Required): Defines the parameters for Cookies match conditions

## CookiesMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required): Describes operator to be matched. Possible values include: 'Any', 'Equal', 'Contains', 'BeginsWith', 'EndsWith', 'LessThan', 'LessThanOrEqual', 'GreaterThan', 'GreaterThanOrEqual'
* **selector**: string: Name of Cookies to be matched
* **transforms**: 'Lowercase' | 'Uppercase'[]: List of transforms

## HttpVersion
### Properties
* **name**: 'HttpVersion' (Required): Defines the HttpVersion condition for the delivery rule.
* **parameters**: [HttpVersionMatchConditionParameters](#httpversionmatchconditionparameters) (Required): Defines the parameters for HttpVersion match conditions

## HttpVersionMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: string (Required): Describes operator to be matched

## IsDevice
### Properties
* **name**: 'IsDevice' (Required): Defines the IsDevice condition for the delivery rule.
* **parameters**: [IsDeviceMatchConditionParameters](#isdevicematchconditionparameters) (Required): Defines the parameters for IsDevice match conditions

## IsDeviceMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: 'Desktop' | 'Mobile'[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: string (Required): Describes operator to be matched
* **transforms**: 'Lowercase' | 'Uppercase'[]: List of transforms

## PostArgs
### Properties
* **name**: 'PostArgs' (Required): Defines the PostArgs condition for the delivery rule.
* **parameters**: [PostArgsMatchConditionParameters](#postargsmatchconditionparameters) (Required): Defines the parameters for PostArgs match conditions

## PostArgsMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required): Describes operator to be matched. Possible values include: 'Any', 'Equal', 'Contains', 'BeginsWith', 'EndsWith', 'LessThan', 'LessThanOrEqual', 'GreaterThan', 'GreaterThanOrEqual'
* **selector**: string: Name of PostArg to be matched
* **transforms**: 'Lowercase' | 'Uppercase'[]: List of transforms

## QueryString
### Properties
* **name**: 'QueryString' (Required): Defines the QueryString condition for the delivery rule.
* **parameters**: [QueryStringMatchConditionParameters](#querystringmatchconditionparameters) (Required): Defines the parameters for QueryString match conditions

## QueryStringMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required): Describes operator to be matched. Possible values include: 'Any', 'Equal', 'Contains', 'BeginsWith', 'EndsWith', 'LessThan', 'LessThanOrEqual', 'GreaterThan', 'GreaterThanOrEqual'
* **transforms**: 'Lowercase' | 'Uppercase'[]: List of transforms

## RemoteAddress
### Properties
* **name**: 'RemoteAddress' (Required): Defines the RemoteAddress condition for the delivery rule.
* **parameters**: [RemoteAddressMatchConditionParameters](#remoteaddressmatchconditionparameters) (Required): Defines the parameters for RemoteAddress match conditions

## RemoteAddressMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: string[]: Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match.
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'GeoMatch' | 'IPMatch' (Required): Describes operator to be matched. Possible values include: 'Any', 'IPMatch', 'GeoMatch'
* **transforms**: 'Lowercase' | 'Uppercase'[]: List of transforms

## RequestBody
### Properties
* **name**: 'RequestBody' (Required): Defines the RequestBody condition for the delivery rule.
* **parameters**: [RequestBodyMatchConditionParameters](#requestbodymatchconditionparameters) (Required): Defines the parameters for RequestBody match conditions

## RequestBodyMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required): Describes operator to be matched. Possible values include: 'Any', 'Equal', 'Contains', 'BeginsWith', 'EndsWith', 'LessThan', 'LessThanOrEqual', 'GreaterThan', 'GreaterThanOrEqual'
* **transforms**: 'Lowercase' | 'Uppercase'[]: List of transforms

## RequestHeader
### Properties
* **name**: 'RequestHeader' (Required): Defines the RequestHeader condition for the delivery rule.
* **parameters**: [RequestHeaderMatchConditionParameters](#requestheadermatchconditionparameters) (Required): Defines the parameters for RequestHeader match conditions

## RequestHeaderMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required): Describes operator to be matched. Possible values include: 'Any', 'Equal', 'Contains', 'BeginsWith', 'EndsWith', 'LessThan', 'LessThanOrEqual', 'GreaterThan', 'GreaterThanOrEqual'
* **selector**: string: Name of Header to be matched
* **transforms**: 'Lowercase' | 'Uppercase'[]: List of transforms

## RequestMethod
### Properties
* **name**: 'RequestMethod' (Required): Defines the RequestMethod condition for the delivery rule.
* **parameters**: [RequestMethodMatchConditionParameters](#requestmethodmatchconditionparameters) (Required): Defines the parameters for RequestMethod match conditions

## RequestMethodMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'TRACE'[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: string (Required): Describes operator to be matched

## RequestScheme
### Properties
* **name**: 'RequestScheme' (Required): Defines the RequestScheme condition for the delivery rule.
* **parameters**: [RequestSchemeMatchConditionParameters](#requestschemematchconditionparameters) (Required): Defines the parameters for RequestScheme match conditions

## RequestSchemeMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: 'HTTP' | 'HTTPS'[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: string (Required): Describes operator to be matched

## RequestUri
### Properties
* **name**: 'RequestUri' (Required): Defines the RequestUri condition for the delivery rule.
* **parameters**: [RequestUriMatchConditionParameters](#requesturimatchconditionparameters) (Required): Defines the parameters for RequestUri match conditions

## RequestUriMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required): Describes operator to be matched. Possible values include: 'Any', 'Equal', 'Contains', 'BeginsWith', 'EndsWith', 'LessThan', 'LessThanOrEqual', 'GreaterThan', 'GreaterThanOrEqual'
* **transforms**: 'Lowercase' | 'Uppercase'[]: List of transforms

## UrlFileExtension
### Properties
* **name**: 'UrlFileExtension' (Required): Defines the UrlFileExtension condition for the delivery rule.
* **parameters**: [UrlFileExtensionMatchConditionParameters](#urlfileextensionmatchconditionparameters) (Required): Defines the parameters for UrlFileExtension match conditions

## UrlFileExtensionMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required): Describes operator to be matched. Possible values include: 'Any', 'Equal', 'Contains', 'BeginsWith', 'EndsWith', 'LessThan', 'LessThanOrEqual', 'GreaterThan', 'GreaterThanOrEqual'
* **transforms**: 'Lowercase' | 'Uppercase'[]: List of transforms

## UrlFileName
### Properties
* **name**: 'UrlFileName' (Required): Defines the UrlFileName condition for the delivery rule.
* **parameters**: [UrlFileNameMatchConditionParameters](#urlfilenamematchconditionparameters) (Required): Defines the parameters for UrlFilename match conditions

## UrlFileNameMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required): Describes operator to be matched. Possible values include: 'Any', 'Equal', 'Contains', 'BeginsWith', 'EndsWith', 'LessThan', 'LessThanOrEqual', 'GreaterThan', 'GreaterThanOrEqual'
* **transforms**: 'Lowercase' | 'Uppercase'[]: List of transforms

## UrlPath
### Properties
* **name**: 'UrlPath' (Required): Defines the UrlPath condition for the delivery rule.
* **parameters**: [UrlPathMatchConditionParameters](#urlpathmatchconditionparameters) (Required): Defines the parameters for UrlPath match conditions

## UrlPathMatchConditionParameters
### Properties
* **@odata.type**: string (Required):
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'Wildcard' (Required): Describes operator to be matched. Possible values include: 'Any', 'Equal', 'Contains', 'BeginsWith', 'EndsWith', 'LessThan', 'LessThanOrEqual', 'GreaterThan', 'GreaterThanOrEqual', 'Wildcard'
* **transforms**: 'Lowercase' | 'Uppercase'[]: List of transforms

## GeoFilter
### Properties
* **action**: 'Allow' | 'Block' (Required): Action of the geo filter, i.e. allow or block access. Possible values include: 'Block', 'Allow'
* **countryCodes**: string[] (Required): Two letter country codes defining user country access in a geo filter, e.g. AU, MX, US.
* **relativePath**: string (Required): Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.)

## DeepCreatedOriginGroup
### Properties
* **name**: string (Required): Origin group name which must be unique within the endpoint.
* **properties**: [DeepCreatedOriginGroupProperties](#deepcreatedorigingroupproperties): Properties of the origin group created on the CDN endpoint.

## DeepCreatedOriginGroupProperties
### Properties
* **healthProbeSettings**: [HealthProbeParameters](#healthprobeparameters): The JSON object that contains the properties to send health probes to origin.
* **origins**: [ResourceReference](#resourcereference)[] (Required): The source of the content being delivered via CDN within given origin group.
* **responseBasedOriginErrorDetectionSettings**: [ResponseBasedOriginErrorDetectionParameters](#responsebasedoriginerrordetectionparameters): The JSON object that contains the properties to determine origin health using real requests/responses.
* **trafficRestorationTimeToHealedOrNewEndpointsInMinutes**: int: Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.

## HealthProbeParameters
### Properties
* **probeIntervalInSeconds**: int: The number of seconds between health probes.Default is 240sec.
* **probePath**: string: The path relative to the origin that is used to determine the health of the origin.
* **probeProtocol**: 'Http' | 'Https' | 'NotSet': Protocol to use for health probe. Possible values include: 'NotSet', 'Http', 'Https'
* **probeRequestType**: 'GET' | 'HEAD' | 'NotSet': The type of health probe request that is made. Possible values include: 'NotSet', 'GET', 'HEAD'

## ResponseBasedOriginErrorDetectionParameters
### Properties
* **httpErrorRanges**: [HttpErrorRangeParameters](#httperrorrangeparameters)[]: The list of Http status code ranges that are considered as server errors for origin and it is marked as unhealthy.
* **responseBasedDetectedErrorTypes**: 'None' | 'TcpAndHttpErrors' | 'TcpErrorsOnly': Type of response errors for real user requests for which origin will be deemed unhealthy. Possible values include: 'None', 'TcpErrorsOnly', 'TcpAndHttpErrors'
* **responseBasedFailoverThresholdPercentage**: int: The percentage of failed requests in the sample where failover should trigger.

## HttpErrorRangeParameters
### Properties
* **begin**: int: The inclusive start of the http status code range.
* **end**: int: The inclusive end of the http status code range.

## DeepCreatedOrigin
### Properties
* **name**: string (Required): Origin name which must be unique within the endpoint.
* **properties**: [DeepCreatedOriginProperties](#deepcreatedoriginproperties): Properties of the origin created on the CDN endpoint.

## DeepCreatedOriginProperties
### Properties
* **enabled**: bool: Origin is enabled for load balancing or not. By default, origin is always enabled.
* **hostName**: string (Required): The address of the origin. It can be a domain name, IPv4 address, or IPv6 address. This should be unique across all origins in an endpoint.
* **httpPort**: int: The value of the HTTP port. Must be between 1 and 65535.
* **httpsPort**: int: The value of the HTTPS port. Must be between 1 and 65535.
* **originHostHeader**: string: The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
* **priority**: int: Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5.
* **privateLinkAlias**: string: The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
* **privateLinkApprovalMessage**: string: A custom message to be included in the approval request to connect to the Private Link.
* **privateLinkLocation**: string: The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
* **privateLinkResourceId**: string: The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
* **weight**: int: Weight of the origin in given origin group for load balancing. Must be between 1 and 1000

## UrlSigningKey
### Properties
* **keyId**: string (Required): Defines the customer defined key Id. This id will exist in the incoming request to indicate the key used to form the hash.
* **keySourceParameters**: [KeyVaultSigningKeyParameters](#keyvaultsigningkeyparameters) (Required): Describes the parameters for using a user's KeyVault for URL Signing Key.

## KeyVaultSigningKeyParameters
### Properties
* **@odata.type**: string (Required):
* **resourceGroupName**: string (Required): Resource group of the user's Key Vault containing the secret
* **secretName**: string (Required): The name of secret in Key Vault.
* **secretVersion**: string (Required): The version(GUID) of secret in Key Vault.
* **subscriptionId**: string (Required): Subscription Id of the user's Key Vault containing the secret
* **vaultName**: string (Required): The name of the user's Key Vault containing the secret

## schemas:10_webApplicationFirewallPolicyLink
### Properties
* **id**: string: Resource ID.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomDomainPropertiesParameters
### Properties
* **customHttpsProvisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' (ReadOnly): Provisioning status of Custom Https of the custom domain. Possible values include: 'Enabling', 'Enabled', 'Disabling', 'Disabled', 'Failed'
* **customHttpsProvisioningSubstate**: 'CertificateDeleted' | 'CertificateDeployed' | 'DeletingCertificate' | 'DeployingCertificate' | 'DomainControlValidationRequestApproved' | 'DomainControlValidationRequestRejected' | 'DomainControlValidationRequestTimedOut' | 'IssuingCertificate' | 'PendingDomainControlValidationREquestApproval' | 'SubmittingDomainControlValidationRequest' (ReadOnly): Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step. Possible values include: 'SubmittingDomainControlValidationRequest', 'PendingDomainControlValidationREquestApproval', 'DomainControlValidationRequestApproved', 'DomainControlValidationRequestRejected', 'DomainControlValidationRequestTimedOut', 'IssuingCertificate', 'DeployingCertificate', 'CertificateDeployed', 'DeletingCertificate', 'CertificateDeleted'
* **hostName**: string (Required): The host name of the custom domain. Must be a domain name.
* **provisioningState**: string (ReadOnly): Provisioning status of the custom domain.
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly): Resource status of the custom domain. Possible values include: 'Creating', 'Active', 'Deleting'
* **validationData**: string (ReadOnly): Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.

## OriginGroupProperties
### Properties
* **healthProbeSettings**: [HealthProbeParameters](#healthprobeparameters): The JSON object that contains the properties to send health probes to origin.
* **origins**: [ResourceReference](#resourcereference)[]: The source of the content being delivered via CDN within given origin group.
* **provisioningState**: string (ReadOnly): Provisioning status of the origin group.
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly): Resource status of the origin group. Possible values include: 'Creating', 'Active', 'Deleting'
* **responseBasedOriginErrorDetectionSettings**: [ResponseBasedOriginErrorDetectionParameters](#responsebasedoriginerrordetectionparameters): The JSON object that contains the properties to determine origin health using real requests/responses.
* **trafficRestorationTimeToHealedOrNewEndpointsInMinutes**: int: Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.

## OriginProperties
### Properties
* **enabled**: bool: Origin is enabled for load balancing or not
* **hostName**: string: The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint.
* **httpPort**: int: The value of the HTTP port. Must be between 1 and 65535.
* **httpsPort**: int: The value of the HTTPS port. Must be between 1 and 65535.
* **originHostHeader**: string: The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
* **priority**: int: Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
* **privateEndpointStatus**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' (ReadOnly): The approval status for the connection to the Private Link. Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected', 'Timeout'
* **privateLinkAlias**: string: The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
* **privateLinkApprovalMessage**: string: A custom message to be included in the approval request to connect to the Private Link.
* **privateLinkLocation**: string: The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
* **privateLinkResourceId**: string: The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
* **provisioningState**: string (ReadOnly): Provisioning status of the origin.
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly): Resource status of the origin. Possible values include: 'Creating', 'Active', 'Deleting'
* **weight**: int: Weight of the origin in given origin group for load balancing. Must be between 1 and 1000

