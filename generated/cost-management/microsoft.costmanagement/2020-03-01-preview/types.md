# Microsoft.CostManagement @ 2020-03-01-preview

## Resource Microsoft.CostManagement/costAllocationRules@2020-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CostAllocationRuleProperties](#costallocationruleproperties)
* **type**: 'Microsoft.CostManagement/costAllocationRules' (ReadOnly, DeployTimeConstant)

## CostAllocationRuleProperties
### Properties
* **createdDate**: string (ReadOnly)
* **description**: string
* **details**: [CostAllocationRuleDetails](#costallocationruledetails) (Required)
* **status**: 'Active' | 'NotActive' | 'Processing' (Required)
* **updatedDate**: string (ReadOnly)

## CostAllocationRuleDetails
### Properties
* **sourceResources**: [SourceCostAllocationResource](#sourcecostallocationresource)[]
* **targetResources**: [TargetCostAllocationResource](#targetcostallocationresource)[]

## SourceCostAllocationResource
### Properties
* **name**: string (Required)
* **resourceType**: 'Dimension' | 'Tag' (Required)
* **values**: string[] (Required)

## TargetCostAllocationResource
### Properties
* **name**: string (Required)
* **policyType**: 'FixedProportion' (Required)
* **resourceType**: 'Dimension' | 'Tag' (Required)
* **values**: [CostAllocationProportion](#costallocationproportion)[] (Required)

## CostAllocationProportion
### Properties
* **name**: string (Required)
* **percentage**: int (Required)

