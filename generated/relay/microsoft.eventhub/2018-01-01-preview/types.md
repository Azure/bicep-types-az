# Microsoft.EventHub @ 2018-01-01-preview

## Resource Microsoft.EventHub/namespaces/networkRuleSets@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [schemas:12_properties](#schemas12properties)
* **type**: 'Microsoft.EventHub/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant)

## schemas:12_properties
### Properties
* **defaultAction**: 'Allow' | 'Deny'
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]

## NWRuleSetIpRules
### Properties
* **action**: 'Allow'
* **ipMask**: string

