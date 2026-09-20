# Microsoft.AzureTerraform @ 2026-09-01-preview

## Function exportTerraform (Microsoft.AzureTerraform@2026-09-01-preview)
* **Resource**: Microsoft.AzureTerraform
* **ApiVersion**: 2026-09-01-preview
* **Input**: [BaseExportModel](#baseexportmodel)
* **Output**: [TerraformOperationStatus](#terraformoperationstatus)

## BaseExportModel
* **Discriminator**: type

### Base Properties
* **excludeAzureResource**: string[]: Excludes specified Azure Resource Ids. Case-insensitive Azure Resource ID regular expression. Example: `["/subscriptions/[0-9a-f-]+/resourceGroups/my-rg.*"]`.
* **excludeTerraformResource**: string[]: Excludes specified Terraform resource types. Example: `["azurerm_virtual_network"]`.
* **fullProperties**: bool: Whether to output all non-computed properties in the generated Terraform configuration. If set to `false` empty-valued properties will be omitted from the configuration. Defaults to `true`.
* **includeExtensions**: ('diagnostic-settings' | 'locks' | 'role-assignments' | string)[]: Include extension resource types directly associated to the resources exported
* **includeManagedResource**: bool: Whether to include internal resources managed by Azure in the exported configuration. Defaults to `false`.
* **includeRoleAssignment**: bool: Whether to include role assignments assigned to the resources exported. Defaults to `false`. This is deprecated in favor of `includeExtensions` (with `role-assignments` specified).
* **maskSensitive**: bool: Mask sensitive attributes in the Terraform configuration. Defaults to `true`.
* **targetProvider**: 'azapi' | 'azurerm' | string: The target Azure Terraform provider. Defaults to `azurerm`.

### ExportQuery
#### Properties
* **authorizationScopeFilter**: 'AtScopeAboveAndBelow' | 'AtScopeAndAbove' | 'AtScopeAndBelow' | 'AtScopeExact' | string: The ARG Scope Filter parameter.
* **includeResourceGroup**: bool: Includes the resource group in the exported Terraform resources. Defaults to `false`.
* **namePattern**: string: The id prefix for the exported Terraform resources. Defaults to `res-`.
* **query**: string (Required): The ARG where predicate. Multiple predicates can be combined using `and` operator. Example: `resourceGroup =~ "my-rg" and type =~ "microsoft.network/virtualnetworks"`. The default ARG table is `Resources`, use 'table' property to query a different table.
* **recursive**: bool: Recursively includes child resources. Defaults to `false`.
* **table**: string: The ARG table name. Defaults to 'Resources'.
* **type**: 'ExportQuery' (Required): The parameter type

### ExportResource
#### Properties
* **includeResourceGroup**: bool: Includes the resource group in the exported Terraform resources. Defaults to `false`.
* **namePattern**: string: The id prefix for the exported Terraform resources. Defaults to `res-`.
* **recursive**: bool: Recursively includes child resources. Defaults to `false`.
* **resourceIds**: string[] (Required): The id(s) of the resource to be exported. Example: `["/subscriptions/12345678-1234-1234-1234-1234567890ab/resourceGroups/my-rg"].
* **resourceName**: string: The Terraform id of the exported resource. Only effective when `resourceIds` contains only one item. Defaults to `res-0`.
* **resourceType**: string: The Terraform resource type to map to. Only effective when `resourceIds` has one item. Example: `azurerm_virtual_network`. Automatic type mapping will be performed if not provided.
* **type**: 'ExportResource' (Required): The parameter type

### ExportResourceGroup
#### Properties
* **namePattern**: string: The id prefix for the exported Terraform resources. Defaults to `res-`.
* **resourceGroupName**: string (Required): The name of the resource group to be exported.
* **type**: 'ExportResourceGroup' (Required): The parameter type


## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ExportResult
### Properties
* **configuration**: string: The exported Terraform HCL configuration.
* **errors**: [ErrorDetail](#errordetail)[]: A list of errors encountered during export operation.
* **import**: string: The Terraform import blocks for the configuration, necessary for managing existing Azure resources in Terraform.
* **skippedResources**: string[]: A list of Azure resources which could not be exported to Terraform. The most common cause is lack of Terraform provider support. Change the provider type to `azapi` for bigger set of supported resources.

## TerraformOperationStatus
### Properties
* **endTime**: string (ReadOnly): Operation complete time
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Errors that occurred if the operation ended with Canceled or Failed status
* **id**: string (Required): The unique identifier for the operationStatus resource
* **name**: string (ReadOnly): The name of the  operationStatus resource
* **percentComplete**: int (ReadOnly): The progress made toward completing the operation
* **properties**: [ExportResult](#exportresult) (ReadOnly): RP-specific properties for the operationStatus resource, only appears when operation ended with Succeeded status
* **startTime**: string (ReadOnly): Operation start time
* **status**: 'Canceled' | 'Failed' | 'Succeeded' | string (Required, ReadOnly): The operation status

