# Microsoft.Network @ 2019-03-01

## Resource Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebApplicationFirewallPolicyProperties](#webapplicationfirewallpolicyproperties): Properties of the web application firewall policy.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/FrontDoorWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant): The resource type

## CustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' | string (Required): Describes what action to be applied when rule matches.
* **enabledState**: 'Disabled' | 'Enabled' | string: Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required): List of match conditions.
* **name**: string: Describes the name of the rule.
* **priority**: int (Required): Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
* **rateLimitDurationInMinutes**: int: Defines rate limit duration. Default is 1 minute.
* **rateLimitThreshold**: int: Defines rate limit threshold.
* **ruleType**: 'MatchRule' | 'RateLimitRule' | string (Required): Describes type of rule.

## CustomRuleList
### Properties
* **rules**: [CustomRule](#customrule)[]: List of rules

## FrontendEndpointLink
### Properties
* **id**: string: Resource ID.

## ManagedRuleGroupOverride
### Properties
* **ruleGroupName**: string (Required): Describes the managed rule group to override.
* **rules**: [ManagedRuleOverride](#managedruleoverride)[]: List of rules that will be disabled. If none specified, all rules in the group will be disabled.

## ManagedRuleOverride
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' | string: Describes the override action to be applied when rule matches.
* **enabledState**: 'Disabled' | 'Enabled' | string: Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified.
* **ruleId**: string (Required): Identifier for the managed rule.

## ManagedRuleSet
### Properties
* **ruleGroupOverrides**: [ManagedRuleGroupOverride](#managedrulegroupoverride)[]: Defines the rule group overrides to apply to the rule set.
* **ruleSetType**: string (Required): Defines the rule set type to use.
* **ruleSetVersion**: string (Required): Defines the version of the rule set to use.

## ManagedRuleSetList
### Properties
* **managedRuleSets**: [ManagedRuleSet](#managedruleset)[]: List of rule sets.

## MatchCondition
### Properties
* **matchValue**: string[] (Required): List of possible match values.
* **matchVariable**: 'Cookies' | 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestHeader' | 'RequestMethod' | 'RequestUri' | string (Required): Match variable to compare against.
* **negateCondition**: bool: Describes if the result of this condition should be negated.
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **selector**: string: Selector can used to match against a specific key from QueryString, PostArgs, RequestHeader or Cookies.
* **transforms**: 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string[]: List of transforms.

## PolicySettings
### Properties
* **customBlockResponseBody**: string: If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
* **customBlockResponseStatusCode**: int: If the action type is block, customer can override the response status code.
* **enabledState**: 'Disabled' | 'Enabled' | string: Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified.
* **mode**: 'Detection' | 'Prevention' | string: Describes if it is in detection mode or prevention mode at policy level.
* **redirectUrl**: string: If action type is redirect, this field represents redirect URL for the client.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebApplicationFirewallPolicyProperties
### Properties
* **customRules**: [CustomRuleList](#customrulelist): Describes custom rules inside the policy.
* **frontendEndpointLinks**: [FrontendEndpointLink](#frontendendpointlink)[] (ReadOnly): Describes Frontend Endpoints associated with this Web Application Firewall policy.
* **managedRules**: [ManagedRuleSetList](#managedrulesetlist): Describes managed rules inside the policy.
* **policySettings**: [PolicySettings](#policysettings): Describes settings for the policy.
* **provisioningState**: string (ReadOnly): Provisioning state of the policy.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status of the policy.

