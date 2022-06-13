# Microsoft.CostManagement @ 2020-03-01-preview

## Resource Microsoft.CostManagement/costAllocationRules@2020-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CostAllocationRuleProperties](#costallocationruleproperties): Cost allocation rule properties
* **type**: 'Microsoft.CostManagement/costAllocationRules' (ReadOnly, DeployTimeConstant): The resource type

## CostAllocationProportion
### Properties
* **name**: string (Required): Target resource for cost allocation
* **percentage**: int (Required): Percentage of source cost to allocate to this resource. This value can be specified to two decimal places and the total percentage of all resources in this rule must sum to 100.00.

## CostAllocationRuleDetails
### Properties
* **sourceResources**: [SourceCostAllocationResource](#sourcecostallocationresource)[]: Source resources for cost allocation. At this time, this list can contain no more than one element.
* **targetResources**: [TargetCostAllocationResource](#targetcostallocationresource)[]: Target resources for cost allocation. At this time, this list can contain no more than one element.

## CostAllocationRuleProperties
### Properties
* **createdDate**: string (ReadOnly): Time at which the rule was created. Rules that change cost for the same resource are applied in order of creation.
* **description**: string: Description of a cost allocation rule.
* **details**: [CostAllocationRuleDetails](#costallocationruledetails) (Required): Resource information for the cost allocation rule
* **status**: 'Active' | 'NotActive' | 'Processing' | string (Required): Status of the rule
* **updatedDate**: string (ReadOnly): Time at which the rule was last updated.

## SourceCostAllocationResource
### Properties
* **name**: string (Required): If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag
* **resourceType**: 'Dimension' | 'Tag' | string (Required): Type of resources contained in this cost allocation rule
* **values**: string[] (Required): Source Resources for cost allocation. This list cannot contain more than 25 values.

## TargetCostAllocationResource
### Properties
* **name**: string (Required): If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag
* **policyType**: 'FixedProportion' | string (Required): Method of cost allocation for the rule
* **resourceType**: 'Dimension' | 'Tag' | string (Required): Type of resources contained in this cost allocation rule
* **values**: [CostAllocationProportion](#costallocationproportion)[] (Required): Target resources for cost allocation. This list cannot contain more than 25 values.

