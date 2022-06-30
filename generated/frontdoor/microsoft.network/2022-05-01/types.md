# Microsoft.Network @ 2022-05-01

## Resource Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2022-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebApplicationFirewallPolicyProperties](#webapplicationfirewallpolicyproperties): Properties of the web application firewall policy.
* **sku**: [Sku](#sku): The pricing tier of web application firewall policy. Defaults to Classic_AzureFrontDoor if not specified.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/FrontDoorWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant): The resource type

## CustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' | string (Required): Describes what action to be applied when rule matches.
* **enabledState**: 'Disabled' | 'Enabled' | string: Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required): List of match conditions.
* **name**: string: Describes the name of the rule.
* **priority**: int (Required): Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
* **rateLimitDurationInMinutes**: int: Time window for resetting the rate limit count. Default is 1 minute.
* **rateLimitThreshold**: int: Number of allowed requests per client within the time window.
* **ruleType**: 'MatchRule' | 'RateLimitRule' | string (Required): Describes type of rule.

## CustomRuleList
### Properties
* **rules**: [CustomRule](#customrule)[]: List of rules

## FrontendEndpointLink
### Properties
* **id**: string: Resource ID.

## ManagedRuleExclusion
### Properties
* **matchVariable**: 'QueryStringArgNames' | 'RequestBodyJsonArgNames' | 'RequestBodyPostArgNames' | 'RequestCookieNames' | 'RequestHeaderNames' | string (Required): The variable type to be excluded.
* **selector**: string (Required): Selector value for which elements in the collection this exclusion applies to.
* **selectorMatchOperator**: 'Contains' | 'EndsWith' | 'Equals' | 'EqualsAny' | 'StartsWith' | string (Required): Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to.

## ManagedRuleGroupOverride
### Properties
* **exclusions**: [ManagedRuleExclusion](#managedruleexclusion)[]: Describes the exclusions that are applied to all rules in the group.
* **ruleGroupName**: string (Required): Describes the managed rule group to override.
* **rules**: [ManagedRuleOverride](#managedruleoverride)[]: List of rules that will be disabled. If none specified, all rules in the group will be disabled.

## ManagedRuleOverride
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' | string: Describes the override action to be applied when rule matches.
* **enabledState**: 'Disabled' | 'Enabled' | string: Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified.
* **exclusions**: [ManagedRuleExclusion](#managedruleexclusion)[]: Describes the exclusions that are applied to this specific rule.
* **ruleId**: string (Required): Identifier for the managed rule.

## ManagedRuleSet
### Properties
* **exclusions**: [ManagedRuleExclusion](#managedruleexclusion)[]: Describes the exclusions that are applied to all rules in the set.
* **ruleGroupOverrides**: [ManagedRuleGroupOverride](#managedrulegroupoverride)[]: Defines the rule group overrides to apply to the rule set.
* **ruleSetAction**: 'Block' | 'Log' | 'Redirect' | string: Defines the rule set action.
* **ruleSetType**: string (Required): Defines the rule set type to use.
* **ruleSetVersion**: string (Required): Defines the version of the rule set to use.

## ManagedRuleSetList
### Properties
* **managedRuleSets**: [ManagedRuleSet](#managedruleset)[]: List of rule sets.

## MatchCondition
### Properties
* **matchValue**: string[] (Required): List of possible match values.
* **matchVariable**: 'Cookies' | 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestHeader' | 'RequestMethod' | 'RequestUri' | 'SocketAddr' | string (Required): Request variable to compare with.
* **negateCondition**: bool: Describes if the result of this condition should be negated.
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Comparison type to use for matching with the variable value.
* **selector**: string: Match against a specific key from the QueryString, PostArgs, RequestHeader or Cookies variables. Default is null.
* **transforms**: 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string[]: List of transforms.

## PolicySettings
### Properties
* **customBlockResponseBody**: string: If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
* **customBlockResponseStatusCode**: int: If the action type is block, customer can override the response status code.
* **enabledState**: 'Disabled' | 'Enabled' | string: Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified.
* **mode**: 'Detection' | 'Prevention' | string: Describes if it is in detection mode or prevention mode at policy level.
* **redirectUrl**: string: If action type is redirect, this field represents redirect URL for the client.
* **requestBodyCheck**: 'Disabled' | 'Enabled' | string: Describes if policy managed rules will inspect the request body content.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RoutingRuleLink
### Properties
* **id**: string: Resource ID.

## SecurityPolicyLink
### Properties
* **id**: string: Resource ID.

## Sku
### Properties
* **name**: 'Classic_AzureFrontDoor' | 'Premium_AzureFrontDoor' | 'Standard_AzureFrontDoor' | string: Name of the pricing tier.

## WebApplicationFirewallPolicyProperties
### Properties
* **customRules**: [CustomRuleList](#customrulelist): Describes custom rules inside the policy.
* **frontendEndpointLinks**: [FrontendEndpointLink](#frontendendpointlink)[] (ReadOnly): Describes Frontend Endpoints associated with this Web Application Firewall policy.
* **managedRules**: [ManagedRuleSetList](#managedrulesetlist): Describes managed rules inside the policy.
* **policySettings**: [PolicySettings](#policysettings): Describes settings for the policy.
* **provisioningState**: string (ReadOnly): Provisioning state of the policy.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status of the policy.
* **routingRuleLinks**: [RoutingRuleLink](#routingrulelink)[] (ReadOnly): Describes Routing Rules associated with this Web Application Firewall policy.
* **securityPolicyLinks**: [SecurityPolicyLink](#securitypolicylink)[] (ReadOnly): Describes Security Policy associated with this Web Application Firewall policy.

