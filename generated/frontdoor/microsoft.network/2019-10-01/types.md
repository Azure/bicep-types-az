# Microsoft.Network @ 2019-10-01

## Resource Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebApplicationFirewallPolicyProperties](#webapplicationfirewallpolicyproperties)
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
* **ruleSetType**: string (Required)
* **ruleSetVersion**: string (Required)

## ManagedRuleExclusion
### Properties
* **matchVariable**: 'QueryStringArgNames' | 'RequestBodyPostArgNames' | 'RequestCookieNames' | 'RequestHeaderNames' (Required)
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

