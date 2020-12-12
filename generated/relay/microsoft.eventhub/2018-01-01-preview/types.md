# Microsoft.EventHub @ 2018-01-01-preview

## Resource Microsoft.EventHub/namespaces/networkRuleSets@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:12_properties
* **type**: 'Microsoft.EventHub/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant)

## schemas:12_properties
### Properties
* **defaultAction**: 'Allow' | 'Deny'
* **ipRules**: NWRuleSetIpRules[]

## NWRuleSetIpRules
### Properties
* **action**: 'Allow'
* **ipMask**: string

