# Microsoft.Network @ 2020-11-01

## Resource Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2020-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebApplicationFirewallPolicyProperties](#webapplicationfirewallpolicyproperties)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/FrontDoorWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant)

## WebApplicationFirewallPolicyProperties
### Properties
* **customRules**: [CustomRuleList](#customrulelist)
* **frontendEndpointLinks**: [FrontendEndpointLink](#frontendendpointlink)[] (ReadOnly)
* **managedRules**: [ManagedRuleSetList](#managedrulesetlist)
* **policySettings**: [PolicySettings](#policysettings)
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)
* **routingRuleLinks**: [RoutingRuleLink](#routingrulelink)[] (ReadOnly)
* **securityPolicyLinks**: [SecurityPolicyLink](#securitypolicylink)[] (ReadOnly)

## CustomRuleList
### Properties
* **rules**: [CustomRule](#customrule)[]

## CustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' (Required)
* **enabledState**: 'Disabled' | 'Enabled'
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required)
* **name**: string
* **priority**: int (Required)
* **rateLimitDurationInMinutes**: int
* **rateLimitThreshold**: int
* **ruleType**: 'MatchRule' | 'RateLimitRule' (Required)

## MatchCondition
### Properties
* **matchValue**: string[] (Required)
* **matchVariable**: 'Cookies' | 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestHeader' | 'RequestMethod' | 'RequestUri' | 'SocketAddr' (Required)
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode'[]

## FrontendEndpointLink
### Properties
* **id**: string

## ManagedRuleSetList
### Properties
* **managedRuleSets**: [ManagedRuleSet](#managedruleset)[]

## ManagedRuleSet
### Properties
* **exclusions**: [ManagedRuleExclusion](#managedruleexclusion)[]
* **ruleGroupOverrides**: [ManagedRuleGroupOverride](#managedrulegroupoverride)[]
* **ruleSetAction**: 'Block' | 'Log' | 'Redirect'
* **ruleSetType**: string (Required)
* **ruleSetVersion**: string (Required)

## ManagedRuleExclusion
### Properties
* **matchVariable**: 'QueryStringArgNames' | 'RequestBodyJsonArgNames' | 'RequestBodyPostArgNames' | 'RequestCookieNames' | 'RequestHeaderNames' (Required)
* **selector**: string (Required)
* **selectorMatchOperator**: 'Contains' | 'EndsWith' | 'Equals' | 'EqualsAny' | 'StartsWith' (Required)

## ManagedRuleGroupOverride
### Properties
* **exclusions**: [ManagedRuleExclusion](#managedruleexclusion)[]
* **ruleGroupName**: string (Required)
* **rules**: [ManagedRuleOverride](#managedruleoverride)[]

## ManagedRuleOverride
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect'
* **enabledState**: 'Disabled' | 'Enabled'
* **exclusions**: [ManagedRuleExclusion](#managedruleexclusion)[]
* **ruleId**: string (Required)

## PolicySettings
### Properties
* **customBlockResponseBody**: string
* **customBlockResponseStatusCode**: int
* **enabledState**: 'Disabled' | 'Enabled'
* **mode**: 'Detection' | 'Prevention'
* **redirectUrl**: string
* **requestBodyCheck**: 'Disabled' | 'Enabled'

## RoutingRuleLink
### Properties
* **id**: string

## SecurityPolicyLink
### Properties
* **id**: string

## Sku
### Properties
* **name**: 'Classic_AzureFrontDoor' | 'Premium_AzureFrontDoor' | 'Standard_AzureFrontDoor'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

