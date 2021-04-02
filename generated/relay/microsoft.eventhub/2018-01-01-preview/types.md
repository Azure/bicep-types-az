# Microsoft.EventHub @ 2018-01-01-preview

## Resource Microsoft.EventHub/namespaces/networkRuleSets@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:12_properties](#schemas12properties): NetworkRuleSet properties
* **type**: 'Microsoft.EventHub/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant): The resource type

## schemas:12_properties
### Properties
* **defaultAction**: 'Allow' | 'Deny': Default Action for Network Rule Set.
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]: List of IpRules

## NWRuleSetIpRules
### Properties
* **action**: 'Allow': The IP Filter Action.
* **ipMask**: string: IP Mask

